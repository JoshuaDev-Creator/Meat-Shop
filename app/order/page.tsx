"use client";

/* eslint-disable react/no-unescaped-entities */

import { useState, useEffect } from "react";

type Meat = {
    id: string;

    emoji: string;

    name: string;

    tamil: string;

    subTamil: string;

    badge: string | null;

    badgeColor: string;

    badgeBg: string;

    highlight: string | null;

    desc: string;

    pricePerKg: number;

    unit: "kg" | "piece";

    minQty: number;

    step: number;

    cuts: string[];

    image: string;

    accent: string;
};

type CartItem = {
    id: string;

    name: string;

    emoji: string;

    qty: number;

    unit: "kg" | "piece";

    cut: string;

    price: number;

    subtotal: number;
};

type Selection = { qty: number; cut: string };

type FormData = {
    name: string;
    phone: string;
    address: string;
    time: "morning" | "afternoon" | "evening";
    notes: string;
};

type CartContentsProps = {
    cart: CartItem[];
    removeFromCart: (idx: number) => void;
    total: number;
    onProceed: () => void;
};

function CartContents({
    cart,
    removeFromCart,
    total,
    onProceed,
}: CartContentsProps) {
    return (
        <>
            {cart.length === 0 ? (
                <div className="text-center py-8">
                    <div className="text-4xl mb-2.5">🛒</div>

                    <p className="text-[#78716C] text-sm font-['Tiro_Tamil']">
                        இன்னும் எதுவும் சேர்க்கவில்லை
                    </p>

                    <p className="text-[#A8A29E] text-xs">
                        No items yet — add some meat!
                    </p>
                </div>
            ) : (
                <>
                    {cart.map((item, i) => (
                        <div
                            key={i}
                            className="flex justify-between items-start py-3 border-b border-[#F5EDE0]"
                        >
                            <div className="flex-1">
                                <p className="m-0 mb-0.5 text-sm font-semibold text-[#1A0800] font-['Oswald'] tracking-[0.03em]">
                                    {item.emoji} {item.name}
                                </p>

                                <p className="m-0 text-xs text-[#78716C] font-['Tiro_Tamil']">
                                    {item.qty} {item.unit} · {item.cut}
                                </p>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="font-bold text-[#7C2D12] text-[15px] font-['Oswald']">
                                    ₹{item.subtotal}
                                </span>

                                <button
                                    onClick={() => removeFromCart(i)}
                                    className="bg-[#FEF2F2] border border-[#FECACA] cursor-pointer text-[#DC2626] text-sm leading-none px-2 py-0.5 rounded-md"
                                >
                                    ×
                                </button>
                            </div>
                        </div>
                    ))}

                    {/* Free egg */}

                    <div className="flex items-center gap-2 py-2.5 border-b border-[#F5EDE0] bg-transparent">
                        <span className="text-xl">🥚</span>

                        <div className="flex-1">
                            <span className="text-sm text-[#14532D] font-semibold">
                                Free Country Hen Egg
                            </span>

                            <p className="m-0 text-[11px] font-['Tiro_Tamil'] text-[#16A34A]">
                                இலவச நாட்டுக்கோழி முட்டை
                            </p>
                        </div>

                        <span className="text-sm text-[#14532D] font-bold bg-[#DCFCE7] px-2.5 py-0.5 rounded-full">
                            FREE
                        </span>
                    </div>

                    {/* Halal assurance */}

                    <div className="flex items-center gap-2 py-2.5 border-b border-[#F5EDE0]">
                        <span className="text-lg">☪️</span>

                        <span className="text-xs text-[#14532D] font-['Oswald'] tracking-[0.05em]">
                            100% HALAL CERTIFIED
                        </span>
                    </div>

                    <div className="flex justify-between py-4 pb-1 font-bold text-[#1A0800] text-lg font-['Oswald'] tracking-[0.02em]">
                        <span>TOTAL</span>

                        <span className="text-[#7C2D12]">₹{total}</span>
                    </div>

                    <p className="m-0 mb-3.5 text-[11px] text-[#78716C]">
                        ⏱️ Cut 30 min before delivery · 🌿 Banana leaf packed
                    </p>

                    <button
                        onClick={onProceed}
                        className="w-full bg-[#7C2D12] text-white border-none p-3.5 rounded-xl text-[15px] font-bold cursor-pointer font-['Oswald'] tracking-[0.08em]"
                    >
                        PROCEED TO DETAILS →
                    </button>
                </>
            )}
        </>
    );
}

const MEATS: Meat[] = [
    {
        id: "village_chicken",

        emoji: "🐔",

        name: "Village Chicken",

        tamil: "கிராம நாட்டுக்கோழி",

        subTamil: "வீட்டு வளர்ப்பு",

        badge: "🌿 Home Grown",

        badgeColor: "#14532D",

        badgeBg: "#DCFCE7",

        highlight: "Most Popular",

        desc: "Raised freely in village homes — not a farm. Slower grown, darker meat, richest flavour. Best for country chicken gravy.",

        pricePerKg: 700,

        unit: "kg",

        minQty: 0.5,

        step: 0.5,

        cuts: ["Whole", "Curry Cut", "Boneless", "Leg Pieces"],

        image:
            "https://images.unsplash.com/photo-1501200291289-c5a76c232e5f?q=80&w=400",

        accent: "#14532D",
    },

    {
        id: "farm_chicken",

        emoji: "🐓",

        name: "Farm Country Chicken",

        tamil: "பண்ணை நாட்டுக்கோழி",

        subTamil: "பண்ணை வளர்ப்பு",

        badge: "🏡 Farm Raised",

        badgeColor: "#92400E",

        badgeBg: "#FEF3C7",

        highlight: null,

        desc: "Country breed chicken raised on a farm — same desi breed as village chicken, more available, slightly lighter taste. Great value.",

        pricePerKg: 300,

        unit: "kg",

        minQty: 0.5,

        step: 0.5,

        cuts: ["Whole", "Curry Cut", "Boneless", "Leg Pieces", "Breast Pieces"],

        image:
            "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=400",

        accent: "#92400E",
    },

    {
        id: "broiler",

        emoji: "🍗",

        name: "Broiler Chicken",

        tamil: "பிராய்லர் கோழி",

        subTamil: "அன்றாட சமையல்",

        badge: "⚡ Everyday",

        badgeColor: "#1e40af",

        badgeBg: "#DBEAFE",

        highlight: null,

        desc: "Regular white chicken from the market. Soft meat, mild taste. Good for butter chicken, fry, or daily cooking.",

        pricePerKg: 250,

        unit: "kg",

        minQty: 1,

        step: 0.5,

        cuts: ["Whole", "Curry Cut", "Boneless", "Leg Pieces", "Breast Pieces"],

        image:
            "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?q=80&w=400",

        accent: "#1e40af",
    },

    {
        id: "mutton",

        emoji: "🐑",

        name: "Mutton (Goat)",

        tamil: "ஆட்டு இறைச்சி",

        subTamil: "உள்ளூர் பண்ணை ஆடு",

        badge: "⭐ Premium",

        badgeColor: "#78350F",

        badgeBg: "#FEF3C7",

        highlight: null,

        desc: "Fresh goat meat from local Nellai farms. Perfect for Tirunelveli salna, kuzhambu & biryani.",

        pricePerKg: 1000,

        unit: "kg",

        minQty: 0.5,

        step: 0.5,

        cuts: ["Curry Cut", "Chops", "Ribs", "Boneless", "Leg"],

        image:
            "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=400",

        accent: "#78350F",
    },

    {
        id: "quail",

        emoji: "🐦",

        name: "Quail (Kaada)",

        tamil: "காடை",

        subTamil: "நெல்லை சிறப்பு",

        badge: "🔥 Nellai Special",

        badgeColor: "#7C2D12",

        badgeBg: "#FEE2E2",

        highlight: null,

        desc: "Small game bird — very tasty fried or in gravy. Whole cleaned. Minimum 2 pieces.",

        pricePerKg: 140,

        unit: "piece",

        minQty: 2,

        step: 1,

        cuts: ["Whole Cleaned", "Marinated", "Half Cut"],

        image:
            "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=400",

        accent: "#7C2D12",
    },

    {
        id: "turkey",

        emoji: "🦃",

        name: "Turkey",

        tamil: "வான்கோழி",

        subTamil: "சிறப்பு நிகழ்வுகளுக்கு",

        badge: null,

        badgeColor: "",

        badgeBg: "",

        highlight: null,

        desc: "Large bird, meaty & flavourful. Good for special occasions. Minimum 1 kg.",

        pricePerKg: 700,

        unit: "kg",

        minQty: 1,

        step: 0.5,

        cuts: ["Whole", "Curry Cut", "Breast Pieces", "Leg"],

        image:
            "https://images.unsplash.com/photo-1574672280600-4accfa5b6f98?q=80&w=400",

        accent: "#5B4A00",
    },

    {
        id: "pigeon",

        emoji: "🕊️",

        name: "Pigeon (Parava)",

        tamil: "புறா",

        subTamil: "ஆரோக்கியமான இறைச்சி",

        badge: null,

        badgeColor: "",

        badgeBg: "",

        highlight: null,

        desc: "Small bird, rich taste. Popular for health benefits. Whole cleaned. Minimum 2 pieces.",

        pricePerKg: 360,

        unit: "piece",

        minQty: 2,

        step: 1,

        cuts: ["Whole Cleaned", "Marinated"],

        image:
            "https://images.unsplash.com/photo-1518492104633-130d0cc84637?q=80&w=400",

        accent: "#374151",
    },

    {
        id: "rabbit",

        emoji: "🐇",

        name: "Rabbit (Muyal)",

        tamil: "முயல்",

        subTamil: "கொழுப்பு இல்லாத இறைச்சி",

        badge: null,

        badgeColor: "",

        badgeBg: "",

        highlight: null,

        desc: "Lean, tasty meat. Low fat. Great for pepper fry or curry. Minimum 1 kg.",

        pricePerKg: 500,

        unit: "kg",

        minQty: 1,

        step: 0.5,

        cuts: ["Whole", "Curry Cut"],

        image:
            "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?q=80&w=400",

        accent: "#5C3317",
    },
];

const OWNER_WHATSAPP_1 = "919025761741";

const OWNER_WHATSAPP_2 = "917358873217";

export default function OrderPage() {
    const [cart, setCart] = useState<CartItem[]>([]);

    const [selections, setSelections] = useState<Record<string, Selection>>(
        Object.fromEntries(
            MEATS.map((m) => [m.id, { qty: m.minQty, cut: m.cuts[0] }]),
        ),
    );

    const [step, setStep] = useState<"menu" | "details" | "confirm">("menu");

    const [form, setForm] = useState<FormData>({
        name: "",
        phone: "",
        address: "",
        time: "morning",
        notes: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const [cartOpen, setCartOpen] = useState(false);

    const [addedId, setAddedId] = useState<string | null>(null);

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);

        check();

        window.addEventListener("resize", check);

        return () => window.removeEventListener("resize", check);
    }, []);

    const getSel = (m: Meat): Selection =>
        selections[m.id] ?? { qty: m.minQty, cut: m.cuts[0] };

    const addToCart = (meat: Meat) => {
        const sel = getSel(meat);

        const subtotal = parseFloat((sel.qty * meat.pricePerKg).toFixed(0));

        setCart((prev) => {
            const existing = prev.find((c) => c.id === meat.id && c.cut === sel.cut);

            if (existing) {
                return prev.map((c) =>
                    c.id === meat.id && c.cut === sel.cut
                        ? {
                            ...c,
                            qty: parseFloat((c.qty + sel.qty).toFixed(1)),
                            subtotal: c.subtotal + subtotal,
                        }
                        : c,
                );
            }

            return [
                ...prev,
                {
                    id: meat.id,
                    name: meat.name,
                    emoji: meat.emoji,
                    qty: sel.qty,
                    unit: meat.unit,
                    cut: sel.cut,
                    price: meat.pricePerKg,
                    subtotal,
                },
            ];
        });

        setAddedId(meat.id);

        setTimeout(() => setAddedId(null), 1200);

        if (isMobile) setCartOpen(true);
    };

    const removeFromCart = (idx: number) =>
        setCart((c) => c.filter((_, i) => i !== idx));

    const total = cart.reduce((s, c) => s + c.subtotal, 0);

    const timeLabel =
        form.time === "morning"
            ? "Morning (7–12 PM)"
            : form.time === "afternoon"
                ? "Afternoon (12–5 PM)"
                : "Evening (5–8 PM)";

    const sendWhatsApp = () => {
        const itemLines = cart
            .map(
                (item) =>
                    `  ${item.emoji} ${item.name} — ${item.qty} ${item.unit} (${item.cut}) = ₹${item.subtotal}`,
            )
            .join("\n");

        const message = [
            "☪️ *NEW ORDER — NaattuKadai* 🥩",

            "━━━━━━━━━━━━━━━━━━━━━━━",

            "*100% HALAL | No Refrigeration | Banana Leaf Packed*",

            "",

            "*🛒 Items:*",

            itemLines,

            "🥚 FREE country hen egg included",

            "━━━━━━━━━━━━━━━━━━━━━━━",

            `💰 *Total: ₹${total}*`,

            "",

            "📦 *Delivery Details:*",

            `👤 Name: ${form.name}`,

            `📞 Phone: ${form.phone}`,

            `🏠 Address: ${form.address}`,

            `⏰ Time: ${timeLabel}`,

            `⏱️ Note: Meat will be cut 30 minutes before delivery`,

            ...(form.notes ? [`📝 Notes: ${form.notes}`] : []),

            "━━━━━━━━━━━━━━━━━━━━━━━",

            "💳 Payment: Cash on Delivery",
        ].join("\n");

        const encoded = encodeURIComponent(message);

        window.open(`https://wa.me/${OWNER_WHATSAPP_1}?text=${encoded}`, "_blank");

        setTimeout(
            () =>
                window.open(
                    `https://wa.me/${OWNER_WHATSAPP_2}?text=${encoded}`,
                    "_blank",
                ),
            500,
        );
    };

    const handleConfirm = () => {
        sendWhatsApp();
        setSubmitted(true);
    };

    // SUCCESS SCREEN

    if (submitted) {
        return (
            <div className="font-serif min-h-[70vh] flex items-center justify-center p-8 bg-[#FBF7F0]">
                <div className="text-center max-w-md w-full">
                    <div className="w-22.5 h-22.5 bg-[#DCFCE7] rounded-full flex items-center justify-center text-5xl mx-auto mb-6">
                        ✅
                    </div>

                    <h1 className="font-['Oswald'] text-4xl text-[#1A0800] m-0 mb-2 tracking-[0.05em]">
                        ORDER SENT!
                    </h1>

                    <p className="font-['Tiro_Tamil'] text-[#C8410A] mb-4">
                        உங்கள் ஆர்டர் அனுப்பப்பட்டது
                    </p>

                    <p className="text-gray-700 text-base leading-relaxed mb-6">
                        Sent on WhatsApp. We'll call{" "}
                        <strong className="text-[#1A0800]">{form.phone}</strong> to confirm
                        your order.
                    </p>

                    <div className="bg-white border border-[#E8D8C0] rounded-3xl p-5 mb-5 text-left">
                        {cart.map((item, i) => (
                            <div
                                key={i}
                                className="flex justify-between py-2 border-b border-[#F5EDE0] text-sm text-[#3A2010] font-['Oswald'] tracking-[0.02em]"
                            >
                                <span>
                                    {item.emoji} {item.name} · {item.qty}
                                    {item.unit} · {item.cut}
                                </span>

                                <span className="font-bold">₹{item.subtotal}</span>
                            </div>
                        ))}

                        <div className="flex justify-between py-2 border-b border-[#F5EDE0] text-sm text-[#14532D]">
                            <span>🥚 Free country hen egg</span>
                            <span className="font-bold">FREE</span>
                        </div>

                        <div className="flex justify-between font-['Oswald'] text-2xl text-[#7C2D12] pt-3">
                            <span>TOTAL</span>
                            <span>₹{total}</span>
                        </div>
                    </div>

                    <button
                        onClick={sendWhatsApp}
                        className="bg-[#25D366] text-white border-none py-3.5 px-8 rounded-xl text-sm font-bold cursor-pointer mb-3 w-full font-['Oswald'] tracking-[0.08em]"
                    >
                        📲 RE-SEND ON WHATSAPP
                    </button>

                    <button
                        onClick={() => {
                            setCart([]);
                            setStep("menu");
                            setSubmitted(false);
                            setForm({
                                name: "",
                                phone: "",
                                address: "",
                                time: "morning",
                                notes: "",
                            });
                        }}
                        className="bg-[#7C2D12] text-white border-none py-3.5 px-8 rounded-xl text-sm font-bold cursor-pointer w-full font-['Oswald'] tracking-[0.08em]"
                    >
                        + PLACE ANOTHER ORDER
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="font-['Lora'] bg-[#FBF7F0] min-h-screen">
            {/* ANNOUNCEMENT TICKER */}

            <div className="bg-[#14532D] text-[#BBF7D0] py-2.5 text-xs font-['Oswald'] tracking-[0.06em] overflow-hidden whitespace-nowrap">
                <div className="inline-flex animate-[ticker_30s_linear_infinite]">
                    {[...Array(2)].map((_, r) => (
                        <span
                            key={r}
                            style={{
                                display: "inline-flex",
                                gap: "50px",
                                paddingRight: "50px",
                            }}
                        >
                            <span>☪️ 100% HALAL CERTIFIED</span>

                            <span>⏱️ டெலிவரிக்கு 30 நிமிடம் முன் வதிக்கப்படுகிறது</span>

                            <span>🥚 FREE COUNTRY HEN EGG WITH EVERY ORDER</span>

                            <span>🚫❄️ ZERO REFRIGERATION — EVER</span>

                            <span>🌿 வாழை இலை சுற்றி — BANANA LEAF PACKED</span>
                        </span>
                    ))}
                </div>
            </div>

            {/* PAGE HEADER */}
            <div className="bg-[#1A0800] border-b-[3px] border-b-[#C8410A] px-4 md:px-10 pt-8 pb-7">
                <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
                    <p
                        style={{
                            fontFamily: "'Tiro Tamil', serif",
                            color: "#FCA5A5",
                            fontSize: "14px",
                            marginBottom: "6px",
                        }}
                    >
                        இன்றே ஆர்டர் செய்யுங்கள்
                    </p>

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "flex-end",
                            flexWrap: "wrap",
                            gap: "16px",
                        }}
                    >
                        <h1
                            style={{
                                fontFamily: "'Oswald', sans-serif",
                                fontSize: "clamp(32px, 5vw, 48px)",
                                color: "#FBF7F0",
                                letterSpacing: "-0.01em",
                                lineHeight: 1,
                            }}
                        >
                            PLACE YOUR ORDER
                        </h1>

                        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                            <div
                                style={{
                                    background: "#1A3A2A",
                                    border: "1px solid #16A34A",
                                    borderRadius: "8px",
                                    padding: "8px 16px",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "8px",
                                }}
                            >
                                <span style={{ fontSize: "16px" }}>☪️</span>

                                <span
                                    style={{
                                        fontFamily: "'Oswald', sans-serif",
                                        fontSize: "13px",
                                        color: "#86EFAC",
                                        letterSpacing: "0.08em",
                                    }}
                                >
                                    HALAL
                                </span>
                            </div>

                            <div
                                style={{
                                    background: "rgba(255,255,255,0.08)",
                                    border: "1px solid rgba(255,255,255,0.15)",
                                    borderRadius: "8px",
                                    padding: "8px 16px",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "8px",
                                }}
                            >
                                <span
                                    style={{
                                        width: "8px",
                                        height: "8px",
                                        background: "#22C55E",
                                        borderRadius: "50%",
                                        display: "inline-block",
                                        animation: "pulse-dot 1.5s infinite",
                                    }}
                                ></span>

                                <span
                                    style={{
                                        fontFamily: "'Oswald', sans-serif",
                                        fontSize: "13px",
                                        color: "#FBF7F0",
                                        letterSpacing: "0.08em",
                                    }}
                                >
                                    LIVE ORDERS OPEN
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Progress Steps */}

                    <div
                        style={{
                            display: "flex",
                            gap: "8px",
                            alignItems: "center",
                            marginTop: "24px",
                        }}
                    >
                        {["menu", "details", "confirm"].map((s, i) => {
                            const si = ["menu", "details", "confirm"].indexOf(step);

                            const isActive = step === s;

                            const isDone = si > i;

                            return (
                                <div
                                    key={s}
                                    style={{ display: "flex", alignItems: "center", gap: "8px" }}
                                >
                                    {i > 0 && (
                                        <div
                                            style={{
                                                width: "32px",
                                                height: "2px",
                                                background: isDone
                                                    ? "#C8410A"
                                                    : "rgba(255,255,255,0.2)",
                                                borderRadius: "2px",
                                                transition: "background 0.4s",
                                            }}
                                        />
                                    )}

                                    <div
                                        className="step-dot"
                                        style={{
                                            width: "32px",
                                            height: "32px",
                                            borderRadius: "50%",
                                            flexShrink: 0,
                                            background: isActive
                                                ? "#C8410A"
                                                : isDone
                                                    ? "#7C2D12"
                                                    : "rgba(255,255,255,0.08)",
                                            border: `2px solid ${isActive || isDone ? "#C8410A" : "rgba(255,255,255,0.2)"}`,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontSize: "13px",
                                            fontWeight: 700,
                                            color: isActive
                                                ? "#fff"
                                                : isDone
                                                    ? "#FCA5A5"
                                                    : "rgba(255,255,255,0.4)",
                                            fontFamily: "'Oswald', sans-serif",
                                        }}
                                    >
                                        {isDone ? "✓" : i + 1}
                                    </div>

                                    <span
                                        className="step-label"
                                        style={{
                                            fontSize: "12px",
                                            fontFamily: "'Oswald', sans-serif",
                                            letterSpacing: "0.08em",
                                            color: isActive ? "#FBF7F0" : "rgba(255,255,255,0.4)",
                                        }}
                                    >
                                        {s === "menu"
                                            ? "CHOOSE MEATS"
                                            : s === "details"
                                                ? "YOUR DETAILS"
                                                : "CONFIRM"}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* FREE EGG BANNER */}

            <div
                style={{
                    background: "#FEF9C3",
                    borderBottom: "2px dashed #CA8A04",
                    padding: "12px 40px",
                }}
            >
                <div
                    style={{
                        maxWidth: "1100px",
                        margin: "0 auto",
                        display: "flex",
                        alignItems: "center",
                        gap: "14px",
                        flexWrap: "wrap",
                    }}
                >
                    <span style={{ fontSize: "28px" }}>🥚</span>

                    <p
                        style={{
                            fontFamily: "'Oswald', sans-serif",
                            fontSize: "16px",
                            color: "#713F12",
                            letterSpacing: "0.05em",
                        }}
                    >
                        FREE COUNTRY HEN EGG WITH EVERY ORDER!
                    </p>

                    <span
                        style={{
                            fontFamily: "'Tiro Tamil', serif",
                            fontSize: "13px",
                            color: "#92400E",
                        }}
                    >
                        · ஒவ்வொரு ஆர்டருடனும் இலவச முட்டை
                    </span>
                </div>
            </div>

            <div
                style={{
                    maxWidth: "1100px",
                    margin: "0 auto",
                    padding: "32px 24px 140px",
                }}
            >
                {/* ── STEP 1: MENU ───────────────────────────────────────── */}

                {step === "menu" && (
                    <div
                        className="order-grid"
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 320px",
                            gap: "32px",
                            alignItems: "start",
                        }}
                    >
                        {/* Meat Cards */}

                        <div>
                            <div style={{ marginBottom: "24px" }}>
                                <h2 className="font-['Oswald'] text-[28px] text-[#1A0800] tracking-[0.02em] mb-1">
                                    CHOOSE YOUR MEAT
                                </h2>

                                <p className="font-['Tiro_Tamil'] text-[#78716C] text-sm">
                                    உங்கள் இறைச்சியை தேர்வு செய்யுங்கள் · All freshly cut 30 min
                                    before delivery · ☪️ 100% Halal
                                </p>
                            </div>

                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "20px",
                                }}
                            >
                                {MEATS.map((m) => {
                                    const sel = getSel(m);

                                    const isAdded = addedId === m.id;

                                    return (
                                        <div
                                            key={m.id}
                                            className={`meat-card${isAdded ? " just-added" : ""} bg-white border border-[#E8D8C0] rounded-xl overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.05)] relative`}
                                        >
                                            {/* Top colored accent strip */}

                                            <div
                                                style={{
                                                    height: "4px",
                                                    background: m.accent || "#C8410A",
                                                }}
                                            />

                                            <div className="p-6">
                                                {/* Header row */}

                                                <div className="flex gap-4 items-start mb-3.5">
                                                    {/* Emoji + name block */}

                                                    <div className="w-16 h-16 rounded-xl bg-[#F5EDE0] flex items-center justify-center text-3xl flex-shrink-0">
                                                        {m.emoji}
                                                    </div>

                                                    <div className="flex-1 min-w-0">
                                                        <div className="flex items-center gap-2 flex-wrap mb-1">
                                                            <h3 className="font-['Oswald'] text-xl text-[#1A0800] tracking-[0.03em]">
                                                                {m.name}
                                                            </h3>

                                                            {m.highlight && (
                                                                <span className="bg-[#C8410A] text-white text-xs px-2.5 py-0.5 rounded-full font-['Oswald'] tracking-[0.08em]">
                                                                    ★ {m.highlight}
                                                                </span>
                                                            )}
                                                        </div>

                                                        <p className="font-['Tiro_Tamil'] text-[#C8410A] text-sm mb-0.5">
                                                            {m.tamil}
                                                        </p>

                                                        <p className="font-['Tiro_Tamil'] text-[#A8A29E] text-[11px]">
                                                            {m.subTamil}
                                                        </p>
                                                    </div>

                                                    {/* Price */}

                                                    <div className="text-right flex-shrink-0">
                                                        <div className="font-['Oswald'] text-2xl text-[#7C2D12] leading-none">
                                                            ₹{m.pricePerKg}
                                                        </div>

                                                        <div className="text-xs text-[#A8A29E]">
                                                            per {m.unit}
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Description */}

                                                <p className="text-[#57534E] text-sm leading-relaxed mb-4">
                                                    {m.desc}
                                                </p>

                                                {/* Badges row */}

                                                <div className="flex gap-1.5 flex-wrap mb-4">
                                                    {m.badge && (
                                                        <span
                                                            style={{
                                                                background: m.badgeBg,
                                                                color: m.badgeColor,
                                                                fontSize: "11px",
                                                                fontWeight: 700,
                                                                padding: "4px 12px",
                                                                borderRadius: "20px",
                                                            }}
                                                        >
                                                            {m.badge}
                                                        </span>
                                                    )}

                                                    <span className="bg-[#F0FDF4] text-[#14532D] text-[11px] font-bold px-3 py-1 rounded-full font-['Oswald'] tracking-[0.05em]">
                                                        ☪️ HALAL
                                                    </span>

                                                    <span className="bg-[#FEF2F2] text-[#7C2D12] text-[11px] font-bold px-3 py-1 rounded-full font-['Oswald'] tracking-[0.05em]">
                                                        ⏱️ CUT TO ORDER
                                                    </span>
                                                </div>

                                                {/* Controls */}

                                                <div className="grid grid-cols-[1fr_1fr_auto] gap-2.5 items-end">
                                                    {/* Quantity */}

                                                    <div>
                                                        <label className="block text-[11px] text-[#78716C] mb-1.5 font-['Oswald'] tracking-[0.08em]">
                                                            QTY ({m.unit.toUpperCase()})
                                                        </label>

                                                        <div className="flex items-center gap-1.5">
                                                            <button
                                                                className="qty-btn w-9 h-9 rounded-lg border-2 border-[#E8D8C0] bg-[#FAF7F2] cursor-pointer text-lg text-[#5A3520] flex items-center justify-center font-bold"
                                                                onClick={() =>
                                                                    setSelections((s) => ({
                                                                        ...s,
                                                                        [m.id]: {
                                                                            ...s[m.id],
                                                                            qty: Math.max(
                                                                                m.minQty,
                                                                                parseFloat(
                                                                                    (
                                                                                        (s[m.id]?.qty ?? m.minQty) - m.step
                                                                                    ).toFixed(1),
                                                                                ),
                                                                            ),
                                                                        },
                                                                    }))
                                                                }
                                                            >
                                                                −
                                                            </button>

                                                            <span className="min-w-10 text-center font-['Oswald'] font-bold text-[#1A0800] text-[17px]">
                                                                {sel.qty}
                                                            </span>

                                                            <button
                                                                className="qty-btn w-9 h-9 rounded-lg border-2 border-[#E8D8C0] bg-[#FAF7F2] cursor-pointer text-lg text-[#5A3520] flex items-center justify-center font-bold"
                                                                onClick={() =>
                                                                    setSelections((s) => ({
                                                                        ...s,
                                                                        [m.id]: {
                                                                            ...s[m.id],
                                                                            qty: parseFloat(
                                                                                (
                                                                                    (s[m.id]?.qty ?? m.minQty) + m.step
                                                                                ).toFixed(1),
                                                                            ),
                                                                        },
                                                                    }))
                                                                }
                                                            >
                                                                +
                                                            </button>
                                                        </div>
                                                    </div>

                                                    {/* Cut */}

                                                    <div>
                                                        <label className="block text-[11px] text-[#78716C] mb-1.5 font-['Oswald'] tracking-[0.08em]">
                                                            CUT TYPE
                                                        </label>

                                                        <select
                                                            value={sel.cut}
                                                            onChange={(e) =>
                                                                setSelections((s) => ({
                                                                    ...s,
                                                                    [m.id]: { ...s[m.id], cut: e.target.value },
                                                                }))
                                                            }
                                                            className="w-full px-2.5 py-2 rounded-lg border-2 border-[#E8D8C0] bg-[#FAF7F2] text-sm text-[#1A0800] h-9 font-['Lora']"
                                                        >
                                                            {m.cuts.map((c) => (
                                                                <option key={c}>{c}</option>
                                                            ))}
                                                        </select>
                                                    </div>

                                                    {/* Add button */}

                                                    <button
                                                        className={`add-btn h-9 px-5 ${isAdded ? "bg-[#14532D]" : "bg-[#7C2D12]"} text-white border-none rounded-lg text-sm font-bold cursor-pointer whitespace-nowrap font-['Oswald'] tracking-[0.06em] flex items-center gap-1.5 transition-colors duration-300`}
                                                        onClick={() => addToCart(m)}
                                                    >
                                                        {isAdded
                                                            ? "✓ ADDED"
                                                            : `+ ADD · ₹${(sel.qty * m.pricePerKg).toFixed(0)}`}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Desktop Cart Sidebar */}
                        <div className="desktop-cart sticky top-5">
                            <div className="bg-white border border-[#E8D8C0] rounded-xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.07)]">
                                <div className="flex justify-between items-center mb-5 pb-4 border-b-2 border-[#F5EDE0]">
                                    <h3 className="font-['Oswald'] text-xl text-[#1A0800] tracking-[0.03em]">
                                        🛒 YOUR ORDER
                                    </h3>
                                    {cart.length > 0 && (
                                        <span className="bg-[#7C2D12] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-['Oswald'] font-bold">
                                            {cart.length}
                                        </span>
                                    )}
                                </div>

                                <CartContents
                                    cart={cart}
                                    removeFromCart={removeFromCart}
                                    total={total}
                                    onProceed={() => setStep("details")}
                                />
                            </div>

                            {/* Guarantees below cart */}
                            <div className="mt-4 bg-[#1A0800] rounded-xl p-[18px_20px]">
                                <p className="font-['Oswald'] text-xs text-[#FCA5A5] tracking-[0.1em] mb-3">
                                    OUR PROMISE
                                </p>
                                {[
                                    ["☪️", "100% Halal Certified"],
                                    ["⏱️", "Cut 30 min before delivery"],
                                    ["🚫❄️", "Zero refrigeration"],
                                    ["🌿", "Banana leaf wrapped"],
                                    ["🥚", "Free country hen egg"],
                                ].map(([icon, text]) => (
                                    <div key={text} className="flex items-center gap-2 py-1.5">
                                        <span className="text-[#FCA5A5] w-6 text-center">
                                            {icon}
                                        </span>
                                        <span className="text-[#FBF7F0] text-sm">{text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* ── STEP 2: DETAILS ─────────────────────────────────────── */}
                {step === "details" && (
                    <div className="grid gap-6 md:grid-cols-[1fr_360px] items-start">
                        <div className="bg-white border border-[#E8D8C0] rounded-2xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
                            <h2 className="font-['Oswald'] text-2xl text-[#1A0800] tracking-[0.03em] mb-1">
                                YOUR DELIVERY DETAILS
                            </h2>
                            <p className="font-['Tiro_Tamil'] text-[#78716C] text-sm mb-5">
                                உங்கள் விவரங்களை உள்ளிடுங்கள் · Cash on Delivery
                            </p>

                            <div className="grid gap-4">
                                <div>
                                    <label className="block text-[11px] text-[#78716C] mb-1.5 font-['Oswald'] tracking-[0.08em]">
                                        NAME
                                    </label>
                                    <input
                                        value={form.name}
                                        onChange={(e) =>
                                            setForm((f) => ({ ...f, name: e.target.value }))
                                        }
                                        className="w-full px-3 py-2.5 rounded-xl border-2 border-[#E8D8C0] bg-[#FAF7F2] text-sm text-[#1A0800] font-['Lora']"
                                        placeholder="Your name"
                                    />
                                </div>

                                <div>
                                    <label className="block text-[11px] text-[#78716C] mb-1.5 font-['Oswald'] tracking-[0.08em]">
                                        PHONE
                                    </label>
                                    <input
                                        value={form.phone}
                                        onChange={(e) =>
                                            setForm((f) => ({
                                                ...f,
                                                phone: e.target.value.replace(/[^\d+]/g, ""),
                                            }))
                                        }
                                        className="w-full px-3 py-2.5 rounded-xl border-2 border-[#E8D8C0] bg-[#FAF7F2] text-sm text-[#1A0800] font-['Lora']"
                                        placeholder="10 digit number"
                                        inputMode="tel"
                                    />
                                </div>

                                <div>
                                    <label className="block text-[11px] text-[#78716C] mb-1.5 font-['Oswald'] tracking-[0.08em]">
                                        ADDRESS
                                    </label>
                                    <textarea
                                        value={form.address}
                                        onChange={(e) =>
                                            setForm((f) => ({ ...f, address: e.target.value }))
                                        }
                                        className="w-full px-3 py-2.5 rounded-xl border-2 border-[#E8D8C0] bg-[#FAF7F2] text-sm text-[#1A0800] font-['Lora'] min-h-24"
                                        placeholder="House no, street, area, landmark"
                                    />
                                </div>

                                <div>
                                    <label className="block text-[11px] text-[#78716C] mb-1.5 font-['Oswald'] tracking-[0.08em]">
                                        DELIVERY TIME
                                    </label>
                                    <select
                                        value={form.time}
                                        onChange={(e) =>
                                            setForm((f) => ({
                                                ...f,
                                                time: e.target.value as FormData["time"],
                                            }))
                                        }
                                        className="w-full px-3 py-2.5 rounded-xl border-2 border-[#E8D8C0] bg-[#FAF7F2] text-sm text-[#1A0800] font-['Lora']"
                                    >
                                        <option value="morning">Morning (7–12 PM)</option>
                                        <option value="afternoon">Afternoon (12–5 PM)</option>
                                        <option value="evening">Evening (5–8 PM)</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-[11px] text-[#78716C] mb-1.5 font-['Oswald'] tracking-[0.08em]">
                                        NOTES (OPTIONAL)
                                    </label>
                                    <textarea
                                        value={form.notes}
                                        onChange={(e) =>
                                            setForm((f) => ({ ...f, notes: e.target.value }))
                                        }
                                        className="w-full px-3 py-2.5 rounded-xl border-2 border-[#E8D8C0] bg-[#FAF7F2] text-sm text-[#1A0800] font-['Lora'] min-h-20"
                                        placeholder="Eg: Call before delivery"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 mt-6">
                                <button
                                    onClick={() => setStep("menu")}
                                    className="flex-1 bg-white text-[#7C2D12] border-2 border-[#E8D8C0] py-3 rounded-xl text-sm font-bold cursor-pointer font-['Oswald'] tracking-[0.08em]"
                                >
                                    ← BACK TO MENU
                                </button>
                                <button
                                    onClick={() => setStep("confirm")}
                                    disabled={
                                        cart.length === 0 ||
                                        form.name.trim().length === 0 ||
                                        form.address.trim().length === 0 ||
                                        form.phone.replace(/[^\d]/g, "").length < 10
                                    }
                                    className="flex-1 bg-[#7C2D12] disabled:bg-[#A8A29E] disabled:cursor-not-allowed text-white border-none py-3 rounded-xl text-sm font-bold cursor-pointer font-['Oswald'] tracking-[0.08em]"
                                >
                                    REVIEW ORDER →
                                </button>
                            </div>
                        </div>

                        <div className="bg-white border border-[#E8D8C0] rounded-2xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.06)] sticky top-5">
                            <h3 className="font-['Oswald'] text-xl text-[#1A0800] tracking-[0.03em] mb-4">
                                🧾 ORDER SUMMARY
                            </h3>
                            <CartContents
                                cart={cart}
                                removeFromCart={removeFromCart}
                                total={total}
                                onProceed={() => setStep("confirm")}
                            />
                        </div>
                    </div>
                )}

                {/* ── STEP 3: CONFIRM ─────────────────────────────────────── */}
                {step === "confirm" && (
                    <div className="grid gap-6 md:grid-cols-[1fr_360px] items-start">
                        <div className="bg-white border border-[#E8D8C0] rounded-2xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
                            <h2 className="font-['Oswald'] text-2xl text-[#1A0800] tracking-[0.03em] mb-1">
                                CONFIRM & SEND
                            </h2>
                            <p className="text-[#78716C] text-sm mb-5">
                                We’ll send your order on WhatsApp to the shop numbers.
                            </p>

                            <div className="bg-[#FBF7F0] border border-[#E8D8C0] rounded-2xl p-5">
                                <p className="font-['Oswald'] text-xs text-[#78716C] tracking-[0.1em] mb-3">
                                    DELIVERY DETAILS
                                </p>
                                <div className="grid gap-1.5 text-sm text-[#1A0800]">
                                    <div>
                                        <span className="text-[#78716C]">Name:</span>{" "}
                                        {form.name || "—"}
                                    </div>
                                    <div>
                                        <span className="text-[#78716C]">Phone:</span>{" "}
                                        {form.phone || "—"}
                                    </div>
                                    <div>
                                        <span className="text-[#78716C]">Time:</span> {timeLabel}
                                    </div>
                                    <div className="whitespace-pre-wrap">
                                        <span className="text-[#78716C]">Address:</span>{" "}
                                        {form.address || "—"}
                                    </div>
                                    {form.notes && (
                                        <div className="whitespace-pre-wrap">
                                            <span className="text-[#78716C]">Notes:</span>{" "}
                                            {form.notes}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 mt-6">
                                <button
                                    onClick={() => setStep("details")}
                                    className="flex-1 bg-white text-[#7C2D12] border-2 border-[#E8D8C0] py-3 rounded-xl text-sm font-bold cursor-pointer font-['Oswald'] tracking-[0.08em]"
                                >
                                    ← EDIT DETAILS
                                </button>
                                <button
                                    onClick={handleConfirm}
                                    disabled={cart.length === 0}
                                    className="flex-1 bg-[#25D366] disabled:bg-[#A8A29E] disabled:cursor-not-allowed text-white border-none py-3 rounded-xl text-sm font-bold cursor-pointer font-['Oswald'] tracking-[0.08em]"
                                >
                                    SEND ON WHATSAPP
                                </button>
                            </div>

                            <p className="m-0 mt-4 text-[11px] text-[#78716C]">
                                ⏱️ Cut 30 min before delivery · 🌿 Banana leaf packed · 🥚 Free
                                egg included
                            </p>
                        </div>

                        <div className="bg-white border border-[#E8D8C0] rounded-2xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.06)] sticky top-5">
                            <h3 className="font-['Oswald'] text-xl text-[#1A0800] tracking-[0.03em] mb-4">
                                🛒 ITEMS
                            </h3>
                            <CartContents
                                cart={cart}
                                removeFromCart={removeFromCart}
                                total={total}
                                onProceed={handleConfirm}
                            />
                        </div>
                    </div>
                )}
            </div>

            {/* Mobile cart button + drawer */}
            {isMobile && (
                <>
                    <div className="fixed bottom-0 left-0 right-0 bg-[#1A0800] border-t border-[#C8410A] p-3 z-40">
                        <div className="max-w-[1100px] mx-auto flex items-center gap-3">
                            <button
                                onClick={() => setCartOpen(true)}
                                className="flex-1 bg-white text-[#1A0800] rounded-xl py-3 font-['Oswald'] tracking-[0.08em] font-bold"
                            >
                                🛒 CART ({cart.length}) · ₹{total}
                            </button>
                            <button
                                onClick={() => setStep(cart.length > 0 ? "details" : "menu")}
                                className="bg-[#7C2D12] text-white rounded-xl py-3 px-4 font-['Oswald'] tracking-[0.08em] font-bold"
                            >
                                NEXT →
                            </button>
                        </div>
                    </div>

                    {cartOpen && (
                        <div className="fixed inset-0 z-50">
                            <button
                                aria-label="Close cart"
                                onClick={() => setCartOpen(false)}
                                className="absolute inset-0 bg-black/50"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl p-5 border-t border-[#E8D8C0] max-h-[80vh] overflow-auto">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="font-['Oswald'] text-xl text-[#1A0800] tracking-[0.03em]">
                                        🛒 YOUR ORDER
                                    </h3>
                                    <button
                                        onClick={() => setCartOpen(false)}
                                        className="bg-[#FEF2F2] border border-[#FECACA] text-[#DC2626] text-sm leading-none px-2 py-1 rounded-md"
                                    >
                                        Close
                                    </button>
                                </div>
                                <CartContents
                                    cart={cart}
                                    removeFromCart={removeFromCart}
                                    total={total}
                                    onProceed={() => {
                                        setCartOpen(false);
                                        setStep("details");
                                    }}
                                />
                            </div>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}
