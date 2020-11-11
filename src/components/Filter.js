import React, { Component } from 'react'
import {connect} from 'react-redux'
import {filterProducts, sortProducts} from '../redux/actions/productActions'

class Filter extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          {this.props.filteredItems.length} products found.
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

        <div className="col-md-4"></div>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    products: state.products.items,
    size: state.products.size,
    filteredItems: state.products.filteredItems,
    sort: state.products.sort
  }
}
export default connect (mapStateToProps, {filterProducts, sortProducts})(Filter);