import { useEffect, useState } from "react";

const SERVER_ID = "35841046"; // ✅ Deine BattleMetrics ID

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
        const res = await fetch(`https://api.battlemetrics.com/servers/${SERVER_ID}`);
        const json = await res.json();

        const server = json.data;

        if (!server) {
          setData({ online: false, players: 0, maxPlayers: 0, ping: 0 });
          return;
        }

        setData({
          online: server.attributes.status === "online",
          players: server.attributes.players,
          maxPlayers: server.attributes.maxPlayers,
          ping: server.attributes.details?.rust_queued_players ?? 0, // 7DTD hat kein normales Ping-Field
        });

      } catch (e) {
        setData({ online: false, players: 0, maxPlayers: 0, ping: 0 });
      }
    };

    fetchStatus();
    const timer = setInterval(fetchStatus, interval);
    return () => clearInterval(timer);
  }, []);

  return data;
}
