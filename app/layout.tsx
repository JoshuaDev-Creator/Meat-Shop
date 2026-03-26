import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "NattuKadai - Fresh Meat Delivery, Tirunelveli",
  description: "Order fresh chicken, mutton & quail. Delivered to your door in Tirunelveli.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <style>{`
          .nav-link {
            color: #D4B896;
            text-decoration: none;
            font-size: 14px;
            font-weight: 500;
            padding: 8px 16px;
            border-radius: 6px;
            transition: background 0.2s;
          }
          .nav-link:hover { background: #2D1500; }
          .nav-order-btn {
            background: #C8410A;
            color: #fff;
            text-decoration: none;
            font-size: 14px;
            font-weight: 600;
            padding: 9px 20px;
            border-radius: 8px;
            transition: background 0.2s;
          }
          .nav-order-btn:hover { background: #A83408; }
        `}</style>
      </head>
      <body style={{ margin: 0, fontFamily: "'DM Sans', sans-serif", background: "#FAF7F2" }}>
        <nav
          style={{
            background: "#1A0A00",
            padding: "0 2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "64px",
            position: "sticky",
            top: 0,
            zIndex: 100,
            borderBottom: "2px solid #C8410A",
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ fontSize: "22px" }}>🥩</span>
            <span
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#F5E6C8",
                fontSize: "20px",
                fontWeight: 700,
                letterSpacing: "-0.3px",
              }}
            >
              NattuKadai
            </span>
          </Link>

          {/* Nav Links */}
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/order" className="nav-order-btn">Order Now →</Link>
          </div>
        </nav>

        <main>{children}</main>

        <footer
          style={{
            background: "#1A0A00",
            color: "#7A5C42",
            textAlign: "center",
            padding: "2rem",
            fontSize: "13px",
            marginTop: "4rem",
          }}
        >
          <p style={{ margin: "0 0 4px" }}>
            <span style={{ color: "#D4B896", fontWeight: 600 }}>NattuKadai Fresh Meat</span> — Tirunelveli
          </p>
          <p style={{ margin: 0 }}>📞 +91 9025761741 &nbsp;|&nbsp; Delivery within Tirunelveli city limits</p>
        </footer>
      </body>
    </html>
  );
}