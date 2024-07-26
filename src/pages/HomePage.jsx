import React, { useEffect, useRef } from "react";
import "../App.css";
import { gsap } from "gsap";

const HomePage = () => {
  const RightSlide = useRef([]);
  const LeftSlide = useRef([]);
  const DownSlide = useRef(null);
  const buttonRef = useRef(null);
  const initialMount = useRef(true);


  const addToRefs = (el) => {
    if (el && !RightSlide.current.includes(el)) {
      RightSlide.current.push(el);
    }
  };

  const addToLeftSlide = (el) => {
    if (el && !LeftSlide.current.includes(el)) {
      LeftSlide.current.push(el);
    }
  };

  useEffect(() => {

    if (initialMount.current) {
      gsap.fromTo(
        DownSlide.current,
        { y: -400, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "sine.out",clearProps: "all" }
      );
      
      gsap.to(
        LeftSlide.current,
        { x:0, opacity: 1, duration: 1, ease: "power1.out",clearProps: "x" }
      );

      gsap.fromTo(
        RightSlide.current,
        { x: -400, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power1.out",clearProps: "all" }
      );

      gsap.fromTo(
        buttonRef.current,
        { opacity: 0, y: 400 },
        { opacity: 1, y: 0, duration: 1, ease: "power1.out",clearProps: "y" }
      );


      initialMount.current = false;
    }
  }, []);

  return (
    <React.Fragment>
      <div className="min-h-screen-minus-100 mt-[64px] pt-[64px] lg:mt-0 flex items-center justify-center" id="home">
        <div>
          <p className="WelcomeText text-white font-HomeSection" ref={addToRefs}>
            Hello Everyone 👋, My name is
          </p>
          <p className="NameText text-0xl text-white bold font-HomeSection" ref={addToRefs}>
            <span>Raja Imaya Bharathi</span>
          </p>

          <div className="pb-3 pt-2 socialIconsInMobile lg:hidden flex-row text-white font-Navbar" ref={addToLeftSlide}>
            <a
              href="https://www.linkedin.com/in/raja-imaya-bharathi"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn&ensp;.&ensp;
            </a>
            <a
              href="https://github.com/RajaImayaBharathi"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub&ensp;.&ensp;
            </a>
            <a href="https://leetcode.com/u/rajaimayabharathi/" target="_blank" rel="noopener noreferrer">
              LeetCode&ensp;&ensp;
            </a>
          </div>

          <img src="HomeImg.png" className="HomeImg1 mx-auto" alt="" ref={addToRefs} />
          <p className="mt-2 subPara1 text-white text-justify" ref={addToRefs}>
            {`I'm an India-based software developer with a goal-driven creative
            mindset and a passion for learning and innovating.`}
          </p>
          <p className="subPara2 mt-9 text-white text-justify" ref={addToRefs}>
            I specialize in building{" "}
            <span className="text-highlightOne">
              robust backends, sleek frontends
            </span>
            , Currently pursuing my B.Tech Degree in Information Technology, I
            am also an active{" "}
            <span className="text-highlightOne">open-source contributor</span>.
          </p>
          {/* <button className="HomeBtn mt-20" ref={buttonRef}>Hire me??</button> */}
        </div>
        <div className="ml-20 HomeImg" ref={DownSlide}>
          <img src="HomeImg.png" className="HomeImg" alt=""  />
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomePage;

