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
    element: <button className='rounded-none border-4 bg-green-300 border-black shadow-box p-4 w-[200px] h-[100px] text-4xl text-bold md:left-[40%] md:active:left-[40%] absolute top-[44%] left-[25%] active:top[45%] active:left-[25.5%] active:bg-white active:shadow-none transition-all '><Link to={'/productos'}>Entrar</Link></button>,
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
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClothProvider>
      <RouterProvider router={router}/>
    </ClothProvider>
  </React.StrictMode>
)
