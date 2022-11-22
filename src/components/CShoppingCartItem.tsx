import React from 'react'
import { useShoppingCart } from '../contexts/ShoppingCartContext'
import { currencyFormatter } from '../utilities/currencyFormatter'
import { CartItem } from '../models/productModel'

const CShoppingCartItem: React.FC<{item:CartItem}> = ({ item }) => {
  const { incrementQuantity, decrementQuantity, removeItem } = useShoppingCart()

  return (
    <div className="shoppingcart-item">
      <div className="item-image">
        <img src={item.imageName} alt={item.name} />
      </div>
      <div className="item-info">
        <div className="item-info-name">{item.name}</div>
        <div className="item-info-quantity">
          <div className="item-info-quantity-box">
            <button className="box-button-left" onClick={() => decrementQuantity(item)}>-</button>
            <span>{item.quantity}</span>
            <button className="box-button-right" onClick={() => incrementQuantity(item)}>+</button>
          </div>
        </div>
      </div>
      <div className="item-price">
        <div>{currencyFormatter(item.price * item.quantity)}</div>
        <button onClick={() => removeItem(item.articleNumber)}><i className="fa-solid fa-trash"></i></button>
      </div>
    </div>
  )
}

export default CShoppingCartItem