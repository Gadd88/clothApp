import { Link } from "react-router-dom"

const Items = () => {
  return (
    <ul className="text-3xl flex flex-col gap-10 justify-end items-end tracking-wider text-[var(--rosa-piel)]">
        <li className="relative active:top-1 rounded-md active:left-1 active:shadow-none active:bg-[var(--rosa-piel)] w-[200px] border-2 border-black p-1 text-right shadow-box bg-pink-300 text-black cursor-pointer"><Link to={'/'}>Home</Link></li>
        <li className="relative active:top-1 rounded-md active:left-1 active:shadow-none active:bg-[var(--rosa-piel)] w-[200px] border-2 border-black p-1 text-right shadow-box bg-pink-300 text-black cursor-pointer"><Link to={'/productos'}>Productos</Link></li>
        <li className="relative active:top-1 rounded-md active:left-1 active:shadow-none active:bg-[var(--rosa-piel)] w-[200px] border-2 border-black p-1 text-right shadow-box bg-pink-300 text-black cursor-pointer"><Link to={'/contacto'}>Contacto</Link></li>
        <li className="relative active:top-1 rounded-md active:left-1 active:shadow-none active:bg-[var(--rosa-piel)] w-[200px] border-2 border-black p-1 text-right shadow-box bg-pink-300 text-black cursor-pointer"><Link to={'/nosotros'}>Nosotros</Link></li>
    </ul>
  )
}

export default Items