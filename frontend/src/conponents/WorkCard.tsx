
import  styles  from './home/recent-works/recent_works.module.css'


function WorkCard(props) {
   
    const { name_of_project, brief_description, project_images } = props.project
    
    
    const { index } = props.index
  return (
    <div
      key={index + 1}
      className={`${styles.work_container}
              relative work_image min-h-[450px] w-[90%] md:min-h-[400px]  mx-auto mt-4
              md:min-w-[390px] lg:w-[450px] lg:min-h-[450px] bg-purple-950 rounded-lg shadow-lg
            `}
    >
      <div
        className={`${styles.work_container} ${styles.works_cart} absolute bg-black inset-x-4 top-4 md:inset-x-6 bottom-0 md:top-6`}
      >
        
        <img src={project_images[0]} alt="" />
      </div>

      <div
        className={`${styles.work_cart} 
                    absolute  w-[95%] mx-[50%] translate-x-[-50%] h-[20%] bg-[navbar-bg] 
                    rounded-xl shadow-sm bottom-4 p-3 bg-gradient-to-l from-white to-purple-200 text-purple-950
                  `}
      >
        <h3 className="font-bold paragraph1">{name_of_project}</h3>
        <p className="paragraph2 opacity-80 overflow-hidden ">{brief_description}</p>
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
      {/* </Link> */}
    </div>
  );
}

export default WorkCard;
