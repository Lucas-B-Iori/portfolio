import { useState } from "react";
import MenuItem from "./MenuItem";
import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

export default function Header({ menuItems, positionY }) {
  const [ aberto, setAberto ] = useState(false)
  
  let componenteBotao = <MdOutlineMenu className="size-6" />
  if (aberto) {
    componenteBotao = <IoMdClose className="size-6" />
  }

  function trocaMenu() {
    setAberto(prevState => !prevState)
  }

  return (
    <header className={` ${positionY > 40 ? 'md:fixed md:right-0 md:brightness-200 md:bg-slate-900 md:w-svw md:opacity-85 md:top-0' : ''}`}>
      <nav className={`px-40 py-4  max-lg:px-16 ${aberto && 'max-md:bg-slate-900 max-md:fixed max-md:left-0 top-0 h-full'} max-md:w-36`}>
        <button className={`text-white ${aberto && 'max-md:pl-10'} md:hidden`} onClick={trocaMenu}>{componenteBotao}</button>
        <ul className={`flex justify-end gap-24 ${aberto ? 'flex-col fixed bg-slate-900 w-36 left-0 gap-16 justify-start items-start ' : 'max-md:hidden'}`}>
          {menuItems.map(item => (
            <MenuItem key={item.texto} {...item} />
          ))}
        </ul>
      </nav>
    </header>
  )
}
