import React, { useEffect, useRef } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
import { PiHandshakeLight } from "react-icons/pi";
import { gsap } from "gsap";

const Project = () => {
  const LeftSlide1 = useRef([]);
  const RightSlide1 = useRef([]);
  const LeftSlide2 = useRef([]);
  const DownSlide = useRef(null);

  const addToLeftSlide1 = (el) => {
    if (el && !LeftSlide1.current.includes(el)) {
      LeftSlide1.current.push(el);
    }
  };

  const addToRightSlide1 = (el) => {
    if (el && !RightSlide1.current.includes(el)) {
      RightSlide1.current.push(el);
    }
  };

  const addToLeftSlide2 = (el) => {
    if (el && !LeftSlide2.current.includes(el)) {
      LeftSlide2.current.push(el);
    }
  };

  useEffect(() => {
    gsap.fromTo(
      LeftSlide1.current,
      { x: 400, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
        ease: "sine.out",
        scrollTrigger: {
          trigger: LeftSlide1.current,
          start: "top 100%", // Adjust the start point as needed
        },
        clearProps: "all",
      }
    );
    gsap.fromTo(
      LeftSlide2.current,
      { x: 400, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
        ease: "sine.out",
        scrollTrigger: {
          trigger: LeftSlide2.current,
          start: "top 100%", // Adjust the start point as needed
        },
        clearProps: "all",
      }
    );
    gsap.to(DownSlide.current, {
      x: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.15,
      ease: "power1.out",
      scrollTrigger: {
        trigger: DownSlide.current,
        start: "top 100%", // Adjust the start point as needed
      },
      clearProps: "x",
    });
  
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
          start: "top 100%", // Adjust the start point as needed
        },
        clearProps: "all",
      }
    ); 
  }, []);

  return (
    <React.Fragment>
      <div style={{ overflow: "hidden" }}>
        <div className="About-Container1" id="projects">
          <div className="text-white font-HomeSection flex items-center" ref={DownSlide}>
            <header className="AboutHeader text-xl">
              <span>04</span>.My Projects
            </header>
            <div className="HeaderLiner ml-4"></div>
          </div>
        </div>

        <div>
          {/* First Project */}
          <div className="lg:m-10 lg:mt-36 mt-5 p-5 flex flex-col-reverse lg:flex-row space-y-5 ">
            <div className="flex items-center mt-10" ref={addToLeftSlide1}>
              <img
                src="webapp1.PNG"
                alt=""
                className="min-h-[160px] max-h-[180px] max-w-[300px] p min-w-[300px]"
              />
            </div>
            <div className="lg:ml-10">
              <div className="text-white flex items-center" ref={addToLeftSlide1}>
                <div className="">
                  <div className="flex mb-1">
                    <div className="sh-10 w-10 rounded-md mr-2">
                      <img src="logo.png" alt="" />
                    </div>
                    <p className="text-white font-bold text-2xl">
                      Intellect WorkFlows
                    </p>
                  </div>
                  <p className="text-sm">
                    <span>Duration: </span>
                    {` 2023 May to 2023 Dec`}
                  </p>
                </div>
                <div className="flex items-center space-x-5 text-zinc-400">
                  {/* <GoArrowUpRight className="text-3xl ml-10 cursor-pointer" /> */}
                  <FaGithub className="text-2xl ml-10 cursor-pointer" />
                </div>
              </div>
              <div className="mt-5 text-white" ref={addToLeftSlide1}>
                <p className="text-justify ">
                  &emsp;&emsp;&ensp;In collaboration with the{" "}
                  <span>Ministry of Education</span> and the{" "}
                  <span>Government of India</span>, we are developing a
                  comprehensive fleet management platform designed to monitor
                  government vehicles and control emissions. This platform aims
                  to enhance the daily commute and travel experience by
                  providing real-time data on bus, cab, and other vehicle
                  movements, routes, and current statuses. With high accuracy
                  and user-friendly access, it will offer detailed route
                  information, emission control tracking, and real-time updates,
                  contributing to improved public transportation efficiency,
                  environmental sustainability, and public convenience.
                </p>
                <div className="text-white flex flex-wrap mt-3">
                  <p
                    className="mr-5 my-2 py-1 px-3 rounded-sm bg-gray-800 hover:bg-highlightOne text-white hover:text-zinc-900
               text-sm"
                  >
                    ReactJs
                  </p>
                  <p
                    className="mr-5 my-2 py-1 px-3 rounded-sm bg-gray-800 hover:bg-highlightOne text-white hover:text-zinc-900
               text-sm"
                  >
                    NodeJS
                  </p>
                  <p
                    className="mr-5 my-2 py-1 px-3 rounded-sm bg-gray-800 hover:bg-highlightOne text-white hover:text-zinc-900
               text-sm"
                  >
                    ExpressJS
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
                    Kafka
                  </p>
                  <p
                    className="mr-5 my-2 py-1 px-3 rounded-sm bg-gray-800 hover:bg-highlightOne text-white hover:text-zinc-900
               text-sm"
                  >
                    OAuth
                  </p>
                  <p
                    className="mr-5 my-2 py-1 px-3 rounded-sm bg-gray-800 hover:bg-highlightOne text-white hover:text-zinc-900
               text-sm"
                  >
                    RestFull API
                  </p>
                  <p
                    className="mr-5 my-2 py-1 px-3 rounded-sm bg-gray-800 hover:bg-highlightOne text-white hover:text-zinc-900
               text-sm"
                  >
                    Tailwind
                  </p>
                  <p
                    className="mr-5 my-2 py-1 px-3 rounded-sm bg-gray-800 hover:bg-highlightOne text-white hover:text-zinc-900
               text-sm"
                  >
                    GitHub
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Second Project */}
          <div className="lg:m-10 lg:mt-36 mt-5 p-5 flex flex-col-reverse lg:flex-row space-y-5">
            <div className="flex items-center mt-10" ref={addToRightSlide1}>
              <img
                src="TransItHub2.PNG"
                alt=""
                className="min-h-[160px] max-h-[180px] max-w-[300px] p min-w-[300px]"
              />
            </div>
            <div className="lg:ml-10">
              <div className="text-white flex items-center" ref={addToRightSlide1}>
                <div className="">
                  <div className="flex mb-1">
                    <div className="h-8 w-8 rounded-md mr-2">
                      <img src="TransItHublogo.png" alt="" />
                    </div>
                    <p className="text-white font-bold text-2xl">TransIt-HUB</p>
                  </div>
                  <p className="text-sm">
                    <span>Duration: </span>
                    {` 2024 Jan to 2024 Mar`}
                  </p>
                </div>
                <div className="flex items-center space-x-5 text-zinc-400">
                  {/* <GoArrowUpRight className="text-3xl ml-10 cursor-pointer" /> */}
                  <FaGithub className="text-2xl ml-10 cursor-pointer" />
                </div>
              </div>
              <div className="mt-5 text-white" ref={addToRightSlide1}>
                <p className="text-justify">
                  &emsp;&emsp;&ensp;TransIt Book, Designed specifically for
                  travel agencies and courier companies, it offers comprehensive
                  cash flow monitoring from different channels and
                  decision-making tools and sold to{" "}
                  <span>Hindustan Travels</span> and{" "}
                  <span>KMP Speed Parcel Service</span>
                </p>
              </div>
              <div className="text-white flex flex-wrap mt-3" ref={addToRightSlide1}>
                <p
                  className="mr-5 my-2 py-1 px-3 rounded-sm bg-gray-800 hover:bg-highlightOne text-white hover:text-zinc-900
               text-sm"
                >
                  ReactJs
                </p>
                <p
                  className="mr-5 my-2 py-1 px-3 rounded-sm bg-gray-800 hover:bg-highlightOne text-white hover:text-zinc-900
               text-sm"
                >
                  NodeJS
                </p>
                <p
                  className="mr-5 my-2 py-1 px-3 rounded-sm bg-gray-800 hover:bg-highlightOne text-white hover:text-zinc-900
               text-sm"
                >
                  ExpressJS
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
                  OAuth2
                </p>
                <p
                  className="mr-5 my-2 py-1 px-3 rounded-sm bg-gray-800 hover:bg-highlightOne text-white hover:text-zinc-900
               text-sm"
                >
                  RestFull API
                </p>
                <p
                  className="mr-5 my-2 py-1 px-3 rounded-sm bg-gray-800 hover:bg-highlightOne text-white hover:text-zinc-900
               text-sm"
                >
                  Tailwind
                </p>
                <p
                  className="mr-5 my-2 py-1 px-3 rounded-sm bg-gray-800 hover:bg-highlightOne text-white hover:text-zinc-900
               text-sm"
                >
                  Vercel
                </p>
                <p
                  className="mr-5 my-2 py-1 px-3 rounded-sm bg-gray-800 hover:bg-highlightOne text-white hover:text-zinc-900
               text-sm"
                >
                  GitHub
                </p>
              </div>
            </div>
          </div>

          {/* Third Project */}
          <div className="lg:m-10 lg:mt-36 mt-5 p-5 flex flex-col-reverse lg:flex-row space-y-5 ">
            <div className="flex items-center mt-10" ref={addToLeftSlide2}>
              <img
                src="autoassistHub.PNG"
                alt=""
                className="min-h-[160px] max-h-[180px] max-w-[300px] p min-w-[300px]"
              />
            </div>
            <div className="lg:ml-10">
              <div className="text-white flex items-center" ref={addToLeftSlide2}>
                <div className="">
                  <div className="flex mb-1">
                    {/* <div className="h-8 w-8 rounded-md mr-2">
                      <img src="" alt="" />
                    </div> */}
                    <p className="text-white font-bold text-2xl">
                      Auto-Assist HUB
                    </p>
                  </div>
                  <p className="text-sm">
                    <span>Duration: </span>
                    {` 2024 Apr to 2024 June`}
                  </p>
                </div>
                <div className="flex items-center space-x-5 text-zinc-400">
                  {/* <GoArrowUpRight className="text-3xl ml-10 cursor-pointer" /> */}
                  <FaGithub className="text-2xl ml-10 cursor-pointer" />
                </div>
              </div>
              <div className="mt-5 text-white" ref={addToLeftSlide2}>
                <p className="text-justify">
                  &emsp;&emsp;&ensp;Auto Assist Hub is a SaaS product which is
                  used to automate the communication between the Service
                  centers, garages and their customers but providing a custom
                  web application software.
                </p>
              </div>

              <div className="text-white flex flex-wrap mt-3" ref={addToLeftSlide2}>
                <p
                  className="mr-5 my-2 py-1 px-3 rounded-sm bg-gray-800 hover:bg-highlightOne text-white hover:text-zinc-900
               text-sm"
                >
                  ReactJs
                </p>
                <p
                  className="mr-5 my-2 py-1 px-3 rounded-sm bg-gray-800 hover:bg-highlightOne text-white hover:text-zinc-900
               text-sm"
                >
                  NodeJS
                </p>
                <p
                  className="mr-5 my-2 py-1 px-3 rounded-sm bg-gray-800 hover:bg-highlightOne text-white hover:text-zinc-900
               text-sm"
                >
                  ExpressJS
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
                  OAuth2
                </p>
                <p
                  className="mr-5 my-2 py-1 px-3 rounded-sm bg-gray-800 hover:bg-highlightOne text-white hover:text-zinc-900
               text-sm"
                >
                  RestFull API
                </p>
                <p
                  className="mr-5 my-2 py-1 px-3 rounded-sm bg-gray-800 hover:bg-highlightOne text-white hover:text-zinc-900
               text-sm"
                >
                  Tailwind
                </p>
                <p
                  className="mr-5 my-2 py-1 px-3 rounded-sm bg-gray-800 hover:bg-highlightOne text-white hover:text-zinc-900
               text-sm"
                >
                  Vercel
                </p>
                <p
                  className="mr-5 my-2 py-1 px-3 rounded-sm bg-gray-800 hover:bg-highlightOne text-white hover:text-zinc-900
               text-sm"
                >
                  GitHub
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex text-white ml-10 mt-20 items-center cursor-pointer ">
          <p className="text-white  font-bold text-xl transition duration-300 ease-in-out">
            {" "}
            View Full Project Archive
          </p>
          <GoArrowUpRight className="text-3xl ml-10  rounded-lg" />
        </div>

        <div className="min-h-screen-minus-800 flex items-center justify-center bg-gray-50 rounded-lg mt-20 py-10">
          <div className="flex flex-col items-center justify-center">
            <div className="">
              <PiHandshakeLight className="text-6xl " />
            </div>
            <p className="text-zinc-900 mt-10 mb-5 text-2xl font-bold text-center">
              Tell me about your next Project
            </p>
            <div className="flex space-x-7">
              <a
                href="mailto:rajaimayabharathi@gmail.com"
                className="py-3 px-5 bg-slate-900 rounded-full text-white"
                
              >
                Mail Me
              </a>
              <a href="tel:+7904555215" className="py-3 px-5 bg-slate-300 rounded-full">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Project;
