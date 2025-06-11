import { useState } from "react";
import { Back, Loading } from "../../conponents/exportComp";
import { placeholdeImage } from "../../assets/assets";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import myFetch from "../../libs/myFetch";
import type { SingleProject } from "../../models/types";
import { useQuery } from "@tanstack/react-query";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function WorkDetails() {
  const { projectId } = useParams();

  function fetchFunction() {
    const fetchDetails = {
      method: "get",
      endpoint: "/api/v2/projects/single",
      body: "",
      id: projectId || "",
    };
    return myFetch<SingleProject>(fetchDetails);
  }

  const { isLoading, data, isError, refetch } = useQuery<SingleProject>({
    queryKey: [`project: ${projectId}`],
    queryFn: fetchFunction,
  });

  // const [project, setProject] = useState<SingleProject | null >( null);
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

  if (isLoading) return <Loading />;

  if (isError || !data?.success)
    return (
      <div className="h-screen grid place-items-center text-center">
        <div>
          <h2 className="heading3">Error fetching Project</h2>
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
        <Back link="/works" name="Back" />
      </h1>
      <section className=" m-auto backdrop-blur-40 bg-transparent scroll-smooth t pt-6 overflow-auto ">
        <div className="display m-auto relative top-0 lg:flex gap-10 md:px-5 justify-around">
          <div className="relative  h-1/2 lg:min-w-[600px] lg:h-[500px] mx-auto overflow-hidden">
            <div className="min-h-[400px] w-full">
              
              <LazyLoadImage
                className=" group min-h-[320px]  md:min-h-[400px] lg:max-w-[700px] translate-y-5 cursor-pointer shadow-accent/20 shadow-lg  m-auto bg-black rounded-sm object-contai"
                alt={placeholdeImage}
                effect="blur"
                aria-label="project image"
                 loading="lazy"
                wrapperProps={{
                  style: { transition: "1s" },
                }}
                src={
                  !data?.project.photos
                    ? placeholdeImage
                    : data?.project.photos[activeIndex]
                }
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
              {data?.project.photos.map((_, index) => (
                <div
                  key={index}
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
              {data?.project.projectName.toLocaleUpperCase()}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {data?.project.description}
            </p>
            <a
              href={data?.project.url}
              title="View this project on the web"
              className=" py-1.5 bg-accent hover:opacity-70  trans rounded-lg cursor-pointer mt-4 mb-8 text-white text-sm px-4 border border-accent"
            >
              Visit project
            </a>
            <div className="grid grid-cols-2 gap-3 p-4 rounded-sm bg-gray-100/50 dark:bg-gray-900/50">
              <div className="text-sm ">
                <h3 className="">{"Category"}</h3>
                <p className="text-gray-600 dark:text-gray-400 mano">
                  {data?.project.category}
                </p>
              </div>
              <div className="text-sm">
                <h3 className="">{"Client"}</h3>
                <p className="text-gray-600 dark:text-gray-400 mano">
                  {data?.project.projectName}
                </p>
              </div>
              <div className="">
                <h3 className="">{"Date"}</h3>
                <p className="text-gray-600 dark:text-gray-400 mano">
                  {new Date(data?.project.createdAt).toLocaleDateString(
                    "en-GB"
                  )}
                </p>
              </div>
              <div className="">
                <h3 className="">{"Designer"}</h3>
                <p className="text-gray-600 dark:text-gray-400 mano">
                  {data?.project.designer}
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
                {data?.project.description}
              </p>
              <h4 className="mt-6">
                <p className="size-2 mr-1 inline-flex rounded-full bg-accent"></p>
                The story
              </h4>
              <p className="text-gray-600 dark:text-gray-400 px-3">
                {data?.project.story}
              </p>
              <h4 className="mt-6">
                <p className="size-2 mr-1 inline-flex rounded-full bg-accent"></p>
                Our approach
              </h4>
              <p className="text-gray-600 dark:text-gray-400 px-3">
                {data?.project.approach}
              </p>
            </div>
          </article>
        </div>
      </section>
    </motion.div>
  );
}

export default WorkDetails;
