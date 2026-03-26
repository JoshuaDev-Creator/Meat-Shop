"use client";
import Link from "next/link";

const meats = [
  {
    emoji: "🐔",
    name: "Country Chicken",
    tamil: "நாட்டுக்கோழி",
    desc: "Farm-raised, free-range. Cleaned & cut to your choice.",
    price: "₹280 / kg",
    tag: "Best Seller",
    tagColor: "#C8410A",
  },
  {
    emoji: "🐑",
    name: "Fresh Mutton",
    tamil: "ஆட்டு இறைச்சி",
    desc: "Tender cuts from local farms. Perfect for Tirunelveli salna.",
    price: "₹780 / kg",
    tag: "Premium",
    tagColor: "#5B3A1A",
  },
  {
    emoji: "🐦",
    name: "Quail (Kaada)",
    tamil: "காடை",
    desc: "Whole cleaned quail. Marinated on request.",
    price: "₹120 / piece",
    tag: "Seasonal",
    tagColor: "#1A6040",
  },
];

const steps = [
  { icon: "📱", step: "1", title: "Place Order", desc: "Choose your meat, quantity & cut preference online." },
  { icon: "🔪", step: "2", title: "Fresh Cut", desc: "We slaughter & clean on the same day — no frozen stock." },
  { icon: "🛵", step: "3", title: "Fast Delivery", desc: "Delivered to your door within Tirunelveli in 2 hours." },
];

export default function Home() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }}>

      {/* HERO */}
      <section
        style={{
          background: "linear-gradient(135deg, #1A0A00 0%, #3D1800 60%, #5C2500 100%)",
          color: "#fff",
          padding: "80px 2rem 100px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative circles */}
        <div style={{ position: "absolute", top: "-60px", right: "-60px", width: "240px", height: "240px", borderRadius: "50%", background: "rgba(200,65,10,0.12)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "-40px", left: "-40px", width: "180px", height: "180px", borderRadius: "50%", background: "rgba(200,65,10,0.08)", pointerEvents: "none" }} />

        <p
          style={{
            background: "#C8410A",
            display: "inline-block",
            color: "#fff",
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            padding: "6px 16px",
            borderRadius: "20px",
            marginBottom: "24px",
          }}
        >
          Tirunelveli's Fresh Meat Delivery
        </p>

        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(36px, 6vw, 64px)",
            fontWeight: 900,
            lineHeight: 1.15,
            margin: "0 auto 24px",
            maxWidth: "700px",
            color: "#F5E6C8",
          }}
        >
          Fresh. Cut. Delivered<br />
          <span style={{ color: "#FF6B35" }}>to Your Door.</span>
        </h1>

        <p
          style={{
            color: "#C4A07A",
            fontSize: "18px",
            maxWidth: "500px",
            margin: "0 auto 40px",
            lineHeight: 1.7,
          }}
        >
          Country chicken, mutton & kaada — slaughtered fresh on order day.
          No frozen stock. Delivered within Tirunelveli.
        </p>

        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link
            href="/order"
            style={{
              background: "#C8410A",
              color: "#fff",
              textDecoration: "none",
              padding: "16px 36px",
              borderRadius: "10px",
              fontSize: "16px",
              fontWeight: 600,
              display: "inline-block",
            }}
          >
            Order Fresh Meat →
          </Link>
          <a
            href="tel:+919876543210"
            style={{
              border: "1.5px solid #5A3520",
              color: "#D4B896",
              textDecoration: "none",
              padding: "16px 32px",
              borderRadius: "10px",
              fontSize: "16px",
              fontWeight: 500,
              display: "inline-block",
            }}
          >
            📞 Call to Order
          </a>
        </div>

        <div style={{ display: "flex", gap: "32px", justifyContent: "center", marginTop: "48px", flexWrap: "wrap" }}>
          {[["100%", "Same-day Fresh"], ["2 hrs", "Delivery Time"], ["0", "Frozen Stock"]].map(([val, label]) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "28px", fontWeight: 700, color: "#FF6B35", fontFamily: "'Playfair Display', serif" }}>{val}</div>
              <div style={{ fontSize: "13px", color: "#8A6A50", marginTop: "2px" }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* MEATS */}
      <section style={{ padding: "80px 2rem", maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "36px", color: "#1A0A00", margin: "0 0 12px" }}>
            What We Deliver
          </h2>
          <p style={{ color: "#7A5C42", fontSize: "16px" }}>All meat is freshly sourced from local farms in and around Tirunelveli district.</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
          {meats.map((m) => (
            <div
              key={m.name}
              style={{
                background: "#fff",
                borderRadius: "16px",
                border: "1px solid #EDE0D0",
                padding: "32px 28px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "16px",
                  background: m.tagColor,
                  color: "#fff",
                  fontSize: "11px",
                  fontWeight: 600,
                  padding: "4px 10px",
                  borderRadius: "20px",
                  letterSpacing: "0.5px",
                }}
              >
                {m.tag}
              </span>
              <div style={{ fontSize: "48px", marginBottom: "16px" }}>{m.emoji}</div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", color: "#1A0A00", margin: "0 0 4px" }}>
                {m.name}
              </h3>
              <p style={{ color: "#A07850", fontSize: "13px", margin: "0 0 12px" }}>{m.tamil}</p>
              <p style={{ color: "#5A4030", fontSize: "14px", lineHeight: 1.6, margin: "0 0 20px" }}>{m.desc}</p>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontWeight: 700, fontSize: "18px", color: "#C8410A" }}>{m.price}</span>
                <Link
                  href="/order"
                  style={{
                    background: "#FFF0E8",
                    color: "#C8410A",
                    textDecoration: "none",
                    padding: "8px 18px",
                    borderRadius: "8px",
                    fontSize: "13px",
                    fontWeight: 600,
                  }}
                >
                  Order →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ background: "#1A0A00", padding: "80px 2rem" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "36px", color: "#F5E6C8", margin: "0 0 12px" }}>
            How It Works
          </h2>
          <p style={{ color: "#7A5C42", fontSize: "16px", marginBottom: "48px" }}>Simple. Fresh. Fast.</p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "32px" }}>
            {steps.map((s) => (
              <div key={s.step} style={{ textAlign: "center" }}>
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    background: "#2D1500",
                    border: "2px solid #C8410A",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "28px",
                    margin: "0 auto 20px",
                  }}
                >
                  {s.icon}
                </div>
                <h3 style={{ color: "#F5E6C8", fontFamily: "'Playfair Display', serif", fontSize: "20px", margin: "0 0 10px" }}>
                  {s.title}
                </h3>
                <p style={{ color: "#7A5C42", fontSize: "14px", lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section
        style={{
          background: "#C8410A",
          padding: "60px 2rem",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "32px", color: "#fff", margin: "0 0 12px" }}>
          Ready for Fresh Meat Today?
        </h2>
        <p style={{ color: "#FFD5C0", fontSize: "16px", margin: "0 0 32px" }}>
          Place your order before 10 AM for same-day delivery in Tirunelveli.
        </p>
        <Link
          href="/order"
          style={{
            background: "#fff",
            color: "#C8410A",
            textDecoration: "none",
            padding: "16px 40px",
            borderRadius: "10px",
            fontSize: "16px",
            fontWeight: 700,
            display: "inline-block",
          }}
        >
          Place Your Order →
        </Link>
      </section>
    </div>
  );
}