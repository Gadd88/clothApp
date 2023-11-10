import { useEffect, useState } from 'react'
import {createPortal} from 'react-dom'
import { MdClose } from 'react-icons/md'

export default function Modal({ active, setActive, producto }) {
  const [isVisible, setIsVisible] = useState(false)

  const closeModal = () => {
    setIsVisible(false)
    setTimeout(() => {
      setActive(false)
    }, 300)
  }

  useEffect(() => {
    if (active) {
      setIsVisible(true)
    }
  }, [active])

  if (!active) return null

  return (
    <>
        {
            createPortal(
                <div
                    role="dialog"
                    aria-modal="true"
                    className="fixed left-0 top-0 flex h-screen w-screen items-center justify-center font-grotesque overflow-hidden"
                    >
                    <div
                        style={{
                            opacity: isVisible ? '1' : '0',
                            visibility: isVisible ? 'visible' : 'hidden',
                            }}
                        className="relative flex w-[350px] h-[60%] md:h-[80%] flex-col items-center justify-between rounded-none border-black border-2 bg-[var(--amarillo-bru)] font-bold shadow-[10px_10px_0px_rgba(0,0,0,1)] transition-all duration-300 overflow-hidden"
                        >
                            <article className="flex items-center justify-between flex-col w-full h-full">
                                <button onClick={closeModal} className='block w-full bg-[var(--celeste)] p-2  h-14 md:h-10'>
                                    <MdClose className=" translate-x-[300px] h-7 w-7 bg-pink-500 md:h-6 md:w-6 shadow-[4px_4px_0_#000]" />
                                </button>
                                <figure className="w-72 h-52 border-black border-2 cursor-pointer bg-white">
                                    <img
                                        src={producto.image?.url ? producto.image.url : 'http://www.ooshirts.com/products/165/catalog.jpg'}
                                        alt="thumbnail"
                                        className="w-full h-full object-cover"
                                        />
                                </figure>
                                <section className="w-full text-black flex items-center justify-start gap-3 flex-col">
                                    <h2 className="text-lg font-sans text-left ps-1 line-clamp-2 w-full">{producto.name}</h2>
                                    <p className='text-lg px-2 font-normal font-sans line-clamp-3'>{/* {producto.description} */}</p>
                                </section>
                                <section className='flex justify-end pe-5 h-1/6'>
                                    <button
                                        className="cursor-pointer rounded-none border-2 border-black bg-[var(--celeste)] text-white text-3xl px-4 w-[150px] font-semibold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none mb-2"
                                        onClick={closeModal}
                                        >
                                        $2500
                                    </button>
                                </section>
                            </article>
                    </div>
                </div>,
                document.getElementById('modal')
            )
        }
    </>
  )
}
