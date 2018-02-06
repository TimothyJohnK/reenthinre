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
  constructor(props) {
    super(props);
    this.state = { checked: null };
  }
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
      return productType.map(
        (item, i) =>
          item.stocked ? (
            <li key={i}>
              <span style={!item.stocked ? outOfStock : null}>{item.name}</span>
              <span className="price_col">{item.price}</span>
            </li>
          ) : null
      );
    }

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
            checked={null}
            // checked={this.state.value}
            onClick={() => this.handleClick()}
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
    this.state = { value: null };
  }
  handleClick() {
    if (!this.state.value) {
      return;
      this.setState({ value: true });
    }
    if (this.state.value) {
      return this.setState({ value: false });
    }
  }

  render() {
    return (
      <div className="main">
        <SearchBar onClick={this.handleClick.bind(this)} />
        <ProductTable isStocked={this.state.value} />
      </div>
    );
  }
}
