import { SiCplusplus, SiJavascript, SiPython, SiReact, SiNextdotjs, SiHtml5, SiCss3, SiGit, SiMongodb } from "react-icons/si";
import { BiLogoNodejs } from "react-icons/bi";
import Skill from "./Skill";

const skillsItems = [
  SiCplusplus,
  SiJavascript,
  SiPython, 
  SiReact, 
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiGit,
  BiLogoNodejs,
  SiMongodb
]

export default function Skills() {
  return (
    <section className="px-56 py-16 text-white">
      <h2 className="text-5xl pb-8">Hard Skills</h2>
      <div className="grid grid-cols-5 grid-rows-2 justify-center gap-12">
        {skillsItems.map(skill => (
          <Skill component={skill} />
        ))}
      </div>
    </section>
  )
}
