import { FaHtml5, FaCss3, FaJs, FaNodeJs, FaPython, FaGitAlt, FaDocker, FaFigma, FaAndroid, FaApple } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiMongodb, DiPostgresql } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import { VscCode } from "react-icons/vsc";
import { IoPhonePortraitSharp } from "react-icons/io5";
import { AiOutlineBgColors } from "react-icons/ai";
import { TbBrandReactNative } from "react-icons/tb";

function Skills() {
  return (
    <section className="w-full flex justify-center items-center flex-col py-16 bg-zinc-50 dark:bg-zinc-900 transition-colors duration-500">
  <div className="w-[90%] flex flex-col gap-10 items-center">

    <h1 className="text-5xl font-bold text-blue-500 underline underline-offset-8 decoration-2 text-center">
      Skills & Expertise
    </h1>

    {/* Grid Container */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">

      {/* Reusable Card */}
      {skillCards.map((card, i) => (
        <div
          key={i}
          className="bg-zinc-800 text-white rounded-2xl p-5 flex flex-col
          items-center w-full max-w-[350px] shadow-lg transition-all duration-300
          hover:scale-105 hover:shadow-[0px_0px_20px_rgba(59,130,246,0.6)]
          hover:bg-zinc-700"
        >
          <h2 className="text-2xl font-bold mb-4">{card.title}</h2>

          <div className="flex flex-col gap-5 w-full">
            {card.skills.map((skill, idx) => (
              <div key={idx} className="flex items-center gap-4 w-full">
                <skill.icon className="text-3xl text-blue-400 transition-all duration-300 hover:brightness-150" />
                <span className="font-medium w-[110px]">{skill.name}</span>

                <div className="bg-zinc-600 h-2 rounded-full flex-1 overflow-hidden">
                  <div
                    className="bg-blue-500 h-full transition-all duration-700"
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

        </div>
      ))}

    </div>

  </div>
</section>

  );
}

export default Skills;


const skillCards = [
  {
    title: "Frontend Development",
    skills: [
      { icon: FaHtml5, name: "HTML5", level: "90%" },
      { icon: FaCss3, name: "CSS3", level: "85%" },
      { icon: FaJs, name: "JavaScript", level: "80%" }
    ]
  },
  {
    title: "Backend Development",
    skills: [
      { icon: FaNodeJs, name: "Node.js", level: "80%" },
      { icon: FaPython, name: "Python", level: "75%" },
      { icon: SiExpress, name: "Express", level: "75%" }
    ]
  },
  {
    title: "Database Management",
    skills: [
      { icon: DiMongodb, name: "MongoDB", level: "90%" },
      { icon: GrMysql, name: "MySQL", level: "85%" },
      { icon: DiPostgresql, name: "PostgreSQL", level: "80%" }
    ]
  },
  {
    title: "DevOps & Tools",
    skills: [
      { icon: FaGitAlt, name: "Git", level: "75%" },
      { icon: FaDocker, name: "Docker", level: "70%" },
      { icon: VscCode, name: "VS Code", level: "90%" }
    ]
  },
  {
    title: "UI/UX Design",
    skills: [
      { icon: FaFigma, name: "Figma", level: "90%" },
      { icon: IoPhonePortraitSharp, name: "Responsive", level: "85%" },
      { icon: AiOutlineBgColors, name: "Adobe XD", level: "80%" }
    ]
  },
  {
    title: "React Native",
    skills: [
      { icon: TbBrandReactNative, name: "React Native", level: "80%" },
      { icon: FaAndroid, name: "Android", level: "75%" },
      { icon: FaApple, name: "iOS", level: "75%" }
    ]
  }
];
