import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";
import myFetch from "../utils/myFetch";
import Loading from "../components/Loading";

const deleteTestimonial = async (id) => {
  await axios.delete(`/api/testimonials/${id}`);
};

const Testimonials = () => {
  function fetchData() {
    const fetchDetails = {
      method: "get",
      endpoint: "/api/v2/testimonials/list",
      body: "",
      id: "",
    };
    return myFetch(fetchDetails);
  }

  const queryClient = useQueryClient();

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["testimonials"],
    queryFn: fetchData,
  });

  const { mutate: removeTestimonial } = useMutation({
    mutationFn: deleteTestimonial,
    onSuccess: (data) => {
      toast.success(data?.message);
      queryClient.invalidateQueries({ queryKey: ["testimonials"] });
    },
  });

  if (isLoading) return <Loading />;

  if (isError) {
    return (
      <div className="grid min-h-screen place-items-center text-center ">
        <div>
          <h2 className="heading4">Error fetching Project</h2>
          <p>Please try again later</p>
          <button
            className="cursor-pointer hover:bg-slate-300 px-4 py-1 rounded trans"
            onClick={() => refetch()}
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="heading3 mano text-center mb-4">Manage Testimonials</h2>
      {data?.testimonies.length === 0 ? (
        <div className="min-h-[80vh] grid place-items-center">
          <h2 className="heading4">No Testimonials Found.</h2>
        </div>
      ) : (
        <ul className="space-y-4">
          {data.map((testimonial) => (
            <li
              key={testimonial._id}
              className="p-4 bg-gray-100 rounded-lg flex justify-between items-center"
            >
              <div>
                <p className="text-lg font-semibold">{testimonial.name}</p>
                <p className="text-gray-600">{testimonial.message}</p>
              </div>
              <button
                onClick={() => removeTestimonial(testimonial._id)}
                className="text-red-600 hover:text-red-800 font-semibold"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Testimonials;
