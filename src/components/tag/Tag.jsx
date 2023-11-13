

const Tag = ({prop, color, size, onClick}) => {

  return (
    <div className={`${size ? `w-[${size}]` : 'w-[30px]'} rounded-none border-1 border-black ${color} p-1 text-xs text-center font-semibold shadow-box-sm transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none font-sans mt-1 mx-1 cursor-default`}
      onClick={onClick}>
      {prop}
    </div>
  )
}

export default Tag