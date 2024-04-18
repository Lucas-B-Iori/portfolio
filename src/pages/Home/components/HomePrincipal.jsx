import { FaGithub, FaLinkedin } from "react-icons/fa"; 

export default function HomePrincipal() {
  return (
    <div className="flex flex-col justify-center align-text-top h-96 py-80 px-56 text-white max-xl:h-56 max-xl:py-32 max-md:px-28 max-sm:px-12">
      <p className="text-slate-400 text-xl uppercase font-bold max-xl:text-base">Olá, eu sou o Lucas</p>
      <div className="flex items-center max-xl:items-start">
        <h1 className="text-9xl font-bold font-mono uppercase max-xl:text-7xl max-lg:text-6xl max-sm:text-4xl">Engenheiro de Software</h1>
        <div className="flex flex-col gap-12">
          <a href="https://github.com/Lucas-B-Iori" target="_blank">
            <FaGithub className="size-24 max-xl:size-14 max-sm:size-8"/>
          </a>
          <a href="https://www.linkedin.com/in/lucas-iori-5593a723a/" target="_blank">
            <FaLinkedin className="size-24 max-xl:size-14 max-sm:size-8"/> 
          </a>
        </div>
      </div>
    </div>
  )
}
