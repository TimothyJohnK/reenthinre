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
  { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
];

class ProductCategoryRow extends Component {
  render() {
    const bold_flex = 'product_category';
    const SPORTINGGOODS = PRODUCTS.filter(
      item => item.category === 'Sporting Goods'
    );
    const ELECTRONICS = PRODUCTS.filter(
      item => item.category === 'Electronics'
    );
    const outOfStock = {
      color: 'red'
    };

    return (
      <div>
        <div className={bold_flex}>
          <span>Name</span>
          <span className="price_col">Price</span>
        </div>
        <div className="product_category">Sporting Goods</div>
        {SPORTINGGOODS.map((item, i) => (
          <li key={i}>
            <span
              style={item.stocked === false ? outOfStock : null}
              onClick={this.handleClick}
            >
              {item.name}
            </span>
            <span className="price_col">{item.price}</span>
          </li>
        ))}
        <div className="product_category">Electronics</div>
        {ELECTRONICS.map((item, i) => (
          <li key={i}>
            <span style={item.stocked === false ? outOfStock : null}>
              {item.name}
            </span>
            <span className="price_col">{item.price}</span>
          </li>
        ))}
      </div>
    );
  }
}

// class ProductRow extends Component {}

class ProductTable extends Component {
  render() {
    return (
      <div className="product_table">
        <ProductCategoryRow />
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
          <input type="checkbox" /> Only show products in stock
        </p>
      </form>
    );
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { stocked: false };
  }

  handleClick() {
    this.setState();
  }

  render() {
    return (
      <div className="main">
        <SearchBar />
        <ProductTable products={this.props.products} />
      </div>
    );
  }
}
