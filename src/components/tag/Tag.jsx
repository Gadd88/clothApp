

const Tag = ({talle}) => {

  return (
    <div className={`w-[30px] rounded-none border-1 border-black ${talle=="S" ? "bg-blue-400" : talle=="M" ? "bg-yellow-200" : "bg-pink-300"} px-1 text-xs text-center font-bold shadow-box-sm transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none font-grotesque mt-1 mx-1 cursor-default`}>
      {talle}
    </div>
  )
}

export default Tag