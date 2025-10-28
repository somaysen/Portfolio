import { FaArrowRight } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { FaWhatsapp, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

function Home() {
  const headingRef = useRef(null);
  const targetRef = useRef(null);
  const imageRef = useRef(null);

  // ✅ GSAP Animations with Cleanup
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      if (headingRef.current && targetRef.current && imageRef.current) {
        const words = headingRef.current.querySelectorAll("span");

        tl.fromTo(
          words,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power3.out",
            stagger: 0.2,
          }
        )
          .fromTo(
            targetRef.current,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1.5,
              ease: "bounce.out",
            },
            "+=0.3"
          )
          .fromTo(
            imageRef.current,
            { opacity: 0, scale: 0.8, y: 60 },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 0.5,
              ease: "power3.out",
            },
            "-=0.5"
          );
      }
    });

    return () => ctx.revert(); // ✅ Cleanup for React strict mode
  }, []);

  // ✅ Download CV
  const DownloadCV = () => {
    const fileUrl =
      "https://ik.imagekit.io/wcerfpt9sm/Resume%20-%20SomaySen2-1.pdf?updatedAt=1761325820381";
    const fileName = "SomaySen_CV.pdf";

    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // ✅ Smooth scroll to contact section
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="w-full min-h-screen flex justify-center items-center px-5 py-10 lg:py-20 bg-zinc-50 dark:bg-zinc-900">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* LEFT SECTION */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <div>
            <div className="text-lg text-white sm:text-xl">👋 Hello there!</div>

            <h1
              ref={headingRef}
              className="hero-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl
                font-bold tracking-tight mt-2
                text-zinc-900 dark:text-zinc-50 transition-colors duration-500"
            >
              I'm <span className="text-blue-600 dark:text-blue-400 transition-colors duration-500">Somay</span>
            </h1>


            <h2
              ref={targetRef}
              className="font-extrabold text-2xl mt-6 mb-4 text-zinc-900 dark:text-white drop-shadow-[0_1px_8px_#fbf3f0] dark:drop-shadow-[0_0_8px_#3b82f6]"
            >
              <span className="inline-block mr-2">Full-stack</span>
              <span className="inline-block mr-2">Web</span>
              <span className="inline-block">Developer</span>
            </h2>

            <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              I'm Somay, a passionate Full-Stack Web Developer who loves building interactive and efficient digital experiences. I specialize in both frontend and backend development using the MERN stack, and enjoy transforming complex ideas into elegant, scalable solutions. Combining creativity with strong technical skills in Java, C, and modern web technologies, I aim to craft software that’s not just functional — but meaningful and impactful.
            </p>
          </div>

          {/* STATS */}
          <div className="hero-stats grid grid-cols-1 sm:grid-cols-3 gap-4 pt-7 mt-5 mb-10">
            {[
              { number: "20+", label: "Projects Completed" },
              { number: "1+", label: "Years Experience" },
              { number: "10+", label: "Happy Clients" },
            ].map((stat, index) => (
              <div
              key={index}
              className="flex items-center justify-center flex-col
                border-2 border-blue-500 dark:border-blue-400
                p-6 rounded-xl
                transition-all duration-300
                hover:shadow-lg hover:shadow-zinc-300/40 dark:hover:shadow-zinc-900/40
                hover:border-zinc-300 dark:hover:border-blue-300
                hover:scale-105"
            >
              <span className="font-extrabold text-blue-600 dark:text-blue-400 text-2xl pb-2 transition-colors duration-300">
                {stat.number}
              </span>
              
              <span className="text-[16px] text-zinc-700 dark:text-zinc-200 font-medium sm:text-[18px] text-center transition-colors duration-300">
                {stat.label}
              </span>
            </div>

            ))}
          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap justify-start gap-4 items-center">
            <button
              onClick={scrollToContact}
              aria-label="Hire Somay for a project"
              className="group border-2 bg-blue-500 text-black border-blue-500 rounded-3xl px-5 py-2 flex items-center gap-2 transition-all duration-300 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-400/40 dark:hover:shadow-blue-500/40 hover:scale-105"
            >
              <span>Hire Me</span>
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button
              onClick={DownloadCV}
              aria-label="Download Somay's CV"
              className="border-2 border-blue-500 text-blue-500 rounded-3xl px-5 py-2 flex items-center gap-2 transition-all duration-300 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:shadow-blue-400/40 dark:hover:shadow-blue-500/40 hover:scale-105"
            >
              <IoMdDownload />
              <span>Download CV</span>
            </button>
          </div>

          {/* SOCIAL LINKS */}
          <div className="flex justify-start gap-3 pt-6 items-center">
            <a
              href="https://wa.me/9617388656"
              aria-label="WhatsApp"
              className="border-2 border-gray-100/40 bg-[#212121] p-2 rounded-2xl flex items-center transition-all duration-300 hover:bg-green-400 hover:shadow-lg hover:shadow-green-400/40 hover:scale-110"
            >
              <FaWhatsapp className="text-xl text-white" />
            </a>

            <a
              href="https://www.linkedin.com/in/somay-sen-535143294"
              aria-label="LinkedIn"
              className="border-2 border-gray-100/40 bg-[#212121] p-2 rounded-2xl flex items-center transition-all duration-300 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-400/40 hover:scale-110"
            >
              <FaLinkedinIn className="text-xl text-white" />
            </a>

            <a
              href="https://github.com/somaysen"
              aria-label="GitHub"
              className="border-2 border-gray-100/40 bg-[#212121] p-2 rounded-2xl flex items-center transition-all duration-300 hover:bg-zinc-700 hover:shadow-lg hover:shadow-zinc-500/40 hover:scale-110"
            >
              <FaGithub className="text-xl text-white" />
            </a>

            <a
              href="https://www.instagram.com/somay__96"
              aria-label="Instagram"
              className="border-2 border-gray-100/40 bg-[#212121] p-2 rounded-2xl flex items-center transition-all duration-300 hover:bg-gradient-to hover:from-[#feda75] hover:via-[#d62976] hover:to-[#833ab4] hover:shadow-lg hover:shadow-pink-500/40 hover:scale-110"
            >
              <FaInstagram className="text-xl text-white" />
            </a>
          </div>
        </div>

        {/* RIGHT SECTION - IMAGE */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div
            ref={imageRef}
            className="relative
              w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px]
              h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px]
              rounded-2xl overflow-hidden group
              transition-all duration-500
              shadow-[0_0_30px_3px_rgba(255,255,255,0.2)]
              hover:shadow-[0_0_45px_10px_rgba(255,255,255,0.3)]
            "
          >
            <img
              src="https://github.com/Saboo24/modern-portfolio-website/blob/main/protfile/images/img.jpg?raw=true"
              alt="Profile photo of Somay"
              className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Home;
