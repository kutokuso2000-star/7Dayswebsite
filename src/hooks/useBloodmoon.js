import { useEffect, useState } from "react";

const BLOOD_INTERVAL = 7;
const HORDE_HOUR = 22;

export default function useBloodmoon() {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const day = now.getDate() % BLOOD_INTERVAL;
      const hours = now.getHours();
      const minutes = now.getMinutes();

      const isBlood = day === 0 && hours >= HORDE_HOUR;
      if (isBlood) return setTimeLeft("🩸 Hordenacht aktiv! Überleben oder sterben! 🧟‍♂️");

      const d = BLOOD_INTERVAL - day;
      const h = HORDE_HOUR - hours;
      const m = 60 - minutes;

      setTimeLeft(`${d} Tage ${h} Std ${m} Min`);
    };

    tick();
    const timer = setInterval(tick, 10000);
    return () => clearInterval(timer);
  }, []);

  return timeLeft;
}
