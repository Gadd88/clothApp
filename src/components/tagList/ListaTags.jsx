import Tag from "../tag/Tag"

const ListaTags = () => {
  return (
    <div className="flex items-center mb-2 w-full">
        Talles:
        <Tag talle='S'/>
        <Tag talle='M'/>
        <Tag talle='L'/>
    </div>
  )
}

export default ListaTags