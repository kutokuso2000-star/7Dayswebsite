import React, { useEffect, useState } from "react";
import "./index.css";

// ✅ CLEAN + MODERN + APOCALYPSE UI
// ✅ No syntax errors
// ✅ Ready to paste into Vite project
// ✅ Professional 7 Days To Die server landing page

const SERVER_IP = "gamehost59.host-unlimited.de:20295";
const DISCORD_LINK = "https://discord.gg/yourserver"; // Change your Discord link
const MAP_IMAGE = "https://images.unsplash.com/photo-1578319439586-d6bd1f2c67d3?q=80&w=1600&auto=format&fit=crop";

export default function App() {
  const [status, setStatus] = useState({ online: true, players: 5, maxPlayers: 20, ping: 80 });
  const [loading, setLoading] = useState(false);

  return (
    <div
      className="min-h-screen text-gray-100 bg-black"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0,0,0,.88), rgba(30,0,0,.88)), url(https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1920)` ,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* HEADER */}
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-800 to-red-600 flex items-center justify-center font-black text-lg">
            7D
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-wide">7 Days To Die — Survival Server</h1>
            <p className="text-xs text-red-300/80">Hardcore • Survival • Events • Mods</p>
          </div>
        </div>
        <a href={DISCORD_LINK} target="_blank" className="px-4 py-2 bg-red-700 rounded-lg font-semibold hover:bg-red-600">
          Discord
        </a>
      </header>

      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-6">
        <div className="bg-black/60 border border-red-900/40 backdrop-blur p-6 rounded-2xl">
          <h2 className="text-4xl font-extrabold text-red-400">Willkommen in der letzten Zuflucht</h2>
          <p className="text-gray-300 mt-3 leading-relaxed">
            Bist du müde von klassischem <em>Vanilla-7 Days to Die</em>? Keine echten Herausforderungen mehr,
            keine Spannung, keine Gefahr? Dann bist du hier genau richtig. Härtere Bedingungen, taktisches
            Gameplay und echte Survival-Atmosphäre erwarten dich. Willkommen in der letzten Zuflucht.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4 mt-6">
            <a
              href={`steam://connect/${SERVER_IP}`}
              className="px-6 py-3 bg-red-700 hover:bg-red-600 rounded-xl font-bold"
            >
              ⚔ Join Server
            </a>
            <a
              href={DISCORD_LINK}
              target="_blank"
              className="px-6 py-3 bg-gray-800 border border-red-800 hover:bg-red-900/40 rounded-xl font-bold"
            >
              💬 Discord beitreten
            </a>
          </div>
        </div>
      </section>

      {/* STATUS SECTION */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-6 pb-10">
        <div className="bg-black/60 border border-gray-800 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-red-300">Server Status</h3>
          {loading ? (
            <p className="text-gray-300 mt-2">Lade...</p>
          ) : (
            <ul className="mt-3 text-gray-200 space-y-1 text-sm">
              <li>Status: {status.online ? "🟢 Online" : "🔴 Offline"}</li>
              <li>Spieler: {status.players}/{status.maxPlayers}</li>
              <li>Ping: {status.ping} ms</li>
              <li>Version: A21+</li>
            </ul>
          )}
        </div>

        <div className="bg-black/60 border border-gray-800 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-red-300">Map</h3>
          <img src={MAP_IMAGE} alt="Map" className="rounded-xl mt-3 h-48 w-full object-cover" />
        </div>
      </section>
    </div>
  );
}
