import { motion } from "framer-motion";

function Counter() {
  const counter = [
    { total: "14", para1: "Years of", para2: "Experience" },
    { total: "50+", para1: "Projects", para2: "Completed" },
    { total: "1.5K", para1: "Happy", para2: "Clients" },
    { total: "14", para1: "Years of", para2: "Experience" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="z-10  mt-10 md:mt-[40px] lg:mt-[85px] gap-4 grid grid-cols-2 lg:grid-cols-4 shadow-lg rounded-lg p-5 md:p-10 lg:p-14"
    >
      {counter.map((count, index) => {
        return (
          <div
            key={index}
            className="flex items-center justify-center gap-2  px-2  "
          >
            <p className="heading1  text-accent mano">{count.total}</p>
            <span className="">
              <p className="paragraph2 opacity-80 ">{count.para1}</p>
              <p className="paragraph2  opacity-80">{count.para2}</p>
            </span>
          </div>
        );
      })}
    </motion.div>
  );
}

export default Counter;
