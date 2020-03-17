import React from 'react'
import './Item.css'

const Item = (props: any) => (
  <div className="item">
    <img  
      alt={props.item.name} src={props.item.thumbnail}
      className="thumbnail"
    />
    <div className="item-properties">
      <div className="name">
        {props.item.name}
      </div>
      <div className="price">
        {`Unit Price: ${props.item.unitPrice}$`}
      </div>
      <button className="btn-add"
        onClick={() => props.onAddToCart(props.item)}>
        Add to Cart
      </button>
    </div>
  </div>
)

export default Item