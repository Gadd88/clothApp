import { useEffect, useState } from 'react'
import {createPortal} from 'react-dom'
import { MdClose } from 'react-icons/md'
import Imagen from '../imagen/Imagen'



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
                    className="fixed left-0 top-0 flex h-screen w-screen items-center justify-center font-grotesque overflow-hidden z-30"
                    >
                    <div
                        style={{
                            opacity: isVisible ? '1' : '0',
                            visibility: isVisible ? 'visible' : 'hidden',
                            }}
                        className="relative flex w-[300px] h-[400px] md:h-[80%] flex-col items-center justify-between rounded-md border-black border-2 bg-blue-200 font-bold shadow-box transition-all duration-300 overflow-hidden"
                        >
                            <button onClick={closeModal} className='block w-full bg-black p-2  h-14 md:h-10'>
                                <MdClose className="translate-x-[255px] h-7 w-7 bg-pink-500 md:h-6 md:w-6 shadow-[2px_2px_0_#fff]" />
                            </button>
                            <article className="flex items-center justify-between flex-col w-full h-full p-4">
                                <Imagen imagen={producto.image?.url}/>
                                <section className="w-full text-black flex items-center justify-start gap-3 flex-col">
                                    <h2 className="font-light font-sans text-left ps-1 line-clamp-2 w-full">{producto.name}</h2>
                                    <p className='text-lg px-2 font-sans line-clamp-3'>{/* {producto.description} */}</p>
                                </section>
                                <section className='flex justify-center items-center p-1'>
                                    <button
                                        className="cursor-pointer rounded-md border-2 p-1 border-black bg-green-300 text-xl w-[100px] font-sans shadow-box-sm transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
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
