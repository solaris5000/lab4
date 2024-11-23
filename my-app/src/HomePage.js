import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Homepage() {
    return (
      <div>
        <SignUpLine />

        <div className="nav-bar">
          <div className="logo">SHOP.CO</div>
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
        </section>

        <div className="brands">
          <VersaceIcon />
          <ZaraIcon />
          <GucciIcon />
          <PradaIcon />
          <CelvinIcon />
        </div>
      </div>
    );
}