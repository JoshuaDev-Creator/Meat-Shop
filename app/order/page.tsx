"use client";
import { useState, useEffect } from "react";

const MEATS = [
    {
        id: "village_chicken",
        emoji: "🐔",
        name: "Village Chicken",
        tamil: "கிராம நாட்டுக்கோழி",
        badge: "🌿 Home Grown",
        badgeColor: "#166534",
        badgeBg: "#DCFCE7",
        desc: "Raised freely in village homes — not a farm. Slower grown, darker meat, richest flavour. Best for country chicken gravy.",
        pricePerKg: 380,
        unit: "kg",
        minQty: 0.5,
        step: 0.5,
        cuts: ["Whole", "Curry Cut", "Boneless", "Leg Pieces"],
    },
    {
        id: "farm_chicken",
        emoji: "🐓",
        name: "Farm Country Chicken",
        tamil: "பண்ணை நாட்டுக்கோழி",
        badge: "🏡 Farm Raised",
        badgeColor: "#92400E",
        badgeBg: "#FEF3C7",
        desc: "Country breed chicken raised on a farm — same desi breed as village chicken, more available, slightly lighter taste. Great value.",
        pricePerKg: 280,
        unit: "kg",
        minQty: 0.5,
        step: 0.5,
        cuts: ["Whole", "Curry Cut", "Boneless", "Leg Pieces", "Breast Pieces"],
    },
    {
        id: "broiler",
        emoji: "🍗",
        name: "Broiler Chicken",
        tamil: "பிராய்லர் கோழி",
        badge: "⚡ Everyday",
        badgeColor: "#1e40af",
        badgeBg: "#DBEAFE",
        desc: "Regular white chicken from the market. Soft meat, mild taste. Good for butter chicken, fry, or daily cooking.",
        pricePerKg: 180,
        unit: "kg",
        minQty: 1,
        step: 0.5,
        cuts: ["Whole", "Curry Cut", "Boneless", "Leg Pieces", "Breast Pieces"],
    },
    {
        id: "mutton",
        emoji: "🐑",
        name: "Mutton (Goat)",
        tamil: "ஆட்டு இறைச்சி",
        badge: null,
        badgeColor: "",
        badgeBg: "",
        desc: "Fresh goat meat from local farms. Perfect for Tirunelveli salna, kuzhambu & biryani.",
        pricePerKg: 780,
        unit: "kg",
        minQty: 0.5,
        step: 0.5,
        cuts: ["Curry Cut", "Chops", "Ribs", "Boneless", "Leg"],
    },
    {
        id: "quail",
        emoji: "🐦",
        name: "Quail (Kaada)",
        tamil: "காடை",
        badge: null,
        badgeColor: "",
        badgeBg: "",
        desc: "Small game bird — very tasty fried or in gravy. Whole cleaned. Minimum 2 pieces.",
        pricePerKg: 120,
        unit: "piece",
        minQty: 2,
        step: 1,
        cuts: ["Whole Cleaned", "Marinated", "Half Cut"],
    },
    {
        id: "turkey",
        emoji: "🦃",
        name: "Turkey",
        tamil: "வான்கோழி",
        badge: null,
        badgeColor: "",
        badgeBg: "",
        desc: "Large bird, meaty & flavourful. Good for special occasions. Minimum 1 kg.",
        pricePerKg: 450,
        unit: "kg",
        minQty: 1,
        step: 0.5,
        cuts: ["Whole", "Curry Cut", "Breast Pieces", "Leg"],
    },
    {
        id: "pigeon",
        emoji: "🕊️",
        name: "Pigeon (Parava)",
        tamil: "புறா",
        badge: null,
        badgeColor: "",
        badgeBg: "",
        desc: "Small bird, rich taste. Popular for health benefits. Whole cleaned. Minimum 2 pieces.",
        pricePerKg: 150,
        unit: "piece",
        minQty: 2,
        step: 1,
        cuts: ["Whole Cleaned", "Marinated"],
    },
    {
        id: "rabbit",
        emoji: "🐇",
        name: "Rabbit (Muyal)",
        tamil: "முயல்",
        badge: null,
        badgeColor: "",
        badgeBg: "",
        desc: "Lean, tasty meat. Low fat. Great for pepper fry or curry. Minimum 1 kg.",
        pricePerKg: 600,
        unit: "kg",
        minQty: 1,
        step: 0.5,
        cuts: ["Whole", "Curry Cut"],
    },
];

const OWNER_WHATSAPP = "919025761741";

type CartItem = {
    id: string;
    name: string;
    emoji: string;
    qty: number;
    unit: string;
    cut: string;
    price: number;
    subtotal: number;
};

export default function OrderPage() {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [selections, setSelections] = useState<Record<string, { qty: number; cut: string }>>(
        Object.fromEntries(MEATS.map((m) => [m.id, { qty: m.minQty, cut: m.cuts[0] }]))
    );
    const [step, setStep] = useState<"menu" | "details" | "confirm">("menu");
    const [form, setForm] = useState({ name: "", phone: "", address: "", time: "morning", notes: "" });
    const [submitted, setSubmitted] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    const getSel = (m: (typeof MEATS)[0]) =>
        selections[m.id] ?? { qty: m.minQty, cut: m.cuts[0] };

    const addToCart = (meat: (typeof MEATS)[0]) => {
        const sel = getSel(meat);
        const existing = cart.find((c) => c.id === meat.id && c.cut === sel.cut);
        const subtotal = parseFloat((sel.qty * meat.pricePerKg).toFixed(0));
        if (existing) {
            setCart(cart.map((c) =>
                c.id === meat.id && c.cut === sel.cut
                    ? { ...c, qty: parseFloat((c.qty + sel.qty).toFixed(1)), subtotal: c.subtotal + subtotal }
                    : c
            ));
        } else {
            setCart([...cart, {
                id: meat.id, name: meat.name, emoji: meat.emoji,
                qty: sel.qty, unit: meat.unit, cut: sel.cut,
                price: meat.pricePerKg, subtotal,
            }]);
        }
        if (isMobile) setCartOpen(true);
    };

    const removeFromCart = (idx: number) => setCart(cart.filter((_, i) => i !== idx));
    const total = cart.reduce((s, c) => s + c.subtotal, 0);
    const timeLabel = form.time === "morning" ? "Morning (7–12 PM)" : form.time === "afternoon" ? "Afternoon (12–5 PM)" : "Evening (5–8 PM)";

    const sendWhatsApp = () => {
        const itemLines = cart
            .map((item) => `  ${item.emoji} ${item.name} — ${item.qty} ${item.unit} (${item.cut}) = ₹${item.subtotal}`)
            .join("\n");
        const message = [
            "🥩 *NEW ORDER — NattuKadai*",
            "─────────────────────",
            "*Items:*",
            itemLines,
            "🥚 FREE country hen egg included",
            "─────────────────────",
            `💰 *Total: ₹${total}*`,
            "",
            "📦 *Delivery Details:*",
            `👤 Name: ${form.name}`,
            `📞 Phone: ${form.phone}`,
            `🏠 Address: ${form.address}`,
            `⏰ Time: ${timeLabel}`,
            ...(form.notes ? [`📝 Notes: ${form.notes}`] : []),
            "─────────────────────",
            "💳 Payment: Cash on Delivery",
        ].join("\n");
        window.open(`https://wa.me/${OWNER_WHATSAPP}?text=${encodeURIComponent(message)}`, "_blank");
    };

    const handleConfirm = () => { sendWhatsApp(); setSubmitted(true); };

    // ── Reusable cart contents ──────────────────────────────────────────
    const CartContents = ({ onProceed }: { onProceed: () => void }) => (
        <>
            {cart.length === 0 ? (
                <p style={{ color: "#A07850", fontSize: "14px", textAlign: "center", padding: "24px 0" }}>No items yet.</p>
            ) : (
                <>
                    {cart.map((item, i) => (
                        <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", padding: "10px 0", borderBottom: "1px solid #F5EDE0" }}>
                            <div>
                                <p style={{ margin: "0 0 2px", fontSize: "14px", fontWeight: 500, color: "#1A0A00" }}>{item.emoji} {item.name}</p>
                                <p style={{ margin: 0, fontSize: "12px", color: "#A07850" }}>{item.qty} {item.unit} · {item.cut}</p>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                <span style={{ fontWeight: 700, color: "#C8410A", fontSize: "14px" }}>₹{item.subtotal}</span>
                                <button onClick={() => removeFromCart(i)} style={{ background: "none", border: "none", cursor: "pointer", color: "#C05050", fontSize: "20px", lineHeight: 1, padding: "0 4px" }}>×</button>
                            </div>
                        </div>
                    ))}
                    {/* Free egg reminder */}
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "10px 0", borderBottom: "1px solid #F5EDE0" }}>
                        <span style={{ fontSize: "18px" }}>🥚</span>
                        <span style={{ fontSize: "13px", color: "#166534", fontWeight: 500 }}>1 Free country hen egg</span>
                        <span style={{ marginLeft: "auto", fontSize: "13px", color: "#166534", fontWeight: 600 }}>FREE</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", padding: "14px 0 16px", fontWeight: 700, color: "#1A0A00", fontSize: "16px" }}>
                        <span>Total</span><span style={{ color: "#C8410A" }}>₹{total}</span>
                    </div>
                    <button onClick={onProceed}
                        style={{ width: "100%", background: "#C8410A", color: "#fff", border: "none", padding: "13px", borderRadius: "10px", fontSize: "15px", fontWeight: 600, cursor: "pointer" }}>
                        Proceed to Details →
                    </button>
                </>
            )}
        </>
    );

    // ── Success screen ──────────────────────────────────────────────────
    if (submitted) {
        return (
            <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}>
                <div style={{ textAlign: "center", maxWidth: "480px", width: "100%" }}>
                    <div style={{ fontSize: "64px", marginBottom: "16px" }}>✅</div>
                    <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "28px", color: "#1A0A00", margin: "0 0 12px" }}>Order Sent!</h1>
                    <p style={{ color: "#5A4030", fontSize: "15px", lineHeight: 1.7, marginBottom: "8px" }}>
                        Your order was sent on WhatsApp. We'll call <strong>{form.phone}</strong> to confirm.
                    </p>
                    <p style={{ color: "#7A5C42", fontSize: "13px", marginBottom: "12px" }}>WhatsApp didn't open?</p>
                    <button onClick={sendWhatsApp} style={{ background: "#25D366", color: "#fff", border: "none", padding: "12px 28px", borderRadius: "10px", fontSize: "14px", fontWeight: 600, cursor: "pointer", marginBottom: "28px" }}>
                        📲 Re-send on WhatsApp
                    </button>
                    <div style={{ background: "#FFF8F2", border: "1px solid #EDE0D0", borderRadius: "12px", padding: "20px", marginBottom: "20px", textAlign: "left" }}>
                        {cart.map((item, i) => (
                            <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", borderBottom: "1px solid #F0E4D0", fontSize: "14px", color: "#3A2010" }}>
                                <span>{item.emoji} {item.name} — {item.qty}{item.unit} ({item.cut})</span>
                                <span style={{ fontWeight: 600 }}>₹{item.subtotal}</span>
                            </div>
                        ))}
                        <div style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", borderBottom: "1px solid #F0E4D0", fontSize: "14px", color: "#166534" }}>
                            <span>🥚 Free country hen egg</span><span style={{ fontWeight: 600 }}>FREE</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 700, color: "#C8410A", paddingTop: "12px", fontSize: "15px" }}>
                            <span>Total</span><span>₹{total}</span>
                        </div>
                    </div>
                    <button onClick={() => { setCart([]); setStep("menu"); setSubmitted(false); setForm({ name: "", phone: "", address: "", time: "morning", notes: "" }); }}
                        style={{ background: "#C8410A", color: "#fff", border: "none", padding: "14px 32px", borderRadius: "10px", fontSize: "15px", fontWeight: 600, cursor: "pointer" }}>
                        Place Another Order
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
            <style>{`
        @media (max-width: 767px) {
          .order-grid { display: block !important; }
          .desktop-cart { display: none !important; }
          .step-label { display: none !important; }
          .detail-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 768px) {
          .mobile-fab { display: none !important; }
          .mobile-sheet-overlay { display: none !important; }
        }
      `}</style>

            {/* ── FREE EGG OFFER BANNER ──────────────────────────────────── */}
            <div style={{
                background: "linear-gradient(90deg, #14532D 0%, #166534 100%)",
                padding: "14px 20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "12px",
                flexWrap: "wrap",
            }}>
                <span style={{ fontSize: "28px" }}>🥚</span>
                <div>
                    <p style={{ margin: 0, color: "#fff", fontWeight: 700, fontSize: "15px" }}>
                        FREE Country Hen Egg with Every Order!
                    </p>
                    <p style={{ margin: 0, color: "#86EFAC", fontSize: "13px" }}>
                        Fresh desi egg — நாட்டுக்கோழி முட்டை — included free with every delivery.
                    </p>
                </div>
                <span style={{ background: "#DCFCE7", color: "#166534", fontSize: "12px", fontWeight: 700, padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>
                    Limited Daily!
                </span>
            </div>

            <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "28px 1rem 120px" }}>

                {/* Progress steps */}
                <div style={{ display: "flex", gap: "6px", alignItems: "center", marginBottom: "32px" }}>
                    {(["menu", "details", "confirm"] as const).map((s, i) => {
                        const si = ["menu", "details", "confirm"].indexOf(step);
                        return (
                            <div key={s} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                                {i > 0 && <div style={{ width: "24px", height: "1px", background: si >= i ? "#C8410A" : "#EDE0D0" }} />}
                                <div style={{ width: "30px", height: "30px", borderRadius: "50%", flexShrink: 0, background: step === s ? "#C8410A" : si > i ? "#FFF0E8" : "#F5EDE0", border: `2px solid ${step === s || si > i ? "#C8410A" : "#EDE0D0"}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: 700, color: step === s ? "#fff" : "#C8410A" }}>
                                    {si > i ? "✓" : i + 1}
                                </div>
                                <span className="step-label" style={{ fontSize: "13px", fontWeight: 500, color: step === s ? "#1A0A00" : "#A07850" }}>
                                    {s === "menu" ? "Choose Meats" : s === "details" ? "Your Details" : "Confirm"}
                                </span>
                            </div>
                        );
                    })}
                </div>

                {/* ── STEP 1: CHOOSE MEATS ─────────────────────────────────── */}
                {step === "menu" && (
                    <div className="order-grid" style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: "28px", alignItems: "start" }}>

                        {/* Meat cards */}
                        <div>
                            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "26px", color: "#1A0A00", margin: "0 0 6px" }}>Choose Your Meat</h2>
                            <p style={{ color: "#7A5C42", fontSize: "14px", margin: "0 0 20px" }}>All meat is freshly slaughtered on order day — no frozen stock.</p>

                            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                                {MEATS.map((m) => (
                                    <div key={m.id} style={{ background: "#fff", border: "1px solid #EDE0D0", borderRadius: "14px", padding: "20px", position: "relative" }}>

                                        {/* Badge */}
                                        {m.badge && (
                                            <span style={{ display: "inline-block", background: m.badgeBg, color: m.badgeColor, fontSize: "11px", fontWeight: 700, padding: "3px 10px", borderRadius: "20px", marginBottom: "10px" }}>
                                                {m.badge}
                                            </span>
                                        )}

                                        <div style={{ display: "flex", gap: "14px", alignItems: "flex-start", marginBottom: "14px" }}>
                                            <span style={{ fontSize: "36px", flexShrink: 0 }}>{m.emoji}</span>
                                            <div style={{ flex: 1, minWidth: 0 }}>
                                                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", color: "#1A0A00", margin: "0 0 2px" }}>{m.name}</h3>
                                                <p style={{ color: "#A07850", fontSize: "12px", margin: "0 0 6px" }}>{m.tamil}</p>
                                                <p style={{ color: "#5A4030", fontSize: "13px", lineHeight: 1.6, margin: "0 0 8px" }}>{m.desc}</p>
                                                <span style={{ color: "#C8410A", fontWeight: 700, fontSize: "16px" }}>₹{m.pricePerKg} / {m.unit}</span>
                                            </div>
                                        </div>

                                        {/* Controls */}
                                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "12px" }}>
                                            <div>
                                                <label style={{ display: "block", fontSize: "11px", color: "#7A5C42", marginBottom: "5px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px" }}>
                                                    Quantity ({m.unit})
                                                </label>
                                                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                                    <button
                                                        onClick={() => setSelections((s) => ({ ...s, [m.id]: { ...(s[m.id] ?? { qty: m.minQty, cut: m.cuts[0] }), qty: Math.max(m.minQty, parseFloat(((s[m.id]?.qty ?? m.minQty) - m.step).toFixed(1))) } }))}
                                                        style={{ width: "34px", height: "34px", borderRadius: "8px", border: "1px solid #EDE0D0", background: "#FAF7F2", cursor: "pointer", fontSize: "18px", color: "#5A3520", display: "flex", alignItems: "center", justifyContent: "center" }}>−</button>
                                                    <span style={{ minWidth: "36px", textAlign: "center", fontWeight: 600, color: "#1A0A00", fontSize: "15px" }}>{getSel(m).qty}</span>
                                                    <button
                                                        onClick={() => setSelections((s) => ({ ...s, [m.id]: { ...(s[m.id] ?? { qty: m.minQty, cut: m.cuts[0] }), qty: parseFloat(((s[m.id]?.qty ?? m.minQty) + m.step).toFixed(1)) } }))}
                                                        style={{ width: "34px", height: "34px", borderRadius: "8px", border: "1px solid #EDE0D0", background: "#FAF7F2", cursor: "pointer", fontSize: "18px", color: "#5A3520", display: "flex", alignItems: "center", justifyContent: "center" }}>+</button>
                                                </div>
                                            </div>
                                            <div>
                                                <label style={{ display: "block", fontSize: "11px", color: "#7A5C42", marginBottom: "5px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px" }}>
                                                    Cut Type
                                                </label>
                                                <select
                                                    value={getSel(m).cut}
                                                    onChange={(e) => setSelections((s) => ({ ...s, [m.id]: { ...(s[m.id] ?? { qty: m.minQty, cut: m.cuts[0] }), cut: e.target.value } }))}
                                                    style={{ width: "100%", padding: "8px 10px", borderRadius: "8px", border: "1px solid #EDE0D0", background: "#FAF7F2", fontSize: "13px", color: "#3A2010", height: "34px" }}>
                                                    {m.cuts.map((c) => <option key={c}>{c}</option>)}
                                                </select>
                                            </div>
                                        </div>

                                        <button onClick={() => addToCart(m)}
                                            style={{ width: "100%", background: "#C8410A", color: "#fff", border: "none", padding: "11px", borderRadius: "8px", fontSize: "14px", fontWeight: 600, cursor: "pointer" }}>
                                            + Add — ₹{(getSel(m).qty * m.pricePerKg).toFixed(0)}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Desktop cart sidebar */}
                        <div className="desktop-cart" style={{ position: "sticky", top: "84px" }}>
                            <div style={{ background: "#fff", border: "1px solid #EDE0D0", borderRadius: "14px", padding: "24px" }}>
                                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", color: "#1A0A00", margin: "0 0 16px" }}>🛒 Your Order</h3>
                                <CartContents onProceed={() => setStep("details")} />
                            </div>
                        </div>
                    </div>
                )}

                {/* ── STEP 2: DETAILS ──────────────────────────────────────── */}
                {step === "details" && (
                    <div style={{ maxWidth: "520px" }}>
                        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "26px", color: "#1A0A00", margin: "0 0 6px" }}>Delivery Details</h2>
                        <p style={{ color: "#7A5C42", fontSize: "14px", marginBottom: "24px" }}>We'll call to confirm before dispatching.</p>

                        {[
                            { id: "name", label: "Full Name", placeholder: "Your name", type: "text" },
                            { id: "phone", label: "Phone Number", placeholder: "+91 XXXXX XXXXX", type: "tel" },
                            { id: "address", label: "Delivery Address", placeholder: "Street, area — Tirunelveli", type: "text" },
                        ].map((f) => (
                            <div key={f.id} style={{ marginBottom: "18px" }}>
                                <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#5A3520", marginBottom: "7px" }}>{f.label}</label>
                                <input type={f.type} placeholder={f.placeholder} value={(form as any)[f.id]}
                                    onChange={(e) => setForm((prev) => ({ ...prev, [f.id]: e.target.value }))}
                                    style={{ width: "100%", padding: "12px 14px", borderRadius: "10px", border: "1px solid #EDE0D0", background: "#FAF7F2", fontSize: "14px", color: "#1A0A00", boxSizing: "border-box" }} />
                            </div>
                        ))}

                        <div style={{ marginBottom: "18px" }}>
                            <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#5A3520", marginBottom: "7px" }}>Preferred Delivery Time</label>
                            <div className="detail-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "8px" }}>
                                {[["morning", "🌅", "Morning", "7 AM – 12 PM"], ["afternoon", "☀️", "Afternoon", "12 – 5 PM"], ["evening", "🌆", "Evening", "5 – 8 PM"]].map(([val, icon, label, sub]) => (
                                    <button key={val} onClick={() => setForm((f) => ({ ...f, time: val }))}
                                        style={{ padding: "10px 8px", borderRadius: "10px", fontSize: "12px", fontWeight: 500, cursor: "pointer", background: form.time === val ? "#FFF0E8" : "#FAF7F2", border: `1.5px solid ${form.time === val ? "#C8410A" : "#EDE0D0"}`, color: form.time === val ? "#C8410A" : "#7A5C42", textAlign: "center" }}>
                                        <div style={{ fontSize: "18px", marginBottom: "2px" }}>{icon}</div>
                                        <div style={{ fontWeight: 600 }}>{label}</div>
                                        <div style={{ fontSize: "11px", opacity: 0.8 }}>{sub}</div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div style={{ marginBottom: "24px" }}>
                            <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#5A3520", marginBottom: "7px" }}>Special Instructions <span style={{ fontWeight: 400, color: "#A07850" }}>(optional)</span></label>
                            <textarea placeholder="e.g. Extra spicy marination, remove skin, extra clean..." value={form.notes}
                                onChange={(e) => setForm((f) => ({ ...f, notes: e.target.value }))} rows={3}
                                style={{ width: "100%", padding: "12px 14px", borderRadius: "10px", border: "1px solid #EDE0D0", background: "#FAF7F2", fontSize: "14px", color: "#1A0A00", resize: "none", boxSizing: "border-box" }} />
                        </div>

                        <div style={{ display: "flex", gap: "10px" }}>
                            <button onClick={() => setStep("menu")} style={{ flex: 1, padding: "13px", borderRadius: "10px", border: "1.5px solid #EDE0D0", background: "#FAF7F2", fontSize: "14px", fontWeight: 600, cursor: "pointer", color: "#5A3520" }}>← Back</button>
                            <button onClick={() => { if (form.name && form.phone && form.address) setStep("confirm"); }}
                                disabled={!form.name || !form.phone || !form.address}
                                style={{ flex: 2, padding: "13px", borderRadius: "10px", border: "none", background: form.name && form.phone && form.address ? "#C8410A" : "#EDE0D0", color: form.name && form.phone && form.address ? "#fff" : "#A07850", fontSize: "14px", fontWeight: 600, cursor: form.name && form.phone && form.address ? "pointer" : "not-allowed" }}>
                                Review Order →
                            </button>
                        </div>
                    </div>
                )}

                {/* ── STEP 3: CONFIRM ──────────────────────────────────────── */}
                {step === "confirm" && (
                    <div style={{ maxWidth: "520px" }}>
                        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "26px", color: "#1A0A00", margin: "0 0 20px" }}>Confirm Your Order</h2>

                        <div style={{ background: "#fff", border: "1px solid #EDE0D0", borderRadius: "14px", padding: "20px", marginBottom: "16px" }}>
                            <h4 style={{ color: "#A07850", fontSize: "11px", letterSpacing: "1px", fontWeight: 600, margin: "0 0 12px", textTransform: "uppercase" }}>Items</h4>
                            {cart.map((item, i) => (
                                <div key={i} style={{ display: "flex", justifyContent: "space-between", fontSize: "14px", padding: "7px 0", borderBottom: "1px solid #F5EDE0", color: "#3A2010" }}>
                                    <span>{item.emoji} {item.name} · {item.qty}{item.unit} · {item.cut}</span>
                                    <span style={{ fontWeight: 600, flexShrink: 0, paddingLeft: "8px" }}>₹{item.subtotal}</span>
                                </div>
                            ))}
                            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px", padding: "7px 0", borderBottom: "1px solid #F5EDE0", color: "#166534" }}>
                                <span>🥚 Free country hen egg</span>
                                <span style={{ fontWeight: 600 }}>FREE</span>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 700, color: "#C8410A", paddingTop: "12px", fontSize: "16px" }}>
                                <span>Total</span><span>₹{total}</span>
                            </div>
                        </div>

                        <div style={{ background: "#fff", border: "1px solid #EDE0D0", borderRadius: "14px", padding: "20px", marginBottom: "16px" }}>
                            <h4 style={{ color: "#A07850", fontSize: "11px", letterSpacing: "1px", fontWeight: 600, margin: "0 0 12px", textTransform: "uppercase" }}>Delivery Details</h4>
                            {[["Name", form.name], ["Phone", form.phone], ["Address", form.address], ["Time", timeLabel], ...(form.notes ? [["Notes", form.notes]] : [])].map(([k, v]) => (
                                <div key={k} style={{ display: "flex", gap: "12px", padding: "5px 0", fontSize: "14px" }}>
                                    <span style={{ color: "#A07850", minWidth: "65px", fontWeight: 500, flexShrink: 0 }}>{k}</span>
                                    <span style={{ color: "#1A0A00" }}>{v}</span>
                                </div>
                            ))}
                        </div>

                        <div style={{ background: "#F0FDF4", border: "1px solid #BBF7D0", borderRadius: "10px", padding: "14px 16px", marginBottom: "16px", display: "flex", gap: "10px", alignItems: "flex-start" }}>
                            <span style={{ fontSize: "20px", flexShrink: 0 }}>📲</span>
                            <p style={{ margin: 0, fontSize: "13px", color: "#166534", lineHeight: 1.6 }}>
                                Clicking <strong>"Confirm & Send"</strong> will open WhatsApp with your order details ready. Just press <strong>Send</strong> — we'll call you to confirm.
                            </p>
                        </div>

                        <p style={{ color: "#7A5C42", fontSize: "13px", marginBottom: "18px" }}>💳 Payment: <strong>Cash on Delivery</strong></p>

                        <div style={{ display: "flex", gap: "10px" }}>
                            <button onClick={() => setStep("details")} style={{ flex: 1, padding: "13px", borderRadius: "10px", border: "1.5px solid #EDE0D0", background: "#FAF7F2", fontSize: "14px", fontWeight: 600, cursor: "pointer", color: "#5A3520" }}>← Back</button>
                            <button onClick={handleConfirm}
                                style={{ flex: 2, padding: "13px", borderRadius: "10px", border: "none", background: "#25D366", color: "#fff", fontSize: "15px", fontWeight: 700, cursor: "pointer" }}>
                                📲 Confirm & Send on WhatsApp
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* ── MOBILE FLOATING CART BUTTON ──────────────────────────── */}
            {step === "menu" && cart.length > 0 && (
                <div className="mobile-fab" style={{ position: "fixed", bottom: "24px", left: "50%", transform: "translateX(-50%)", zIndex: 200, width: "calc(100% - 32px)", maxWidth: "400px" }}>
                    <button onClick={() => setCartOpen(true)}
                        style={{ width: "100%", background: "#C8410A", color: "#fff", border: "none", padding: "15px 20px", borderRadius: "14px", fontSize: "15px", fontWeight: 700, cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", boxShadow: "0 4px 20px rgba(200,65,10,0.4)" }}>
                        <span>🛒 View Order ({cart.length} item{cart.length > 1 ? "s" : ""})</span>
                        <span>₹{total} →</span>
                    </button>
                </div>
            )}

            {/* ── MOBILE CART BOTTOM SHEET ─────────────────────────────── */}
            {cartOpen && (
                <div className="mobile-sheet-overlay" style={{ position: "fixed", inset: 0, zIndex: 300, display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                    <div onClick={() => setCartOpen(false)} style={{ flex: 1, background: "rgba(0,0,0,0.45)" }} />
                    <div style={{ background: "#fff", borderRadius: "20px 20px 0 0", padding: "20px", maxHeight: "80vh", overflowY: "auto" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", color: "#1A0A00", margin: 0 }}>🛒 Your Order</h3>
                            <button onClick={() => setCartOpen(false)} style={{ background: "none", border: "none", fontSize: "22px", cursor: "pointer", color: "#7A5C42" }}>✕</button>
                        </div>
                        <CartContents onProceed={() => { setCartOpen(false); setStep("details"); }} />
                    </div>
                </div>
            )}
        </div>
    );
}