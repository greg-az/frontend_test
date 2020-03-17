import Item from '../Item'
import React from 'react'
import './ItemList.css'
import { Iproducts } from '../../constants'

const ItemList = (props: any) => {

  const items = props.items.map((item: Iproducts) => {
    return (
      <div className = "row">
        <Item 
          onAddToCart={props.addToCart}
          key={item.id}
          item={item} 
        />
      </div>
    )
  })

  return (
      <div className="item-list">
        {items}
      </div>
  )
}

export default ItemList