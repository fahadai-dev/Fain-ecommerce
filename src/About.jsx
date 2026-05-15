import { Link } from "react-router-dom";

const About = () => {
  const team = [
    { name: "Fahad Hossain", role: "Founder & CEO", emoji: "👨‍💼" },
    { name: "Team Member", role: "Product Manager", emoji: "👩‍💻" },
    { name: "Team Member", role: "UI/UX Designer", emoji: "🎨" },
  ];

  const stats = [
    { value: "500+", label: "Products" },
    { value: "10K+", label: "Happy Customers" },
    { value: "50+", label: "Brands" },
    { value: "24/7", label: "Support" },
  ];

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
 
        .about-hero {
          background: linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #1d4ed8 100%);
          padding: 80px 5%;
          color: white;
          text-align: center;
        }
 
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          max-width: 900px;
          margin: 0 auto;
          padding: 0 5%;
          transform: translateY(-40px);
        }
 
        .stat-card {
          background: white;
          border-radius: 16px;
          padding: 30px 20px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
 
        .team-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
          max-width: 800px;
          margin: 0 auto;
          padding: 0 5%;
        }
 
        .team-card {
          background: white;
          border-radius: 20px;
          padding: 40px 20px;
          text-align: center;
          box-shadow: 0 4px 20px rgba(0,0,0,0.07);
          transition: transform 0.3s;
        }
        .team-card:hover { transform: translateY(-8px); }
 
        .value-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          max-width: 900px;
          margin: 0 auto;
          padding: 0 5%;
        }
 
        .value-card {
          background: white;
          border-radius: 16px;
          padding: 30px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.06);
        }
 
        @media (max-width: 768px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
          .team-grid { grid-template-columns: 1fr 1fr; }
          .value-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="about-hero">
        <h1 style={{ fontSize: "3rem", fontWeight: 800, marginBottom: 16 }}>
          About Fahad-Shop
        </h1>
        <p
          style={{
            opacity: 0.85,
            fontSize: "1.15rem",
            maxWidth: 600,
            margin: "0 auto",
          }}
        >
          We're on a mission to make premium fashion and electronics accessible
          to everyone with unbeatable quality and prices.
        </p>
      </div>

      <div className="stats-grid">
        {stats.map((s) => (
          <div key={s.label} className="stat-card">
            <div
              style={{ fontSize: "2.2rem", fontWeight: 800, color: "#1d4ed8" }}
            >
              {s.value}
            </div>
            <div style={{ color: "#6b7280", fontWeight: 500, marginTop: 4 }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>

      <section
        style={{ padding: "20px 5% 60px", maxWidth: 900, margin: "0 auto" }}
      >
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: 800,
            color: "#1f2937",
            marginBottom: 20,
            textAlign: "center",
          }}
        >
          Our Story
        </h2>
        <div
          style={{
            background: "white",
            borderRadius: 20,
            padding: 40,
            boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
            lineHeight: 1.8,
            color: "#4b5563",
            fontSize: "1.05rem",
          }}
        >
          <p>
            Founded with a vision to revolutionize online shopping in
            Bangladesh, Fahad-Shop started as a small idea that grew into a
            trusted destination for fashion and electronics.
          </p>
          <p style={{ marginTop: 16 }}>
            We believe that everyone deserves access to premium quality products
            at fair prices. Our curated selection spans the latest trends in
            fashion, cutting-edge electronics, and must-have accessories.
          </p>
          <p style={{ marginTop: 16 }}>
            Every product on our platform is carefully vetted to ensure you
            receive only the best. From fast delivery to hassle-free returns, we
            put our customers first in everything we do.
          </p>
        </div>
      </section>

      <section style={{ padding: "0 5% 60px" }}>
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: 800,
            color: "#1f2937",
            marginBottom: 30,
            textAlign: "center",
          }}
        >
          Our Values
        </h2>
        <div className="value-grid">
          {[
            {
              emoji: "✨",
              title: "Quality First",
              desc: "Every product is carefully selected and quality-checked before reaching your doorstep.",
            },
            {
              emoji: "🚀",
              title: "Fast Delivery",
              desc: "We ensure your orders reach you quickly and safely, every single time.",
            },
            {
              emoji: "💬",
              title: "24/7 Support",
              desc: "Our dedicated team is always ready to help you with any queries or concerns.",
            },
            {
              emoji: "🔒",
              title: "Secure Shopping",
              desc: "Your data and payments are always protected with industry-leading security.",
            },
          ].map((v) => (
            <div key={v.title} className="value-card">
              <div style={{ fontSize: "2.5rem", marginBottom: 12 }}>
                {v.emoji}
              </div>
              <h3
                style={{ fontWeight: 700, color: "#1f2937", marginBottom: 8 }}
              >
                {v.title}
              </h3>
              <p style={{ color: "#6b7280", lineHeight: 1.6 }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "0 5% 80px" }}>
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: 800,
            color: "#1f2937",
            marginBottom: 30,
            textAlign: "center",
          }}
        >
          Meet the Team
        </h2>
        <div className="team-grid">
          {team.map((t) => (
            <div key={t.name} className="team-card">
              <div style={{ fontSize: "4rem", marginBottom: 12 }}>
                {t.emoji}
              </div>
              <h3
                style={{ fontWeight: 700, color: "#1f2937", marginBottom: 4 }}
              >
                {t.name}
              </h3>
              <p style={{ color: "#6b7280", fontSize: "0.9rem" }}>{t.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          background: "linear-gradient(135deg, #1e1b4b, #1d4ed8)",
          padding: "60px 5%",
          textAlign: "center",
          color: "white",
        }}
      >
        <h2 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: 16 }}>
          Ready to shop?
        </h2>
        <p style={{ opacity: 0.85, marginBottom: 30 }}>
          Explore hundreds of premium products at amazing prices.
        </p>
        <Link
          to="/products"
          style={{
            padding: "15px 40px",
            background: "white",
            color: "#1d4ed8",
            borderRadius: "50px",
            textDecoration: "none",
            fontWeight: 700,
            fontSize: "1rem",
            display: "inline-block",
          }}
        >
          Browse Products →
        </Link>
      </section>
    </div>
  );
};

export default About;
