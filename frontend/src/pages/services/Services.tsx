import { services } from "../../assets/assets";
import { motion } from "framer-motion";

function Services() {
  return (
    <section className={``}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-center min-h-screen"
      >
        <h1 className="heading3 mano">SERVICES</h1>
        <p className="text-black/80 dark:text-white/60">
          Services Built to Elevate Your Brand
        </p>
        <p className=" text-black/80 dark:text-white/60">
          From Strategy to Execution. Everything You Need to Succeed Online.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 place-items-center gap-5 mx-auto mt-10 ">
          {services.map((skill, index) => {
            return (
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                key={index}
                className={` bg-white
                 dark:bg-black border border-gray-300/50 dark:border-gray-800/50
                 shadow-accent/50 hover:shadow-lg
                  w-sm h-82 lg:w-xl rounded-lg p-8 trans`}
              >
                <span className="flex gap-2 md:gap-5 items-center w-full md:w-52 mb-1  ">
                  <p className="font-bold text-xl md:text-2xl"></p>
                  <p className={` heading4  text-start text-nowrap `}>
                    <span className="mano text-accent text-start mr-2">
                      {index + 1}
                    </span>
                    {skill.title}
                  </p>
                </span>
                <p className="text-sm subheading text-black/80 dark:text-white/60 mb-4 text-start px-2">
                  {skill.subtitle}
                </p>
                <p className="paragraph1 text-md text-start text-gray-500 px-2">
                  {skill.desription}
                </p>
              </motion.article>
            );
          })}
          <button className="bg-black border shadow-accent/50 hover:shadow-md hover:opacity-80 trans text-white px-6 py-2 rounded-full cursor-pointer mx-auto my-8">
            Let's get started
          </button>
        </div>
      </motion.div>
    </section>
  );
}

export default Services;
