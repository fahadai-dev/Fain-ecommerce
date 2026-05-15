import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { supabase } from "./supabaseClient";

const Products = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [added, setAdded] = useState({});

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    const { data, error } = await supabase.from("products").select("*");
    if (!error) setProducts(data || []);
    setLoading(false);
  };

  const categories = [
    "All",
    ...new Set(products.map((p) => p.category).filter(Boolean)),
  ];

  const filtered = products.filter((p) => {
    const matchSearch = p.name?.toLowerCase().includes(search.toLowerCase());
    const matchCat = category === "All" || p.category === category;
    return matchSearch && matchCat;
  });

  const handleAddToCart = (product) => {
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
        backgroundColor: "#f8f9ff",
        minHeight: "100vh",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');
 
        .products-hero {
          background: linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #1d4ed8 100%);
          padding: 60px 5%;
          text-align: center;
          color: white;
        }
 
        .filter-bar {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          padding: 30px 5%;
          background: white;
          box-shadow: 0 2px 20px rgba(0,0,0,0.06);
          align-items: center;
        }
 
        .search-input {
          flex: 1;
          min-width: 200px;
          padding: 12px 20px;
          border: 2px solid #e5e7eb;
          border-radius: 50px;
          font-size: 15px;
          font-family: 'Outfit', sans-serif;
          outline: none;
          transition: border-color 0.2s;
        }
        .search-input:focus { border-color: #3b82f6; }
 
        .cat-btn {
          padding: 10px 20px;
          border-radius: 50px;
          border: 2px solid #e5e7eb;
          background: white;
          cursor: pointer;
          font-family: 'Outfit', sans-serif;
          font-weight: 500;
          transition: all 0.2s;
        }
        .cat-btn.active {
          background: #1d4ed8;
          color: white;
          border-color: #1d4ed8;
        }
        .cat-btn:hover:not(.active) { border-color: #1d4ed8; color: #1d4ed8; }
 
        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
          gap: 25px;
          padding: 40px 5%;
        }
 
        .product-card {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0,0,0,0.06);
          transition: transform 0.3s, box-shadow 0.3s;
          cursor: pointer;
        }
        .product-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.12);
        }
 
        .product-img {
          width: 100%;
          height: 220px;
          object-fit: cover;
          background: linear-gradient(135deg, #ede9fe, #dbeafe);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
        }
 
        .product-body { padding: 18px; }
 
        .badge {
          display: inline-block;
          padding: 3px 10px;
          background: #ede9fe;
          color: #7c3aed;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 600;
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
 
        .add-btn {
          width: 100%;
          padding: 12px;
          border: none;
          border-radius: 10px;
          font-family: 'Outfit', sans-serif;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          margin-top: 12px;
        }
        .add-btn.default { background: #1d4ed8; color: white; }
        .add-btn.added { background: #16a34a; color: white; }
        .add-btn:hover { opacity: 0.9; transform: scale(1.01); }
 
        .skeleton {
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          border-radius: 10px;
        }
        @keyframes shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }
 
        .empty-state {
          text-align: center;
          padding: 80px 20px;
          grid-column: 1 / -1;
        }
 
        @media (max-width: 768px) {
          .products-grid { grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 15px; padding: 20px 4%; }
        }
      `}</style>

      <div className="products-hero">
        <h1 style={{ fontSize: "2.8rem", fontWeight: 800, marginBottom: 10 }}>
          Our Products
        </h1>
        <p style={{ opacity: 0.8, fontSize: "1.1rem" }}>
          Premium quality at unbeatable prices
        </p>
      </div>

      <div className="filter-bar">
        <input
          className="search-input"
          placeholder="🔍  Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {categories.map((cat) => (
          <button
            key={cat}
            className={`cat-btn ${category === cat ? "active" : ""}`}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="products-grid">
        {loading ? (
          Array(8)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                style={{
                  background: "white",
                  borderRadius: 16,
                  overflow: "hidden",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.06)",
                }}
              >
                <div className="skeleton" style={{ height: 220 }} />
                <div style={{ padding: 18 }}>
                  <div
                    className="skeleton"
                    style={{ height: 14, marginBottom: 10, width: "40%" }}
                  />
                  <div
                    className="skeleton"
                    style={{ height: 20, marginBottom: 8 }}
                  />
                  <div
                    className="skeleton"
                    style={{ height: 14, marginBottom: 14, width: "70%" }}
                  />
                  <div className="skeleton" style={{ height: 44 }} />
                </div>
              </div>
            ))
        ) : filtered.length === 0 ? (
          <div className="empty-state">
            <div style={{ fontSize: "4rem", marginBottom: 16 }}>📦</div>
            <h3 style={{ fontSize: "1.5rem", color: "#374151" }}>
              No products found
            </h3>
            <p style={{ color: "#9ca3af" }}>
              Try a different search or category
            </p>
          </div>
        ) : (
          filtered.map((product) => (
            <div
              key={product.id}
              className="product-card"
              style={{ position: "relative" }}
            >
              <Link
                to={`/singleProduct/${product.id}`}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  zIndex: 1,
                }}
              />
              {product.image_url ? (
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="product-img"
                  style={{ display: "block" }}
                />
              ) : (
                <div className="product-img">🛍️</div>
              )}
              <div className="product-body">
                {product.category && (
                  <span className="badge">{product.category}</span>
                )}
                <h3
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    color: "#1f2937",
                    margin: "0 0 6px",
                  }}
                >
                  {product.name}
                </h3>
                <p
                  style={{
                    color: "#6b7280",
                    fontSize: "0.85rem",
                    margin: "0 0 10px",
                    lineHeight: 1.5,
                  }}
                >
                  {product.description?.slice(0, 80)}
                  {product.description?.length > 80 ? "..." : ""}
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
                      fontSize: "1.4rem",
                      fontWeight: 800,
                      color: "#1d4ed8",
                    }}
                  >
                    ${Number(product.price || 0).toFixed(2)}
                  </span>
                  {product.stock !== undefined && (
                    <span
                      style={{
                        fontSize: "12px",
                        color: product.stock > 0 ? "#16a34a" : "#dc2626",
                        fontWeight: 600,
                      }}
                    >
                      {product.stock > 0
                        ? `${product.stock} in stock`
                        : "Out of stock"}
                    </span>
                  )}
                </div>
                <button
                  className={`add-btn ${added[product.id] ? "added" : "default"}`}
                  onClick={() => handleAddToCart(product)}
                  disabled={product.stock === 0}
                  style={{ position: "relative", zIndex: 2 }}
                >
                  {added[product.id] ? "✓ Added to Cart!" : "Add to Cart 🛒"}
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Products;
