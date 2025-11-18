import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import image from "../components/PeerLink.png";
import phone from "../components/Task manager app.jpg";
import Weather from "../components/Weather Forecast Dashboard.jpg";
import pf from "../components/pf.png";
import WordPress from "../components/WordPress dashboard design concept.jpg";
import Dashboard from "../components/Dashboard - Social Media Analytics.jpg";

export const cardData = [
  {
    id: 1,
    image,
    title: "Local-comunication",
    description:
      "It Frontend project beasd on comunication like chat and video coll ",
    skills: ["React", "Peer.js"],
    github: "https://github.com/somaysen/PeerLink",
    live: "https://peer-link-z1g8.vercel.app/",
  },
  {
    id: 2,
    image: phone,
    title: "Task Management App",
    description:
      "Collaborative task app with drag-and-drop and real-time sync.",
    skills: ["Vue.js", "Firebase", "Tailwind CSS"],
    github: "https://github.com/example/taskapp",
    live: "https://example.com/taskapp",
  },
  {
    id: 3,
    image: Weather,
    title: "Weather Dashboard",
    description:
      "Interactive dashboard with forecasts, maps, and trends.",
    skills: ["JavaScript", "Chart.js", "OpenWeather API"],
    github: "https://github.com/example/weather",
    live: "https://example.com/weather",
  },
  {
    id: 4,
    image: pf,
    title: "Portfolio Website",
    description: "Responsive and animated portfolio to showcase work.",
    skills: ["HTML", "CSS3", "JavaScript", "GSAP"],
    github: "https://github.com/somaysen/Portfolio",
    live: "https://stately-bombolone-90ee2d.netlify.app/",
  },
  {
    id: 5,
    image: WordPress,
    title: "Blog Platform",
    description: "CMS blog system with SEO and user management.",
    skills: ["Next.js", "Prisma", "PostgreSQL"],
    github: "https://github.com/example/blog",
    live: "https://example.com/blog",
  },
  {
    id: 6,
    image: Dashboard,
    title: "Social Media Dashboard",
    description: "Analytics dashboard for managing social accounts.",
    skills: ["React", "D3.js", "Express.js"],
    github: "https://github.com/example/dashboard",
    live: "https://example.com/dashboard",
  },
];

function Project() {
  return (
    <section className="w-full flex justify-center items-center flex-col py-16 bg-zinc-50 dark:bg-zinc-900 transition-colors duration-500">
    <h1 className="text-4xl font-bold text-blue-500 underline decoration-blue-300 decoration-2 underline-offset-4 mb-12">
      Featured Projects
    </h1>


     {/* contect */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-[90%] max-w-[1200px] justify-items-center">
        {cardData.map((item) => (
          <div
            key={item.id}
            className="relative group w-[320px] h-[380px] bg-[#1a1a1a] border border-transparent hover:border-blue-300/50 rounded-2xl 
                       flex flex-col overflow-hidden transition-all hover:scale-[1.03] duration-300 shadow-lg hover:shadow-blue-800/40"
          >
            {/* Image Section */}
            <div className="relative w-full h-[50%] overflow-hidden">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src={item.image}
                alt={item.title}
              />

              {/* Overlay Icons */}
              <div className="absolute inset-0 bg-blue-600/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
                <a
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white p-2 rounded-full bg-zinc-600/70 flex items-center justify-center text-2xl hover:bg-zinc-700 transition"
                >
                  <FaGithub />
                </a>
                <a
                  href={item.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-2xl p-2 rounded-full bg-zinc-600/70 flex items-center justify-center hover:bg-zinc-700 transition"
                >
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-3 flex flex-col justify-between">
            <h2 className="text-lg font-semibold text-white">{item.title}</h2>
            <p className="text-gray-400 text-sm mt-2 leading-relaxed flex">
              {item.description}
            </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mt-3">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-200/80 text-blue-900 px-2 py-1 text-xs rounded-xl"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
