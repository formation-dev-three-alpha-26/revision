const ProductsList = () => {
  return (
    <section className="products-grid">
      <article className="product-card">
        <img  src="https://i.pinimg.com/736x/25/be/e9/25bee9d1c190adb5b9268740fa4eb83a.jpg"/>
        <div className="product-card-body">
          <h3 className="product-title"> name </h3>
          <div className="product-meta"> </div>
          <div className="price-row">
            <strong>$price</strong>
          </div>
          <div style={{ display: "grid", gap: "0.75rem" }}>
            <button type="button">Add to cart</button>
          </div>
        </div>
      </article>
           
 
    </section>
  );
};

export default ProductsList;
