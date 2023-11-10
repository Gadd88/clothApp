
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import ListaTags from "../tagList/ListaTags"
import { useContext, useState } from "react"
import Modal from "../modal/Modal"
import { ClothContext } from "../../context/clothContext"



const Card = ({producto}) => {

    const {handleFavorito, favorito} = useContext(ClothContext)
    // const {image, price, title, description} = producto
    const [clicked, setClicked] = useState(false)
    const [active, setActive] = useState(false)

    const handleClick = (producto) =>{
        setClicked(!clicked)
        handleFavorito(producto)
    }


  return (    
    <>
    
        <div className="w-[160px] h-[280px] border-black border-2 rounded-none shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-green-300 overflow-hidden flex-shrink-0"> 
            <article className="block w-full h-full">
                <figure className="w-full h-3/5 border-black border-b-2 cursor-pointer bg-white" onClick={()=>setActive(true)}>
                    <img
                        src={producto.image?.url ? producto.image.url : 'http://www.ooshirts.com/products/165/catalog.jpg'}
                        alt="thumbnail"
                        className="w-full h-full object-contain"
                        />
                </figure>
                <ListaTags />
                <div className="flex flex-col gap-1 items-end h-full">
                    <section className="bg-[var(--lavanda-fuerte)] w-full flex items-center justify-between ps-1 ">
                        <h2 className="text-lg ps-1 line-clamp-1">{producto.name}</h2>
                        <span 
                            className="cursor-pointer relative active:drop-shadow-[1px_1px_0_#000] p-1 "
                            onClick={()=>handleClick(producto)}>
                            {
                                clicked && <AiFillHeart/> || <AiOutlineHeart/>
                            }
                        </span>
                    </section>
                    <p className="text-sm w-[70px] text-center font-grotesque font-semibold rounded-none border-2 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)] p-1 me-2 bg-[var(--azul-aqua)] text-white cursor-default">
                        <strong>$2500</strong>
                    </p>
                </div>
            </article>
        </div>
        <Modal
            active={active}
            setActive={setActive}
            producto={producto} />
    </>
  )
}

export default Card
// w-[250px] overflow-hidden rounded-md border-2 border-black bg-[#bc95d4] font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]