import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full bg-gradient-to-b from-black to-gray-800 p-4 text-white h-screen"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">
            Submit the form below to get in touch with me :)
          </p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/116dc5be-5cc9-4687-a518-efc209b792db"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md  focus:outline-none"
            />
            <textarea
              name="message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
            ></textarea>

            <button className="px-6 py-3 my-8 mx-auto bg-gradient-to-b from-cyan-500 to-blue-500 rounded-md flex items-center hover:scale-110 duration-300">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
