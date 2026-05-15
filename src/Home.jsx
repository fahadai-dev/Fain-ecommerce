import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { supabase } from "./supabaseClient";

const categories = [
  {
    id: "electronics",
    label: "Electronics",
    subtitle: "Latest Gadgets & Tech",
    icon: "📱",
    image:
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&auto=format&fit=crop&q=80",
    gradient:
      "linear-gradient(160deg, rgba(15,23,42,0.85) 0%, rgba(30,64,175,0.7) 100%)",
    accent: "#3b82f6",
    count: "500+ Items",
  },
  {
    id: "fashion",
    label: "Fashion",
    subtitle: "Trending Styles & Wear",
    icon: "👗",
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&auto=format&fit=crop&q=80",
    gradient:
      "linear-gradient(160deg, rgba(15,23,42,0.8) 0%, rgba(157,23,77,0.65) 100%)",
    accent: "#ec4899",
    count: "800+ Items",
  },
  {
    id: "accessories",
    label: "Accessories",
    subtitle: "Bags, Watches & More",
    icon: "👜",
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&auto=format&fit=crop&q=80",
    gradient:
      "linear-gradient(160deg, rgba(15,23,42,0.82) 0%, rgba(6,95,70,0.65) 100%)",
    accent: "#10b981",
    count: "300+ Items",
  },
];

const Home = ({ addToCart }) => {
  const [featured, setFeatured] = useState([]);
  const [added, setAdded] = useState({});

  useEffect(() => {
    const fetchFeatured = async () => {
      const { data } = await supabase
        .from("products")
        .select("*")
        .eq("is_featured", true)
        .limit(4);
      if (data) setFeatured(data);
    };
    fetchFeatured();
  }, []);

  const handleAdd = (e, product) => {
    e.preventDefault();
    addToCart(product);
    setAdded((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(
      () => setAdded((prev) => ({ ...prev, [product.id]: false })),
      1500,
    );
  };

  return (
    <div
      style={{
        fontFamily: "'Outfit', sans-serif",
        backgroundColor: "#f8fafc",
        minHeight: "100vh",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');
 
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
 
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
 
        .hero-content { animation: fadeUp 0.9s ease-out; }
 
        /* ---- CATEGORY CARDS ---- */
        .cat-section {
          padding: 90px 5%;
          background: linear-gradient(180deg, #f8fafc 0%, #eef2ff 100%);
        }
 
        .cat-section-header {
          text-align: center;
          margin-bottom: 50px;
        }
 
        .cat-section-tag {
          display: inline-block;
          background: rgba(59,130,246,0.1);
          color: #3b82f6;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 6px 16px;
          border-radius: 50px;
          margin-bottom: 14px;
          border: 1px solid rgba(59,130,246,0.2);
        }
 
        .cat-section-title {
          font-size: 2.6rem;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 10px;
          letter-spacing: -0.03em;
          line-height: 1.15;
        }
 
        .cat-section-sub {
          color: #64748b;
          font-size: 1rem;
          font-weight: 400;
          margin: 0;
        }
 
        .cat-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          max-width: 1200px;
          margin: 0 auto;
        }
 
        .cat-card {
          position: relative;
          height: 300px;
          border-radius: 20px;
          overflow: hidden;
          text-decoration: none;
          display: block;
          cursor: pointer;
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.4s ease;
          box-shadow: 0 8px 32px rgba(0,0,0,0.12);
        }
 
        .cat-card:hover {
          transform: translateY(-10px) scale(1.01);
          box-shadow: 0 24px 60px rgba(0,0,0,0.2);
        }
 
        .cat-card-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }
 
        .cat-card:hover .cat-card-img {
          transform: scale(1.08);
        }
 
        .cat-card-overlay {
          position: absolute;
          inset: 0;
          transition: opacity 0.3s ease;
        }
 
        .cat-card:hover .cat-card-overlay {
          opacity: 1.1;
        }
 
        .cat-card-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 28px 24px 24px;
          background: linear-gradient(0deg, rgba(0,0,0,0.75) 0%, transparent 100%);
        }
 
        .cat-card-icon {
          font-size: 2.2rem;
          display: block;
          margin-bottom: 8px;
          filter: drop-shadow(0 2px 8px rgba(0,0,0,0.3));
          animation: float 3s ease-in-out infinite;
        }
 
        .cat-card-label {
          font-size: 1.5rem;
          font-weight: 800;
          color: white;
          display: block;
          letter-spacing: -0.02em;
          line-height: 1.2;
          text-shadow: 0 2px 12px rgba(0,0,0,0.4);
        }
 
        .cat-card-subtitle {
          font-size: 0.82rem;
          color: rgba(255,255,255,0.75);
          display: block;
          margin-top: 3px;
          font-weight: 400;
        }
 
        .cat-card-badge {
          position: absolute;
          top: 18px;
          right: 18px;
          padding: 5px 12px;
          border-radius: 50px;
          font-size: 0.72rem;
          font-weight: 700;
          color: white;
          backdrop-filter: blur(10px);
          background: rgba(255,255,255,0.2);
          border: 1px solid rgba(255,255,255,0.3);
          letter-spacing: 0.03em;
        }
 
        .cat-card-arrow {
          position: absolute;
          bottom: 24px;
          right: 20px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255,255,255,0.18);
          border: 1.5px solid rgba(255,255,255,0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1rem;
          backdrop-filter: blur(8px);
          transition: all 0.3s ease;
          transform: translateX(0);
        }
 
        .cat-card:hover .cat-card-arrow {
          background: rgba(255,255,255,0.3);
          transform: translateX(4px);
        }
 
        /* ---- PRODUCT CARDS ---- */
        .product-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
          text-decoration: none;
          color: inherit;
          display: block;
        }
        .product-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.12);
        }
 
        .btn-primary {
          background: linear-gradient(135deg, #3b82f6, #6366f1);
          color: white;
          padding: 14px 36px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 700;
          font-size: 0.95rem;
          transition: all 0.3s;
          display: inline-block;
          box-shadow: 0 6px 20px rgba(59,130,246,0.35);
          letter-spacing: 0.02em;
        }
        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(59,130,246,0.45);
          background: linear-gradient(135deg, #2563eb, #4f46e5);
        }
 
        @media (max-width: 768px) {
          .cat-grid { grid-template-columns: 1fr; gap: 16px; }
          .cat-card { height: 240px; }
          .cat-section-title { font-size: 1.9rem; }
        }
 
        @media (max-width: 480px) {
          .cat-section { padding: 60px 4%; }
        }
      `}</style>

      {/* Hero */}
      <section
        style={{
          height: "600px",
          background:
            'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1664455340023-214c33a9d0bd?q=80&w=1032&auto=format&fit=crop")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        <div className="hero-content" style={{ padding: "0 20px" }}>
          <h1
            style={{
              fontSize: "3.5rem",
              marginBottom: "20px",
              fontWeight: "900",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            Elevate Your Style <br />
            With <span style={{ color: "#60a5fa" }}>Fain-Shop</span>
          </h1>
          <p
            style={{
              fontSize: "1.15rem",
              maxWidth: "600px",
              margin: "0 auto 35px",
              color: "rgba(255,255,255,0.85)",
              fontWeight: 400,
              lineHeight: 1.7,
            }}
          >
            Discover the latest trends with premium quality and unbeatable
            prices.
          </p>
          <Link to="/products" className="btn-primary">
            Shop Now →
          </Link>
        </div>
      </section>

      {/* Trending Categories */}
      <section className="cat-section">
        <div className="cat-section-header">
          <span className="cat-section-tag">✦ Explore</span>
          <h2 className="cat-section-title">Trending Categories</h2>
          <p className="cat-section-sub">
            Find exactly what you're looking for
          </p>
        </div>

        <div className="cat-grid">
          {categories.map((cat, i) => (
            <Link
              key={cat.id}
              to="/products"
              className="cat-card"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <img src={cat.image} alt={cat.label} className="cat-card-img" />
              <div
                className="cat-card-overlay"
                style={{ background: cat.gradient }}
              />

              <span className="cat-card-badge">{cat.count}</span>

              <div className="cat-card-content">
                <span className="cat-card-icon">{cat.icon}</span>
                <span className="cat-card-label">{cat.label}</span>
                <span className="cat-card-subtitle">{cat.subtitle}</span>
              </div>

              <div className="cat-card-arrow">→</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section style={{ padding: "0 5% 90px", backgroundColor: "#fff" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "2.4rem",
            fontWeight: 800,
            padding: "70px 0 45px",
            color: "#0f172a",
            letterSpacing: "-0.03em",
          }}
        >
          Featured Products
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "25px",
          }}
        >
          {featured.map((product) => (
            <Link
              key={product.id}
              to={`/singleProduct/${product.id}`}
              className="product-card"
              style={{
                background: "white",
                borderRadius: "16px",
                overflow: "hidden",
                border: "1px solid #f1f5f9",
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
              }}
            >
              {product.image_url ? (
                <img
                  src={product.image_url}
                  alt={product.name}
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
              ) : (
                <div
                  style={{
                    height: "200px",
                    background: "#f1f5f9",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "3rem",
                  }}
                >
                  🛍️
                </div>
              )}
              <div style={{ padding: "16px" }}>
                <h3
                  style={{
                    fontSize: "1.05rem",
                    marginBottom: "6px",
                    color: "#0f172a",
                    fontWeight: 600,
                  }}
                >
                  {product.name}
                </h3>
                <p
                  style={{
                    color: "#94a3b8",
                    fontSize: "0.83rem",
                    marginBottom: "14px",
                    lineHeight: 1.5,
                  }}
                >
                  {product.description?.slice(0, 60)}...
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: "800",
                      color: "#3b82f6",
                    }}
                  >
                    ${Number(product.price).toFixed(2)}
                  </span>
                  <button
                    onClick={(e) => handleAdd(e, product)}
                    style={{
                      padding: "8px 16px",
                      background: added[product.id]
                        ? "linear-gradient(135deg, #16a34a, #15803d)"
                        : "linear-gradient(135deg, #1e293b, #0f172a)",
                      color: "white",
                      border: "none",
                      borderRadius: "10px",
                      cursor: "pointer",
                      fontWeight: 600,
                      fontSize: "0.83rem",
                      transition: "all 0.2s",
                      fontFamily: "'Outfit', sans-serif",
                    }}
                  >
                    {added[product.id] ? "✓ Added!" : "Add to Cart 🛒"}
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <Link to="/products" className="btn-primary">
            View All Products →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
