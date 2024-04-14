import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import { useState } from 'react'
import Footer from './components/Footer'


function App() {
  const [ positionY, setPositionY ] = useState(0)
  
  const menuItems = [
    { texto: 'Home', link: '/' },
    { texto: 'Sobre', link: '/sobre' },
    { texto: 'Projetos', link: '/projetos' },
    { texto: 'Curriculo', link: '/curriculo' },
    { texto: 'Contato', link: '/contato' },
  ]


  function controlaScrollHeader() {
    setPositionY(window.scrollY)
  }

  window.addEventListener('scroll', controlaScrollHeader)

  return (
    <main onScroll={controlaScrollHeader}>
      <Header menuItems={menuItems} positionY={positionY}/>
      <Outlet />
      <Footer />
    </main>
  )
}

export default App
