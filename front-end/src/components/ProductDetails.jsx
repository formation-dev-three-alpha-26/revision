import { useDispatch, useSelector } from "react-redux";
import { getonePlant } from "../redux/plantSlice";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
const ProductDetails = () => {
  const { productId } = useParams();
const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getonePlant(productId))
  }, []);
const plant = useSelector((state) => state.plants.onePlant)
console.log(plant);


  return (
    <section className="product-page">
      <img src={plant.image}/>
      <div className="product-details">
        <h1>{plant.name}</h1>
        <div className="price-row">
          <strong>${plant.price}</strong>
        </div>
        <p className="product-description">{plant.description}</p>
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
