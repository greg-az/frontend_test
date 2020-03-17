
import ItemList from '../../components/ItemList'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import React from 'react'
import './Home.css'

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
  </div>
)

const mapStateToProps = (state: any) => ({
  items: state.items
})

const mapDispatchToProps = (dispatch: any) => bindActionCreators({
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)