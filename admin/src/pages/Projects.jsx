import { Link } from "react-router-dom";
import { Loading, useFetch } from "../components/exportComp.js";
import myFetch from "../utils/myFetch.js";
import { useContext } from "react";
import AppContext from "../context/AppContext.jsx";

function Projects() {
  const { navigate } = useContext(AppContext);
  function returnFn() {
    const fetchDetails = {
      method: "get",
      endpoint: "/api/v2/projects/list",
      body: "",
      id: "",
    };
    return myFetch(fetchDetails);
  }
  const { isError, isLoading, data, refetch } = useFetch("projects", returnFn);

  if (isLoading) return <Loading />;

  if (isError)
    return (
      <div className="h-screen grid place-items-center text-center">
        <div>
          <h2 className="heading3">Error fetching projects</h2>
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
  if (!data.projects || data.projects.length < 1) {
    return (
      <section className="h-screen grid place-items-center">
        <div>
          <h2 className="heading3">No Projects Available</h2>
          <p className="text-gray-800 heading4 text-center">
            Keep up the flame Boss!
          </p>
          <button
            onClick={() => navigate("/add-project")}
            className="bg-black text-white flex mx-auto mt-4 px-4 py-2 rounded hover:bg-black/90 cursor-pointer trans"
          >
            Add Project
          </button>
        </div>
      </section>
    );
  }

  return (
    <div className="min-h-screen mt-8">
      <h1 className="heading3 mano text-center">PROJECTS</h1>
      <table className="border rounded border-gray-300 mx-auto w-sm lg:w-xl text-sm mt-8 ">
        <thead>
          <tr className="flex gap-4 justify-around py-2 bg-gray-200">
            <th className="text-start ">S/N</th>
            <th>PROJECT NAME</th>
            <th>CATEGORY</th>
            <th>DATE</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.projects.map((project, index) => (
            <tr
              key={index}
              className="flex gap-4 text-gray-600 hover: hover:bg-accent/20 justify-around my-2 bg-gray-50  py-2 items-center"
            >
              <td>{index + 1}</td>
              <td>{project.projectName}</td>
              <td>{project.category}</td>
              <td className="text-accent">
                {new Date(project.createdAt).toLocaleDateString("en-GB")}
              </td>
              <td
                onClick={() => navigate(`/view/${project._id}`)}
                className="bg-black px-4 py-1 rounded text-white hover:opacity-80 trans cursor-pointer"
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

export default Projects;
