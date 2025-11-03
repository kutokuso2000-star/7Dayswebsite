import React, { useEffect, useState } from "react";
import "./index.css";

const SERVER_IP = "gamehost59.host-unlimited.de:20295";
const DISCORD_LINK = "https://discord.gg/yourserver";
const DONATE_LINK = "https://patreon.com/yourserver";
const MAP_IMAGE = "https://via.placeholder.com/1200x600?text=Server+Map";

export default function SevenDTDServer() {
  const [status, setStatus] = useState({ online: true, players: 4, maxPlayers: 20, ping: 85 });
  const [loading, setLoading] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-[#3b0000] text-gray-100">

      {/* Blood Moon Banner */}
      <div className="animate-pulse text-red-400 text-center py-2 text-sm tracking-widest">
        ⚠ BLOOD MOON APPROACHES ⚠
      </div>

      {/* Header */}
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-red-500">7 DAYS TO DIE SERVER</h1>
        <nav className="flex gap-4 text-sm">
          <a href="#status" className="hover:text-red-400">Server</a>
          <a href="#rules" className="hover:text-red-400">Regeln</a>
          <a href={DISCORD_LINK} target="_blank" className="bg-red-700 px-4 py-2 rounded-md font-bold hover:bg-red-600">
            Discord
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto p-6 bg-black/60 border border-red-900 rounded-xl">
        <h2 className="text-2xl font-bold">Willkommen auf unserem Server</h2>
        <p className="text-gray-300 mt-2">
          Du hast keine Lust mehr auf langweiliges Vanilla-Survival?  
          Du suchst eine echte Herausforderung?  
          Dann bist du hier genau richtig.
        </p>

        {/* Server Info */}
        <div className="mt-4 grid md:grid-cols-3 gap-4">

          <div className="p-3 bg-gray-800 rounded-lg">
            <p className="text-xs text-gray-400">Server IP</p>
            <p className="font-mono font-bold">{SERVER_IP}</p>
          </div>

          <div className="p-3 bg-gray-800 rounded-lg">
            <p className="text-xs text-gray-400">Status</p>
            {loading ? "Lädt..." : (
              <p className="font-bold">
                {status.online ? "🟢 Online" : "🔴 Offline"} — {status.players}/{status.maxPlayers}
              </p>
            )}
          </div>

          <a href={`steam://connect/${SERVER_IP}`} className="bg-red-700 text-center p-3 rounded-lg font-bold hover:bg-red-600">
            ⚔ Join Server
          </a>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mt-4">
          <a href={DISCORD_LINK} target="_blank" className="px-4 py-2 bg-gray-700 rounded-xl font-bold hover:bg-gray-600">
            💬 Discord beitreten
          </a>
          <a href={DONATE_LINK} target="_blank" className="px-4 py-2 bg-red-700 rounded-xl font-bold hover:bg-red-600">
            ❤️ Spenden
          </a>
        </div>

        {/* Mods Guide */}
        <div className="mt-6 text-sm bg-gray-900 border border-red-800 p-4 rounded-lg">
          <p className="font-bold text-red-300 text-lg mb-1">Mods installieren (Guide)</p>
          <ol className="list-decimal list-inside mt-1 space-y-1">
            <li>Mod-ZIP herunterladen</li>
            <li>Entpacken</li>
            <li>Dateien in den <code>Mods</code>-Ordner kopieren:<br/>
              <span className="text-xs opacity-80">
                Steam → Rechtsklick → 7 Days To Die → Verwalten → Lokale Dateien → Ordner öffnen
              </span>
            </li>
            <li>Falls kein <code>Mods</code>-Ordner existiert → erstellen</li>
            <li>Spiel starten → <strong>EAC deaktiviert</strong> (Anti-Cheat aus)</li>
          </ol>

          <div className="mt-3 p-2 bg-red-900/40 border border-red-800 rounded text-xs">
            Hinweis: Mods laufen nur ohne EAC<br/>
            Steam → „Spiel ohne Anti-Cheat starten“
          </div>

          <div className="mt-3">
            <a href="https://drive.google.com/file/d/1gZnen2uzZ4Z31ZLgiCoCeDU_3M1-lK3m/view" target="_blank" className="inline-block px-4 py-2 bg-yellow-600 hover:bg-yellow-500 rounded-lg font-bold">
              📦 Mods Download (ZIP)
            </a>
          </div>
        </div>
      </section>

      {/* STATUS */}
      <section id="status" className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-6 pb-10 mt-6">

        <div className="bg-black/60 border border-gray-800 p-6 rounded-xl">
          <h3 className="text-xl font-bold text-red-300">Server Status</h3>
          <p className="mt-2 text-gray-200">
            Spieler: {status.players}/{status.maxPlayers}<br/>
            Ping: {status.ping} ms
          </p>
        </div>

        <div className="bg-black/60 border border-gray-800 p-6 rounded-xl">
          <h3 className="text-xl font-bold text-red-300">Map</h3>
          <img src={MAP_IMAGE} className="rounded-xl mt-3 h-48 w-full object-cover" />
        </div>

      </section>
    </div>
  );
}
