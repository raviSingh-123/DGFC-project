import React from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Handle form submission (e.g., API call)
    alert("Form Submitted Successfully!");
  };

  return (
    <div className="flex justify-center items-center bg-blue-100 ">
     <div className="bg-blue-950 text-white p-6 rounded-lg shadow-lg w-full max-w-2xl min-w-[400px] px-10">
        <h2 className="text-center text-xl font-bold mb-4 bg-black rounded-xl py-5">CONTACT US</h2>
        <p className="text-center text-lg font-semibold mb-6">
          We Will Be Glad To Help You
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-black">
          {/* Name Input */}
          <div>
            <input
              type="text"
              placeholder="Name"
              {...register("name", { required: "Name is required" })}
              className="w-full p-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          {/* Company Name Input */}
          <div>
            <input
              type="text"
              placeholder="Company Name"
              {...register("company", { required: "Company name is required" })}
              className="w-full p-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.company && (
              <p className="text-red-500 text-sm">{errors.company.message}</p>
            )}
          </div>

          {/* Email Input */}
          <div>
            <input
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email address",
                },
              })}
              className="w-full p-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Phone Number Input */}
          <div>
            <input
              type="tel"
              placeholder="Phone No."
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Invalid phone number",
                },
              })}
              className="w-full p-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>

          {/* Message Input */}
          <div>
            <textarea
              placeholder="Message"
              {...register("message", { required: "Message is required" })}
              className="w-full p-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows="4"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-900 hover:bg-blue-700 text-white py-2 rounded transition duration-300"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;