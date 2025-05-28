import { motion } from "framer-motion";
import { Employees } from "../conponents/lazyLoading";

function AboutUs() {

 
  
 

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className=" px-5 2xl:px-20 min-h- mb-[3rem] "
    >
      <h1 className="mano heading3 text-center">ABOUT US</h1>
      <p className="text-center text-black/80 dark:text-white/60">
        Driven by Passion. Built on Code. Focused on You.
      </p>
      <div className="flex flex-col lg:flex-row  my-12 mx-auto ">
        <div className="lg:w-1/2 p-4 lg:p-8 border border-gray-200 shadow-accent/30 shadow-2xl dark:bg-black dark:border-gray-800 bg-white rounded-xl">
          <h2 className="heading4 mano mb-2">Who Are We</h2>
          <p className="paragraph1 text-gray-500 text-start text-sm">
            We are passionate about crafting software solutions that transform
            ideas into reality. Our team of skilled developers, designers, and
            problem-solvers work together to create seamless digital
            experiences. .
          </p>
          <div className={` mx-auto mt-8`}>
            <h3 className="heading4 mano ">Our Mission</h3>
            <p className=" paragraph1 text-gray-500">
              We craft high-quality, scalable software solutions tailored to
              your business needs. With a commitment to excellence and a passion
              for innovation, we help companies unlock their full potential
              through technology. Whether you're a startup or an enterprise,
              we're your trusted partner in digital transformation.
            </p>
          </div>
          <div className={` mx-auto mt-8`}>
            <h3 className="heading4 mano ">What Sets Us Apart</h3>
            <ul className=" paragraph1 text-gray-500">
              <li>Client-first mindset</li>
              <li>Clean, maintainable code</li>
              <li>Attention to design and usability</li>
              <li>Transparent communication & reliable delivery</li>
            </ul>
          </div>
        </div>
        <Employees />
      </div>
    </motion.section>
  );
}

export default AboutUs;
