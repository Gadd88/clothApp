import React from 'react'

const Select = ({handleSelect, placeholder, children, name, id}) => {
  return (
    <div
        className='w-72 bg-[#B8FF9F] hover:bg-[#99fc77] px-3 py-2 border-black border-2 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] rounded-none' 
        name={name} 
        id={id}
        onChange={handleSelect}>
            <option value="">{placeholder}</option>
            {children}
    </div>
  )
}

export default Select