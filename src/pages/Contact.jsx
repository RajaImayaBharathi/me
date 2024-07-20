import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaMedium } from "react-icons/fa6";
import { useEffect, useState, useRef } from "react"
import { FaQuoteRight } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";

const Contact = () => {
  const targetText = "Thank You";

  const [displayText, setDisplayText] = useState(Array(targetText.length).fill(' '));
  const [startAnimation, setStartAnimation] = useState(false);
  const thankYouRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (thankYouRef.current) {
      observer.observe(thankYouRef.current);
    }

    return () => {
      if (thankYouRef.current) {
        observer.unobserve(thankYouRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!startAnimation) return;

    let intervalId;
    let currentIndex = 0;
    let currentChar = ' ';

    const startNextCharAnimation = () => {
      if (currentIndex >= targetText.length) return;

      intervalId = setInterval(() => {
        if (currentChar !== targetText[currentIndex]) {
          currentChar = String.fromCharCode(currentChar.charCodeAt(0) + 1);
          setDisplayText(prev => {
            const newText = [...prev];
            newText[currentIndex] = currentChar;
            return newText;
          });
        } else {
          clearInterval(intervalId);
          currentIndex++;
          currentChar = ' ';
          startNextCharAnimation();
        }
      }, 0.1);
    };

    startNextCharAnimation();

    return () => clearInterval(intervalId);
  }, [startAnimation]);


  return (
    <div className="bg-zinc-900 text-white flex items-center pt-20 flex-col pb-[100px]">
            <p ref={thankYouRef} className="text-xl ">{displayText.join('')}</p>
            <div className="flex mt-10 space-x-12 text-3xl">
                <a href="https://github.com/RajaImayaBharathi" target="_blank"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/raja-imaya-bharathi/" target="_blank"><FaLinkedin /></a>
                <a href="https://leetcode.com/u/rajaimayabharathi/" target="_blank"><SiLeetcode /></a>
                <a href=""><FaMedium /></a>
            </div>
            <div className="mt-20 flex space-x-4">
                <p className="text-10xl"><FaQuoteLeft /></p>
                <p className="text-2xl max-w-[600px]"> Coding with passion and purpose. </p>
                <p className="text-10xl"><FaQuoteRight /></p>
            </div>
    </div>
  )
}

export default Contact
