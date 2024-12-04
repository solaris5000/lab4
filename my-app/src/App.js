import './App.css';

import React, { useState } from 'react';
import { useEffect } from 'react';
import { CloseIcon, CartIcon, ProfileIcon, ListIcon, SearchIcon, VersaceIcon, ZaraIcon, GucciIcon, PradaIcon, CelvinIcon } from './svgcontent';
import Cookies from 'js-cookie';

function App() {

  Cookies.set('cart', '', { expires: 1, path: '/' });

  function AddProductToCart(props)
  {
    console.log("added ", props);
    let currentCart = Cookies.get('cart');
    if (currentCart != '')
    {
      currentCart += ';'
    }
    currentCart += props;
    console.log(currentCart);
    Cookies.set('cart', currentCart, { expires: 1, path: '/' });
  }

  let Categories = [];
  let _Products = [];

  const VariantColours = [1,2,3,4,5,6,7,8,9];

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
    links;
    description;
    viableColors;

    state = {
      links: [],
    }

    
    constructor(name, price, off, catrgoryId, imglinks, description, viableColors) {
      this.id = productsCounter++;
      this.name = name;
      this.price = price;
      this.off = off;
      this.catID = catrgoryId;
      this.links = imglinks;
      this.description = description;
      this.viableColors = viableColors;
      _Products.push(this);
    }
  }

  // Тут короче будем вписывать продукты
  Categories[0].products = [
    new Product("Cat0_Test", 100, 10, 0, ["https://i.imgur.com/RgZEGin.png", "https://i.ytimg.com/vi/G4EcRPlaXoQ/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAZI3ssU9Kfe756bpZ2HpoMHuSAHw"], "deeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeescription for any purpose cause why not", [1,2,3]),
    new Product("test2", 100, 10, 0, "https://i.imgur.com/RgZEGin.png"),
    new Product("test3", 100, 10, 0, "https://i.imgur.com/RgZEGin.png"),
    new Product("test4", 100, 10, 0, "https://i.imgur.com/RgZEGin.png"),
    new Product("test5", 100, 10, 0, "https://i.imgur.com/RgZEGin.png"),
  ];

  Categories[1].products = new Array(
    new Product("Cat1_Test", 100, 10, 0),
  );

  Categories[2].products = new Array(
    new Product("Cat2_Test", 100, 10, 0),
  );

  Categories[3].products = new Array(
    new Product("Cat4_Test", 100, 10, 0),
  );

  Categories[4].products = new Array(
    new Product("Cat5_Test", 100, 10, 0),
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
    console.log("changeContent param: "+variable);
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
        switch (variable[1])
        {
          case "versace":  setContent(ResolveCategory(Categories[0])); break;
          case "zara": setContent(ResolveCategory(Categories[1])); break;
          case "gucci":  setContent(ResolveCategory(Categories[2])); break;
          case "prada": setContent(ResolveCategory(Categories[3])); break;
          case "calvinklein":  setContent(ResolveCategory(Categories[4])); break;
        }
      }
    if (variable[0] === 'cart')
      {
        setContent(Cart());
      }
    
  };

  function ResolveCategory(param) {
    return (
      <div>
        {param.products.map((product, index) => (
          <div className="productPreview" key={index}>
            <img
              src={product.links[0]}
              alt="Image unavailable"
              onClick={() => changeContent(`product:${product.id}`)}
            />
            <h2>{product.name}</h2>
            {product.off > 0 ? (
              <>
                <p>
                  <s>{product.price}</s>
                </p>
                <p className="offPrice">
                  {(product.price * ((100 - product.off) / 100)).toFixed(2)}
                </p>
              </>
            ) : (
              <p>{product.price}</p>
            )}
          </div>
        ))}
      </div>
    );
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
        <div className="recomendationsBlock">
          New Arrivals
        </div>
        <div className="recomendationsBlock">
          Top Selling
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
  
  const handleMouseEnter = (link) => {
    console.log(link);
    const bigImage = document.querySelector('.bigImageImage');
    if (bigImage) {
      bigImage.src = link; 
    }
  }

  function VeriGoodWritetReviueves()
  {
    return(
    <div>
      WOW REVIEWS!     
    </div>
    );
  }

  const handleMouseClickUsefullContent = (selector) => {
    console.log(selector);
    const contentishe = document.querySelector('.usefullContent');
    if (contentishe) {
      switch (selector){
        case "productDetails": contentishe.innerHTML = <div>detalies</div>;break;
        case "reviews": contentishe.innerHTML = VeriGoodWritetReviueves();break;
        case "faqs": contentishe.innerHTML = <div>faqui</div>;break;
      }
    }
  }


  const handleAddToCart = (props) => {
      AddProductToCart(props);
    };



  const [activeIndex, setActiveIndex] = useState(0); // Индекс активной кнопки

  const [itemsCount, setItemsCount] = useState(1); // Индекс активной кнопки

  const handleButtonIncrease = (index) => {
    let c = parseInt(index,10) + 1;
    if (c > 99)
    {
      c = 99;
    }
    console.log(c);
    setItemsCount(c);
  }

  const handleButtonDecrease = (index) => {
    let c = parseInt(index,10) - 1;
    if (c < 1)
    {
      c = 1;
    }
    console.log(c);
    setItemsCount(c);
  }
  
  const handleButtonClick = (index) => {
    setActiveIndex(parseInt(index,10));

    useEffect(() => {
      console.log('Updated activeIndex:', activeIndex); // Логируем значение после его обновления
    }, [activeIndex]);
    
    console.log('Active Index:', activeIndex);  // Проверка, меняется ли индекс

    for (let i = 0; i < buttons.length; i++) {
      const buttonElement = document.getElementById(`button-${i}`);
      if (buttonElement) {
        // Если индекс не совпадает с нажатым, ставим 'btn-default'
        if (i !== index) {
          buttonElement.classList.remove('btn-active');
          buttonElement.classList.add('btn-default');
        } else {
          // Если индекс совпадает с нажатым, ставим 'btn-active'
          buttonElement.classList.remove('btn-default');
          buttonElement.classList.add('btn-active');
        }
      }
    }
    
  };

  const buttons = ['S', 'M', 'L', 'XL'];

  function ProductDetail(props)
  {
    let product = _Products[props];
    console.log(product)
    return(
      <div className="productView">
        <div className="navbarCurrent">Home &gt; Shop &gt; Men &gt; <span className="Active">T-shirt</span></div>
          <div className="productInfo">
            <div className="imagesContainer">
              {product.links.map((link, index) => (
                <img
                  key={index}
                  className="miniImage"
                  src={link}
                  alt={`Image ${index + 1} unavailable`}
                  onMouseEnter={() => handleMouseEnter(link)}
                />
              ))}
            </div>
            <div className="bigImage">
              <img className="bigImageImage" src={product.links[0]}></img>
            </div>
            <div className="ProductInfoHolder">
            <div className="productWell">
            <h2>{product.name}</h2>
            <div className="stars"><img src="stars" alt="stars"></img><span>4.5</span>/5</div>
            {
              product.off > 0
              ? <>
                  <p><s>${product.price}</s></p>
                  <p className="offPrice">${(product.price * ((100 - product.off) / 100)).toFixed(2)}</p>
                </>
              : <p>${product.price}</p>
            }
            <p>
              product.price
            </p>
            </div>
            <hr></hr>
            <div className="productColors">
              
              Select Colors
              {product.viableColors.map((color, index) => (
                  <p>{color}</p>
                ))}
            </div>
            <hr></hr>
            <div className="productSizes">
              Chose productSizes
              <div className="button-group">
                {buttons.map((button, index) => (
                  <button
                    id={`button-${index}`}  // Уникальный ID для каждой кнопки
                    key={index}
                    onClick={() => handleButtonClick(index)}
                    className={activeIndex === index ? 'btn-active' : 'btn-default'}
                  >
                    {button}
                  </button>
                ))}
              </div>
            </div>
            <hr></hr>
            <div className="addToCart">
              <div className='btn-default counter'>
                <button className='counterButton' onClick={handleButtonIncrease}>+</button>
                {itemsCount}
                <button className='counterButton' onClick={handleButtonDecrease}>-</button>
              </div>
              <button className="btn-active" style={{ width: '72%', height: '52px' }} onClick={() => {
                AddProductToCart(`${product.id},${itemsCount},${buttons[activeIndex]}`)}
                }> ADD TO CART</button>
            </div>
            </div>
        </div>

        <div className="usefullButtons">
          <div className="productDetails" onClick={() => handleMouseClickUsefullContent("productDetails")} >Product details</div>
          <div className="reviews" onClick={() => handleMouseClickUsefullContent("reviews")}>Rating & reviews</div>
          <div className="faqs" onClick={() => handleMouseClickUsefullContent("faqs")}>FAQs</div>
          <div className="usefullContent"></div>
        </div>
          
      </div>
    );
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
