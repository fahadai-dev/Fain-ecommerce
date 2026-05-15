import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
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
        .contact-hero {
          background: linear-gradient(135deg, #1e1b4b, #1d4ed8);
          padding: 60px 5%;
          color: white;
          text-align: center;
        }
        .contact-form {
          max-width: 600px;
          margin: 50px auto;
          background: white;
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
        }
        .form-input {
          width: 100%;
          padding: 14px 16px;
          border: 2px solid #e5e7eb;
          border-radius: 10px;
          font-size: 15px;
          font-family: 'Outfit', sans-serif;
          outline: none;
          transition: border-color 0.2s;
          box-sizing: border-box;
          margin-bottom: 16px;
        }
        .form-input:focus { border-color: #1d4ed8; }
        .submit-btn {
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
        }
        .submit-btn:hover { opacity: 0.9; }
      `}</style>

      <div className="contact-hero">
        <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: 10 }}>
          Contact Us 📬
        </h1>
        <p style={{ opacity: 0.8 }}>
          আমাদের সাথে যোগাযোগ করুন — আমরা সাহায্য করতে প্রস্তুত!
        </p>
      </div>

      <div className="contact-form">
        {sent ? (
          <div style={{ textAlign: "center", padding: "40px 0" }}>
            <div style={{ fontSize: "4rem", marginBottom: 16 }}>✅</div>
            <h2 style={{ color: "#1d4ed8", marginBottom: 10 }}>
              Message Sent!
            </h2>
            <p style={{ color: "#6b7280" }}>
              আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।
            </p>
            <button
              onClick={() => setSent(false)}
              style={{
                marginTop: 20,
                padding: "10px 30px",
                background: "#1d4ed8",
                color: "white",
                border: "none",
                borderRadius: 8,
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              Send Another
            </button>
          </div>
        ) : (
          <>
            <h2 style={{ marginBottom: 24, color: "#1f2937" }}>
              Send a Message
            </h2>
            <input
              className="form-input"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              className="form-input"
              placeholder="Your Email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <textarea
              className="form-input"
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              style={{ resize: "none" }}
            />
            <button className="submit-btn" onClick={handleSubmit}>
              Send Message →
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Contact;
