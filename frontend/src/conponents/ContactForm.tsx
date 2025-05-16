import { FormEvent, useContext, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { Logo } from "./exportComp";
import { AppContext } from "../context/AppProvider";

function ContactForm() {
 const appContext = useContext(AppContext)
  const [ fetchState, setFetchState ] = useState({ error:'', isLoading: false})
  const [client, setClient] = useState({
    fullName: "",
    emailAddress: "",
    phoneNumber: "",
    service: "",
    message: "",
  });

  function clearForm() {
    setClient({
      fullName: "",
      emailAddress: "",
      phoneNumber: "",
      service: "",
      message: "",
    });
  }
  const disableBTN = client.message.length < 10 || fetchState.isLoading
  async function handleFormSubmit(event: FormEvent) {
    event.preventDefault();
    setFetchState({error:'', isLoading: true})
    try{
      const { data } = await axios.post(appContext?.baseUrl + '/api/v2/messages/create', client)
 
    
    const { success, message } = data
   
    if(success){
      setFetchState({ error:'', isLoading: false })
      toast.success(message);
      clearForm()
     return setTimeout(() => appContext?.navigate('/'), 1000)
    }
    
    setFetchState({ error: message, isLoading: false })
    }
    catch(ex){
      console.log(ex);
      setFetchState({isLoading:false, error: ex.message})
      
    }
  }

  return (
    <form
      onSubmit={handleFormSubmit}
      className=" shadow-lg p-8 lg:px-12 w-sm lg:w-105 rounded-lg bg-white dark:bg-gray-950/40 text-sm mx-auto md:mx-0"
    >
      <div className="mb-8 text-black/80 dark:text-white/60">
        <Logo logoSize="size-8" textSize="heading4" />
        <p className="">Please send your message using the form below </p>
        <p> We look forward to assisting you.</p>
      </div>
      <div>
        <label htmlFor="fullName" className="p-1">
          Full Name
        </label>
        <div className="border border-gray-400 dark:border-gray-700 mt-1 rounded-2xl flex items-center px-6 gap-3 py-2 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            className="fill-gray-500"
          >
            <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" />
          </svg>
          <input
            type="text"
            id="firsttName"
            value={client.fullName}
            autoComplete="name"
            required
            minLength={3}
            maxLength={30}
            onChange={(e) => setClient({ ...client, fullName: e.target.value })}
            placeholder="Mary Jones"
            className=" outline-none w-full bg-transparent border-none"
          />
        </div>
      </div>

      <div>
        <label htmlFor="EmailAddress" className="p-1">
          Email Address
        </label>
        <div className="border border-gray-400 dark:border-gray-700 mt-1 rounded-2xl flex items-center px-6 gap-3 py-2 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            className="fill-gray-500"
          >
            <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
          </svg>
          <input
            type="email"
            id="EmailAddress"
            autoComplete="email"
            required
            minLength={10}
            maxLength={30}
            value={client.emailAddress}
            className=" outline-none w-full bg-transparent border-none"
            onChange={(e) =>
              setClient({ ...client, emailAddress: e.target.value })
            }
            placeholder="example@email.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="PhoneNumber" className="p-1">
          Phone Number
        </label>
        <div className="border border-gray-400 dark:border-gray-700 mt-1 rounded-2xl flex items-center px-3 gap-3 py-2 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            className="fill-gray-500"
          >
            <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
          </svg>
          <input
            type="tel"
            id="phoneNumber"
            value={client.phoneNumber}
            className=" w-full outline-none  bg-transparent border-none"
            autoComplete="phone"
            minLength={9}
            maxLength={15}
            onChange={(e) =>
              setClient({ ...client, phoneNumber: e.target.value })
            }
            placeholder="+1 234 4233 2433"
          />
        </div>
      </div>
      <div className="">
        <label htmlFor="services" className="p-1">
          Select Service
        </label>
        <select
          className="border bg-white dark:bg-black/80 border-gray-400 dark:border-gray-700 mt-1  shadow w-full rounded-full  py-2 px-3  mb-4 "
          id="services"
          value={client.service}
          required
          onChange={(e) => setClient({ ...client, service: e.target.value })}
        >
          <option value="" className="opacity-40">
            Choose Service
          </option>
          <option value="branding">Branding</option>
          <option value="website">Web App/ Website</option>
          <option value="ui/ux-design">UI/UX Design</option>
          <option value="mobile-app">Mobile App</option>
          <option value="ai-intergration">AI Intergration</option>
          <option value="seo">SEO</option>
          <option value="classes">Learning</option>
        </select>
        <div className="mt- ">
          <label htmlFor="client" className="p-1">
            Message
          </label>
          <textarea
            name="client"
            id="client"
            value={client.message}
            onChange={(e) => setClient({ ...client, message: e.target.value })}
            cols={30}
            rows={4}
            placeholder="Message"
            className="  
                w-full border  border-gray-400 dark:border-gray-700 mt-1   rounded-lg px-3 py-2 "
          ></textarea>
        </div>
      </div>
      <div className="mt-8">
        <button
        type="submit"
        disabled={disableBTN}
         className=" rounded-full disabled:bg-gray-500 w-full p-2.5 bg-black dark:bg-accent hover:opacity-80 text-white cursor-pointer trans">
          {
            fetchState.isLoading ? 'Sending...' : 'Send message'
          }
        </button>
      </div>
      <p className="text-red-500 text-center min-h-10 mt-4">{fetchState.error}</p>
    </form>
  );
}

export default ContactForm;
