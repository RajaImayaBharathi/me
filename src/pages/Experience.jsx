import React, { useEffect, useRef } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const RightSlide = useRef([]);
  const RightSlide1 = useRef([]);
  const LeftSlide = useRef([]);
  const LeftSlide1 = useRef([]);
  const DownSlide = useRef([]);

  const addToRightSlide = (el) => {
    if (el && !RightSlide.current.includes(el)) {
      RightSlide.current.push(el);
    }
  };

  const addToLeftSlide = (el) => {
    if (el && !LeftSlide.current.includes(el)) {
      LeftSlide.current.push(el);
    }
  };

  /* Card 2 smooth animaton purose */
  const addToRightSlide1 = (el) => {
    if (el && !RightSlide1.current.includes(el)) {
      RightSlide1.current.push(el);
    }
  };

  const addToLeftSlide1 = (el) => {
    if (el && !LeftSlide1.current.includes(el)) {
      LeftSlide1.current.push(el);
    }
  };

  const addToFadeIn = (el) => {
    if (el && !DownSlide.current.includes(el)) {
      DownSlide.current.push(el);
    }
  };

  useEffect(() => {
    gsap.fromTo(
      LeftSlide.current,
      { x: 400, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "sine.out",
        scrollTrigger: {
          trigger: LeftSlide.current,
          start: "top 80%", // Adjust the start point as needed
        },
        clearProps: "all"
      }
    );
    gsap.fromTo(
      LeftSlide1.current,
      { x: 400, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "sine.out",
        scrollTrigger: {
          trigger: LeftSlide1.current,
          start: "top 80%", // Adjust the start point as needed
        },
        clearProps: "all"
      }
    );

    gsap.to(DownSlide.current, {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: "power1.out",
      scrollTrigger: {
        trigger: DownSlide.current,
        start: "top 80%", // Adjust the start point as needed
      },
      clearProps: "x"
    });

    gsap.fromTo(
      RightSlide.current,
      { x: -400, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
        ease: "power1.out",
        scrollTrigger: {
          trigger: RightSlide.current,
          start: "top 80%", // Adjust the start point as needed
        },
        clearProps: "all"
      }
    );
    gsap.fromTo(
      RightSlide1.current,
      { x: -400, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
        ease: "power1.out",
        scrollTrigger: {
          trigger: RightSlide1.current,
          start: "top 80%", // Adjust the start point as needed
        },
        clearProps: "all"
      }
    );
  }, []);

  return (
    <React.Fragment>
      <div
        className="mt-20  min-h-screen-minus-100 flex flex-col "
        id="experience"
      >
        <div className="About-Container1">
          <div className="text-white font-HomeSection flex items-center">
            <header className="AboutHeader text-xl" ref={addToFadeIn}>
              <span>03</span>.My Experience
            </header>
            <div className="HeaderLiner ml-4"></div>
          </div>
        </div>

        <div
          className="socialIconsInMobile pb-3 pt-2 pl-9 lg:hidden flex-row text-white font-Navbar"
          ref={addToFadeIn}
        >
          <a
            href="https://github.com/RajaImayaBharathi"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn&ensp;.&ensp;
          </a>
          <a
            href="https://www.linkedin.com/in/raja-imaya-bharathi"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub&ensp;.&ensp;
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            LeetCode&ensp;&ensp;
          </a>
        </div>

        {/* First card */}
        <div className="m-10 mt-36 flex flex-col space-y-5" style={{ overflow: "hidden" }}>
          <div className="space-y-5 mb-3 mr-10">
            <div className="text-highlightOne" id="title" ref={addToRightSlide}>
              <p>
                <span className="font-Navbar">01</span>. Full Stack Engineer{" "}
                <span className="text-white">
                  &ensp;.&ensp;{` ( Sep 2019 ~ May 2024)`}
                </span>
              </p>
            </div>
            <a
              className="flex text-white items-center font-bold text-3xl space-x-4 "
              href="https://metaphorhub.com/"
              target="_blank" ref={addToRightSlide}
            >
              <img src="metaLogo.png" alt="logo" className="w-11 rounded-sm" />
              <img src="metaLogo.png" alt="M" className="w-11 rounded-sm" />
              <div ref={addToRightSlide}>
                <p>Metaphor Hub</p>
                <p className="text-sm font-normal">Coimbatore, India</p>
              </div>
              <GoArrowUpRight />
            </a>
            <div className="text-white max-w-[700px] companyInfo text-justify" ref={addToRightSlide}>
              <p>
                <span className="text-white">Metaphor Hub</span> is a prominant
                Custom Software development club and a club for open source{" "}
                {`contributor's`} founded in september 2019, dedicated to
                providing tailored solutions and strategic guidance to
                organizations across industries.
              </p>
            </div>
            <div className="text-white flex flex-wrap" ref={addToRightSlide}>
              <p
                className="mr-5 my-2 py-1 px-3 rounded-sm bg-gray-800 hover:bg-highlightOne text-white hover:text-zinc-900
               text-sm"
              >
                Java
              </p>
              <p
                className="mr-5 my-2 py-1 px-3 rounded-sm bg-gray-800 hover:bg-highlightOne text-white hover:text-zinc-900
               text-sm"
              >
                C
              </p>
              <p
                className="mr-5 my-2 py-1 px-3 rounded-sm bg-gray-800 hover:bg-highlightOne text-white hover:text-zinc-900
               text-sm"
              >
                Python
              </p>
              <p
                className="mr-5 my-2 py-1 px-3 rounded-sm bg-gray-800 hover:bg-highlightOne text-white hover:text-zinc-900
               text-sm"
              >
                C++
              </p>
              <p
                className="mr-5 my-2 py-1 px-3 rounded-sm bg-gray-800 hover:bg-highlightOne text-white hover:text-zinc-900
               text-sm"
              >
                C#
              </p>
              <p
                className="mr-5 my-2 py-1 px-3 rounded-sm bg-gray-800 hover:bg-highlightOne text-white hover:text-zinc-900
               text-sm"
              >
                NEXT JS
              </p>
              <p
                className="mr-5 my-2 py-1 px-3 rounded-sm bg-gray-800 hover:bg-highlightOne text-white hover:text-zinc-900
               text-sm"
              >
                React JS
              </p>
              <p
                className="mr-5 my-2 py-1 px-3 rounded-sm bg-gray-800 hover:bg-highlightOne text-white hover:text-zinc-900
               text-sm"
              >
                Node JS
              </p>
              <p
                className="mr-5 my-2 py-1 px-3 rounded-sm bg-gray-800 hover:bg-highlightOne text-white hover:text-zinc-900
               text-sm"
              >
                Express.js
              </p>
              <p
                className="mr-5 my-2 py-1 px-3 rounded-sm bg-gray-800 hover:bg-highlightOne text-white hover:text-zinc-900
               text-sm"
              >
                Restful API
              </p>
              <p
                className="mr-5 my-2 py-1 px-3 rounded-sm bg-gray-800 hover:bg-highlightOne text-white hover:text-zinc-900
               text-sm"
              >
                Postgres SQL
              </p>
              <p
                className="mr-5 my-2 py-1 px-3 rounded-sm bg-gray-800 hover:bg-highlightOne text-white hover:text-zinc-900
               text-sm"
              >
                MongoDB
              </p>
              <p
                className="mr-5 my-2 py-1 px-3 rounded-sm bg-gray-800 hover:bg-highlightOne text-white hover:text-zinc-900
               text-sm"
              >
                MySQL
              </p>
              <p
                className="mr-5 my-2 py-1 px-3 rounded-sm bg-gray-800 hover:bg-highlightOne text-white hover:text-zinc-900
               text-sm"
              >
                AWS
              </p>
              <p
                className="mr-5 my-2 py-1 px-3 rounded-sm bg-gray-800 hover:bg-highlightOne text-white hover:text-zinc-900
               text-sm"
              >
                Git & Github
              </p>
              <p
                className="mr-5 my-2 py-1 px-3 rounded-sm bg-gray-800 hover:bg-highlightOne text-white hover:text-zinc-900
               text-sm"
              >
                JSON Web Tokens
              </p>
            </div>
          </div>
          <div className="p-10 rounded-lg bg-zinc-900 text-white space-y-4 experienceInfo text-justify" ref={addToLeftSlide} style={{ overflow: "hidden" }}>
            <p>
              As a <span>Freelance full stack Engineer</span>, I developed and
              debugged cutting-edge progressive Web Applications, SaaS{" "}
              {`(Software as a Service)`}, achieving a remarkable 60% increase
              in loading speed with lightning-fast performance.
            </p>
            <p>
              In Metaphor Hub I have completed more then{" "}
              <span>10+ full stack project</span> for a real time clients all
              over india. Crafted highly interactive, creative and user-friendly
              interfaces that significatly boosted client efficiency by 40% and
              sales through bespoke, top-tire solutions.
            </p>
            <p>
              Focused on debugging and optimizing code to improve efficiency and
              readability, and colloborating with frontend and backend sector to
              implement enhancements aligned with business goals
            </p>
            <p>Some of my clients are</p>
            <div className="text-white flex flex-wrap" ref={addToFadeIn}>
              <p
                className="mr-5 my-2 py-1 px-3 rounded-sm bg-gray-800 hover:bg-highlightOne text-white hover:text-zinc-900
               text-sm "
              >
                Hyndai Motors
              </p>
              <p
                className="mr-5 my-2 py-1 px-3 rounded-sm bg-gray-800 hover:bg-highlightOne text-white hover:text-zinc-900
               text-sm"
              >
                KMP Speed Parcel Service
              </p>
              <p
                className="mr-5 my-2 py-1 px-3 rounded-sm bg-gray-800 hover:bg-highlightOne text-white hover:text-zinc-900
               text-sm"
              >
                Hindustan Travel
              </p>
            </div>
          </div>
        </div>

        {/* Second card */}
        <div className="m-10 flex flex-col lg:flex-row space-y-5" style={{ overflow: "hidden" }}>
          <div className="space-y-5 mb-3 mr-10">
            <div className="text-highlightOne" id="title" ref={addToRightSlide1}>
              <div>
                <span className="font-Navbar">02</span>. Software Engineer{" "}
                <span className="text-white">
                  &ensp;.&ensp;{` ( July 2024 ~ Sep 2024)`}
                </span>
              </div>
            </div>
            <a
              href="https://www.opmcorporation.com/"
              target="_blank"
              className="flex text-white items-center font-bold text-3xl space-x-4 "
              ref={addToRightSlide1}
            >
              <img
                src="OPMLogo.PNG"
                alt=""
                className="w-10 h-11 rounded-sm"
              />
              <div>
                <p>OPM Corporation</p>
                <p className="text-sm font-normal">Bengaluru, India</p>
              </div>
              <GoArrowUpRight />
            </a>
            <div className="text-white max-w-[700px] companyInfo text-justify" ref={addToRightSlide1}>
              <p>
                <span className="text-white">OPM Corporation</span> is a leading
                business consulting firm founded in June 2020, dedicated to
                providing tailored solutions and strategic guidance to
                organizations across industries. With a team of seasoned
                consultants, industry experts, and innovative thinkers.
              </p>
            </div>
            <div className="text-white flex flex-wrap" ref={addToRightSlide1}>
              <p
                className="mr-5 my-2 py-1 px-3 rounded-sm bg-gray-800 hover:bg-highlightOne text-white hover:text-zinc-900
               text-sm"
              >
                NEXT JS
              </p>
              <p
                className="mr-5 my-2 py-1 px-3 rounded-sm bg-gray-800 hover:bg-highlightOne text-white hover:text-zinc-900
               text-sm"
              >
                React JS
              </p>
              <p
                className="mr-5 my-2 py-1 px-3 rounded-sm bg-gray-800 hover:bg-highlightOne text-white hover:text-zinc-900
               text-sm"
              >
                Node JS
              </p>
              <p
                className="mr-5 my-2 py-1 px-3 rounded-sm bg-gray-800 hover:bg-highlightOne text-white hover:text-zinc-900
               text-sm"
              >
                Express.js
              </p>
              <p
                className="mr-5 my-2 py-1 px-3 rounded-sm bg-gray-800 hover:bg-highlightOne text-white hover:text-zinc-900
               text-sm"
              >
                Restful API
              </p>
              <p
                className="mr-5 my-2 py-1 px-3 rounded-sm bg-gray-800 hover:bg-highlightOne text-white hover:text-zinc-900
               text-sm"
              >
                Postgres SQL
              </p>
              <p
                className="mr-5 my-2 py-1 px-3 rounded-sm bg-gray-800 hover:bg-highlightOne text-white hover:text-zinc-900
               text-sm"
              >
                AWS
              </p>
              <p
                className="mr-5 my-2 py-1 px-3 rounded-sm bg-gray-800 hover:bg-highlightOne text-white hover:text-zinc-900
               text-sm"
              >
                Git & Github
              </p>
              <p
                className="mr-5 my-2 py-1 px-3 rounded-sm bg-gray-800 hover:bg-highlightOne text-white hover:text-zinc-900
               text-sm"
              >
                JSON Web Tokens
              </p>
            </div>
          </div>
          <div className="p-10 rounded-lg bg-zinc-900 text-white space-y-4 lg:min-w-[500px] lg:max-w-[500px] experienceInfo text-justify" ref={addToLeftSlide1} >
            <p>
              As an <span>Software Developer Engineer Intern</span>, I developed
              and enhanced the software by developing productive, responsive
              components and robust backend for cross-functional browsers and
              application support.
            </p>
            <p>
              Focused on debugging and optimizing code to improve efficiency and
              readability, and colloborating with frontend and backend sector to
              implement enhancements aligned with business goals
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Experience;
