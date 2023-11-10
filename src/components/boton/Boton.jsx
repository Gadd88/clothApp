export default function Boton({ children, handleClick }) {
    return (
      <button
        role="button"
        aria-label="Click to perform an action"
        onClick={handleClick}
        className="relative flex cursor-pointer items-center rounded-md border-2 border-black bg-[var(--rosa)] px-5 py-3 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
      >
        {children}
      </button>
    )
  }