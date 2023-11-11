

const Imagen = ({imagen}) => {
  return (
    <figure className="w-full h-[200px] border-black border-2 cursor-pointer bg-white rounded-md overflow-hidden shadow-box-sm">
        <img
            src={imagen ? imagen : 'http://www.ooshirts.com/products/165/catalog.jpg'}
            alt="thumbnail"
            className="w-full h-full object-contain"
            />
    </figure>
  )
}

export default Imagen