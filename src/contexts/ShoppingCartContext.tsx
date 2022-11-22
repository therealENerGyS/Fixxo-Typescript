import CShoppingCart from "../components/CShoppingCart";
import React from "react";
import { Product } from '../models/productModel'

const { createContext, useContext, useState } = require("react");

const ShoppingCartContext = createContext()

export const useShoppingCart = () => {
    return useContext(ShoppingCartContext)
}

interface Prop {
    children: any
}

interface CartItem {
    item: Product[]
    quantity: number
}

export interface IShoppingContextType {
    cartItems: CartItem[]
}

export const ShoppingCartProvider: React.FC<Prop> = ({children}) => {
    const [cartItems, setCartItems] = useState([])
    const cartQuantity = cartItems.reduce(
        (quantity: any, item: any) => item.quantity + quantity, 0
    )

    const getItemQuantity = (articleNumber: any) => {
        return cartItems.find((item: any ) => item.articleNumber === articleNumber)?.quantity || 0
    }

    const incrementQuantity = (cartItem: any) => {
        const {articleNumber, product} = cartItem

        setCartItems((items: any) => {
            if (items.find((item: any) => item.articleNumber === articleNumber) == null) {
                return [...items, { articleNumber, product, quantity: 1}]
            }
            else {
                return items.map((item: any) => {
                    if (item.articleNumber === articleNumber) {
                        return { ...item, quantity: item.quantity + 1}
                    }
                    else {
                        return item
                    }
                })
            }
        })
    }

    const decrementQuantity = (cartItem: any) => {
        const {articleNumber} = cartItem

        setCartItems((items: any) => {
            if (items.find((item: any) => item.articleNumber === articleNumber).quantity == 1) {
                return items.filter((item: any) => item.articleNumber !== articleNumber)
            }
            else {
                return items.map((item: any) => {
                    if (item.articleNumber === articleNumber) {
                        return { ...item, quantity: item.quantity - 1}
                    }
                    else {
                        return item
                    }
                })
            }
        })
    }

    const removeItem = (articleNumber: any) => {
        setCartItems((items: any) => {
            return items.filter((item: any) => item.articleNumber !== articleNumber)
        })
    }

    return <ShoppingCartContext.Provider value={{cartItems, cartQuantity, getItemQuantity, incrementQuantity, decrementQuantity, removeItem}}>
        {children}
        <CShoppingCart />
    </ShoppingCartContext.Provider>
}