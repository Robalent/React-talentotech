import { useCart } from "../../context/CartContext";
import "./Nav.css";
import { Link } from "react-router-dom";
// import styles from "./Nav.module.css";

export const Nav = () => {
  const {getTotalItems} = useCart();

  const totalItems = getTotalItems();
  return (
    <nav>
      <ul className="nav-list">
        <li>
          <Link to={"/"}><i class="fa-regular fa-star"></i>Home</Link>
        </li>
        <li>
          <Link to={"/productos"}>Productos</Link>
        </li>
        <li>
          <Link to={"/carrito"}>Carrito{totalItems > 0 && <span className="incart">{totalItems}</span>}</Link>
        </li>
      </ul>
    </nav>  
  );
};
