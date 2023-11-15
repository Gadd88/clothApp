

const SelectItem = ({title, ...props}) => {
  return (
    <p 
        role="menuitem"
        {...props}
        >
        {title}
    </p>
  )
}

export default SelectItem