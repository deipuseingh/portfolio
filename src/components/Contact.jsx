import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full px-[12%] py-10 bg-[url('./images/footer-bg-color.png')] bg-no-repeat bg-[length:905_auto] bg-center"
    >
      <h4 className="text-center mb-2 text-3xl font-Ovo">Connect with me</h4>
      <h2 className="text-center text-5xl font-Ovo"></h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I'd love to hear from you! If you have any questions, comments or
        feedback, please use the form below.
      </p>

      <form
        method="POST"
        action="https://api.web3forms.com/submit"
        className="max-w-2xl mx-auto"
      >
        <input
          type="hidden"
          name="access_key"
          value="9ed3f573-14b5-46fb-aa9d-3162e33fbdeb"
        />

        <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
          <input
            type="text"
            placeholder="Enter your name"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-gray-700"
            required
            name="name"
          />
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-gray-700"
            required
            name="email"
          />
        </div>
        <textarea
          rows="6"
          placeholder="Enter your message"
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-gray-700 mb-6"
          required
          name="message"
        ></textarea>
        <button className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-gray-500 duration-500 hover:shadow-2xl ">
          Submit now
        </button>
      </form>
    </div>
  );
};

export default Contact;
