export default function Boton({ children, handleClick }) {
    return (
      <button
        role="button"
        aria-label="Click to perform an action"
        onClick={handleClick}
        className="relative flex cursor-pointer items-center rounded-md border-2 border-black bg-pink-300 px-5 py-3 font-bold shadow-box transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
      >
        {children}
      </button>
    )
  }