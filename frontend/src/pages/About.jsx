import { IoLocationSharp } from "react-icons/io5";
import educationIcon from '../components/Education icon.png';
import { FaDownload } from "react-icons/fa6";
import { MdLocalPostOffice } from "react-icons/md";

function About() {
  return (
    <>
    <div className="main w-full flex justify-center items-center flex-col" >
        <div className="w-[85%] flex justify-center items-center pr-10 gap-10" >

            {/* imgfiv - Hidden on mobile/tablet, visible on desktop */}
            <div className="hidden lg:flex w-[40%] h-full items-center justify-center" >
                <div className="w-[400px] h-[500px]" >
                    <div className="relative w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden group transition-all duration-500 shadow-[0_40px_2px_rgba(255,255,255,0.2)] hover:shadow-[0_0_35px_5px_rgba(255,255,255,0.2)]">
                        <img
                            src="https://github.com/Saboo24/modern-portfolio-website/blob/main/protfile/images/img.jpg?raw=true"
                            alt="Profile photo of Amine"
                            className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                        />
                    </div>
                </div>
            </div>

            {/* about me context div - Full width on mobile/tablet, 60% on desktop */}
            <div className="w-full lg:w-[60%] p-5 h-full flex justify-between flex-col gap-10" >

                <div className="flex items-center justify-end p-5">
                    <h1
                        className="text-6xl tracking-tighter mr-40 font-[system-ui] font-[350]
                        text-blue-600 underline decoration-2 underline-offset-[12px]
                        decoration-blue-500 drop-shadow-[0_4px_6px_rgba(37,99,235,0.4)]
                        hover:decoration-blue-700 hover:text-blue-700 transition-all duration-300"
                    >
                        About me
                    </h1>
                </div>

                <div className="text-contenar flex flex-col gap-2 mt-5 font-[350] tracking-wide" >
                    <p>I'm a passionate web developer based in Indonesia with a strong foundation in both frontend and backend technologies. My journey in web development started 3 years ago, and I've been constantly learning and adapting to new technologies ever since.</p>
                        
                    <p>I specialize in creating responsive, user-friendly websites and web applications using modern frameworks and libraries. My approach combines technical expertise with creative problem-solving to deliver solutions that not only look great but also perform exceptionally.</p>
                        
                    <p>When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community through my blog and social media.</p>
                </div>
                 
                <div className="flex justify-center items-center flex-col mt-10 gap-5">
                    {/* Education button */}
                    <button className="w-full rounded-2xl bg-zinc-500 flex items-center border-2 border-zinc-700 p-4 gap-5 shadow-md shadow-zinc-800 hover:shadow-lg hover:shadow-zinc-600 hover:border-white hover:bg-zinc-600 transition-all duration-300">
                        <img src={educationIcon} alt="Education Icon" className="w-6 h-6" />
                        <div className="flex flex-col items-start">
                            <h1 className="text-white font-semibold">Education</h1>
                            <h2 className="text-gray-300 text-sm">Computer Science</h2>
                        </div>
                    </button>

                    {/* Location button */}
                    <button className="w-full rounded-2xl bg-zinc-500 flex items-center border-2 border-zinc-700 p-4 gap-5 shadow-md shadow-zinc-800 hover:shadow-lg hover:shadow-zinc-600 hover:border-white hover:bg-zinc-600 transition-all duration-300">
                        <IoLocationSharp className="text-blue-400 text-xl" />
                        <div className="flex flex-col items-start">
                            <h1 className="text-white font-semibold">Location</h1>
                            <h2 className="text-gray-300 text-sm">Kolkata, India</h2>
                        </div>
                    </button>

                    {/* Experience button */}
                    <button className="w-full rounded-2xl bg-zinc-500 flex items-center border-2 border-zinc-700 p-4 gap-5 shadow-md shadow-zinc-800 hover:shadow-lg hover:shadow-zinc-600 hover:border-white hover:bg-zinc-600 transition-all duration-300">
                        <MdLocalPostOffice className="text-blue-400 text-xl" />
                        <div className="flex flex-col items-start">
                            <h4 className="text-white font-semibold">Experience</h4>
                            <p className="text-gray-300 text-sm">2+ Years in Web Development</p>
                        </div>
                    </button>
                </div>

                <div className="p-5">
                    <button className="flex justify-center items-center gap-2 border-2 border-blue-500 text-blue-500 rounded-2xl px-4 py-2 font-light shadow-lg shadow-blue-300 hover:bg-blue-500 hover:text-white hover:shadow-blue-600 hover:shadow-2xl transition-all duration-300">
                        Download CV
                        <FaDownload />
                    </button>
                </div>

            </div>

        </div>
    </div>
    </>
  )
}

export default About
