import './OrderSummary.css'
import React from 'react'

const OrderSummary = (props: any) => {

  const { cart, onRemoveFromCart } = props

  const cartItems = Object.keys(cart.itemsMap)
  .map(key => cart.itemsMap[key]).map((cartItem) => {
      
      return (
        <div key={cartItem.id} className="cart-item">
          <div className="properties">
            <div className="name">
              {cartItem.name}
              {` -- Price: ${cartItem.unitPrice}`}
            </div>
            <div className="quantity">
              {`Quantity: ${cartItem.quantity}`}
            </div>
          </div>
          <button onClick={() => onRemoveFromCart(cartItem.id)}
            className="btn-remove">
           x
          </button>
        </div>  
      )
    })

  return (
    <div className="order-summary">
      <div className="title">
        Your Cart
      </div>
      <div className="cart-items">
        { cartItems }
      </div>
      <div className="cost">
        <b>Total Cost: </b> {props.cart.totalCost}
      </div>
    </div>
  )
}

export default OrderSummary