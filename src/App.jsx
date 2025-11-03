import React, { useEffect, useState } from "react";

const SERVER_ID = "35841046"; // BattleMetrics Server ID
const SERVER_IP = "gamehost59.host-unlimited.de:20295";
const DISCORD_LINK = "https://discord.gg/yourserver"; 
const MAP_IMAGE =
  "https://images.unsplash.com/photo-1578319439586-d6bd1f2c67d3?q=80&w=1600&auto=format&fit=crop";

export default function App() {
  const [status, setStatus] = useState({
    online: true,
    players: 0,
    maxPlayers: 0,
  });

  async function fetchStatus() {
    try {
      const res = await fetch(
        `https://api.battlemetrics.com/servers/${SERVER_ID}`
      );
      const data = await res.json();
      const attr = data.data.attributes;

      setStatus({
        online: attr.status === "online",
        players: attr.players,
        maxPlayers: attr.maxPlayers,
      });
    } catch (err) {
      console.error("Status error", err);
    }
  }

  useEffect(() => {
    fetchStatus();
    const interval = setInterval(fetchStatus, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="min-h-screen text-gray-100"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0,0,0,.88), rgba(30,0,0,.88)), url(https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1920)`,
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
            <h1 className="text-xl font-bold tracking-wide">
              7 Days To Die — Survival Server
            </h1>
            <p className="text-xs text-red-300/80">
              LIVE VERSION TEST ✅
            </p>
          </div>
        </div>
        <a
          href={DISCORD_LINK}
          target="_blank"
          className="px-4 py-2 bg-red-700 rounded-lg font-semibold hover:bg-red-600"
        >
          Discord
        </a>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-6">
        <div className="bg-black/60 border border-red-900/40 backdrop-blur p-6 rounded-2xl">
          <h2 className="text-4xl font-extrabold text-red-400">
            Willkommen in der letzten Zuflucht
          </h2>
          <p className="text-gray-300 mt-3 leading-relaxed">
            Hast du genug von langweiligem Vanilla-Survival? Suchst du eine
            echte Herausforderung? Dann bist du hier genau richtig — härteres
            Gameplay, taktisches Überleben und eine brutale Zombie-Welt warten
            auf dich.
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
            <a
              href="https://drive.google.com/file/d/1gZnen2uzZ4Z31ZLgiCoCeDU_3M1-lK3m/view?usp=drive_link"
              target="_blank"
              className="px-6 py-3 bg-yellow-600 hover:bg-yellow-500 rounded-xl font-bold"
            >
              📦 Mods Download
            </a>
          </div>
        </div>

        {/* MOD GUIDE */}
        <div className="mt-4 text-sm text-gray-300">
          <p className="font-semibold text-red-300 text-lg mb-1">
            Mods installieren (Guide)
          </p>
          <ol className="list-decimal list-inside mt-1 space-y-1">
            <li>Mod-ZIP herunterladen</li>
            <li>Entpacken</li>
            <li>
              Dateien in den <code>Mods</code>-Ordner kopieren:
              <br />
              <span className="text-xs opacity-80">
                Steam → Rechtsklick auf 7DTD → Verwalten → Lokale Dateien →
                Ordner öffnen
              </span>
            </li>
            <li>
              Falls kein <code>Mods</code>-Ordner existiert → selbst erstellen
            </li>
            <li>
              Spiel starten → <strong>EAC deaktiviert</strong>
            </li>
          </ol>

          <div className="mt-3 p-2 bg-red-900/40 border border-red-800 rounded text-xs">
            Hinweis: Mods laufen nur ohne EAC <br />
            Steam → 7DTD starten → „ohne Anti-Cheat“
          </div>
        </div>
      </section>

      {/* STATUS SECTION */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-6 pb-10">
        <div className="bg-black/60 border border-gray-800 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-red-300">Server Status</h3>

          <ul className="mt-3 text-gray-200 space-y-1 text-sm">
            <li>Status: {status.online ? "🟢 Online" : "🔴 Offline"}</li>
            <li>
              Spieler: {status.players}/{status.maxPlayers}
            </li>
            <li>Version: A21+</li>
          </ul>
        </div>

        <div className="bg-black/60 border border-gray-800 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-red-300">Map</h3>
          <img
            src={MAP_IMAGE}
            alt="Map"
            className="rounded-xl mt-3 h-48 w-full object-cover"
          />
        </div>
      </section>
    </div>
  );
}
