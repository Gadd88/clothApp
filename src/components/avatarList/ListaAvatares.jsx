import Avatar from "../avatar/Avatar"


const ListaAvatares = ({favorito}) => {

    let img = 'http://www.ooshirts.com/products/165/catalog.jpg'
  return (
    <div className="absolute w-[200px] h-[200px] bottom-44 md:bottom-56 lg:bottom-32 bg-white border-2 border-black shadow-[8px_8px_0_#000] flex items-start justify-start flex-wrap overflow-y-auto p-2 gap-2">
        {
            favorito?.map(item=>(
                <Avatar
                    key={item.id}
                    imagen={item.image?.url || img}/>
            ))
        }    
    </div>
  )
}

export default ListaAvatares