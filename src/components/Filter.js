import React, { Component } from 'react'
import {connect} from 'react-redux'
import {filterProducts, sortProducts} from '../redux/actions/productActions'
//import SearchField from 'react-search-field';
import {fetchProducts} from '../redux/actions/productActions'
import { debounce } from 'lodash';

class Filter extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   keyword: ''
    // };
    this.handleChange = this.handleChange.bind(this);
    // this.searchProducts = this.searchProducts.bind(this);
    // this.debounce = this.debounce.bind(this);
    this.throttleHandleChange = debounce(this.throttleHandleChange.bind(this), 500);
  }
  // handleChange(event){
  //   // this.props.fetchProducts(this.props.email, this.props.token, event.target.value);
  //   this.debounce(this.searchProducts, 300, event.target.value);
  // }
  // searchProducts(keyword)
  // {
  //   console.log('search')
  //   this.props.fetchProducts(this.props.email, this.props.token, keyword);
  // }
  throttleHandleChange(edata) {
    this.props.fetchProducts(this.props.email, this.props.token, edata);
 }
 
 handleChange(e) {
     //let edata = { id: e.id, target: e.target }
     this.throttleHandleChange(e.target.value)
 };
  // debounce(fn, d){
    
  //   let timer;
  //   return function ()  {
  //     console.log('return')
  //     let context = this,
  //     args = arguments;
  //     clearTimeout(timer);
  //     timer = setTimeout(() => {
  //       fn.apply(context, args);
  //     }, d);
  //   }
  // }
  render() {
    return (
      <div className="row">
        
        
        <div className="col-md-4">
          <label>
            Search
            <br/>
            <input 
              placeholder='Search item'
              onChange={this.handleChange}
              onSearchClick={this.handleSearchClick}
            />
            
          </label>
        </div>

        <div className="col-md-4">
          <label>
            Order by
            <select className="form-control" value={this.props.sort}
              onChange={(e) => this.props.sortProducts(this.props.filteredItems, e.target.value)}>
                <option value="">Select</option>
                <option value="lowest">Lowest to highest</option>
                <option value="high">Highest to lowest</option>
            </select>
          </label>
        </div>

        <div className="col-md-4">
          <label>
            Filter size
            <select className="form-control" value={this.props.size}
              onChange={(e) => this.props.filterProducts(this.props.products, e.target.value)}>
                <option value="">ALL</option>
                <option value="xs">XS</option>
                <option value="s">S</option>
                <option value="m">M</option>
                <option value="l">L</option>
                <option value="xl">XL</option>
                <option value="xxl">XLL</option>
                
            </select>
          </label>
        </div>

        
        <div className="row" >
        <div className="col-md-4">
        {this.props.filteredItems.length} products found.
        </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    products: state.products.items,
    size: state.products.size,
    filteredItems: state.products.filteredItems,
    sort: state.products.sort,
    email: state.session.user.email,
    token: state.session.user.authentication_token
  }
}
export default connect (mapStateToProps, {filterProducts, sortProducts, fetchProducts})(Filter);