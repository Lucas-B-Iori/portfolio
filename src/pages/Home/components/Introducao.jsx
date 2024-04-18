import Texto from "../../../components/Texto"

export default function Introducao() {
  return (
    <section className="py-32 px-24 text-white">
      <h2 className="text-5xl pb-8 max-sm:text-3xl">Uma pequena introdução sobre mim</h2>
      <Texto texto='Sou estudante de Engenharia de Software que tem muito interesse pela tecnologia e gosta de saber como as tudo relacionado a isso funciona e é construído.' />
      <Texto texto='Atualmente, faço faculdade de Engenharia de Software na FIAP, em São Paulo' />
      <Texto texto='Tenho conhecimentos em algumas linguagens de programação, frameworks e bibliotecas como JavaScript, Python, Pandas, React, TypeScript, HTML e CSS' />
      <Texto texto='Sempre estou disposto a aprender novas tecnologias e assuntos ou poder ter oportunidades de aprimorar os conhecimentos que já tenho' />
    </section>
  )
}
