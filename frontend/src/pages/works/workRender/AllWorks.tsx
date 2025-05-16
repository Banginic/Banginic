import { useState, useEffect, useContext } from "react";
import { Link, useOutletContext } from "react-router-dom";
import { Loading } from "../../../conponents/exportComp";

import type { ProjectDetails } from "../../../models/projectTypes";
import { projects } from "../../../assets/assets";

import styles from "./workRender.module.css";

import { WorkContext } from "../../../context/WorkProvider";

function AllWorks() {
  type Params = { id: string };
  const params: Params = useOutletContext();

  const [data, setData] = useState<ProjectDetails[] | undefined>([]);
  const workContext = useContext(WorkContext);

  useEffect(() => {
    let selectedTab = undefined;
    if (params.id == "all") {
      selectedTab = projects;
    } else {
      selectedTab = projects?.filter(
        (item: ProjectDetails) => item.title == params.id
      );
    }

    setData(selectedTab);
  }, [params.id]);

  if (data?.length === 0) {
    return <Loading />;
  }

  return (
    <section className="himages grid md:grid-cols-2 lg:px-14 place-items-center  py-6 w-[100%] m-auto gap-8 relative  border-blue-600">
      {data?.map((project: ProjectDetails, index) => {
        return (
          <div
            key={index + 1}
            className={`${styles.work_container}
              relative work_image min-h-[400px] w-[90%] md:min-h-[400px]  
              md:min-w-[390px] lg:w-[450px] lg:min-h-[450px] bg-purple-950 rounded-lg shadow-lg
            `}
          >
            <div
              className={`${styles.work_container} ${styles.works_cart} absolute bg-black inset-x-4 top-4 md:inset-x-6 bottom-0 md:top-6 overflow-hidden`}
            >
              <img
                src={project.project_images[0]}
                className="object-cover"
                alt=""
              />
              {/* img here */}
            </div>

            <Link to={`/workDetails/${project.id}`}>
              <div
                onClick={() => workContext!.setRenderDetails(true)}
                className={`${styles.work_cart} 
                    absolute  w-[95%] mx-[50%] translate-x-[-50%] h-[20%] bg-[navbar-bg] 
                    rounded-xl shadow-sm bottom-4 p-3 bg-gradient-to-l from-white to-purple-200 text-purple-950
                  `}
              >
                <h3 className="font-bold text-lg">{project.name_of_project}</h3>
                <p className="text-sm opacity-80">
                  {project.brief_description}
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`${styles.work_arrow} absolute material-symbols-outlined text-4xl md:text-5xl top-2 right-2 rotate-[-45deg] `}
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#000"
                >
                  <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
                </svg>
              </div>
            </Link>
          </div>
        );
      })}
      <div
        className={`${
          workContext!.renderDetails ? "" : "hidden"
        } absolute w-full bg-transparent top-0 md:top-[0] lg:top-[0] bottom-0 text-white`}
      >
        {/* <WorkDetails /> */}
      </div>
    </section>
  );
}

export default AllWorks;
