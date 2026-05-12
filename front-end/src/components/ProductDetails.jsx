
const ProductDetails = () => {
  return (
    <section className="product-page">
      <img/>
      <div className="product-details">
        <h1>name</h1>
        <div className="price-row">
          <strong>$price</strong>
        </div>
        <p className="product-description">description</p>
        <ul
          style={{
            margin: "1rem 0",
            paddingLeft: "1.5rem",
            color: "var(--muted)",
          }}
        ></ul>
        <button type="button">Add to cart</button>
      </div>
    </section>
  );
};

export default ProductDetails;
