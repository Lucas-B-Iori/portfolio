import CurriculoItem from './CurriculoItem'
import { FaPhoneAlt, FaLinkedin } from "react-icons/fa";
import { MdOutlineMailOutline, MdLocationOn } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import CurriculoDiv from './CurriculoDiv';

const items = [
  {
    component: FaPhoneAlt,
    texto: '(16) 99741-8746'
  },
  {
    component: MdOutlineMailOutline,
    texto: 'lucasbertolassiiori@gmail.com'
  },
  {
    component: MdLocationOn,
    texto: 'São Paulo, SP'
  },
  {
    component: FaLinkedin,
    texto: 'https://www.linkedin.com/in/lucas-iori-5593a723a/'
  },
  {
    component: FiGithub,
    texto: 'https://github.com/Lucas-B-Iori'
  },
  
]

export default function CurriculoSection() {
  return (
    <section className="px-24 shadow-md max-md:px-12 max-sm:px-2">
      <div className='my-12 mx-20 p-10 bg-white text-slate-700 font-serif max-lg:p-4 max-md:mx-0 max-md:p2'>
        <div>
          <h2 className='text-5xl text-center max-sm:text-3xl'>Lucas Bertolassi Iori</h2>
          <h4 className='text-center text-2xl max-sm:text-lg'>Engenheiro de Software</h4>
        </div>
        <div className='mx-32 py-6 max-lg:mx-16 max-sm:mx-4'>
          <ul>
            {items.map(item => (
              <CurriculoItem key={item.texto} component={item.component}>{item.texto}</CurriculoItem>
            ))}
          </ul>
        </div>
        <CurriculoDiv titulo='Objetivo Profissional'>
          <p>Busco minha primeira vaga dentro do mercado de tecnologia.</p>
        </CurriculoDiv>
        <CurriculoDiv titulo='Perfil'>
          <p>Faço Engenharia de Software na FIAP de manhã e estou buscando a primeira vagano mercado, estou sempre aprendendo novas tecnologias no intuito de meaperfeiçoar dentro da área. Sou ambicioso e apaixonado por tecnologia. Consigo mesocializar muito bem dentro de diversos ambientes, sempre com muito entusiasmoe vontade de aprender</p>
        </CurriculoDiv>
        <CurriculoDiv titulo='Competências'>
          <ul>
            <li>HTML e CSS (intermediário)</li>
            <li>JavaScript (intermediário)</li>
            <li>TypeScript (intermediário)</li>
            <li>React (intermediário)</li>
            <li>Python (intermediário)</li>
            <li>Inglês (intermediário)</li>
          </ul>
        </CurriculoDiv>
        <CurriculoDiv titulo='Formação Acadêmica'>
          <ul>
            <li>
              Graduação em Engenharia de Computação (2022 - 2023) (Cursado até 3 período)
              <p>Institulo Federal de São Paulo</p>
            </li>
            <li>
              Graduação em Engenharia de Software (2023) (Cursando)
              <p>FIAP</p>
            </li>
          </ul>
        </CurriculoDiv>
        <CurriculoDiv titulo='Cursos Extracurriculares'>
          <ul>
            <li>Formação HTML e CSS (Alura)</li>
            <li>Formação Desenvolva Aplicações Web com JavaScript (Alura)</li>
            <li>Formação Explore React com JavaScript (Alura)</li>
            <li>Formação Gerencie Aplicações React com TypeScript (Alura)</li>
            <li>Python Development (FIAP)</li>
            <li>Python para Data Science (Alura)</li>
          </ul>
        </CurriculoDiv>
      </div>
    </section>
  )
}
