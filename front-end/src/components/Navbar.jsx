import { Link } from "react-router-dom";
import Search from "./Search";
import { ShoppingCart } from "lucide-react";

const Navbar = ({onCartClick }) => {
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
       <ShoppingCart size={20} onClick={onCartClick} />
    </header>
  );
};

export default Navbar;
