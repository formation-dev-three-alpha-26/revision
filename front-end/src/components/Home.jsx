import Search from "./Search";
import ProductsList from "./ProductsList";

const Home = () => {
  return (
    <>
      <section className="hero-panel">
        <article className="hero-copy">
          <h1>Bring calm greenery into every room.</h1>
          <p>
            Discover lush indoor plants, easy-care succulents, and stylish pots
            curated for modern spaces. Elevate your home with living decor that
            feels fresh, vibrant, and effortless.
          </p>
          <div className="hero-actions">
            <a href="#products">Browse collection</a>
          </div>
          <div className="feature-cards">
            <div className="feature-card">
              <span>Fresh arrivals</span>
              <strong>New plants added weekly for every space.</strong>
            </div>
            <div className="feature-card">
              <span>Care made easy</span>
              <strong>
                Plant picks and tips for beginners and collectors.
              </strong>
            </div>
          </div>
        </article>
        <div className="hero-image">
          <img
            src="https://i.pinimg.com/736x/2d/b2/73/2db2739665e758988fe8b5c1cedd8c9b.jpg"
            alt="Plant hero"
          />
        </div>
      </section>

      <div className="section-header" id="products">
        <div>
          <h2>Shop lush plants, pots, and curated green gifts.</h2>
        </div>
      </div>
      <ProductsList />
    </>
  );
};

export default Home;
