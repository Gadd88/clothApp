import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom'
import Nosotros from './views/nosotros/Nosotros.jsx'
import Contacto from './views/contacto/Contacto.jsx'
import Home from './views/home/Home.jsx'
import { ClothProvider } from './context/clothProvider.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <button className='rounded-none border-4 bg-green-300 border-black shadow-[8px_8px_0_#000] p-4 w-[200px] h-[100px] text-4xl text-bold absolute inset-[40%] active:inset-[41%] active:bg-white '><Link to={'/productos'}>Entrar</Link></button>,
    errorElement: <h1>No se encontró la página</h1>
  },
  {
    path: '/nosotros',
    element: <Nosotros />
  },
  {
    path: '/contacto',
    element: <Contacto />
  },
  {
    path: '/productos',
    element: <Home/>,
    children: [
      {
        path: '/productos/:productoid',
        element: <h2>producto</h2>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClothProvider>
      <RouterProvider router={router}/>
    </ClothProvider>
  </React.StrictMode>
)
