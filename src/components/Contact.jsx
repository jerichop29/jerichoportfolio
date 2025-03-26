import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaInstagram, FaFacebook, FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa"; // Import icons

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_vzs58ct',
        'template_xjuc04j',
        {
          from_name: form.name,
          to_name: "Jericho Pecho",
          from_email: form.email,
          to_email: "jerichopecho84@gmail.com",
          message: form.message,
        },
        '7QHXPYxsxnDZFbdQX'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <div className="flex items-center gap-4 justify-between">
            <button
              type='submit'
              className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
            >
              {loading ? "Sending..." : "Send"}
            </button>

            {/* Social Media Icons */}
            <div className="flex gap-4">
              <a href="https://www.instagram.com/jericho.p29/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-white text-2xl hover:text-pink-400 transition-colors" />
              </a>
              <a href="https://www.facebook.com/jericho.pecho.2024" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-white text-2xl hover:text-blue-700 transition-colors" />
              </a>
              <a href="https://www.linkedin.com/in/jericho-pecho-608412332/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-white text-2xl hover:text-blue-500 transition-colors" />
              </a>
              <a href="https://github.com/jerichop29" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-white text-2xl hover:text-purple-400 transition-colors" />
              </a>
              <a href="https://www.youtube.com/@JerichoDevWorks" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="text-white text-2xl hover:text-red-600 transition-colors" />
              </a>
            </div>
          </div>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");