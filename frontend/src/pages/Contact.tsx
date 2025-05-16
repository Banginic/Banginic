import { ContactCard, ContactForm, Map, useTitle } from "../conponents/exportComp";
import { motion } from "framer-motion";


function Contact() {
  useTitle({ title: 'Contact us'})
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="min-h-screen"
    >
      <h1 className="text-center heading3 mano">CONTACT US</h1>
      <p className="text-black/80 dark:text-white/60 text-center">
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
