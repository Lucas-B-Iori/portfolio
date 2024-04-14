import { FaGithub, FaLinkedin } from "react-icons/fa"; 

export default function HomePrincipal() {
  return (
    <div className="flex flex-col justify-center align-text-top h-96 py-80 px-56 text-white">
      <p className="text-slate-400 text-xl uppercase font-bold">Olá, eu sou o Lucas</p>
      <div className="flex items-center">
        <h1 className="text-9xl font-bold font-mono uppercase">Engenheiro de Software</h1>
        <div className="flex flex-col gap-12">
          <a href="https://github.com/Lucas-B-Iori" target="_blank">
            <FaGithub size={96}/>
          </a>
          <a href="https://www.linkedin.com/in/lucas-iori-5593a723a/" target="_blank">
            <FaLinkedin size={96}/> 
          </a>
        </div>
      </div>
    </div>
  )
}
