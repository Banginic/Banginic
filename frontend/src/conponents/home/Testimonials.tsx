import { useContext, useState } from "react";
import { happyCustomer, person, star } from "../../assets/assets";
import { motion } from "framer-motion";
import { AppContext } from "../../context/AppProvider";
import myFetch from "../../libs/myFetch";
import useFetch from "../../hooks/useFetch";
import Loading from "../Loading";
import StarRating from "../StarRating";



function Testimonials() {
   const [index, setIndex] = useState(0);
 const appContext = useContext(AppContext)
 function handleTestify(){
  if(!appContext?.user){
   return appContext?.navigate('/login')
  }
 appContext?.navigate("/testimonial-form")
 }

 function returnFn(){
  const fetchDetails = {
    method:'get',
    endpoint: '/api/v2/testimonials/list',
    body:'',
    id:''
  }
  return myFetch(fetchDetails)
 };

 const { isError, isLoading, data, refetch } = useFetch(returnFn, 'testimonials')
 
 
 if (isLoading) return <Loading />;

 
   if (isError )
     return (
       <div className=" h-[30vh] lg:h-screen grid place-items-center text-center">
         <div>
           <h2 className="heading3">Error Fetching Testimonies</h2>
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

     // Handle next and preview
     
  const handleNext = () => {
    setIndex((prev) => (prev + 1) % data?.testimonies.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + data?.testimonies.length) % data?.testimonies.length);
  };

  const current = data?.testimonies[index];

  return (
    <div
     className=" p-4 py-8"
     >
       <motion.h4
        className={`mano text-center pb-10 mt-10 heading3 lg:pb-10   `}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity:1, y:0}}
      viewport={{once: true, amount:0.2}}
      transition={{ duration: 0.6, delay: 0.5 }}
      >
        WHY PEOPLE LOVE US
      </motion.h4>
      <div className="  md:flex flex-row gap-4 justify-around">
        <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity:1, x:0}}
        viewport={{once: true, amount:0.2}}
        transition={{ duration: 0.6, delay: 0.5 }}
        className=" md:w-[300px] lg:w-1/3 h-[250px] ">
          <img src={ happyCustomer} alt="" className="size-full rounded shadow-xl" />
        </motion.div>
        <motion.div className="relative rounded md:w-1/2 mt-24 md:mt-0 "
         initial={{ opacity: 0, x: 20 }}
         whileInView={{ opacity:1, x:0}}
         viewport={{once: true, amount:0.2}}
         transition={{ duration: 0.6, delay: 0.5 }}
        >
          <article className="bg-white shadow-lg border mx-auto border-gray-200 dark:border-gray-950 rounded-lg  dark:bg-gray-900/50 relative p-5 md:w-xs lg:w-sm h-110">
            <div className="flex items-center justify-between p-3">
              <img
                src={current.photo || person}
                alt=""
                className="size-12 lg:size-12 bg-blue-300 rounded-full shadow"
              />
              <StarRating rating={current.rating} />
            </div>
            <p className="text-lg mt-4 p-4 text-center text-gray-500 italic ">
              { current.message}
            </p>
            <p className="heading4 mano text-gray-800 text-center mt-5">{current.projectName}</p>
            <div className="grid">
              <button 
              onClick={handleTestify}
              className="mx-auto border px-6 rounded-full py-1.5 mt-6  cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900 trans trans">
                Testify Yours
              </button>
            </div>
          </article>
           
            <span
            onClick={handlePrev}
            title="Previous testimony"
             className="absolute top-1/2 left-0 bg-neutral-400/10 hover:bg-neutral-400/20 w-14 rounded h-8 trans grid place-items-center cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" className="fill-gray-300 dark:fill-gray-800 dark:hover:fill-white size-full hover:fill-black trans" ><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/></svg>
            </span>
            <span
            onClick={handleNext}
            title="Next testimony"
             className="absolute top-1/2 right-0 bg-neutral-400/10 hover:bg-neutral-400/20 w-14 rounded h-8 trans grid place-items-center cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" className="fill-gray-300 rotate-180 dark:fill-gray-800 dark:hover:fill-white size-full hover:fill-black trans" ><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/></svg>
            </span>
        </motion.div>
      </div>
      
    </div>
  );
}

export default Testimonials;
