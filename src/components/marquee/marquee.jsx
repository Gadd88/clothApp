
const Marquee = () => {
    const items = [
        {id: 1, producto:'Remeras'},
        {id: 2, producto:'Camperas'},
        {id: 3, producto:'Vestidos'},
        {id: 4, producto:'Jeans'},
        {id: 5, producto:'Bermudas'},
    ]
  return (
        <div className="relative flex w-full overflow-x-hidden border-b-2 border-t-2 border-black font-bold cursor-default bg-white text-black">
            <div className="animate-marquee whitespace-nowrap py-5">
                {items.map((item) => {
                return (
                    <span key={item.id} className="mx-4 text-4xl">
                    {item.producto}
                    </span>
                )
                })}
            </div>        
            <div className="absolute top-0 animate-marquee2 whitespace-nowrap py-5">
                {items.map((item) => {
                return (
                    <span key={item.id} className="mx-4 text-4xl">
                    {item.producto}
                    </span>
                )
                })}
            </div>
        </div>
    )
}

export default Marquee