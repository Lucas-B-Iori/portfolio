import { SiCplusplus, SiJavascript, SiPython, SiReact, SiNextdotjs, SiHtml5, SiCss3, SiGit, SiTypescript } from "react-icons/si";
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
  SiTypescript
]

export default function Skills() {
  return (
    <section className="px-24 py-16 text-white">
      <h2 className="text-5xl pb-8">Hard Skills</h2>
      <div className="grid grid-cols-5 grid-rows-2 justify-center gap-12 max-sm:flex max-sm:flex-col">
        {skillsItems.map(skill => (
          <Skill key={skill} component={skill} />
        ))}
      </div>
    </section>
  )
}
