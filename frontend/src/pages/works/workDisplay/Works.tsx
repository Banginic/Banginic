import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { placeholdeImage, skillsLinks } from "../../../assets/assets";
import clsx from "clsx";
import { motion } from "framer-motion";
import { AppContext } from "../../../context/AppProvider";
import { useTitle, Loading, RecentProjectSkeleton } from '../../../conponents/exportComp'
import useFetch from "../../../hooks/useFetch";
import myFetch from "../../../libs/myFetch";



interface Project{
  _id:string;
  approach: string;
  category: string;
  createdAt: Date;
  description: string;
  designer:string;
  photos: string[] | [];
  projectName: string;
  story:string;
  updatedAt:string;
  url:string

}
interface FetchProps{
  message: string;
  success: boolean;
  statusCode: number;
  projects: Project[]
}

function Works() {
  const [ selectedFilter, setSelectedFilter ] = useState('all')
  const [ projects, setProjects ] = useState< Project[] | null >(null)

   function fetchFunction() {
    const fetchDetails = {
      method: "get",
      endpoint: "/api/v2/projects/list",
      body: "",
      id: "",
    };
    return myFetch<FetchProps>(fetchDetails);
  }
  const { isLoading, isError, data, refetch } = useFetch(
    fetchFunction,
    "projects"
  );


  useTitle({ title: 'Projects'})
 const appContext = useContext(AppContext)


  function handleActiveTabs({ isActive }: { isActive: boolean }) {
    const active = isActive
      ? appContext?.theme === "dark"
        ? "bg-accent/60 text-white"
        : "bg-accent text-white  "
      : "bg-accent/10";
    return clsx(
      "text-sm sm:hover:bg-accent/40 md:hover:text-accent rounded-lg trans snap-start px-6 py-1.5",
      active
    );
  }

  
  // Set seletcted category
 useEffect(() => {
  function changeSelection(){
    if(selectedFilter !== 'All'){
      const filter = data?.projects.filter(project => project.category === selectedFilter)
      return setProjects(filter)
    }
    return setProjects(data.projects)
  }
  if( data){ 
    changeSelection()
  }
  return () => {}
  
 },[selectedFilter]);

  if (isLoading) return <RecentProjectSkeleton />;

  if (isError || !data?.success )
    return (
      <div className="h-screen grid place-items-center text-center">
        <div>
          <h2 className="heading3">Error fetching projects</h2>
          <p>Please try again later</p>
          <button
            className="bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 mt-1 px-4 py-1 rounded cursor-pointer"
            onClick={() => refetch()}
          >
            Retry
          </button>
        </div>
      </div>
    );
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className={`min-h-screen trans `}
    >
      <div className=" text-center lg:w-[80%] mx-auto  ">
        <h1 className=" heading3 mano">OUR PROJECTS</h1>
        <p className="text-gray-600 dark:text-white/80">
          Each project we take on is driven by a deep understanding of our
          clients’ goals, ensuring that we create solutions that have a lasting
          impact.
        </p>
      </div>

      <section
        className="overflow-x-scroll hide-scrollbar
      snap-x snap-mandatory
       md:overflow-hidden my-8 md:w-[90%] lg:w-[60%] mx-1.5 md:mx-auto bg-gray-200/50 dark:bg-gray-800/40  rounded-lg"
      >
        <ul
          className="justify-between py-3 gap-4 flex items-center 
       m-auto p-3 rounded-full "
        >
          {skillsLinks.map((link, index) => {
            const name = link.name;
            const pathName = link.path;
            return (
              <NavLink
              onClick={() =>setSelectedFilter(name)}
               key={index} to={pathName} className={handleActiveTabs}>
                {name}
              </NavLink>
            );
          })}
        </ul>
      </section>
       {/* PROJECTS */}
      <div className="grid grid-cols-1 mt-12 md:grid-cols-2 xl:grid-cols-3 md:gap-4 lg:gap-12 justify-self-center-safe 2xl:gap-24">
        {projects && projects.map((project) => (
          <article
            key={project._id}
            className="rounded-lg shadow-accent/50  trans mx-8 md:w-[350px] lg:w-[360px] 2xl:w-[400px] group  hover:shadow-lg overflow-hidden my-8"
          >
            <img
              src={
                project.photos.length > 0 ? project.photos[0] : placeholdeImage
              }
              className="min-w-full  h-60 xl:h-52 2xl:h-60 outline-none bg-gray-20 group-hover:scale-105 trans"
              alt="Project photo"
            />
            <div className="p-4 bg-white dark:bg-gray-900/50">
              <h2 className="font-bold text-xl mt-4 mb-2">
                {project.projectName}
              </h2>
              <p className="text-gray-500">{project.description}</p>
              <button
                onClick={() =>
                  appContext?.navigate(`/workDetails/${project._id}`)
                }
                title="View Project"
                className="my-4 text-bold md:w-30 text-nowrap md:hover:w-35 shadow-md border border-gray-500 px-5 text-sm rounded-full py-1.5 flex items-center gap-2 cursor-pointer trans hover:bg-black hover:text-white"
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
