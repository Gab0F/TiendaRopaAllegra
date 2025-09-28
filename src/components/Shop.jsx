import React, { useEffect, useState, useMemo } from 'react';

const API_URL = '/src/apis/products.json';

function ShopProductCard({ product }) {
  const { id, title, price, image, image2, category, link } = product;
  const [imgSrc, setImgSrc] = useState(image);
  return (
    <div
      className="product-card shop__product"
      data-id={id}
      data-category={category}
      data-image1={image}
      data-image2={image2}
      onMouseOver={() => image2 && setImgSrc(image2)}
      onMouseLeave={() => setImgSrc(image)}
      onClick={() => (window.location.href = link ? `${link}?id=${id}` : '#')}
    >
      <div className="product-card__image">
        <a href={link ? `${link}?id=${id}` : '#'}>
          <img src={imgSrc} alt={title} />
        </a>
      </div>
      <div className="product-card__description">
        <div className="row">
          <div className="product-card__title">{title}</div>
          <button
            className="product-card__btn btn"
            onClick={(e) => {
              e.stopPropagation();
              // placeholder: wishlist logic could go here
            }}
          >
            <span className="material-symbols-rounded">favorite</span>
          </button>
        </div>
        <div className="row">
          <div className="product-card__price">${price}</div>
          <button
            className="explore-more btn"
            onClick={(e) => {
              e.stopPropagation();
              window.location.href = link ? `${link}?id=${id}` : '#';
            }}
          >
            Explore more <span className="material-symbols-rounded"> trending_flat</span>
          </button>
        </div>
        <span className="border-animation"></span>
        <span className="border-animation"></span>
        <span className="border-animation"></span>
      </div>
    </div>
  );
}

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState('all');

  useEffect(() => {
    let active = true;
    setLoading(true);
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error('Error al cargar productos');
        return res.json();
      })
      .then((data) => {
        if (active) setProducts(data);
      })
      .catch((err) => active && setError(err.message))
      .finally(() => active && setLoading(false));
    return () => {
      active = false;
    };
  }, []);

  const filtered = useMemo(
    () =>
      products.filter(
        (p) => category === 'all' || p.category === category
      ),
    [products, category]
  );

  return (
    <section className="section shop" id="shop">
      <div className="section__title">
        <h1>shop</h1>
      </div>
      <div className="shop__container container">
        <div className="shop__content">
          <div className="shop__categories">
            {['all', 'men', 'women'].map((cat) => (
              <button
                key={cat}
                className={`shop__category btn btn-border btn-border-black ${
                  category === cat ? 'selected' : ''
                }`}
                data-category={cat}
                onClick={() => setCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="shop__products products">
            {loading && <p style={{ width: '100%', textAlign: 'center' }}>Cargando...</p>}
            {error && (
              <p style={{ color: 'red', width: '100%', textAlign: 'center' }}>
                {error}
              </p>
            )}
            {!loading && !error && filtered.length === 0 && (
              <p style={{ width: '100%', textAlign: 'center' }}>
                No hay productos en esta categoría
              </p>
            )}
            {!loading && !error && filtered.map((p) => (
              <ShopProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;