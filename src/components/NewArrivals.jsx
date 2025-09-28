import React, { useEffect, useState } from "react";

const API_URL = "/src/apis/products.json";

function ProductCard({ product }) {
  const { id, title, price, image, image2, category, link } = product;
  const [imgSrc, setImgSrc] = useState(image);
  return (
    <div
      className="swiper-slide product-card"
      style={{ minWidth: 0, maxWidth: 320, flex: 1 }}
      data-id={id}
      data-category={category}
      data-image1={image}
      data-image2={image2}
      onMouseOver={() => image2 && setImgSrc(image2)}
      onMouseLeave={() => setImgSrc(image)}
      onClick={() => (window.location.href = link ? `${link}?id=${id}` : "#")}
    >
      <div className="product-card__image">
        <a href={`${link}?id=${id}`}>
          <img src={imgSrc} alt={title} />
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
          <button
            className="explore-more btn"
            onClick={(e) => {
              e.stopPropagation();
              (window.location.href = link ? `${link}?id=${id}` : "#");
            }}
          >
            Explore more{" "}
            <span className="material-symbols-rounded"> trending_flat</span>
          </button>
        </div>
        <span className="border-animation"></span>
        <span className="border-animation"></span>
        <span className="border-animation"></span>
      </div>
    </div>
  );
}

const NewArrivals = () => {
  const [newProducts, setNewProducts] = useState([]);
  const [newSlide, setNewSlide] = useState(0);
  const [perView, setPerView] = useState(1);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setNewProducts(data.filter((p) => p.isNew)));
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) setPerView(4);
      else if (window.innerWidth >= 992) setPerView(3);
      else if (window.innerWidth >= 768) setPerView(2);
      else setPerView(1);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNav = (dir) => {
    if (dir === "prev") setNewSlide((s) => Math.max(0, s - 1));
    else
      setNewSlide((s) =>
        Math.min(Math.ceil(newProducts.length / perView) - 1, s + 1)
      );
  };

  return (
    <section className="section new" id="new">
      <div className="section__title">
        <h1>new arrivals</h1>
      </div>
      <div className="new__container container">
        <div className="new__btns swiper-btns">
          <button
            className="swiper-btn swiper-button-prev btn btn-border btn-border-black"
            onClick={() => handleNav("prev")}
          >
            {" "}
            <span className="material-symbols-rounded">arrow_back_ios_new</span>{" "}
          </button>
          <button
            className="swiper-btn swiper-button-next btn btn-border btn-border-black"
            onClick={() => handleNav("next")}
          >
            {" "}
            <span className="material-symbols-rounded">arrow_forward_ios</span>{" "}
          </button>
        </div>
        <div className="new__content swiper">
          <div
            className="new__products products swiper-wrapper"
            style={{ display: "flex", gap: 20, overflow: "hidden", width: "100%" }}
          >
            {newProducts
              .slice(newSlide * perView, (newSlide + 1) * perView)
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;