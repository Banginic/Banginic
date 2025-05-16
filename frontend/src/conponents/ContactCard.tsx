import { whatsApp_logo, contactCard} from "../assets/assets";

function ContactCard() {
  const phoneNumber = import.meta.env.VITE_PHONE_NUMBER;
  const emailAddress = import.meta.env.VITE_EMAIL_ADDRESS;

  const emailLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
    contactCard.email.emailSubject
  )}&body=${encodeURIComponent(contactCard.email.emailBody)}`;
  const contactDetails = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          className="fill-black dark:fill-accent"
        >
          <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
        </svg>
      ),
      type: "Address",
      details: "Akwa Douala Cameroon BP 12432",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
         className="fill-black dark:fill-accent"
        >
          <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
        </svg>
      ),
      type: "Address",
      details: "Paphos Cyprus 8025",
    },
  ];
  function sendWhatsAppMessage() {
    const whatsAppNumber = import.meta.env.VITE_WHATSAPP_NUMBER;

    const url = `https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(
      contactCard.whatsApp.whatsAppBody
    )}`;
    window.open(url, "blank");
  }
  return (
    <div className="shadow-lg text-sm bg-white dark:bg-gray-950/50  grid gap-1 lg:gap-2 p-8 lg:h-[270px] max-w-150 rounded-md grid-items-center">
      <button
        title="click to whatsApp"
        className=" px-3 text-start cursor-pointer text-sm flex items-center gap-3 mb-1 hover:underline"
        onClick={sendWhatsAppMessage}
      >
        {" "}
        <img src={whatsApp_logo} className="size-8" alt="" />
        WhatsApp
      </button>
      <a
        href={`tel:${phoneNumber}`}
        title="click to call"
        className=" px-3 text-start cursor-pointer text-sm flex items-center mb-1 gap-2 hover:underline"
      >
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-6 mr-3 rounded-full opacity-90 fill-black dark:fill-accent"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          
        >
          <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
        </svg>
        +237 653 775 159
      </a>
      <a
        href={emailLink}
        title="click to call"
        className=" px-3 text-start cursor-pointer text-sm flex items-center gap-6 mb-1.5 hover:underline"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          className="fill-black dark:fill-accent"
        >
          <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
        </svg>
        {emailAddress}
      </a>
      {contactDetails.map((contact, index) => {
        return (
          <div key={index} className="flex px-3 ">
            <p className="size-8 mr-3 rounded-full opacity-90">
              {contact.icon}
            </p>
            <div
              className="cursor-pointer lg:hover:underline w-full trans "
              title={`Click to copy ${contact.details}`}
              onClick={() => navigator.clipboard.writeText(contact.details)}
            >
              <p className={` sr-only paragraph1`}>{contact.type}</p>
              <p className=" ">{contact.details}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ContactCard;
