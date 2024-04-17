import BotaoLink from "./BotaoLink";

export default function ProjetoItem({ img, titulo, descricao, id, github, demo }) {
  return (
    <li className="mb-32 h-svh" >
      <div className={`flex justify-between gap-20 py-8 h-5/6 ${id % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}>
        <img src={img} alt={titulo} className="w-6/12 h-full rounded-3xl shadow-2xl shadow-slate-800"/>
        <div>
          <h3 className="text-5xl pb-10">{titulo}</h3>
          <p className="text-pretty text-justify text-lg text-slate-300">{descricao}</p>
        </div>
      </div>
      <div className="flex justify-around items-center gap-10">
        {github && <BotaoLink link={github}>Código</BotaoLink>}
        {demo && <BotaoLink link={demo}>Demo</BotaoLink>}
      </div>
    </li>
  )
}
