import { useContext } from "react"
import Card from "../cardProducto/Card"
import { ClothContext } from "../../context/clothContext"

const ListProductos = () => {
  const {productsApi} = useContext(ClothContext)

  return (
    <div className="grid grid-cols-2 gap-4 overflow-y-auto snap-mandatory py-6 px-1 md:flex md:justify-center md:gap-16 md:items-center md:flex-wrap">
        {
          productsApi?.length > 0
          ? productsApi.map(producto => (
            <Card 
              key={producto.id}
              producto={producto}/>
          ))
          : null

        }
    </div>
  )
}

export default ListProductos