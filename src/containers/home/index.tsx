
import ItemList from '../../components/ItemList'
import OrderSummary from '../../components/OrderSummary'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import React from 'react'
import './Home.css'
import {
  addToCart,
  removeFromCart,
} from '../../reducers/cart'

export interface Iproducts {
  id: string;
  thumbnail: string;
  name: string;
  unitPrice: number;
}

const Home = (props: any) => (
  <div className="home">
    <div className="title">
      Our Products
    </div>
    <div className = "col-lg-9">
      <ItemList 
        addToCart={props.addToCart}
        items={props.items} 
      />
    </div>
    <div className = "col-lg-3">
      <OrderSummary 
        onRemoveFromCart={props.removeFromCart}
        items={props.items}
        cart={props.cart}
      />
    </div>
  </div>
)

const mapStateToProps = (state: any) => ({
  items: state.items,
  cart: state.cart
})

const mapDispatchToProps = (dispatch: any) => bindActionCreators({
  addToCart,
  removeFromCart
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)