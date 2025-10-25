import { FaArrowRight } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { FaWhatsapp, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

function Home() {
  return (
    <section className="w-full min-h-screen flex justify-center items-center px-5 py-10 bg-zinc-50">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* LEFT SECTION - TEXT */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          {/* Intro */}
          <div>
            <div className="text-lg sm:text-xl">👋 Hello there!</div>
            <h1 className="hero-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight mt-2">
              I'm <span className="text-blue-400">Amine</span>
            </h1>
            <h2 className="font-semibold text-xl sm:text-2xl mt-6 mb-4">
              Web Developer
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-gray-700">
              I'm Amine, a passionate Software Developer who enjoys understanding
              how systems work — from low-level logic circuits to high-level
              applications. With solid experience in Java, C, and modern web
              technologies, I aim to create efficient, reliable, and scalable
              software that combines logic and creativity.
            </p>
          </div>

          {/* Stats */}
          <div className="hero-stats grid grid-cols-1 sm:grid-cols-3 gap-4 pt-7 mt-5 mb-10">
            {[
              { number: "30+", label: "Projects Completed" },
              { number: "2+", label: "Years Experience" },
              { number: "20+", label: "Happy Clients" },
            ].map((stat, index) => (
              <div
                key={index}
                className="flex items-center  justify-center flex-col border-2 p-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-zinc-400/30 hover:border-zinc-200 hover:scale-105"
              >
                <span className="font-extrabold text-blue-500 text-2xl pb-2">{stat.number}</span>
                <span className="text-[16px] sm:text-[18px] text-center">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-start gap-4 items-center">
            <button className="border-2 bg-blue-500 text-black border-blue-500  rounded-3xl px-5 py-2 flex items-center gap-2 transition-all duration-300 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:shadow-blue-400/40 hover:scale-105">
              <span>Hire Me</span>
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button className="border-2 border-blue-500 text-blue-500 rounded-3xl px-5 py-2 flex items-center gap-2 transition-all duration-300 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:shadow-blue-400/40 hover:scale-105">
              <IoMdDownload />
              <span>Download CV</span>
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-start gap-3 pt-6 items-center">
            <a
              href="#"
              aria-label="WhatsApp"
              className="border-2 border-gray-100 bg-[#212121] p-2 rounded-xl flex items-center transition-all duration-300 hover:bg-green-400 hover:shadow-lg hover:shadow-green-400/40 hover:scale-110"
            >
              <FaWhatsapp className="text-xl text-white" />
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              className="border-2 border-gray-100 bg-[#212121] p-2 rounded-xl flex items-center transition-all duration-300 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-400/40 hover:scale-110"
            >
              <FaLinkedinIn className="text-xl text-white" />
            </a>

            <a
              href="#"
              aria-label="GitHub"
              className="border-2 border-gray-100 bg-[#212121] p-2 rounded-xl flex items-center transition-all duration-300 hover:bg-zinc-700 hover:shadow-lg hover:shadow-zinc-500/40 hover:scale-110"
            >
              <FaGithub className="text-xl text-white" />
            </a>

            <a
              href="#"
              aria-label="Instagram"
              className="border-2 border-gray-100 bg-[#212121] p-2 rounded-xl flex items-center transition-all duration-300 hover:bg-gradient-to-tr hover:from-[#feda75] hover:via-[#d62976] hover:to-[#833ab4] hover:shadow-lg hover:shadow-pink-500/40 hover:scale-110"
            >
              <FaInstagram className="text-xl text-white" />
            </a>
          </div>
        </div>

        {/* RIGHT SECTION - IMAGE */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div className="relative w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden group transition-all duration-500 shadow-[0_40px_2px_rgba(255,255,255,0.2)] hover:shadow-[0_0_35px_5px_rgba(255,255,255,0.2)]">
            <img
              src="https://github.com/Saboo24/modern-portfolio-website/blob/main/protfile/images/img.jpg?raw=true"
              alt="Profile photo of Amine"
              className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
