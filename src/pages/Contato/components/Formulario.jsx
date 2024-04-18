import { useState } from "react";
import Input from "./Input";

export default function Formulario() {
  const [ dados, setDados ] = useState({
    nome: '',
    email: '',
    mensagem: ''
  })

  function atualizaDados(dado, valor) {
    setDados(prevDados => (
      {
        ...prevDados,
        [dado]: valor
      }
    ))
  }

  function enviarForm(e) {
    e.preventDefault()
    console.log(dados)
  }

  return (
    <form className="grid grid-cols-2 grid-rows-3 flex-2 gap-2">
      <Input label='Nome' name='nome' type='text' value={dados.nome} atualizaDados={atualizaDados} />
      <Input label='E-mail' name='email' type='text' value={dados.email} atualizaDados={atualizaDados} />
      <Input label='Mensagem' name='mensagem' type='textarea' value={dados.mensagem} atualizaDados={atualizaDados} />
      <button 
        type="submit" 
        className="bg-green-700 p-3 rounded-2xl text-xl mx-8 my-3 max-sm:mx-0"
        onSubmit={enviarForm}
      >
        Enviar
      </button>
    </form>
  )
}
