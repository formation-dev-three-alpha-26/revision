import { Link } from "react-router-dom";
import Search from "./Search";
import { LogOut } from "lucide-react";
import { logout } from "../redux/userSlice";
import { ShoppingCart } from "lucide-react";
import { clearCart } from "../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
const Navbar = ({ onCartClick }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.user);
  const logoutuser = () => {
    dispatch(clearCart());
    dispatch(logout());
  };
  const cartN = useSelector((state) => {
    let n = 0;
    state.carts.data?.forEach((element) => {
      n += element.quantity;
    });

    return n;
  });

  return (
    <header className="navbar">
      <Link className="brand" to="/">
        PlantShop
      </Link>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/collections">Collections</Link>
      </nav>
      <Search />

      <div className="nav-actions">
        {user ? (
          <div className="nav-user">
            <span> {user.username} </span>
            <button
              type="button"
              className="logout-button"
              aria-label="Logout"
              onClick={() => logoutuser()}
            >
              <LogOut size={18} />
            </button>
          </div>
        ) : (
          <Link className="login-link" to="/login">
            Login
          </Link>
        )}

        <button
          type="button"
          className="cart-button"
          onClick={onCartClick}
          aria-label="Open cart"
        >
          <ShoppingCart size={20} />
          {cartN > 0 ? <span className="cart-count"> {cartN} </span> : null}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
