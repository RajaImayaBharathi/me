import React, { useEffect, useRef, useState } from "react";
import "../App.css";
import { Link } from "react-scroll";
import gsap from "gsap";
import { motion } from 'framer-motion';

const NavBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navItems = [
    { href: "home", label: "Home" },
    { href: "about", label: "About Me" },
    { href: "experience", label: "Experience" },
    { href: "projects", label: "Projects" },
    { href: "achievements", label: "Achievements" },
  ];

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };


  /* Animation Setup */
  const NavRef= useRef(null);
  const initialMount = useRef(true);

  useEffect(() => {
    if (initialMount.current) {
      gsap.fromTo(
        NavRef.current,
        { y: -100 ,opacity: 0},
        { y: 0, opacity: 1, duration: 1, ease: "power1.out" }
      );
      initialMount.current = false;
    }
  }, []);


  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: { opacity: 0, y: '-50px' },
    visible: { opacity: 1, y: '0' },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: '-30px' },
    visible: (i) => ({
      opacity: 1,
      x: '0',
      transition: { delay: i * 0.1 },
    }),
  };
  return (
    <React.Fragment>
      <div className="navbarStyling bg-mainDark fixed w-full top-0" ref={NavRef}>
      <nav className="flex lg:bg-SecondaryDark justify-between items-center py-2 px-8 text-white mx-4 my-4  rounded-full font-Navbar">
            
            <div className="cursor-pointer">
              <img src="iconImg.svg" alt="" />
            </div>
  
            <div className="hidden lg:flex items-center">
              <p className="text-sm">{`{/*`}&ensp;&ensp;</p>
              <div className="flex space-x-8 items-center">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.href}
                    spy={true} 
                    smooth={true} 
                    offset={-120} 
                    duration={500} 
                    className="hover:border-b-2 border-highlightOne hover:transition ease-in-out rounded-sm"
                  >
                    <span className="text-highlightOne">{`0${index+1}`}</span>.
                    {item.label}
                  </Link>
                ))}
              </div>
              <p className="items-center text-sm">&ensp;&ensp;{`}`}</p>
            </div>
  
  
            <div className="hidden lg:flex button-borders">
              <button className="NavBarBtn">{`{Let's Talk}`}</button>
            </div>
  
            <div className="lg:hidden">
                <button
                  type="button"
                  className="text-white focus:outline-none"
                  onClick={toggleModal}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    ></path>
                  </svg>
                </button>
              </div>
          </nav>
      </div>

      {isModalOpen && (
        <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={backdropVariants}
      >
        <motion.div
          className="bg-mainDark p-6 rounded-lg w-3/4 max-w-sm min-h-[500px]"
          variants={modalVariants}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl text-white">Menu</h2>
            <button
              type="button"
              className="text-white focus:outline-none"
              onClick={toggleModal}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div className="flex flex-col space-y-4">
            {navItems.map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={linkVariants}
              >
                <Link
                  to={item.href}
                  spy={true}
                  smooth={true}
                  offset={-120}
                  duration={500}
                  className="text-white cursor-pointer"
                  onClick={toggleModal}
                >
                  <span className="text-highlightOne">{`0${index + 1}`}</span>.
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
      )}
    </React.Fragment>
  );
};

export default NavBar;
