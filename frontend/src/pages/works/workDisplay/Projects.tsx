import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { placeholdeImage, skillsLinks } from "../../../assets/assets";
import clsx from "clsx";
import { motion } from "framer-motion";
import { AppContext } from "../../../context/AppProvider";
import { RecentProjectSkeleton } from "../../../conponents/exportComp";
import myFetch from "../../../libs/myFetch";
import type { ProjectTypes, Project } from "../../../models/types";
import { useQuery } from "@tanstack/react-query";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Works() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [projects, setProjects] = useState<Project[] | null>(null);
  const appContext = useContext(AppContext);

  function fetchFunction() {
    const fetchDetails = {
      method: "get",
      endpoint: "/api/v2/projects/list",
      body: "",
      id: "",
    };
    return myFetch<ProjectTypes>(fetchDetails);
  }

  const { isLoading, data, isError, refetch } = useQuery<ProjectTypes>({
    queryKey: ["projects"],
    queryFn: fetchFunction,
  });

  // useTitle({ title: 'Projects'}

  function handleActiveTabs({ isActive }: { isActive: boolean }) {
    const active = isActive
        ? "bg-pink-400 text-white"
        : "bg-accent/20 hover:bg-accent/40 text-white  "
   
    return clsx(
      "rounded-lg trans snap-center px-6 py-3",
      active
    );
  }

  // Set seletcted category
  useEffect(() => {
    function changeSelection() {
      if (data?.projects && selectedFilter !== "All") {
        const filter = data?.projects.filter(
          (project) => project.category === selectedFilter
        );
        return setProjects(filter);
      }
      if (data?.projects) {
        return setProjects(data?.projects);
      }
    }
    if (data?.projects) {
      changeSelection();
    }
    return () => {};
  }, [selectedFilter]);

  if (isLoading) return <RecentProjectSkeleton />;

  if (isError)
    return (
      <div className="h-screen grid place-items-center text-center">
        <div>
          <h2 className="heading3">Error fetching projects</h2>
          <p>Please try again later</p>
          <button
            className="border mt-1 px-4 py-1 rounded cursor-pointer"
            onClick={() => refetch()}
          >
            Retry
          </button>
        </div>
      </div>
    );
  if (!data?.projects || data?.projects.length < 1)
    return (
      <div className="h-screen grid place-items-center text-center">
        <div>
          <h2 className="heading3">No Projects</h2>
          <p>Please try again later</p>
        </div>
      </div>
    );

  const result = projects || data?.projects;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className={`min-h-screen trans `}
    >
      <div className=" text-center lg:w-[80%] mx-auto  ">
        <h1 className=" text-4xl md:text-5xl font-bold bg-gradient-to-r mb-2 from-accent via-pink-400 to-blue-400 bg-clip-text text-transparent montserrat text-center">OUR PROJECTS</h1>
        <p className="max-w-xl text-center mx-auto text-[18px] px-2">
          Each project we take on is driven by a deep understanding of our
          clients’ goals, ensuring that we create solutions that have a lasting
          impact.
        </p>
      </div>

      <section
        className="overflow-x-scroll hide-scrollbar
      snap-x snap-mandatory
       md:overflow-hidden  my-8 mx-auto w-[95%] lg:w-[60%]  md:mx-auto bg-white/20 backdrop:blur-sm rounded-lg "
      >
        <ul
          className="justify-around md:justify-between py-2 gap-4 flex items-center  mx-auto
       m-auto p-3"
        >
          {skillsLinks.map((link, index) => {
            const name = link.name;
            const pathName = link.path;
            return (
              <NavLink
                onClick={() => setSelectedFilter(name)}
                key={index}
                to={pathName}
                className={handleActiveTabs}
              >
                {name}
              </NavLink>
            );
          })}
        </ul>
      </section>

      {/* PROJECTS */}
      <div className="grid grid-cols-1 mt-12 md:grid-cols-2 xl:grid-cols-3 md:gap-4 lg:gap-12 justify-self-center-safe 2xl:gap-24">
        {result.map((project) => (
          <article
            key={project._id}
            className="rounded-lg shadow-accent/50 w-[95%] mx-auto trans  md:w-[350px] lg:w-[360px] 2xl:w-[400px] group md:h-[450px]  hover:shadow-lg overflow-hidden my-8"
          >
            <LazyLoadImage
              className="min-w-full  h-60 xl:h-52 2xl:h-60 outline-none bg-gray-20 group-hover:scale-105 trans"
              alt={placeholdeImage}
              effect="blur"
              aria-label={`Project photo`}
               loading="lazy"
              wrapperProps={{
                style: { transition: "1s" },
              }}
              src={
                project.photos.length > 0 ? project.photos[0] : placeholdeImage
              }
            />
            <div className="p-4 bg-black/20 backdrop:blur-lg h-full ">
              <h2 className="font-bold text-xl mt-4 mb-2 text-">
                {project.projectName}
              </h2>
              <p className="text-gray-200">{project.description}</p>
              <button
                onClick={() =>
                  appContext?.navigate(`/workDetails/${project._id}`)
                }
                title="View Project"
                className="my-4 text-bold bg-white text-black md:w-30 text-nowrap md:hover:w-35 shadow-md  px-5 text-sm rounded-lg py-2 flex items-center gap-2 cursor-pointer trans hover:bg-black hover:text-white"
              >
                <p>View Project</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  className="rotate-180 size-4 fill-accent"
                >
                  <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
                </svg>{" "}
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* <div className={`${styles.works_outlet}`}>
        <Outlet context={params} />
      </div> */}
    </motion.div>
  );
}

export default Works;
