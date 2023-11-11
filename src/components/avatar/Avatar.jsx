
const Avatar = ({imagen}) => {
  return (
    <div
      style={{
        backgroundImage: `url(${imagen})`,
      }}
      className="h-12 w-12 rounded-md border-2 border-black bg-cover bg-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
    ></div>
  )
}

export default Avatar