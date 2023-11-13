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
    console.log(categoria)
  }

  return (
    <div className="flex flex-col w-full mt-2 items-center lg:items-start justify-center p-4">
      <Dropdown title='Categorias'>
        <SelectItem title='Remeras' id='remeras' handleItem={(e)=>handleCategoria(e)}/>
        <SelectItem title='Jeans' id='jeans' handleItem={(e)=>handleCategoria(e)}/>
        <SelectItem title='Bermudas' id='bermudas' handleItem={(e)=>handleCategoria(e)}/>
      </Dropdown>
      {/* <ListaTags>
        <Tag prop='Remeras' color='bg-yellow-200' size='100px' value='remeras' onClick={(e)=>handleTag(e)}/>
        <Tag prop='Jeans' color='bg-red-300' size='100px'/>
        <Tag prop='Bermudas' color='bg-blue-300' size='100px'/>
      </ListaTags> */}
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