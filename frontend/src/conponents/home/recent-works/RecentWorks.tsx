
import { motion } from "framer-motion";
import { image2 } from "../../../assets/assets";
import styles from "./recent_works.module.css";
import { Link } from "react-router-dom";

function RecentWorks() {

  return (
    <section className={` ${styles.rounded} mt-24 lg:my-[var(--xl-margin)]`}>
      <div className="flex flex-col justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="heading3 mano">RECENT PROJECTS</h3>
          <p className="paragraph1 text-gray-600 dark:text-gray-400 px-2">
            These recent projects reflect our commitment to clean code,
            thoughtful design, and real results
          </p>
        </motion.div>
      </div>

      {/* PROJECTS */}
       <div className="grid grid-cols-1 mt-12 md:grid-cols-2 xl:grid-cols-3 md:gap-4 lg:gap-12 justify-self-center-safe 2xl:gap-24">
      <article className="rounded-lg mx-8 md:w-[350px] lg:w-[360px] 2xl:w-[400px] group  hover:shadow-lg overflow-hidden my-8">
        <img
          src={image2}
          className="min-w-full  h-60 xl:h-52 2xl:h-60 outline-none bg-gray-20 group-hover:scale-105 trans"
          alt=""
        />
        <div className="p-4 bg-white dark:bg-gray-900/50">
          <h2 className="font-bold text-xl mt-4 mb-2">Task Management App</h2>
          <p className="text-gray-500">
            A productive app for managing tasks, projects and team collaboration
            with real-time update
          </p>
          <button
          title="View Project"
           className="my-4 text-bold shadow-md border border-gray-500 px-5 text-sm rounded-full py-1.5 flex items-center gap-2 cursor-pointer trans hover:bg-black hover:text-white">
            <p>View Project</p>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" className="rotate-180 size-4 fill-accent" ><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/></svg>          </button>
        </div>
      </article>
      <article className="rounded-lg mx-8 md:w-[350px] lg:w-[360px] 2xl:w-[400px] group  hover:shadow-lg overflow-hidden my-8">
        <img
          src={image2}
          className="min-w-full  h-60 xl:h-52 2xl:h-60 outline-none bg-gray-20 group-hover:scale-105 trans"
          alt=""
        />
        <div className="p-4 bg-white dark:bg-gray-900/50">
          <h2 className="font-bold text-xl mt-4 mb-2">Task Management App</h2>
          <p className="text-gray-500">
            A productive app for managing tasks, projects and team collaboration
            with real-time update
          </p>
          <button
          title="View Project"
           className="my-4 text-bold border px-5 border-gray-500 text-sm rounded-full py-1.5 flex items-center gap-2 cursor-pointer trans hover:bg-black hover:text-white">
            <p>View Project</p>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" className="rotate-180 size-4 fill-accent" ><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/></svg>          </button>
        </div>
      </article>
      <article className="rounded-lg mx-8 md:w-[350px] lg:w-[360px] 2xl:w-[400px] group  hover:shadow-lg overflow-hidden my-8">
        <img
          src={image2}
          className="min-w-full  h-60 xl:h-52 2xl:h-60 outline-none bg-gray-20 group-hover:scale-105 trans"
          alt=""
        />
        <div className="p-4 bg-white dark:bg-gray-900/50">
          <h2 className="font-bold text-xl mt-4 mb-2">Task Management App</h2>
          <p className="text-gray-500">
            A productive app for managing tasks, projects and team collaboration
            with real-time update
          </p>
          <button
          title="View Project"
           className="my-4 text-bold border px-5 text-sm rounded-full py-1.5 flex items-center gap-2 cursor-pointer trans hover:bg-black hover:text-white">
            <p>View Project</p>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" className="rotate-180 size-4 fill-accent" ><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/></svg>          </button>
        </div>
      </article>
      
      
     
    </div>
      <div
        className="mx-auto my-12 flex "
        title="View more projects"
      >
        <Link
          to="/works/all"
          className="flex justify-center items-center  mx-auto"
        >
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="gap-2 items-center px-6 rounded-full  trans py-2 text-sm border-gray-500 font-bold cursor-pointer hover:text-white hover:bg-black mx-auto flex border shadow-md  "
            color=""
          >
            <p className="size-full flex justify-center items-center gap-2">
             View More Projects
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              className="fill-accent"
            >
              <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
            </svg>
          </motion.button>
        </Link>
      </div>
    </section>
  );
}

export default RecentWorks;
