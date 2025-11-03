import { useEffect, useState } from "react";

export default function useServerStatus(ip, interval = 8000) {
  const [data, setData] = useState({
    online: false,
    players: 0,
    maxPlayers: 0,
    ping: 0,
  });

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const url = `https://api.battlemetrics.com/servers?filter[search]=${ip}`;
        const res = await fetch(url);
        const json = await res.json();

        const server = json.data?.[0];
        if (!server) return setData({ online: false, players: 0, maxPlayers: 0, ping: 0 });

        setData({
          online: server.attributes.status === "online",
          players: server.attributes.players,
          maxPlayers: server.attributes.maxPlayers,
          ping: server.attributes.details?.ping || 0,
        });

      } catch {
        setData({ online: false, players: 0, maxPlayers: 0, ping: 0 });
      }
    };

    fetchStatus();
    const timer = setInterval(fetchStatus, interval);
    return () => clearInterval(timer);
  }, [ip]);

  return data;
}
