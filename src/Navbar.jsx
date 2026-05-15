import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ cart = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/products", label: "Products" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
    { to: "/login", label: "Login" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Outfit:wght@300;400;500;600;700&display=swap');
 
        .navbar {
          position: sticky;
          top: 0;
          z-index: 1000;
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 6%;
          font-family: 'Outfit', sans-serif;
          background: ${
            scrolled ? "rgba(5, 5, 10, 0.97)" : "rgba(8, 8, 16, 0.92)"
          };
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border-bottom: 1px solid rgba(212, 175, 55, 0.15);
          box-shadow: ${
            scrolled
              ? "0 8px 40px rgba(0,0,0,0.6)"
              : "0 2px 20px rgba(0,0,0,0.3)"
          };
          transition: all 0.4s ease;
        }
 
        .navbar::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg,
            transparent 0%,
            #b8860b 20%,
            #d4af37 50%,
            #b8860b 80%,
            transparent 100%
          );
        }
 
        .nav-logo {
          text-decoration: none;
          display: flex;
          flex-direction: column;
          line-height: 1;
          gap: 2px;
        }
 
        .nav-logo-top {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.55rem;
          font-weight: 700;
          color: #f5f0e8;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }
 
        .nav-logo-top span {
          color: #d4af37;
        }
 
        .nav-logo-tagline {
          font-size: 0.58rem;
          font-weight: 400;
          color: #d4af37;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          opacity: 0.85;
        }
 
        .nav-links {
          display: flex;
          list-style: none;
          gap: 2px;
          margin: 0;
          padding: 0;
          align-items: center;
        }
 
        .nav-link {
          text-decoration: none;
          color: #9e9890;
          font-size: 0.82rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 8px 15px;
          border-radius: 4px;
          transition: all 0.25s ease;
          position: relative;
        }
 
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 3px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 1px;
          background: #d4af37;
          transition: width 0.3s ease;
        }
 
        .nav-link:hover { color: #f5f0e8; }
        .nav-link:hover::after { width: 55%; }
 
        .nav-link.active { color: #d4af37; }
        .nav-link.active::after { width: 55%; }
 
        .nav-divider {
          width: 1px;
          height: 26px;
          background: rgba(212,175,55,0.2);
          margin: 0 8px;
        }
 
        .cart-link {
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 9px 20px;
          background: transparent;
          border: 1px solid rgba(212,175,55,0.45);
          border-radius: 3px;
          color: #d4af37;
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
 
        .cart-link::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(212,175,55,0.08);
          opacity: 0;
          transition: opacity 0.3s;
        }
 
        .cart-link:hover {
          border-color: #d4af37;
          color: #f5f0e8;
          box-shadow: 0 0 24px rgba(212,175,55,0.18);
        }
 
        .cart-link:hover::before { opacity: 1; }
 
        .cart-count {
          background: #d4af37;
          color: #0a0a0f;
          font-size: 0.65rem;
          font-weight: 800;
          min-width: 18px;
          height: 18px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 4px;
        }
 
        .menu-btn {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: 1px solid rgba(212,175,55,0.3);
          padding: 9px 11px;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.3s;
        }
 
        .menu-btn:hover {
          border-color: #d4af37;
          background: rgba(212,175,55,0.06);
        }
 
        .menu-bar {
          width: 20px;
          height: 1.5px;
          background: #d4af37;
          border-radius: 2px;
          transition: all 0.3s;
          display: block;
        }
 
        @media (max-width: 900px) {
          .menu-btn { display: flex; }
 
          .nav-links {
            display: ${isOpen ? "flex" : "none"};
            flex-direction: column;
            position: absolute;
            top: 72px;
            left: 0; right: 0;
            background: rgba(5, 5, 10, 0.98);
            backdrop-filter: blur(30px);
            border-top: 1px solid rgba(212,175,55,0.12);
            border-bottom: 1px solid rgba(212,175,55,0.12);
            padding: 16px 6% 24px;
            gap: 0;
          }
 
          .nav-links li { width: 100%; }
 
          .nav-link {
            display: block;
            padding: 14px 0;
            border-bottom: 1px solid rgba(255,255,255,0.05);
            border-radius: 0;
            font-size: 0.85rem;
          }
 
          .nav-link::after { display: none; }
 
          .cart-link {
            justify-content: center;
            margin-top: 14px;
          }
 
          .nav-divider { display: none; }
        }
      `}</style>

      <nav className="navbar">
        <Link to="/" className="nav-logo">
          <span className="nav-logo-top">
            FAIN<span>-SHOP</span>
          </span>
          <span className="nav-logo-tagline">Premium Collection</span>
        </Link>

        <button
          className="menu-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span
            className="menu-bar"
            style={{
              transform: isOpen
                ? "rotate(45deg) translate(4px, 4.5px)"
                : "none",
            }}
          />
          <span
            className="menu-bar"
            style={{
              opacity: isOpen ? 0 : 1,
              transform: isOpen ? "scaleX(0)" : "none",
            }}
          />
          <span
            className="menu-bar"
            style={{
              transform: isOpen
                ? "rotate(-45deg) translate(4px, -4.5px)"
                : "none",
            }}
          />
        </button>

        <ul className="nav-links">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={`nav-link${location.pathname === to ? " active" : ""}`}
              >
                {label}
              </Link>
            </li>
          ))}

          <li>
            <div className="nav-divider" />
          </li>

          <li>
            <Link to="/cart" className="cart-link">
              🛒 Cart
              <span className="cart-count">{cartCount}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
