import React, { useEffect, useState } from "react";
import Logo from "../components/Logo";
import { person_Placeholder } from "../assets/assest";
import myFetch from "../utils/myFetch";
import useMutate from "../hooks/useMutate";
import { Loading } from "../components/exportComp";

function AddProjects() {
  const [project, setProject] = useState();
  function returnFn() {
    const fetchDetails = {
      method: "post",
      endpoint: "/api/v2/projects/create",
      body: project,
      id: "",
    };
    return myFetch(fetchDetails);
  }
  const { isPending, mutate, isError } = useMutate(
    returnFn,
    "Add-project",
    "projects"
  );
  
  const [formData, setFormData] = useState({
    projectName: "",
    designer: "",
    category: "",
    url: "",
    description: "",
    story: "",
    approach: "",
    images: [],
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  async function handleFormSubmit(event) {
    event.preventDefault();
    const body = new FormData();
    body.append("projectName", formData.projectName);
    body.append("designer", formData.designer);
    body.append("url", formData.url);
    body.append("category", formData.category);
    body.append("description", formData.description);
    body.append("story", formData.story);
    body.append("approach", formData.approach);

    //  append images
    // Append only the photos that have been selected
    for (let i = 0; i < formData.images.length; i++) {
      body.append("images", formData.images[i]);
    }

    setProject(body);
  }

  useEffect(() => {
    if (project) {
      mutate();
    }
    return () => {};
  }, [project]);

  if (isPending) return <Loading />;

  if (isError)
    return (
      <div className="h-screen grid place-items-center text-center">
        <div>
          <h2 className="heading3">Error posting project</h2>
          <p>Please try again later</p>
        </div>
      </div>
    );

  return (
    <div className="my-12 grid place-items-center">
      <form
        onSubmit={handleFormSubmit}
        className="border border-gray-300 rounded-lg p-8 shadow-accent/50 shadow-lg w-sm md:w-lg "
      >
        <Logo logoSize={"size-8"} textSize={"heading4"} />
        <h1 className="mx-4">Create Project</h1>
        <p className="text-sm text-gray-500 mx-4 mb-8">
          Please submit your project using the form below.
        </p>
        <div className="">
          <p className="mb-2">Upload Images</p>
          <div className="flex gap-3 justify-between mb-4 cursor-pointer">
            <label htmlFor="image1">
              <img
                className="size-20"
                src={
                  formData.images[0]
                    ? URL.createObjectURL(formData.images[0])
                    : person_Placeholder
                }
                alt=""
              />
              <input
                type="file"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    images: [...formData.images, e.target.files[0]],
                  })
                }
                id="image1"
                hidden
                name="images"
              />
            </label>
            <label htmlFor="image2">
              <img
                className="size-20"
                src={
                  formData.images[1]
                    ? URL.createObjectURL(formData.images[1])
                    : person_Placeholder
                }
                alt=""
              />
              <input
                type="file"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    images: [...formData.images, e.target.files[0]],
                  })
                }
                id="image2"
                hidden
                name="images"
              />
            </label>
            <label htmlFor="image3">
              <img
                className="size-20"
                src={
                  formData.images[2]
                    ? URL.createObjectURL(formData.images[2])
                    : person_Placeholder
                }
                alt=""
              />
              <input
                type="file"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    images: [...formData.images, e.target.files[0]],
                  })
                }
                id="image3"
                name="images"
                hidden
              />
            </label>
            <label htmlFor="image4">
              <img
                className="size-20"
                src={
                  formData.images[3]
                    ? URL.createObjectURL(formData.images[3])
                    : person_Placeholder
                }
                alt=""
              />
              <input
                type="file"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    images: [...formData.images, e.target.files[0]],
                  })
                }
                id="image4"
                name="images"
                hidden
              />
            </label>
          </div>
        </div>
        <div className="flex mb-4 gap-4 flex-col md:flex-row">
          <input
            type="text"
            placeholder="Project name"
            required
            value={formData.projectName}
            onChange={handleChange}
            name="projectName"
            className=" border md:w-1/2 border-gray-300 rounded px-4 py-2"
          />
          <input
            type="text"
            placeholder="Designer"
            required
            value={formData.designer}
            onChange={handleChange}
            name="designer"
            className=" border md:w-1/2 border-gray-300 rounded px-4 py-2"
          />
        </div>
        <div className="flex mb-4 gap-4 flex-col md:flex-row">
          <input
            type="url"
            placeholder="Project URL"
            value={formData.url}
            onChange={handleChange}
            name="url"
            className=" border md:w-1/2 border-gray-300 rounded px-4 py-2"
          />
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className=" border md:w-1/2 cursor-pointer border-gray-300 rounded px-4 py-2"
            id=""
          >
            <option value="">Select category</option>
            <option value="Website">Websit</option>
            <option value="Apps">Mobile app</option>
            <option value="AI">AI Intergration</option>
            <option value="UX/UI">UI/UX Designe</option>
            <option value="Branding">Branding</option>
            <option value="SEO">SEO</option>
          </select>
        </div>

        <textarea
          name="description"
          rows={4}
          required
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          className="px-4 mb-4 py-2 border border-gray-300 rounded w-full"
        ></textarea>
        <textarea
          name="story"
          rows={4}
          required
          value={formData.story}
          onChange={handleChange}
          placeholder="Story"
          className="px-4 mb-4 py-2 border border-gray-300 rounded w-full"
        ></textarea>
        <textarea
          name="approach"
          required
          value={formData.approach}
          onChange={handleChange}
          rows={4}
          placeholder="Approach"
          className="px-4 mb-4 py-2 border border-gray-300 rounded w-full"
        ></textarea>
        <button className="my-4 bg-black text-white w-full py-2 rounded cursor-pointer hover:bg-black/90">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddProjects;
