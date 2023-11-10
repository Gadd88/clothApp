import Footer from "./components/footer/footer"
import ListProductos from "./components/listProductos/ListProductos"
import Navbar from "./components/navbar/navbar"
import { ClothProvider } from "./context/clothProvider"


function App() {


  return (
    <ClothProvider>
      <Navbar />
      <main >
        <h2 className="text-center text-4xl">Ultimos Ingresos</h2>
        <ListProductos/>
      </main>
      <Footer/>
    </ClothProvider>
  )
}

export default App
