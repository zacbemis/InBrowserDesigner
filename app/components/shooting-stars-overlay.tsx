"use client";

import { useEffect, useState } from "react";
import type { CSSProperties, ReactElement } from "react";

interface ShootingStar {
  readonly id: number;
  readonly top: number;
  readonly left: number;
  readonly travelX: string;
  readonly travelY: string;
  readonly delay: number;
  readonly duration: number;
  readonly length: number;
  readonly angle: number;
  readonly thickness: number;
  readonly direction: "ltr" | "rtl";
}

type ShootingStarStyle = CSSProperties & {
  [customProperty: string]: string | number | undefined;
};

const randomBetween = (min: number, max: number): number => min + Math.random() * (max - min);

const createShootingStar = (id: number): ShootingStar => {
  const direction: "ltr" | "rtl" = Math.random() > 0.5 ? "ltr" : "rtl";
  const top = randomBetween(0, 50);
  const leftRange = direction === "ltr" ? [0, 60] : [40, 100];
  const travelMagnitude = randomBetween(120, 170);
  const travelX = `${direction === "ltr" ? travelMagnitude : -travelMagnitude}vw`;
  const travelY = `${randomBetween(-1.2, 1.2)}vh`;
  const angleBase = randomBetween(0.4, 1.2);

  return {
    id,
    top,
    left: randomBetween(leftRange[0], leftRange[1]),
    travelX,
    travelY,
    delay: 0,
    duration: randomBetween(4.6, 5.2),
    length: randomBetween(150, 220),
    angle: direction === "ltr" ? -angleBase : angleBase,
    thickness: randomBetween(1, 1.8),
    direction,
  } satisfies ShootingStar;
};

export default function ShootingStarsOverlay(): ReactElement {
  const [star, setStar] = useState<ShootingStar | null>(null);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const spawnStar = (id: number): void => {
      setStar(createShootingStar(id));
      const nextDelay = randomBetween(6, 12) * 1000;
      timeoutId = setTimeout(() => spawnStar(id + 1), nextDelay);
    };

    spawnStar(0);

    return () => {
      if (timeoutId !== undefined) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  const style: ShootingStarStyle | undefined = star
    ? {
        top: `${star.top}%`,
        left: `${star.left}%`,
        animationDelay: `${star.delay}s`,
        animationDuration: `${star.duration}s`,
        animationIterationCount: 1,
        width: `${star.length}px`,
        height: `${star.thickness}px`,
        transformOrigin: star.direction === "ltr" ? "center right" : "center left",
        backgroundImage:
          star.direction === "ltr"
            ? "linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.95))"
            : "linear-gradient(270deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.95))",
        "--travel-x": star.travelX,
        "--travel-y": star.travelY,
        "--star-angle": `${star.angle}deg`,
      }
    : undefined;

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[6] h-[50vh] overflow-hidden">
      {star && style && <span key={star.id} className="shooting-star block" style={style} />}
    </div>
  );
}
