const Subscribe = () => (
  <section className="section subscribe">
    <div className="section__title">
      <h1>newsletter</h1>
    </div>
    <div className="subscribe__container container">
      <div className="subscribe__text">
        <p>subscribe to our newsletter to get what's new in products</p>
      </div>
      <form className="form" autoComplete="off">
        <input type="text" className="form__input" name="email" id="email" placeholder="Subscribe" />
        <button type="submit" className="form__btn btn btn-border btn-border-white">subscribe</button>
      </form>
    </div>
  </section>
);

export default Subscribe;