import Map from "./Map";
import { Link } from 'react-router-dom'

import { ContactCard } from "../../../conponents/exportComp";

function ContactUs() {
  return (
    <section
      className={`relative md:bg-[url(/manyHands.jpg)] bg-no-repeat bg-cover  rounded-lg border-t border-[var(--gray-color)] pt-5 py-10 mt-[var(--md-padding)]`}
    >
      <h2 className="absolute mano top-8 md:text-black left-1/2 -translate-x-[50%] text-center heading3 ">
        CONTACT US
      </h2>
      <div className=" bg-gray-200 rounded-lg md:ml-8 shadow-sm dark:bg-gray-800 h-full md:max-w-1/2 gap-12 p-5 mt-24 ">
        <div className="flex flex-col gap-8 ">
          <ContactCard />
          <Map />
        </div>
      </div>
      <Link to='/contact-us' className="grid place-items-center">
        <button className="text-black border-2 border-black font-bold  px-8 mt-8 cursor-pointer hover:scale-105 trans py-1.5 rounded-full">
          Contact Us
        </button>
      </Link>
    </section>
  );
}

export default ContactUs;
