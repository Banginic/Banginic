import { useContext } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { skillsLinks } from "../../../assets/assets";
import clsx from "clsx";
import styles from "./works.module.css";
import { motion } from "framer-motion";
import { AppContext } from "../../../context/AppProvider";
import { useTitle } from '../../../conponents/exportComp'

function Works() {
  useTitle({ title: 'Projects'})
 const appContext = useContext(AppContext)
 const workContext =  useContext(AppContext)
 
  const params = useParams();

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
          onClick={workContext?.handleRenderDetails}
          className="justify-between py-3 gap-4 flex items-center 
       m-auto p-3 rounded-full "
        >
          {skillsLinks.map((link, index) => {
            const name = link.name;
            const pathName = link.path;
            return (
              <NavLink key={index} to={pathName} className={handleActiveTabs}>
                {name}
              </NavLink>
            );
          })}
        </ul>
      </section>

      <div className={`${styles.works_outlet}`}>
        <Outlet context={params} />
      </div>
    </motion.div>
  );
}

export default Works;
