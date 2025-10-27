import { IoLocationSharp } from "react-icons/io5";
import { MdLocalPostOffice } from "react-icons/md";
import { FaDownload } from "react-icons/fa6";
import educationIcon from "../components/Education icon.png";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function About() {
  const buttonsRef = useRef([]);
  const headingRef = useRef(null);
  const textRef = useRef(null);

  buttonsRef.current = [];

  // Collect button references dynamically
  const addToRefs = (el) => {
    if (el && !buttonsRef.current.includes(el)) {
      buttonsRef.current.push(el);
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Heading animation
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
        },
      }
    );

    // Paragraph fade-in
    gsap.fromTo(
      textRef.current.querySelectorAll("p"),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 85%",
        },
      }
    );

    // Buttons animation
    gsap.fromTo(
      buttonsRef.current,
      { opacity: 0, y: 40, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: buttonsRef.current[0],
          start: "top 90%",
        },
      }
    );
  }, []);

  // Download CV function
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/SomaySen_CV.pdf"; // Place CV file in public folder
    link.download = "Somay_Sen_CV.pdf";
    link.click();
  };

  return (
    <section className="w-full flex justify-center items-center flex-col py-16 bg-zinc-50 dark:bg-zinc-900 transition-colors duration-500">
      <div className="w-[85%] flex flex-col lg:flex-row justify-center items-center gap-10">
        {/* Image Section */}
        <div className="hidden lg:flex w-[40%] items-center justify-center">
          <div className="relative w-[400px] h-[500px] rounded-2xl overflow-hidden group shadow-[0_40px_2px_rgba(255,255,255,0.2)] hover:shadow-[0_0_35px_5px_rgba(255,255,255,0.2)] transition-all duration-500">
            <img
              src="https://github.com/Saboo24/modern-portfolio-website/blob/main/protfile/images/img.jpg?raw=true"
              alt="Profile"
              className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
            />
          </div>
        </div>

        {/* About Content */}
        <div className="w-full lg:w-[60%] flex flex-col gap-10">
          {/* Title */}
          <div className="flex items-center justify-end p-5">
            <h2
              ref={headingRef}
              className="text-5xl md:text-6xl font-semibold tracking-tight text-blue-600 dark:text-blue-400 underline decoration-[1.5px] underline-offset-[14px] drop-shadow-[0_3px_5px_rgba(37,99,235,0.35)] hover:text-blue-700 hover:decoration-blue-700 transition-all duration-300 ease-in-out mr-10 lg:mr-20"
            >
              About Me
            </h2>
          </div>

          {/* Description */}
          <div
            ref={textRef}
            className="flex flex-col gap-3 mt-2 font-light text-zinc-800 dark:text-zinc-200 leading-relaxed tracking-wide"
          >
            <p>
              I'm a passionate web developer based in <b>Bhopal, India</b> with a strong
              foundation in both frontend and backend technologies. My journey in web
              development started 1 years ago, and I’ve been constantly learning and adapting
              to new technologies ever since.
            </p>

            <p>
              I specialize in building responsive, user-friendly websites and web applications
              using modern frameworks and libraries. My approach blends technical expertise with
              creative problem-solving to deliver solutions that perform exceptionally.
            </p>

            <p>
              When I’m not coding, you can find me exploring new technologies, contributing to
              open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>

          {/* Info Buttons */}
         <div className="flex flex-col mt-8 gap-5">
            {/* Education */}
            <button
                ref={addToRefs}
                className="w-full rounded-2xl bg-zinc-100 dark:bg-zinc-700 flex items-center 
                border border-zinc-300 dark:border-zinc-600 p-4 gap-5 
                shadow-md transition-all duration-300 ease-out
                hover:shadow-xl hover:scale-[1.03] hover:border-blue-500 hover:shadow-blue-300/40 
                dark:hover:shadow-blue-500/30"
            >
                <img src={educationIcon} alt="Education Icon" className="w-6 h-6" />
                <div className="flex flex-col items-start">
                <h3 className="text-zinc-900 dark:text-white font-semibold">Education</h3>
                <p className="text-gray-500 dark:text-gray-300 text-sm">Computer Science</p>
                </div>
            </button>

            {/* Location */}
            <button
                ref={addToRefs}
                className="w-full rounded-2xl bg-zinc-100 dark:bg-zinc-700 flex items-center 
                border border-zinc-300 dark:border-zinc-600 p-4 gap-5 
                shadow-md transition-all duration-300 ease-out
                hover:shadow-xl hover:scale-[1.03] hover:border-blue-500 hover:shadow-blue-300/40 
                dark:hover:shadow-blue-500/30"
            >
                <IoLocationSharp className="text-blue-500 text-xl" />
                <div className="flex flex-col items-start">
                <h3 className="text-zinc-900 dark:text-white font-semibold">Location</h3>
                <p className="text-gray-500 dark:text-gray-300 text-sm">Bhopal MP India</p>
                </div>
            </button>

            {/* Experience */}
            <button
                ref={addToRefs}
                className="w-full rounded-2xl bg-zinc-100 dark:bg-zinc-700 flex items-center 
                border border-zinc-300 dark:border-zinc-600 p-4 gap-5 
                shadow-md transition-all duration-300 ease-out
                hover:shadow-xl hover:scale-[1.03] hover:border-blue-500 hover:shadow-blue-300/40 
                dark:hover:shadow-blue-500/30"
            >
                <MdLocalPostOffice className="text-blue-500 text-xl" />
                <div className="flex flex-col items-start">
                <h3 className="text-zinc-900 dark:text-white font-semibold">Experience</h3>
                <p className="text-gray-500 dark:text-gray-300 text-sm">
                    1+ Years in Web Development
                </p>
                </div>
            </button>
            </div>


          {/* CV Download Button */}
         <div className="p-5 flex justify-start">
            <button
                onClick={handleDownload}
                className="flex items-center gap-2 border-2 border-blue-500 text-blue-500 
                rounded-2xl px-5 py-2 font-medium 
                shadow-md shadow-blue-200/40 
                hover:bg-blue-500 hover:text-white 
                hover:shadow-lg hover:shadow-blue-500/50 
                transition-all duration-300 ease-out"
            >
                Download CV
                <FaDownload />
            </button>
            </div>

        </div>
      </div>
    </section>
  );
}

export default About;
