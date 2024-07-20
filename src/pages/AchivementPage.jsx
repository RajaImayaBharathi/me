import React,{useEffect, useRef}from "react";
import "../App.css";
import { FaLinkedin } from "react-icons/fa";
import { gsap } from "gsap";

const AchivementPage = () => {
  const RightSlide1 = useRef([]);
  const LeftSlide1 = useRef([]);
  const RightSlide2 = useRef([]);
  const LeftSlide2 = useRef([]);
  const DownSlide=useRef(null);

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

  const addToRightSlide2 = (el) => {
    if (el && !RightSlide2.current.includes(el)) {
      RightSlide2.current.push(el);
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
        ease: "sine.out",
        scrollTrigger: {
          trigger: LeftSlide1.current,
          start: "top 80%", // Adjust the start point as needed
        },
        clearProps: "all"
      }
    );


    gsap.fromTo(
      LeftSlide2.current,
      { x: 400, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "sine.out",
        scrollTrigger: {
          trigger: LeftSlide2.current,
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
        ease: "power1.out",
        scrollTrigger: {
          trigger: RightSlide1.current,
          start: "top 80%", // Adjust the start point as needed
        },
        clearProps: "all"
      }
    );


    gsap.fromTo(
      RightSlide2.current,
      { x: -400, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: RightSlide2.current,
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
  }, []);
  return (
    <React.Fragment>
      <div id="achievements" className="min-h-screen-minus-100">
        <div className="About-Container1">
          <div className="text-white font-HomeSection flex items-center" ref={DownSlide}>
            <header className="AboutHeader text-xl">
              <span>05</span>. Achivements
            </header>
            <div className="HeaderLiner ml-4"></div>
          </div>
        </div>

        <section className="text-gray-200 body-font overflow-hidden">
          <div className="container px-5 py-24 mx-auto">
            <div className="-my-8 divide-y-2 divide-gray-100">
              <div className="py-8 flex flex-wrap md:flex-nowrap hover:bg-gray-900 py-5 px-2 rounded-lg transition duration-300 ease-in-out">
                <div className="md:w-64 pr-2 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span className="font-semibold title-font" ref={addToRightSlide1}>
                    Smart India Hackathon 2023 ( SIH2023)
                  </span>
                  <span className="mt-1 text-gray-200 text-sm" ref={addToRightSlide1}>
                    12th Aug to 19th Sep 2023
                  </span>
                  <span className="mt-1 text-gray-200 text-sm" ref={addToRightSlide1}>
                    36 Hours
                  </span>
                </div>
                <div className="md:flex-grow">
                  <div className="mb-4">
                    <h2 className="text-2xl font-bold text-gray-200 title-font mb-2" ref={addToRightSlide1}>
                      Finalist - Smart India Hackathon 2023 {`(Govt of India)`}
                    </h2>
                    <div className="space-x-5 flex  items-center" ref={addToRightSlide1}>
                      <span className="font-semibold text-xl text-gray-200 title-font">
                        Location: Hydrabad, India
                      </span>
                      <a
                        className="text-gray-300 items-center text-2xl"
                        href="https://www.linkedin.com/posts/raja-imaya-bharathi_sih2023finalist-innovationjourney-hackathonexperience-activity-7153692738134151168-1lz5?utm_source=share&utm_medium=member_desktop"
                        target="_blank"
                      >
                        <FaLinkedin />
                      </a>
                    </div>
                    <div className="flex" ref={addToRightSlide1}>
                      <p className=" my-3 py-1 px-3 rounded-sm font-bold text-white text-sm">
                        Role:
                      </p>
                      <p className="mr-5 my-3 py-1 px-3 rounded-sm bg-gray-800 font-bold text-white text-sm">
                        Team Leader
                      </p>
                      <p className="mr-5 my-3 py-1 px-3 rounded-sm bg-gray-800 font-bold text-white text-sm">
                        Full Stack Developer
                      </p>
                    </div>
                  </div>
                  <p className="leading-relaxed text-justify" ref={addToRightSlide1}>
                    My team has qualified for the finals of Smart India
                    Hackathon 2023, the{" "}
                    <span>{`world's biggest open innovation
                    hackathon`}</span>
                    . Out of 54,000 idea submissions, our innovation secured a
                    top 5 spot in the Smart Vehicle category, which was
                    sponsored by the {`Moe's`} Innovation Cell Government of
                    India, Ministry of Education, and AICTE. The hackathon
                    lasted for 36 hours and took place at Srinithi Institute of
                    Science and Technology in Secunderabad, Telangana. It was an
                    incredible journey of collaboration and creativity.
                  </p>
                </div>
              </div>


              {/* Second Achivement */}
              <div className="py-8 flex flex-wrap md:flex-nowrap hover:bg-gray-900 py-5 px-2 rounded-lg transition duration-300 ease-in-out" >
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 pr-2 flex flex-col">
                  <span className="font-semibold title-font" ref={addToLeftSlide1}>
                    Start-Up thiruvizha 2023 {`Thirkathan`}
                  </span>
                  <span className="mt-1 text-gray-200 text-sm" ref={addToLeftSlide1}>
                    20th Aug 2023
                  </span>
                </div>
                <div className="md:flex-grow">
                  <div className="mb-4">
                    <h2 className="text-2xl font-bold text-gray-200 title-font mb-2" ref={addToLeftSlide1}>
                      Winner - Start-Up thiruvizha 2023 {`(TN Govt Hackathon)`}
                    </h2>
                    <div className="space-x-5 flex  items-center" ref={addToLeftSlide1}>
                      <span className="font-semibold text-xl text-gray-200 title-font">
                        Location: Hydrabad, India
                      </span>
                      <a
                        className="text-gray-300 items-center text-2xl"
                        href="https://www.linkedin.com/posts/raja-imaya-bharathi_hello-connection-im-very-happy-to-share-my-activity-7099204682924912641-8GRb?utm_source=share&utm_medium=member_desktop"
                        target="_blank"
                      >
                        <FaLinkedin />
                      </a>
                    </div>
                    <div className="flex" ref={addToLeftSlide1}>
                      <p className=" my-3 py-1 px-3 rounded-sm font-bold text-white text-sm">
                        Role:
                      </p>
                      <p className="mr-5 my-3 py-1 px-3 rounded-sm bg-gray-800 font-bold text-white text-sm">
                        Team Leader
                      </p>
                      <p className="mr-5 my-3 py-1 px-3 rounded-sm bg-gray-800 font-bold text-white text-sm">
                        Full Stack Developer
                      </p>
                    </div>
                  </div>
                  <p className="leading-relaxed text-justify" ref={addToLeftSlide1}>
                    {`I am very happy to share my achievements in state level thirkathan 2023 with tagline "thervai edu therthu vedu" by forge and Startups Tamil Nadu association and Im truly grateful to Forge TN Startups for providing a remarkable platform. Winning the silver award and receiving a cash prize of 5000 INR in the finals of Tamil Nadu's prestigious startup event on August 20, 2023, has been an incredible honor. This experience has not only deepened my knowledge but also propelled my journey in the startup world. thanks for funding my startup ides and encourage me to the next.`}
                  </p>
                </div>
              </div>


              {/* Third Achivement */}
              <div className="py-8 flex flex-wrap md:flex-nowrap hover:bg-gray-900 py-5 px-2 rounded-lg transition duration-300 ease-in-out" >
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span className="font-semibold title-font" ref={addToRightSlide2}>
                    Technotry 2k23
                  </span>

                  <span className="mt-1 text-gray-200 text-sm" ref={addToRightSlide2}>
                    30th Jan 2023
                  </span>
                </div>
                <div className="md:flex-grow">
                  <div className="mb-4">
                    <h2 className="text-2xl font-bold text-gray-200 title-font mb-2" ref={addToRightSlide2}>
                      Winner - Technotry 2k23 {`(National Lvl Solo - Coding Competition)`}
                    </h2>
                    <div className="space-x-5 flex  items-center" ref={addToRightSlide2}>
                      <span className="font-semibold text-xl text-gray-200 title-font">
                        Location: Coimbatore, India
                      </span>
                      <a
                        className="text-gray-300 items-center text-2xl"
                        href="https://www.linkedin.com/posts/raja-imaya-bharathi_hackathonexperience-innovationjourney-hackathonlearning-activity-7153684175449931776-pTl3?utm_source=share&utm_medium=member_desktop"
                        target="_blank"
                      >
                        <FaLinkedin />
                      </a>
                    </div>
                    <div className="flex" ref={addToRightSlide2}>
                      <p className=" my-3 py-1 px-3 rounded-sm font-bold text-white text-sm" >
                        Role:
                      </p>
                      <p className="mr-5 my-3 py-1 px-3 rounded-sm bg-gray-800 font-bold text-white text-sm">
                        Java Programmer
                      </p>
                    </div>
                  </div>
                  <p className="leading-relaxed text-justify" ref={addToRightSlide2}>
                  I am happy to share share that I extend my heartfelt gratitude for the opportunity to participate and excel in the state-level Technotry 2k23 problem-solving technical event at Sri Ramakrishna College of Arts and Sciences. Winning the third prize fills me with immense joy and pride. I appreciate the organizers for fostering a competitive environment that encourages growth and innovation. This experience will forever be a cherished milestone in my journey. Thank you for recognizing and encourage my efforts.
                  </p>
                </div>
              </div>

              {/* Forth Achivement */}
              <div className="py-8 flex flex-wrap md:flex-nowrap hover:bg-gray-900 py-5 px-2 rounded-lg transition duration-300 ease-in-out">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span className="font-semibold title-font" ref={addToLeftSlide2}>
                    HackElite 2023
                  </span>

                  <span className="mt-1 text-gray-200 text-sm" ref={addToLeftSlide2}>
                    24th Nov to 25th Nov 2023
                  </span>
                  <span className="mt-1 text-gray-200 text-sm" ref={addToLeftSlide2}>
                    24 Hours
                  </span>
                </div>
                <div className="md:flex-grow">
                  <div className="mb-4">
                    <h2 className="text-2xl font-bold text-gray-200 title-font mb-2" ref={addToLeftSlide2}>
                      HackElite 2023 {`(National Lvl Hackathon)`}
                    </h2>
                    <div className="space-x-5 flex  items-center" ref={addToLeftSlide2}>
                      <span className="font-semibold text-xl text-gray-200 title-font">
                        Location: Pondicherry, India
                      </span>
                      <a
                        className="text-gray-300 items-center text-2xl"
                        href="https://www.linkedin.com/posts/raja-imaya-bharathi_hello-connection-im-happy-to-share-share-activity-7099202078958383104-Z6ZL?utm_source=share&utm_medium=member_desktop"
                        target="_blank"
                      >
                        <FaLinkedin />
                      </a>
                    </div>
                    <div className="flex" ref={addToLeftSlide2}>
                      <p className=" my-3 py-1 px-3 rounded-sm font-bold text-white text-sm">
                        Role:
                      </p>
                      <p className="mr-5 my-3 py-1 px-3 rounded-sm bg-gray-800 font-bold text-white text-sm">
                        Team Leader
                      </p>
                      <p className="mr-5 my-3 py-1 px-3 rounded-sm bg-gray-800 font-bold text-white text-sm">
                        Full Stack Developer
                      </p>
                    </div>
                  </div>
                  <p className="leading-relaxed text-justify" ref={addToLeftSlide2}>
                    Thrilled to share my experience at the Hackathon hosted by
                    Sri Manakula Vinayagar Engineering College in Madagadipet,
                    Puducherry, on 24th to 25th Nov, where our team not only
                    secured a spot in the national-level competition but also
                    embarked on a journey to participate in the intense 24-hour
                    hackathon challenge. At the hackathon, I had an incredible
                    experience that left me feeling grateful for the opportunity
                    to participate. Throughout the event, I was able to gain
                    valuable insights from knowledgeable mentors and learn
                    extensively from a diverse pool of 489 students who came
                    from various regions of India. These regions included
                    Kerala, Andhra Pradesh, Tamil Nadu, Pondicherry, and
                    Karnataka. I was thrilled to have the chance to interact
                    with people from different backgrounds and collaborate with
                    them to learn more. The event provided a unique opportunity
                    for me to share knowledge and expand my network, which I
                    found to be truly rewarding.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default AchivementPage;
