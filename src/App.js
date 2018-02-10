import React, { Component } from 'react';
import './App.css';

const PRODUCTS = [
  {
    category: 'Sporting Goods',
    price: '$49.99',
    stocked: true,
    name: 'Football'
  },
  {
    category: 'Sporting Goods',
    price: '$9.99',
    stocked: true,
    name: 'Baseball'
  },
  {
    category: 'Sporting Goods',
    price: '$29.99',
    stocked: false,
    name: 'Basketball'
  },
  {
    category: 'Electronics',
    price: '$99.99',
    stocked: true,
    name: 'iPod Touch'
  },
  {
    category: 'Electronics',
    price: '$399.99',
    stocked: false,
    name: 'iPhone 5'
  },
  {
    category: 'Electronics',
    price: '$199.99',
    stocked: true,
    name: 'Nexus 7'
  }
];

class ProductTable extends Component {
  render() {
    const SPORTINGGOODS = PRODUCTS.filter(
      item => item.category === 'Sporting Goods'
    );
    const ELECTRONICS = PRODUCTS.filter(
      item => item.category === 'Electronics'
    );
    const outOfStock = {
      color: 'red'
    };

    function renderRow(productType) {
      const filteredProducts = productType.filter(item => item.stocked);
      // THis SHizz is brokenedendon

      // if (!this.props.isChecked) {
      //   return filteredProducts.map((item, i) => (
      //     <li key={i}>
      //       <span>{item.name}</span>
      //       <span className="price_col">{item.price}</span>
      //     </li>
      //   ));
      // }
      return productType.map((item, i) => (
        <li key={i}>
          <span style={!item.stocked ? outOfStock : null}>{item.name}</span>
          <span className="price_col">{item.price}</span>
        </li>
      ));
    }

    // Tried conditionals in both of these functions to no avail.  Would also like
    // to not repeat the PRODUCTS.filter.  HOwDO.optimize?

    // function renderStocked(productType) {
    //   const filteredProducts = productType.filter(item => item.stocked);
    //   return filteredProducts.map((item, i) => (
    //     <li key={i}>
    //       <span>{item.name}</span>
    //       <span className="price_col">{item.price}</span>
    //     </li>
    //   ));
    // }

    return (
      <div>
        <div className="product_category">
          <span>Name</span>
          <span className="price_col">Price</span>
        </div>
        <div className="product_category">Sporting Goods</div>
        {renderRow(SPORTINGGOODS)}
        <div className="product_category">Electronics</div>
        {renderRow(ELECTRONICS)}
      </div>
    );
  }
}

class SearchBar extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Search..." />
        <p>
          <input
            type="checkbox"
            checked={this.props.checked}
            onClick={this.props.onClick}
          />
          Only show products in stock
        </p>
      </form>
    );
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { checked: false };
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      checked: value
    });
  }

  render() {
    return (
      <div className="main">
        <SearchBar
          checked={this.state.value}
          onClick={this.handleInputChange.bind(this)}
        />
        <ProductTable isChecked={this.state.value} />
      </div>
    );
  }
}
