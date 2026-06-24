import { useState, useEffect } from "react";
import jsPDF from "jspdf";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [history, setHistory] = useState([]);
  // ... (apna baaki logic wahi purana rakhein)

  return (
    <div className="min-h-screen bg-[#0F0F14] text-white flex flex-col md:flex-row">
      
      {/* Sidebar - Mobile par top bar ban jayega */}
      <div className="w-full md:w-64 bg-[#18181F] border-b md:border-r border-gray-800 p-4 flex flex-row md:flex-col justify-between overflow-x-auto">
        <h1 className="text-xl md:text-3xl font-black uppercase bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Heliqo</h1>
        <nav className="flex md:flex-col gap-2">
          {["dashboard", "projects", "exports", "settings"].map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)} className="px-3 py-2 text-sm text-gray-400 hover:text-white capitalize">
              {tab}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-8 overflow-y-auto">
        {/* Responsive Grid: Mobile 1 column, Desktop 3 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-[#18181F] p-4 rounded-xl border border-gray-800">
            <h3 className="text-2xl font-bold">124</h3>
            <p className="text-gray-400 text-xs">Analyses</p>
          </div>
          <div className="bg-[#18181F] p-4 rounded-xl border border-gray-800">
            <h3 className="text-2xl font-bold">{history.length}</h3>
            <p className="text-gray-400 text-xs">Projects</p>
          </div>
          <div className="bg-[#18181F] p-4 rounded-xl border border-gray-800">
            <h3 className="text-2xl font-bold">98%</h3>
            <p className="text-gray-400 text-xs">Accuracy</p>
          </div>
        </div>

        {/* Dashboard Content */}
        {activeTab === "dashboard" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-[#18181F] p-4 rounded-2xl border border-gray-800">
              {/* Input section... */}
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Results... */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}