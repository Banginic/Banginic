import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { Loading } from "../components/exportComp";
import fetchEmployee from "../utils/fetchEmployee";
import { Edit, Trash  } from "lucide-react";
import useMutate from "../hooks/useMutate";
import deleteEmployee from "../utils/deleteEmployee";
import AppContext from "../context/AppContext";

function ViewEmployee() {
const { navigate} =  useContext(AppContext)
  const { employeeId } = useParams();
  
  const { isSuccess, error, isPending, mutate} = useMutate(deleteEmployee, employeeId)
 
  if(isSuccess){
    navigate('/employee')
  }

  const { isLoading, isError, data, refetch } = useFetch(
    `Employee_id: ${employeeId}`,
    fetchEmployee,
    employeeId
  );
  if (!data) return null;
  const { fullName, position, qualification, motivation, socialLinks, photo } =
    data.employee;
  const myArray = Object.entries(socialLinks).map(([name, url]) => ({
    name,
    url,
  }));

  if (isLoading || !data || isPending) return <Loading />;

  if (isError || error)
    return (
      <div className="grid min-h-screen place-items-center text-center">
        <div>
          <h2 className="heading4">Error fetching data</h2>
          <p>Please try again later</p>
          <button
            className="cursor-pointer hover:bg-slate-300 px-4 py-1 rounded trans"
            onClick={() => refetch()}
          >
            Retry
          </button>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen mt-12">
      <h2 className="heading4 mano text-center">VIEW EMPLOYEE</h2>
      <div className="flex flex-col md:flex-row p-5 md:justify-around mt-8">
        <div className="w-sm lg:w-lg h-[92] mx-auto md:mx-0  rounded overflow-hidden">
          <img
            className="h-92 w-sm rounded-sm hover:scale-110 trans cursor-pointer object-cover"
            height={50}
            src={photo}
            alt={fullName}
          />
        </div>
        <div className="border border-gray-300 p-8 w-sm lg:w-xl mx-auto mt-12 lg:mt-0 rounded-sm text-cente pt-12">
          <div className="px-4">
            <h3 className="heading4 mano">{fullName.toUpperCase()}</h3>
            <p className="flex flex-col mt-1">
              <span className="text-neutral-500">Position</span>
              <span aria-label="Position" className="text-accent">
                {position}
              </span>
            </p>
            <p className="flex flex-col mt-1">
              <span className="text-neutral-500">Qualification</span>
              <span aria-label="Qualification" className="">
                {qualification}
              </span>
            </p>
            <p className="flex flex-col mt-1">
              <span className="text-neutral-500">Motivation</span>
              <span aria-label="motivation" className="">
                {motivation}
              </span>
            </p>
          </div>
          <div className="mt-8 bg-gray-100 p-4 rounded">
            {myArray.map((link) => (
              <p key={link.name} className="flex gap-4">
                <span className="text-neutral-500 w-18">
                  {link.name.slice(0, 1).toUpperCase() + link.name.slice(1)}:
                </span>
                <a
                  target="blank"
                  title="Visit page"
                  className="text-indigo-500 hover:underline trans"
                  href={link.url}
                >
                  {link.url}
                </a>
              </p>
            ))}
          </div>
          <div className="flex gap-4 mt-4">
            <button className="text-green-700 text-nowrap flex gap-2 items-center bg-green-200 px-4 py-1 rounded text-sm hover:bg-green-300 trans cursor-pointer">
              <Edit size={18} />
              Edith Contract
            </button>
            <button
            onClick={() => mutate()}
             className="text-red-700 flex gap-2 text-nowrap items-center bg-red-200 px-4 py-1 rounded text-sm hover:bg-red-300 trans cursor-pointer">
              <Trash  size={18}/>
              Terminate Contract
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewEmployee;
