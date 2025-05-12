import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import { Loading, useFetch } from "../components/exportComp";
import myFetch from "../utils/myFetch";

function Employee() {

   async function returnFn() {
    const endpoint = "/api/v2/employees/list";
    return myFetch({ method: "get", endpoint });
   }
  const { navigate, } = useContext(AppContext);
  const { isError, isLoading, data, refetch } = useFetch(
    "employee",
    returnFn
  );

  if (isLoading) return <Loading />;

  if (isError || !data) {
    return (
      <div className="grid h-screen place-items-center text-center">
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
  }
  

  if (data.employees && data.employees.length < 1)
    return (
      <div className="h-screen grid place-items-center">
        <div>
          <h2 className="heading3">{data.error}</h2>
          <p className="heading4 text-gray-800">Please Hire Boss!</p>
          <button
            onClick={() => navigate("/add-employee")}
            className="px-4 py-1.5 mt-8 border gap-1.5 text-sm items-center rounded mx-auto bg-black hover:opacity-85 text-neutral-200 trans cursor-pointer flex"
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
            Hire employee
          </button>
        </div>
      </div>
    );

  return (
    <div className="h-screen mt-12 rounded w-s bg-accent/10 lg:w-4xl 2xl:w-3xl mx-auto ">
      <h2 className="heading3 mano text-center mt-4">EMPLOYEES</h2>
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
      <table className="w-s lg:w-xl 2xl:w-2xl border border-gray-300 mx-auto mt-8 text-sm table-fixed bg-gray-50 ">
        <thead>
          <tr className="flex justify-around bg-gray-200 py-2">
            <th className="text-start ">S/N</th>
            <th>FULL NAME</th>
            <th>POSITON</th>
            <th>HIRE DATE</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.employees &&
            data.employees.map((employee, index) => (
              <tr
                key={index}
                className="flex justify-between items-center px-2 py-3 my-2 "
              >
                <td>{index + 1}</td>
                <td>{employee.fullName}</td>
                <td>{employee.position}</td>
                <td>{new Date(employee.hiredDate).toLocaleDateString()} </td>
                <td
                  onClick={() => navigate(`/view-employee/${employee._id}`)}
                  className="px-4 text-sm bg-green-300 hover:bg-green-200 trans cursor-pointer text-green-700 rounded py-1.5"
                >
                  View
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Employee;
