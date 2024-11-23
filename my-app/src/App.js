import './App.css';

import React, { useState } from 'react';
import { CloseIcon, CartIcon, ProfileIcon, ListIcon, SearchIcon, VersaceIcon, ZaraIcon, GucciIcon, PradaIcon, CelvinIcon } from './svgcontent';

function App() {

  let Categories = [];

  class Category {
    name;
    catrgoryId = null;
    products = [];
    constructor(name) {
      this.name = name;
      this.catrgoryId = Categories.length;
    }
  }

  Categories = [
    new Category("versace"),
    new Category("zara"),
    new Category("gucci"),
    new Category("prada"),
    new Category("Calvin Klein"),
  ];

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
  Categories[0].products = [
    new Product("test1", 100, 10, 0),
    new Product("test2", 100, 10, 0),
    new Product("test3", 100, 10, 0),
    new Product("test4", 100, 10, 0),
    new Product("test5", 100, 10, 0),
  ];

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

  const SignUpLine = () => {
    const [isVisible, setIsVisible] = useState(true);
  
    const handleClose = () => {
      setIsVisible(false); // Устанавливаем состояние в false для скрытия
    };
  
    if (!isVisible) return null; // Если не видно, ничего не рендерим
  
    return (
      <div className="signUpLine">
        <div className="startline">
          Sign up and get 20% off your first order. 
          <a href="https://example.com/signup" className="startline-url">Sign Up Now</a>
        </div>
        <div className="close-icon" onClick={handleClose}>
          <CloseIcon />
        </div>
      </div>
    );
  };

  const [content, setContent] = useState(Homepage());

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
        console.log(variable);
        switch (Categories[0])
        {
          case "versache":  setContent(ResolveCategory(Categories[0]));
          case "zara": setContent(ResolveCategory(Categories[1]));
          case "gucci":  setContent(ResolveCategory(Categories[2]));
          case "prada": setContent(ResolveCategory(Categories[3])); 
          case "calvinklein":  setContent(ResolveCategory(Categories[4]));
        }
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

  function Homepage() {
    return (
      <div>
      <div className="hero-content">
        <div className="hero-text">
              <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
              <p>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
              <button>Shop Now</button>
              <div className="stats">
                <div className="stat-item">
                  <h2>200+</h2>
                  <p>International Brands</p>
                </div>
                <div className="stat-item">
                  <h2>2,000+</h2>
                  <p>High-Quality Products</p>
                </div>
                <div className="stat-item">
                  <h2>30,000+</h2>
                  <p>Happy Customers</p>
                </div>
              </div>
            </div>
            <div className="hero-image">
              <img src="https://img.freepik.com/free-photo/trendy-fashionable-couple-posing_155003-3401.jpg?t=st=1729841561~exp=1729845161~hmac=4ea2d65b5ac80eae4d7c8a72c421173ebdb9858fd046a1b0d095e405e3e5217b&w=740" alt="Fashion Models" />
            </div>
            
        </div>
        <div className="brands">
          <a onClick={() => changeContent('category:versace')}> <VersaceIcon /> </a>
          <a onClick={() => changeContent('category:zara')}> <ZaraIcon /> </a>
          <a onClick={() => changeContent('category:gucci')}> <GucciIcon /> </a>
          <a onClick={() => changeContent('category:prada')}> <PradaIcon /> </a>
          <a onClick={() => changeContent('category:calvinklein')}> <CelvinIcon /> </a>
        </div>
        </div>
    );
}

  function Footer()
  {
    return(
      <div className="Footer">
        <div className="FooterContainer">
          <div className="logo"><a onClick={() => changeContent("homepage")}>SHOP.CO</a></div>
          <p>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
        </div>
        <div className="FooterContainer">
          <h2>COMPANY</h2>
          <a>About</a>
          <a>Features</a>
          <a>Works</a>
          <a>Career</a>
        </div>
        <div className="FooterContainer">
          <h2>HELP</h2>
          <a>Customer Support</a>
          <a>Delivery Details</a>
          <a>Terms & Conditions</a>
          <a>Privacy Policy</a>
        </div>
        <div className="FooterContainer">
          <h2>FAQ</h2>
          <a>Account</a>
          <a>Manage Deliveries</a>
          <a>Orders</a>
          <a>Payments</a>
        </div>
        <div className="FooterContainer">
          <h2>RESOURCES</h2>
          <a>Free eBooks</a>
          <a>Development Tutorial</a>
          <a>How to - Blog</a>
          <a>Youtube Playlist</a>
        </div>
      </div>
    );
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
      <div>
        <SignUpLine />

        <div className="nav-bar">
          <div className="logo"><a onClick={() => changeContent("homepage")}>SHOP.CO</a></div>
          <ul>
            <li>Shop<ListIcon /></li>
            <li><a href="https://example.com/">On Sale</a></li>
            <li><a href="https://example.com/">New Arrivals</a></li>
            <li><a href="https://example.com/">Brands</a></li>
          </ul>
          <div className="search-bar">
            <SearchIcon />
            <input type="text" placeholder="Search for products..." />
          </div>
          <div className="icons"> 
            <CartIcon />
            <ProfileIcon />
          </div>
        </div>

        <section className="hero-section">
        {content}
        </section>

        <Footer />
      </div>
    </div>
  );
}

/*
<header className="App-header">
        <button onClick={() => changeContent('homepage')}>Homepage</button>
        <button onClick={() => changeContent('product:0')}>Product Detail</button>
        <button onClick={() => changeContent('category:null')}>Category</button>
        <button onClick={() => changeContent('cart')}>Cart</button>
      </header>
*/

export default App;
