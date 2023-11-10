

const Tag = ({talle}) => {

  return (
    <div className={`w-[30px] rounded-none border-1 border-black bg-${talle=="S" ? "green-200" : talle=="M" ? "yellow-300" : "pink-300"} px-1 text-xs text-center font-bold shadow-box-sm transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none font-grotesque mt-1 mx-1 cursor-default`}>
      {talle}
    </div>
  )
}

export default Tag