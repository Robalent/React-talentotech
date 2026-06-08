import "./Footer.css";
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer>
      <div className="footer-links">
        <Link to={"/"}>Home</Link>
        <Link to={"/productos"}>Productos</Link>
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
        <h6>2025 - © todos los derechos reservados</h6>
    </footer>
  );
};
