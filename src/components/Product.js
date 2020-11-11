import React, { Component } from 'react'
import util from '../util';
import {connect} from 'react-redux'
import {fetchProducts} from '../redux/Product/productActions'
import {addToCart} from '../redux/Product/cartActions'

class Products extends Component {
  componentDidMount(){
    this.props.fetchProducts(this.props.email, this.props.token);
  }
  render() {
    console.log('size...', this.props.products)
    const productItems = this.props.products.map((product) => (
      <div className="col-md-4" key={product.id}>
        <div className="thumbnail text-center">
          <a href={`#${product.id}`} 
          onClick={() => this.props.addToCart(this.props.cartItems, product)}>
            <img src={product.image.url} alt={product.title}/>
           
            <p>
              {product.name}
            </p>
          </a>
          <div>
            <b>{util.formatCurrency(product.price)}</b>
            <button className="btn btn-primary"
            onClick={() => this.props.addToCart(this.props.cartItems, product)}>Add To Cart</button>
          </div>
        </div>
      </div>
      )
    )
    return (
      <div className="row">
        {productItems}
      </div>
    )
  }
}
const mapStateToProps = state => {
  //console.log('size...', state.products.filteredItems)
  return {
    products: state.products.filteredItems,
    cartItems: state.cart.items,
    email: state.session.user.email,
    token: state.session.user.authentication_token
  }
}
export default connect (mapStateToProps, {fetchProducts, addToCart})(Products);
