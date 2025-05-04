import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";
import { Loading } from "../components/exportComp.js";
import axios from "axios";
import { toast } from "react-toastify";

function Projects() {
  const { baseUrl, projects, setProjects, token } = useContext(AppContext);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // fetch projects
  async function fetchProjects() {
    setError("");
    setLoading(true);
    try {
      const { data } = await axios.get(baseUrl + "/api/v2/projects/list", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const { message, success, projects } = data;
      if (!success) {
        return setError(message);
      }
      toast.success(message);
      setProjects(projects);
    } catch (ex) {
      setError(ex.response.data.message);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchProjects();
    return () => {};
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  if (!projects || projects.length < 1) {
    return (
      <section className="h-screen grid place-items-center">
        <div>
          <h2 className="heading3">{error}</h2>
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
          {projects.map((project, index) => (
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
