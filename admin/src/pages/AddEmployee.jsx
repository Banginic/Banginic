import React, { useContext, useEffect, useState } from "react";
import { Logo } from "../components/exportComp";
import { platforms } from "../assets/assest";
import { toast } from "react-toastify";
import { person_Placeholder } from "../assets/assest";
import AppContext from "../context/AppContext";
import myFetch from "../utils/myFetch";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../main";

function AddEmployee() {
  const { navigate } = useContext(AppContext);
  const [body, setBody] = useState();
  const [error, setError] = useState("");
  const [changedFields, setChangedFields] = useState({});
  const [photo, setPhoto] = useState();
  const [employee, setEmployee] = useState({
    fullName: "",
    position: "",
    qualification: "",
    motivation: "",
  });
  const [visibleInputs, setVisibleInputs] = useState({});
  const [links, setLinks] = useState({
    twitter: "",
    facebook: "",
    instagram: "",
    linkedin: "",
    youtube: "",
    github: "",
    website: "",
  });
  // MANAGE FORM DATA
  const changedValues = Object.keys(changedFields)
    .filter((key) => changedFields[key] && links[key].trim() !== "")
    .reduce((obj, key) => {
      obj[key] = links[key];
      return obj;
    }, {});

  function mutationFn() {
    const fetchDetails = {
      method: "post",
      endpoint: "/api/v2/employees/create",
      body: body,
      id: "",
    };
    return myFetch(fetchDetails);
  }
  const { isPending, mutate } = useMutation({
    mutationFn,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["employee"] });
      const timer = setTimeout(navigate("/employee"), 2000);
      return () => clearTimeout(timer);
    },
    onError: (error) => {
      console.error(error);

      setError(error.message);
    },
  });

  const disabledBTN =
    isPending ||
    employee.fullName.length < 3 ||
    employee.position.length < 8 ||
    employee.motivation.length < 3;

  function toggleInput(platform) {
    setVisibleInputs((prev) => ({ ...prev, [platform]: !prev[platform] }));
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setLinks({ ...links, [name]: value });
    setChangedFields({ ...changedFields, [name]: true });
  }
  function handleValuesChange(event) {
    const { name, value } = event.target;
    setEmployee({ ...employee, [name]: value });
  }
  function clearForm() {
    setLinks({
      twitter: "",
      facebook: "",
      instagram: "",
      linkedin: "",
      youtube: "",
      github: "",
      website: "",
    });
    setEmployee({
      fullName: "",
      position: "",
      qualification: "",
      motivation: "",
    });
    setPhoto();
  }
  // HANDLE SUBMIT
  async function useHandleFormSubmit(event) {
    event.preventDefault();
    setError("");
    const formData = new FormData();
    formData.append("fullName", employee.fullName);
    formData.append("position", employee.position);
    formData.append("qualification", employee.qualification);
    formData.append("motivation", employee.motivation);
    formData.append("socialLinks", JSON.stringify(changedValues));
    if (photo) {
      formData.append("photo", photo);
    }
    setBody(formData);
  }
  useEffect(() => {
    async function postEmployee() {
      await mutate();
    }
    postEmployee();
    return () => {
      clearForm();
    };
  }, [body]);
  return (
    <div className="min-h-screen my-12 text-sm">
      <h1 className="heading3 mano text-center">ADD EMPLOYEE</h1>
      <form
        onSubmit={useHandleFormSubmit}
        className="border rounded-sm w-sm mx-auto mt-4 p-5"
      >
        <div className="mb-8">
          <Logo logoSize={"size-6"} textSize={"heading4"} />
          <p className="text-neutral-500">
            Please add an employee using the form below
          </p>
        </div>
        <div className="flex items-center gap-5">
          <p>Add Profile photo</p>
          <div
            title="Add Photo"
            className="border size-20 hover:bg-gray-500 trans rounded-sm border-gray-300 cursor-pointer mb-4"
          >
            <label htmlFor="photo" className="cursor-pointer">
              <img
                src={photo ? URL.createObjectURL(photo) : person_Placeholder}
                alt=""
                className="size-full object-cover"
              />
              <input
                type="file"
                required
                onChange={(e) => setPhoto(e.target.files[0])}
                id="photo"
                hidden
                name="photo"
              />
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="fullName">Full name</label>
          <div className="border mt-0.5 rounded-sm px-4 py-1.5 flex gap-4">
            <span>L</span>
            <input
              type="text"
              className="w-full outline-none border-none bg-transparent"
              minLength={3}
              maxLength={25}
              required
              value={employee.fullName}
              onChange={handleValuesChange}
              autoComplete="full name"
              placeholder="John Smith"
              name="fullName"
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="position">Position</label>
          <div className="border mt-0.5 rounded-sm px-4 py-1.5 flex gap-4">
            <span>L</span>
            <input
              type="text"
              className="w-full outline-none border-none bg-transparent"
              minLength={3}
              maxLength={50}
              required
              value={employee.position}
              onChange={handleValuesChange}
              autoComplete="position"
              placeholder="Manager"
              name="position"
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="qualification">Qualification</label>
          <div className="border mt-0.5 rounded-sm px-4 py-1.5 flex gap-4">
            <span>L</span>
            <input
              type="text"
              className="w-full outline-none border-none bg-transparent"
              minLength={3}
              maxLength={50}
              required
              value={employee.qualification}
              onChange={handleValuesChange}
              autoComplete="qualification"
              placeholder="Bsc. Computer sciences"
              name="qualification"
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="motivation">Motivation</label>
          <div className="border mt-0.5 rounded-sm px-4 py-1.5 flex gap-4">
            <textarea
              type="text"
              className="w-full outline-none border-none bg-transparent"
              placeholder="Motivation"
              name="motivation"
              required
              value={employee.motivation}
              onChange={handleValuesChange}
              rows={5}
            ></textarea>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="socialLinks">Social Links</label>
          <div>
            {platforms.map((platform) => (
              <div key={platform.name} className="relative">
                <div
                  className={`flex items-center p-3 border rounded cursor-pointer trans ${
                    visibleInputs[platform.name]
                      ? "border-accent bg-gray-200"
                      : "hover: border-gray-400"
                  } mb-2 py-1.5`}
                  onClick={() => toggleInput(platform.name)}
                >
                  <platform.icon
                    className={
                      visibleInputs[platform.name] ? "text-accent" : ""
                    }
                    size={24}
                  />
                </div>
                {visibleInputs[platform.name] && (
                  <div className="mt-2 p-3 border border-gray-300 rounded-md">
                    <label htmlFor={platform.name} className="block mb-0.5 ">
                      {platform.label} URL
                    </label>
                    <input
                      type="url"
                      name={platform.name}
                      id={platform.name}
                      value={links[platform.name]}
                      onChange={handleChange}
                      placeholder={platform.placeholder}
                      className="w-full p-2 border border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-accent"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <button
          disabled={disabledBTN}
          className="bg-black disabled:bg-neutral-500 hover:bg-black/50 cursor-pointer rounded-sm mt-4 text-white py-1.5 w-full"
        >
          {isPending ? "Adding... Please wait!" : "Add Employee"}
        </button>
        <p className="text-red-500 text-center mt-0.5 h-5">{error}</p>
      </form>
    </div>
  );
}

export default AddEmployee;
