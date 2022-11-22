import React from 'react'
import { useShoppingCart } from '../contexts/ShoppingCartContext'
import CShoppingCartItem from './CShoppingCartItem'

const CShoppingCart = () => {
    const { cartItems } = useShoppingCart()
    return (
        <div className="shoppingcart offcanvas offcanvas-end" tabIndex={-1} id="shoppingCart" aria-labelledby="shoppingCartLabel">
            <div className="offcanvas-header">
                <h4 className="offcanvas-title" id="shoppingCartLabel"><i className="fa-regular fa-bag-shopping"></i> Shopping Cart</h4>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                {
                    cartItems.map((item: any) => (<CShoppingCartItem key={item.articleNumber} item={item} />))
                }
            </div>
        </div>
    )
}

export default CShoppingCart