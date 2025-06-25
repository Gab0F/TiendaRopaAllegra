import React, { useEffect, useState } from "react";
import "../styles/stylesProductos.css";

const API_URL = "/src/apis/products.json";

export default function ProductDress() {
  const [product, setProduct] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id"));
    fetch(API_URL)
      .then((res) => res.json())
      .then((products) => {
        const found = products.find((p) => p.id === id);
        if (found) setProduct(found);
        else setNotFound(true);
      });
  }, []);

  const images = product
    ? [product.image, product.image2, product.image3].filter(Boolean)
    : [];

  const handleImgChange = (idx) => {
    setImgIndex(idx);
  };

  const handleQuantityChange = (e) => {
    let val = parseInt(e.target.value);
    if (val < 1 || isNaN(val)) val = 1;
    setQuantity(val);
  };

  if (notFound)
    return (
      <div className="details-products notfound-bg">
        <p>Producto no encontrado</p>
        <form>
          <div className="size-select">
            <p>Size</p>
            {["XS", "S", "M", "L", "XL"].map((size, idx) => (
              <label key={size} htmlFor={size.toLowerCase()}>
                <input type="radio" name="size" id={size.toLowerCase()} />
                <span>{size}</span>
              </label>
            ))}
          </div>
          <div className="color-select">
            <p>Color</p>
            <label htmlFor="black">
              <input type="radio" name="color" id="black" />
              <span className="color-1"></span>
            </label>
            <label htmlFor="olive">
              <input type="radio" name="color" id="olive" />
              <span className="color-2"></span>
            </label>
            <label htmlFor="purple">
              <input type="radio" name="color" id="purple" />
              <span className="color-3"></span>
            </label>
            <label htmlFor="pink">
              <input type="radio" name="color" id="pink" />
              <span className="color-4"></span>
            </label>
          </div>
          <div className="quantity-select">
            <p>Quantity</p>
            <input
              type="number"
              value={quantity}
              min={1}
              id="combobox"
              onChange={handleQuantityChange}
              style={{ width: "50px", textAlign: "center" }}
            />
          </div>
          <button type="button">Buy Now</button>
        </form>
      </div>
    );

  return (
    <div>
      {/* Header */}
      <header className="header">
        <nav className="header__container container">
          <div className="header__logo">
            <h1>
              <a href="./">Allegra</a>
            </h1>
          </div>
          <ul className="header__links">
            <li className="header__link">
              <a href="index.html">home</a>
            </li>
            <li className="header__link">
              <a href="#index.html">new</a>
            </li>
            <li className="header__link">
              <a href="index.html">shop</a>
            </li>
            <li className="header__link">
              <a href="index.html">trending</a>
            </li>
          </ul>
          <div className="container-icon">
            <a href="cart.html">
              {/* SVG del carrito */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="icon-cart"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
            </a>
            <a href="login.html">
              {/* SVG del usuario */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="icon-user"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </a>
          </div>
          <div className="header__btn">
            <span style={{ "--i": 0 }}></span>
            <span style={{ "--i": 10 }}></span>
            <span style={{ "--i": 20 }}></span>
          </div>
        </nav>
      </header>

      {/* Contenido principal */}
      <div className="main-content">
        {/* Product details */}
        <section id="container-product">
          <div className="product-details">
            <div className="gallery">
              {images.length > 0 && (
                <>
                  <img
                    src={images[imgIndex]}
                    alt={product?.title}
                    id="productImg"
                  />
                  <div className="controls">
                    {images.map((img, idx) => (
                      <span
                        key={idx}
                        className={`btn${
                          imgIndex === idx ? " active" : ""
                        }`}
                        onClick={() => handleImgChange(idx)}
                      ></span>
                    ))}
                  </div>
                </>
              )}
            </div>
            <div className="details-p notfound-bg">
              <div className="details-products">
                {product && (
                  <>
                    <h1>{product.title}</h1>
                    <h2>$ {product.price}</h2>
                    <h3>20% OFF</h3>
                    <p>{product.description}</p>
                  </>
                )}
              </div>
              <form>
                <div className="size-select">
                  <p>Size</p>
                  {["XS", "S", "M", "L", "XL"].map((size, idx) => (
                    <label key={size} htmlFor={size.toLowerCase()}>
                      <input type="radio" name="size" id={size.toLowerCase()} />
                      <span>{size}</span>
                    </label>
                  ))}
                </div>
                <div className="color-select">
                  <p>Color</p>
                  <label htmlFor="black">
                    <input type="radio" name="color" id="black" />
                    <span className="color-1"></span>
                  </label>
                  <label htmlFor="olive">
                    <input type="radio" name="color" id="olive" />
                    <span className="color-2"></span>
                  </label>
                  <label htmlFor="purple">
                    <input type="radio" name="color" id="purple" />
                    <span className="color-3"></span>
                  </label>
                  <label htmlFor="pink">
                    <input type="radio" name="color" id="pink" />
                    <span className="color-4"></span>
                  </label>
                </div>
                <div className="quantity-select">
                  <p>Quantity</p>
                  <input
                    type="number"
                    value={quantity}
                    min={1}
                    id="combobox"
                    onChange={handleQuantityChange}
                    style={{ width: "50px", textAlign: "center" }}
                  />
                </div>
                <button type="button">Buy Now</button>
              </form>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer__container container">
          <div className="footer__col">
            <div className="footer__logo">
              <h1>
                <a href="./">Allegra</a>
              </h1>
            </div>
            <div className="footer__description">
              <p>The very best of the best</p>
            </div>
          </div>
          <div className="footer__col">
            <div className="footer__title">
              <h3>company</h3>
              <ul className="footer__links">
                <li className="footer__link">
                  <a href="#home">Home</a>
                </li>
                <li className="footer__link">
                  <a href="#new">New</a>
                </li>
                <li className="footer__link">
                  <a href="#shop">Shop</a>
                </li>
                <li className="footer__link">
                  <a href="#trending">Trending</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__col">
            <div className="footer__title">
              <h3>information</h3>
              <ul className="footer__links">
                <li className="footer__link">
                  <a href="#">
                    <span className="material-symbols-rounded"> location_on </span>
                    <p>Estelí, Nicaragua.</p>
                  </a>
                </li>
                <li className="footer__link">
                  <a href="#">
                    <span className="material-symbols-rounded"> schedule </span>
                    <p>
                      Saturday - Thursday <br />
                      9AM - 12PM
                    </p>
                  </a>
                </li>
                <li className="footer__link">
                  <a href="tel:+12334567775">
                    <span className="material-symbols-rounded"> call </span>
                    <p>+505 7650-1289</p>
                  </a>
                </li>
                <li className="footer__link">
                  <a href="allegra@gmail.com">
                    <span className="material-symbols-rounded"> mail </span>
                    <p>allegra@gmail.com</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__col">
            <div className="footer__title">
              <h3>social media</h3>
            </div>
            <ul className="footer__links">
              <li className="footer__link">
                <a href="">Instagram</a>
              </li>
              <li className="footer__link">
                <a href="">Facebook</a>
              </li>
              <li className="footer__link">
                <a href="">Whatsapp</a>
              </li>
              <li className="footer__link">
                <a href="">X</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__copyRight">
          <p>
            &copy; 2025 <span>Allegra</span> All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}
