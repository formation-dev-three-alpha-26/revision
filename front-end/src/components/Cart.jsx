import { Trash } from "lucide-react";
import { getCart, deletePlant, updatePlant } from "../redux/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
const Cart = ({ open, onClose }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCart());
  }, []);
  const cartdata = useSelector((state) => state.carts.data);
  console.log(cartdata);
  const total = () => {
    let result = 0;

    cartdata?.forEach((element) => {
      result += element.quantity * element.Plant.price;
    });
    return result;
  };
  const update = (id, quantity) => {
    if (quantity < 1) {
      return;
    }

    dispatch(updatePlant({ id, quantity }));
  };
  const deletPlant = (id) => {
    dispatch(deletePlant(id));
  };
  return (
    <div className={`cart-drawer ${open ? "open" : ""}`}>
      <div className="cart-overlay" onClick={onClose} />
      <div className="cart-panel">
        <h2>Shopping Cart</h2>
        {cartdata?.map((el) => {
          return (
            <article className="cart-item" key={el.Plant.id}>
              <img src={el.Plant.image} />

              <div className="cart-item-info">
                <h3>{el.Plant.name}</h3>

                <p style={{ color: "#6b7280" }}>$ {el.Plant.price}</p>
                <div className="cart-item-controls">
                  <button
                    type="button"
                    onClick={() => {
                      update(el.Plant.id, el.quantity - 1);
                    }}
                  >
                    -
                  </button>
                  <span> {el.quantity} </span>
                  <button
                    type="button"
                    onClick={() => {
                      update(el.Plant.id, el.quantity + 1);
                    }}
                  >
                    +
                  </button>
                  <button
                    onClick={() => {
                      dispatch(deletPlant(el.Plant.id));
                    }}
                  >
                    <Trash size={16} />
                  </button>
                </div>
              </div>
            </article>
          );
        })}
        <div className="cart-summary">
          <p>
            <span>Subtotal</span>
            <strong>${total()}</strong>
          </p>
          <p>Checkout</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
