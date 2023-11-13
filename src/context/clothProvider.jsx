import { useEffect, useState } from 'react'
import { ClothContext } from './clothContext'

export const ClothProvider = ({children}) => {

    // let favoritosIniciales = JSON.parse(localStorage.getItem('favoritos'))
    // if(!favoritosIniciales) favoritosIniciales = []
    
    const [productsApi, setProductsApi] = useState([])
    const [favorito, setFavorito] = useState([])
    

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

    const guardarEnLocalStorage = (items) =>{
        localStorage.setItem('favoritos', JSON.stringify(items))
    }

    const borrarStorage = () => localStorage.removeItem('favoritos')
    const cargarDeLocalStorage = () => localStorage.getItem("favoritos");

    const isFavorite = (id) => favorito && favorito.find(item => item.id === id)

    useEffect(()=>{
        const data = cargarDeLocalStorage();
        if(data === null){
            setFavorito([])
        }else{
            setFavorito(JSON.parse(data))
        }
    },[])
    
    const handleFavorito = (producto) =>{
        const existeItem = favorito?.find(item => item.id === producto.id)
        if(!existeItem){
            guardarEnLocalStorage([...favorito, producto])
            setFavorito([...favorito, producto])
        }else{
            const newFav = favorito.filter(item => item.id != existeItem.id)
            guardarEnLocalStorage(newFav)
            setFavorito(newFav)
        }
    }

    const handleStorage = () => {
        setFavorito([])
        borrarStorage();
        
    }

    return (
        <ClothContext.Provider
            value={{
                productsApi,
                favorito,
                setFavorito,
                isFavorite,
                handleFavorito,
                handleStorage
            }}>
            {children}
        </ClothContext.Provider>
    )
}
