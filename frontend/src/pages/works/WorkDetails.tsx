import { useState, useEffect } from "react";
import { Back, Loading } from "../../conponents/exportComp";
import { projects, placeholdeImage } from "../../assets/assets";
import type { ProjectDetails } from "../../models/projectTypes";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

function WorkDetails() {
  const { id } = useParams();
  // const { theme } = useContext(AppContext);
  const [project, setProject] = useState<ProjectDetails[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const length = 3;

  function prevImage() {
    setActiveIndex(activeIndex < 1 ? length : activeIndex - 1);
  }
  function nextImage() {
    setActiveIndex(activeIndex === length ? 0 : activeIndex + 1);
  }
  function toggelIndex(index: number) {
    setActiveIndex(index);
  }
  useEffect(() => {
    const result = projects.filter((item) => item.id === id);
    setProject(result);

    // AUTO IN INCREAMENT ....................
    // const intervaL = setInterval(() => {
    //   setActiveIndex( activeIndex === length ? 0 : activeIndex + 1)
    // }, 5000);
    // return () => clearInterval(intervaL)
  }, [id, activeIndex]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="min-h-screen"
    >
      <h1 className="relative heading3 text-center mano">
        PROJECT DETAILS
        <Back link="/works/all" name="Back" />
      </h1>
      <section className=" m-auto backdrop-blur-40 bg-transparent scroll-smooth t pt-6 overflow-auto ">
        {project.length === 0 ? (
          <Loading />
        ) : (
          <div className="display m-auto relative top-0 lg:flex gap-10 md:px-5 justify-around">
            <div className="relative md:w-[400px] h-1/2 lg:w-[500px] mx-auto overflow-hidden">
              <div className="min-h-[400px] w-full">
                <img
                  src={
                    !project[0].project_images
                      ? placeholdeImage
                      : project[0].project_images[activeIndex]
                  }
                  alt="same project img"
                  className=" group h-[400px] translate-y-5 min-w-[90%] m-auto bg-black rounded-sm"
                />
              </div>
              <span
                onClick={() => prevImage()}
                className="absolute cursor-pointer top-1/2 left-1 w-14 bg-slate-200 lg:opacity-40 shadow-sm  hover:opacity-100 trans grid trans h-10 rounded-sm  place-items-center text-black"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#000"
                >
                  <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
                </svg>
              </span>
              <span
                onClick={() => nextImage()}
                className="absolute cursor-pointer top-1/2 right-1 w-14 bg-slate-200 lg:opacity-40 shadow-sm hover:opacity-100 trans h-10 rounded-sm grid place-items-center text-black"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  className="rotate-180"
                  fill="#000"
                >
                  <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
                </svg>
              </span>

              <div className="flex absolute right-1/2 translate-x-1/2 bottom-3 gap-1 items-center justify-center">
                {project[0].project_images.map((_, index) => (
                  <div
                    onClick={() => toggelIndex(index)}
                    className={`h-3 ${
                      activeIndex === index ? "w-6" : "w-3"
                    } active_image cursor-pointer rounded-full bg-gray-200 mt-3 `}
                  ></div>
                ))}
              </div>
            </div>
            <article className="mt-5 rounded-l-lg borde border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-900/40 mx-auto p-5 lg:p-10">
              <h2 className="heading4">
                {project[0].name_of_project.toLocaleUpperCase()}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                {project[0].brief_description}
              </p>
              <button
                title="View this project on the web"
                className=" py-1.5 bg-accent hover:opacity-70 trans rounded-lg cursor-pointer mt-4 mb-8 text-white text-sm px-4 border border-accent"
              >
                View project
              </button>
              <div className="grid grid-cols-2 gap-3 p-4 rounded-sm bg-gray-100/50 dark:bg-gray-900/50">
                <div className="text-sm ">
                  <h3 className="">{"Category"}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mano">
                    {project[0].project_details.category}
                  </p>
                </div>
                <div className="text-sm">
                  <h3 className="">{"Client"}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mano">
                    {project[0].project_details.client}
                  </p>
                </div>
                <div className="">
                  <h3 className="">{"Date"}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mano">
                    {project[0].project_details.start_date}
                  </p>
                </div>
                <div className="">
                  <h3 className="">{"Designer"}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mano">
                    {project[0].project_details.designer}
                  </p>
                </div>
              </div>
              <hr className="my-10 w-4/5 mx-auto border border-accent" />
              <div className="mt-5">
                <h3 className="">
                  <p className="size-2 mr-1 inline-flex rounded-full bg-accent"></p>
                  Project description
                </h3>
                <p className="text-gray-600 dark:text-gray-400 px-3">
                  {project[0].project_description}
                </p>
                <h4 className="mt-6">
                  <p className="size-2 mr-1 inline-flex rounded-full bg-accent"></p>
                  The story
                </h4>
                <p className="text-gray-600 dark:text-gray-400 px-3">
                  {project[0].the_story}
                </p>
                <h4 className="mt-6">
                  <p className="size-2 mr-1 inline-flex rounded-full bg-accent"></p>
                  Our approach
                </h4>
                <p className="text-gray-600 dark:text-gray-400 px-3">
                  {project[0].our_approach}
                </p>
              </div>
            </article>
          </div>
        )}
      </section>
    </motion.div>
  );
}

export default WorkDetails;
