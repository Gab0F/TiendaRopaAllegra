import React from "react";
import "../styles/stylesProductos.css";


function ProductCard({ id, title, price, image, image2, image3, category, link }) {
  return (
    <div
      className="swiper-slide product-card"
      data-id={id}
      data-category={category}
      data-image1={image}
      data-image2={image2}
    >
      <div className="product-card__image">
        <a href={`${link}?id=${id}`}>
          <img src={image} alt={title} />
        </a>
      </div>
      <div className="product-card__description">
        <div className="row">
          <div className="product-card__title">{title}</div>
          <button className="product-card__btn btn">
            <span className="material-symbols-rounded">favorite</span>
          </button>
        </div>
        <div className="row">
          <div className="product-card__price">${price}</div>
          <button className="explore-more btn">
            Explore more <span className="material-symbols-rounded">trending_flat</span>
          </button>
        </div>
        <span className="border-animation"></span>
        <span className="border-animation"></span>
        <span className="border-animation"></span>
      </div>
    </div>
  );
}

export default ProductCard;