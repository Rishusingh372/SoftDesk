import React from 'react'
import "../../assets/css/Footer.css"
import { Link } from 'react-router-dom'
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">

        {/* Brand + Text */}
        <div className="footer-brand">
          <h3>Soft<span>Desk</span></h3>
          <p>
            Smart task management platform to help teams plan better,
            collaborate faster, and deliver on time.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/">Privacy Policy</Link>
          <Link to="/">Terms</Link>
        </div>

        {/* Social Media */}
        <div className="footer-social">
          <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
          <a href="#" aria-label="Twitter"><Twitter size={18} /></a>
          <a href="#" aria-label="LinkedIn"><Linkedin size={18} /></a>
          <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} SoftDesk. Built for productive teams.
      </div>
    </footer>
  )
}

export default Footer
