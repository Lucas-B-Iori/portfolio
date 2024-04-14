import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Sobre from './pages/Sobre/Sobre.jsx'
import Projetos from './pages/Projetos/Projetos.jsx'
import Curriculo from './pages/Curriculo/Curriculo.jsx'
import Contato from './pages/Contato/Contato.jsx'
import NotFound from './pages/NotFound/NotFound.jsx'

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [
    { index: true, element: <Home />},
    {
      path: 'sobre',
      element: <Sobre />
    },
    {
      path: 'projetos',
      element: <Projetos />
    },
    {
      path: 'curriculo',
      element: <Curriculo />
    },
    {
      path: 'contato',
      element: <Contato />
    },
    {
      path: '*',
      element: <NotFound />
    }
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
