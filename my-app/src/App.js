import './App.css';

import React, { useState } from 'react';

function App() {

  let Categories = new Array();

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

  let productsCounter = 0;
  class Product {
    id;
    name; // название продукта
    price; // цена
    off; // скидка, в процентах наверное?
    catID; // id категории, не знаю зачем, но пусть будет

    
    constructor(name, price, off, catrgoryId) {
      this.id = productsCounter++;
      this.name = name;
      this.price = price;
      this.off = off;
      this.catID = catrgoryId;
    }
  }

  // Тут короче будем вписывать продукты
  Categories[0].products = new Array(
    new Product("test1", 100, 10, 0),
    new Product("test2", 100, 10, 0),
    new Product("test3", 100, 10, 0),
    new Product("test4", 100, 10, 0),
    new Product("test5", 100, 10, 0),
  );

  Categories[1].products = new Array(
    new Product("test1", 100, 10, 0),
  );

  Categories[2].products = new Array(
    new Product("test1", 100, 10, 0),
  );

  Categories[3].products = new Array(
    new Product("test1", 100, 10, 0),
  );

  Categories[4].products = new Array(
    new Product("test1", 100, 10, 0),
  );

  

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
        setContent(
          <div>
          <button onClick={() => setContent(ResolveCategory(Categories[0]))}>{Categories[0].name}</button>
          <button onClick={() => setContent(ResolveCategory(Categories[1]))}>{Categories[1].name}</button>
          <button onClick={() => setContent(ResolveCategory(Categories[2]))}>{Categories[2].name}</button>
          <button onClick={() => setContent(ResolveCategory(Categories[3]))}>{Categories[3].name}</button>
          <button onClick={() => setContent(ResolveCategory(Categories[4]))}>{Categories[4].name}</button>
          </div>
        );
      }
    if (variable[0] === 'cart')
      {
        setContent(Cart());
      }
    
  };

  function ResolveCategory(param)
  {
    let outputstr = "";
    param.products.forEach(function(product, index) {
      outputstr = outputstr + product.name  + " ; " + product.price + " | ";
    })
    return (<div>
    {
      outputstr
    }
    </div>);
  }

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
