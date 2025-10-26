import { VscCode } from "react-icons/vsc";
import { FaMobileScreenButton } from "react-icons/fa6";
import { AiOutlineBgColors } from "react-icons/ai";
import { FaRocket } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";

export const whatIDoData = [
  {
    id: 1,
    title: "Web Development",
    icon: <VscCode />,
    description: "I create responsive, modern websites using the latest technologies. From concept to deployment, performance and quality come first.",
    skills: ["Responsive Design", "Performance Optimized", "SEO Friendly"]
  },
  {
    id: 2,
    title: "Mobile Development",
    icon: <FaMobileScreenButton />,
    description: "Building cross-platform applications for both Android and iOS, optimized for performance and user experience.",
    skills: ["Cross-Platform", "Native Performance", "User-Friendly"]
  },
  {
    id: 3,
    title: "UI/UX Design",
    icon: <AiOutlineBgColors />,
    description: "Crafting intuitive and beautiful designs with focus on usability, accessibility, and overall experience.",
    skills: ["User-Centered", "Modern Design", "Accessibility"]
  },
  {
    id: 4,
    title: "Performance Optimization",
    icon: <FaRocket />,
    description: "Optimizing websites and applications for speed, scalability, and reliability. I ensure your digital products perform at their best under any conditions.",
    skills: ["Fast Loading", "Scalable", "Reliable"]
  },
  {
    id: 5,
    title: "E-commerce Solutions",
    icon: <FaShoppingCart />,
    description: "Building secure and efficient e-commerce platforms that drive sales and provide excellent shopping experiences for your customers.",
    skills: ["Secure Payments", "Inventory Management", "Analytics"]
  },
  {
    id: 6,
    title: "API Development",
    icon: <CiSettings />,
    description: "Creating robust and scalable APIs that power your applications. I build RESTful and GraphQL APIs with proper documentation and testing.",
    skills: ["RESTful APIs", "GraphQL", "Documentation"]
  }
];

function WhatIDo() {
  return (
    <section className="w-full min-h-screen flex justify-center items-center py-16 px-4 ">
      <div className="w-[90%] max-w-7xl flex flex-col justify-center items-center gap-14">
        
        {/* Title */}
        <h1 className="text-5xl font-extrabold text-blue-400 tracking-widest pb-3 
                underline decoration-[1.5px] underline-offset-[10px]
                drop-shadow-lg transition-all duration-300
                hover:text-blue-500 hover:underline-offset-[14px]">
          What I Do
        </h1>

        {/* Cards */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {whatIDoData.map((item) => (
            <div
              key={item.id}
              className="bg-zinc-800 border border-gray-700 h-[450px] 
              hover:bg-[#262626] text-white rounded-3xl p-8 
              flex flex-col items-center justify-between gap-5 
              shadow-2xl hover:shadow-blue-500/10 hover:border-blue-100/80
              transition-all duration-300 transform hover:-translate-y-2"
            >
              <span className="p-4 rounded-full bg-blue-600 text-4xl shadow-lg">
                {item.icon}
              </span>

              <h2 className="text-2xl font-bold text-blue-300">
                {item.title}
              </h2>

              <p className="text-center text-sm text-gray-300 leading-relaxed">
                {item.description}
              </p>

              <div className="flex flex-wrap justify-center gap-2 mt-2">
                {item.skills.map((tag, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-blue-400/20 backdrop-blur-sm text-blue-300 text-xs font-medium px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
          ))}
        </div>

      </div>
    </section>
  );
}


export default WhatIDo;
