import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPlants } from "../redux/plantSlice";

import { add, getCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";
const ProductsList = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();

  useEffect(() => {
    dispatch(getCart());

    dispatch(getPlants());
  }, []);
  const searchvalue = useSelector((state) => state.plants.searchvalue);

  const data = useSelector((state) => state.plants.data);
  const dataFiltered = data.filter((plant) =>
    plant.name?.toLowerCase().includes(searchvalue.toLowerCase()),
  );

  return (
    <section className="products-grid">
      {dataFiltered.map((el) => {
        return (
          <article className="product-card" key={el.id}>
            <img
              src={el.image}
              onClick={() => {
                nav(`/product/${el.id}`);
              }}
            />
            <div className="product-card-body">
              <h3 className="product-title"> {el.name} </h3>
              <div className="product-meta"> </div>
              <div className="price-row">
                <strong>${el.price} </strong>
              </div>
              <div style={{ display: "grid", gap: "0.75rem" }}>
                <button
                  type="button"
                  onClick={() => {
                    dispatch(add({ plantId: el.id }));
                  }}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default ProductsList;
