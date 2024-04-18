import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"; 

export default function Footer() {
  return (
    <footer className="flex justify-between px-16 items-center py-6 bg-slate-800 text-white max-sm:px-4 max-sm:gap-4">
      <p className="max-sm:text-sm">Desenvolvido por Lucas Iori</p>
      <p className="max-sm:text-sm">Copyright © 2024</p>
      <ul className="flex gap-12 max-sm:gap-4">
        <li>
          <a href="https://github.com/Lucas-B-Iori" target="_blank">
            <FaGithub size={20} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/lucas-iori-5593a723a/" target="_blank">
            <FaLinkedin size={20} />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/lucas_biori/" target="_blank">
            <FaInstagram size={20} />
          </a>
        </li>
      </ul>
    </footer>
  )
}
