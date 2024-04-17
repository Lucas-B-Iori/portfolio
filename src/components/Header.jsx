import { useState } from "react";
import MenuItem from "./MenuItem";

export default function Header({ menuItems, positionY }) {
  return (
    <header className={positionY > 40 ? 'fixed right-0 brightness-200 bg-slate-900 w-full opacity-85 top-0' : ''}>
      <nav className="px-40 py-4">
        <ul className="flex justify-end gap-24">
          {menuItems.map(item => (
            <MenuItem key={item.texto} {...item} />
          ))}
        </ul>
      </nav>
    </header>
  )
}
