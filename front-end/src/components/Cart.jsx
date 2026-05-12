import { Trash } from "lucide-react";

const Cart = ({ open, onClose }) => {
  return (
    <div className={`cart-drawer ${open ? "open" : ""}`}>
      <div className="cart-overlay" onClick={onClose} />
      <div className="cart-panel">
        <h2>Shopping Cart</h2>
        <article className="cart-item">
          <img />

          <div className="cart-item-info">
            <h3>name</h3>

            <p style={{ color: "#6b7280" }}>$price</p>
            <div className="cart-item-controls">
              <button type="button">-</button>
              <span> quantity </span>
              <button type="button">+</button>
              <button>
                <Trash size={16} />
              </button>
            </div>
          </div>
        </article>
        <div className="cart-summary">
          <p>
            <span>Subtotal</span>
            <strong>$total</strong>
          </p>
          <p>Checkout</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
