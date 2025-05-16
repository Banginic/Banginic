import { motion } from "framer-motion";

function Skills() {
  const frameworks = [
    { name: "Figma", percent: "92%", icon: "/dev_icons/figma_p.png" },
    { name: "Sketch", percent: "70%", icon: "Percent" },
    { name: "WordPress", percent: "99%", icon: "/dev_icons/wordpress_p.png" },
    { name: "React", percent: "97%", icon: "/dev_icons/react_p.png" },
    { name: "TypeScript", percent: "95%", icon: "/dev_icons/mySql_p.png" },
    { name: "Dart", percent: "91%", icon: "/dev_icons/dart_p.png" },
    { name: "Nextjs", percent: "90%", icon: "/dev_icons/nextjs_p.png" },
    { name: "Git", percent: "96%", icon: "/dev_icons/git_p.png" },
    { name: "MongoDb", percent: "88%", icon: "/dev_icons/mongodb_p.png" },
    { name: "Nodejs", percent: "91%", icon: "/dev_icons/nodejs_p.png" },
    { name: "Python", percent: "95%", icon: "/dev_icons/python_p.png" },
  ];

  const cards = [...frameworks, ...frameworks];

  return (
    <motion.section
      className=" p-5 relative bg-white shadow overflow-hidden dark:bg-gray-900 rounded-md w-full py-8 mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity:1, y:0}}
      viewport={{once: true, amount:0.2}}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      <h4 className="mano text-center heading3 py-2 mb-12">
        Software and framework we use
      </h4>
      <div className="pointer-events-none absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10" />
      <div className="pointer-events-none absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10" />

      <motion.div
       className="flex relative gap-10 whitespace-nowrap overflow-hidden animate-scroll group:hover:[animation-play-state:paused]  w-full "
       initial={{ opacity: 0.2, y: 25 }}
      whileInView={{ opacity:1, y:0}}
      viewport={{once: true, amount:0.2}}
      transition={{ duration: 0.6, delay: 1 }}
       >
        {cards &&
          cards.map((skill, index) => {
            return (
              <div className="text-center" key={index}>
                <div
                  className="bg-gray-100 dark:bg-gray-800/10 cursor-pointer flex flex-col items-center gap-3 shadow-lg hover:bg-blue-900/20 trans
             rounded-lg w-[140px] md:w-[160px] h-[160px] md:lg-[180px] pt-[var(--md-padding)] "
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className=" size-[60px] "
                  />

                  <p className="">{skill.percent}</p>
                </div>
                <p className="pt-4 text-accent">{skill.name}</p>
              </div>
            );
          })}
      </motion.div>
      <style >{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }

        .group:hover .animate-scroll {
          animation-play-state: paused;
        }
      `}</style>
    </motion.section>
  );
}

export default Skills;
