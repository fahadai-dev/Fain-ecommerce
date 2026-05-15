import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = ({ cart = [], clearCart }) => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zip: "",
  });
  const [ordered, setOrdered] = useState(false);
  const navigate = useNavigate();

  const total = cart.reduce(
    (sum, item) => sum + Number(item.price || 0) * item.qty,
    0,
  );

  const handleOrder = () => {
    setOrdered(true);
    clearCart();
    setTimeout(() => navigate("/"), 3000);
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
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&display=swap');
        .checkout-hero {
          background: linear-gradient(135deg, #1e1b4b, #1d4ed8);
          padding: 50px 5%;
          color: white;
          text-align: center;
        }
        .checkout-container {
          max-width: 800px;
          margin: 40px auto;
          padding: 0 20px;
          display: grid;
          grid-template-columns: 1fr 300px;
          gap: 30px;
          align-items: start;
        }
        .checkout-box {
          background: white;
          border-radius: 20px;
          padding: 30px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.06);
        }
        .co-input {
          width: 100%;
          padding: 12px 16px;
          border: 2px solid #e5e7eb;
          border-radius: 10px;
          font-size: 15px;
          font-family: 'Outfit', sans-serif;
          outline: none;
          transition: border-color 0.2s;
          box-sizing: border-box;
          margin-bottom: 14px;
        }
        .co-input:focus { border-color: #1d4ed8; }
        .co-btn {
          width: 100%;
          padding: 14px;
          background: linear-gradient(135deg, #1d4ed8, #7c3aed);
          color: white;
          border: none;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 700;
          font-family: 'Outfit', sans-serif;
          cursor: pointer;
          transition: opacity 0.2s;
          margin-top: 10px;
        }
        .co-btn:hover { opacity: 0.9; }
        .step-indicator {
          display: flex;
          gap: 10px;
          margin-bottom: 24px;
          align-items: center;
        }
        .step {
          width: 32px; height: 32px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-weight: 700; font-size: 14px;
        }
        @media (max-width: 768px) {
          .checkout-container { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="checkout-hero">
        <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: 10 }}>
          Checkout 💳
        </h1>
        <p style={{ opacity: 0.8 }}>আপনার অর্ডার সম্পন্ন করুন</p>
      </div>

      {ordered ? (
        <div style={{ textAlign: "center", padding: "80px 20px" }}>
          <div style={{ fontSize: "5rem", marginBottom: 20 }}>🎉</div>
          <h2 style={{ fontSize: "2rem", color: "#1d4ed8", marginBottom: 10 }}>
            Order Placed!
          </h2>
          <p style={{ color: "#6b7280", fontSize: "1.1rem" }}>
            আপনার অর্ডার সফলভাবে সম্পন্ন হয়েছে। ধন্যবাদ! 🙏
          </p>
          <p style={{ color: "#9ca3af", marginTop: 10 }}>
            Home পেজে নিয়ে যাচ্ছি...
          </p>
        </div>
      ) : (
        <div className="checkout-container">
          <div className="checkout-box">
            <div className="step-indicator">
              {[1, 2].map((s) => (
                <div
                  key={s}
                  className="step"
                  style={{
                    background: step >= s ? "#1d4ed8" : "#e5e7eb",
                    color: step >= s ? "white" : "#9ca3af",
                  }}
                >
                  {s}
                </div>
              ))}
              <span style={{ color: "#6b7280", fontSize: "0.9rem" }}>
                {step === 1 ? "Shipping Info" : "Payment"}
              </span>
            </div>

            {step === 1 ? (
              <>
                <h3 style={{ marginBottom: 20, color: "#1f2937" }}>
                  📦 Shipping Information
                </h3>
                <input
                  className="co-input"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <input
                  className="co-input"
                  placeholder="Email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                <input
                  className="co-input"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
                <input
                  className="co-input"
                  placeholder="Address"
                  value={form.address}
                  onChange={(e) =>
                    setForm({ ...form, address: e.target.value })
                  }
                />
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 12,
                  }}
                >
                  <input
                    className="co-input"
                    placeholder="City"
                    value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                    style={{ marginBottom: 0 }}
                  />
                  <input
                    className="co-input"
                    placeholder="ZIP Code"
                    value={form.zip}
                    onChange={(e) => setForm({ ...form, zip: e.target.value })}
                    style={{ marginBottom: 0 }}
                  />
                </div>
                <button className="co-btn" onClick={() => setStep(2)}>
                  Continue to Payment →
                </button>
              </>
            ) : (
              <>
                <h3 style={{ marginBottom: 20, color: "#1f2937" }}>
                  💳 Payment
                </h3>
                <input
                  className="co-input"
                  placeholder="Card Number (e.g. 1234 5678 9012 3456)"
                />
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 12,
                  }}
                >
                  <input
                    className="co-input"
                    placeholder="MM/YY"
                    style={{ marginBottom: 0 }}
                  />
                  <input
                    className="co-input"
                    placeholder="CVV"
                    style={{ marginBottom: 0 }}
                  />
                </div>
                <div style={{ display: "flex", gap: 10, marginTop: 14 }}>
                  <button
                    onClick={() => setStep(1)}
                    style={{
                      flex: 1,
                      padding: 14,
                      background: "#f3f4f6",
                      border: "none",
                      borderRadius: 12,
                      cursor: "pointer",
                      fontWeight: 600,
                      fontFamily: "'Outfit', sans-serif",
                    }}
                  >
                    ← Back
                  </button>
                  <button
                    className="co-btn"
                    style={{ flex: 2, marginTop: 0 }}
                    onClick={handleOrder}
                  >
                    Place Order 🎉
                  </button>
                </div>
              </>
            )}
          </div>

          <div className="checkout-box" style={{ position: "sticky", top: 90 }}>
            <h3 style={{ marginBottom: 16, color: "#1f2937" }}>
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
                margin: "14px 0",
              }}
            />
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
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
