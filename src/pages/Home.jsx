import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  // Modal & Form States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [email, setEmail] = useState("");

  // Smooth scroll handler function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openUpgradeModal = (planName) => {
    setSelectedPlan(planName);
    setIsModalOpen(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Payment Successful! Your ${selectedPlan} workspace is now active.`);
    setIsModalOpen(false);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-[#0F0F14] text-white flex flex-col justify-between relative overflow-x-hidden font-sans select-none">
      
      {/* ─── PREMIUM CSS ANIMATION ENGINE ─── */}
      <style>{`
        @keyframes slowDrift {
          0% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(15px, -25px) scale(1.02); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes slowDriftReverse {
          0% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(-20px, 15px) scale(0.98); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes revealGradient {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes modalBounce {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        .animate-drift-cluster-1 { animation: slowDrift 14s ease-in-out infinite; }
        .animate-drift-cluster-2 { animation: slowDriftReverse 18s ease-in-out infinite; }
        
        .animate-text-line1 { 
          display: inline-block;
          animation: fadeInUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards; 
        }
        .animate-text-line2 { 
          display: inline-block;
          opacity: 0; 
          animation: revealGradient 1.1s cubic-bezier(0.16, 1, 0.3, 1) forwards; 
          animation-delay: 0.4s; 
        }
        .animate-subtitle { 
          opacity: 0; 
          animation: fadeInUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards; 
          animation-delay: 0.7s; 
        }
        .animate-cta-area { 
          opacity: 0; 
          animation: fadeInUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards; 
          animation-delay: 0.9s; 
        }
        .animate-modal { animation: modalBounce 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>
      
      {/* ─── BACKGROUND NEURAL MESH (ACTIVE MOTION) ─── */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[140px]" />
        <svg className="w-full h-full stroke-purple-500/20 stroke-[1.5] fill-none" xmlns="http://www.w3.org/2000/svg">
          <g className="animate-drift-cluster-1">
            <path d="M150 200 L300 120 L450 180 L250 350 L150 200 Z" />
            <path d="M450 180 L700 220 L800 450 L500 520 L250 350 Z" />
            <path d="M50 400 L180 520 L250 350" />
            <g className="fill-purple-400">
              <circle cx="150" cy="200" r="3.5" /><circle cx="450" cy="180" r="4" className="animate-pulse" />
              <circle cx="250" cy="350" r="3.5" /><circle cx="700" cy="220" r="4.5" />
            </g>
          </g>
          <g className="animate-drift-cluster-2">
            <path d="M300 120 L550 90 L600 280 L450 180 Z" />
            <path d="M600 280 L850 150 L950 320 L700 220 Z" />
            <g className="fill-indigo-400">
              <circle cx="300" cy="120" r="4.5" /><circle cx="800" cy="450" r="4.5" className="animate-pulse" />
              <circle cx="950" cy="320" r="4" />
            </g>
          </g>
        </svg>
      </div>

      {/* 1. STICKY GLASS NAVIGATION */}
      <header className="w-full max-w-7xl mx-auto px-8 py-5 flex justify-between items-center border-b border-gray-900/40 z-50 sticky top-0 bg-[#0F0F14]/80 backdrop-blur-md">
        <div className="text-2xl font-black tracking-wider uppercase bg-gradient-to-r from-purple-400 to-indigo-300 bg-clip-text text-transparent cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          Heliqo
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <span onClick={() => scrollToSection("features")} className="hover:text-purple-400 cursor-pointer transition-all duration-300">Features</span>
          <span onClick={() => scrollToSection("docs")} className="hover:text-purple-400 cursor-pointer transition-all duration-300">Docs</span>
          <span onClick={() => scrollToSection("pricing")} className="hover:text-purple-400 cursor-pointer transition-all duration-300">Pricing</span>
        </div>

        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-purple-950/40 to-slate-900 border border-purple-500/30 text-purple-300 text-xs font-mono">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
          v1.0 Ready
        </div>
      </header>

      {/* 2. HERO SECTION (DYNAMIC TEXT TRANSITIONS) */}
      <main className="max-w-4xl mx-auto px-6 text-center z-10 py-24 flex flex-col justify-center items-center min-h-[85vh]">
        <div className="animate-text-line1 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-medium mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-purple-400 animate-ping" />
          Next-Gen AI Workspace for Designers
        </div>

        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-[1.2] text-white flex flex-col items-center">
          <span className="animate-text-line1">Decode Client Briefs.</span>
          <span className="animate-text-line2 bg-gradient-to-r from-purple-400 via-pink-400 to-violet-400 bg-clip-text text-transparent mt-2">
            Build Brand DNA.
          </span>
        </h1>

        <p className="animate-subtitle text-gray-400 text-base md:text-lg max-w-2xl mb-12 leading-relaxed font-light">
          From Brief to Brand Blueprint. Automatically extract aesthetics, color strategies, typography, and core brand voices within seconds.
        </p>

        <div className="animate-cta-area flex flex-col items-center w-full">
          <div className="z-20 mb-12">
            <Link
              to="/dashboard"
              className="group relative inline-flex items-center gap-3 bg-white text-black font-semibold px-9 py-4 rounded-xl shadow-[0_0_35px_rgba(147,51,234,0.15)] hover:shadow-[0_0_50px_rgba(147,51,234,0.35)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
            >
              Launch Dashboard
              <svg className="w-4 h-4 text-purple-600 group-hover:translate-x-1.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </main>

      {/* 3. FEATURES SECTION */}
      <section id="features" className="w-full max-w-6xl mx-auto px-8 py-24 border-t border-gray-900/60 z-20 scroll-mt-20">
        <div className="text-center mb-16">
          <span className="text-purple-400 font-mono text-xs uppercase tracking-widest">Capabilities</span>
          <h2 className="text-3xl md:text-5xl font-black mt-2">Engineered For Fast Branding</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#13131A] border border-gray-800 p-8 rounded-2xl hover:border-purple-500/30 transition-all duration-300 group">
            <span className="text-3xl block mb-4 group-hover:scale-110 transition-transform">🎯</span>
            <h3 className="text-xl font-bold mb-2">Brief Matrix Decoding</h3>
            <p className="text-gray-400 text-sm font-light leading-relaxed">Paste complex client chats. Our neural layers strip noise to isolate strict brand targets instantly.</p>
          </div>
          <div className="bg-[#13131A] border border-gray-800 p-8 rounded-2xl hover:border-purple-500/30 transition-all duration-300 group">
            <span className="text-3xl block mb-4 group-hover:scale-110 transition-transform">🎨</span>
            <h3 className="text-xl font-bold mb-2">Psychology Color Maps</h3>
            <p className="text-gray-400 text-sm font-light leading-relaxed">Generates high-contrast corporate palettes derived scientifically from target audience demographics.</p>
          </div>
          <div className="bg-[#13131A] border border-gray-800 p-8 rounded-2xl hover:border-purple-500/30 transition-all duration-300 group">
            <span className="text-3xl block mb-4 group-hover:scale-110 transition-transform">📑</span>
            <h3 className="text-xl font-bold mb-2">Vector Canvas Export</h3>
            <p className="text-gray-400 text-sm font-light leading-relaxed">Package strategy files into layout presentations. Download HD typography blueprints in seconds.</p>
          </div>
        </div>
      </section>

      {/* 4. DOCS SECTION (DETAILED ENGLISH STEPS) */}
      <section id="docs" className="w-full max-w-4xl mx-auto px-8 py-24 border-t border-gray-900/60 z-20 scroll-mt-20">
        <div className="text-center mb-16">
          <span className="text-purple-400 font-mono text-xs uppercase tracking-widest">Workspace Manual</span>
          <h2 className="text-3xl md:text-4xl font-black mt-2">How Does Heliqo Help You?</h2>
          <p className="text-gray-400 text-sm max-w-lg mx-auto mt-4 font-light">Explore how Heliqo translates chaotic client files into structured brand strategies:</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#13131A] border border-gray-800/80 p-6 rounded-xl hover:border-purple-500/20 transition-all">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-purple-500/10 text-purple-400 text-[10px] font-bold px-2 py-0.5 rounded uppercase">Step 01</span>
              <h4 className="font-bold text-gray-200 text-sm">Brief Extraction</h4>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed font-light">Input unstructured chats or emails. Heliqo filters through noise to extract core messages and audience requirements.</p>
          </div>
          <div className="bg-[#13131A] border border-gray-800/80 p-6 rounded-xl hover:border-purple-500/20 transition-all">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-purple-500/10 text-purple-400 text-[10px] font-bold px-2 py-0.5 rounded uppercase">Step 02</span>
              <h4 className="font-bold text-gray-200 text-sm">DNA Generation</h4>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed font-light">Our AI evaluates the brand objective to recommend color theories, typography, and aesthetic styles instantly.</p>
          </div>
          <div className="bg-[#13131A] border border-gray-800/80 p-6 rounded-xl hover:border-purple-500/20 transition-all">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-purple-500/10 text-purple-400 text-[10px] font-bold px-2 py-0.5 rounded uppercase">Step 03</span>
              <h4 className="font-bold text-gray-200 text-sm">Secure API Sync</h4>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed font-light">Securely sync your OpenAI keys. Keys are stored locally in your browser cache, keeping your data private and safe.</p>
          </div>
          <div className="bg-[#13131A] border border-gray-800/80 p-6 rounded-xl hover:border-purple-500/20 transition-all">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-purple-500/10 text-purple-400 text-[10px] font-bold px-2 py-0.5 rounded uppercase">Step 04</span>
              <h4 className="font-bold text-gray-200 text-sm">Proposal Export</h4>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed font-light">Package moodboards and strategies into HD presentation exports. Ready to pitch directly to your design clients.</p>
          </div>
        </div>
      </section>

      {/* 5. PRICING SECTION */}
      <section id="pricing" className="w-full max-w-5xl mx-auto px-8 py-24 border-t border-gray-900/60 z-20 scroll-mt-20 mb-12">
        <div className="text-center mb-16">
          <span className="text-purple-400 font-mono text-xs uppercase tracking-widest">Pricing</span>
          <h2 className="text-3xl md:text-5xl font-black mt-2">Flexible Scaling Plans</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <div className="bg-[#13131A] border border-gray-800 p-8 rounded-2xl flex flex-col justify-between hover:border-gray-700 transition-all">
            <div>
              <h3 className="text-lg font-bold text-gray-400">Basic Tier</h3>
              <div className="text-4xl font-black text-white mt-4 mb-2">$0 <span className="text-xs text-gray-500 font-normal">/ month</span></div>
              <ul className="space-y-3 text-xs text-gray-500 border-t border-gray-900/80 pt-4 mt-4">
                <li>• Local Mock Engine</li>
                <li>• Max 4 Recent History Slots</li>
                <li>• Standard Manual Copy</li>
              </ul>
            </div>
            <button onClick={() => openUpgradeModal("Heliqo Basic")} className="w-full mt-8 py-3 bg-[#0F0F14] border border-gray-800 rounded-xl text-xs font-bold hover:bg-white hover:text-black transition-all uppercase tracking-widest">Get Started</button>
          </div>
          <div className="bg-[#13131A] border-2 border-purple-500 p-8 rounded-2xl flex flex-col justify-between relative shadow-[0_0_40px_rgba(168,85,247,0.1)]">
            <div className="absolute top-4 right-4 bg-purple-500 text-white text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-tighter">Popular</div>
            <div>
              <h3 className="text-lg font-bold text-purple-400">Designer Pro</h3>
              <div className="text-4xl font-black text-white mt-4 mb-2">$19 <span className="text-xs text-gray-500 font-normal">/ month</span></div>
              <ul className="space-y-3 text-xs text-gray-300 border-t border-purple-900/40 pt-4 mt-4">
                <li className="text-purple-300">• Live OpenAI GPT-4o Integration</li>
                <li>• Unlimited Cloud History Slots</li>
                <li>• Presenter PDF Exporter</li>
                <li>• Advanced Persona Builders</li>
              </ul>
            </div>
            <button onClick={() => openUpgradeModal("Designer Pro")} className="w-full mt-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-500 text-white rounded-xl text-xs font-bold hover:opacity-90 transition-all uppercase tracking-widest shadow-lg">Upgrade Now</button>
          </div>
        </div>
      </section>

      {/* ─── DYNAMIC SECURE PAYMENT MODAL ─── */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4">
          <div className="bg-[#13131A] border border-purple-500/30 w-full max-w-md rounded-2xl p-8 relative shadow-2xl animate-modal">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <div className="mb-6">
              <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest">Checkout Secure</span>
              <h3 className="text-xl font-black mt-1 text-white">{selectedPlan} Activation</h3>
              <p className="text-xs text-gray-400 mt-1 font-light">Authorized payment gateway for neural workspace licensing.</p>
            </div>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              {selectedPlan === "Designer Pro" && (
                <>
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-gray-500 mb-1.5">Cardholder Name</label>
                    <input type="text" required placeholder="Full Name" className="w-full bg-[#0F0F14] border border-gray-800 focus:border-purple-500/50 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-700 outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-gray-500 mb-1.5">Card Details</label>
                    <div className="relative">
                      <input type="text" required maxLength="19" placeholder="4242 •••• •••• ••••" className="w-full bg-[#0F0F14] border border-gray-800 focus:border-purple-500/50 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-700 outline-none transition-all font-mono tracking-widest" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" required maxLength="5" placeholder="MM/YY" className="w-full bg-[#0F0F14] border border-gray-800 focus:border-purple-500/50 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-700 outline-none text-center font-mono" />
                    <input type="password" required maxLength="3" placeholder="CVC" className="w-full bg-[#0F0F14] border border-gray-800 focus:border-purple-500/50 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-700 outline-none text-center font-mono tracking-widest" />
                  </div>
                </>
              )}
              <div>
                <label className="block text-[10px] font-mono uppercase tracking-wider text-gray-500 mb-1.5">Billing Email</label>
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="billing@agency.com" className="w-full bg-[#0F0F14] border border-gray-800 focus:border-purple-500/50 rounded-xl px-4 py-3 text-xs text-white outline-none transition-all" />
              </div>
              <button type="submit" className="w-full py-4 bg-gradient-to-r from-purple-600 to-indigo-500 text-white font-black rounded-xl text-[10px] uppercase tracking-[0.2em] shadow-lg mt-4 hover:brightness-110 active:scale-[0.98] transition-all">
                {selectedPlan === "Designer Pro" ? "Pay $19.00 & Activate" : "Initialize Workspace"}
              </button>
              <div className="text-[9px] text-center text-gray-600 mt-2 font-mono flex items-center justify-center gap-1.5 uppercase tracking-tighter">
                🔒 Bank-Grade AES-256 Encryption
              </div>
            </form>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="w-full max-w-7xl mx-auto px-8 py-8 flex flex-col sm:row justify-between items-center border-t border-gray-900/40 text-[10px] text-gray-600 z-10 gap-4 uppercase tracking-[0.2em]">
        <span>Built by Modern Designers</span>
        <div className="flex gap-8">
          <span>Local Sync</span>
          <span>PDF Export</span>
        </div>
      </footer>
    </div>
  );
}