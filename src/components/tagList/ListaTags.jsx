
const ListaTags = ({title, children}) => {
  return (
    <div className="flex items-center w-full p-1 justify-center">
        {title}
        {children}
    </div>
  )
}

export default ListaTags