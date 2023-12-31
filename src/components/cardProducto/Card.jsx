
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import ListaTags from "../tagList/ListaTags"
import { useContext, useState } from "react"
import Modal from "../modal/Modal"
import { ClothContext } from "../../context/clothContext"
import Tag from "../tag/Tag"



const Card = ({producto}) => {

    const {handleFavorito, isFavorite} = useContext(ClothContext)
    // const {image, price, title, description} = producto
    
    const [active, setActive] = useState(false)

    const isFav = isFavorite(producto?.id)
    
    const handleClick = (producto) =>{
        handleFavorito(producto)
    }


  return (    
    <>
        <div className={`w-[150px] h-[250px] sm:w-[200px] sm:h-[300px] border-black border-2 rounded-lg ${isFav ? 'shadow-[4px_4px_0_var(--chicle)]' : 'shadow-box'} bg-green-300 overflow-hidden flex-shrink-0`}> 
            <article className="w-full h-full flex flex-col items-center p-2 justify-between">
                <figure className="w-[130px] h-[230px] sm:w-[180px] sm:h-[150px] border-black border-2 shadow-box-sm rounded-md overflow-hidden cursor-pointer bg-white" onClick={()=>setActive(true)}>
                    <img
                        src={producto.image?.url ? producto.image.url : 'http://www.ooshirts.com/products/165/catalog.jpg'}
                        alt="thumbnail"
                        className="w-full h-full object-contain"
                        />
                </figure>
                <ListaTags title='Talles:'>
                    <Tag prop='S' color='bg-yellow-200'/>
                    <Tag prop='M' color='bg-red-300'/>
                    <Tag prop='L' color='bg-blue-300'/>
                </ListaTags>
                <div className="flex flex-col justify-between items-end w-full">
                    <section className="w-full flex items-center justify-between px-1 mb-5">
                        <h2 className="text-sm ps-1 w-[80%] line-clamp-1 border-2 border-black shadow-box-sm bg-white font-bold">{producto.name}</h2>
                        <span 
                            className="cursor-pointer relative active:drop-shadow-[1px_1px_0_#000] p-1 "
                            onClick={()=>handleClick(producto)}>
                            {
                                isFav && <AiFillHeart/> || <AiOutlineHeart/>
                            }
                        </span>
                    </section>
                    <p className="text-sm w-[60px] text-center font-sans rounded-sm border-2 border-black shadow-box-sm bg-red-300 cursor-default">
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
