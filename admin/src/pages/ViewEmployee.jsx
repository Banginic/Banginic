import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Loading, Back } from "../components/exportComp";
import { Edit, Trash } from "lucide-react";
import AppContext from "../context/AppContext";
import myFetch from "../utils/myFetch";
import { useMutation, useQuery } from "@tanstack/react-query";
import { person_Placeholder } from "../assets/assest";
import { toast } from "react-toastify";
import { queryClient } from "../main";

function ViewEmployee() {
  const { navigate } = useContext(AppContext);
  const { employeeId } = useParams();

  function returnFn() {
    const fetchDetails = {
      method: "get",
      endpoint: "/api/v2/employees/single",
      body: "",
      id: employeeId,
    };
    return myFetch(fetchDetails);
  }
  function mutationFn() {
    const fetchDetails = {
      method: "delete",
      endpoint: "/api/v2/employees/delete",
      body: "",
      id: employeeId,
    };
    return myFetch(fetchDetails);
  }
  const {
    isPending,
    isError: error,
    mutate,
  } = useMutation({
    mutationFn,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["employee"] });
      const timer = setTimeout(navigate("/employee"), 1000);
      return () => clearTimeout(timer);
    },
    onError: (error) => {
      toast.error("Error deleting employee");
      console.log(error);
    },
  });

  const { isLoading, isError, data, refetch } = useQuery({
    queryKey: [`Employee: ${employeeId}`],
    queryFn: returnFn,
  });

 if (isError || !data?.success )
    return (
      <div className="h-screen grid place-items-center text-center">
        <div>
          <h2 className="heading3">Error fetching employee</h2>
          <p>Please try again later</p>
          <button
            className="bg-gray-200 hover:bg-gray-300 mt-1 px-4 py-1 rounded cursor-pointer"
            onClick={() => refetch()}
          >
            Retry
          </button>
        </div>
      </div>
    );
  const { fullName, position, qualification, motivation, socialLinks, photo } =
    data.employee;
  const myArray = Object.entries(socialLinks).map(([name, url]) => ({
    name,
    url,
  }));

  if (isLoading || isPending) return <Loading />;

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
    <div className="min-h-screen relative mt-12">
      <div className="absolute left-8 2xl:left-20 top-0">
        <Back link={"/employee"} />
      </div>
      <h2 className="heading4 mano text-center">VIEW EMPLOYEE</h2>
      <div className="flex flex-col md:flex-row bg-indigo-50/50 md:w-[90%] rounded-sm md:mx-auto p-5 lg:px-24 2xl:px-52 gap-8 md:justify-center mt-8">
        <div className="w-sm lg:w-lg h-[92] mx-auto md:mx-0 grid place-items-center bg-gray-200/50 shadow rounded overflow-hidden">
          <img
            className="h-92 w-sm rounded-sm hover:scale-110 trans cursor-pointer object-cover"
            height={50}
            src={photo ? photo : person_Placeholder}
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
            <button className="text-green-700 text-nowrap flex gap-2 items-center bg-green-200 px-4 py-2 rounded text-sm hover:bg-green-300 trans cursor-pointer">
              <Edit size={18} />
              Edith Contract
            </button>
            <button
              onClick={() => mutate()}
              className="text-red-700 flex gap-2 text-nowrap items-center bg-red-200 px-4 py-2 rounded text-sm hover:bg-red-300 trans cursor-pointer"
            >
              <Trash size={18} />
              Terminate Contract
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewEmployee;
