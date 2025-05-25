// Inside your Template.jsx file - under SPECIAL AREA FOR CONTENT
import React, { useState } from "react";


const AdminReportTabs = () => {
  const [activeTab, setActiveTab] = useState("all");

  const allReports = [
    {
      type: "post",
      from: "jackman0691",
      to: "AnimeCoon",
      reason: "SPAM",
      content: '"The First Look at the Story of Never Been There"',
      date: "May 10, 2025",
    },
    {
      type: "account",
      from: "potatoa1m",
      to: "Tungtungsaur",
      reason: "",
      content: "",
      date: "May 11, 2025",
    },
    {
      type: "post",
      from: "tungtungsaur",
      to: "Ashong Anime",
      reason: "SPAM",
      content: "PRINCE LOFI MAS MALAKAS PA KAY KAIDO?! | One Piece Tagalog Analysis",
      date: "May 15, 2025",
    },
    {
      type: "post",
      from: "peperoni7",
      to: "AnimeCoon",
      reason: "SPAM",
      content: '"The First Look at the Story of Never Been There"',
      date: "May 23, 2025",
    },
    {
      type: "account",
      from: "bayabas0231",
      to: "Rex Trex",
      reason: "",
      content: "",
      date: "May 23, 2025",
    },
    {
      type: "post",
      from: "coldman01",
      to: "AnimeCoon",
      reason: "SPAM",
      content: '"The First Look at the Story of Never Been There"',
      date: "May 26, 2025",
    },
    {
      type: "post",
      from: "jackman0691",
      to: "Rex Trex",
      reason: "SPAM",
      content: "",
      date: "May 28, 2025",
    },
  ];

  const filtered = allReports.filter((r) =>
    activeTab === "all" ? true : r.type === activeTab
  );

  return (
    <div className="w-full">
      {/* Filter Tabs */}
      <div className="flex gap-2 mb-4">
        {[
          { label: "ALL", value: "all" },
          { label: "POST REPORT", value: "post" },
          { label: "ACCOUNT REPORT", value: "account" },
        ].map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={`px-4 py-2 rounded font-semibold border border-white text-sm
              ${activeTab === tab.value ? "bg-white text-black" : "text-white hover:bg-white hover:text-black"}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Report List */}
      <div className="bg-gray-200 p-4 rounded-lg space-y-3">
        {filtered.map((report, index) => (
          <div key={index} className="bg-black text-white flex justify-between items-center px-4 py-2 rounded">
            <div className="text-xs">
              {report.type.toUpperCase()} REPORT - FROM <strong>{report.from}</strong> TO <strong>{report.to}</strong>
              {report.reason && ` - ${report.reason}`}
              {report.content && ` - ${report.content}`}
            </div>
            <div className="text-xs bg-gray-800 px-2 py-1 rounded">
              {report.date}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminReportTabs;
