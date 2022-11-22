import React, { useContext, useState } from "react"
import { createContext } from 'react'
import { IProductContextType } from '../models/productModel'

const ProductContext = createContext<IProductContextType | any>(null)

export const useProductContext = () => {
    return useContext(ProductContext)
}

interface Prop {
    children: any
}

export const ProductProvider: React.FC<Prop> = ({children}) => {

    const url = 'https://win22-webapi.azurewebsites.net/api/products'
    const [product, setProduct] = useState({})
    const [products, setProducts] = useState([])
    const [featuredProducts, setFeaturedProducts] = useState([])
    const [twoForProducts, setTwoForProducts] = useState([])
    const [topProducts, setTopProducts] = useState([])

    const getProducts = async () => {
        const res = await fetch(url)
        setProducts(await res.json())
    }
    const getFeaturedProducts = async (take = 0) => {
        const res = await fetch(url + `?take=${take}`)
        setFeaturedProducts(await res.json())
    }
    const getTwoForProducts = async (take = 0) => {
        const res = await fetch(url + `?take=${take}`)
        setTwoForProducts(await res.json())
    }
    const getTopProducts = async (take = 0) => {
        const res = await fetch(url + `?take=${take}`)
        setTopProducts(await res.json())
    }
    const getProduct = async (articleNumber: any) => {
        const res = await fetch(url + `/${articleNumber}`)
        setProduct(await res.json())
    }

    return <ProductContext.Provider value={{product, products, featuredProducts, twoForProducts, topProducts, getProducts, getFeaturedProducts, getTwoForProducts, getProduct, getTopProducts}}>
        {children}
    </ProductContext.Provider>
}