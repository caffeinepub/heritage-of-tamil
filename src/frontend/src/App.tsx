import { ChevronUp, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const navItems = [
  { id: "home", label: "முகப்பு" },
  { id: "language", label: "மொழி & இலக்கியம்" },
  { id: "art", label: "கலை & கலாச்சாரம்" },
  { id: "temples", label: "கோவில்கள்" },
  { id: "history", label: "வரலாறு" },
  { id: "food", label: "உணவு கலாச்சாரம்" },
];

function GoldDivider() {
  return <div className="gold-divider my-0" aria-hidden="true" />;
}

function OrnamentalBorder() {
  return (
    <div
      className="flex items-center justify-center gap-3 py-4"
      aria-hidden="true"
    >
      <div className="h-px flex-1 gold-divider" />
      <span className="gold-text text-2xl">✦</span>
      <span className="gold-text text-lg">❧</span>
      <span className="gold-text text-2xl">✦</span>
      <div className="h-px flex-1 gold-divider" />
    </div>
  );
}

function Header({ activeSection }: { activeSection: string }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 shadow-lg">
      {/* Top brand strip */}
      <div className="parchment-bg border-b border-border py-3 px-4">
        <div className="max-w-[1100px] mx-auto flex items-center justify-center gap-3">
          <span className="text-4xl" style={{ color: "oklch(0.32 0.11 20)" }}>
            🏛️
          </span>
          <div className="text-center">
            <h1
              className="font-tamil font-bold text-xl md:text-2xl leading-tight"
              style={{ color: "oklch(0.32 0.11 20)" }}
            >
              தமிழ் பாரம்பரியம்
            </h1>
            <p
              className="font-display text-xs tracking-widest uppercase"
              style={{ color: "oklch(0.48 0.08 45)" }}
            >
              Heritage of Tamil
            </p>
          </div>
          <span className="text-4xl" style={{ color: "oklch(0.32 0.11 20)" }}>
            🏛️
          </span>
        </div>
      </div>

      {/* Navigation bar */}
      <nav className="maroon-bg" data-ocid="nav.section">
        <div className="max-w-[1100px] mx-auto px-4">
          {/* Desktop nav */}
          <ul className="hidden md:flex items-center justify-center">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => scrollTo(item.id)}
                  data-ocid={`nav.${item.id}.link`}
                  className={`font-tamil px-4 py-3 text-sm transition-colors duration-200 border-b-2 ${
                    activeSection === item.id
                      ? "gold-text border-accent"
                      : "cream-text border-transparent hover:gold-text"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile nav toggle */}
          <div className="flex md:hidden items-center justify-between py-2">
            <span className="font-tamil cream-text text-sm">தமிழ் பாரம்பரியம்</span>
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="cream-text p-2"
              aria-label="Toggle menu"
              data-ocid="nav.toggle"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile dropdown */}
          <AnimatePresence>
            {menuOpen && (
              <motion.ul
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="md:hidden overflow-hidden pb-2"
              >
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => scrollTo(item.id)}
                      data-ocid={`nav.mobile.${item.id}.link`}
                      className="font-tamil block w-full text-left px-4 py-2 text-sm cream-text hover:gold-text transition-colors"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </header>
  );
}

function HeroSection() {
  const scrollToLanguage = () => {
    document.getElementById("language")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-[580px] flex items-center"
      style={{
        backgroundImage:
          "url('/assets/generated/temple-hero.dim_1200x600.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.24 0.05 30 / 0.88) 0%, oklch(0.32 0.11 20 / 0.75) 50%, oklch(0.24 0.05 30 / 0.6) 100%)",
        }}
      />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-2 mb-4">
            <div
              className="h-px w-12"
              style={{ background: "oklch(0.75 0.1 75)" }}
            />
            <span
              className="font-tamil text-sm tracking-wider"
              style={{ color: "oklch(0.75 0.1 75)" }}
            >
              செம்மொழி
            </span>
          </div>

          <h2 className="font-tamil font-bold text-3xl md:text-5xl leading-tight mb-4 cream-text">
            தமிழ் — உலகின்
            <br />
            <span style={{ color: "oklch(0.75 0.1 75)" }}>பழமையான மொழி</span>
          </h2>

          <p
            className="font-tamil text-lg mb-3"
            style={{ color: "oklch(0.85 0.04 75)" }}
          >
            2000 ஆண்டுகளுக்கும் மேலான வரலாறு கொண்ட செம்மொழி
          </p>

          <p
            className="font-tamil text-base leading-relaxed mb-8"
            style={{ color: "oklch(0.78 0.03 75)" }}
          >
            தமிழ் மொழி உலகின் மிகப் பழமையான வாழும் மொழிகளில் ஒன்று. இதன் இலக்கியம், கலாச்சாரம்,
            மற்றும் பாரம்பரியம் மனிதகுலத்திற்கு அளிக்கப்பட்ட அரும்பெரும் கொடை.
          </p>

          <button
            type="button"
            onClick={scrollToLanguage}
            data-ocid="hero.primary_button"
            className="font-tamil font-semibold px-8 py-3 rounded text-sm transition-all duration-300 hover:scale-105"
            style={{
              background: "oklch(0.75 0.1 75)",
              color: "oklch(0.22 0.03 40)",
            }}
          >
            மேலும் அறிக ✦
          </button>
        </motion.div>
      </div>

      {/* Kolam corner decoration */}
      <div className="absolute bottom-0 right-0 w-48 h-48 opacity-20 pointer-events-none hidden lg:block">
        <img
          src="/assets/generated/kolam-pattern-transparent.dim_800x800.png"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>
    </section>
  );
}

function LanguageSection() {
  const vowels = ["அ", "ஆ", "இ", "ஈ", "உ", "ஊ", "எ", "ஏ", "ஐ", "ஒ", "ஓ", "ஔ"];
  const kurals = [
    {
      tamil: "கற்க கசடறக் கற்பவை கற்றபின்\nநிற்க அதற்குத் தக",
      meaning: "கற்கவேண்டியவற்றை குற்றமறக் கற்று அதன்படி நடக்கவேண்டும்",
      number: "குறள் 391",
    },
    {
      tamil: "அகர முதல எழுத்தெல்லாம் ஆதி\nபகவன் முதற்றே உலகு",
      meaning: "எழுத்துக்கள் எல்லாம் 'அ'வில் தொடங்குவதுபோல், உலகம் ஆதிபகவனில் தொடங்கியது",
      number: "குறள் 1",
    },
    {
      tamil: "இனிய உளவாக இன்னாத கூறல்\nகனியிருப்பக் காய்கவர்ந் தற்று",
      meaning:
        "இனிய சொற்கள் இருக்கும்போது கடுமையான சொற்களை சொல்வது, பழங்கள் இருக்கும்போது காயை சாப்பிடுவது போன்றது",
      number: "குறள் 100",
    },
  ];

  const sangamWorks = [
    {
      name: "அகநானூறு",
      type: "அகம்",
      desc: "400 அகப்பாடல்கள், காதல் நிலங்களை வர்ணிக்கும் நூல்",
    },
    {
      name: "புறநானூறு",
      type: "புறம்",
      desc: "400 வீரப்பாடல்கள், போர் வீரர்களை புகழ்ந்து பாடும் நூல்",
    },
    {
      name: "நற்றிணை",
      type: "அகம்",
      desc: "400 குறுந்தொகைப் பாடல்கள், இயற்கை வருணனை மிகுந்தது",
    },
    {
      name: "குறுந்தொகை",
      type: "அகம்",
      desc: "400 குறுங்காவிய பாடல்கள், காதல் உணர்வுகளின் தொகுப்பு",
    },
    {
      name: "பதிற்றுப்பத்து",
      type: "புறம்",
      desc: "10 சேர அரசர்களை பாடிய நூல், வீரம் மற்றும் கொடை",
    },
    {
      name: "பரிபாடல்",
      type: "சிறப்பு",
      desc: "திருமால் மற்றும் முருகனை பாடும் சிறப்பு நூல்",
    },
    {
      name: "கலித்தொகை",
      type: "அகம்",
      desc: "150 கலி பாக்கள், திணை வாழ்க்கையை சித்தரிக்கும்",
    },
    { name: "அகலிகை", type: "புறம்", desc: "வீரம் மற்றும் அரசர்களை புகழும் தொகைநூல்" },
  ];

  return (
    <section
      id="language"
      className="py-16 px-6 parchment-bg relative overflow-hidden"
    >
      <div className="max-w-[1100px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <img
            src="/assets/generated/kolam-pattern-transparent.dim_800x800.png"
            alt=""
            className="section-kolam-corner"
          />
          <div className="text-center mb-10">
            <div className="tamil-section-header pb-3">
              <div className="flex items-center justify-center gap-4 mb-2">
                <img
                  src="/assets/generated/kolam-pattern-transparent.dim_800x800.png"
                  alt=""
                  className="w-8 h-8 opacity-50"
                />
                <p
                  className="font-tamil text-sm tracking-widest"
                  style={{ color: "oklch(0.48 0.08 45)" }}
                >
                  LANGUAGE & LITERATURE
                </p>
                <img
                  src="/assets/generated/kolam-pattern-transparent.dim_800x800.png"
                  alt=""
                  className="w-8 h-8 opacity-50"
                />
              </div>
              <h2
                className="font-tamil font-bold text-3xl md:text-4xl"
                style={{ color: "oklch(0.32 0.11 20)" }}
              >
                மொழி{" "}
                <span style={{ color: "oklch(0.75 0.1 75)" }}>& இலக்கியம்</span>
              </h2>
            </div>
            <OrnamentalBorder />
          </div>

          {/* 1. Origin & Evolution */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">🌅</span>
              <h3
                className="font-tamil font-bold text-2xl"
                style={{ color: "oklch(0.32 0.11 20)" }}
              >
                தமிழின் தோற்றம் & பரிணாமம்
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-8">
              <div>
                <p
                  className="font-tamil text-base leading-relaxed mb-4"
                  style={{ color: "oklch(0.30 0.04 40)" }}
                >
                  தமிழ் மொழி உலகின் மிகப் பழமையான வாழும் மொழிகளில் ஒன்று. 2000
                  ஆண்டுகளுக்கும் மேலான தொடர்ச்சியான இலக்கிய வரலாற்றை கொண்ட இந்த மொழி, இந்திய
                  அரசாங்கத்தால் 2004 ஆம் ஆண்டு "செம்மொழி" (Classical Language) என்று
                  அறிவிக்கப்பட்டது.
                </p>
                <p
                  className="font-tamil text-base leading-relaxed mb-4"
                  style={{ color: "oklch(0.30 0.04 40)" }}
                >
                  தமிழின் தொடக்கம் சிந்துவெளி நாகரிகத்துடன் தொடர்புடையது என்று வரலாற்று
                  ஆராய்ச்சியாளர்கள் கருதுகின்றனர். கி.மு. 3 ஆம் நூற்றாண்டு முதல் கி.மு. 1 ஆம்
                  நூற்றாண்டு வரையிலான பிராமி கல்வெட்டுகளில் தமிழ் எழுத்துக்கள் காணப்படுகின்றன.
                </p>
                <p
                  className="font-tamil text-base leading-relaxed"
                  style={{ color: "oklch(0.30 0.04 40)" }}
                >
                  கிரேக்க, ரோமன் மற்றும் அரேபிய வணிகர்களுடன் கடல்வழி தொடர்பு கொண்டிருந்த
                  தமிழர்கள், தங்கள் மொழியை மட்டுமல்லாது கலாச்சாரத்தையும் உலகிற்கு பரப்பினர்.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  {
                    period: "கி.மு. 300 – கி.பி. 300",
                    name: "சங்க காலம்",
                    desc: "தமிழ் இலக்கியத்தின் பொற்காலம். எட்டுத்தொகை, பத்துப்பாட்டு இயற்றப்பட்ட காலம்.",
                    color: "oklch(0.75 0.1 75)",
                  },
                  {
                    period: "கி.பி. 300 – 600",
                    name: "பிற்சங்க காலம்",
                    desc: "திருக்குறள், சிலப்பதிகாரம் போன்ற இலக்கியங்கள் இயற்றப்பட்ட காலம்.",
                    color: "oklch(0.65 0.08 60)",
                  },
                  {
                    period: "கி.பி. 600 – 1200",
                    name: "பக்தி இலக்கிய காலம்",
                    desc: "தேவாரம், திருவாசகம் போன்ற பக்தி நூல்கள் தோன்றிய காலம்.",
                    color: "oklch(0.55 0.07 50)",
                  },
                  {
                    period: "கி.பி. 1200 – தற்கால",
                    name: "நவீன காலம்",
                    desc: "புதுக்கவிதை, சிறுகதை, நாவல் போன்ற நவீன இலக்கிய வடிவங்கள் வளர்ந்த காலம்.",
                    color: "oklch(0.48 0.08 45)",
                  },
                ].map((era, i) => (
                  <motion.div
                    key={era.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="flex gap-4 p-4 rounded-lg"
                    style={{
                      background: "oklch(0.88 0.02 75)",
                      borderLeft: `4px solid ${era.color}`,
                    }}
                    data-ocid={`language.era.item.${i + 1}`}
                  >
                    <div className="flex-1">
                      <div className="flex items-baseline gap-2 mb-1">
                        <h4
                          className="font-tamil font-bold text-sm"
                          style={{ color: "oklch(0.32 0.11 20)" }}
                        >
                          {era.name}
                        </h4>
                        <span
                          className="text-xs"
                          style={{ color: "oklch(0.48 0.08 45)" }}
                        >
                          {era.period}
                        </span>
                      </div>
                      <p
                        className="font-tamil text-xs leading-relaxed"
                        style={{ color: "oklch(0.35 0.04 40)" }}
                      >
                        {era.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats Banner */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: "2000+", label: "ஆண்டுகள் வரலாறு", icon: "📅" },
                { value: "8 கோடி", label: "பேசுவோர் உலகில்", icon: "🌏" },
                { value: "100+", label: "மொழிகளில் மொழிபெயர்ப்பு", icon: "📚" },
                { value: "2004", label: "செம்மொழி அந்தஸ்து", icon: "🏆" },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className="text-center p-4 rounded-lg"
                  style={{
                    background: "oklch(0.32 0.11 20)",
                    border: "1px solid oklch(0.75 0.1 75 / 0.5)",
                  }}
                  data-ocid={`language.stat.item.${i + 1}`}
                >
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <div
                    className="font-bold text-xl"
                    style={{ color: "oklch(0.75 0.1 75)" }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="font-tamil text-xs"
                    style={{ color: "oklch(0.82 0.03 75)" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <OrnamentalBorder />

          {/* 2. Sangam Literature */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">📜</span>
              <h3
                className="font-tamil font-bold text-2xl"
                style={{ color: "oklch(0.32 0.11 20)" }}
              >
                சங்க இலக்கியம்
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <p
                  className="font-tamil text-base leading-relaxed mb-4"
                  style={{ color: "oklch(0.30 0.04 40)" }}
                >
                  சங்க காலம் என்பது கி.மு. 300 முதல் கி.பி. 300 வரையிலான காலகட்டம்.
                  இக்காலத்தில் மூன்று தமிழ் சங்கங்கள் (Academic Assemblies) மதுரையில்
                  நடைபெற்றதாக வரலாறு கூறுகிறது. இக்காலத்தில் தோன்றிய இலக்கியங்கள் தமிழரின்
                  வாழ்க்கை, காதல், வீரம், இயற்கை ஆகியவற்றை அழகுற சித்தரிக்கின்றன.
                </p>
                <p
                  className="font-tamil text-base leading-relaxed mb-4"
                  style={{ color: "oklch(0.30 0.04 40)" }}
                >
                  சங்க இலக்கியம் இரு பிரிவுகளாக வகைப்படுத்தப்படுகிறது:{" "}
                  <strong>அகம்</strong> (காதல் கவிதைகள்) மற்றும் <strong>புறம்</strong>{" "}
                  (வீரம், போர், கொடை பற்றிய கவிதைகள்). ஐந்து திணைகள் (குறிஞ்சி-மலை,
                  முல்லை-காடு, மருதம்-வயல், நெய்தல்-கடல், பாலை-வெப்பம்) என்ற தனித்துவமான
                  வகைப்பாட்டில் காதல் கவிதைகள் அமைந்திருக்கின்றன.
                </p>
                <div
                  className="p-4 rounded-lg mb-4"
                  style={{
                    background: "oklch(0.88 0.02 75)",
                    borderLeft: "4px solid oklch(0.75 0.1 75)",
                  }}
                >
                  <h4
                    className="font-tamil font-bold text-sm mb-2"
                    style={{ color: "oklch(0.32 0.11 20)" }}
                  >
                    தொல்காப்பியம்
                  </h4>
                  <p
                    className="font-tamil text-sm leading-relaxed"
                    style={{ color: "oklch(0.30 0.04 40)" }}
                  >
                    தொல்காப்பியர் இயற்றிய தொல்காப்பியம் தமிழின் முதல் இலக்கண நூல். 1610
                    சூத்திரங்களை கொண்ட இந்நூல் எழுத்து, சொல், பொருள் என்ற மூன்று அதிகாரங்களை
                    கொண்டது. உலகின் மிக முழுமையான பண்டைய இலக்கண நூல்களில் ஒன்றாக இது
                    கருதப்படுகிறது.
                  </p>
                </div>
              </div>
              <div>
                <h4
                  className="font-tamil font-bold text-lg mb-4"
                  style={{ color: "oklch(0.32 0.11 20)" }}
                >
                  எட்டுத்தொகை நூல்கள்
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {sangamWorks.map((work, i) => (
                    <div
                      key={work.name}
                      className="flex gap-3 p-3 rounded"
                      style={{ background: "oklch(0.88 0.02 75)" }}
                      data-ocid={`language.sangam.item.${i + 1}`}
                    >
                      <div className="flex-shrink-0 w-14 text-center">
                        <span
                          className="text-xs font-bold px-2 py-1 rounded"
                          style={{
                            background:
                              work.type === "அகம்"
                                ? "oklch(0.75 0.1 75 / 0.2)"
                                : work.type === "புறம்"
                                  ? "oklch(0.32 0.11 20 / 0.15)"
                                  : "oklch(0.48 0.08 45 / 0.15)",
                            color: "oklch(0.32 0.11 20)",
                          }}
                        >
                          {work.type}
                        </span>
                      </div>
                      <div>
                        <h5
                          className="font-tamil font-bold text-sm"
                          style={{ color: "oklch(0.32 0.11 20)" }}
                        >
                          {work.name}
                        </h5>
                        <p
                          className="font-tamil text-xs"
                          style={{ color: "oklch(0.40 0.05 40)" }}
                        >
                          {work.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <OrnamentalBorder />

          {/* 3. Grammar */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">✍️</span>
              <h3
                className="font-tamil font-bold text-2xl"
                style={{ color: "oklch(0.32 0.11 20)" }}
              >
                தமிழ் இலக்கணம் — எழுத்துக்கள்
              </h3>
            </div>
            <p
              className="font-tamil text-base leading-relaxed mb-6"
              style={{ color: "oklch(0.30 0.04 40)" }}
            >
              தமிழ் எழுத்துமுறை உலகிலேயே மிக தர்க்கரீதியான மற்றும் அழகியலான
              எழுத்துமுறைகளில் ஒன்று. மொத்தம் 247 எழுத்துக்கள் கொண்ட தமிழ் அகரவரிசை, 12
              உயிர் எழுத்துக்கள், 18 மெய் எழுத்துக்கள் மற்றும் 216 உயிர்மெய் எழுத்துக்களை
              கொண்டது.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Vowels */}
              <div
                className="p-5 rounded-lg"
                style={{
                  background: "oklch(0.32 0.11 20)",
                  border: "2px solid oklch(0.75 0.1 75)",
                }}
              >
                <h4 className="font-tamil font-bold text-lg gold-text text-center mb-4">
                  உயிர் எழுத்துக்கள் (12)
                </h4>
                <p
                  className="font-tamil text-xs text-center mb-4"
                  style={{ color: "oklch(0.65 0.07 75)" }}
                >
                  Vowels
                </p>
                <div className="grid grid-cols-4 gap-2">
                  {vowels.map((v) => (
                    <div
                      key={String(v)}
                      className="text-center py-2 rounded"
                      style={{
                        background: "oklch(0.24 0.05 30)",
                        border: "1px solid oklch(0.75 0.1 75 / 0.3)",
                      }}
                    >
                      <span className="font-tamil text-xl gold-text">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Consonants info */}
              <div
                className="p-5 rounded-lg"
                style={{
                  background: "oklch(0.88 0.02 75)",
                  border: "2px solid oklch(0.75 0.1 75 / 0.4)",
                }}
              >
                <h4
                  className="font-tamil font-bold text-lg text-center mb-4"
                  style={{ color: "oklch(0.32 0.11 20)" }}
                >
                  மெய் எழுத்துக்கள் (18)
                </h4>
                <p
                  className="font-tamil text-xs text-center mb-4"
                  style={{ color: "oklch(0.48 0.08 45)" }}
                >
                  Consonants
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    "க்",
                    "ங்",
                    "ச்",
                    "ஞ்",
                    "ட்",
                    "ண்",
                    "த்",
                    "ந்",
                    "ப்",
                    "ம்",
                    "ய்",
                    "ர்",
                    "ல்",
                    "வ்",
                    "ழ்",
                    "ள்",
                    "ற்",
                    "ன்",
                  ].map((c) => (
                    <div
                      key={String(c)}
                      className="text-center py-2 rounded"
                      style={{
                        background: "oklch(0.78 0.03 75)",
                        border: "1px solid oklch(0.65 0.07 75 / 0.4)",
                      }}
                    >
                      <span
                        className="font-tamil text-base font-bold"
                        style={{ color: "oklch(0.32 0.11 20)" }}
                      >
                        {c}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Summary */}
              <div
                className="p-5 rounded-lg flex flex-col gap-4"
                style={{
                  background: "oklch(0.32 0.11 20)",
                  border: "2px solid oklch(0.48 0.08 45)",
                }}
              >
                <h4 className="font-tamil font-bold text-lg gold-text text-center">
                  உயிர்மெய் எழுத்துக்கள்
                </h4>
                <p
                  className="font-tamil text-xs text-center"
                  style={{ color: "oklch(0.65 0.07 75)" }}
                >
                  Compound Letters
                </p>
                <div className="text-center py-4">
                  <span
                    className="font-bold text-5xl"
                    style={{ color: "oklch(0.75 0.1 75)" }}
                  >
                    216
                  </span>
                  <p
                    className="font-tamil text-sm mt-2"
                    style={{ color: "oklch(0.82 0.03 75)" }}
                  >
                    உயிர்மெய் எழுத்துக்கள்
                  </p>
                  <p
                    className="font-tamil text-xs mt-1"
                    style={{ color: "oklch(0.65 0.07 75)" }}
                  >
                    12 உயிர் × 18 மெய் = 216
                  </p>
                </div>
                <div
                  className="text-center py-3 rounded"
                  style={{
                    background: "oklch(0.24 0.05 30)",
                    border: "1px solid oklch(0.75 0.1 75 / 0.3)",
                  }}
                >
                  <p className="font-tamil text-base gold-text font-bold">
                    மொத்தம்: 247 எழுத்துக்கள்
                  </p>
                  <p
                    className="font-tamil text-xs mt-1"
                    style={{ color: "oklch(0.65 0.07 75)" }}
                  >
                    12 + 18 + 216 + 1 (ஆயுதம்)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <OrnamentalBorder />

          {/* 4. Major Works */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">📖</span>
              <h3
                className="font-tamil font-bold text-2xl"
                style={{ color: "oklch(0.32 0.11 20)" }}
              >
                சிறந்த தமிழ் நூல்கள்
              </h3>
            </div>

            {/* Thirukkural */}
            <div
              className="rounded-xl overflow-hidden mb-8"
              style={{ border: "2px solid oklch(0.75 0.1 75)" }}
            >
              <div
                className="p-6"
                style={{ background: "oklch(0.32 0.11 20)" }}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl">✦</span>
                      <div>
                        <h4 className="font-tamil font-bold text-xl gold-text">
                          திருக்குறள்
                        </h4>
                        <p
                          className="font-display text-sm"
                          style={{ color: "oklch(0.65 0.07 75)" }}
                        >
                          Thirukkural — Universal Scripture
                        </p>
                      </div>
                    </div>
                    <p
                      className="font-tamil text-sm leading-relaxed mb-4"
                      style={{ color: "oklch(0.82 0.03 75)" }}
                    >
                      திருவள்ளுவர் இயற்றிய திருக்குறள் 133 அதிகாரங்களில் 1330 குறட்பாக்களை
                      கொண்டது. அறம் (Virtue), பொருள் (Wealth), இன்பம் (Love) என்ற
                      மூன்று பால்களை உள்ளடக்கிய இந்நூல் "உலகின் வேதம்" என்றும் "தெய்வீக
                      புத்தகம்" என்றும் போற்றப்படுகிறது.
                    </p>
                    <p
                      className="font-tamil text-sm leading-relaxed mb-4"
                      style={{ color: "oklch(0.82 0.03 75)" }}
                    >
                      100க்கும் மேலான மொழிகளில் மொழிபெயர்க்கப்பட்ட திருக்குறள், UNESCO உலக
                      பாரம்பரிய நூல்களில் இடம் பெற்றுள்ளது. ஐன்ஸ்டீன் முதல் நேருஜி வரை பலரும்
                      இதை புகழ்ந்துள்ளனர்.
                    </p>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { n: "1330", l: "குறட்பாக்கள்" },
                        { n: "133", l: "அதிகாரங்கள்" },
                        { n: "3", l: "பால்கள்" },
                      ].map((s) => (
                        <div
                          key={s.n}
                          className="text-center p-3 rounded"
                          style={{ background: "oklch(0.24 0.05 30)" }}
                        >
                          <div
                            className="font-bold text-2xl"
                            style={{ color: "oklch(0.75 0.1 75)" }}
                          >
                            {s.n}
                          </div>
                          <div
                            className="font-tamil text-xs"
                            style={{ color: "oklch(0.65 0.07 75)" }}
                          >
                            {s.l}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="md:w-72 space-y-4">
                    {kurals.map((kural) => (
                      <div
                        key={String(kural)}
                        className="p-4 rounded"
                        style={{
                          background: "oklch(0.24 0.05 30)",
                          border: "1px solid oklch(0.75 0.1 75 / 0.3)",
                        }}
                      >
                        <p className="font-tamil text-sm gold-text leading-relaxed mb-2 whitespace-pre-line">
                          "{kural.tamil}"
                        </p>
                        <p
                          className="font-tamil text-xs leading-relaxed mb-1"
                          style={{ color: "oklch(0.72 0.04 75)" }}
                        >
                          {kural.meaning}
                        </p>
                        <p
                          className="font-display text-xs"
                          style={{ color: "oklch(0.48 0.08 45)" }}
                        >
                          — {kural.number}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Epics */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div
                className="p-6 rounded-xl"
                style={{
                  background: "oklch(0.88 0.02 75)",
                  border: "2px solid oklch(0.75 0.1 75 / 0.4)",
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">🎭</span>
                  <div>
                    <h4
                      className="font-tamil font-bold text-lg"
                      style={{ color: "oklch(0.32 0.11 20)" }}
                    >
                      சிலப்பதிகாரம்
                    </h4>
                    <p
                      className="font-display text-xs"
                      style={{ color: "oklch(0.48 0.08 45)" }}
                    >
                      Silappathikaram — The Epic of the Anklet
                    </p>
                  </div>
                </div>
                <img
                  src="/assets/generated/silappathikaram-epic.dim_600x400.jpg"
                  alt="சிலப்பதிகாரம் - கண்ணகி"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                  style={{ border: "2px solid oklch(0.75 0.1 75 / 0.5)" }}
                />
                <p
                  className="font-tamil text-sm leading-relaxed mb-3"
                  style={{ color: "oklch(0.30 0.04 40)" }}
                >
                  இளங்கோவடிகள் இயற்றிய சிலப்பதிகாரம் தமிழின் ஐம்பெரும் காப்பியங்களில்
                  முதலாவது. கோவலன் மற்றும் கண்ணகியின் காதல் கதையை சித்தரிக்கும் இந்நூல் நீதி,
                  காதல், மற்றும் வீரத்தை ஒருசேர கொண்டாடுகிறது.
                </p>
                <p
                  className="font-tamil text-sm leading-relaxed"
                  style={{ color: "oklch(0.30 0.04 40)" }}
                >
                  கண்ணகி மதுரை நகரை எரித்த கதை, அன்றைய தமிழ் சமூகத்தில் நீதி மற்றும்
                  பெண்ணின் வலிமையை கோடிட்டுக் காட்டுகிறது. இன்றும் கண்ணகி தமிழ் நாட்டின் பற்தி
                  தெய்வமாக வழிபடப்படுகிறாள்.
                </p>
              </div>
              <div
                className="p-6 rounded-xl"
                style={{
                  background: "oklch(0.88 0.02 75)",
                  border: "2px solid oklch(0.75 0.1 75 / 0.4)",
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">🌸</span>
                  <div>
                    <h4
                      className="font-tamil font-bold text-lg"
                      style={{ color: "oklch(0.32 0.11 20)" }}
                    >
                      மணிமேகலை
                    </h4>
                    <p
                      className="font-display text-xs"
                      style={{ color: "oklch(0.48 0.08 45)" }}
                    >
                      Manimekalai — The Buddhist Epic
                    </p>
                  </div>
                </div>
                <img
                  src="/assets/generated/manimekalai-epic.dim_600x400.jpg"
                  alt="மணிமேகலை"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                  style={{ border: "2px solid oklch(0.75 0.1 75 / 0.5)" }}
                />
                <p
                  className="font-tamil text-sm leading-relaxed mb-3"
                  style={{ color: "oklch(0.30 0.04 40)" }}
                >
                  சீத்தலைச் சாத்தனார் இயற்றிய மணிமேகலை, சிலப்பதிகாரத்தின் தொடர்கதை.
                  கோவலன்-மாதவியின் மகளான மணிமேகலை, நாட்டியத்திலிருந்து விலகி புத்த
                  துறவியாகும் கதை இதில் விவரிக்கப்படுகிறது.
                </p>
                <p
                  className="font-tamil text-sm leading-relaxed"
                  style={{ color: "oklch(0.30 0.04 40)" }}
                >
                  புத்த தத்துவத்தை மையமாக கொண்ட இந்நூல், அன்றைய தமிழகத்தில் புத்த மதத்தின்
                  செல்வாக்கையும் பெண்களின் ஆன்மீக தேடலையும் அழகுற சித்தரிக்கிறது.
                </p>
              </div>
            </div>
          </div>

          <OrnamentalBorder />

          {/* 5. Tamil in Modern World */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">🌐</span>
              <h3
                className="font-tamil font-bold text-2xl"
                style={{ color: "oklch(0.32 0.11 20)" }}
              >
                நவீன உலகில் தமிழ்
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="md:col-span-2">
                <p
                  className="font-tamil text-base leading-relaxed mb-4"
                  style={{ color: "oklch(0.30 0.04 40)" }}
                >
                  இன்று உலகெங்கும் சுமார் 8 கோடி மக்கள் தமிழ் பேசுகின்றனர். இந்தியாவில்
                  தமிழ்நாடு மற்றும் புதுச்சேரியிலும், இலங்கையிலும், சிங்கப்பூரிலும் தமிழ்
                  அலுவல் மொழியாக உள்ளது. மலேசியா, தென்னாப்பிரிக்கா, கனடா, ஆஸ்திரேலியா,
                  அமெரிக்கா, ஐரோப்பா எனப் பல நாடுகளில் தமிழ் பேசும் சமூகங்கள் செழிப்புடன்
                  வாழ்கின்றன.
                </p>
                <p
                  className="font-tamil text-base leading-relaxed mb-4"
                  style={{ color: "oklch(0.30 0.04 40)" }}
                >
                  தமிழ் திரையிசை மற்றும் திரைப்படங்கள் உலகளாவிய ரசிகர்களை பெற்றுள்ளன.
                  ரஹ்மான், இளையராஜா போன்றோரின் இசை உலகின் கோடிக்கணக்கான மனிதர்களை
                  மயக்குகிறது. ஒவ்வொரு ஆண்டும் டிசம்பர்-ஜனவரி மாதங்களில் சென்னையில் நடக்கும்
                  மார்கழி திருவிழாவில் நூற்றுக்கணக்கான கர்நாடக இசை கச்சேரிகள் நடைபெறுகின்றன.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      icon: "🏛️",
                      title: "அலுவல் மொழி நிலை",
                      desc: "இந்தியா, இலங்கை, சிங்கப்பூர் ஆகிய மூன்று நாடுகளில் அலுவல் மொழி",
                    },
                    {
                      icon: "🎬",
                      title: "தமிழ் சினிமா",
                      desc: "உலகின் மிகப் பழமையான சினிமா தொழில்களில் ஒன்று — கல்லக்கட்டி, RRR, Ponniyin Selvan",
                    },
                    {
                      icon: "🌐",
                      title: "டிஜிட்டல் தமிழ்",
                      desc: "யூனிகோட், கூகுள் மொழிபெயர்ப்பு, AI எழுத்துமுறை உள்ளிட்ட தொழில்நுட்ப ஆதரவு",
                    },
                    {
                      icon: "📡",
                      title: "தமிழ் ஊடகங்கள்",
                      desc: "உலகெங்கும் 100க்கும் மேற்பட்ட தமிழ் தொலைக்காட்சி சேனல்கள் மற்றும் ஆயிரக்கணக்கான வலைதளங்கள்",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="p-4 rounded-lg flex gap-3"
                      style={{
                        background: "oklch(0.88 0.02 75)",
                        border: "1px solid oklch(0.75 0.1 75 / 0.3)",
                      }}
                    >
                      <span className="text-2xl flex-shrink-0">
                        {item.icon}
                      </span>
                      <div>
                        <h5
                          className="font-tamil font-bold text-sm mb-1"
                          style={{ color: "oklch(0.32 0.11 20)" }}
                        >
                          {item.title}
                        </h5>
                        <p
                          className="font-tamil text-xs leading-relaxed"
                          style={{ color: "oklch(0.40 0.05 40)" }}
                        >
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <div
                  className="p-5 rounded-xl text-center"
                  style={{
                    background: "oklch(0.32 0.11 20)",
                    border: "2px solid oklch(0.75 0.1 75)",
                  }}
                >
                  <p
                    className="font-tamil text-xs mb-2"
                    style={{ color: "oklch(0.65 0.07 75)" }}
                  >
                    திருக்குறள் மொழிபெயர்ப்புகள்
                  </p>
                  <span
                    className="font-bold text-4xl"
                    style={{ color: "oklch(0.75 0.1 75)" }}
                  >
                    100+
                  </span>
                  <p
                    className="font-tamil text-xs mt-1"
                    style={{ color: "oklch(0.82 0.03 75)" }}
                  >
                    உலக மொழிகளில்
                  </p>
                </div>
                <div
                  className="p-5 rounded-xl"
                  style={{
                    background: "oklch(0.88 0.02 75)",
                    border: "1px solid oklch(0.75 0.1 75 / 0.4)",
                  }}
                >
                  <h5
                    className="font-tamil font-bold text-sm mb-3"
                    style={{ color: "oklch(0.32 0.11 20)" }}
                  >
                    தமிழ் இலக்கிய விருதுகள்
                  </h5>
                  <ul className="space-y-2">
                    {[
                      "சாகித்ய அகாடமி விருது",
                      "ஞானபீட விருது",
                      "தமிழ்நாடு அரசு விருதுகள்",
                      "UNESCO அங்கீகாரம்",
                    ].map((award) => (
                      <li
                        key={String(award)}
                        className="font-tamil text-xs flex items-center gap-2"
                        style={{ color: "oklch(0.35 0.04 40)" }}
                      >
                        <span style={{ color: "oklch(0.75 0.1 75)" }}>✦</span>{" "}
                        {award}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ArtSection() {
  return (
    <section
      id="art"
      className="py-16 px-6 relative overflow-hidden"
      style={{ background: "oklch(0.24 0.05 30)" }}
    >
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Section Header */}
          <img
            src="/assets/generated/kolam-pattern-transparent.dim_800x800.png"
            alt=""
            className="section-kolam-corner-light"
          />
          <div className="text-center mb-10">
            <div className="tamil-section-header-light pb-3">
              <div className="flex items-center justify-center gap-4 mb-2">
                <img
                  src="/assets/generated/kolam-pattern-transparent.dim_800x800.png"
                  alt=""
                  className="w-8 h-8 opacity-30 brightness-200"
                />
                <p
                  className="font-tamil text-sm tracking-widest"
                  style={{ color: "oklch(0.65 0.07 75)" }}
                >
                  ART & CULTURE
                </p>
                <img
                  src="/assets/generated/kolam-pattern-transparent.dim_800x800.png"
                  alt=""
                  className="w-8 h-8 opacity-30 brightness-200"
                />
              </div>
              <h2 className="font-tamil font-bold text-3xl md:text-4xl cream-text">
                கலை <span className="gold-text">& கலாச்சாரம்</span>
              </h2>
            </div>
            <OrnamentalBorder />
          </div>

          {/* 1. Bharatanatyam */}
          <div className="mb-14">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">💃</span>
                  <div>
                    <h3 className="font-tamil font-bold text-2xl gold-text">
                      பரதநாட்டியம்
                    </h3>
                    <p
                      className="font-display text-sm"
                      style={{ color: "oklch(0.65 0.07 75)" }}
                    >
                      Bharatanatyam — The Classical Dance
                    </p>
                  </div>
                </div>
                <p
                  className="font-tamil text-sm leading-relaxed mb-4"
                  style={{ color: "oklch(0.82 0.03 75)" }}
                >
                  தமிழ்நாட்டின் செம்மொழி நடன வடிவமான பரதநாட்டியம் கோவில் நாட்டியமாக
                  தொடங்கியது. தஞ்சாவூர் நான்மணிகள் (Tanjore Quartet) இந்த நடன வடிவை
                  தொகுத்து கட்டமைத்தனர். அபிநயம் (expression), நிருத்தம் (pure dance),
                  நித்யம் (rhythmic) என மூன்று கூறுகளை கொண்டது.
                </p>
                <p
                  className="font-tamil text-sm leading-relaxed mb-4"
                  style={{ color: "oklch(0.82 0.03 75)" }}
                >
                  19ஆம் நூற்றாண்டில் ரத்தின்னி தேவி (Rukmini Devi Arundale) பரதநாட்டியத்தை
                  புத்துயிர் அளித்தார். இன்று கலாக்ஷேத்ரா நிறுவனம் (Chennai) இக்கலையை
                  உலகளாவிய அளவில் பரப்பி வருகிறது.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    {
                      title: "நவரசங்கள்",
                      items: [
                        "சிருங்காரம்",
                        "ஹாஸ்யம்",
                        "கருணை",
                        "ரௌத்திரம்",
                        "வீரம்",
                        "பயானகம்",
                        "பீபத்சம்",
                        "அத்புதம்",
                        "சாந்தம்",
                      ],
                    },
                    {
                      title: "முக்கிய அங்கங்கள்",
                      items: [
                        "அலாரிப்பு",
                        "ஜதிஸ்வரம்",
                        "சப்தம்",
                        "வர்ணம்",
                        "பதம்",
                        "திலானா",
                      ],
                    },
                  ].map((group) => (
                    <div
                      key={group.title}
                      className="p-3 rounded"
                      style={{
                        background: "oklch(0.32 0.11 20 / 0.6)",
                        border: "1px solid oklch(0.75 0.1 75 / 0.3)",
                      }}
                    >
                      <h5 className="font-tamil text-xs font-bold gold-text mb-2">
                        {group.title}
                      </h5>
                      <div className="flex flex-wrap gap-1">
                        {group.items.map((item) => (
                          <span
                            key={String(item)}
                            className="font-tamil text-xs px-2 py-0.5 rounded"
                            style={{
                              background: "oklch(0.24 0.05 30)",
                              color: "oklch(0.82 0.03 75)",
                            }}
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div
                  className="rounded-lg overflow-hidden mb-4"
                  style={{ border: "2px solid oklch(0.75 0.1 75)" }}
                >
                  <img
                    src="/assets/generated/bharatanatyam.dim_800x500.jpg"
                    alt="Bharatanatyam dancer"
                    className="w-full h-72 object-cover"
                    loading="lazy"
                  />
                </div>
                <div
                  className="p-4 rounded"
                  style={{
                    background: "oklch(0.32 0.11 20 / 0.6)",
                    borderLeft: "4px solid oklch(0.75 0.1 75)",
                  }}
                >
                  <h5 className="font-tamil font-bold text-sm gold-text mb-2">
                    கை முத்திரைகள் (Hastas)
                  </h5>
                  <p
                    className="font-tamil text-xs leading-relaxed"
                    style={{ color: "oklch(0.82 0.03 75)" }}
                  >
                    நாட்டியத்தில் 28 சிங்க ஹஸ்தங்கள் மற்றும் 24 ஸம்யுக்த ஹஸ்தங்கள் உள்ளன. ஒவ்வொரு
                    கை அமைப்பும் ஒரு குறிப்பிட்ட பொருளை சொல்லும் — அன்று முதல் இன்று வரை
                    மாறாத மொழி.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <OrnamentalBorder />

          {/* 2. Carnatic Music */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">🎵</span>
              <div>
                <h3 className="font-tamil font-bold text-2xl gold-text">
                  கர்நாடக இசை
                </h3>
                <p
                  className="font-display text-sm"
                  style={{ color: "oklch(0.65 0.07 75)" }}
                >
                  Carnatic Music — The Classical Tradition
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {[
                {
                  name: "தியாகராஜர்",
                  place: "திருவையாறு",
                  icon: "🎶",
                  desc: "கர்நாடக இசையின் மூவர்களில் முதல்வர். 24,000க்கும் மேற்பட்ட கிர்த்தனைகளை இயற்றியவர். தியாகராஜர் ஆராதனை விழா தினமும் ஜனவரியில் திருவையாறில் கொண்டாடப்படுகிறது.",
                },
                {
                  name: "முத்துசாமி தீட்சிதர்",
                  place: "சிதம்பரம்",
                  icon: "🎼",
                  desc: "சமஸ்கிருதம் மற்றும் தெலுங்கு கிர்த்தனைகளுக்கு புகழ் பெற்றவர். 72 மேளகர்த்த ராகங்களை உள்ளடக்கிய நூட்டு சுவரங்கள் இவரது சிறப்பான படைப்பு.",
                },
                {
                  name: "ஸ்யாம சாஸ்திரி",
                  place: "திருவாரூர்",
                  icon: "🎹",
                  desc: "தாயை மையமாக கொண்ட பக்தி கிர்த்தனைகளுக்கு பெயர் பெற்றவர். மூவரிலும் மிக கடினமான ராக-தாள கட்டுமானங்களை கொண்ட படைப்புகள் உடையவர்.",
                },
              ].map((composer, i) => (
                <motion.div
                  key={composer.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className="p-5 rounded-xl text-center"
                  style={{
                    background: "oklch(0.32 0.11 20)",
                    border: "2px solid oklch(0.75 0.1 75 / 0.5)",
                  }}
                  data-ocid={`art.carnatic.item.${i + 1}`}
                >
                  <div className="text-4xl mb-2">{composer.icon}</div>
                  <h4 className="font-tamil font-bold text-base gold-text mb-1">
                    {composer.name}
                  </h4>
                  <p
                    className="font-tamil text-xs mb-3"
                    style={{ color: "oklch(0.65 0.07 75)" }}
                  >
                    📍 {composer.place}
                  </p>
                  <p
                    className="font-tamil text-xs leading-relaxed"
                    style={{ color: "oklch(0.82 0.03 75)" }}
                  >
                    {composer.desc}
                  </p>
                </motion.div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div
                className="p-5 rounded-xl"
                style={{
                  background: "oklch(0.32 0.11 20 / 0.6)",
                  border: "1px solid oklch(0.75 0.1 75 / 0.4)",
                }}
              >
                <h4 className="font-tamil font-bold text-base gold-text mb-3">
                  🎻 முக்கிய இசைக்கருவிகள்
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { name: "வீணை", desc: "மெட்டு கருவிகளின் ராணி" },
                    { name: "மிருதங்கம்", desc: "கர்நாடக தாள வாத்தியம்" },
                    { name: "நாதஸ்வரம்", desc: "கோவில் இசையின் குரல்" },
                    { name: "வயலின்", desc: "மெட்டு இசையின் துணைவர்" },
                    { name: "கஞ்சிரா", desc: "சிறிய தாள வாத்தியம்" },
                    { name: "மோர்சிங்", desc: "வாய் வாத்தியம்" },
                  ].map((inst) => (
                    <div
                      key={inst.name}
                      className="p-2 rounded"
                      style={{ background: "oklch(0.24 0.05 30)" }}
                    >
                      <p className="font-tamil font-bold text-xs gold-text">
                        {inst.name}
                      </p>
                      <p
                        className="font-tamil text-xs"
                        style={{ color: "oklch(0.72 0.04 75)" }}
                      >
                        {inst.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="p-5 rounded-xl"
                style={{
                  background: "oklch(0.32 0.11 20 / 0.6)",
                  border: "1px solid oklch(0.75 0.1 75 / 0.4)",
                }}
              >
                <h4 className="font-tamil font-bold text-base gold-text mb-3">
                  🎤 மார்கழி திருவிழா
                </h4>
                <p
                  className="font-tamil text-sm leading-relaxed mb-3"
                  style={{ color: "oklch(0.82 0.03 75)" }}
                >
                  டிசம்பர்-ஜனவரி மாதங்களில் சென்னையில் நடைபெறும் மார்கழி திருவிழா உலகின்
                  மிகப் பெரிய கலாச்சார நிகழ்வுகளில் ஒன்று. சுமார் 2000க்கும் மேற்பட்ட கர்நாடக
                  இசை கச்சேரிகள், பரதநாட்டிய நிகழ்ச்சிகள் மற்றும் பண்பாட்டு விழாக்கள் நடைபெறும்.
                </p>
                <p
                  className="font-tamil text-sm leading-relaxed"
                  style={{ color: "oklch(0.82 0.03 75)" }}
                >
                  "மார்கழி ராகம்" என்று பொருள் கொள்ளும் இந்த திருவிழாவில் உலகெங்கும் இருந்து
                  ஆயிரக்கணக்கான கலை ரசிகர்கள் சென்னைக்கு வருகிறார்கள்.
                </p>
              </div>
            </div>
          </div>

          <OrnamentalBorder />

          {/* 3. Traditional Dress */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">👗</span>
              <div>
                <h3 className="font-tamil font-bold text-2xl gold-text">
                  பாரம்பரிய உடை
                </h3>
                <p
                  className="font-display text-sm"
                  style={{ color: "oklch(0.65 0.07 75)" }}
                >
                  Traditional Dress
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div
                className="p-6 rounded-xl"
                style={{
                  background: "oklch(0.32 0.11 20)",
                  border: "2px solid oklch(0.75 0.1 75 / 0.5)",
                }}
              >
                <h4 className="font-tamil font-bold text-lg gold-text mb-3">
                  🥻 காஞ்சிபுரம் பட்டுப் புடவை
                </h4>
                <p
                  className="font-tamil text-sm leading-relaxed mb-4"
                  style={{ color: "oklch(0.82 0.03 75)" }}
                >
                  காஞ்சிபுரம் பட்டுப் புடவை (Kanchipuram Silk Saree) தமிழரின் மிக
                  முக்கியமான பாரம்பரிய உடை. GI Tag (Geographical Indication) பெற்ற
                  இந்த புடவை திருமணங்களிலும் கோவில் விழாக்களிலும் அணிவது வழக்கம்.
                </p>
                <p
                  className="font-tamil text-sm leading-relaxed mb-4"
                  style={{ color: "oklch(0.82 0.03 75)" }}
                >
                  தூய மல்பெரி பட்டில் தயாரிக்கப்படும் இந்த புடவையில் கோவில் வடிவங்கள், மயில்,
                  யானை, தாமரை போன்ற பாரம்பரிய வடிவங்கள் நெய்யப்படும். ஒரு புடவை நெய்ய
                  குறைந்தது 3-5 நாட்கள் ஆகும்.
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "9 கஜம் மடிசார் (திருமணம்)",
                    "6 கஜம் சாதாரண உடை",
                    "கோவில் திருவிழா உடை",
                    "குழந்தை பட்டுப் புடவை",
                  ].map((type) => (
                    <div
                      key={String(type)}
                      className="p-2 rounded text-center"
                      style={{
                        background: "oklch(0.24 0.05 30)",
                        border: "1px solid oklch(0.75 0.1 75 / 0.3)",
                      }}
                    >
                      <p
                        className="font-tamil text-xs"
                        style={{ color: "oklch(0.82 0.03 75)" }}
                      >
                        {type}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="p-6 rounded-xl"
                style={{
                  background: "oklch(0.32 0.11 20)",
                  border: "2px solid oklch(0.75 0.1 75 / 0.5)",
                }}
              >
                <h4 className="font-tamil font-bold text-lg gold-text mb-3">
                  👘 வேட்டி & அங்கவஸ்திரம்
                </h4>
                <p
                  className="font-tamil text-sm leading-relaxed mb-4"
                  style={{ color: "oklch(0.82 0.03 75)" }}
                >
                  ஆண்களுக்கான பாரம்பரிய உடையான வேட்டி (dhoti) வெள்ளை நிறத்தில் இருக்கும்.
                  திருமணங்களில் பட்டு வேட்டி அணிவார்கள். தோளில் அங்கவஸ்திரம் சுற்றுவது
                  மரியாதையின் அடையாளம்.
                </p>
                <p
                  className="font-tamil text-sm leading-relaxed mb-4"
                  style={{ color: "oklch(0.82 0.03 75)" }}
                >
                  கோவில்களுக்கு செல்லும்போது வேட்டி-அங்கவஸ்திரம் அணிவது கட்டாயமாக
                  கருதப்படுகிறது. சென்னை, மதுரை போன்ற நகரங்களில் இன்றும் திருவிழாக்களில்
                  பாரம்பரிய உடை அணிவது தொடர்கிறது.
                </p>
                <div
                  className="p-3 rounded"
                  style={{
                    background: "oklch(0.24 0.05 30)",
                    borderLeft: "3px solid oklch(0.75 0.1 75)",
                  }}
                >
                  <p className="font-tamil text-xs gold-text font-bold mb-1">
                    திருமண உடை சிறப்பு
                  </p>
                  <p
                    className="font-tamil text-xs"
                    style={{ color: "oklch(0.72 0.04 75)" }}
                  >
                    மணமகள் — கோவில் வடிவ காஞ்சிபுரம் புடவை, தங்க நகைகள், வேப்பிலை மாலை
                    <br />
                    மணமகன் — பட்டு வேட்டி, அங்கவஸ்திரம், நெற்றியில் விபூதி-குங்கும
                  </p>
                </div>
              </div>
            </div>
          </div>

          <OrnamentalBorder />

          {/* 4. Pongal */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">🌾</span>
              <div>
                <h3 className="font-tamil font-bold text-2xl gold-text">
                  பொங்கல் திருவிழா
                </h3>
                <p
                  className="font-display text-sm"
                  style={{ color: "oklch(0.65 0.07 75)" }}
                >
                  Pongal — The Harvest Festival
                </p>
              </div>
            </div>
            <p
              className="font-tamil text-sm leading-relaxed mb-6"
              style={{ color: "oklch(0.82 0.03 75)" }}
            >
              தைமாதம் (ஜனவரி மாதம்) நடைபெறும் பொங்கல் தமிழரின் மிக முக்கியமான நான்கு நாள்
              அறுவடை திருவிழா. சூரியனுக்கும் இயற்கைக்கும் நன்றி செலுத்தும் இந்த திருவிழா
              தமிழரின் விவசாய வாழ்வின் சின்னம்.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[
                {
                  day: "நாள் 1",
                  name: "போகி",
                  icon: "🔥",
                  desc: "பழைய பொருட்களை எரித்து புதியதை வரவேற்கும் நாள். குப்பை கொளுத்துவது வழக்கம்.",
                },
                {
                  day: "நாள் 2",
                  name: "தை பொங்கல்",
                  icon: "☀️",
                  desc: "சூரிய வழிபாட்டு நாள். புதிய மண் பாண்டத்தில் பொங்கல் சமைக்கும் சிறப்பான நாள்.",
                },
                {
                  day: "நாள் 3",
                  name: "மாட்டுப் பொங்கல்",
                  icon: "🐄",
                  desc: "விவசாயத்துக்கு உதவும் மாடுகளுக்கு நன்றி செலுத்தும் நாள். ஜல்லிக்கட்டு விழா.",
                },
                {
                  day: "நாள் 4",
                  name: "காணும் பொங்கல்",
                  icon: "👨‍👩‍👧‍👦",
                  desc: "குடும்பத்தினர் ஒன்று கூடும் நாள். பூங்காக்களுக்கும் ஆறுகளுக்கும் சென்று மகிழும் நாள்.",
                },
              ].map((day, i) => (
                <motion.div
                  key={day.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="p-4 rounded-xl text-center"
                  style={{
                    background: "oklch(0.32 0.11 20)",
                    border: "2px solid oklch(0.75 0.1 75 / 0.5)",
                  }}
                  data-ocid={`art.pongal.item.${i + 1}`}
                >
                  <p
                    className="font-display text-xs mb-1"
                    style={{ color: "oklch(0.65 0.07 75)" }}
                  >
                    {day.day}
                  </p>
                  <div className="text-4xl my-2">{day.icon}</div>
                  <h4 className="font-tamil font-bold text-sm gold-text mb-2">
                    {day.name}
                  </h4>
                  <p
                    className="font-tamil text-xs leading-relaxed"
                    style={{ color: "oklch(0.82 0.03 75)" }}
                  >
                    {day.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <OrnamentalBorder />

          {/* 5. Kolam */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">🌸</span>
              <div>
                <h3 className="font-tamil font-bold text-2xl gold-text">
                  கோலம்
                </h3>
                <p
                  className="font-display text-sm"
                  style={{ color: "oklch(0.65 0.07 75)" }}
                >
                  Kolam — The Sacred Art
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div>
                <p
                  className="font-tamil text-sm leading-relaxed mb-4"
                  style={{ color: "oklch(0.82 0.03 75)" }}
                >
                  கோலம் என்பது வீட்டு முன்புறத்தில் அரிசி மாவினால் தினமும் காலையில் வரைவது.
                  இது வெறும் அழகு அலங்காரம் மட்டுமில்லை — லட்சுமி தேவியை வரவேற்கும் ஆன்மீக
                  செயல். கோலம் வரைவது கணித சிந்தனையையும் ஆன்மீக ஒழுக்கத்தையும் வளர்க்கிறது.
                </p>
                <p
                  className="font-tamil text-sm leading-relaxed mb-4"
                  style={{ color: "oklch(0.82 0.03 75)" }}
                >
                  கோலத்தில் இரு வகைகள்: புள்ளி கோலம் (dot-based geometric patterns)
                  மற்றும் கம்பி கோலம் (line-based flowing designs). பொங்கல் திருவிழாவில்
                  மிகப் பெரிய கோலம் போட்டி நடைபெறும். நெடுஞ்சாலைகளும் கோவில் வாயில்களும்
                  விதவிதமான கோலங்களால் அலங்கரிக்கப்படும்.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    {
                      title: "புள்ளி கோலம்",
                      desc: "புள்ளிகளை மையமாக கொண்ட வடிவங்கள்",
                    },
                    { title: "கம்பி கோலம்", desc: "நேர் கோடுகளால் ஆன வடிவங்கள்" },
                    {
                      title: "பொங்கல் கோலம்",
                      desc: "திருவிழா சிறப்பு விரிவான வடிவங்கள்",
                    },
                    {
                      title: "கோவில் கோலம்",
                      desc: "கோவில் முன்புறத்தில் வரையும் சிறப்பு வடிவங்கள்",
                    },
                  ].map((type) => (
                    <div
                      key={type.title}
                      className="p-3 rounded"
                      style={{
                        background: "oklch(0.32 0.11 20 / 0.6)",
                        border: "1px solid oklch(0.75 0.1 75 / 0.3)",
                      }}
                    >
                      <h5 className="font-tamil font-bold text-xs gold-text mb-1">
                        {type.title}
                      </h5>
                      <p
                        className="font-tamil text-xs"
                        style={{ color: "oklch(0.72 0.04 75)" }}
                      >
                        {type.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <div
                  className="p-5 rounded-xl text-center"
                  style={{
                    background: "oklch(0.32 0.11 20)",
                    border: "2px solid oklch(0.75 0.1 75 / 0.5)",
                  }}
                >
                  <p className="font-tamil text-4xl mb-3">🔴⚪🔴</p>
                  <p className="font-tamil font-bold text-sm gold-text mb-2">
                    கோலம் — கணிதத்தின் கலை
                  </p>
                  <p
                    className="font-tamil text-xs leading-relaxed"
                    style={{ color: "oklch(0.82 0.03 75)" }}
                  >
                    கோலம் வடிவங்கள் ஃப்ராக்டல் (fractal) கணித கொள்கைகளை பின்பற்றுகின்றன.
                    MIT மற்றும் Harvard போன்ற உலகளாவிய பல்கலைக்கழகங்கள் கோலம் வடிவியலை
                    ஆராய்ச்சி செய்து வருகின்றன.
                  </p>
                </div>
                <div
                  className="p-5 rounded-xl"
                  style={{
                    background: "oklch(0.32 0.11 20)",
                    border: "1px solid oklch(0.65 0.07 75 / 0.4)",
                  }}
                >
                  <h5 className="font-tamil font-bold text-sm gold-text mb-2">
                    கோலத்தின் நோக்கம்
                  </h5>
                  <ul className="space-y-2">
                    {[
                      "லட்சுமி தேவியை வரவேற்பதற்காக",
                      "எறும்புகளுக்கும் பறவைகளுக்கும் உணவாக",
                      "வீட்டிற்கு நேர்மறை சக்தி வர",
                      "கணித மற்றும் கலை திறனை வளர்க்க",
                    ].map((purpose) => (
                      <li
                        key={String(purpose)}
                        className="font-tamil text-xs flex items-start gap-2"
                        style={{ color: "oklch(0.82 0.03 75)" }}
                      >
                        <span className="gold-text mt-0.5">✦</span> {purpose}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <OrnamentalBorder />

          {/* 6. Temple Rituals */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">🛕</span>
              <div>
                <h3 className="font-tamil font-bold text-2xl gold-text">
                  கோவில் சடங்குகள்
                </h3>
                <p
                  className="font-display text-sm"
                  style={{ color: "oklch(0.65 0.07 75)" }}
                >
                  Temple Rituals
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
              <div>
                <p
                  className="font-tamil text-sm leading-relaxed mb-4"
                  style={{ color: "oklch(0.82 0.03 75)" }}
                >
                  தமிழக கோவில் சடங்குகள் ஆகமசாஸ்திர நியமங்களை அடிப்படையாக கொண்டவை. ஒரு
                  நாளில் ஆறு கால பூஜைகள் (அறுகால பூஜை) நடைபெறும்: திருவனந்தல் (அதிகாலை),
                  காலை, உச்சிகால, சாயரட்சை (மாலை), இரவு, அர்த்தஜாம (நள்ளிரவு).
                </p>
                <p
                  className="font-tamil text-sm leading-relaxed mb-4"
                  style={{ color: "oklch(0.82 0.03 75)" }}
                >
                  கும்பாபிஷேகம் (Kumbabhishekam) என்பது கோவில் சுத்திகரிப்பு மற்றும்
                  புதுப்பிப்பு நிகழ்ச்சி. ஒவ்வொரு 12 ஆண்டுகளுக்கு ஒருமுறை நடைபெறும் இந்த
                  சடங்கில் தலைமை பூசாரிகள் வேத மந்திரங்களோடு கோவிலை புனிதப்படுத்துவார்கள்.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  {
                    name: "திருவிழா",
                    icon: "🎪",
                    desc: "தேரோட்டம், வெட்டிவேர் திருவிழா",
                  },
                  {
                    name: "நைவேத்யம்",
                    icon: "🍚",
                    desc: "தெய்வத்திற்கு படைக்கும் உணவு",
                  },
                  { name: "தீபாராதனை", icon: "🪔", desc: "நெய்விளக்கு ஆராதனை" },
                  { name: "ஒத்துவர்", icon: "🎵", desc: "வேத மந்திரங்கள் ஓதுவது" },
                  {
                    name: "ஸ்ரீரங்கம் வைகுண்ட ஏகாதசி",
                    icon: "⭐",
                    desc: "21 நாள் சிறப்பு விழா",
                  },
                  {
                    name: "கார்த்திகை தீபம்",
                    icon: "🔥",
                    desc: "திருவண்ணாமலை கார்த்திகை",
                  },
                ].map((ritual) => (
                  <div
                    key={ritual.name}
                    className="p-3 rounded"
                    style={{
                      background: "oklch(0.32 0.11 20 / 0.6)",
                      border: "1px solid oklch(0.75 0.1 75 / 0.3)",
                    }}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span>{ritual.icon}</span>
                      <h5 className="font-tamil font-bold text-xs gold-text">
                        {ritual.name}
                      </h5>
                    </div>
                    <p
                      className="font-tamil text-xs"
                      style={{ color: "oklch(0.72 0.04 75)" }}
                    >
                      {ritual.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <OrnamentalBorder />

          {/* 7. Cultural Values */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">🙏</span>
              <div>
                <h3 className="font-tamil font-bold text-2xl gold-text">
                  கலாச்சார மதிப்புகள்
                </h3>
                <p
                  className="font-display text-sm"
                  style={{ color: "oklch(0.65 0.07 75)" }}
                >
                  Cultural Values
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {[
                {
                  icon: "👴",
                  title: "பெரியோரை மதித்தல்",
                  desc: "தமிழ் கலாச்சாரத்தில் பெரியோர்களுக்கு தலை வணங்குவது, 'வணக்கம்' சொல்வது, கால் தொட்டு வணங்குவது ஆகியவை கட்டாய மரியாதை. 'அம்மா', 'அப்பா' என்பது வேர்ச்சொல்லாக கொண்ட பல தமிழ் சொற்கள் உறவின் ஆழத்தை காட்டுகின்றன.",
                },
                {
                  icon: "🤝",
                  title: "விருந்தோம்பல்",
                  desc: "'அதிதி தேவோ பவ' (விருந்தினர் கடவுளே) என்ற கொள்கையில் தமிழர்கள் வாழ்கின்றனர். வீட்டிற்கு வரும் விருந்தினர்க்கு முதலில் உணவு கொடுப்பது, வாழை இலையில் பரிமாறுவது தமிழர்களின் உன்னத பண்பு.",
                },
                {
                  icon: "🎓",
                  title: "குரு-சிஷ்ய பாரம்பரியம்",
                  desc: "ஆசிரியர்-மாணவர் உறவு தமிழ்க் கலாச்சாரத்தின் முதுகெலும்பு. 'குரு' (ஆசிரியர்) என்பவர் வெறும் அறிவு மட்டுமல்ல, வாழ்க்கை மதிப்பீடுகளையும் கற்பிப்பார். ஆசிரியர்களுக்கு பணம் தருவதை விட மரியாதை தருவது முக்கியம்.",
                },
              ].map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="p-6 rounded-xl"
                  style={{
                    background: "oklch(0.32 0.11 20)",
                    border: "2px solid oklch(0.75 0.1 75 / 0.5)",
                  }}
                  data-ocid={`art.values.item.${i + 1}`}
                >
                  <div className="text-4xl mb-3 text-center">{value.icon}</div>
                  <h4 className="font-tamil font-bold text-base gold-text text-center mb-3">
                    {value.title}
                  </h4>
                  <p
                    className="font-tamil text-sm leading-relaxed"
                    style={{ color: "oklch(0.82 0.03 75)" }}
                  >
                    {value.desc}
                  </p>
                </motion.div>
              ))}
            </div>
            <div
              className="p-6 rounded-xl text-center"
              style={{
                background: "oklch(0.32 0.11 20 / 0.6)",
                border: "2px solid oklch(0.75 0.1 75)",
              }}
            >
              <p className="font-tamil text-2xl gold-text font-bold mb-2">
                வணக்கம் 🙏
              </p>
              <p
                className="font-tamil text-sm leading-relaxed max-w-2xl mx-auto"
                style={{ color: "oklch(0.82 0.03 75)" }}
              >
                தமிழரின் வணக்கம் என்பது வெறும் வாழ்த்து மட்டுமல்ல — அது உள்ளத்தின்
                ஆழத்திலிருந்து வரும் மதிப்பின் வெளிப்பாடு. இரு கைகளையும் கூப்பி தலை
                குனிந்து சொல்லும் "வணக்கம்" என்ற சொல் உலகின் மிக அழகான வாழ்த்துகளில் ஒன்று.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const templeGallery = [
  {
    name: "மீனாட்சி அம்மன் கோவில்",
    location: "மதுரை",
    image: "/assets/generated/meenakshi-temple.dim_800x500.jpg",
    desc: "திராவிட கட்டிடக்கலையின் அதிசயம். 14 கோபுரங்கள், 33,000 சிற்பங்கள் கொண்ட இக்கோவில் உலகப் புகழ் பெற்றது.",
  },
  {
    name: "பிரகதீஸ்வரர் கோவில்",
    location: "தஞ்சாவூர்",
    image: "/assets/generated/brihadeeswarar-temple.dim_800x500.jpg",
    desc: "ராஜராஜ சோழன் கட்டிய UNESCO மரபுச் சின்னம். 66 மீட்டர் உயர கோபுரம் கொண்ட மாபெரும் படைப்பு.",
  },
  {
    name: "நடராஜர் கோவில்",
    location: "சிதம்பரம்",
    image: "/assets/generated/nataraja-temple.dim_800x500.jpg",
    desc: "நடனத்தின் தெய்வமான சிவனின் புனித இடம். 2000 ஆண்டுகள் பழைய வரலாறு கொண்ட கோவில்.",
  },
  {
    name: "ரங்கநாதர் கோவில்",
    location: "ஸ்ரீரங்கம்",
    image: "/assets/generated/ranganathaswamy-temple.dim_800x500.jpg",
    desc: "உலகின் மிகப் பெரிய செயல்பாட்டு இந்து கோவில். 156 ஏக்கர் பரப்பளவில் அமைந்துள்ளது.",
  },
  {
    name: "முருகன் கோவில்",
    location: "பழனி",
    image: "/assets/generated/murugan-palani-temple.dim_800x500.jpg",
    desc: "குன்றின் மேல் அமைந்த புனித ஆலயம். தமிழர்களின் குல தெய்வமான முருகனுக்கு அர்ப்பணிக்கப்பட்டது.",
  },
  {
    name: "கன்யாகுமரி அம்மன் கோவில்",
    location: "கன்யாகுமரி",
    image: "/assets/generated/kanyakumari-temple.dim_800x500.jpg",
    desc: "மூன்று கடல்கள் சந்திக்கும் புனித இடத்தில் அமைந்த கோவில். சூரிய உதயம் மிக அழகாக தெரியும்.",
  },
  {
    name: "அருணாசலேஸ்வரர் கோவில்",
    location: "திருவண்ணாமலை",
    image: "/assets/generated/arunachaleswarar-temple.dim_800x500.jpg",
    desc: "அருணாசல மலையடிவாரத்தில் அமைந்த இக்கோவில் பஞ்சபூத ஸ்தலங்களில் அக்னி ஸ்தலம். கார்த்திகை தீபம் உலகப் புகழ் பெற்றது.",
  },
  {
    name: "கபாலீஸ்வரர் கோவில்",
    location: "சென்னை",
    image: "/assets/generated/kapaleeshwarar-temple.dim_800x500.jpg",
    desc: "சென்னையில் உள்ள பழமையான சிவன் கோவில். திராவிட கட்டிடக்கலையில் கட்டப்பட்ட இக்கோவில் மயிலாப்பூரின் அடையாளம்.",
  },
  {
    name: "இராமநாதஸ்வாமி கோவில்",
    location: "ராமேஸ்வரம்",
    image: "/assets/generated/ramanathaswamy-temple.dim_800x500.jpg",
    desc: "இந்தியாவின் மிக நீண்ட கோரிடோர் கொண்ட கோவில். 1212 தூண்களை கொண்ட தாழ்வாரம் அதிசய படைப்பு.",
  },
  {
    name: "ஏகாம்பரேஸ்வரர் கோவில்",
    location: "காஞ்சிபுரம்",
    image: "/assets/generated/ekambareswarar-temple.dim_800x500.jpg",
    desc: "பஞ்சபூத ஸ்தலங்களில் பிருதிவி (நிலம்) ஸ்தலம். 3500 ஆண்டுகள் பழைய மாமர மரம் இங்கு உள்ளது.",
  },
];

const templeStats = [
  {
    temple: "மீனாட்சி கோவில், மதுரை",
    value: "33,000",
    unit: "சிற்பங்கள்",
    icon: "🗿",
  },
  {
    temple: "பிரகதீஸ்வரர் கோவில், தஞ்சாவூர்",
    value: "66m",
    unit: "கோபுர உயரம்",
    icon: "🏛️",
  },
  {
    temple: "ரங்கநாதர் கோவில், ஸ்ரீரங்கம்",
    value: "156",
    unit: "ஏக்கர் பரப்பு",
    icon: "📏",
  },
  {
    temple: "இராமநாதஸ்வாமி, ராமேஸ்வரம்",
    value: "1212",
    unit: "கோரிடோர் தூண்கள்",
    icon: "🏗️",
  },
  {
    temple: "ஏகாம்பரேஸ்வரர், காஞ்சிபுரம்",
    value: "3500",
    unit: "ஆண்டுகள் பழைய மரம்",
    icon: "🌳",
  },
  { temple: "தமிழ்நாடு மொத்தம்", value: "38,000+", unit: "கோவில்கள்", icon: "🛕" },
];

const templeDetails = [
  {
    id: "meenakshi",
    name: "மீனாட்சி அம்மன் கோவில்",
    image: "/assets/generated/meenakshi-temple.dim_800x500.jpg",
    history:
      "மீனாட்சி அம்மன் கோவில் தமிழகத்தின் மதுரை நகரில் அமைந்துள்ள திராவிட கட்டிடக்கலையின் உச்சக்கட்ட படைப்பு. கி.மு. 6 ஆம் நூற்றாண்டில் தோற்றம் கொண்ட இக்கோவில், பாண்டிய மன்னர்களால் கட்டப்பட்டு பல நூற்றாண்டுகளில் விரிவாக்கப்பட்டது. நாயக்கர் மன்னர் திருமல நாயக்கர் காலத்தில் (17 ஆம் நூற்றாண்டு) இக்கோவில் இன்றைய பரிமாணத்தை அடைந்தது. மீனாட்சி அம்மன் (பார்வதி) மற்றும் சுந்தரேஸ்வரர் (சிவன்) இக்கோவிலின் முதன்மை தெய்வங்கள்.",
    location:
      "தமிழகத்தின் மதுரை மாவட்டத்தில் வைகை நதிக்கரையில் அமைந்துள்ளது. மதுரை நகரின் மையப்பகுதியில் 45 ஏக்கர் பரப்பளவில் விரிந்திருக்கிறது. சென்னையிலிருந்து 460 கி.மீ. தொலைவில் உள்ளது. அனைத்து இடங்களிலிருந்தும் பேருந்து, ரயில் வசதி உள்ளது.",
    specialFeatures:
      "14 கோபுரங்களும் 33,000 சிற்பங்களும் கொண்ட இக்கோவில் திராவிட கட்டிடக்கலையின் முத்திரை. 51.9 மீட்டர் உயரமுள்ள தெற்கு கோபுரம் மிகவும் உயரமானது. அழகிய நூற்றுக்கால் மண்டபம் மற்றும் போத்தமராய் குளம் பார்வையாளர்களை வியக்கவைக்கின்றன. உலகின் எட்டாவது அதிசயமாக போற்றப்படும் இக்கோவிலில் ஆண்டுதோறும் மீனாட்சி திருக்கல்யாண விழா கோலாகலமாக நடைபெறுகிறது.",
    culturalImportance:
      "மீனாட்சி அம்மன் கோவில் தமிழரின் ஆன்மீக மற்றும் கலாச்சார அடையாளமாக விளங்குகிறது. பாண்டிய மன்னர்களின் ஆட்சி, சங்க காலம் முதல் இன்றுவரை தடைவிடாமல் வழிபாடு நடைபெறும் புனித தலம். தினமும் 10,000-15,000 பக்தர்கள் வழிபட வருகின்றனர். தமிழ் திருமண நிகழ்வுகளில் மீனாட்சி சுந்தரேஸ்வரர் திருமணம் முன்மாதிரியாக போற்றப்படுகிறது.",
  },
  {
    id: "brihadeeswara",
    name: "பிரகதீஸ்வரர் கோவில்",
    image: "/assets/generated/brihadeeswarar-temple.dim_800x500.jpg",
    history:
      "பிரகதீஸ்வரர் கோவில் சோழர் மன்னன் ராஜராஜ சோழன் I ஆல் கி.பி. 1010 இல் கட்டப்பட்டது. சோழர் கட்டிடக்கலையின் உச்சகட்ட வெளிப்பாடான இக்கோவில் 'பெரிய கோவில்' என்றும் அழைக்கப்படுகிறது. 11 ஆண்டுகளில் கட்டி முடிக்கப்பட்ட இந்த மாபெரும் படைப்பு, 1987 இல் UNESCO உலக மரபுச் சின்னமாக அறிவிக்கப்பட்டது. ஆயிரம் ஆண்டுகள் பழைமையான இக்கோவில் இன்றும் பூஜைகள் நடைபெறும் புனித தலமாக திகழ்கிறது.",
    location:
      "தஞ்சாவூர் மாவட்டத்தின் தலைநகரான தஞ்சாவூரில் அமைந்துள்ளது. சென்னையிலிருந்து 350 கி.மீ. தொலைவில் தஞ்சாவூர் – திருவையாறு சாலையில் உள்ளது. அருகில் ஸரஸ்வதி மஹால் நூலகம் மற்றும் தஞ்சாவூர் அரண்மனை உள்ளன. ரயில் மற்றும் பேருந்து வழியில் எளிதில் சென்றடையலாம்.",
    specialFeatures:
      "66 மீட்டர் (216 அடி) உயரமுள்ள கோபுரம் இந்தியாவிலேயே மிக உயரமான கோபுரங்களில் ஒன்று. 80 டன் எடையுள்ள கிரானைட் கல் தூக்கப்பட்டு கோபுர உச்சியில் வைக்கப்பட்டிருக்கிறது. கோவிலின் நிழல் நிலத்தில் விழாது என்பது ஒரு அதிசயமான கட்டிடக்கலை சாதனை. இக்கோவிலின் சுவர் ஓவியங்கள் சோழர் காலத்தின் சிறந்த கலைப்பாணியை நிரூபிக்கின்றன.",
    culturalImportance:
      "பிரகதீஸ்வரர் கோவில் சோழர் நாகரிகத்தின் பெருமையை உலகிற்கு அறிவிக்கும் சின்னம். கல் வேலைப்பாடு, சிற்பக்கலை, ஓவியக்கலை ஆகியவற்றில் சோழர் எட்டிய உயரத்தை இக்கோவில் காட்டுகிறது. 'நன்கான', 'ஆயிரக் கால் மண்டபம்' போன்ற கட்டமைப்புகள் பிற்கால கோவில் கட்டிடக்கலைக்கு முன்னோடியாய் திகழ்கின்றன. இன்றும் தினசரி பூஜைகள் நடைபெறும் இக்கோவில் வாழ்ந்து கொண்டிருக்கும் மரபு.",
  },
  {
    id: "ramanathaswamy",
    name: "இராமநாதஸ்வாமி கோவில்",
    image: "/assets/generated/ramanathaswamy-temple.dim_800x500.jpg",
    history:
      "இராமநாதஸ்வாமி கோவில் ராமேஸ்வரத்தில் உள்ள பன்னிரெண்டு ஜோதிர்லிங்க தலங்களில் ஒன்று. இலங்கையில் இராவணனை வென்ற ஸ்ரீராமர் தனது பாவங்களை போக்கிக்கொள்ள இங்கு சிவலிங்கம் நிறுவி வழிபட்டதாக புராண நம்பிக்கை. கி.பி. 12 முதல் 16 ஆம் நூற்றாண்டுகளில் இராமேஸ்வர மன்னர்களால் கட்டி விரிவாக்கப்பட்டது. இது ஹிந்து வீரர்களின் புண்ணிய யாத்திரைத் தலங்களில் மிகவும் முக்கியமானது.",
    location:
      "தமிழகத்தின் ராமேஸ்வரம் தீவில் அமைந்துள்ளது. இந்தியா மற்றும் இலங்கையை பிரிக்கும் பால்க் நீரிணைக்கு அருகே பம்பன் தீவில் உள்ளது. சென்னையிலிருந்து 600 கி.மீ. தொலைவில் உள்ளது. பம்பன் பாலம் வழியாக மட்டுமே சென்றடைய முடியும்.",
    specialFeatures:
      "உலகின் மிக நீண்ட கோரிடோர் (தாழ்வாரம்) இக்கோவிலில் உள்ளது — 1212 தூண்களோடு 197 மீட்டர் நீளம். 22 புனித திர்த்தங்கள் (கிணறுகள்) கோவில் வளாகத்திற்குள்ளேயே உள்ளன. கடல் நீரில் கட்டப்பட்ட இந்த கோவில் தொழில்நுட்பம் இன்றும் வியப்பளிக்கிறது. கோவிலின் கோபுரம் 53 மீட்டர் உயரமுள்ளது.",
    culturalImportance:
      "இராமாயண மரபோடு நேரடியாக தொடர்புடைய இந்த தலம் ஹிந்துக்களுக்கு மிகவும் புனிதமானது. வாரணாசியில் தொடங்கும் யாத்திரையை இங்கே முடிப்பது ஒரு மரபு. இலட்சக்கணக்கான பக்தர்கள் ஆண்டுதோறும் யாத்திரை மேற்கொள்கிறார்கள். கன்னிமார திர்த்தத்தில் நீராடுவது மோட்சத்தை அளிக்கும் என்ற நம்பிக்கை உள்ளது.",
  },
  {
    id: "chidambaram",
    name: "சிதம்பரம் நடராஜர் கோவில்",
    image: "/assets/generated/nataraja-temple.dim_800x500.jpg",
    history:
      "சிதம்பரம் நடராஜர் கோவில் 2000 ஆண்டுகளுக்கும் மேலான வரலாறு கொண்டது. நடனத்தின் தெய்வமான நடராஜர் (சிவன்) இங்கு தன் ஆனந்த தாண்டவம் ஆடியதாக புராணங்கள் கூறுகின்றன. சோழர், பல்லவர், விஜயநகர மன்னர்களால் விரிவாக்கப்பட்ட இக்கோவில் தீட்சிதர் குடும்பத்தினரால் இன்றும் பாரம்பரியமாக நிர்வகிக்கப்படுகிறது. பஞ்சபூத ஸ்தலங்களில் ஆகாய ஸ்தலமாக போற்றப்படும் புனித தலம்.",
    location:
      "கடலூர் மாவட்டத்தில் உள்ள சிதம்பரம் நகரில் அமைந்துள்ளது. சென்னையிலிருந்து 250 கி.மீ. தொலைவில் உள்ளது. தேசிய நெடுஞ்சாலை 45C வழியாக எளிதில் சென்றடையலாம். அருகில் பிச்சாண்டார் கோட்டை உள்ளது.",
    specialFeatures:
      "நடராஜர் சிலை தங்க விதானத்தின் கீழ் வைக்கப்பட்டிருக்கும் வகையில் தனித்துவமான கட்டமைப்பு. 'ரஹஸ்ய பீடம்' எனும் மர்ம பகுதி பொதுமக்களுக்கு தடைசெய்யப்பட்டுள்ளது. நான்கு திசைகளிலும் 4 கோபுரங்கள் உள்ளன. ஆடி மாதம் நடைபெறும் நடராஜர் உற்சவம் உலகப் புகழ் பெற்றது.",
    culturalImportance:
      "சிதம்பரம் நடராஜர் கோவில் பரதநாட்டியம் உள்ளிட்ட அனைத்து நடன வடிவங்களுக்கும் ஆதி மூலம். தமிழ் சைவ மரபின் ஆழமான தத்துவங்கள் இக்கோவிலில் பொதிந்துள்ளன. தாயுமானவர், மாணிக்கவாசகர் போன்ற மகான்கள் இங்கு இறைவனை தரிசித்தனர். கர்நாடக இசையிலும் பரதநாட்டியத்திலும் நடராஜரை போற்றும் கீர்த்தனைகள் ஏராளம்.",
  },
  {
    id: "tirupati",
    name: "திருப்பதி பாலாஜி கோவில்",
    image: "/assets/generated/tirupati-balaji-temple.dim_800x500.jpg",
    history:
      "திருப்பதி வேங்கடேஸ்வர கோவில் திருமலை குன்றுகளில் 853 மீட்டர் உயரத்தில் அமைந்துள்ளது. வைஷ்ணவ மரபின் மிகவும் புனித தலங்களில் ஒன்று. கி.மு. 9 ஆம் நூற்றாண்டிலிருந்தே வழிபாடு நடைபெறுவதாக வரலாற்று ஆவணங்கள் சான்று அளிக்கின்றன. பல்லவர், சோழர், விஜயநகர மன்னர்கள் இக்கோவிலை விரிவாக்கி வளம் சேர்த்தனர்.",
    location:
      "ஆந்திரப் பிரதேசத்தின் சித்தூர் மாவட்டத்தில் திருமலை குன்றுகளில் அமைந்துள்ளது. சென்னையிலிருந்து 140 கி.மீ. தொலைவில் உள்ளது. காரு சாலை மற்றும் ரோப்வே வழியாக சென்றடையலாம். திருப்பதி நகரம் மலை அடிவாரத்தில் உள்ளது.",
    specialFeatures:
      "உலகிலேயே அதிக பக்தர்கள் வருகை தரும் தலம் — தினமும் 50,000 முதல் 1,00,000 பக்தர்கள். ஆண்டு வருமானம் 3000 கோடி ரூபாய்க்கும் மேல். மலை கடவுளுக்கு பக்தர்கள் மொட்டை போடுவது (தலை முடி கொடுப்பது) சிறப்பான வழிபாட்டு மரபு. கோவிலின் கோபுரம் தங்கத்தால் மூடப்பட்டிருக்கிறது.",
    culturalImportance:
      "திருப்பதி பாலாஜி தென்னிந்திய இந்துக்களின் மிகவும் ஆழமான நம்பிக்கையின் மூலம். தமிழ், தெலுங்கு, கன்னட மக்கள் அனைவரும் 'கோவிந்தா' என்று கூவி வழிபடுகின்றனர். 'சாமி கிட்ட சொல்லு' என்ற வழக்கு முறை வாழ்க்கையின் அனைத்து தருணங்களிலும் திருப்பதி சாமியை நினைக்கும் தமிழர் மரபை காட்டுகிறது. ஏழேழு பிறவிக்கும் கடவுள் அருள் கிட்டும் என்ற நம்பிக்கையில் கோடிக்கணக்கானோர் யாத்திரை மேற்கொள்கிறார்கள்.",
  },
  {
    id: "murugan",
    name: "முருகன் கோவில், பழனி",
    image: "/assets/generated/murugan-palani-temple.dim_800x500.jpg",
    history:
      "பழனி முருகன் கோவில் ஆறு படை வீடுகளில் (முருகன் தங்கும் புனித தலங்கள்) ஒன்றும் மிகவும் முக்கியமானதும் ஆகும். வட்ட குன்றின் மேல் அமைந்த இக்கோவில் அகத்தியர் முனிவரால் நிறுவப்பட்டதாக மரபு கூறுகிறது. 2000 ஆண்டுகளுக்கும் மேலான வரலாற்றை கொண்டுள்ளது. தாண்டியுத்தப் படி ஏறி முருகனை தரிசிப்பது பக்தர்களின் வழக்கம்.",
    location:
      "தினடிவனம் மாவட்டத்தில் (தற்போதைய டிண்டுக்கல் மாவட்டம்) பழனி நகரில் அமைந்துள்ளது. திருச்சியிலிருந்து 125 கி.மீ. தொலைவில் உள்ளது. தேசிய நெடுஞ்சாலை 83 வழியாக சென்றடையலாம். குன்றின் உச்சிக்கு 693 படிகள் உள்ளன.",
    specialFeatures:
      "குன்றின் மேல் வட்ட வடிவில் அமைந்த கோவில் அமைப்பு தனித்துவமானது. 'பஞ்சாமிர்த அபிஷேகம்' — பால், தேன், வாழைப்பழம், சர்க்கரை, நெய் ஆகியவற்றால் நடைபெறும் சிறப்பு பூஜை புகழ்பெற்றது. தைப்பூசம் திருவிழாவில் கவடி எடுக்கும் பக்தர்கள் கோடிக்கணக்கில் வருகிறார்கள். ஆயிரம் முற்றம் என்று அழைக்கப்படும் மண்டபம் சிறப்பானது.",
    culturalImportance:
      "முருகன் தமிழரின் குல தெய்வம் — 'தமிழ்க் கடவுள்' என்று போற்றப்படுகிறார். தமிழ் இலக்கியங்களில் முருகன் ஆன்மீக அன்பு, வீரம், அழகு ஆகியவற்றின் சின்னம். திருமுருகாற்றுப்படை, கந்தர் அலங்காரம், திருப்புகழ் போன்ற நூல்கள் முருகனை கொண்டாடுகின்றன. தமிழ் திருமணங்கள், நல்ல வேலைத் தொடக்கங்கள் — அனைத்திலும் முருகன் வழிபாடு முதன்மையானது.",
  },
  {
    id: "kanchipuram",
    name: "காஞ்சிபுரம் கோவில்கள்",
    image: "/assets/generated/ekambareswarar-temple.dim_800x500.jpg",
    history:
      "காஞ்சிபுரம் 'கோவில் நகரம்' என்று புகழ்பெற்றது — ஒரு காலத்தில் 1000க்கும் மேற்பட்ட கோவில்கள் இருந்தன. பல்லவ மன்னர்களின் தலைநகரமாக விளங்கிய காஞ்சி, சைவம் மற்றும் வைஷ்ணவம் இரண்டுமே மலர்ந்த புனித பூமி. கி.மு. 2 ஆம் நூற்றாண்டிலிருந்தே வழிபாட்டு மரபு தொடர்கிறது. ஏகாம்பரேஸ்வரர், கைலாசநாதர், வரதராஜ பெருமாள் ஆகிய கோவில்கள் மிகவும் புகழ்வாய்ந்தவை.",
    location:
      "காஞ்சிபுரம் மாவட்டத்தின் தலைநகரமான காஞ்சிபுரம் நகரில் அமைந்துள்ளது. சென்னையிலிருந்து 75 கி.மீ. தொலைவில் உள்ளது. தேசிய நெடுஞ்சாலை 48 வழியாக சென்றடையலாம். சென்னை – வேலூர் ரயில் வழியிலும் செல்லலாம்.",
    specialFeatures:
      "ஏகாம்பரேஸ்வரர் கோவிலில் 3500 ஆண்டுகள் பழைமையான மாமர மரம் உள்ளது — இதன் நான்கு கிளைகள் நான்கு வேதங்களை குறிக்கின்றன. 58 மீட்டர் உயர கோபுரம் கொண்ட கைலாசநாதர் கோவில் பல்லவர் கட்டிடக்கலையின் முன்னோடி. காஞ்சி பட்டுப்புடவை நெசவு வேலை உலகப் புகழ்பெற்றது. 'முக்தி க்ஷேத்ரம்' என்று போற்றப்படும் புனித நகரம்.",
    culturalImportance:
      "காஞ்சிபுரம் ஆதி சங்கரர் நிறுவிய மடாலயங்களில் ஒன்று — காஞ்சி காமகோடி பீடம் இன்றும் இயங்குகிறது. சைவம், வைஷ்ணவம், சாக்தம் மூன்று மரபுகளும் சங்கமிக்கும் இடம். தமிழகத்தின் முக்கிய பட்டணம் — கலை, கட்டிடக்கலை, சமய ஆய்வுகளுக்கு மையம். ஸ்ரீ கிருஷ்ண தேவராயரின் காலத்தில் விஜயநகர கட்டிடக்கலையும் பூத்துக்குலைந்தது.",
  },
  {
    id: "srirangam",
    name: "ஸ்ரீரங்கம் கோவில்",
    image: "/assets/generated/ranganathaswamy-temple.dim_800x500.jpg",
    history:
      "ஸ்ரீரங்கம் ரங்கநாதர் கோவில் 108 வைஷ்ணவ திவ்யதேசங்களில் முதலாவதும் மிக முக்கியமானதும் ஆகும். காவிரி நதிக்கரையில் ஒரு தீவில் அமைந்த இக்கோவில் 'கோவிலடி' என்றும் 'பூமியில் வைகுண்டம்' என்றும் போற்றப்படுகிறது. சோழர், பாண்டியர், விஜயநகர மன்னர்கள் இக்கோவிலை வளர்த்தனர். ஆழ்வார்களின் பக்தி இலக்கியங்களில் மிகவும் அதிகமாக பாடல் பெற்ற தலம்.",
    location:
      "திருச்சிராப்பள்ளி மாவட்டத்தில் காவிரி மற்றும் கொள்ளிடம் நதிகளுக்கிடையே உள்ள ஸ்ரீரங்கம் தீவில் அமைந்துள்ளது. திருச்சியிலிருந்து 3 கி.மீ. தொலைவில் மட்டுமே உள்ளது. ரயில், பேருந்து மற்றும் ஆட்டோ வழியாக எளிதில் சென்றடையலாம்.",
    specialFeatures:
      "156 ஏக்கர் பரப்பளவு கொண்ட உலகின் மிகப் பெரிய செயல்பாட்டு இந்து கோவில். 21 கோபுரங்கள் மற்றும் 7 சுற்றுப் பிரகாரங்கள் கொண்ட மாபெரும் கட்டமைப்பு. 81 மீட்டர் உயரமான ராஜகோபுரம் (தெற்கு கோபுரம்) இந்தியாவிலேயே உயரமானதில் ஒன்று. கோவிலில் 1000 தூண்கள் மண்டபம் கட்டிடக்கலை அதிசயம்.",
    culturalImportance:
      "ஆண்டாள், நம்மாழ்வார் உள்ளிட்ட 12 ஆழ்வார்களும் ரங்கநாதனை பாடிப் போற்றியுள்ளனர். 'பிரபந்த' பாசுர நாட்டியம் இக்கோவிலில் நிகழ்விக்கப்படுகிறது. வைஷ்ணவ மரபின் தலைசிறந்த தலமான ஸ்ரீரங்கம் — இந்துமத தத்துவம், கலை, கட்டிடக்கலை மூன்றும் சங்கமிக்கும் இடம். வைகுண்ட ஏகாதசி திருவிழா லட்சக்கணக்கான பக்தர்களை கவர்கிறது.",
  },
  {
    id: "alagar",
    name: "மதுரை அழகர் கோவில்",
    image: "/assets/generated/alagar-koil-temple.dim_800x500.jpg",
    history:
      "மதுரை அழகர் கோவில் அல்லது கல்லழகர் கோவில் 108 வைஷ்ணவ திவ்யதேசங்களில் ஒன்று. திருமால் 'அழகர்' என்ற திருப்பெயரில் இங்கு வழிபடப்படுகிறார். சோழர், பாண்டியர், நாயக்கர் மன்னர்களால் கட்டி விரிவாக்கப்பட்டது. நடுவில் ஓடும் ஆற்றையும் சூழ்ந்த காடுகளையும் கொண்ட இக்கோவில் இயற்கையில் மூழ்கி இருக்கிறது.",
    location:
      "மதுரை மாவட்டத்தில் அழகர்மலை என்று அழைக்கப்படும் குன்றின் அடிவாரத்தில் அமைந்துள்ளது. மதுரையிலிருந்து 21 கி.மீ. தொலைவில் உள்ளது. வைகை நதிக்கரையில் அமைந்துள்ள இக்கோவில் இயற்கை எழிலால் சூழப்பட்டுள்ளது.",
    specialFeatures:
      "கற்பாறைகளில் செதுக்கப்பட்ட குடவரை கட்டிடக்கலை சிறப்பு. கல்வெட்டுகள் மற்றும் சிற்பங்கள் பல்வேறு வரலாற்றுக் காலகட்டங்களை பிரதிபலிக்கின்றன. வைகாசி திருவிழாவில் அழகர் வைகை நதி கடக்கும் திருவிழா மதுரையின் மிக முக்கியமான திருவிழாவாகும். ஆற்றங்கரையில் நடைபெறும் அபிஷேகம் தனி அழகு.",
    culturalImportance:
      "மீனாட்சி திருக்கல்யாண விழாவுடன் இணைந்த அழகர் வைகை நதி கடக்கும் நிகழ்வு சமயத்தோடு சமூகத்தை இணைக்கும் கொண்டாட்டம். பல தமிழ் பாடல்களிலும் இலக்கியங்களிலும் அழகர் போற்றப்படுகிறார். 'தமிழ்க் கடவுள்' முருகனைப் போலவே அழகரும் தமிழர் மனதில் ஆழமாக பதிந்துள்ளார். இக்கோவில் சூழல் தமிழ் கவிதைகளில் பலமுறை வர்ணிக்கப்பட்டுள்ளது.",
  },
  {
    id: "ekambareswarar",
    name: "ஏகாம்பரேஸ்வரர் கோவில்",
    image: "/assets/generated/ekambareswarar-temple.dim_800x500.jpg",
    history:
      "ஏகாம்பரேஸ்வரர் கோவில் காஞ்சிபுரத்தில் உள்ள பஞ்சபூத ஸ்தலங்களில் ஒன்று — இங்கு சிவன் 'பிருதிவி லிங்கம்' (நிலம்) வடிவில் வழிபடப்படுகிறார். பல்லவர், சோழர், நாயக்கர் மன்னர்களால் கட்டப்பட்டு தொடர்ந்து விரிவாக்கப்பட்டது. விஜயநகர மன்னன் கிருஷ்ண தேவராயரால் 59 மீட்டர் உயர கோபுரம் கட்டப்பட்டது. ஆதி சங்கரர் இங்கு வந்து வழிபட்டதாக ஐதீகம்.",
    location:
      "காஞ்சிபுரம் மாவட்டத்தின் காஞ்சிபுரம் நகரில் அமைந்துள்ளது. சென்னையிலிருந்து 75 கி.மீ. தொலைவில் உள்ளது. காஞ்சிபுரம் நகர மையத்தில் உள்ள இக்கோவில் மற்ற கோவில்களுக்கு அருகிலேயே உள்ளது. ரயில், பேருந்து வழியாக சுலபமாக சென்றடையலாம்.",
    specialFeatures:
      "3500 ஆண்டுகள் பழைமையான ஒரே ஒரு மாமர மரம் — நான்கு கிளைகள் நான்கு வேதங்களை குறிக்கின்றன என்ற நம்பிக்கை. 1000 தூண்கள் மண்டபம் கட்டிடக்கலை அழகின் சிகரம். 59 மீட்டர் உயர விஜயநகர காலத்து கோபுரம் பார்ப்பவர்களை வியக்கவைக்கிறது. மண் சிவலிங்கம் (பிருதிவி லிங்கம்) ஆண்டுக்கொருமுறை மட்டுமே வெள்ளிய வெடிப்பை காட்டும்.",
    culturalImportance:
      "பஞ்சபூத ஸ்தல தீர்த்தயாத்திரையின் ஒரு அங்கமாக இக்கோவில் விளங்குகிறது — பிருதிவி (நிலம்) ஸ்தலம். காஞ்சிபுரத்தின் பட்டு நெசவு மரபோடு இக்கோவில் ஆழமாக பிணைக்கப்பட்டுள்ளது. சைவ மரபில் ஏகாம்பரேஸ்வரர் முக்கியமான ஐந்தில் ஒரு தலம். தேவாரம், திருவாசகம் ஆகிய நூல்களில் இத்தலம் சிறப்பாக பாடப்பட்டுள்ளது.",
  },
];

function TemplesSection() {
  const [selectedTemple, setSelectedTemple] = useState<string | null>(null);
  const temple = selectedTemple
    ? templeDetails.find((t) => t.id === selectedTemple)
    : null;

  if (temple) {
    return (
      <section id="temples" className="py-16 px-6 parchment-bg">
        <div className="max-w-[900px] mx-auto">
          <button
            onClick={() => setSelectedTemple(null)}
            className="flex items-center gap-2 mb-6 px-4 py-2 rounded font-tamil text-sm font-semibold transition-opacity hover:opacity-80"
            style={{
              background: "oklch(0.32 0.11 20)",
              color: "oklch(0.75 0.1 75)",
              border: "1.5px solid oklch(0.75 0.1 75 / 0.6)",
            }}
            type="button"
            data-ocid="temples.back_button"
          >
            ← திரும்பு
          </button>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="rounded-xl overflow-hidden mb-8"
              style={{ border: "2px solid oklch(0.75 0.1 75 / 0.5)" }}
            >
              <img
                src={temple.image}
                alt={temple.name}
                className="w-full object-cover"
                style={{ maxHeight: "400px" }}
              />
            </div>
            <h2
              className="font-tamil font-bold text-3xl md:text-4xl mb-8 text-center"
              style={{ color: "oklch(0.32 0.11 20)" }}
            >
              🛕 {temple.name}
            </h2>
            {[
              { title: "வரலாறு", icon: "📜", content: temple.history },
              { title: "இடம்", icon: "📍", content: temple.location },
              {
                title: "சிறப்பம்சங்கள்",
                icon: "✨",
                content: temple.specialFeatures,
              },
              {
                title: "கலாச்சார முக்கியத்துவம்",
                icon: "🙏",
                content: temple.culturalImportance,
              },
            ].map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="rounded-xl p-6 mb-5"
                style={{
                  background: "oklch(0.32 0.11 20)",
                  border: "1.5px solid oklch(0.75 0.1 75 / 0.4)",
                }}
              >
                <h3
                  className="font-display font-bold text-xl mb-3 pb-2"
                  style={{
                    color: "oklch(0.75 0.1 75)",
                    borderBottom: "1px solid oklch(0.75 0.1 75 / 0.4)",
                  }}
                >
                  {section.icon} {section.title}
                </h3>
                <p
                  className="font-tamil text-base leading-relaxed"
                  style={{ color: "oklch(0.88 0.02 75)" }}
                >
                  {section.content}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="temples"
      className="py-16 px-6 parchment-bg relative overflow-hidden"
    >
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Section Header */}
          <img
            src="/assets/generated/kolam-pattern-transparent.dim_800x800.png"
            alt=""
            className="section-kolam-corner"
          />
          <div className="text-center mb-10">
            <div className="tamil-section-header pb-3">
              <div className="flex items-center justify-center gap-4 mb-2">
                <img
                  src="/assets/generated/kolam-pattern-transparent.dim_800x800.png"
                  alt=""
                  className="w-8 h-8 opacity-50"
                />
                <p
                  className="font-tamil text-sm tracking-widest"
                  style={{ color: "oklch(0.48 0.08 45)" }}
                >
                  TEMPLES & ARCHITECTURE
                </p>
                <img
                  src="/assets/generated/kolam-pattern-transparent.dim_800x800.png"
                  alt=""
                  className="w-8 h-8 opacity-50"
                />
              </div>
              <h2
                className="font-tamil font-bold text-3xl md:text-4xl"
                style={{ color: "oklch(0.32 0.11 20)" }}
              >
                கோவில்கள்{" "}
                <span style={{ color: "oklch(0.75 0.1 75)" }}>& கட்டிடக்கலை</span>
              </h2>
            </div>
            <OrnamentalBorder />
            <p
              className="font-tamil text-base leading-relaxed max-w-2xl mx-auto"
              style={{ color: "oklch(0.30 0.04 40)" }}
            >
              தமிழகத்தின் கோவில்கள் வெறும் வழிபாட்டிடங்கள் மட்டுமல்ல — அவை கலை, கட்டிடக்கலை,
              மற்றும் ஆன்மீகத்தின் சங்கமங்கள். ஆயிரக்கணக்கான ஆண்டுகளாக தொடர்ந்து வருகிற தமிழ்
              பண்பாட்டின் உயிர்நாடிகள்.
            </p>
          </div>

          {/* Temple Photo Gallery */}
          <div
            className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-14"
            data-ocid="temples.list"
          >
            {templeGallery.map((temple, i) => (
              <motion.div
                key={temple.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.55 }}
                className="rounded-lg overflow-hidden group cursor-default"
                style={{
                  background: "oklch(0.32 0.11 20)",
                  border: "1.5px solid oklch(0.75 0.1 75 / 0.5)",
                  boxShadow: "0 2px 12px oklch(0.32 0.11 20 / 0.15)",
                }}
                data-ocid={`temples.item.${i + 1}`}
              >
                {/* Image */}
                <div className="overflow-hidden h-40 md:h-52">
                  <img
                    src={temple.image}
                    alt={temple.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                {/* Card body */}
                <div className="p-3 md:p-4">
                  <h3
                    className="font-tamil font-bold text-sm md:text-base leading-tight mb-1"
                    style={{ color: "oklch(0.75 0.1 75)" }}
                  >
                    {temple.name}
                  </h3>
                  <p
                    className="font-display text-xs mb-2 flex items-center gap-1"
                    style={{ color: "oklch(0.65 0.07 75)" }}
                  >
                    <span>📍</span> {temple.location}
                  </p>
                  <p
                    className="font-tamil text-xs leading-relaxed"
                    style={{ color: "oklch(0.82 0.03 75)" }}
                  >
                    {temple.desc}
                  </p>
                  <button
                    onClick={() => {
                      const detail = templeDetails.find(
                        (t) => t.name === temple.name,
                      );
                      if (detail) setSelectedTemple(detail.id);
                    }}
                    className="mt-3 px-3 py-1.5 rounded text-xs font-tamil font-semibold transition-opacity hover:opacity-80"
                    style={{
                      background: "oklch(0.75 0.1 75 / 0.15)",
                      color: "oklch(0.75 0.1 75)",
                      border: "1px solid oklch(0.75 0.1 75 / 0.5)",
                    }}
                    type="button"
                    data-ocid={`temples.read_more.${i + 1}`}
                  >
                    மேலும் படிக்க →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Dravidian Architecture Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-14">
            <div>
              <h3
                className="font-tamil font-bold text-xl mb-4"
                style={{ color: "oklch(0.32 0.11 20)" }}
              >
                🕌 திராவிட கட்டிடக்கலை
              </h3>
              <p
                className="font-tamil text-base leading-relaxed mb-6"
                style={{ color: "oklch(0.30 0.04 40)" }}
              >
                திராவிட கட்டிடக்கலை என்பது தமிழகத்தின் தனித்துவமான கோவில் கட்டுமான முறை.
                உயர்ந்த கோபுரங்கள், சிற்பங்களால் அலங்கரிக்கப்பட்ட சுவர்கள், மண்டபங்கள் மற்றும்
                திருக்குளங்கள் இதன் சிறப்பம்சங்கள்.
              </p>

              <div className="space-y-4">
                {[
                  {
                    icon: "🏛️",
                    title: "கோபுரம்",
                    desc: "கோவிலின் நுழைவாயிலில் உயர்ந்து நிற்கும் கோபுரங்கள் நூற்றுக்கணக்கான சிற்பங்களால் அலங்கரிக்கப்பட்டிருக்கும். மதுரை மீனாட்சி கோவிலின் கோபுரங்கள் உலகப் புகழ் பெற்றவை.",
                  },
                  {
                    icon: "🗿",
                    title: "சிற்பக்கலை",
                    desc: "கோவில் சுவர்களில் காணப்படும் சிற்பங்கள் தமிழரின் கலை நுட்பத்திற்கு சாட்சி. தேவர்கள், மனிதர்கள், மிருகங்கள் அனைத்தும் கல்லில் உயிர் பெறுகின்றன.",
                  },
                  {
                    icon: "💧",
                    title: "திருக்குளம்",
                    desc: "கோவிலை சுற்றி இருக்கும் புனித குளங்கள் ஆன்மீக மற்றும் நடைமுறை நோக்கங்களை நிறைவேற்றுகின்றன. இக்குளங்களில் நீராடுவது புண்ணியமாக கருதப்படுகிறது.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-3 p-3 rounded"
                    style={{
                      background: "oklch(0.88 0.02 75)",
                      border: "1px solid oklch(0.75 0.1 75 / 0.4)",
                    }}
                  >
                    <span className="text-2xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <h4
                        className="font-tamil font-semibold text-sm mb-1"
                        style={{ color: "oklch(0.32 0.11 20)" }}
                      >
                        {item.title}
                      </h4>
                      <p
                        className="font-tamil text-xs leading-relaxed"
                        style={{ color: "oklch(0.35 0.04 40)" }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Meenakshi spotlight */}
            <div
              className="rounded-lg p-6"
              style={{
                background: "oklch(0.32 0.11 20)",
                border: "2px solid oklch(0.75 0.1 75)",
              }}
            >
              <div
                className="rounded-lg overflow-hidden mb-5"
                style={{ border: "1px solid oklch(0.75 0.1 75 / 0.4)" }}
              >
                <img
                  src="/assets/generated/meenakshi-temple.dim_800x500.jpg"
                  alt="மீனாட்சி அம்மன் கோவில்"
                  className="w-full h-52 object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="font-tamil font-bold text-xl text-center gold-text mb-3">
                🛕 மீனாட்சி அம்மன் கோவில்
              </h3>
              <p
                className="font-tamil text-sm leading-relaxed text-center"
                style={{ color: "oklch(0.82 0.03 75)" }}
              >
                மதுரையில் அமைந்த மீனாட்சி அம்மன் கோவில் திராவிட கட்டிடக்கலையின் உச்சக்கட்ட
                படைப்பு. 14 கோபுரங்கள், 33,000 சிற்பங்கள் மற்றும் அழகிய நூற்றுக்கால் மண்டபத்தை
                கொண்ட இக்கோவில் உலகின் எட்டாவது அதிசயமாக போற்றப்படுகிறது. தினமும்
                லட்சக்கணக்கான பக்தர்கள் இங்கு வழிபட வருகின்றனர்.
              </p>
            </div>
          </div>

          {/* Special Features Stat Cards */}
          <div
            className="rounded-xl p-6 md:p-8"
            style={{
              background: "oklch(0.32 0.11 20)",
              border: "2px solid oklch(0.75 0.1 75)",
            }}
          >
            <h3 className="font-tamil font-bold text-xl md:text-2xl text-center gold-text mb-6">
              ✦ தமிழக கோவில்களின் சிறப்பம்சங்கள் ✦
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {templeStats.map((stat, i) => (
                <motion.div
                  key={stat.temple}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className="text-center p-5 rounded-lg"
                  style={{
                    background: "oklch(0.24 0.05 30 / 0.6)",
                    border: "1px solid oklch(0.75 0.1 75 / 0.4)",
                  }}
                  data-ocid={`temples.stat.${i + 1}`}
                >
                  <div className="text-4xl mb-3">{stat.icon}</div>
                  <p
                    className="font-bold text-3xl md:text-4xl leading-none mb-1"
                    style={{ color: "oklch(0.75 0.1 75)" }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="font-tamil font-semibold text-base mb-2"
                    style={{ color: "oklch(0.82 0.03 75)" }}
                  >
                    {stat.unit}
                  </p>
                  <p
                    className="font-tamil text-xs"
                    style={{ color: "oklch(0.65 0.07 75)" }}
                  >
                    {stat.temple}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const dynasties = [
  {
    name: "சோழர் வம்சம்",
    english: "Chola Dynasty",
    period: "கி.பி. 9 – 13 ஆம் நூற்றாண்டு",
    color: "oklch(0.75 0.1 75)",
    icon: "👑",
    capital: "தஞ்சாவூர்",
    kings: ["ராஜராஜ சோழன் I", "ராஜேந்திர சோழன் I", "குலோத்துங்க சோழன்"],
    achievement: "தென்னாசியா முழுவதும் பரந்த கடல் சாம்ராஜ்யம்",
    founded: "கி.மு. 3 ஆம் நூற்றாண்டு",
    peak: "கி.பி. 10–12 ஆம் நூற்றாண்டு",
    decline: "கி.பி. 13 ஆம் நூற்றாண்டு",
    desc: "சோழர்கள் தமிழகத்தின் மிகவும் சக்திவாய்ந்த மற்றும் தொலைநோக்கு கொண்ட அரசு. தஞ்சாவூரை தலைநகராக வைத்து ஆட்சி செய்த இவர்கள் தங்கள் சாம்ராஜ்யத்தை இலங்கை, மாலத்தீவு, தென்கிழக்கு ஆசிய நாடுகள் வரை விரிவுபடுத்தினர். தஞ்சாவூர் பெரிய கோவில், கங்கைகொண்ட சோழபுரம் ஆகியவை இவர்கள் கட்டிடக்கலை மேதமையின் சான்றுகள். சோழர்கள் நிர்வாக அமைப்பு, நீர்ப்பாசனம், கடல் வணிகம் ஆகியவற்றில் புரட்சிகரமான மாற்றங்களை கொண்டு வந்தனர். தாமிர பட்டயங்கள் மூலம் நிலம் வழங்கிய இவர்கள் ஆட்சி முறையே பின்னாளில் இந்தியாவின் நிர்வாக மாதிரியாக போற்றப்படுகிறது.",
  },
  {
    name: "சேர வம்சம்",
    english: "Chera Dynasty",
    period: "கி.மு. 3 – கி.பி. 12 ஆம் நூற்றாண்டு",
    color: "oklch(0.65 0.07 75)",
    icon: "⚔️",
    capital: "வஞ்சி (கரூர்) / முசிரி",
    kings: ["சேரன் சேங்குட்டுவன்", "உதியஞ்சேரல்", "நெடுஞ்சேரலாதன்"],
    achievement: "ரோம் மற்றும் அரேபியாவுடன் கடல் வணிக நட்பு",
    founded: "கி.மு. 3 ஆம் நூற்றாண்டு",
    peak: "கி.மு. 1 – கி.பி. 3 ஆம் நூற்றாண்டு",
    decline: "கி.பி. 12 ஆம் நூற்றாண்டு",
    desc: "சேரர்கள் தற்போதைய கேரளா மற்றும் தமிழகத்தின் மேற்கு மலைப் பகுதிகளை ஆண்ட சங்க கால வீரர்கள். முசிரி (கொடுங்கல்லூர்) துறைமுகம் வழியாக ரோமப் பேரரசுடன் நேரடி கடல் வணிகம் நடத்தினர். சேரன் சேங்குட்டுவன் பத்தினி தெய்வ வழிபாட்டை தோற்றுவித்து, வட இந்தியா முழுவதும் படை நடத்தி சிலைக்கான கல் எடுத்து வந்தார் என சிலப்பதிகாரம் கூறுகிறது. இவர்கள் பத்தினி தெய்வ வழிபாட்டை தோற்றுவித்தவர்கள். அரேபியா, ரோம் ஆகியவற்றுடன் வணிகம் செய்ய கடல்வழி வர்த்தகப் பாதைகளை நிர்மாணித்தார்கள். சங்கப் பாடல்களில் இவர்களின் கொடைத்தன்மையும் வீரமும் பலமுறை போற்றப்பட்டுள்ளன.",
  },
  {
    name: "பாண்டிய வம்சம்",
    english: "Pandya Dynasty",
    period: "கி.மு. 5 – கி.பி. 15 ஆம் நூற்றாண்டு",
    color: "oklch(0.55 0.08 50)",
    icon: "🏰",
    capital: "மதுரை",
    kings: ["நெடுஞ்செழியன்", "முதல் பாண்டியன்", "மாறவர்மன் சுந்தர பாண்டியன்"],
    achievement: "முத்து வணிகம் மற்றும் தமிழ் சங்கம் நிறுவியவர்கள்",
    founded: "கி.மு. 5 ஆம் நூற்றாண்டு",
    peak: "கி.மு. 3 – கி.பி. 3 ஆம் நூற்றாண்டு",
    decline: "கி.பி. 15 ஆம் நூற்றாண்டு",
    desc: "மதுரையை தலைநகராக கொண்ட பாண்டியர்கள் தமிழ் மொழி மற்றும் கலையின் தலைசிறந்த ஆதரவாளர்கள். மன்னார் வளைகுடா முத்து வணிகத்தில் அசாத்திய வல்லமை கொண்டவர்கள். மூன்று தமிழ் சங்கங்களை நடத்தி கவிஞர்களையும் அறிஞர்களையும் கௌரவித்தனர். ரோம் நாட்டுக்கு முத்து ஏற்றுமதி செய்து தங்க நாணயங்கள் பெற்றனர். மீனாட்சி அம்மன் கோவிலின் ஆரம்ப கட்டுமானம் பாண்டியர் காலத்தில் தொடங்கியது என வரலாற்று ஆராய்ச்சிகள் கூறுகின்றன.",
  },
];

function HistoryDetailPage({ onBack }: { onBack: () => void }) {
  const [activeTab, setActiveTab] = useState("dynasties");

  const tabs = [
    { id: "dynasties", label: "வம்சங்கள்" },
    { id: "chola", label: "சோழர்கள்" },
    { id: "chera-pandya", label: "சேரர் & பாண்டியர்" },
    { id: "trade", label: "வணிகம் & நாகரீகம்" },
  ];

  const FactBox = ({ children }: { children: React.ReactNode }) => (
    <div
      className="rounded p-3 my-3 font-tamil text-sm leading-relaxed"
      style={{
        background: "oklch(0.28 0.09 25)",
        borderLeft: "4px solid oklch(0.75 0.1 75)",
        color: "oklch(0.82 0.03 75)",
      }}
    >
      {children}
    </div>
  );

  const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h3
      className="font-tamil font-bold text-xl mb-3"
      style={{ color: "oklch(0.75 0.1 75)" }}
    >
      {children}
    </h3>
  );

  return (
    <section
      id="history"
      className="py-12 px-6"
      style={{ background: "oklch(0.24 0.05 30)", minHeight: "100vh" }}
    >
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button
            onClick={onBack}
            type="button"
            data-ocid="history.secondary_button"
            className="flex items-center gap-2 mb-8 font-tamil text-sm px-4 py-2 rounded-lg transition-all hover:opacity-80"
            style={{
              background: "oklch(0.32 0.11 20)",
              color: "oklch(0.75 0.1 75)",
              border: "1px solid oklch(0.75 0.1 75 / 0.4)",
            }}
          >
            ← வரலாறு பட்டியல்
          </button>

          <div className="text-center mb-8">
            <p
              className="font-tamil text-sm tracking-widest mb-2"
              style={{ color: "oklch(0.65 0.07 75)" }}
            >
              HISTORY — DETAILED
            </p>
            <h2 className="font-tamil font-bold text-3xl md:text-4xl cream-text">
              தமிழ் வரலாறு <span className="gold-text">விரிவான விளக்கம்</span>
            </h2>
            <OrnamentalBorder />
          </div>

          <div
            className="flex flex-wrap gap-2 mb-8 border-b"
            style={{ borderColor: "oklch(0.4 0.08 30)" }}
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                data-ocid="history.tab"
                onClick={() => setActiveTab(tab.id)}
                className="font-tamil text-sm px-4 py-3 transition-all"
                style={{
                  color:
                    activeTab === tab.id
                      ? "oklch(0.75 0.1 75)"
                      : "oklch(0.6 0.04 75)",
                  borderBottom:
                    activeTab === tab.id
                      ? "3px solid oklch(0.75 0.1 75)"
                      : "3px solid transparent",
                  background: "transparent",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab === "dynasties" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <p
                className="font-tamil text-base leading-relaxed mb-8"
                style={{ color: "oklch(0.82 0.03 75)" }}
              >
                தமிழகத்தின் வரலாற்றில் மூன்று மகத்தான வம்சங்கள் — சோழர், சேரர், பாண்டியர் —
                ஆயிரக்கணக்கான ஆண்டுகளாக இந்த மண்ணை ஆட்சி செய்தன. இவர்கள் வெறும் ஆட்சியாளர்கள்
                மட்டுமல்ல, தமிழ் கலாச்சாரம், கட்டிடக்கலை, கடல் வணிகம் மற்றும் இலக்கியத்தின்
                பாதுகாவலர்களாகவும் விளங்கினார்கள். சோழர்கள் தென்னாசியா முழுவதும் கடல் சாம்ராஜ்யம்
                கட்டினார்கள்; சேரர்கள் ரோம் வரை வணிக நட்பு வளர்த்தனர்; பாண்டியர்கள் தமிழ் சங்கம்
                நடத்தி இலக்கியம் காத்தனர். இந்த மூன்று வம்சங்களும் ஒன்றோடொன்று போர் செய்தும்,
                சமரசம் செய்தும், சில நேரங்களில் கூட்டணி கட்டியும் தமிழகத்தின் வரலாற்றை
                வடிவமைத்தன. இன்றும் இவர்கள் கட்டிய கோவில்களும், எழுதி வைத்த கல்வெட்டுகளும்,
                நிர்மாணித்த நீர்த்தொட்டிகளும் அவர்களின் அழியாத பங்களிப்பை உணர்த்துகின்றன.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {dynasties.map((d, i) => (
                  <motion.div
                    key={d.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="rounded-lg p-5"
                    style={{
                      background: "oklch(0.32 0.11 20)",
                      border: `2px solid ${d.color}`,
                    }}
                    data-ocid={`history.item.${i + 1}`}
                  >
                    <div className="text-4xl mb-3 text-center">{d.icon}</div>
                    <h3
                      className="font-tamil font-bold text-lg text-center mb-1"
                      style={{ color: d.color }}
                    >
                      {d.name}
                    </h3>
                    <p
                      className="font-display text-xs text-center mb-2"
                      style={{ color: "oklch(0.65 0.07 75)" }}
                    >
                      {d.english}
                    </p>
                    <div className="space-y-1 mb-3">
                      <p
                        className="font-tamil text-xs"
                        style={{ color: "oklch(0.65 0.07 75)" }}
                      >
                        🏙️ தலைநகர்:{" "}
                        <span style={{ color: d.color }}>{d.capital}</span>
                      </p>
                      <p
                        className="font-tamil text-xs"
                        style={{ color: "oklch(0.65 0.07 75)" }}
                      >
                        📅 உச்சகட்டம்:{" "}
                        <span style={{ color: "oklch(0.82 0.03 75)" }}>
                          {d.peak}
                        </span>
                      </p>
                      <p
                        className="font-tamil text-xs"
                        style={{ color: "oklch(0.65 0.07 75)" }}
                      >
                        👑 புகழ்பெற்ற மன்னர்கள்:{" "}
                        <span style={{ color: "oklch(0.82 0.03 75)" }}>
                          {d.kings.join(", ")}
                        </span>
                      </p>
                    </div>
                    <div
                      className="rounded p-2 mb-3 font-tamil text-xs"
                      style={{
                        background: "oklch(0.24 0.05 30 / 0.6)",
                        color: d.color,
                      }}
                    >
                      ✦ {d.achievement}
                    </div>
                    <p
                      className="font-tamil text-xs leading-relaxed"
                      style={{ color: "oklch(0.82 0.03 75)" }}
                    >
                      {d.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === "chola" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              <div className="text-center">
                <h2 className="font-tamil font-bold text-2xl gold-text mb-2">
                  சோழர்களின் பெருவெற்றி
                </h2>
                <p
                  className="font-tamil text-sm"
                  style={{ color: "oklch(0.65 0.07 75)" }}
                >
                  The Great Chola Triumph
                </p>
              </div>

              <div className="text-center">
                <img
                  src="/assets/generated/chola-dynasty.dim_800x500.jpg"
                  alt="சோழ சாம்ராஜ்யம்"
                  className="rounded-lg w-full object-cover"
                  style={{ maxHeight: "300px" }}
                />
                <p
                  className="font-tamil text-sm mt-2"
                  style={{ color: "oklch(0.75 0.1 75)" }}
                >
                  ராஜராஜ சோழன் — சோழ சாம்ராஜ்யத்தின் பெருமை
                </p>
              </div>

              <div
                className="rounded-lg p-6"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.32 0.11 20) 0%, oklch(0.28 0.09 25) 100%)",
                  border: "2px solid oklch(0.75 0.1 75)",
                }}
              >
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="text-6xl shrink-0">👑</div>
                  <div className="flex-1">
                    <h3 className="font-tamil font-bold text-2xl gold-text mb-1">
                      ராஜராஜ சோழன் I
                    </h3>
                    <p
                      className="font-display text-sm mb-4"
                      style={{ color: "oklch(0.65 0.07 75)" }}
                    >
                      Raja Raja Chola I — கி.பி. 985 – 1014
                    </p>
                    <p
                      className="font-tamil text-sm leading-relaxed mb-4"
                      style={{ color: "oklch(0.82 0.03 75)" }}
                    >
                      தமிழகத்தின் மிகப் பெரும் மன்னர்களில் ஒருவரான ராஜராஜ சோழன் I, சோழ
                      சாம்ராஜ்யத்தை அதன் உச்சத்திற்கு கொண்டு சென்றார். கி.பி. 985-ல்
                      அரியணையேறிய இவர் தென்னிந்தியா முழுவதையும் வெற்றி கொண்டு, இலங்கையின்
                      வடபகுதியையும் தன் ஆட்சிக்குள் கொண்டு வந்தார். மாலத்தீவுகள் வரை கடற்படை
                      அனுப்பி தன் ஆதிக்கத்தை நிலைப்படுத்தினார். தஞ்சாவூரில் 1010-ல்
                      நிர்மாணிக்கப்பட்ட பிரகதீஸ்வரர் கோவில் இவரது சிறந்த கட்டிடக்கலை
                      நினைவுச்சின்னம்; இது இன்று யுனெஸ்கோவின் உலக பாரம்பரிய தளமாக
                      அறிவிக்கப்பட்டுள்ளது.
                    </p>
                    <FactBox>
                      🏛️ நிர்வாக புரட்சி: நாட்டை மண்டலம், நாடு, ஊர் என்று பிரித்து ஒழுங்கான
                      நிர்வாகம் நடத்தினார். ஒவ்வொரு கிராமத்திலும் சபை மூலம் ஆட்சி நடைபெற்றது.
                      தாமிர பட்டய கல்வெட்டுகள் மூலம் நிலம் வழங்கினார். திருவிடைமருதூர்
                      கல்வெட்டில் 7400 கிராமங்களுக்கு நிலம் வழங்கிய விவரம் பதியப்பட்டுள்ளது.
                    </FactBox>
                    <FactBox>
                      ⚔️ இராணுவ வெற்றிகள்: தென்னாசியா முழுவதையும் வெற்றி கொண்டதோடு,
                      தென்கிழக்கு ஆசியாவின் கடல் வழி வணிகப் பாதைகளை கட்டுப்பாட்டில் வைத்தார்.
                      சாளுக்கியர், கேரள சேரர்கள், கலிங்க அரசுகளை தோற்கடித்தார்.
                    </FactBox>
                    <FactBox>
                      🎨 கலை ஆதரவு: தஞ்சாவூர் கோவிலில் நடராஜர் வெண்கல சிலைகள், சுவர்
                      ஓவியங்கள், நூற்றுக்கணக்கான கல் சிற்பங்கள் உருவாக்கப்பட்டன. கர்நாடக இசைக்கும்
                      நாட்டியத்திற்கும் ஊக்கமளித்தார்.
                    </FactBox>
                  </div>
                </div>
              </div>

              <div
                className="rounded-lg p-6"
                style={{
                  background: "oklch(0.32 0.11 20)",
                  border: "2px solid oklch(0.65 0.07 75)",
                }}
              >
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="text-6xl shrink-0">⚓</div>
                  <div className="flex-1">
                    <h3
                      className="font-tamil font-bold text-2xl mb-1"
                      style={{ color: "oklch(0.65 0.07 75)" }}
                    >
                      ராஜேந்திர சோழன் I
                    </h3>
                    <p
                      className="font-display text-sm mb-4"
                      style={{ color: "oklch(0.65 0.07 75)" }}
                    >
                      Rajendra Chola I — கி.பி. 1014 – 1044
                    </p>
                    <p
                      className="font-tamil text-sm leading-relaxed mb-4"
                      style={{ color: "oklch(0.82 0.03 75)" }}
                    >
                      ராஜராஜ சோழனின் புதல்வரான ராஜேந்திர சோழன் I, உலக வரலாற்றிலேயே மிக
                      தொலைதூரம் செல்லும் கடல் படையெடுப்பை நடத்தினார். கி.பி. 1025-ல்
                      தென்கிழக்கு ஆசியாவின் ஸ்ரீவிஜயா சாம்ராஜ்யத்தை தோற்கடித்து கடல் வணிகப்
                      பாதையை கையகப்படுத்தினார். வடக்கே பயணித்து கங்கை ஆற்றின் நீரை எடுத்து
                      வந்து புதிய தலைநகரை 'கங்கைகொண்ட சோழபுரம்' என பெயரிட்டார். வங்காளம்
                      வரை படை நடத்தி சோழ ஆதிக்கத்தை நிலைப்படுத்தினார். அவரது கடல் படை
                      ஆசியாவின் முதல் தொலைதூர கடல் படையாக வரலாற்று ஆய்வாளர்களால்
                      கொண்டாடப்படுகிறது.
                    </p>
                    <FactBox>
                      🌊 கடல் படை வல்லமை: சோழர்களின் கடல் படை ஆசியாவின் முதல் சக்திவாய்ந்த
                      நீர்படை. பல நூறு போர்க் கப்பல்கள் கொண்ட இந்த படை மலேசியா, சுமத்ரா, ஜாவா
                      வரை சென்றது. தென்கிழக்கு ஆசியாவில் இந்து-தமிழ் கலாச்சாரம் பரவியதற்கு
                      சோழ கடல்படையே காரணம்.
                    </FactBox>
                  </div>
                </div>
              </div>

              <div
                className="rounded-lg p-6"
                style={{
                  background: "oklch(0.32 0.11 20)",
                  border: "1px solid oklch(0.45 0.08 30)",
                }}
              >
                <SectionTitle>🏛️ சோழர் கட்டிடக்கலை</SectionTitle>
                <p
                  className="font-tamil text-sm leading-relaxed mb-4"
                  style={{ color: "oklch(0.82 0.03 75)" }}
                >
                  சோழர்கள் திராவிட கட்டிடக்கலையை உலகின் உயரிய நிலைக்கு கொண்டு சென்றனர்.
                  அவர்களது கோவில்கள் வெறும் வழிபாட்டு இடங்கள் மட்டுமல்ல — அவை கலை, இசை,
                  நாட்டியம், கல்வி ஆகிய அனைத்திற்கும் மையமாக விளங்கின.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FactBox>
                    🗼 விமான கோபுரம்: தஞ்சாவூர் பிரகதீஸ்வரர் கோவிலின் விமானம் 66 மீட்டர் உயரம்
                    கொண்டது. 1000 ஆண்டுகளுக்கு முன்பே இந்த அளவிலான கட்டிடம் கட்டியது ஒரு
                    பொறியியல் அதிசயம்.
                  </FactBox>
                  <FactBox>
                    🗿 நடராஜர் வெண்கல சிற்பம்: சோழர் காலத்தில் உருவான நடராஜர் வெண்கல சிற்பங்கள்
                    உலகின் சிறந்த சிற்பக்கலையில் ஒன்றாக போற்றப்படுகின்றன. இது அண்டவியல்
                    மற்றும் தத்துவத்தை கலையில் வெளிப்படுத்திய ஒரு தனித்துவமான படைப்பு.
                  </FactBox>
                  <FactBox>
                    🪨 கல் சிற்பங்கள்: சோழர் கோவில்களில் காணப்படும் ஆயிரக்கணக்கான கல் சிற்பங்கள்
                    அன்றைய மனித வாழ்க்கை, போர்கள், வணிகம், கொண்டாட்டங்களை பதிவு செய்கின்றன.
                  </FactBox>
                  <FactBox>
                    📝 கல்வெட்டுகள்: சோழர் காலத்தில் ஏராளமான தாமிர பட்டயங்கள் மற்றும் கல்வெட்டுகள்
                    எழுதப்பட்டன. இவை அக்காலத்தின் நிர்வாகம், சமுதாயம், பொருளாதாரம் பற்றிய
                    விரிவான தகவல்களை வழங்குகின்றன.
                  </FactBox>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "chera-pandya" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              <div
                className="rounded-lg p-6"
                style={{
                  background: "oklch(0.32 0.11 20)",
                  border: "2px solid oklch(0.65 0.07 75)",
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">⚔️</span>
                  <div>
                    <h3
                      className="font-tamil font-bold text-xl"
                      style={{ color: "oklch(0.65 0.07 75)" }}
                    >
                      சேர வம்சம்
                    </h3>
                    <p
                      className="font-display text-xs"
                      style={{ color: "oklch(0.55 0.06 75)" }}
                    >
                      Chera Dynasty — கி.மு. 3 – கி.பி. 12 ஆம் நூற்றாண்டு
                    </p>
                  </div>
                </div>

                <img
                  src="/assets/generated/chera-dynasty.dim_800x500.jpg"
                  alt="சேர வம்சம்"
                  className="rounded-lg w-full object-cover mb-4"
                  style={{ maxHeight: "260px" }}
                />
                <p
                  className="font-tamil text-sm mb-4"
                  style={{ color: "oklch(0.75 0.1 75)" }}
                >
                  சேர வம்சம் — கடல் வணிக வீரர்கள்
                </p>

                <p
                  className="font-tamil text-sm leading-relaxed mb-4"
                  style={{ color: "oklch(0.82 0.03 75)" }}
                >
                  சேரர்கள் தற்போதைய கேரளா மற்றும் தமிழகத்தின் மேற்கு மலைப் பகுதிகளை ஆண்டனர்.
                  முசிரி (கொடுங்கல்லூர்) துறைமுகம் வழியாக ரோமப் பேரரசுடன் நேரடி கடல்
                  வணிகம் நடத்தினர். சேரன் சேங்குட்டுவன் கர்நாடகா, ஆந்திரா வரை படை நடத்தி
                  வடிமலையிலிருந்து கல் எடுத்து வந்து கண்ணகி சிலை வைத்தார் என சிலப்பதிகாரம்
                  கூறுகிறது. இவர்கள் பத்தினி தெய்வ வழிபாட்டை தோற்றுவித்தவர்கள். அரேபியா,
                  ரோம் ஆகியவற்றுடன் வணிகம் செய்ய கடல்வழி வர்த்தகப் பாதைகளை நிர்மாணித்தார்கள்.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FactBox>
                    🚢 ரோம் வணிகம்: ரோம் நாட்டிலிருந்து மது, தங்கம் வந்தன; ஏற்றுமதியாக
                    மிளகு, ஏலக்காய், இஞ்சி, யானைத் தந்தம் சென்றன. ரோம் நாட்டு அரசி ஆபரணங்களில்
                    கேரள முத்துக்கள் இருந்தன என்று ரோம் வரலாற்றாசிரியர் ஸ்ட்ரேபோ எழுதியுள்ளார்.
                  </FactBox>
                  <FactBox>
                    📜 சங்க கவிதைகள்: சேரர்களை போற்றும் பதிற்றுப்பத்து, அகநானூறு,
                    புறநானூறு கவிதைகள் இவர்களது வீரத்தையும் கொடைத்தன்மையும் பதிவு
                    செய்கின்றன.
                  </FactBox>
                  <FactBox>
                    ⛰️ மலை வணிகம்: மேற்கு தொடர்ச்சி மலைகளிலிருந்து மூலிகைகள், மரங்கள்,
                    யானைகள் ஏற்றுமதி ஆயின. சேரர்களின் காடுகள் உலகின் மிக மதிப்புமிக்க வணிக
                    தளங்களாக இருந்தன.
                  </FactBox>
                  <FactBox>
                    🙏 பௌத்த-சமண தாக்கம்: சேரர் மண்ணில் பௌத்தமும் சமண மதமும் பரவின. சில
                    சேர மன்னர்கள் சமண சமயத்திற்கு ஆதரவளித்தனர்.
                  </FactBox>
                </div>
              </div>

              <div
                className="rounded-lg p-6"
                style={{
                  background: "oklch(0.32 0.11 20)",
                  border: "2px solid oklch(0.55 0.08 50)",
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">🏰</span>
                  <div>
                    <h3
                      className="font-tamil font-bold text-xl"
                      style={{ color: "oklch(0.6 0.09 55)" }}
                    >
                      பாண்டிய வம்சம்
                    </h3>
                    <p
                      className="font-display text-xs"
                      style={{ color: "oklch(0.55 0.06 75)" }}
                    >
                      Pandya Dynasty — கி.மு. 5 – கி.பி. 15 ஆம் நூற்றாண்டு
                    </p>
                  </div>
                </div>

                <img
                  src="/assets/generated/pandya-dynasty.dim_800x500.jpg"
                  alt="பாண்டிய வம்சம்"
                  className="rounded-lg w-full object-cover mb-4"
                  style={{ maxHeight: "260px" }}
                />
                <p
                  className="font-tamil text-sm mb-4"
                  style={{ color: "oklch(0.75 0.1 75)" }}
                >
                  பாண்டிய வம்சம் — தமிழ் கலை காவலர்கள்
                </p>

                <p
                  className="font-tamil text-sm leading-relaxed mb-4"
                  style={{ color: "oklch(0.82 0.03 75)" }}
                >
                  மதுரையை தலைநகராக வைத்து ஆண்ட பாண்டியர்கள் தமிழ் மொழி மற்றும் இலக்கியத்தின்
                  தலைசிறந்த ஆதரவாளர்கள். மூன்று தமிழ் சங்கங்களை நிறுவி ஆயிரக்கணக்கான
                  கவிஞர்களுக்கும் அறிஞர்களுக்கும் கௌரவமளித்தனர். நெடுஞ்செழியன் போன்ற வீர
                  மன்னர்கள் வடக்கிலிருந்து வந்த படைகளை தோற்கடித்தார்கள். மன்னார் வளைகுடாவில்
                  முத்துக்கள் பல வேறு நாடுகளுக்கு ஏற்றுமதி ஆயின. தமிழகத்தில் மீனாட்சி அம்மன்
                  கோவிலின் ஆரம்ப கட்டுமானம் பாண்டியர் காலத்தில் தொடங்கியது. ரோம் நாட்டுக்கு
                  முத்து மற்றும் துணி ஏற்றுமதி செய்து தங்க நாணயங்கள் பெற்றனர்.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FactBox>
                    🎓 தமிழ் சங்கம்: மூன்று தமிழ் சங்கங்களில் ஆயிரக்கணக்கான கவிஞர்கள் பங்கேற்று
                    சங்க இலக்கியம் உருவானது. முதல் சங்கம் 4800 ஆண்டுகள், இரண்டாம் சங்கம் 3700
                    ஆண்டுகள் நடைபெற்றதாக மரபு கூறுகிறது.
                  </FactBox>
                  <FactBox>
                    💎 முத்து வணிகம்: மன்னார் வளைகுடாவில் வாழ்ந்த முத்து பவளங்கள் உலகெங்கும்
                    புகழ் பெற்றவை. ரோம் நாட்டு அரசர்கள் பாண்டிய முத்துக்களுக்கு வியந்தனர் என்று
                    எழுதி வைத்துள்ளனர்.
                  </FactBox>
                  <FactBox>
                    ⚔️ வீர நெடுஞ்செழியன்: புகழ் பெற்ற 'தலையாலங்கானத்துச் செரு வென்ற' போரில்
                    ஆரிய வம்ச மன்னர்களை தோற்கடித்தார். புறநானூறு இவரது வீரத்தை உயர்வாக
                    போற்றுகிறது.
                  </FactBox>
                  <FactBox>
                    🌺 கலாச்சார மையம்: மதுரை உலகின் முதல் திட்டமிட்ட நகரங்களில் ஒன்று.
                    தெருக்கள் கிழக்கு-மேற்காக அமைந்து மையத்தில் மீனாட்சி அம்மன் கோவில்
                    நிறுவப்பட்டது.
                  </FactBox>
                </div>
              </div>

              <div
                className="rounded-lg p-6"
                style={{
                  background: "oklch(0.28 0.09 25)",
                  border: "1px solid oklch(0.45 0.08 30)",
                }}
              >
                <SectionTitle>
                  📚 சங்க இலக்கியம் — மூன்று வம்சங்களின் கொடை
                </SectionTitle>
                <p
                  className="font-tamil text-sm leading-relaxed"
                  style={{ color: "oklch(0.82 0.03 75)" }}
                >
                  சோழர், சேரர், பாண்டியர் மூவரும் சங்க இலக்கியத்திற்கு ஆதரவளித்தனர். அகம்
                  (காதல்), புறம் (வீரம்) என இரு வகை கவிதைகளில் அன்றைய வாழ்க்கையின் ஒவ்வொரு
                  அம்சமும் பதியப்பட்டது. 2381 கவிதைகள் கொண்ட சங்க தொகுப்புகள் —
                  எட்டுத்தொகை, பத்துப்பாட்டு — இன்று உலகின் பழமையான உலகியல் கவிதைத்
                  தொகுப்புகளில் ஒன்றாக மதிப்பிடப்படுகின்றன. இந்த சாதனையில் மூன்று வம்சங்களும்
                  பங்குகொண்டதால் சங்க இலக்கியம் தமிழ் ஒற்றுமையின் அடையாளமாக நிலைத்திருக்கிறது.
                </p>
              </div>
            </motion.div>
          )}

          {activeTab === "trade" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              <div className="text-center mb-4">
                <h2 className="font-tamil font-bold text-2xl gold-text mb-2">
                  வணிகமும் நாகரீகமும்
                </h2>
                <p
                  className="font-tamil text-sm"
                  style={{ color: "oklch(0.65 0.07 75)" }}
                >
                  Trade Routes & Tamil Civilization
                </p>
              </div>

              <div
                className="rounded-lg p-6"
                style={{
                  background: "oklch(0.32 0.11 20)",
                  border: "2px solid oklch(0.75 0.1 75)",
                }}
              >
                <SectionTitle>🌍 வெளிநாட்டு வணிகம்</SectionTitle>
                <p
                  className="font-tamil text-sm leading-relaxed mb-4"
                  style={{ color: "oklch(0.82 0.03 75)" }}
                >
                  தமிழர்கள் கி.மு. 3-ஆம் நூற்றாண்டிலேயே கடல் வணிகத்தில் ஈடுபட்டனர். இந்திய
                  மகாக்கடலில் வீசும் பருவக்காற்றை பயன்படுத்தி, ரோம், அரேபியா, சீனா, தென்கிழக்கு
                  ஆசியா என்று உலகம் முழுவதும் வணிகம் செய்தனர்.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FactBox>
                    🏛️ ரோம் சாம்ராஜ்யம்: ரோம் தங்கமும் மதுவும் இறக்குமதியாயின. மிளகு, ஏலக்காய்,
                    கஸ்தூரி, முத்துக்கள், பருத்தி துணிகள் ஏற்றுமதியாயின. ரோம் அரசர்
                    அக்கஸ்டஸிடம் பாண்டிய தூதுவர்கள் சென்றனர் என்று ரோம் வரலாற்றாசிரியர் ஸ்ட்ரேபோ
                    எழுதியுள்ளார்.
                  </FactBox>
                  <FactBox>
                    🕌 அரேபியா: அரேபிய வணிகர்கள் குதிரைகள், பேரீச்சம்பழம், சுகந்த
                    திரவியங்கள் கொண்டு வந்தனர். ஈடாக மிளகு, துணி, முத்து, தந்தம் பெற்றனர்.
                    அரேபிய வணிகர்கள் தமிழகத்தில் குடியேறி கடல்வழி வணிக வலையமைப்பை
                    கட்டமைத்தனர்.
                  </FactBox>
                  <FactBox>
                    🐉 சீனா: சீனாவுடன் பட்டு வணிகம் நடைபெற்றது. சீன மஞ்சள் துணிகளும் பீங்கான்
                    பொருட்களும் தமிழகம் வந்தன. தமிழ் மிளகும் கல்கண்டும் சீனாவிற்கு சென்றன. சீன
                    வரலாற்று பதிவுகளில் தமிழக வணிகர்களின் குறிப்புகள் உள்ளன.
                  </FactBox>
                  <FactBox>
                    🌴 தென்கிழக்கு ஆசியா: தமிழ் கலாச்சாரம் — கோவில் கட்டுமானம், தமிழ் மொழி,
                    இந்து மதம், நாட்டியம் — தென்கிழக்கு ஆசியாவிற்கு ஏற்றுமதி ஆனது.
                    கம்போடியாவின் அங்கோர்வாட், இந்தோனேசியாவின் பிரம்பானன் கோவில்களில் தமிழ்
                    கலாச்சாரத்தின் தாக்கம் காணலாம்.
                  </FactBox>
                </div>
              </div>

              <div
                className="rounded-lg p-6"
                style={{
                  background: "oklch(0.32 0.11 20)",
                  border: "1px solid oklch(0.45 0.08 30)",
                }}
              >
                <SectionTitle>⚓ பழைய துறைமுகங்கள்</SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div
                    className="rounded p-4"
                    style={{ background: "oklch(0.28 0.09 25)" }}
                  >
                    <p className="font-tamil font-bold text-base gold-text mb-2">
                      புகார் (காவிரிப்பட்டினம்)
                    </p>
                    <p
                      className="font-tamil text-xs leading-relaxed"
                      style={{ color: "oklch(0.82 0.03 75)" }}
                    >
                      சிலப்பதிகாரத்தில் கோவலன் மற்றும் கண்ணகியின் ஊர். சோழர்களின் முக்கியமான
                      வணிக துறைமுகம். உலகின் பல நாடுகளிலிருந்து வணிகர்கள் இங்கு வந்தனர்.
                    </p>
                  </div>
                  <div
                    className="rounded p-4"
                    style={{ background: "oklch(0.28 0.09 25)" }}
                  >
                    <p className="font-tamil font-bold text-base gold-text mb-2">
                      கொற்கை (கொர்கை)
                    </p>
                    <p
                      className="font-tamil text-xs leading-relaxed"
                      style={{ color: "oklch(0.82 0.03 75)" }}
                    >
                      பாண்டியரின் பழைய தலைநகர் மற்றும் முத்து வணிக மையம். மன்னார் வளைகுடாவில்
                      முத்துக்கடல் இங்கிருந்தே ஆரம்பமாகும்.
                    </p>
                  </div>
                  <div
                    className="rounded p-4"
                    style={{ background: "oklch(0.28 0.09 25)" }}
                  >
                    <p className="font-tamil font-bold text-base gold-text mb-2">
                      முசிரி (முசிறி)
                    </p>
                    <p
                      className="font-tamil text-xs leading-relaxed"
                      style={{ color: "oklch(0.82 0.03 75)" }}
                    >
                      சேரர்களின் முக்கிய கடல் வணிக மையம். ரோம் வணிகர்கள் நேரடியாக இங்கு
                      வந்தனர். இந்த துறைமுகம் வழியாக வந்த ரோம் தங்கம் இந்தியா முழுவதும்
                      பரவியது.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="rounded-lg p-6"
                style={{
                  background: "oklch(0.32 0.11 20)",
                  border: "1px solid oklch(0.45 0.08 30)",
                }}
              >
                <SectionTitle>🛒 வணிகப் பொருட்கள்</SectionTitle>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    {
                      icon: "🌶️",
                      name: "மிளகு",
                      desc: "கறுப்பு தங்கம் என்று ஐரோப்பியர்கள் அழைத்தனர்",
                    },
                    {
                      icon: "💎",
                      name: "முத்துக்கள்",
                      desc: "மன்னார் வளைகுடாவின் ஆழ்கடல் முத்துக்கள்",
                    },
                    {
                      icon: "🧵",
                      name: "பருத்தி துணி",
                      desc: "மெல்லிய மஸ்லின் துணி உலகம் புகழ்ந்தது",
                    },
                    {
                      icon: "🐘",
                      name: "தந்தம்",
                      desc: "யானை தந்தம் கைவினைப் பொருளாக ஏற்றுமதி",
                    },
                    {
                      icon: "🌿",
                      name: "ஏலக்காய்",
                      desc: "சமையலிலும் மருத்துவத்திலும் பயன்பட்டது",
                    },
                    {
                      icon: "🪵",
                      name: "தேக்கு மரம்",
                      desc: "கப்பல் கட்ட மதிப்பு மிக்க மரம்",
                    },
                    {
                      icon: "🧴",
                      name: "கஸ்தூரி",
                      desc: "சுகந்த திரவியம் — அரேபியா விரும்பியது",
                    },
                    {
                      icon: "🔶",
                      name: "தங்கம்",
                      desc: "ரோமிலிருந்து வந்த தங்கம் தமிழகம் செழித்தது",
                    },
                  ].map((item) => (
                    <div
                      key={item.name}
                      className="rounded p-3 text-center"
                      style={{ background: "oklch(0.28 0.09 25)" }}
                    >
                      <div className="text-2xl mb-1">{item.icon}</div>
                      <p className="font-tamil font-bold text-xs gold-text mb-1">
                        {item.name}
                      </p>
                      <p
                        className="font-tamil text-xs"
                        style={{ color: "oklch(0.7 0.03 75)" }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="rounded-lg p-6"
                style={{
                  background: "oklch(0.28 0.09 25)",
                  border: "2px solid oklch(0.75 0.1 75)",
                }}
              >
                <SectionTitle>🌟 தமிழ் நாகரீகத்தின் வளர்ச்சி</SectionTitle>
                <p
                  className="font-tamil text-sm leading-relaxed mb-4"
                  style={{ color: "oklch(0.82 0.03 75)" }}
                >
                  தமிழ் நாகரீகம் வெறும் கலாச்சார வளர்ச்சி மட்டுமல்ல — அது நகர திட்டமிடல்,
                  நாணயமுறை, கல்வி, பெண்கள் உரிமை என்று ஒரு முழுமையான சமுதாய அமைப்பை
                  உருவாக்கியது.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FactBox>
                    🏙️ நகர திட்டமிடல்: மதுரை, காவிரிப்பட்டினம் போன்ற நகரங்கள் திட்டமிட்ட
                    தெருக்கள், சந்தைகள், நீர் வழிகள் கொண்டிருந்தன. சங்க கவிதைகளில் பல மாடி
                    வீடுகள், பெரிய வணிக தெருக்கள் பற்றிய விவரிப்புகள் உள்ளன.
                  </FactBox>
                  <FactBox>
                    🪙 நாணயமுறை: சோழர், பாண்டியர் காலத்தில் பல வகை நாணயங்கள் புழக்கத்தில்
                    இருந்தன. இவை வணிகத்தை எளிமையாக்கி சமுதாய முன்னேற்றத்திற்கு வழி
                    வகுத்தன.
                  </FactBox>
                  <FactBox>
                    📖 கல்விமுறை: சங்க கால பெண்கள் கவிதை எழுதினார்கள். ஔவையார், நக்கீரர் போன்ற
                    கவிஞர்கள் சமுதாயத்தில் மதிக்கப்பட்டனர். குழந்தைகளுக்கு வாய்மொழியாக கவிதைகள்
                    கற்பிக்கப்பட்டன.
                  </FactBox>
                  <FactBox>
                    👩 பெண்கள் உரிமைகள்: சங்க காலத்தில் பெண்கள் கவிதை எழுதினார்கள், தனித்து
                    பயணம் செய்தார்கள், காதலை வெளிப்படையாக பேசினார்கள். ஔவையார், வெள்ளி வீதியார்,
                    காக்கைபாடினியார் போன்ற பெண் கவிஞர்கள் இந்த சுதந்திரத்தின் சான்றுகள்.
                  </FactBox>
                  <FactBox>
                    🌾 நீர்ப்பாசனம்: கல்லணை (கி.பி. 2 ஆம் நூற்றாண்டு) உலகின் இன்றும்
                    பயன்பாட்டிலிருக்கும் பழமையான அணைகளில் ஒன்று. சோழர் நீர் நிர்வாக விவசாய
                    நாகரீகத்தை மேம்படுத்தியது.
                  </FactBox>
                  <FactBox>
                    🌐 இந்து மகாக்கடல் வணிக மொழி: தமிழ் மொழி கி.மு. 3 ஆம்
                    நூற்றாண்டிலிருந்தே கடல் வணிக மொழியாக பயன்பட்டது. இலங்கை, மியான்மார்,
                    மலேசியா, இந்தோனேசியா ஆகிய நாடுகளில் தமிழ் கல்வெட்டுகள்
                    கண்டெடுக்கப்பட்டுள்ளன.
                  </FactBox>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function HistorySection() {
  const [historyDetailOpen, setHistoryDetailOpen] = useState(false);

  if (historyDetailOpen) {
    return <HistoryDetailPage onBack={() => setHistoryDetailOpen(false)} />;
  }

  return (
    <section
      id="history"
      className="py-16 px-6 relative overflow-hidden"
      style={{ background: "oklch(0.24 0.05 30)" }}
    >
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <img
            src="/assets/generated/kolam-pattern-transparent.dim_800x800.png"
            alt=""
            className="section-kolam-corner-light"
          />
          <div className="text-center mb-10">
            <div className="tamil-section-header-light pb-3">
              <div className="flex items-center justify-center gap-4 mb-2">
                <img
                  src="/assets/generated/kolam-pattern-transparent.dim_800x800.png"
                  alt=""
                  className="w-8 h-8 opacity-30 brightness-200"
                />
                <p
                  className="font-tamil text-sm tracking-widest"
                  style={{ color: "oklch(0.65 0.07 75)" }}
                >
                  HISTORY
                </p>
                <img
                  src="/assets/generated/kolam-pattern-transparent.dim_800x800.png"
                  alt=""
                  className="w-8 h-8 opacity-30 brightness-200"
                />
              </div>
              <h2 className="font-tamil font-bold text-3xl md:text-4xl cream-text">
                வரலாறு <span className="gold-text">& அரசர்கள்</span>
              </h2>
            </div>
            <OrnamentalBorder />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {dynasties.map((dynasty, i) => (
              <motion.div
                key={dynasty.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="rounded-lg p-5"
                style={{
                  background: "oklch(0.32 0.11 20)",
                  border: `2px solid ${dynasty.color}`,
                }}
                data-ocid={`history.item.${i + 1}`}
              >
                <div className="text-4xl mb-3 text-center">{dynasty.icon}</div>
                <h3
                  className="font-tamil font-bold text-lg text-center mb-1"
                  style={{ color: dynasty.color }}
                >
                  {dynasty.name}
                </h3>
                <p
                  className="font-display text-xs text-center mb-3"
                  style={{ color: "oklch(0.65 0.07 75)" }}
                >
                  {dynasty.english}
                </p>
                <p
                  className="font-tamil text-xs text-center mb-4 px-2 py-1 rounded"
                  style={{
                    background: "oklch(0.24 0.05 30 / 0.5)",
                    color: "oklch(0.75 0.1 75)",
                  }}
                >
                  {dynasty.period}
                </p>
                <p
                  className="font-tamil text-sm leading-relaxed"
                  style={{ color: "oklch(0.82 0.03 75)" }}
                >
                  {dynasty.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div
            className="rounded-lg p-6 md:p-8 mb-8"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.32 0.11 20) 0%, oklch(0.28 0.09 25) 100%)",
              border: "2px solid oklch(0.75 0.1 75)",
            }}
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="text-7xl">👑</div>
              <div>
                <h3 className="font-tamil font-bold text-2xl gold-text mb-2">
                  ராஜராஜ சோழன் I
                </h3>
                <p
                  className="font-display text-sm mb-3"
                  style={{ color: "oklch(0.65 0.07 75)" }}
                >
                  Raja Raja Chola I — கி.பி. 985 – 1014
                </p>
                <p
                  className="font-tamil text-base leading-relaxed"
                  style={{ color: "oklch(0.82 0.03 75)" }}
                >
                  தமிழகத்தின் மிகப் பெரும் மன்னர்களில் ஒருவரான ராஜராஜ சோழன் I, சோழ சாம்ராஜ்யத்தை
                  அதன் உச்சத்திற்கு கொண்டு சென்றார். தஞ்சாவூரில் உள்ள பிரகதீஸ்வரர் கோவில் இவரது
                  அழியாத சின்னம். கடல்வழி வணிகத்தை விரிவாக்கி, இலங்கை, மாலத்தீவு மற்றும்
                  தென்கிழக்கு ஆசிய நாடுகளை வெற்றி கொண்டார். கலை, இலக்கியம் மற்றும்
                  கட்டிடக்கலையை ஊக்குவித்தார்.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => setHistoryDetailOpen(true)}
              type="button"
              data-ocid="history.primary_button"
              className="font-tamil text-sm px-8 py-3 rounded-lg transition-all hover:opacity-90 hover:scale-105"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.75 0.1 75), oklch(0.65 0.09 65))",
                color: "oklch(0.2 0.04 30)",
                fontWeight: "bold",
              }}
            >
              மேலும் படிக்க →
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FoodSection() {
  const [activePage, setActivePage] = useState<
    "traditional" | "banana" | "virundhombal"
  >("traditional");

  const pages = [
    { id: "traditional" as const, label: "பாரம்பரிய உணவுகள்", icon: "🍽️" },
    { id: "banana" as const, label: "வாழை இலை விருந்து", icon: "🍌" },
    { id: "virundhombal" as const, label: "விருந்தோம்பல்", icon: "🤝" },
  ];

  const traditionalFoods = [
    {
      icon: "🫓",
      name: "இட்லி",
      english: "Idli",
      color: "oklch(0.88 0.05 60)",
      image: "/assets/generated/food-idli.dim_400x300.jpg",
      desc: "புளிக்க வைத்த அரிசி மாவில் தயாரிக்கப்படும் இட்லி தமிழரின் காலை உணவின் அடையாளம். இரண்டாயிரம் ஆண்டுகளுக்கும் மேலான வரலாறு கொண்ட இந்த உணவு, உடலுக்கு எளிதில் செரிக்கும் தன்மை கொண்டது. சாம்பார், தேங்காய் சட்னி, தக்காளி சட்னி என பல்வேறு துணை உணவுகளுடன் சாப்பிடுவது மரபு.",
    },
    {
      icon: "🥞",
      name: "தோசை",
      english: "Dosa",
      color: "oklch(0.86 0.06 55)",
      image: "/assets/generated/food-dosa.dim_400x300.jpg",
      desc: "மெல்லிய மொறுமொறுப்பான தோசை உலகப் புகழ் பெற்ற தமிழ் உணவு. மசாலா தோசை, ரவா தோசை, கார தோசை, நீர் தோசை, சேட்டிநாடு தோசை என ஏராளமான வகைகள் உள்ளன. உலகின் மிகச் சிறந்த உணவுகளில் ஒன்றாக தோசை அங்கீகரிக்கப்பட்டுள்ளது.",
    },
    {
      icon: "🥣",
      name: "சாம்பார்",
      english: "Sambar",
      color: "oklch(0.84 0.07 50)",
      image: "/assets/generated/food-sambar.dim_400x300.jpg",
      desc: "பருப்பு, காய்கறிகள், புளி மற்றும் தனித்துவமான மசாலா கலவையால் தயாரிக்கப்படும் சாம்பார் தமிழ் சமையலின் ஆத்மா. ஒவ்வொரு குடும்பமும் தங்கள் சொந்த ரேசிபி கொண்டுள்ளது. இட்லி, தோசை, சோறு என அனைத்துடனும் சேர்த்து உண்ணலாம்.",
    },
    {
      icon: "🫗",
      name: "ரசம்",
      english: "Rasam",
      color: "oklch(0.86 0.06 45)",
      image: "/assets/generated/food-rasam.dim_400x300.jpg",
      desc: "மிளகு, சீரகம், புளி, தக்காளி கொண்டு தயாரிக்கப்படும் ரசம் தமிழர்களின் மருத்துவ உணவு. சளி, இருமல் போன்ற நோய்களுக்கு ரசம் மிகச் சிறந்த நிவாரணம். உணவின் இறுதியில் ரசம் சாதம் சாப்பிடுவது தமிழ் மரபு.",
    },
    {
      icon: "🌶️",
      name: "சேட்டிநாடு சமையல்",
      english: "Chettinad Cuisine",
      color: "oklch(0.84 0.08 35)",
      image: "/assets/generated/food-chettinad.dim_400x300.jpg",
      desc: "உலகப் புகழ் பெற்ற சேட்டிநாடு சமையல் தமிழகத்தின் பெருமை. கரி வேர்ப்பிலை, கல்பாசி, மரத்தி மொக்கு போன்ற தனித்துவமான மசாலாக்கள் பயன்படுத்தப்படும். கொழி வருவல், மட்டன் குழம்பு, நாட்டுக்கோழி பிரியாணி என்பவை சிறப்பு உணவுகள்.",
    },
    {
      icon: "🍮",
      name: "பாயசம்",
      english: "Payasam",
      color: "oklch(0.88 0.05 65)",
      image: "/assets/generated/food-payasam.dim_400x300.jpg",
      desc: "பண்டிகை காலங்களில் தவிர்க்க முடியாத இனிப்பு பாயசம். பால், சர்க்கரை, சேமியா அல்லது அரிசி கொண்டு தயாரிக்கப்படும் இந்த இனிப்பு கடவுளுக்கு நைவேத்தியமாக படைக்கப்படும். வீட்டு விழாக்களில் பாயசம் இல்லாமல் விருந்து நடைபெறாது.",
    },
  ];

  return (
    <section
      id="food"
      className="py-16 px-6 parchment-bg relative overflow-hidden"
    >
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Section Header */}
          <img
            src="/assets/generated/kolam-pattern-transparent.dim_800x800.png"
            alt=""
            className="section-kolam-corner"
          />
          <div className="text-center mb-10">
            <div className="tamil-section-header pb-3">
              <div className="flex items-center justify-center gap-4 mb-2">
                <img
                  src="/assets/generated/kolam-pattern-transparent.dim_800x800.png"
                  alt=""
                  className="w-8 h-8 opacity-50"
                />
                <p
                  className="font-tamil text-sm tracking-widest"
                  style={{ color: "oklch(0.48 0.08 45)" }}
                >
                  FOOD CULTURE
                </p>
                <img
                  src="/assets/generated/kolam-pattern-transparent.dim_800x800.png"
                  alt=""
                  className="w-8 h-8 opacity-50"
                />
              </div>
              <h2
                className="font-tamil font-bold text-3xl md:text-4xl"
                style={{ color: "oklch(0.32 0.11 20)" }}
              >
                உணவு <span style={{ color: "oklch(0.75 0.1 75)" }}>கலாச்சாரம்</span>
              </h2>
            </div>
            <OrnamentalBorder />
            <p
              className="font-tamil text-base leading-relaxed max-w-2xl mx-auto"
              style={{ color: "oklch(0.38 0.06 35)" }}
            >
              தமிழர்களின் உணவு கலாச்சாரம் வெறும் சாப்பிடுவதற்கு அப்பால் — அது ஒரு கலை, ஒரு
              மரபு, ஒரு ஆன்மிக அனுபவம்.
            </p>
          </div>

          {/* Page Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {pages.map((page) => (
              <button
                key={page.id}
                type="button"
                onClick={() => setActivePage(page.id)}
                className="font-tamil px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300"
                style={
                  activePage === page.id
                    ? {
                        background: "oklch(0.32 0.11 20)",
                        color: "oklch(0.75 0.1 75)",
                        border: "2px solid oklch(0.75 0.1 75)",
                      }
                    : {
                        background: "transparent",
                        color: "oklch(0.32 0.11 20)",
                        border: "2px solid oklch(0.65 0.08 50)",
                      }
                }
              >
                {page.icon} {page.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {/* PAGE 1: Traditional Foods */}
            {activePage === "traditional" && (
              <motion.div
                key="traditional"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-10">
                  <div
                    className="rounded-xl overflow-hidden shadow-lg"
                    style={{ border: "2px solid oklch(0.75 0.1 75)" }}
                  >
                    <img
                      src="/assets/generated/idli-dosa-sambar.dim_800x500.jpg"
                      alt="Traditional Tamil breakfast - idli dosa sambar"
                      className="w-full h-72 object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h3
                      className="font-tamil font-bold text-2xl mb-4"
                      style={{ color: "oklch(0.32 0.11 20)" }}
                    >
                      🍽️ தமிழரின் பாரம்பரிய உணவுகள்
                    </h3>
                    <p
                      className="font-tamil text-base leading-relaxed mb-4"
                      style={{ color: "oklch(0.38 0.06 35)" }}
                    >
                      தமிழ் சமையல் உலகின் மிகப் பழமையான சமையல் முறைகளில் ஒன்று. சங்க
                      இலக்கியங்களில் கூட உணவு பற்றிய குறிப்புகள் காணப்படுகின்றன.
                      ஆரோக்கியம், சுவை, ஆன்மிகம் ஆகிய மூன்றும் இணைந்தது தமிழ் உணவு மரபு.
                    </p>
                    <p
                      className="font-tamil text-base leading-relaxed"
                      style={{ color: "oklch(0.38 0.06 35)" }}
                    >
                      புளிக்க வைத்த மாவில் தயாரிக்கும் உணவுகள் உடலுக்கு நல்லது என்று
                      தமிழர்கள் ஆயிரம் ஆண்டுகளுக்கு முன்பே கண்டறிந்தனர். இட்லி, தோசை, இட்லி
                      மாவு ஆகியவை புரோபயோடிக் தன்மை கொண்டவை.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                  {traditionalFoods.map((food, i) => (
                    <motion.div
                      key={food.name}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.08, duration: 0.5 }}
                      className="rounded-xl overflow-hidden"
                      style={{
                        background: food.color,
                        border: "1px solid oklch(0.75 0.1 75 / 0.5)",
                      }}
                      data-ocid={`food.item.${i + 1}`}
                    >
                      {food.image && (
                        <img
                          src={food.image}
                          alt={food.english}
                          className="w-full h-40 object-cover"
                          loading="lazy"
                        />
                      )}
                      <div className="p-5">
                        <div className="text-3xl mb-2">{food.icon}</div>
                        <h4
                          className="font-tamil font-bold text-base mb-1"
                          style={{ color: "oklch(0.22 0.08 20)" }}
                        >
                          {food.name}
                        </h4>
                        <p
                          className="font-display text-xs mb-2 italic"
                          style={{ color: "oklch(0.42 0.06 35)" }}
                        >
                          {food.english}
                        </p>
                        <p
                          className="font-tamil text-xs leading-relaxed"
                          style={{ color: "oklch(0.32 0.04 35)" }}
                        >
                          {food.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Quote */}
                <div
                  className="mt-10 p-6 rounded-xl text-center"
                  style={{
                    background: "oklch(0.32 0.11 20)",
                    border: "2px solid oklch(0.75 0.1 75)",
                  }}
                >
                  <p className="font-tamil text-lg gold-text mb-2">
                    "உண்டி கொடுத்தோர் உயிர் கொடுத்தோரே"
                  </p>
                  <p
                    className="font-display text-sm italic"
                    style={{ color: "oklch(0.78 0.04 60)" }}
                  >
                    "One who provides food gives life itself" — Purananuru
                  </p>
                </div>
              </motion.div>
            )}

            {/* PAGE 2: Banana Leaf */}
            {activePage === "banana" && (
              <motion.div
                key="banana"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-10">
                  <div
                    className="rounded-xl overflow-hidden shadow-lg"
                    style={{ border: "2px solid oklch(0.75 0.1 75)" }}
                  >
                    <img
                      src="/assets/generated/banana-leaf-meal.dim_800x500.jpg"
                      alt="Traditional Tamil banana leaf meal"
                      className="w-full h-72 object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h3
                      className="font-tamil font-bold text-2xl mb-4"
                      style={{ color: "oklch(0.32 0.11 20)" }}
                    >
                      🍌 வாழை இலை விருந்து
                    </h3>
                    <p
                      className="font-tamil text-base leading-relaxed mb-4"
                      style={{ color: "oklch(0.38 0.06 35)" }}
                    >
                      வாழை இலையில் உணவு பரிமாறுவது தமிழரின் தொன்மையான மரபு. வாழை இலையில்
                      ஆன்டி-பேக்டீரியல் குணங்கள் உள்ளன — இது உணவை புதிதாகவும் சுகாதாரமாகவும்
                      வைக்கும்.
                    </p>
                    <p
                      className="font-tamil text-base leading-relaxed"
                      style={{ color: "oklch(0.38 0.06 35)" }}
                    >
                      சாப்பிட்ட பிறகு வாழை இலையை மடக்கும் விதமும் முக்கியம் — திருமண
                      விருந்தில் முன்பக்கமாக மடக்கினால் சுப சகுனம், தாழ்பக்கமாக மடக்கினால் துக்க
                      நிகழ்வு என்று பொருள்.
                    </p>
                  </div>
                </div>

                {/* Banana Leaf Layout */}
                <div
                  className="rounded-xl p-6 mb-8"
                  style={{
                    background: "oklch(0.32 0.11 20)",
                    border: "2px solid oklch(0.75 0.1 75)",
                  }}
                >
                  <h4 className="font-tamil font-bold text-xl gold-text mb-6 text-center">
                    🍃 வாழை இலையில் உணவு வரிசை
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      {
                        pos: "மேல் இடது",
                        items: "ஊறுகாய், அப்பளம், வடை",
                        icon: "🫙",
                      },
                      {
                        pos: "மேல் வலது",
                        items: "கூட்டு, பொரியல், கீரை",
                        icon: "🥬",
                      },
                      { pos: "நடு", items: "சோறு (பெரிய குவியல்)", icon: "🍚" },
                      { pos: "வலது", items: "சாம்பார், ரசம், மோர்", icon: "🥣" },
                      { pos: "இடது", items: "கொழுக்கட்டை, கேசரி", icon: "🍮" },
                      { pos: "கீழ்", items: "வாழைப்பழம், பாயசம்", icon: "🍌" },
                      { pos: "தொடக்கம்", items: "தேங்காய் சட்னி, நெய்", icon: "🥥" },
                      { pos: "முடிவு", items: "வெற்றிலை, பாக்கு", icon: "🌿" },
                    ].map((item) => (
                      <div
                        key={item.pos}
                        className="rounded-lg p-3 text-center"
                        style={{ background: "oklch(0.42 0.09 25)" }}
                      >
                        <div className="text-2xl mb-1">{item.icon}</div>
                        <p className="font-tamil text-xs gold-text font-bold mb-1">
                          {item.pos}
                        </p>
                        <p
                          className="font-tamil text-xs"
                          style={{ color: "oklch(0.82 0.03 60)" }}
                        >
                          {item.items}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {[
                    {
                      icon: "🌿",
                      title: "ஆரோக்கிய நன்மைகள்",
                      desc: "வாழை இலையில் உள்ள பாலிஃபீனால்கள் உணவுடன் சேரும்போது ஆரோக்கிய நன்மைகள் தருகின்றன. சூடான சாப்பாடு இலையில் படும்போது இயற்கை ஆன்டி-ஆக்சிடண்ட்கள் வெளியாகும்.",
                    },
                    {
                      icon: "🎊",
                      title: "விழா மரபு",
                      desc: "திருமணம், பிறந்தநாள், தீபாவளி, பொங்கல் போன்ற எல்லா விழாக்களிலும் வாழை இலை சாப்பாடு தவிர்க்க முடியாதது. ஒரே இலையில் 20-30 உணவுப் பொருட்கள் பரிமாறுவது தமிழ் கலாச்சாரத்தின் செழுமையை காட்டுகிறது.",
                    },
                    {
                      icon: "🌍",
                      title: "சுற்றுச்சூழல் நட்பு",
                      desc: "வாழை இலை முழுக்க இயற்கையானது, மண்ணில் கரையும் தன்மை கொண்டது. பிளாஸ்டிக் தட்டுகளுக்கு பதிலாக வாழை இலை பயன்படுத்துவது சுற்றுச்சூழலுக்கு நல்லது என்று இன்று உலகம் அறிந்துள்ளது.",
                    },
                  ].map((card) => (
                    <div
                      key={card.title}
                      className="p-5 rounded-xl"
                      style={{
                        background: "oklch(0.88 0.04 60)",
                        border: "1px solid oklch(0.75 0.1 75 / 0.5)",
                      }}
                    >
                      <div className="text-3xl mb-3">{card.icon}</div>
                      <h4
                        className="font-tamil font-bold text-sm mb-2"
                        style={{ color: "oklch(0.22 0.08 20)" }}
                      >
                        {card.title}
                      </h4>
                      <p
                        className="font-tamil text-xs leading-relaxed"
                        style={{ color: "oklch(0.35 0.05 35)" }}
                      >
                        {card.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* PAGE 3: Virundhombal */}
            {activePage === "virundhombal" && (
              <motion.div
                key="virundhombal"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-10">
                  <div
                    className="rounded-xl overflow-hidden shadow-lg"
                    style={{ border: "2px solid oklch(0.75 0.1 75)" }}
                  >
                    <img
                      src="/assets/generated/tamil-virundhombal.dim_800x500.jpg"
                      alt="Tamil virundhombal hospitality"
                      className="w-full h-72 object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h3
                      className="font-tamil font-bold text-2xl mb-4"
                      style={{ color: "oklch(0.32 0.11 20)" }}
                    >
                      🤝 விருந்தோம்பல் — தமிழர் விருந்தோம்பல் கலை
                    </h3>
                    <p
                      className="font-tamil text-base leading-relaxed mb-4"
                      style={{ color: "oklch(0.38 0.06 35)" }}
                    >
                      "விருந்தோம்பல்" என்பது தமிழரின் மிக உயர்ந்த நடைமுறை. "விருந்தினரை
                      கடவுளாக மதி" என்ற கொள்கை தமிழ் வாழ்வின் அடிப்படை. திருவள்ளுவர்
                      திருக்குறளில் இதற்கு ஒரு அதிகாரமே ஒதுக்கியுள்ளார்.
                    </p>
                    <p
                      className="font-tamil text-base leading-relaxed"
                      style={{ color: "oklch(0.38 0.06 35)" }}
                    >
                      வீட்டிற்கு வரும் விருந்தினர்க்கு முதலில் தண்ணீர் தருவது, அமர வைப்பது,
                      உணவு கொடுப்பது என்பது தமிழர்களின் சமூக கடமை. "பசியோடு யாரையும்
                      திருப்பி அனுப்பாதே" என்பது தமிழ் குடும்பங்களின் பொன்னான நியதி.
                    </p>
                  </div>
                </div>

                {/* Thirukkural quotes */}
                <div className="mb-8">
                  <h4
                    className="font-tamil font-bold text-xl text-center mb-6"
                    style={{ color: "oklch(0.32 0.11 20)" }}
                  >
                    📜 திருக்குறள் — விருந்தோம்பல் அதிகாரம்
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {[
                      {
                        kural:
                          "இருந்தோம்பி இல்வாழ்வ தெல்லாம் விருந்தோம்பி வேளாண்மை செய்தற் பொருட்டு.",
                        meaning:
                          "இல்லறத்தின் நோக்கமே விருந்தினரை போற்றி உபசரிப்பதுதான்.",
                        number: "குறள் 81",
                      },
                      {
                        kural:
                          "விருந்துபுரிந்து விருந்தோம்பி ஆடற்கு வேண்டும் உடம்படல் கேடு.",
                        meaning:
                          "விருந்தினரை போற்றி, அவருக்கு உணவளித்து மகிழ்வித்தால் அது மிக உயர்ந்த கடமை.",
                        number: "குறள் 82",
                      },
                      {
                        kural:
                          "உடனுண்பான் ஒக்கற்சால் விருந்தினன்கீழ் விடுத்தல் விருந்து அல்ல செய்கை.",
                        meaning:
                          "விருந்தினருடன் அமர்ந்து சாப்பிடுவதே உண்மையான விருந்தோம்பல்.",
                        number: "குறள் 83",
                      },
                      {
                        kural:
                          "மோப்பக் குழையும் அனிச்சம் முகத்திரிந்து நோக்கப் பசிக்கும் விருந்து.",
                        meaning:
                          "அனிச்சம் பூ தொட்டாலே வாடும்; விருந்தினனும் முகம் திரும்பி பார்த்தாலே வாடுவான்.",
                        number: "குறள் 90",
                      },
                    ].map((k) => (
                      <div
                        key={k.number}
                        className="p-5 rounded-xl"
                        style={{
                          background: "oklch(0.32 0.11 20)",
                          border: "2px solid oklch(0.75 0.1 75)",
                        }}
                      >
                        <p className="font-tamil text-sm font-bold gold-text mb-1">
                          {k.number}
                        </p>
                        <p
                          className="font-tamil text-sm leading-relaxed mb-3 whitespace-pre-line"
                          style={{ color: "oklch(0.92 0.04 70)" }}
                        >
                          {k.kural}
                        </p>
                        <p
                          className="font-tamil text-xs leading-relaxed italic"
                          style={{ color: "oklch(0.75 0.04 55)" }}
                        >
                          பொருள்: {k.meaning}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hospitality practices */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {[
                    {
                      icon: "🚪",
                      title: "வரவேற்பு மரபு",
                      steps: [
                        "கதவில் கோலம் போடுவது",
                        "விளக்கு ஏற்றி வைப்பது",
                        "தண்ணீர் கொடுப்பது",
                        "அமர வைப்பது",
                      ],
                    },
                    {
                      icon: "🍚",
                      title: "உணவு பரிமாறும் மரபு",
                      steps: [
                        "வாழை இலை விரிப்பது",
                        "முதலில் இனிப்பு வைப்பது",
                        "அதிகமாக பரிமாறுவது",
                        "இரண்டாவது மடக்கு கேட்பது",
                      ],
                    },
                    {
                      icon: "🌸",
                      title: "விடை கொடுக்கும் மரபு",
                      steps: [
                        "வெற்றிலை பாக்கு கொடுப்பது",
                        "பரிசு வழங்குவது",
                        "வழியனுப்புவது",
                        "மீண்டும் வருமாறு கோருவது",
                      ],
                    },
                  ].map((practice) => (
                    <div
                      key={practice.title}
                      className="p-5 rounded-xl"
                      style={{
                        background: "oklch(0.88 0.04 60)",
                        border: "1px solid oklch(0.75 0.1 75 / 0.5)",
                      }}
                    >
                      <div className="text-3xl mb-3">{practice.icon}</div>
                      <h4
                        className="font-tamil font-bold text-sm mb-3"
                        style={{ color: "oklch(0.22 0.08 20)" }}
                      >
                        {practice.title}
                      </h4>
                      <ul className="space-y-1">
                        {practice.steps.map((step) => (
                          <li key={step} className="flex items-start gap-2">
                            <span style={{ color: "oklch(0.65 0.12 50)" }}>
                              ✦
                            </span>
                            <span
                              className="font-tamil text-xs"
                              style={{ color: "oklch(0.35 0.05 35)" }}
                            >
                              {step}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer className="maroon-bg pt-10 pb-6 px-6">
      <GoldDivider />
      <div className="max-w-[1100px] mx-auto">
        {/* Kolam decoration */}
        <div className="flex justify-center my-6">
          <img
            src="/assets/generated/kolam-pattern-transparent.dim_800x800.png"
            alt="Kolam pattern"
            className="w-40 h-40 opacity-70 object-contain"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="font-tamil font-bold text-xl gold-text mb-2">
              தமிழ் பாரம்பரியம்
            </h3>
            <p className="font-display text-sm cream-text opacity-80">
              Heritage of Tamil
            </p>
            <p
              className="font-tamil text-xs mt-3 leading-relaxed"
              style={{ color: "oklch(0.72 0.04 75)" }}
            >
              தமிழ் மொழியின் பெருமையை உலகிற்கு பரப்புவதே எங்கள் நோக்கம்.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-tamil font-semibold gold-text mb-3 text-sm">
              விரைவு இணைப்புகள்
            </h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() =>
                      document
                        .getElementById(item.id)
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    data-ocid={`footer.${item.id}.link`}
                    className="font-tamil text-xs transition-colors duration-200 hover:gold-text"
                    style={{ color: "oklch(0.72 0.04 75)" }}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quote */}
          <div className="text-center md:text-right">
            <h4 className="font-tamil font-semibold gold-text mb-3 text-sm">
              திருக்குறள்
            </h4>
            <blockquote
              className="font-tamil text-sm italic leading-relaxed"
              style={{ color: "oklch(0.82 0.03 75)" }}
            >
              "கற்க கசடறக் கற்பவை கற்றபின்
              <br />
              நிற்க அதற்குத் தக"
              <br />
              <cite
                className="not-italic text-xs"
                style={{ color: "oklch(0.65 0.07 75)" }}
              >
                — திருவள்ளுவர்
              </cite>
            </blockquote>
          </div>
        </div>

        <GoldDivider />

        <div className="flex flex-col md:flex-row items-center justify-between gap-3 pt-4">
          <p
            className="font-tamil text-xs"
            style={{ color: "oklch(0.65 0.07 75)" }}
          >
            © {year} தமிழ் பாரம்பரியம். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.
          </p>
          <a
            href={caffeineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs transition-colors duration-200 hover:gold-text"
            style={{ color: "oklch(0.65 0.07 75)" }}
          >
            Built with ❤️ using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);

      const sectionIds = navItems.map((n) => n.id);
      let current = "home";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Header activeSection={activeSection} />

      <main>
        <HeroSection />
        <GoldDivider />
        <LanguageSection />
        <GoldDivider />
        <ArtSection />
        <GoldDivider />
        <TemplesSection />
        <GoldDivider />
        <HistorySection />
        <GoldDivider />
        <FoodSection />
      </main>

      <Footer />

      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            data-ocid="scroll.primary_button"
            className="fixed bottom-6 right-6 w-12 h-12 rounded-full flex items-center justify-center shadow-lg z-40 transition-transform duration-200 hover:scale-110"
            style={{
              background: "oklch(0.32 0.11 20)",
              border: "2px solid oklch(0.75 0.1 75)",
            }}
            aria-label="Scroll to top"
          >
            <ChevronUp className="gold-text" size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
