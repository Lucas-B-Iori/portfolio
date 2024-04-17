import Formulario from "./Formulario";

export default function ContatoSection() {
  return (
    <section className="px-24 py-16 text-white min-h-screen">
      <h2 className="text-5xl py-8">Me Contate</h2>
      <div className="flex justify-between items-start">
        <div>
          <h4 className="text-3xl font-thin pb-8">Meios de comunicação</h4>
          <p className="font-serif font-medium py-4">Email: lucasbertolassiiori@gmail.com</p>
          <p className="font-serif font-medium py-4">Telefone: (16) 99741-8746</p>
        </div>
        <Formulario />
      </div>
    </section>
  )
}
