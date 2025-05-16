import { motion } from "framer-motion";
import styles from "./home.module.css";
import { BgAnimation, CTAHero } from "./exportHome";

function Hero() {
  return (
    <div
      className={`h-screen flex overflow-hidden flex-col md:flex-row ${styles.translate} sm:pt-[5rem] p-2 lg:pt-0   items-center md:items-start lg:px-14 `}
    >
      <div className=" grid lg:w-[70%] text-3xl px-10 2xl:px-24 ">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-25  md:mt-0 text-5xl xl:text-7xl font-bold  2xl:text-[5rem] w- z-10 text-left  2xl:w-4/5 title-image"
        >
          <span>
            Your <span className="text-accent"> Business, Online</span> and On
            Point
          </span>
        </motion.h1>

        <div className=" md:w-[70%] lg:w-[80%]   mt-4 md:static top-24  md:px-0 z-10 ">
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className={`paragraph1  font-bold 2xl:text-2xl text-left mb-10 md:italics text-gray-600 dark:text-gray-400 ${styles.translate}`}
          >
            We help businesses like yours turn ideas into high-performing
            digital products.
          </motion.p>
          <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, amount: 0.2 }}
           transition={{ duration: 0.6, delay: 0.5 }}
          >
            <CTAHero />
          </motion.div>
        </div>
      </div>
      <div
        className={`w-[350px] absolute  md:static opacity-80 h-[510px] md:w-[600px] md:h-[300px] lg:h-[500px] lg:w-[500px] 
         md:opacity-85  m-auto md:m-0 top-[26rem] lg:mt-14 right-0 trans
      hover:border-purple-800 `}
      >
        <motion.img initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          src="./assets/icons/dot_image.png"
          className="lg:pl-14 absolute md:static  right-0 w-[550px] md:w-[600px] borde lg:h-[400px] "
          alt="hero image"
        />
      </div>

      <BgAnimation />
    </div>
  );
}

export default Hero;
