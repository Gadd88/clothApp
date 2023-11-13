import { useContext, useState } from "react"
import { AiFillHeart, AiOutlineMenu } from 'react-icons/ai'
import { ClothContext } from "../../context/clothContext"
import Boton from "../boton/Boton"
import Items from "../menu/items"
import Menu from "../menu/menu"
import ListaAvatares from "../avatarList/ListaAvatares"


const Navbar = () =>{
    const [active, setActive] = useState(false)
    const [showFav, setShowFav] = useState(false)
    const {favorito} = useContext(ClothContext)

    const handleClick = () =>{
        setActive(true)
    }
    return(
        <header className="p-2 fixed top-0 w-full h-20 z-20">
            <nav className='flex justify-between'>
                <section className="logo">
                    <h1 className="text-5xl text-center font-lemure">Cloth App</h1>
                </section>
                <Boton 
                    handleClick={handleClick}
                    >
                    <AiOutlineMenu/>
                </Boton>
            </nav>
            <Menu
                active={active}
                setActive={setActive}>
                <Items/>
                <Boton>
                    <div className={`text-white ${favorito?.length>0 ? 'flex' : 'hidden'} items-center justify-center absolute -top-2 -right-2 bg-[var(--aqua)] rounded-full border-2 border-black p-1 h-7 w-7 text-2xl font-grotesque`}>{favorito?.length}</div>
                    <AiFillHeart className="w-10 h-10" onClick={()=>setShowFav(!showFav)}/>
                </Boton>
                {
                    showFav && <ListaAvatares favorito={favorito}/>
                }
            </Menu>
        </header>
    )
}
//

export default Navbar