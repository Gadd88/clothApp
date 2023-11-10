import Tag from "../tag/Tag"

const ListaTags = () => {
  return (
    <div className="flex items-center mb-2 ms-1">
        Talles:
        <Tag talle='S'/>
        <Tag talle='M'/>
        <Tag talle='L'/>
    </div>
  )
}

export default ListaTags