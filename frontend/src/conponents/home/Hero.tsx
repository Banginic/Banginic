import { motion } from "framer-motion";
import styles from "./home.module.css";
import { BgAnimation, CTAHero } from "./exportHome";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { placeholdeImage } from "../../assets/assets";

function Hero() {
  return (
    <div
      className={`h-screen flex overflow-hidden flex-col md:flex-row ${styles.translate} sm:pt-[5rem] p-2 lg:pt-0 items-center md:items-start lg:px-14 `}
    >
      <div className=" grid lg:w-[70%] text-3xl px-10">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-2  md:mt-0 text-4xl xl:text-5xl font-bold 2xl:text-[4.5rem] w- z-10 text-left  title-image "
        >
          <span className="montserrat leading-11 lg:leading-14 2xl:leading-17">
            Building Bold
            <span className="text-accent"> Digital Experiences </span>
            That Work Everywhere.
          </span>
        </motion.h1>

        <div className=" md:w-[70%] lg:w-[80%] mt-4 md:static top-24  md:px-0 z-10 ">
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className={`paragraph1  font-bold 2xl:text-2xl text-left mb-10 md:italics text-neutral-600 dark:text-gray-400 ${styles.translate}`}
          >
            We build scalable, speedy, stylish and custom web solutions that last for ever. We
            turn your ideas into high-performing web applications.
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
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className={`w-[320px] absolute md:static opacity-80 h-[400px] md:w-[600px] md:h-[300px] lg:h-[500px] lg:w-[500px] 
         md:opacity-85  m-auto md:m-0 top-[30rem] lg:mt-10 right-10 trans
      hover:border-purple-800 `}
      >
        <LazyLoadImage
          className="lg:pl-14 absolute md:static  right-0 w-[550px] md:w-[600px] borde lg:h-[400px] 2xl:h-[450px] 2xl:w-[650px]"
          alt={placeholdeImage}
          effect="blur"
          aria-label="Hero image"
          loading="eager"
          wrapperProps={{
            style: { transition: "1s" },
          }}
          src="./assets/icons/dot_image.png"
        />
      </motion.div>

      <BgAnimation />
    </div>
  );
}

export default Hero;
