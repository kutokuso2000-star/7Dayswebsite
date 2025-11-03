import React from "react";
import useServerStatus from "./hooks/useServerStatus";
import useBloodmoon from "./hooks/useBloodmoon";
import "./index.css";

const SERVER_IP = "gamehost59.host-unlimited.de:20295";
const DISCORD_LINK = "https://discord.gg/yourserver";
const MAP_IMAGE = "https://images.unsplash.com/photo-1578319439586-d6bd1f2c67d3?q=80&w=1600&auto=format&fit=crop";

export default function App() {
  const data = useServerStatus(SERVER_IP);
  const hordeCountdown = useBloodmoon();

  return (
    <div
      className="min-h-screen text-gray-100 bg-black"
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
            <h1 className="text-xl font-bold tracking-wide">7 Days To Die — Survival Server</h1>
            <p className="text-xs text-red-300/80">Hardcore • Survival • Mods • Events</p>
          </div>
        </div>
        <a href={DISCORD_LINK} target="_blank" className="px-4 py-2 bg-red-700 rounded-lg font-semibold hover:bg-red-600">
          Discord
        </a>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-6">
        <div className="bg-black/60 border border-red-900/40 backdrop-blur p-6 rounded-2xl">
          <h2 className="text-4xl font-extrabold text-red-400">
            Willkommen auf unserem ultimativen 7 Days to Die Hardcore-Survival Server
          </h2>
          <p className="text-gray-300 mt-3 leading-relaxed">
            Du bist müde von langweiligem Vanilla-Survival? Du suchst echten Nervenkitzel, brutales
            Überleben und permanente Gefahr? Dann bist du hier genau richtig. Jeder Fehler kann dein letzter sein.
          </p>

          <div className="flex flex-wrap gap-4 mt-6">
            <a href={`steam://connect/${SERVER_IP}`} className="px-6 py-3 bg-red-700 hover:bg-red-600 rounded-xl font-bold">
              ⚔ Server beitreten
            </a>

            <a href={DISCORD_LINK} target="_blank" className="px-6 py-3 bg-gray-800 border border-red-800 hover:bg-red-900/40 rounded-xl font-bold">
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
        <div className="mt-6 text-sm text-gray-300">
          <p className="font-semibold text-red-300 text-lg mb-1">Mods installieren (Guide)</p>
          <ol className="list-decimal list-inside mt-1 space-y-1">
            <li>Mod-ZIP herunterladen</li>
            <li>Entpacken</li>
            <li>Dateien in den <code>Mods</code> Ordner kopieren</li>
            <li>Falls keiner existiert → erstellen</li>
            <li>Spiel starten → <b>EAC deaktivieren</b></li>
          </ol>

          <div className="mt-3 p-2 bg-red-900/40 border border-red-800 rounded text-xs">
            Hinweis: Mods funktionieren nur ohne Anti-Cheat (EAC)
          </div>
        </div>
      </section>

      {/* STATUS */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-6 pb-10">
        <div className="bg-black/60 border border-gray-800 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-red-300">Server Status</h3>

          <ul className="mt-3 text-gray-200 space-y-1 text-sm font-mono">
            <li>Status: {data.online ? "🟢 Online" : "🔴 Offline"}</li>
            <li>Spieler: {data.players}/{data.maxPlayers}</li>
            <li>Ping: {data.ping} ms</li>
          </ul>

          <div className="bg-black/60 border border-red-800 p-4 mt-4 rounded-xl text-center">
            <h3 className="text-lg font-bold text-red-400">Bloodmoon Countdown</h3>
            <p className="mt-1 text-sm text-red-200 font-mono">{hordeCountdown}</p>
          </div>
        </div>

        <div className="bg-black/60 border border-gray-800 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-red-300">Map</h3>
          <img src={MAP_IMAGE} alt="Map" className="rounded-xl mt-3 h-48 w-full object-cover" />
        </div>
      </section>
    </div>
  );
}
