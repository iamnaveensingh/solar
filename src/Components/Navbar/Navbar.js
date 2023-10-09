import Logo from "./Logo";
import { IoCall } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [active, setactive] = useState("home")
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const [phone, setPhone] = useState("hidden");
  const handlePhone = () => {
    phone === "hidden" ? setPhone("") : setPhone("hidden");
  };

  console.log(active)
  return (
    <>
      <header >
        <nav className="bg-gray-100 drop-shadow-lg fixed w-full z-50 border-gray-200 shadow-lg px-1 lg:px-6 py-1 dark:bg-gray-800">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="/" className="flex items-center">
              <Logo />
            </a>
            <div className=" lg:order-2">
              <div className="flex justify-between">
                <a
                  href="tel:+91 77373 30685"
                  className="text-white lg:hidden hover:text-black hover:scale-105 hover:font-bold hover:bg-blue-800 bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg px-4 lg:min-w-[140px] min-w-[113px] lg:px-5 py-1 lg:py-2 mr-1 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                >
                  <div className="flex text-sm  lg:text-lg">
                    <IoCall className="lg:text-2xl text-xl lg:mr-1 mr-1 lg:mt-1" />
                    Call Now
                  </div>
                </a>
                <a
                  onClick={() => {
                    scrollToSection('contact');
                    setactive('contact');
                  }}
                  className="text-white hidden lg:block hover:text-black hover:scale-105 hover:font-bold hover:bg-blue-800 bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg px-4 lg:min-w-[140px] min-w-[113px] lg:px-5 py-1 lg:py-2 mr-1 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                >
                  <div className="flex text-sm  lg:text-lg">
                    <FaMapMarkerAlt className="lg:text-2xl text-xl lg:mr-1 mr-1 lg:mt-1" />
                    Contact Us
                  </div>
                </a>
                <button
                  onClick={handlePhone}
                  data-collapse-toggle="mobile-menu-2"
                  type="button"
                  className="inline-flex items-center p-0  lg:p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  aria-controls="mobile-menu-2"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {phone === "hidden" ? (
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            <div
              className={` ${phone} justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <a
                    onClick={() => {
                      scrollToSection('home');
                      setactive('home');
                    }}
                    className={`block py-2 pr-4 pl-3 ${active==="home"?("dark:text-white  font-bold"):("")}  text-gray-700 rounded bg-primary-700 lg:bg-transparent dark:text-gray-400 lg:text-primary-700 lg:p-0 `}
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>

                <li>
                  <a
                   onClick={() => {
                    scrollToSection('work');
                    setactive('work');
                  }}
                    className={`block py-2 pr-4 pl-3 ${active==="work"?("dark:text-white  font-bold"):("")}  text-gray-700 rounded bg-primary-700 lg:bg-transparent dark:text-gray-400 lg:text-primary-700 lg:p-0 `}
                  >
                    Our Works
                  </a>
                </li>
                <li>
                  <a
                    // href="/testimonials"
                    onClick={() => {
                    scrollToSection('testimonials');
                    setactive('testimonials');
                  }}
                    className={`block py-2 pr-4 pl-3 ${active==="testimonials"?("dark:text-white  font-bold"):("")}  text-gray-700 rounded bg-primary-700 lg:bg-transparent dark:text-gray-400 lg:text-primary-700 lg:p-0 `}
                  >
                    Reviews
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                    scrollToSection('faq');
                    setactive('faq');
                  }}
                    className={`block py-2 pr-4 pl-3 ${active==="faq"?("dark:text-white  font-bold"):("")}  text-gray-700 rounded bg-primary-700 lg:bg-transparent dark:text-gray-400 lg:text-primary-700 lg:p-0 `}
                  >
                    FAQ
                  </a>
                </li>

                <li>
                  <a
                    onClick={() => {
                    scrollToSection('contact');
                    setactive('contact');
                  }}
                    className={`block py-2 pr-4 pl-3 ${active==="contact"?("dark:text-white  font-bold"):("")}  text-gray-700 rounded bg-primary-700 lg:bg-transparent dark:text-gray-400 lg:text-primary-700 lg:p-0 `}
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
