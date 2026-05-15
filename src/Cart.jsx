import { Link, useNavigate } from "react-router-dom";

const Cart = ({ cart, removeFromCart, updateQty }) => {
  const total = cart.reduce(
    (sum, item) => sum + Number(item.price || 0) * item.qty,
    0,
  );
  const navigate = useNavigate();
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

        .cart-hero {
          background: linear-gradient(135deg, #1e1b4b, #1d4ed8);
          padding: 50px 5%;
          color: white;
          text-align: center;
        }

        .cart-container {
          max-width: 900px;
          margin: 40px auto;
          padding: 0 20px;
          display: grid;
          grid-template-columns: 1fr 320px;
          gap: 30px;
          align-items: start;
        }

        .cart-item {
          background: white;
          border-radius: 16px;
          padding: 20px;
          margin-bottom: 15px;
          display: flex;
          gap: 16px;
          align-items: center;
          box-shadow: 0 4px 15px rgba(0,0,0,0.06);
        }

        .item-img {
          width: 90px;
          height: 90px;
          border-radius: 12px;
          object-fit: cover;
          background: linear-gradient(135deg, #ede9fe, #dbeafe);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          flex-shrink: 0;
        }

        .qty-control {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 10px;
        }

        .qty-btn {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          border: 2px solid #e5e7eb;
          background: white;
          font-size: 18px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
          font-family: 'Outfit', sans-serif;
        }
        .qty-btn:hover { border-color: #1d4ed8; color: #1d4ed8; }

        .remove-btn {
          background: none;
          border: none;
          color: #ef4444;
          cursor: pointer;
          font-size: 20px;
          padding: 4px;
          margin-left: auto;
          transition: transform 0.2s;
        }
        .remove-btn:hover { transform: scale(1.2); }

        .summary-box {
          background: white;
          border-radius: 20px;
          padding: 30px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          position: sticky;
          top: 90px;
        }

        .checkout-btn {
          width: 100%;
          padding: 16px;
          background: linear-gradient(135deg, #1d4ed8, #7c3aed);
          color: white;
          border: none;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 700;
          font-family: 'Outfit', sans-serif;
          cursor: pointer;
          transition: opacity 0.2s, transform 0.2s;
          margin-top: 20px;
        }
        .checkout-btn:hover { opacity: 0.9; transform: scale(1.01); }

        .empty-cart {
          text-align: center;
          padding: 80px 20px;
          grid-column: 1 / -1;
        }

        @media (max-width: 768px) {
          .cart-container { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="cart-hero">
        <h1 style={{ fontSize: "2.5rem", fontWeight: 800 }}>Your Cart 🛒</h1>
        <p style={{ opacity: 0.8 }}>
          {cart.length} item{cart.length !== 1 ? "s" : ""} in your cart
        </p>
      </div>

      <div className="cart-container">
        {cart.length === 0 ? (
          <div className="empty-cart">
            <div style={{ fontSize: "5rem", marginBottom: 20 }}>🛒</div>
            <h2
              style={{ fontSize: "1.8rem", color: "#374151", marginBottom: 10 }}
            >
              Your cart is empty
            </h2>
            <p style={{ color: "#9ca3af", marginBottom: 30 }}>
              Add some products to get started!
            </p>
            <Link
              to="/products"
              style={{
                padding: "14px 35px",
                background: "#1d4ed8",
                color: "white",
                borderRadius: "50px",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "1rem",
              }}
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <>
            <div>
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  {item.image_url ? (
                    <img
                      src={item.image_url}
                      alt={item.name}
                      className="item-img"
                      style={{ display: "block" }}
                    />
                  ) : (
                    <div className="item-img">🛍️</div>
                  )}
                  <div style={{ flex: 1 }}>
                    <h4
                      style={{
                        margin: "0 0 4px",
                        fontWeight: 700,
                        color: "#1f2937",
                      }}
                    >
                      {item.name}
                    </h4>
                    <span
                      style={{
                        color: "#1d4ed8",
                        fontWeight: 800,
                        fontSize: "1.1rem",
                      }}
                    >
                      ${Number(item.price || 0).toFixed(2)}
                    </span>
                    <div className="qty-control">
                      <button
                        className="qty-btn"
                        onClick={() => updateQty(item.id, item.qty - 1)}
                      >
                        −
                      </button>
                      <span
                        style={{
                          fontWeight: 700,
                          minWidth: 24,
                          textAlign: "center",
                        }}
                      >
                        {item.qty}
                      </span>
                      <button
                        className="qty-btn"
                        onClick={() => updateQty(item.id, item.qty + 1)}
                      >
                        +
                      </button>
                      <span
                        style={{
                          marginLeft: 10,
                          color: "#6b7280",
                          fontSize: "0.9rem",
                        }}
                      >
                        = ${(Number(item.price) * item.qty).toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    🗑️
                  </button>
                </div>
              ))}
            </div>

            <div className="summary-box">
              <h3
                style={{
                  fontSize: "1.3rem",
                  fontWeight: 700,
                  marginBottom: 20,
                  color: "#1f2937",
                }}
              >
                Order Summary
              </h3>
              {cart.map((item) => (
                <div
                  key={item.id}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: 10,
                    color: "#6b7280",
                    fontSize: "0.9rem",
                  }}
                >
                  <span>
                    {item.name} × {item.qty}
                  </span>
                  <span>${(Number(item.price) * item.qty).toFixed(2)}</span>
                </div>
              ))}
              <hr
                style={{
                  border: "none",
                  borderTop: "2px solid #f3f4f6",
                  margin: "15px 0",
                }}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 8,
                }}
              >
                <span style={{ color: "#6b7280" }}>Subtotal</span>
                <span style={{ fontWeight: 700 }}>${total.toFixed(2)}</span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 8,
                }}
              >
                <span style={{ color: "#6b7280" }}>Shipping</span>
                <span style={{ color: "#16a34a", fontWeight: 600 }}>Free</span>
              </div>
              <hr
                style={{
                  border: "none",
                  borderTop: "2px solid #f3f4f6",
                  margin: "15px 0",
                }}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "1.2rem",
                  fontWeight: 800,
                }}
              >
                <span>Total</span>
                <span style={{ color: "#1d4ed8" }}>${total.toFixed(2)}</span>
              </div>
              <button
                className="checkout-btn"
                onClick={() => navigate("/checkout")}
              >
                Proceed to Checkout →
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
