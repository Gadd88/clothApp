

const SelectItem = ({title, id, bg, handleItem}) => {
  return (
    <p
        className={`block px-4 py-2 text-md text-black font-bold border-black border-b-2 rounded-none ${bg ? bg : ''} hover:bg-[#B8FF9F] hover:font-medium hover:italic cursor-pointer`} 
        value={title}
        role="menuitem"
        onClick={handleItem}
        id={id}>
        {title}
    </p>
  )
}

export default SelectItem