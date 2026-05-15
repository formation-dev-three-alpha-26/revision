import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPlants } from "../redux/plantSlice";
import { useNavigate } from "react-router-dom";
const ProductsList = () => {
  const dispatch = useDispatch();
  const nav = useNavigate()
  useEffect(() => {
    dispatch(getPlants());
  }, []);

  const data = useSelector((state) => state.plants.data);
  console.log(data);

  return (
    <section className="products-grid">
      {data.map((el) => {
        return (
          <article className="product-card">
            <img src={el.image}  
             onClick={()=> { nav(`/product/${el.id}`) }}
            
            />
            <div className="product-card-body">
              <h3 className="product-title"> {el.name} </h3>
              <div className="product-meta"> </div>
              <div className="price-row">
                <strong>${el.price} </strong>
              </div>
              <div style={{ display: "grid", gap: "0.75rem" }}>
                <button type="button">Add to cart</button>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default ProductsList;
