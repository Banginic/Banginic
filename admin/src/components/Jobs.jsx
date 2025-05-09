import React, { useContext } from "react";
import AppContext from "../context/AppContext";

function Jobs() {
  const { navigate } = useContext(AppContext);
  const jobs = [
    {
      jobId: 123,
      title: "Junior software Deve",
      location: "Douala",
      postedDate: "25/04/2025",
      decription:
        "lorem sdfhdasf hjdafdas aodfhadsof adfhdsfh dsafdsfohdsf ds dsafohdasf ds dsofhdsaof dsf hdsao dsfhjdsaoifh dss odsa fdsf dsfopidsafj dsf dsfojpdsf dsfjdspf djsfpjdsf pjdspf jdsafpdsf pd",
    },
    {
      jobId: 1234,
      title: "Junior software Deve",
      location: "Douala",
      postedDate: "25/04/2025",
      decription:
        "lorem sdfhdasf hjdafdas aodfhadsof adfhdsfh dsafdsfohdsf ds dsafohdasf ds dsofhdsaof dsf hdsao dsfhjdsaoifh dss odsa fdsf dsfopidsafj dsf dsfojpdsf dsfjdspf djsfpjdsf pjdspf jdsafpdsf pd",
    },
    {
      jobId: 12345,
      title: "Junior software Deve",
      location: "Douala",
      postedDate: "25/04/2025",
      decription:
        "lorem sdfhdasf hjdafdas aodfhadsof adfhdsfh dsafdsfohdsf ds dsafohdasf ds dsofhdsaof dsf hdsao dsfhjdsaoifh dss odsa fdsf dsfopidsafj dsf dsfojpdsf dsfjdspf djsfpjdsf pjdspf jdsafpdsf pd",
    },
  ];

  if (jobs.length < 1)
    return (
      <div className="mt-8 min-w-sm lg:w-2xl mx-auto">
        <div>
          <h3 className="heading4 text-center">No Job Availble </h3>
          <p className="text-center">Post a Job advert</p>
        </div>
      </div>
    );
  return (
    <div className="mt-8 min-w-sm lg:w-2xl mx-auto">
      <div>
        <button
          onClick={() => navigate("/job-form")}
          className="px-6 cursor-pointer mx-4 py-2 rounded-sm  my-4 bg-green-200 text-green-800 hover:bg-green-300 trans"
        >
          Post job
        </button>
        <h3 className=" text-xl mano text-indigo-400">Available Jobs</h3>
        <table className="min-w-[95%] lg:w-2xl border border-gray-300 mx-auto text-sm">
          <thead>
            <tr className="flex gap-4 justify-around py-2">
              <th>SN</th>
              <th>TITLE</th>
              <th>LOCATION</th>
              <th>POSTED DATE</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, index) => (
              <tr
                key={index}
                className="flex gap-4 justify-around py-1 cursor-pointer  my-1 bg-gray-50"
              >
                <td>{index + 1}</td>
                <td>{job.title}</td>
                <td>{job.location}</td>
                <td>{job.postedDate}</td>
                <td
                  onClick={() => navigate(`/view-job/${job.jobId}`)}
                  className="bg-gray-200 hover:opacity-80 cursor-pointer text-gray-700 px-4 py-1 rounded"
                >
                  View
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Jobs;
