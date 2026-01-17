import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="container header-content">
        
        {/* Logo / Brand */}
        <Link to="/" className="logo">
          Soft<span>Desk</span>
        </Link>

        {/* Navigation */}
        <nav>
          <Link to="/login" className="login-btn">
            Log In
          </Link>
        </nav>

      </div>
    </header>
  );
}

export default Header;
