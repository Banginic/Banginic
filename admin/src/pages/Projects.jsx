import { Link } from "react-router-dom";
import { Loading, useFetch } from "../components/exportComp.js";
import fetchProjects from "../utils/fetchProjects.js";

function Projects() {
  const { isError, isLoading, data, refetch } = useFetch(
    "Projects",
    fetchProjects
  );

  if (isLoading) return <Loading />;

  if (isError)
    return (
      <div className="grid place-self-center">
        <div>
          <h2 className="heading3">Error fetching data</h2>
          <p>Please try again later</p>
          <button onClick={() => refetch()}>Retry</button>
        </div>
      </div>
    );
  if (!data.projects || data.projects.length < 1) {
    return (
      <section className="h-screen grid place-items-center">
        <div>
          <h2 className="heading3"></h2>
          <p className="text-gray-800 heading4 text-center">
            Keep up the flame Boss!
          </p>
        </div>
      </section>
    );
  }
  return (
    <div className="min-h-screen mt-12">
      <h1 className="heading3 mano text-center">PROJECTS</h1>
      <table className="w-sm lg:w-xl border mx-auto mt-8 text-sm table-fixed">
        <thead>
          <tr className="flex justify-around bg-gray-100 py-1">
            <th className="text-start ">S/N</th>
            <th>PROJECT NAME</th>
            <th>CATEGORY</th>
            <th>DATE</th>
          </tr>
        </thead>
        <tbody>
          {data.projects.map((project, index) => (
            <Link
              className="bg-gray-50 hover:bg-gray-100"
              key={index}
              to={project._id}
            >
              <tr className="flex justify-between px-2 py-3 my-1 bg-gray-50 hover:bg-gray-300">
                <td>{index + 1}</td>
                <td>{project.projectName}</td>
                <td>{project.category}</td>
                <td>{project.createAt}</td>
              </tr>
            </Link>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Projects;
