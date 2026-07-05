import "./Footer.css";
import { Link, useNavigate } from 'react-router-dom'

export const Footer = () => {
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

  return (
    <footer>
      <div className="footer-links">
        <Link to={"/"}>Home</Link>
        <Link to="/" onClick={(e) => {
            e.preventDefault();
            scrollToProducts()
          }}>Productos</Link>
        <Link to={"/carrito"}>Carrito</Link>
      </div>
      {/* <div className="footer-title-container">
        <h2 className="footer-title">Supernatural.fm</h2>
      </div> */}
      <nav>
        <ul className="footer-nav-list">
          <li> <a href="#"><i class="fa-brands fa-instagram"></i></a></li>
          <li><a href="#"><i class="fa-brands fa-whatsapp"></i></a></li>
        </ul>
        
      </nav>
        <h6>2026 - © todos los derechos reservados</h6>
        <h6 className="autor">Rocio Balent</h6>
    </footer>
  );
};
