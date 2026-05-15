import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [done, setDone] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!form.email || !form.password) return;
    setDone(true);
    setTimeout(() => navigate("/"), 1500);
  };

  return (
    <div
      style={{
        fontFamily: "'Outfit', sans-serif",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1e1b4b, #1d4ed8)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&display=swap');
        .auth-input {
          width: 100%;
          padding: 14px 16px;
          border: 2px solid #e5e7eb;
          border-radius: 10px;
          font-size: 15px;
          font-family: 'Outfit', sans-serif;
          outline: none;
          transition: border-color 0.2s;
          box-sizing: border-box;
          margin-bottom: 14px;
        }
        .auth-input:focus { border-color: #1d4ed8; }
        .auth-btn {
          width: 100%;
          padding: 14px;
          background: linear-gradient(135deg, #1d4ed8, #7c3aed);
          color: white;
          border: none;
          border-radius: 10px;
          font-size: 16px;
          font-weight: 700;
          font-family: 'Outfit', sans-serif;
          cursor: pointer;
          transition: opacity 0.2s;
          margin-top: 6px;
        }
        .auth-btn:hover { opacity: 0.9; }
        .toggle-link {
          color: #1d4ed8;
          cursor: pointer;
          font-weight: 600;
          text-decoration: underline;
        }
      `}</style>

      <div
        style={{
          background: "white",
          borderRadius: 24,
          padding: "40px 36px",
          width: "100%",
          maxWidth: 420,
          boxShadow: "0 20px 50px rgba(0,0,0,0.2)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 30 }}>
          <div style={{ fontSize: "2.5rem", marginBottom: 8 }}>🛍️</div>
          <h2
            style={{
              fontSize: "1.8rem",
              fontWeight: 800,
              color: "#1f2937",
              margin: 0,
            }}
          >
            {isRegister ? "Create Account" : "Welcome Back"}
          </h2>
          <p style={{ color: "#6b7280", marginTop: 6 }}>
            {isRegister
              ? "Fahad-Shop-এ নতুন অ্যাকাউন্ট তৈরি করুন"
              : "আপনার অ্যাকাউন্টে লগইন করুন"}
          </p>
        </div>

        {done ? (
          <div style={{ textAlign: "center", padding: "20px 0" }}>
            <div style={{ fontSize: "3rem", marginBottom: 12 }}>✅</div>
            <p
              style={{ fontWeight: 700, color: "#1d4ed8", fontSize: "1.1rem" }}
            >
              {isRegister ? "Account Created!" : "Login Successful!"}
            </p>
            <p style={{ color: "#6b7280" }}>Home পেজে নিয়ে যাচ্ছি...</p>
          </div>
        ) : (
          <>
            {isRegister && (
              <input
                className="auth-input"
                placeholder="Full Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            )}
            <input
              className="auth-input"
              placeholder="Email Address"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <input
              className="auth-input"
              placeholder="Password"
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
            <button className="auth-btn" onClick={handleSubmit}>
              {isRegister ? "Create Account →" : "Login →"}
            </button>

            <p style={{ textAlign: "center", marginTop: 20, color: "#6b7280" }}>
              {isRegister
                ? "Already have an account? "
                : "Don't have an account? "}
              <span
                className="toggle-link"
                onClick={() => setIsRegister(!isRegister)}
              >
                {isRegister ? "Login" : "Register"}
              </span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
