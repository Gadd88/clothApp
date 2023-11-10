import { Outlet } from "react-router-dom"
import Footer from "../../components/footer/footer"
import ListProductos from "../../components/listProductos/ListProductos"
import Navbar from "../../components/navbar/navbar"



export default function Home() {


  return (
    <>
        <Navbar/>
        <main className="relative my-24">
            <h1 className="text-center text-4xl">Ultimos Ingresos</h1>
            <ListProductos/>
            <Outlet/>
        </main>
        <Footer/>
    </>
    
  )
}
