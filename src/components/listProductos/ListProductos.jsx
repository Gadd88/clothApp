import { useContext, useState } from "react"
import Card from "../cardProducto/Card"
import { ClothContext } from "../../context/clothContext"
import Dropdown from "../dropdown/Dropdown"
import SelectItem from "../dropdown/SelectItem"

const ListProductos = () => {
  const {productsApi} = useContext(ClothContext)
  const [categoria, setCategoria] = useState('')
  
  const handleCategoria = (e) =>{
    setCategoria(e.target.attributes.id.value)
  }

  return (
    <div className="flex flex-col w-full mt-2 items-center lg:items-start justify-center p-4">
      <Dropdown title='Categorias'>
        <SelectItem title='Remeras' id='remeras' onClick={(e)=>handleCategoria(e)} className={`block px-4 py-2 text-md text-black font-bold border-black border-b-2 rounded-none hover:bg-[#B8FF9F] hover:font-medium hover:italic cursor-pointer`}/>
        <SelectItem title='Jeans' id='jeans' onClick={(e)=>handleCategoria(e)} className={`block px-4 py-2 text-md text-black font-bold border-black border-b-2 rounded-none hover:bg-[#B8FF9F] hover:font-medium hover:italic cursor-pointer`}/>
        <SelectItem title='Bermudas' id='bermudas' onClick={(e)=>handleCategoria(e)} className={`block px-4 py-2 text-md text-black font-bold border-black border-b-2 rounded-none hover:bg-[#B8FF9F] hover:font-medium hover:italic cursor-pointer`}/>
      </Dropdown>
      <div className="grid grid-cols-2 gap-4 overflow-y-auto snap-mandatory py-6 place-items-center md:flex md:justify-center md:gap-8 md:items-center md:flex-wrap">
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
    </div>
  )
}

export default ListProductos