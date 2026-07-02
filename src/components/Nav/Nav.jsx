import { useCart } from "../../context/CartContext";
import "./Nav.css";
import { Link, useNavigate } from "react-router-dom";
// import styles from "./Nav.module.css";

export const Nav = () => {
  const {getTotalItems} = useCart();
  const navigate= useNavigate()

  const scrollToProducts = () => {
    if (window.location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        document.getElementById("products")?.scrollIntoView({
          behavior: "smooth",
        });
      }, 200);
    } else {
      document.getElementById("products")?.scrollIntoView({
        behavior: "smooth",
      });
    }
};

  const totalItems = getTotalItems();
  return (
    <nav>
      <ul className="nav-list">
        <li>
          <Link to={"/"}><i className="fa-regular fa-star"></i>Home</Link>
        </li>
        <li>
          <Link to="/" onClick={(e) => {
            e.preventDefault();
            scrollToProducts()
          }}>Productos</Link>
        </li>
        <li>
          <Link to={"/carrito"}>Carrito{totalItems > 0 && <span className="incart">{totalItems}</span>}</Link>
        </li>
      </ul>
    </nav>  
  );
};
