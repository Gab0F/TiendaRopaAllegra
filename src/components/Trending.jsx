import React, { useEffect, useState } from "react";

const API_URL = "/src/apis/products.json";

function TrendingCard({ product }) {
  if (!product) return null;
  const { id, title, trendTitle, description, image, category } = product;
  const [main, ...rest] = trendTitle ? trendTitle.split(" ") : ["", ""];
  return (
    <div className="trending__product swiper-slide" data-id={id} data-category={category}>
      <div className="trending__product__image">
        <img src={image} alt={title} />
      </div>
      <div className="trending__product__description">
        <div className="trending__product__text">
          <h1 className="title">
            <span>{main}</span>
            <p>{rest.join(" ")}</p>
          </h1>
          <p className="category">{category} collection</p>
          <p className="desc">{description}</p>
        </div>
        <div className="btn explore-more">
          Explore more <span className="material-symbols-rounded"> trending_flat</span>
        </div>
      </div>
    </div>
  );
}

const Trending = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [activeTrending, setActiveTrending] = useState(0);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setTrendingProducts(data.filter(p => p.isTrending)));
  }, []);

  useEffect(() => {
    if (trendingProducts.length === 0) return;
    const interval = setInterval(() => {
      setActiveTrending(s => (s + 1) % trendingProducts.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [trendingProducts]);

  return (
    <section className="section trending" id="trending">
      <div className="section__title">
        <h1>what's trending</h1>
      </div>
      <div className="trending__container container">
        <div className="trending__content swiper">
          <div className="trending__products swiper-wrapper">
            {trendingProducts.length > 0 && (
              <TrendingCard product={trendingProducts[activeTrending]} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trending;