import { motion  } from 'framer-motion'
import { partners } from "../../assets/assets";


function Partners() {
 
  return (
    <section
      className={` mt-24 lg:mt-[var(--lg-margin)] w-full relative rounded-md z-5 py-10 grid shadow-md place-items-cente `}
    >
      <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="heading3 mano py-[var(--sm-padding)] pb-[var(--md-padding)] text-center ">
       TURSTED BY
      </motion.h2>
      
      <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: 0.7 }}
       className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 content-center place-items-center">
        {partners.map((partner, index) => {
          return (
            <div
              key={index}
              className="flex justify-center items-center opacity-50 gap-9 p-2 h-52 w-52 rounded-md overflow-hidden"
            >
              <img
                src={partner.img}
                alt={partner.name}
                className=" w-[50%] h-[50% ] opacity-80"
              />
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}

export default Partners;
