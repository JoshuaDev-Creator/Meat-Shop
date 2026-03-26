"use client";
/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { useState, useEffect } from "react";

const meats = [
  {
    emoji: "🐔",
    name: "Village Country Chicken",
    tamil: "நாட்டுக்கோழி",
    subTamil: "கிராம வீட்டு வளர்ப்பு",
    desc: "100% home-grown, slow-raised in Nellai farmyards. No hormones, no cages — just open soil and sunlight. Richer taste, firmer meat.",
    badge: "டெலிவரிக்கு 30 நிமிடம் முன் வெட்டப்படுகிறது",
    price: "₹750",
    unit: "/ kg",
    tag: "A-Grade",
    tagColor: "#14532D",
    accent: "#22C55E",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2021/1/ZB/GP/IJ/55256854/fresh-organic-country-chicken-nattu-kozhi-meat.jpg",
  },
  {
    emoji: "🐑",
    name: "Fresh Nellai Mutton",
    tamil: "நல்லை ஆட்டு இறைச்சி",
    subTamil: "உள்ளூர் பண்ணை ஆடு",
    desc: "Sourced from local Nellai farms. Freshly slaughtered at dawn. Tender, juicy cuts with that unmistakable red-soil Nellai flavor.",
    badge: "டெலிவரிக்கு 30 நிமிடம் முன் வெட்டப்படுகிறது",
    price: "₹1000",
    unit: "/ kg",
    tag: "Premium",
    tagColor: "#78350F",
    accent: "#F59E0B",
    image:
      "https://media.istockphoto.com/id/1925318606/photo/guwahati-assam-india-in-south-asian-and-caribbean-cuisine-mutton-often-means-goat-meat-at.webp?a=1&b=1&s=612x612&w=0&k=20&c=8j73GmGbX97a0lUbDo6AjHx2sK_S0Ya7bSrDILkNldw=",
  },
  {
    emoji: "🐦",
    name: "Kaadai (Quail)",
    tamil: "காடை",
    subTamil: "சிறப்பு நெல்லை காடை",
    desc: "Wild-texture, rich in iron. Cleaned and ready-to-cook. Exceptional for pepper fry, salna, or the classic Tirunelveli kaadai kozhambu.",
    badge: "டெலிவரிக்கு 30 நிமிடம் முன் வெட்டப்படுகிறது",
    price: "₹140",
    unit: "/ piece",
    tag: "Nellai Special",
    tagColor: "#7C2D12",
    accent: "#EF4444",
    image:
      "https://projectupland.com/wp-content/uploads/2025/07/editorial-cover-images-7.png",
  },
];

const trustBadges = [
  {
    icon: "🚫❄️",
    title: "No Refrigeration Ever",
    tamil: "குளிர்சாதனம் இல்லை",
    desc: "Meat packed and delivered the same moment it is cut. Zero cold storage, zero wait.",
  },
  {
    icon: "🌿",
    title: "Banana Leaf Packed",
    tamil: "வாழை இலை சுற்றி",
    desc: "Traditional banana leaf wrapping keeps meat moist, fresh and chemical-free.",
  },
  {
    icon: "☪️",
    title: "100% Halal Certified",
    tamil: "ஹலால் உறுதிப்படுத்தப்பட்டது",
    desc: "All animals slaughtered following strict Halal guidelines. Certified and trusted.",
  },
  {
    icon: "⏱️",
    title: "Slaughter 30 Min Before Delivery",
    tamil: "டெலிவரிக்கு 30 நிமிடம் முன் வதிக்கப்படுகிறது",
    desc: "We slaughter your meat exactly 30 minutes before our rider leaves. It doesn't get fresher.",
  },
  {
    icon: "🥚",
    title: "Free Country Hen Egg",
    tamil: "இலவச நாட்டுக்கோழி முட்டை",
    desc: "Every order comes with a free country hen egg — our little gift to your family.",
  },
  {
    icon: "🌊",
    title: "Thamirabarani Water",
    tamil: "தாமிரபரணி நீர்",
    desc: "Animals raised on clean Thamirabarani river-fed water from local farms.",
  },
];

const testimonials = [
  {
    name: "Selvi Rani",
    area: "Palayamkottai",
    text: "வாழை இலையில் கட்டி அனுப்புவது மிகவும் பாரம்பரியமாக இருக்கிறது. மணமும் சுவையும் அருமை!",
    stars: 5,
  },
  {
    name: "Muruganandham",
    area: "Nanguneri",
    text: "குளிர்சாதனம் இல்லாமல் இவ்வளவு fresh-ஆக கிடைப்பது அசத்தல். தினமும் வாங்குகிறேன்.",
    stars: 5,
  },
  {
    name: "Jothilakshmi",
    area: "Tirunelveli Town",
    text: "நாட்டுக்கோழி கறி சாப்பிட்ட பிறகு supermarket chicken-ஐ மறந்துவிட்டேன். இது வேற level!",
    stars: 5,
  },
];

export default function Home() {
  const [time, setTime] = useState("");
  const [freshCount, setFreshCount] = useState(0);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("ta-IN", { hour: "2-digit", minute: "2-digit" }),
      );
      setFreshCount(Math.floor(Math.random() * 40) + 60);
    };
    update();
    const t = setInterval(update, 30000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="font-serif bg-[#FBF7F0] text-[#1A0800] overflow-x-hidden">
      {/* TOP ANNOUNCEMENT BAR */}
      <div className="bg-[#14532D] text-[#BBF7D0] py-2.5 text-sm font-['Oswald'] tracking-[0.05em]">
        <div className="ticker-wrapper">
          <div className="ticker-inner">
            {[...Array(2)].map((_, r) => (
              <span key={r} className="inline-flex gap-12 px-8 py-0.5">
                <span>☪️ 100% HALAL CERTIFIED</span>
                <span>⏱️ 30 MINUTE SLAUGHTER to delivery</span>
                <span>🌿 Banana leaf pack + no refrigeration</span>
                <span>🥚 Free country hen egg with every order</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <nav className="bg-[#FBF7F0] border-b border-[#E8D8C0] py-4 md:py-6 px-4 md:px-10 flex flex-col md:flex-row justify-between md:items-center sticky top-0 z-10 backdrop-blur-[10px] gap-4 md:gap-0">
        <div className="flex flex-col">
          <span className="font-['Oswald'] text-2xl font-bold tracking-[0.1em] text-[#7C2D12]">
            NATTU<span className="text-[#14532D]">KADAI</span>
          </span>
          <span className="text-xs text-[#92400E] tracking-[0.15em] font-sans">
            நாட்டுக்கடை • TIRUNELVELI
          </span>
        </div>
        <div className="flex gap-4 md:gap-10 items-center w-full md:w-auto justify-between md:justify-start">
          <span className="flex items-center gap-1.5 text-sm text-[#14532D] font-semibold">
            <span className="w-2 h-2 bg-[#16A34A] rounded-full inline-block animate-[pulse-dot_1.5s_infinite]"></span>
            LIVE · {time}
          </span>
          <Link
            href="/order"
            className="bg-[#7C2D12] text-white py-3 px-7 rounded-lg text-decoration-none font-['Oswald'] text-sm tracking-[0.1em]"
          >
            ORDER NOW
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 bg-[url('https://5.imimg.com/data5/SELLER/Default/2023/11/361447719/WN/JL/WH/139168503/maxresdefault-jpg.jpg')] bg-center bg-cover brightness-75"></div>
        {/* Texture overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#7C2D12]/70 via-black/20 to-[#14532D]/50"></div>

        <div className="hero-text relative z-10 max-w-[850px] px-6 md:px-16 py-10 md:py-0">
          {/* Tamil headline first */}
          <p className="font-['Tiro_Tamil'] text-lg md:text-2xl text-[#BBF7D0] mb-4 tracking-[0.03em]">
            குளிர்சாதனம் இல்லை · ஹலால் · டெலிவரிக்கு 30 நிமிடம் முன்
            வெட்டப்படுகிறது
          </p>
          <h1 className="font-['Oswald'] text-5xl md:text-7xl font-bold leading-none text-white tracking-[-0.02em] mb-7">
            NELLAI'S
            <br />
            <span className="text-[#FCA5A5]">FRESHEST</span>
            <br />
            MEAT.
          </h1>
          <p className="text-base md:text-lg text-gray-200 leading-relaxed mb-4 max-w-[560px]">
            Cut 30 minutes before delivery. Wrapped in banana leaf. ☪️ 100%
            Halal.{" "}
            <strong className="text-[#86EFAC]">
              No freezer. No chemicals. No compromise.
            </strong>
          </p>

          {/* BIG NO FRIDGE STATEMENT */}
          <div className="inline-flex items-center gap-4 bg-white/8 border border-white/20 rounded-xl px-6 py-4 mb-9 backdrop-blur-md">
            <span className="text-4xl">🚫</span>
            <div>
              <span className="font-['Oswald'] text-xl text-[#FCA5A5] tracking-[0.1em]">
                ZERO REFRIGERATION
              </span>
              <br />
              <span className="font-['Tiro_Tamil'] text-sm text-[#BBF7D0]">
                குளிர்சாதனப் பெட்டி பயன்பாடே இல்லை
              </span>
            </div>
          </div>

          <div className="flex gap-4 flex-wrap">
            <Link
              href="/order"
              className="bg-[#C8410A] text-white no-underline py-5 px-11 rounded-xl font-['Oswald'] text-xl tracking-[0.1em] inline-block"
            >
              இன்றே ஆர்டர் செய்யுங்கள் →
            </Link>
            <a
              href="#products"
              className="bg-transparent text-white no-underline py-5 px-8 rounded-xl border border-white/4 font-['Oswald'] text-xl tracking-[0.08em] inline-block"
            >
              VIEW MEATS ↓
            </a>
          </div>
        </div>

        {/* Fresh counter bubble */}
        <div className="fresh-counter">
          <div className="font-['Oswald'] text-4xl md:text-5xl text-[#86EFAC] leading-none">
            {freshCount}+
          </div>
          <div className="text-[#BBF7D0] text-xs md:text-sm tracking-[0.1em] mt-1">
            ORDERS TODAY
          </div>
          <div className="font-['Tiro_Tamil'] text-[#86EFAC] text-xs md:text-sm">
            இன்று ஆர்டர்கள்
          </div>
        </div>
      </section>

      {/* NO REFRIGERATION MANIFESTO BAND */}
      <section className="bg-[#1A0800] text-white py-20 px-10 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C8410A] via-transparent to-[#C8410A] bg-[length:30px_4px]"></div>
        <p className="font-['Tiro_Tamil'] text-xl text-[#FCA5A5] mb-4">
          எங்கள் நம்பிக்கை
        </p>
        <h2 className="font-['Oswald'] text-4xl md:text-6xl tracking-[-0.01em] leading-tight mb-7">
          ❄️ WE DO NOT OWN
          <br />
          <span className="text-[#FCA5A5]">A SINGLE REFRIGERATOR.</span>
        </h2>
        <p className="max-w-[680px] mx-auto text-gray-300 text-xl leading-relaxed mb-5 italic">
          Our grandfathers never had cold storage. They had early mornings,
          banana leaves, and the trust of their neighbours. We carry that same
          tradition.
        </p>
        <p className="font-['Tiro_Tamil'] text-base text-[#86EFAC]">
          எங்கள் தாத்தாக்கள் குளிர்சாதனம் வைத்திருக்கவில்லை — அவர்களுக்கு வாழை
          இலையும், விடியற்காலையும், ஊரின் நம்பிக்கையும் இருந்தது.
        </p>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#14532D] via-transparent to-[#14532D] bg-[length:30px_4px]"></div>
      </section>

      {/* TRUST BADGES */}
      <section className="bg-[#FBF7F0] py-20 px-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustBadges.map((b, i) => (
            <div
              key={i}
              className="card-hover bg-white rounded-2xl p-9 text-center border border-[#E8D8C0] shadow-sm"
            >
              <div className="text-6xl mb-4">{b.icon}</div>
              <h3 className="font-['Oswald'] text-lg tracking-[0.05em] text-[#7C2D12] mb-1.5">
                {b.title}
              </h3>
              <p className="font-['Tiro_Tamil'] text-[#14532D] text-sm mb-3">
                {b.tamil}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HALAL CERTIFIED BANNER */}
      <section className="py-8 px-10 bg-[#1A3A2A] text-center border-b-4 border-[#16A34A]">
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-8 flex-wrap">
          <div className="flex items-center gap-4">
            <span className="text-6xl">☪️</span>
            <div className="text-left">
              <p className="font-['Oswald'] text-2xl text-[#86EFAC] tracking-[0.1em]">
                100% HALAL CERTIFIED
              </p>
              <p className="font-['Tiro_Tamil'] text-base text-[#BBF7D0]">
                ஹலால் சான்றிதழ் பெற்றது · அனைத்து இறைச்சியும்
              </p>
            </div>
          </div>
          <div className="w-px h-16 bg-white/2"></div>
          <p className="text-[#D1FAE5] text-sm leading-relaxed max-w-md">
            All animals slaughtered following strict Islamic Halal guidelines —
            with Bismillah, by a certified butcher. Trusted by every family in
            Nellai.
            <br />
            <span className="font-['Tiro_Tamil'] text-xs text-[#86EFAC]">
              இஸ்லாமிய ஹலால் விதிகளின்படி — அனைவரும் நம்பும் கடை.
            </span>
          </p>
        </div>
      </section>

      {/* FREE EGG OFFER BANNER */}
      <section className="py-3 px-10 bg-[#FEF9C3] border-b-2 border-dashed border-[#CA8A04]">
        <div className="max-w-3xl mx-auto flex items-center justify-center gap-5 flex-wrap">
          <span className="text-5xl">🥚</span>
          <div className="text-center">
            <p className="font-['Oswald'] text-xl text-[#713F12] tracking-[0.05em]">
              🎁 FREE COUNTRY HEN EGG WITH EVERY ORDER!
            </p>
            <p className="font-['Tiro_Tamil'] text-sm text-[#92400E]">
              · ஒவ்வொரு ஆர்டருடனும் இலவச முட்டை
            </p>
          </div>
          <span className="text-5xl">🥚</span>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="bg-[#F5EDE0] py-20 px-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-15">
            <p className="font-['Tiro_Tamil'] text-xl text-[#C8410A] mb-2.5">
              இன்றைய தேர்வு
            </p>
            <h2 className="font-['Oswald'] text-4xl md:text-5xl tracking-[-0.01em]">
              TODAY'S FRESH SELECTION
            </h2>
            <div className="w-20 h-0.75 bg-[#C8410A] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {meats.map((m) => (
              <div
                key={m.name}
                className="card-hover bg-white rounded-3xl overflow-hidden shadow-lg border border-[#EDD9C0] relative"
              >
                {/* Image */}
                <div className="relative h-60 overflow-hidden img-grain">
                  <img
                    src={m.image}
                    alt={m.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  {/* Halal stamp top-left */}
                  <div className="absolute top-4 left-4 bg-[#1A3A2A] text-[#86EFAC] text-xs py-1.5 px-3 rounded-full font-['Oswald'] tracking-[0.1em] flex items-center gap-1.5">
                    ☪️ HALAL
                  </div>
                  <div
                    className="absolute top-4 right-4 text-white text-xs py-1.5 px-3.5 rounded-full font-['Oswald'] tracking-[0.08em]"
                    style={{ background: m.tagColor }}
                  >
                    {m.tag}
                  </div>
                  {/* 30-min cut badge */}
                  <div className="absolute bottom-4 left-4 bg-black/75 text-[#FCD34D] text-xs py-1.5 px-3 rounded-lg font-['Tiro_Tamil'] backdrop-blur-sm flex items-center gap-1.5">
                    ⏱️ {m.badge}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-['Oswald'] text-2xl tracking-[0.03em] mb-1">
                        {m.name}
                      </h3>
                      <p className="font-['Tiro_Tamil'] text-[#C8410A] text-base mb-0.5">
                        {m.tamil}
                      </p>
                      <p className="font-['Tiro_Tamil'] text-gray-500 text-xs">
                        {m.subTamil}
                      </p>
                    </div>
                    <span className="text-5xl">{m.emoji}</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-sm mb-5">
                    {m.desc}
                  </p>

                  {/* Halal + No fridge assurance row */}
                  <div className="flex gap-1.5 mb-3 flex-wrap">
                    <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-lg py-2 px-3 flex gap-1.5 items-center flex-1">
                      <span className="text-sm">☪️</span>
                      <span className="text-xs text-[#14532D] font-['Oswald'] tracking-[0.05em]">
                        HALAL
                      </span>
                    </div>
                    <div className="bg-[#FEF2F2] border border-[#FECACA] rounded-lg py-2 px-3 flex gap-1.5 items-center flex-1">
                      <span className="text-sm">🚫❄️</span>
                      <span className="text-xs text-[#7C2D12] font-['Oswald'] tracking-[0.05em]">
                        NO FRIDGE
                      </span>
                    </div>
                    <div className="bg-[#FEFCE8] border border-[#FDE68A] rounded-lg py-2 px-3 flex gap-1.5 items-center flex-1">
                      <span className="text-sm">🥚</span>
                      <span className="text-xs text-[#713F12] font-['Oswald'] tracking-[0.05em]">
                        FREE EGG
                      </span>
                    </div>
                  </div>

                  {/* Banana leaf assurance */}
                  <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-lg py-2.5 px-3.5 mb-6 flex gap-2 items-center">
                    <span className="text-xl">🌿</span>
                    <span className="text-xs text-[#14532D] font-['Tiro_Tamil']">
                      வாழை இலையில் கட்டி அனுப்பப்படுகிறது · Banana leaf wrapped
                    </span>
                  </div>

                  <div className="flex justify-between items-center border-t border-[#F0E4D0] pt-6">
                    <div>
                      <span className="font-['Oswald'] text-3xl text-[#7C2D12]">
                        {m.price}
                      </span>
                      <span className="text-gray-500 text-sm ml-1">
                        {m.unit}
                      </span>
                    </div>
                    <Link
                      href="/order"
                      className="bg-[#7C2D12] text-white no-underline py-3 px-6 rounded-xl font-['Oswald'] text-sm tracking-[0.08em]"
                    >
                      வாங்கு →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIVE FROM SHOP */}
      <section className="py-20 px-10 bg-[#1A0800]">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-10 flex-wrap gap-4">
            <div>
              <p className="font-['Tiro_Tamil'] text-[#FCA5A5] text-base mb-2">
                கடையிலிருந்து நேரடியாக
              </p>
              <h2 className="font-['Oswald'] text-3xl md:text-4xl text-white tracking-[-0.01em]">
                LIVE FROM THE SHOP
              </h2>
            </div>
            <div className="flex items-center gap-2.5 bg-[#C8410A] py-2.5 px-5 rounded-lg">
              <span className="w-2.5 h-2.5 bg-[#FCA5A5] rounded-full animate-[pulse-dot_1.2s_infinite]"></span>
              <span className="text-white font-['Oswald'] text-base tracking-[0.1em]">
                LIVE · {time}
              </span>
            </div>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            style={{ gridTemplateRows: "300px" }}
          >
            {/* Big left image */}
            <div className="relative rounded-2xl overflow-hidden img-grain col-span-1 md:col-span-2 lg:col-span-2">
              <img
                src="https://www.chennaimeats.com/images/buy-fresh-raw-goat-mutton-curry-cut-with-bone-online.png"
                alt="Fresh mutton"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/8 to-transparent"></div>
              <div className="absolute bottom-5 left-5">
                <p className="text-white font-['Oswald'] text-xl tracking-[0.05em]">
                  FRESH MUTTON CUTS
                </p>
                <p className="font-['Tiro_Tamil'] text-[#BBF7D0] text-sm">
                  இன்று காலை வெட்டப்பட்டது
                </p>
              </div>
              <div className="absolute top-4 left-4 bg-black/6 text-[#86EFAC] text-xs py-1 px-3 rounded-lg font-['Oswald'] backdrop-blur-sm">
                🚫❄️ ZERO COLD STORAGE
              </div>
            </div>

            {/* Top right */}
            <div className="relative rounded-2xl overflow-hidden img-grain">
              <img
                src="https://5.imimg.com/data5/SELLER/Default/2023/11/361447719/WN/JL/WH/139168503/maxresdefault-jpg.jpg"
                alt="Country chicken"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <p className="text-white font-['Oswald'] text-base">
                  NATTU KOZHI
                </p>
                <p className="font-['Tiro_Tamil'] text-[#BBF7D0] text-xs">
                  நாட்டுக்கோழி
                </p>
              </div>
            </div>

            {/* Bottom right */}
            <div className="relative rounded-2xl overflow-hidden img-grain">
              <img
                src="data:image/jpeg;base64,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"
                alt="Banana leaf wrapping"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#14532D]/85 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <p className="text-white font-['Oswald'] text-base">
                  LEAF PACKING
                </p>
                <p className="font-['Tiro_Tamil'] text-[#BBF7D0] text-xs">
                  வாழை இலை சுற்றி
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-10 bg-[#FBF7F0]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-15">
            <p className="font-['Tiro_Tamil'] text-xl text-[#C8410A] mb-2.5">
              எவ்வாறு செயல்படுகிறது
            </p>
            <h2 className="font-['Oswald'] text-3xl md:text-4xl tracking-[-0.01em]">
              FROM FARM TO YOUR DOOR
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
            {[
              {
                time: "STEP 1",
                icon: "🌙",
                eng: "Animals selected from local farms",
                tamil: "கிராம பண்ணையிலிருந்து தேர்வு",
              },
              {
                time: "STEP 2",
                icon: "☪️",
                eng: "Halal slaughter — certified & blessed",
                tamil: "ஹலால் முறையில் வெட்டப்படுகிறது",
              },
              {
                time: "STEP 3",
                icon: "⏱️",
                eng: "Cut exactly 30 min before delivery",
                tamil: "டெலிவரிக்கு 30 நிமிடம் முன் வெட்டு",
              },
              {
                time: "STEP 4",
                icon: "🌿",
                eng: "Wrapped in banana leaf + free egg inside",
                tamil: "வாழை இலையில் + இலவச முட்டை",
              },
              {
                time: "STEP 5",
                icon: "🛵",
                eng: "Delivered fresh to your door",
                tamil: "உங்கள் வீட்டிற்கு புதிதாக வருகிறது",
              },
            ].map((step, i) => (
              <div key={i} className="text-center py-8 px-5 relative">
                {i < 4 && (
                  <div className="absolute top-10 -right-2.5 w-5 h-0.5 bg-[#C8410A] rounded z-10"></div>
                )}
                <div className="w-18 h-18 bg-[#7C2D12] rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                  {step.icon}
                </div>
                <p className="font-['Oswald'] text-xs text-[#C8410A] tracking-[0.1em] mb-2">
                  {step.time}
                </p>
                <p className="font-semibold text-[#1A0800] mb-1.5 text-sm leading-4">
                  {step.eng}
                </p>
                <p className="font-['Tiro_Tamil'] text-gray-600 text-xs">
                  {step.tamil}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-6 py-5 bg-[#FEF2F2] rounded-xl border border-[#FECACA]">
            <span className="text-xl">🚫❄️ </span>
            <span className="font-['Oswald'] text-lg text-[#7C2D12] tracking-[0.05em]">
              AT NO POINT IS REFRIGERATION USED IN THIS PROCESS
            </span>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-10 bg-[#14532D]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="font-['Tiro_Tamil'] text-base text-[#BBF7D0] mb-2">
              வாடிக்கையாளர் கருத்துகள்
            </p>
            <h2 className="font-['Oswald'] text-5xl text-white tracking-[-0.01em]">
              WHAT NELLAI SAYS
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="card-hover bg-white/1 rounded-2xl p-8 border border-white/15 backdrop-blur-md"
              >
                <div className="mb-4">
                  {[...Array(t.stars)].map((_, s) => (
                    <span key={s} className="star text-base">
                      ★
                    </span>
                  ))}
                </div>
                <p className="font-['Tiro_Tamil'] text-[#E7F9EE] text-sm leading-relaxed mb-5 italic">
                  " {t.text} "
                </p>
                <div className="border-t border-white/15 pt-4">
                  <p className="font-['Oswald'] text-white text-base tracking-[0.05em]">
                    {t.name}
                  </p>
                  <p className="text-[#BBF7D0] text-sm">{t.area}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ORDER CTA */}
      <section className="py-25 px-10 bg-[#7C2D12] text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-gradient from-[#C8410A]/4 at-20%_50% to-[#14532D]/4 at-80%_50%"></div>
        <div className="relative z-10">
          <p className="font-['Tiro_Tamil'] text-xl text-[#FCA5A5] mb-4">
            இன்றே வாங்கலாம்
          </p>
          <h2 className="font-['Oswald'] text-4xl md:text-6xl text-white tracking-[-0.02em] leading-none mb-6">
            FRESH MEAT.
            <br />
            <span className="text-[#86EFAC]">YOUR DOOR.</span>
          </h2>
          <p className="text-[#FCA5A5] text-lg mb-10 italic">
            Order before 8 AM — delivered the same morning. <br />
            <span className="font-['Tiro_Tamil']">
              காலை 8 மணிக்கு முன் ஆர்டர் — அதே காலை டெலிவரி.
            </span>
          </p>
          <Link
            href="/order"
            className="bg-white text-[#7C2D12] no-underline py-5.5 px-15 rounded-xl font-['Oswald'] text-2xl tracking-[0.08em] inline-block"
          >
            ஆர்டர் செய்யுங்கள் →
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0F0500] py-15 px-10 text-gray-500">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="font-['Oswald'] text-3xl font-bold mb-2 tracking-[0.1em]">
              <span className="text-[#C8410A]">NATTU</span>
              <span className="text-[#22C55E]">KADAI</span>
            </div>
            <p className="font-['Tiro_Tamil'] text-gray-400 text-sm mb-4">
              நாட்டுக்கடை · திருநெல்வேலி
            </p>
            <p className="text-sm leading-relaxed max-w-80 text-gray-400">
              Tirunelveli's only meat shop that runs entirely without
              refrigeration. Every piece, every day — fresh from the farm.
            </p>
          </div>
          <div>
            <p className="font-['Oswald'] tracking-[0.1em] text-gray-300 mb-4 text-sm">
              PRODUCTS
            </p>
            {[
              "நாட்டுக்கோழி (Country Chicken)",
              "ஆட்டு இறைச்சி (Mutton)",
              "காடை (Quail)",
            ].map((item) => (
              <p
                key={item}
                className="font-['Tiro_Tamil'] text-sm mb-2.5 text-gray-400"
              >
                {item}
              </p>
            ))}
          </div>
          <div>
            <p className="font-['Oswald'] tracking-[0.1em] text-gray-300 mb-4 text-sm">
              CONTACT
            </p>
            <p className="text-sm mb-2.5 text-gray-400">
              📍 Tirunelveli, Tamil Nadu
            </p>
            <p className="text-sm mb-2.5 text-gray-400">📞 +91 9025761741</p>
            <p className="font-['Tiro_Tamil'] text-xs text-gray-400 italic">
              காலை 5 மணி – மதியம் 1 மணி
            </p>
          </div>
        </div>
        <div className="border-t border-[#1C0F00] pt-6 flex justify-between flex-wrap gap-3">
          <p className="text-xs">
            © 2024 NattuKadai · திருநெல்வேலி · All rights reserved.
          </p>
          <p className="font-['Tiro_Tamil'] text-xs text-gray-500 italic">
            குளிர்சாதனம் இல்லாத கடை · Zero Refrigeration · Since Generations
          </p>
        </div>
      </footer>
    </div>
  );
}
