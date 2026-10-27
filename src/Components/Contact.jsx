import React from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "5526d449-ea89-4988-84ad-044e46bf95d7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully");
      event.target.reset();
    } else {
      toast.error(data.message);
      setResult("");
    }
  };
  return (
    <div
      className="text-center w-full p-6  overflow-hidden px-20 lg:px-30"
      id="Contact"
    >
      <h1 className="text-3xl mb-2 text-center">
        Get In Touch{"  "}
        <span className="text-green-400 font-light text-2xl underline underline-offset decoration-1">
          Lets Work Together
        </span>
      </h1>
      <p className="text-gray-500 mx-auto">Let's Find Your Dream Property</p>
      <form onSubmit={onSubmit}>
        <div className="flex flex-wrap gap-6 justify-center mt-8">
          <div className="w-full md:w-1/2 text-left">
            Name
            <input
              className="w-full border border-gray-100 rounded py-3 px-4 mt-2"
              placeholder="Your Name"
              name="Name"
              type="text"
              required
            />
          </div>
          <div className="w-full md:w-1/2 text-left">
            Email
            <input
              className="w-full border border-gray-100 rounded py-3 px-4 mt-2"
              placeholder="Your Email"
              name="Email"
              type="email"
              required
            />
          </div>
          <div className="w-full md:w-1/2 text-left">
            Phone Number
            <input
              className="w-full border border-gray-100 rounded py-3 px-4 mt-2"
              placeholder="Number"
              name="Phone Number"
              type="number"
              required
            />
          </div>
          <div className="w-full md:w-1/2 text-left">
            Message
            <textarea
              className="w-full border border-gray-100 rounded py-3 px-4 mt-2 h-40 resize-none"
              placeholder="Message"
              name="Message"
              type="text"
              required
            ></textarea>
          </div>
        </div>
        <button className="px-6 py-4 font-light bg-green-600 text-white">
          {result ? result : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
