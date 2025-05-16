import React, { useState } from "react";
import Logo from "./Logo";

function NewsLetterForm() {
const [ formData, setFormData ] = useState({
    subject: '',
    body: ''
  })
  return (
    <form className="w-sm border my-12 border-gray-400 p-4 text-sm rounded-lg shadow-accent/30 shadow-xl">
      <Logo logoSize={"size-6"} textSize={"heading4"} />
      <p className="text-gray-500 px-8">
        Create news letter using the form below.
      </p>

      <div className="mt-8 mb-4">
        <label htmlFor="subject" className="block m-1">
          Subject
        </label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={e => setFormData({...formData, subject: e.target.value})}
          className="border border-gray-400 w-full py-2 px-4 rounded"
          placeholder="Subject"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="subject" className="block m-1">
          Body
        </label>
        <textarea
          rows={5}
          name="subject"
           value={formData.body}
          onChange={e => setFormData({...formData, body: e.target.value})}
          className="border border-gray-400 w-full py-2 px-4 rounded"
          placeholder="Subject"
        ></textarea>
      </div>
      <button 
      type="submit"
      className="bg-black text-white w-full rounded py-2 my-4 cursor-pointer hover:bg-black/70">Create Newsletter</button>
    </form>
  );
}

export default NewsLetterForm;
