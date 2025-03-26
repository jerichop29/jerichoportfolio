import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import Modal from "./Modal"; // Import the Modal component

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${
          scrolled ? "bg-primary" : "bg-transparent"
        }`}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
            <p className="text-white text-[18px] font-bold cursor-pointer flex ">
              Jericho's&nbsp;
              <span className="sm:block hidden">Website</span>
            </p>
          </Link>

          {/* Desktop Navigation */}
          <ul className="list-none hidden sm:flex flex-row gap-10">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => {
                  if (nav.id === "resume") {
                    setIsModalOpen(true); // Open modal when clicking Resume
                  } else {
                    setActive(nav.title);
                  }
                }}
              >
                {nav.id === "resume" ? (
                  <button className="focus:outline-none">Resume</button>
                ) : (
                  <a href={`#${nav.id}`}>{nav.title}</a>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Navigation */}
          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain"
              onClick={() => setToggle(!toggle)}
            />
            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
            >
              <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${
                      active === nav.title ? "text-white" : "text-secondary"
                    }`}
                    onClick={() => {
                      if (nav.id === "resume") {
                        setIsModalOpen(true); // Open modal in mobile menu too
                        setToggle(false);
                      } else {
                        setToggle(false);
                        setActive(nav.title);
                      }
                    }}
                  >
                    {nav.id === "resume" ? (
                      <button className="focus:outline-none">Resume</button>
                    ) : (
                      <a href={`#${nav.id}`}>{nav.title}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* Modal for Resume */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="p-6 bg-white rounded-lg shadow-xl max-w-lg">
          <h2 className="text-2xl font-bold mb-4">Resume</h2>
          <p className="text-gray-600">Here you can display your resume content or a download link.</p>
          <a
            href="/path-to-your-resume.pdf"
            download
            className="mt-4 inline-block bg-primary text-white py-2 px-4 rounded"
          >
            Download Resume
          </a>
        </div>
      </Modal>
    </>
  );
};

export default Navbar;
