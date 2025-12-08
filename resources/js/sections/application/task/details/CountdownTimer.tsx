import { useEffect, useRef, useState } from 'react';

// project-imports
import MainCard from '@/components/MainCard';

type Props = {
  /** Number of days to count down from (defaults to 10) */
  days?: number;
};

// ===========================|| DETAILS - COUNTDOWN TIMER ||=========================== //

export default function CountdownTimer({ days = 10 }: Props) {
  // Compute a fixed target timestamp
  const targetRef = useRef<number>(Date.now() + days * 24 * 60 * 60 * 1000);

  const [timeLeft, setTimeLeft] = useState<number>(() => Math.max(targetRef.current - Date.now(), 0));

  // Single effect: whenever `days` changes (or on mount) set a new target and
  // start an interval that updates the remaining time every second. The
  // interval is cleared and recreated when `days` changes.
  useEffect(() => {
    targetRef.current = Date.now() + days * 24 * 60 * 60 * 1000;

    const tick = () => setTimeLeft(Math.max(targetRef.current - Date.now(), 0));
    tick(); // update immediately so UI doesn't wait 1s

    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [days]);

  // Time calculations
  const dayCount = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hourCount = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minuteCount = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const secondCount = Math.floor((timeLeft % (1000 * 60)) / 1000);

  const pad = (n: number) => n.toString().padStart(2, '0');

  return (
    <MainCard bodyClassName="bg-light-danger">
      <div className="counter text-center">
        <h4 id="timer" className="text-danger m-0" aria-live="polite">
          <b>{dayCount}</b> days : <b>{pad(hourCount)}</b>h : <b>{pad(minuteCount)}</b>m : <b>{pad(secondCount)}</b>s
        </h4>
      </div>
    </MainCard>
  );
}
