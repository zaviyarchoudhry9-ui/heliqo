import { useState, useEffect } from "react";
import jsPDF from "jspdf";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("dashboard"); // Tab switching status controller
  const [projectName, setProjectName] = useState("");
  const [brief, setBrief] = useState("");
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const savedProjects =
      JSON.parse(localStorage.getItem("heliqoProjects")) || [];
    setHistory(savedProjects);
  }, []);

  const saveProject = (analysis) => {
    const newProject = {
      id: Date.now(),
      name: projectName,
      brief,
      results: analysis,
    };

    const updatedProjects = [newProject, ...history];
    setHistory(updatedProjects);
    localStorage.setItem("heliqoProjects", JSON.stringify(updatedProjects));
  };

  const loadProject = (project) => {
    setProjectName(project.name);
    setBrief(project.brief);
    setResults(project.results);
    setActiveTab("dashboard"); // Auto-switch to dashboard when user opens a project
  };

  const deleteProject = (id) => {
    const updatedProjects = history.filter((project) => project.id !== id);
    setHistory(updatedProjects);
    localStorage.setItem("heliqoProjects", JSON.stringify(updatedProjects));
  };

  const generateDNA = () => {
    if (!projectName.trim() || !brief.trim()) {
      alert("Please enter project name and client brief.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const text = brief.toLowerCase();

      let analysis = {
        personality: "Modern, Professional, Innovative",
        audience: "Business Professionals",
        colors: "Purple, Black, White",
        typography: "Poppins + Inter",
        moodboard: "Modern, Clean, Strategic",
        voice: "Confident, Smart, Professional",
      };

      if (
        text.includes("beauty") ||
        text.includes("skincare") ||
        text.includes("cosmetic")
      ) {
        analysis = {
          personality: "Elegant, Premium, Feminine",
          audience: "Women aged 25-45",
          colors: "Rose Gold, Ivory, Beige",
          typography: "Playfair Display + Inter",
          moodboard: "Luxury, Soft, Minimal",
          voice: "Warm, Elegant, Trustworthy",
        };
      } else if (
        text.includes("restaurant") ||
        text.includes("food") ||
        text.includes("cafe")
      ) {
        analysis = {
          personality: "Friendly, Authentic, Energetic",
          audience: "Food Lovers & Families",
          colors: "Red, Orange, Cream",
          typography: "Montserrat + Open Sans",
          moodboard: "Appetizing, Rustic, Vibrant",
          voice: "Welcoming, Fun, Delicious",
        };
      } else if (
        text.includes("crypto") ||
        text.includes("forex") ||
        text.includes("fintech") ||
        text.includes("trading")
      ) {
        analysis = {
          personality: "Bold, Secure, Innovative",
          audience: "Investors & Traders",
          colors: "Purple, Black, Electric Blue",
          typography: "Space Grotesk + Inter",
          moodboard: "Futuristic, Tech, Premium",
          voice: "Confident, Intelligent, Powerful",
        };
      } else if (
        text.includes("real estate") ||
        text.includes("property") ||
        text.includes("housing")
      ) {
        analysis = {
          personality: "Trustworthy, Premium, Professional",
          audience: "Property Buyers & Investors",
          colors: "Navy, Gold, White",
          typography: "Merriweather + Inter",
          moodboard: "Luxury, Corporate, Elegant",
          voice: "Reliable, Professional, Confident",
        };
      }

      setResults(analysis);
      saveProject(analysis);
      setLoading(false);
    }, 2000);
  };

  const exportPDF = () => {
    if (!results) {
      alert("Generate Brand Blueprint first.");
      return;
    }

    const doc = new jsPDF();
    doc.setFontSize(22);
    doc.text("Heliqo Brand Blueprint", 20, 20);
    doc.setFontSize(12);
    doc.text(`Project: ${projectName}`, 20, 40);
    doc.text(`Personality: ${results.personality}`, 20, 60);
    doc.text(`Audience: ${results.audience}`, 20, 80);
    doc.text(`Colors: ${results.colors}`, 20, 100);
    doc.text(`Typography: ${results.typography}`, 20, 120);
    doc.text(`Moodboard: ${results.moodboard}`, 20, 140);
    doc.text(`Brand Voice: ${results.voice}`, 20, 160);
    doc.save(`${projectName}-blueprint.pdf`);
  };

  const copyResults = () => {
    if (!results) {
      alert("Generate Brand Blueprint first.");
      return;
    }

    const text = `
Brand Personality: ${results.personality}
Target Audience: ${results.audience}
Color Strategy: ${results.colors}
Typography: ${results.typography}
Moodboard: ${results.moodboard}
Brand Voice: ${results.voice}
`;

    navigator.clipboard.writeText(text);
    alert("Results copied!");
  };

  return (
    <div className="min-h-screen bg-[#0F0F14] text-white flex select-none">
      
      {/* ─── SIDEBAR SYSTEM ─── */}
      <div className="w-64 bg-[#18181F] border-r border-gray-800 p-6 flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-black tracking-wider uppercase bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent mb-10">
            Heliqo
          </h1>

          <nav className="space-y-2">
            <div 
              onClick={() => setActiveTab("dashboard")}
              className={`px-4 py-3 rounded-xl font-medium cursor-pointer transition-all duration-200 ${activeTab === "dashboard" ? "bg-gradient-to-r from-purple-600 to-violet-500 text-white" : "text-gray-400 hover:bg-[#22222b] hover:text-white"}`}
            >
              Dashboard
            </div>

            <div 
              onClick={() => setActiveTab("projects")}
              className={`px-4 py-3 rounded-xl font-medium cursor-pointer transition-all duration-200 ${activeTab === "projects" ? "bg-gradient-to-r from-purple-600 to-violet-500 text-white" : "text-gray-400 hover:bg-[#22222b] hover:text-white"}`}
            >
              Projects
            </div>

            <div 
              onClick={() => setActiveTab("exports")}
              className={`px-4 py-3 rounded-xl font-medium cursor-pointer transition-all duration-200 ${activeTab === "exports" ? "bg-gradient-to-r from-purple-600 to-violet-500 text-white" : "text-gray-400 hover:bg-[#22222b] hover:text-white"}`}
            >
              Exports
            </div>

            <div 
              onClick={() => setActiveTab("settings")}
              className={`px-4 py-3 rounded-xl font-medium cursor-pointer transition-all duration-200 ${activeTab === "settings" ? "bg-gradient-to-r from-purple-600 to-violet-500 text-white" : "text-gray-400 hover:bg-[#22222b] hover:text-white"}`}
            >
              Settings
            </div>
          </nav>
        </div>
      </div>

      {/* ─── MAIN ROUTER OUTPUT ─── */}
      <div className="flex-1 p-8 overflow-y-auto">
        
        {/* Dynamic Headers mapping Tab Contexts */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-4xl font-black tracking-tight">
              {activeTab === "dashboard" && "AI Brand Analyzer"}
              {activeTab === "projects" && "Saved Workspace History"}
              {activeTab === "exports" && "Export Control Panel"}
              {activeTab === "settings" && "Application Settings"}
            </h2>
            <p className="text-gray-400 mt-2">
              {activeTab === "dashboard" && "Transform client briefs into strategic brand blueprints."}
              {activeTab === "projects" && "Manage and reload your saved brand identity generations."}
              {activeTab === "exports" && "Configure layout styling and download active identity metrics."}
              {activeTab === "settings" && "Configure core authentication keys and AI processing rules."}
            </p>
          </div>

          <div className="bg-green-500/10 text-green-400 px-4 py-1.5 rounded-full border border-green-500/20 text-sm font-medium">
            ● AI Online
          </div>
        </div>

        {/* Global Statistics Grid Row */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <StatCard title="124" subtitle="Analyses" />
          <StatCard title={history.length.toString()} subtitle="Projects Saved" />
          <StatCard title="98%" subtitle="Accuracy" />
        </div>

        {/* ─── TAB CONDITIONAL SWITCH RENDERING BLOCK ─── */}
        
        {/* TAB 1: CORE DASHBOARD PANEL */}
        {activeTab === "dashboard" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fade-in">
            {/* Input Panel */}
            <div className="bg-[#18181F] p-6 rounded-2xl border border-gray-800">
              <h3 className="text-xl font-semibold mb-4">Client Brief</h3>
              <input
                type="text"
                placeholder="Project Name"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                className="w-full bg-[#0F0F14] border border-gray-700 p-3 rounded-lg mb-4 outline-none text-white focus:border-purple-500 transition-colors"
              />
              <textarea
                placeholder="Paste client brief here..."
                value={brief}
                onChange={(e) => setBrief(e.target.value)}
                className="w-full bg-[#0F0F14] border border-gray-700 p-3 rounded-lg h-64 outline-none text-white focus:border-purple-500 transition-colors resize-none"
              />
              <button
                onClick={generateDNA}
                className="w-full mt-4 py-3 rounded-lg font-semibold bg-gradient-to-r from-purple-600 to-violet-500 hover:opacity-90 active:scale-[0.99] transition-all"
              >
                {loading ? "Analyzing..." : "Generate Brand Blueprint"}
              </button>
              <button
                onClick={exportPDF}
                className="w-full mt-3 py-3 rounded-lg border border-purple-500/50 hover:bg-purple-500/10 transition-colors"
              >
                Export PDF
              </button>
              <button
                onClick={copyResults}
                className="w-full mt-3 py-3 rounded-lg border border-gray-700 hover:bg-gray-800/40 transition-colors"
              >
                Copy Results
              </button>
            </div>

            {/* Micro Recent Projects Sidebar Log Panel */}
            <div className="bg-[#18181F] p-6 rounded-2xl border border-gray-800">
              <h3 className="text-xl font-semibold mb-4">Recent Syncs</h3>
              {history.length === 0 ? (
                <p className="text-gray-500 text-sm">No projects yet.</p>
              ) : (
                <div className="space-y-3 max-h-[420px] overflow-y-auto pr-1">
                  {history.slice(0, 4).map((project) => (
                    <div key={project.id} className="bg-[#0F0F14] border border-gray-800 p-3 rounded-xl flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-purple-400 text-sm truncate max-w-[110px]">{project.name}</h4>
                        <span className="text-[10px] text-gray-500 font-mono">ID: {project.id.toString().slice(-4)}</span>
                      </div>
                      <div className="flex gap-1.5">
                        <button onClick={() => loadProject(project)} className="px-2.5 py-1 bg-purple-600/20 text-purple-400 border border-purple-500/20 rounded-md text-xs font-medium hover:bg-purple-600 hover:text-white transition-all">Open</button>
                        <button onClick={() => deleteProject(project.id)} className="px-2.5 py-1 bg-red-600/20 text-red-400 border border-red-500/20 rounded-md text-xs font-medium hover:bg-red-600 hover:text-white transition-all">Del</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Identity Result Output Cards column */}
            <div className="grid grid-cols-1 gap-4">
              <ResultCard title="Brand Personality" value={results?.personality || "Waiting for analysis..."} />
              <ResultCard title="Target Audience" value={results?.audience || "Waiting for analysis..."} />
              <ResultCard title="Color Strategy" value={results?.colors || "Waiting for analysis..."} />
              <ResultCard title="Typography" value={results?.typography || "Waiting for analysis..."} />
              <ResultCard title="Moodboard" value={results?.moodboard || "Waiting for analysis..."} />
              <ResultCard title="Brand Voice" value={results?.voice || "Waiting for analysis..."} />
            </div>
          </div>
        )}

        {/* TAB 2: PROJECTS VIEW PANEL */}
        {activeTab === "projects" && (
          <div className="bg-[#18181F] p-6 rounded-2xl border border-gray-800 min-h-[400px]">
            {history.length === 0 ? (
              <div className="text-center py-20 text-gray-500">
                <span className="text-4xl block mb-2">📁</span>
                No saved branding workflows detected in local device storage.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {history.map((project) => (
                  <div key={project.id} className="bg-[#0F0F14] border border-gray-800 p-5 rounded-xl flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-purple-400 mb-2 truncate">{project.name}</h3>
                      <p className="text-xs text-gray-400 line-clamp-3 mb-4 font-light">{project.brief}</p>
                    </div>
                    <div className="flex gap-2 border-t border-gray-900 pt-3 mt-2">
                      <button onClick={() => loadProject(project)} className="flex-1 py-2 bg-purple-600 text-white rounded-lg text-xs font-semibold hover:bg-purple-700 transition-colors">Load to Canvas</button>
                      <button onClick={() => deleteProject(project.id)} className="px-3 py-2 bg-red-600/20 text-red-400 border border-red-500/20 rounded-lg text-xs font-medium hover:bg-red-600 hover:text-white transition-all">Remove</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 3: EXPORTS VIEW PANEL */}
        {activeTab === "exports" && (
          <div className="bg-[#18181F] p-8 rounded-2xl border border-gray-800 text-center py-16">
            <span className="text-4xl block mb-4">🖨️</span>
            <h3 className="text-xl font-bold mb-2">Export Configuration Node</h3>
            <p className="text-gray-400 max-w-md mx-auto text-sm mb-6 font-light">Custom print layers and presentation moodboard PDF configurations are managed via dashboard runtime triggers.</p>
            <button onClick={exportPDF} className="px-6 py-2.5 bg-[#0F0F14] border border-purple-500 text-purple-400 rounded-lg text-sm font-semibold hover:bg-purple-500 hover:text-white transition-all">Execute PDF Stream</button>
          </div>
        )}

        {/* TAB 4: SETTINGS VIEW PANEL */}
        {activeTab === "settings" && (
          <div className="bg-[#18181F] p-6 rounded-2xl border border-gray-800 max-w-2xl">
            <h3 className="text-xl font-bold mb-6 border-b border-gray-800 pb-3">Environment Parameters</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-gray-500 mb-2">AI Execution Model</label>
                <select className="w-full bg-[#0F0F14] border border-gray-700 p-3 rounded-lg text-sm text-gray-300 outline-none">
                  <option>Heliqo Deterministic Matrix (Local Mock)</option>
                  <option disabled>OpenAI GPT-4o Engine (Awaiting Key Setup)</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-gray-500 mb-2">Workspace Storage Engine</label>
                <div className="bg-[#0F0F14] p-3 rounded-lg border border-gray-800 text-sm text-gray-400 font-mono flex justify-between items-center">
                  <span>Browser LocalStorage System</span>
                  <span className="text-[10px] bg-green-500/20 text-green-400 border border-green-500/20 px-2 py-0.5 rounded-md uppercase font-bold">Active</span>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

function StatCard({ title, subtitle }) {
  return (
    <div className="bg-[#18181F] p-5 rounded-2xl border border-gray-800">
      <h3 className="text-3xl font-black tracking-tight">{title}</h3>
      <p className="text-gray-400 text-sm mt-1">{subtitle}</p>
    </div>
  );
}

function ResultCard({ title, value }) {
  return (
    <div className="bg-[#18181F] p-5 rounded-2xl border border-gray-800 hover:border-purple-500/20 transition-all">
      <h3 className="font-bold text-purple-400 text-sm uppercase tracking-wider mb-2">{title}</h3>
      <p className="text-gray-300 text-sm leading-relaxed">{value}</p>
    </div>
  );
}