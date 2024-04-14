import Texto from "./Texto";

export default function SobreSection() {
  return (
    <section className="py-32 px-56 text-white">
      <h2 className="text-5xl pb-8">Sobre Mim</h2>
      <Texto texto='Olá pessoal, me chamo Lucas Iori e moro em São Paulo.' />
      <Texto texto='No momento, estou estudando Engenharia de Software na FIAP, estou no segundo semestre e em busca de uma oportunidade de estágio.' />
      <Texto texto='Sempre gostei e me interessei muito por essa área de tecnologia, então decidi fazer esse curso da FIAP para poder aprender tudo de mais moderno que existe dentro da programação.' />
      <Texto texto='Dentro da faculdade, tenho aprendido matérias como Desenvolvimento Front-End, Algoritmos com Pyhton, Edge Computing, Storytelling, entre outras.' />
      <Texto texto='Também existem outras atividades que gosto de fazer, como: praticar futebol, jogar alguns jogos, assistir séries e filmes (principalmente de comédia).' />
    </section>
  )
}
