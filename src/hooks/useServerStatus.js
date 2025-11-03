import { useEffect, useState } from "react";

const SERVER_ID = "35841046"; // ✅ Dein echter BattleMetrics Server

export default function useServerStatus(interval = 8000) {
  const [data, setData] = useState({
    online: false,
    players: 0,
    maxPlayers: 0,
    ping: 0,
  });

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const url = `https://api.allorigins.win/raw?url=${encodeURIComponent(
          `https://api.battlemetrics.com/servers/${SERVER_ID}`
        )}`;

        const res = await fetch(url);
        const json = await res.json();

        const server = json.data;

        setData({
          online: server.attributes.status === "online",
          players: server.attributes.players || 0,
          maxPlayers: server.attributes.maxPlayers || 0,
          ping: server.attributes.details?.uptime || 0
        });

      } catch {
        setData({ online: false, players: 0, maxPlayers: 0, ping: 0 });
      }
    };

    fetchStatus();
    const timer = setInterval(fetchStatus, interval);
    return () => clearInterval(timer);
  }, []);

  return data;
}
