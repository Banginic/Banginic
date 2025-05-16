import { motion } from "framer-motion";
import { image1 } from "../assets/assets";
import { SocialLinks, useTitle } from '../conponents/exportComp'

function AboutUs() {
  useTitle({title: 'About us'})
  // const employees = [
  //   {
  //     image: "",
  //     name: "Boris Ayam Ndoh",
  //     positon: "CEO & Founder",
  //     qualificaion: "Bsc. Pharmaceutical Scs, Senior Devops",
  //     motivation:
  //       "Boris Ayam Ndoh is a visionary leader with 10+ years of experience in software development and tech innovation.",
  //   },
  //   {
  //     image: "",
  //     name: "Boris Ayam Ndoh",
  //     positon: "CEO & Founder",
  //     qualificaion: "Bsc. Pharmaceutical Scs, Senior Devops",
  //     motivation:
  //       "Boris Ayam Ndoh is a visionary leader with 10+ years of experience in software development and tech innovation.",
  //   },
  //   {
  //     image: "",
  //     name: "Boris Ayam Ndoh",
  //     positon: "CEO & Founder",
  //     qualificaion: "Bsc. Pharmaceutical Scs, Senior Devops",
  //     motivation:
  //       "Boris Ayam Ndoh is a visionary leader with 10+ years of experience in software development and tech innovation.",
  //   },
  // ];
  const links = 
    {  facebook_url: "https://facebook.com", instagram_url: "https://facebook.com", twitter_url: "https://facebook.com"  }
    
  
 

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className=" px-5 2xl:px-42 min-h- mb-[3rem] "
    >
      <h1 className="mano heading3 text-center">ABOUT US</h1>
      <p className="text-center text-black/80 dark:text-white/60">
        Driven by Passion. Built on Code. Focused on You.
      </p>
      <div className="flex flex-col md:flex-row my-12 mx-auto">
        <div className="md:w-1/2 p-4 lg:p-8 border border-gray-200 dark:bg-black dark:border-gray-800 bg-white rounded-xl">
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
        <div className="md:w-1/2 h-92 my-20 md:mt-0 relative">
          <article
            className="bg-white dark:bg-black dark:border border-gray-700 w-sm md:w-80 lg:w-sm min-h-92
            mx-auto rounded-lg shadow-md p-4 text-center "
          >
            <motion.img
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: -20 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="size-52 -translate-y-10 bg-red-100 rounded-full mx-auto"
              src={image1}
              alt={`photo`}
            />
            <div className="-translate-y-10">
              <h3 className="text-lg font-bold mt-4  ">{"Boris Ayam Ndoh"}</h3>
              <p className="  mano text-gray-600 dark:text-gray-400">
                {"CEO & Founder"}
              </p>
              <p className="text-accent">
                {"Bsc. Pharmaceutical Scs, Senior Devops"}
              </p>
              <p className="paragraph2 text-gray-500 my-2 ">
                {
                  "Boris Ayam Ndoh is a visionary leader with 10+ years of experience in software development and tech innovation."
                }
              </p>
            </div>
            <div className="flex justify-center py-2">
              <SocialLinks links = {links} />
            </div>
          </article>
          <div className="flex gap-1 absolute bottom-4 left-1/2 -translate-x-1/2">
            <span className="size-3 w-6 rounded-full bg-neutral-500 cursor-pointer"></span>
            <span className="size-3 rounded-full bg-neutral-500"></span>
            <span className="size-3 rounded-full bg-neutral-500"></span>
            <span className="size-3 rounded-full bg-neutral-500"></span>
          </div>
          <span className="absolute hidden md:grid top-1/2 left-5 bg-neutral-400/10 hover:bg-neutral-400/20 w-14 rounded h-8 trans place-items-center cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              className="fill-gray-300 dark:fill-gray-800 dark:hover:fill-white size-full hover:fill-black trans"
            >
              <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
            </svg>
          </span>
          <span className="absolute top-1/2 right-5 bg-neutral-400/10 hover:bg-neutral-400/20 w-14 rounded h-8 trans hidden md:grid place-items-center cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              className="fill-gray-300 rotate-180 dark:fill-gray-800 dark:hover:fill-white size-full hover:fill-black trans"
            >
              <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
            </svg>
          </span>
        </div>
      </div>
    </motion.section>
  );
}

export default AboutUs;
