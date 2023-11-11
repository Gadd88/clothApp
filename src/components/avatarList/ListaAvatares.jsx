import { useContext } from "react"
import { RiDeleteBin2Line } from "react-icons/ri"
import { ClothContext } from "../../context/clothContext"
import Avatar from "../avatar/Avatar"
import Boton from "../boton/Boton"


const ListaAvatares = ({favorito}) => {

  const {setFavorito} = useContext(ClothContext)
  const borrarStorage = () =>{
    setFavorito([])
  }

    let img = 'http://www.ooshirts.com/products/165/catalog.jpg'
  return (
    <div className="absolute w-[200px] h-[200px] bottom-40 md:bottom-56 lg:bottom-40 bg-white border-2 border-black shadow-[8px_8px_0_#000] flex items-start justify-start flex-wrap overflow-y-auto rounded-md">
        <section className="flex flex-col justify-between items-center h-full w-full p-2">
          <article className="flex items-center justify-start flex-wrap gap-2">
            {
                favorito?.map(item=>(
                    <Avatar
                        key={crypto.randomUUID().slice(0,4)}
                        imagen={item.image?.url || img}/>
                ))
            }
          </article>
          {
            favorito.length > 0
            ? (
              <Boton handleClick={borrarStorage}>
                <RiDeleteBin2Line/>
              </Boton>
            ): null
          }
    
        </section>
    </div>
  )
}

export default ListaAvatares