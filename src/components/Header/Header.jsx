import logo from "../../assets/logo-sn.png";
import { Nav } from "../Nav/Nav";
import { Link } from "react-router-dom";

import "./Header.css";

export const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <Link to="/">
        <img className="logo" src={logo} />
        </Link>
        
      </div>
      <Nav />
    </header>
  );
};
