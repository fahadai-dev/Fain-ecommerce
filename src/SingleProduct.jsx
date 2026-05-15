import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "./supabaseClient";

const SingleProduct = ({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [added, setAdded] = useState(false);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await supabase
        .from("products")
        .select("*")
        .eq("id", id)
        .single();
      setProduct(data);
      setLoading(false);
    };
    fetchProduct();
  }, [id]);

  const handleAdd = () => {
    for (let i = 0; i < qty; i++) addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  if (loading)
    return (
      <div
        style={{
          textAlign: "center",
          padding: "100px 20px",
          fontFamily: "'Outfit', sans-serif",
        }}
      >
        <div style={{ fontSize: "3rem" }}>⏳</div>
        <p style={{ color: "#6b7280", marginTop: 10 }}>Loading product...</p>
      </div>
    );

  if (!product)
    return (
      <div
        style={{
          textAlign: "center",
          padding: "100px 20px",
          fontFamily: "'Outfit', sans-serif",
        }}
      >
        <div style={{ fontSize: "3rem" }}>❌</div>
        <p style={{ color: "#6b7280", marginTop: 10 }}>Product not found!</p>
        <Link
          to="/products"
          style={{
            marginTop: 20,
            display: "inline-block",
            padding: "12px 30px",
            background: "#1d4ed8",
            color: "white",
            borderRadius: 50,
            textDecoration: "none",
            fontWeight: 700,
          }}
        >
          ← Back to Products
        </Link>
      </div>
    );

  return (
    <div
      style={{
        fontFamily: "'Outfit', sans-serif",
        backgroundColor: "#f8f9ff",
        minHeight: "100vh",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&display=swap');

        .sp-container {
          max-width: 1000px;
          margin: 50px auto;
          padding: 0 20px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: start;
        }

        .qty-btn {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          border: 2px solid #e5e7eb;
          background: white;
          font-size: 22px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
          font-weight: bold;
        }
        .qty-btn:hover {
          border-color: #1d4ed8;
          color: #1d4ed8;
        }

        .add-btn {
          width: 100%;
          padding: 16px;
          border: none;
          border-radius: 14px;
          font-size: 17px;
          font-weight: 700;
          font-family: 'Outfit', sans-serif;
          cursor: pointer;
          transition: all 0.3s;
          margin-top: 24px;
        }

        .badge {
          display: inline-block;
          padding: 5px 16px;
          background: #ede9fe;
          color: #7c3aed;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 14px;
        }

        .back-bar {
          padding: 18px 5%;
          background: white;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }

        @media (max-width: 768px) {
          .sp-container {
            grid-template-columns: 1fr;
            margin: 20px auto;
          }
        }
      `}</style>

      {/* Back Button */}
      <div className="back-bar">
        <Link
          to="/products"
          style={{
            color: "#1d4ed8",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: "1rem",
          }}
        >
          ← Back to Products
        </Link>
      </div>

      <div className="sp-container">
        {/* Left — Image */}
        <div>
          {product.image_url ? (
            <img
              src={product.image_url}
              alt={product.name}
              style={{
                width: "100%",
                borderRadius: "20px",
                objectFit: "cover",
                maxHeight: "450px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
              }}
            />
          ) : (
            <div
              style={{
                width: "100%",
                height: "400px",
                borderRadius: "20px",
                background: "linear-gradient(135deg, #ede9fe, #dbeafe)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "6rem",
              }}
            >
              🛍️
            </div>
          )}
        </div>

        {/* Right — Info */}
        <div>
          {product.category && (
            <span className="badge">{product.category}</span>
          )}

          <h1
            style={{
              fontSize: "2rem",
              fontWeight: 800,
              color: "#1f2937",
              margin: "0 0 14px",
            }}
          >
            {product.name}
          </h1>

          <p
            style={{
              color: "#6b7280",
              lineHeight: 1.8,
              fontSize: "1rem",
              marginBottom: 24,
            }}
          >
            {product.description}
          </p>

          <div
            style={{
              fontSize: "2.4rem",
              fontWeight: 800,
              color: "#1d4ed8",
              marginBottom: 16,
            }}
          >
            ${Number(product.price || 0).toFixed(2)}
          </div>

          {/* Stock Badge */}
          <div
            style={{
              display: "inline-block",
              padding: "6px 16px",
              background: product.stock > 0 ? "#dcfce7" : "#fee2e2",
              color: product.stock > 0 ? "#16a34a" : "#dc2626",
              borderRadius: 10,
              fontWeight: 700,
              fontSize: "0.9rem",
              marginBottom: 28,
            }}
          >
            {product.stock > 0
              ? `✅ ${product.stock} in stock`
              : "❌ Out of stock"}
          </div>

          {/* Quantity */}
          <div>
            <p
              style={{
                fontWeight: 700,
                color: "#374151",
                marginBottom: 12,
                fontSize: "1rem",
              }}
            >
              Quantity:
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
              }}
            >
              <button
                className="qty-btn"
                onClick={() => setQty(Math.max(1, qty - 1))}
              >
                −
              </button>
              <span
                style={{
                  fontWeight: 800,
                  fontSize: "1.3rem",
                  minWidth: 30,
                  textAlign: "center",
                }}
              >
                {qty}
              </span>
              <button className="qty-btn" onClick={() => setQty(qty + 1)}>
                +
              </button>
              <span style={{ color: "#6b7280", fontSize: "0.95rem" }}>
                = ${(Number(product.price) * qty).toFixed(2)}
              </span>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            className="add-btn"
            onClick={handleAdd}
            disabled={product.stock === 0}
            style={{
              background: added
                ? "#16a34a"
                : "linear-gradient(135deg, #1d4ed8, #7c3aed)",
              color: "white",
              opacity: product.stock === 0 ? 0.5 : 1,
              cursor: product.stock === 0 ? "not-allowed" : "pointer",
            }}
          >
            {added
              ? "✓ Added to Cart!"
              : `Add to Cart 🛒 — $${(Number(product.price) * qty).toFixed(2)}`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
