import siteHCImg from '../assets/site-hc.png'
import aluraTubeImg from '../assets/aluratube.png'
import ProjetoItem from './ProjetoItem'

const projetos = [
  {
    img: 'https://media.licdn.com/dms/image/D4D22AQHHxwRhVyawpg/feedshare-shrink_800/0/1708015479027?e=1715817600&v=beta&t=IHmMgwQ5oZtzWQgVqp8ayjznBlNUf01poys2yvPLBhQ',
    titulo: 'PizzaShop',
    descricao: 'Neste projeto, eu criei uma landing page dinâmica para uma pizzaria, utilizando ferramentas modernas e práticas de desenvolvimento front-end. O objetivo principal foi aprimorar e consolidar meus conhecimentos em React, HTML e CSS. Durante a implementação, pude explorar e praticar conceitos fundamentais dessas tecnologias, garantindo uma experiência de usuário fluida e atraente. Esta iniciativa não apenas fortaleceu minha base de habilidades, mas também me proporcionou insights valiosos sobre as melhores práticas na criação de interfaces web interativas e responsivas.',
    id: 1,
    github: 'https://github.com/Lucas-B-Iori/landing-page-pizza',
    demo: 'https://landing-page-pizza-omega.vercel.app/'
  },
  {
    img: 'https://media.licdn.com/dms/image/D4D22AQHrpHAwJXkjFw/feedshare-shrink_800/0/1703257908630?e=1715817600&v=beta&t=5rhJoI3ljE44b_D1zGu5nCFmuahuCnY_VyLTh-LkuNo',
    titulo: 'Jogo da Velha',
    descricao: 'No projeto do Jogo da Velha, desenvolvido como parte do curso "React The Complete Guide" ministrado por Maximilian Schwarzmüller na Udemy, mergulhei profundamente no universo do React para aprimorar minhas habilidades em lógica de programação e resolução de problemas. Este projeto desafiador exigiu um entendimento sólido de conceitos avançados, como criação de componentes e gerenciamento de estados no React. Através dessa experiência intensiva, não só consolidei meu conhecimento em React, mas também desenvolvi habilidades cruciais para construir aplicações web interativas e eficientes. Este projeto serviu como um marco significativo no meu percurso de aprendizado, oferecendo uma base sólida para futuros desenvolvimentos e desafios no mundo da programação front-end.',
    id: 2,
    github: 'https://github.com/Lucas-B-Iori/Jogo-da-Velha-React',
    demo: 'https://jogo-da-velha-react-beta.vercel.app/'
  },
  {
    img: 'https://media.licdn.com/dms/image/D4D22AQGiyRJImlgnXQ/feedshare-shrink_800/0/1700498491926?e=1715817600&v=beta&t=MSwEGTfLoZuNRcdUUZHEj39U1PEh_LwZLvUfYL2_4D4',
    titulo: 'CineMania',
    descricao: 'Neste projeto, concentrei-me no desenvolvimento de uma aplicação orientada ao consumo de APIs, explorando a integração e manipulação de dados externos em um ambiente React. Utilizei o hook useEffect para realizar chamadas à API do TMDB, permitindo-me acessar informações atualizadas sobre os filmes mais populares do momento. Além disso, para aprimorar a tipagem e a segurança do código, integrei o TypeScript, garantindo uma melhor manutenção e escalabilidade do projeto. Para a navegação entre diferentes páginas e componentes, implementei o React-Router, proporcionando uma experiência de usuário fluída e intuitiva. Este projeto não apenas me permitiu aprofundar meu conhecimento em React e seus hooks, mas também me desafiou a incorporar práticas de desenvolvimento modernas e eficientes. Ao final, obtive uma aplicação robusta e dinâmica, capaz de oferecer aos usuários informações precisas e relevantes sobre os filmes em destaque na indústria cinematográfica.',
    id: 3,
    demo: 'https://cine-mania.vercel.app/'
  },
  {
    img: siteHCImg,
    titulo: 'Challenge ICR FIAP',
    descricao: 'Neste projeto acadêmico, em colaboração com meu grupo, assumimos o desafio de humanizar e otimizar o site do Hospital das Clínicas, focando especificamente no Instituto da Criança e do Adolescente. Nosso objetivo principal é criar uma plataforma mais acolhedora e acessível, garantindo que as informações cruciais sejam facilmente compreendidas e acessadas por todos os usuários. Para alcançar esse objetivo, estamos adotando uma abordagem centrada no usuário, revisando o design e a estrutura do site para torná-lo mais intuitivo e amigável. Estamos implementando técnicas de design responsivo e acessibilidade, assegurando que o site seja acessível para pessoas com diferentes necessidades e dispositivos. Além disso, estamos trabalhando em estreita colaboração com profissionais de saúde e pacientes para garantir que o conteúdo seja relevante, preciso e compreensível para o público-alvo. Este projeto não apenas nos desafia a aplicar nossos conhecimentos acadêmicos na prática, mas também nos motiva a criar um impacto positivo, melhorando a experiência online dos usuários do Instituto da Criança e do Adolescente.',
    id: 4,
    demo: 'https://site-hc.vercel.app/'
  },
  {
    img: aluraTubeImg,
    titulo: 'AluraTube',
    descricao: 'Durante uma imersão de React promovida pela Alura, tive a oportunidade de trabalhar em um projeto desafiador onde o professor era o desenvolvedor Mario Souto, da Nubank. O projeto, denominado AluraTube, é uma plataforma inspirada no YouTube, projetada para oferecer uma experiência de usuário dinâmica e interativa. O AluraTube apresenta diversas funcionalidades avançadas, incluindo uma barra de pesquisa intuitiva que permite aos usuários filtrar e selecionar vídeos específicos com facilidade. Além disso, implementamos um botão de alternância de tema, permitindo que os usuários escolham entre um modo claro e um modo escuro, conforme suas preferências visuais. Durante o desenvolvimento deste projeto, pude aprofundar meus conhecimentos em React e explorar técnicas avançadas de desenvolvimento front-end. A colaboração com outros participantes da imersão enriqueceu ainda mais a experiência, proporcionando insights valiosos e promovendo o aprendizado colaborativo.',
    id: 5,
    github: 'https://github.com/Lucas-B-Iori/aluratube',
    demo: 'https://aluratube-five-delta.vercel.app/'
  }
]

export default function ProjetosSection() {
  return (
    <section className="px-24 py-16 text-white">
      <h2 className="text-5xl pb-28">Meus Principais Projetos</h2>
      <ul className='flex flex-col'>
        {projetos.map(projeto => (
          <ProjetoItem key={projeto.id} {...projeto} />
        ))}
      </ul>
    </section>
  )
}
