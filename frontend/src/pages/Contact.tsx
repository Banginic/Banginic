import { ContactCard, ContactForm, Map } from "../conponents/exportComp";
import { motion } from "framer-motion";


function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="min-h-screen"
    >
      <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent via-pink-400 to-blue-400 bg-clip-text text-transparent montserrat text-center">CONTACT US</h1>
      <p className="text-lg text-pink-50/60 text-center">
        We appreciate your interest in our services
      </p>
      <div className="flex flex-col justify-around md:flex-row mt-12 2xl:mt-16 2xl:px-30 items-cent">
        <div className=" flex flex-col gap-10 lg:gap-19 mb-8 lg:md:w-125 px-4">
          <ContactCard />
          <Map />
        </div>
        <ContactForm />
      </div>
    </motion.section>
  );
}

export default Contact;
