

const Tag = ({talle}) => {

  let amarillo = 'var(--aqua)'
  let lavanda = 'var(--rosa)'
  let azul = 'var(--celeste)'

  return (
    <div className={`w-[30px] rounded-none border-1 border-black bg-[${talle=='S' ? amarillo : talle=='M' ? lavanda : azul}] px-1 text-xs text-center font-bold shadow-[4px_4px_0px_#000] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none font-grotesque mt-1 mx-1 cursor-default`}>
      {talle}
    </div>
  )
}

export default Tag