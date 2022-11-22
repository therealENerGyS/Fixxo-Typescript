import React from 'react'
import { useShoppingCart } from "../contexts/ShoppingCartContext"
import { currencyFormatter } from '../utilities/currencyFormatter'

const SProductDetails = ( item: any) => {

  const { incrementQuantity, decrementQuantity } = useShoppingCart()

  return (
    <section className="product-details-section">
      <div className="_container">
        <div className="product-all-info">
          <div className="product-images">
          <img src={item.imageName} alt={item.name} /></div>
              <div className="sm-img">
              <div></div>
              <div></div>
              <div></div>
          </div>
          <div className="product-details">
            <h2 className="product-title">{item.name}</h2>
            <div className="id-brand">
              <p className="product-id">{`SKU: ${item.articleNumber}`}</p>
              <p className="product-brand">BRAND: The Northland</p>
            </div>
            <div className="product-rating">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <div className="product-price">
              <h3 className="price">{currencyFormatter(item.price)}</h3>
            </div>
            <div className="product-info">
              <p>
                Discovered had get considered projection who favourable. Necessary
                up knowledge it tolerably. Unwilling departure education is be
                dashwoods or an. Use off agreeable law unwilling sir deficient
                curiosity instantly. <a href="#">(read more)</a>
              </p>
            </div>
            <div className="product-size">
              <h4>Size:</h4>
              <button type="button">S</button>
              <button type="button">M</button>
              <button type="button">L</button>
              <button type="button">X</button>
            </div>
            <div className="product-color">
              <h4>Color:</h4>
              <select>
                <option>Choose an Option</option>
                <option>White</option>
                <option>Black</option>
                <option>Gray</option>
              </select>
            </div>
            <div className="product-qty-button">
              <div className="product-qty">
                <h4>Qty:</h4>
                <div className="quantity">
                <button className="box-button-left" onClick={() => decrementQuantity(item)}>-</button>
                  <h5>1</h5>
                  <button className="box-button-right" onClick={() => incrementQuantity(item)}>+</button>
                </div>
                <button type="button">ADD TO CART</button>
              </div>
            </div>
            <div className="product-share">
              <h4>Share:</h4>
              <div className="share-links">
                <a href="https://www.facebook.com/" title="Opens up Facebook homepage"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="https://www.instagram.com/" title="Opens up Instagram homepage"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://twitter.com/" title="Opens up Twitter homepage"><i className="fa-brands fa-twitter"></i></a>
                <a href="https://www.google.com/" title="Opens up Google homepage"><i className="fa-brands fa-google"></i></a>
                <a href="https://www.linkedin.com/" title="Opens up LinkedIn homepage"><i className="fa-brands fa-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SProductDetails