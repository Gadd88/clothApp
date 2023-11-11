import { useEffect, useState } from 'react'
import { ClothContext } from './clothContext'

export const ClothProvider = ({children}) => {

    let favoritosIniciales = JSON.parse(localStorage.getItem('favoritos'))
    if(!favoritosIniciales) favoritosIniciales = []
    
    const [productsApi, setProductsApi] = useState([])
    
    const [clicked, setClicked] = useState(false)
    
    const [favorito, setFavorito] = useState(favoritosIniciales)
    

    // const url = "https://fakestoreapi.com/products/category/men's%20clothing"
    const url2 = 'https://api.scalablepress.com/v3/categories/raglan-shirts'
    
    useEffect(() => {
        try{
            const consultaApi = async () => {
                const respuesta = await fetch(url2);
                const data = await respuesta.json();
                setProductsApi(data.products.slice(0,10))
            }
            consultaApi()
        }catch(error){
            console.log(error.message)
        }
    }, [])

    useEffect(()=>{
        if(favoritosIniciales){
            localStorage.setItem('favoritos', JSON.stringify(favorito))
        }else{
            localStorage.setItem('favoritos', JSON.stringify([]))
        }
    },[favorito, favoritosIniciales])
    
    const handleFavorito = (producto) =>{
        const existeItem = favorito.find(item => item.id === producto.id)
        if(!existeItem){
            setFavorito([...favorito, producto])
        }else{
            const newFav = favorito.filter(item => item.name != existeItem.name)
            setFavorito(newFav)
        }
        
    }

    return (
        <ClothContext.Provider
            value={{
                productsApi,
                favorito,
                setFavorito,
                handleFavorito,
                clicked,
                setClicked
            }}>
            {children}
        </ClothContext.Provider>
    )
}
