import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import { Loading, useFetch } from "../components/exportComp";
import { Link } from "react-router-dom";
import fetchEmployee from "../utils/fetchEmployee";

function Employee() {
  const { navigate } = useContext(AppContext);
  const { isError, isLoading, data, refetch } = useFetch(
    "employee",
    fetchEmployee
  ); 
   console.log(data);
 
  if (isLoading) return <Loading />;

  if (isError)
    return (
      <div className="grid h-screen place-items-center text-center">
        <div>
          <h2 className="heading4">Error fetching data</h2>
          <p>Please try again later</p>
          <button className="cursor-pointer hover:bg-slate-300 px-4 py-1 rounded trans" onClick={() => refetch()}>Retry</button>
        </div>
      </div>
    );

  if (isLoading) return <Loading />;
  if (data.employees && data.employees.length < 1)
    return (
      <div className="h-screen grid place-items-center">
        <div>
          <h2 className="heading3">{data.error}</h2>
          <p className="heading4 text-gray-800">Please Hire Boss!</p>
          <button
            onClick={() => navigate("/add-employee")}
            className="px-4 py-1 mt-8 border gap-1.5 text-sm items-center rounded mx-auto bg-black hover:opacity-85 text-neutral-500 trans cursor-pointer flex"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="gray"
            >
              <path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
            </svg>
            Add Employee
          </button>
        </div>
      </div>
    );

  return (
    <div className="h-screen mt-12">
      <h2 className="heading3 mano text-center">EMPLOYEES</h2>
      <button
        onClick={() => navigate("/add-employee")}
        className="px-4 py-1 mt-8 border gap-1.5 text-sm items-center rounded mx-auto hover:bg-black text-neutral-500 trans cursor-pointer flex"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="gray"
        >
          <path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
        </svg>
        Add Employee
      </button>
      <table className="w-sm lg:w-xl border mx-auto mt-4 text-sm table-fixed ">
        <thead>
          <tr className="flex justify-around bg-gray-100 py-1">
            <th className="text-start ">S/N</th>
            <th>FULL NAME</th>
            <th>POSITON</th>
            <th>HIRE DATE</th>
          </tr>
        </thead>
        <tbody>
          {data.employees &&
            data.employees.map((employee, index) => (
              <Link
                className="bg-gray-50 hover:bg-gray-100"
                key={index}
                to={`/view-employee/${employee._id}`}
              >
                <tr className="flex justify-between px-2 py-3 my-1 bg-gray-50 hover:bg-gray-300">
                  <td>{index + 1}</td>
                  <td>{employee.fullName}</td>
                  <td>{employee.position}</td>
                  <td>{new Date(employee.hiredDate).toLocaleDateString()} </td>
                </tr>
              </Link>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Employee;
