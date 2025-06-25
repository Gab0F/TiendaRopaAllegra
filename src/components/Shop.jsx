const Shop = () => (
  <section className="section shop" id="shop">
    <div className="section__title">
      <h1>shop</h1>
    </div>
    <div className="shop__container container">
      <div className="shop__content">
        <div className="shop__categories">
          <button className="shop__category btn btn-border btn-border-black selected" data-category="all">all</button>
          <button className="shop__category btn btn-border btn-border-black" data-category="men">men</button>
          <button className="shop__category btn btn-border btn-border-black" data-category="women">women</button>
        </div>
        <div className="shop__products products"></div>
      </div>
    </div>
  </section>
);

export default Shop;