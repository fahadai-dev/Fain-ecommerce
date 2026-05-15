import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer style={{ fontFamily: "'Outfit', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');
 
        .footer-main {
          background: linear-gradient(135deg, #0f0c29, #1e1b4b, #24243e);
          color: white;
          padding: 70px 5% 40px;
        }
 
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 40px;
          margin-bottom: 50px;
        }
 
        .footer-logo {
          font-size: 1.8rem;
          font-weight: 800;
          color: white;
          text-decoration: none;
          display: inline-block;
          margin-bottom: 16px;
        }
 
        .footer-logo span {
          color: #3b82f6;
        }
 
        .footer-desc {
          color: #9ca3af;
          line-height: 1.8;
          font-size: 0.95rem;
          margin-bottom: 24px;
        }
 
        .social-links {
          display: flex;
          gap: 12px;
        }
 
        .social-btn {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: transform 0.3s, opacity 0.3s;
          cursor: pointer;
          border: none;
        }
        .social-btn:hover {
          transform: translateY(-4px);
          opacity: 0.9;
        }
 
        .fb-btn { background: linear-gradient(135deg, #1877f2, #0a5dc2); }
        .ig-btn { background: linear-gradient(135deg, #f58529, #dd2a7b, #8134af, #515bd4); }
        .yt-btn { background: linear-gradient(135deg, #ff0000, #cc0000); }
 
        .footer-heading {
          font-size: 1rem;
          font-weight: 700;
          color: white;
          margin-bottom: 20px;
          position: relative;
          padding-bottom: 10px;
        }
        .footer-heading::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 30px;
          height: 2px;
          background: #3b82f6;
          border-radius: 2px;
        }
 
        .footer-link {
          display: block;
          color: #9ca3af;
          text-decoration: none;
          margin-bottom: 10px;
          font-size: 0.9rem;
          transition: color 0.2s, padding-left 0.2s;
        }
        .footer-link:hover {
          color: #3b82f6;
          padding-left: 6px;
        }
 
        .footer-contact-item {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
          color: #9ca3af;
          font-size: 0.9rem;
        }
 
        .footer-contact-icon {
          width: 34px;
          height: 34px;
          background: rgba(59, 130, 246, 0.15);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          flex-shrink: 0;
        }
 
        .footer-divider {
          border: none;
          border-top: 1px solid rgba(255,255,255,0.08);
          margin: 0 0 30px 0;
        }
 
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
        }
 
        .footer-bottom-links {
          display: flex;
          gap: 20px;
        }
 
        .footer-bottom-link {
          color: #6b7280;
          text-decoration: none;
          font-size: 0.85rem;
          transition: color 0.2s;
        }
        .footer-bottom-link:hover { color: #3b82f6; }
 
        .badge-strip {
          background: rgba(59,130,246,0.1);
          border: 1px solid rgba(59,130,246,0.2);
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 0.8rem;
          color: #93c5fd;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
 
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
          .footer-bottom {
            justify-content: center;
            text-align: center;
          }
          .footer-bottom-links {
            justify-content: center;
          }
        }
 
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="footer-main">
        <div className="footer-grid">
          {/* Brand Column */}
          <div>
            <Link to="/" className="footer-logo">
              FAIN<span>-SHOP</span>
            </Link>
            <p className="footer-desc">
              আমরা বিশ্বাস করি প্রতিটি মানুষ সেরা মানের পণ্য পাওয়ার যোগ্য।
              Fain-Shop-এ পাবেন সেরা Electronics, Fashion ও Accessories।
            </p>

            {/* Social Icons */}
            <div className="social-links">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="social-btn fb-btn"
                title="Facebook"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="social-btn ig-btn"
                title="Instagram"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1.5"
                    fill="white"
                    stroke="none"
                  />
                </svg>
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="social-btn yt-btn"
                title="YouTube"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                  <polygon
                    points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"
                    fill="#cc0000"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-heading">Quick Links</h4>
            <Link to="/" className="footer-link">
              🏠 Home
            </Link>
            <Link to="/products" className="footer-link">
              🛍️ Products
            </Link>
            <Link to="/about" className="footer-link">
              ℹ️ About Us
            </Link>
            <Link to="/contact" className="footer-link">
              📬 Contact
            </Link>
            <Link to="/cart" className="footer-link">
              🛒 Cart
            </Link>
          </div>

          {/* Categories */}
          <div>
            <h4 className="footer-heading">Categories</h4>
            <Link to="/products" className="footer-link">
              📱 Electronics
            </Link>
            <Link to="/products" className="footer-link">
              👗 Fashion
            </Link>
            <Link to="/products" className="footer-link">
              👜 Accessories
            </Link>
            <Link to="/products" className="footer-link">
              👟 Footwear
            </Link>
            <Link to="/products" className="footer-link">
              🏠 Home & Living
            </Link>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="footer-heading">Contact Us</h4>
            <div className="footer-contact-item">
              <div className="footer-contact-icon">📍</div>
              <span>Dhaka, Bangladesh</span>
            </div>
            <div className="footer-contact-item">
              <div className="footer-contact-icon">📞</div>
              <span>+880 1927-907376</span>
            </div>
            <div className="footer-contact-item">
              <div className="footer-contact-icon">✉️</div>
              <span>info@fain-shop.com</span>
            </div>
            <div className="footer-contact-item">
              <div className="footer-contact-icon">⏰</div>
              <span>Sat–Thu: 9AM – 9PM</span>
            </div>
          </div>
        </div>

        {/* Payment Badges */}
        <div
          style={{
            display: "flex",
            gap: 10,
            flexWrap: "wrap",
            marginBottom: 30,
          }}
        >
          {[
            "💳 Visa",
            "💳 Mastercard",
            "📱 bKash",
            "📱 Nagad",
            "💰 Cash on Delivery",
          ].map((item) => (
            <span key={item} className="badge-strip">
              {item}
            </span>
          ))}
        </div>

        <hr className="footer-divider" />

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p style={{ color: "#6b7280", fontSize: "0.85rem", margin: 0 }}>
            © 2026{" "}
            <span style={{ color: "#3b82f6", fontWeight: 600 }}>Fain-Shop</span>
            . All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="#" className="footer-bottom-link">
              Privacy Policy
            </a>
            <a href="#" className="footer-bottom-link">
              Terms of Service
            </a>
            <a href="#" className="footer-bottom-link">
              Refund Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
