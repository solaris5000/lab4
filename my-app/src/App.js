import './App.css';

import React, { useState } from 'react';

function App() {

  const Categories = []

  class Category {
    name;
    catrgoryId = null;
    products = new Array();
    constructor(name) {
      this.name = name;
      this.catrgoryId = Categories.length;
    }
  }

  Categories = new Array(
    new Category("versace"),
    new Category("zara"),
    new Category("gucci"),
    new Category("prada"),
    new Category("Calvin Klein"),
  );

  // class Product {
  //   id;
  //   name;
  //   image;
  //   off;
  //   catID;

  //   constructor(name, image, off, catrgoryId) {
  //     this.id = products.length();
  //     this.name = name;
  //     this.image = image;
  //     this.off = off;
  //     this.catID = catrgoryId;
  //   }
  // }

  

  const [content, setContent] = useState('Initial content');

  // Step 2: Create a function that updates the content
  const changeContent = (param) => {
    var variable = param.split(':');
    if (variable[0] === 'homepage')
      {
        setContent(Homepage());
      }
    if (variable[0] === 'product')
      {
        setContent(ProductDetail(variable[1]));
      }
    if (variable[0] === 'category')
      {
        setContent(Category(variable[1]));
      }
    if (variable[0] === 'cart')
      {
        setContent(Cart());
      }
    
  };

  function Homepage()
  {
    return(<div><h1>Homepage</h1></div>)
  }

  function ProductDetail(props)
  {
    return(<div><h1>ProductDetail</h1>:<h2>Props: {props}</h2></div>)
  }

  function CategoryPage(props)
  {
    return(<div><h1>Category</h1>: <h2>{props}</h2></div>)
  }

  function Cart()
  {
    return(<div><h1>Cart</h1></div>)
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => changeContent('homepage')}>Homepage</button>
        <button onClick={() => changeContent('product:0')}>Product Detail</button>
        <button onClick={() => changeContent('category:null')}>Category</button>
        <button onClick={() => changeContent('cart')}>Cart</button>
      </header>
      <div className="ConetContaiver">{content}</div>
    </div>
  );
}

export default App;
