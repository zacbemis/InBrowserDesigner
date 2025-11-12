"use client";

import React from "react";

const DROP_COUNT = 50;

interface RainDrop {
  readonly id: number;
  readonly left: number;
  readonly delay: number;
  readonly duration: number;
  readonly scale: number;
}

const createPseudoRandomGenerator = (seed: number) => {
  let state = seed;
  return () => {
    state = (state * 9301 + 49297) % 233280;
    return state / 233280;
  };
};

const drops: ReadonlyArray<RainDrop> = (() => {
  const random = createPseudoRandomGenerator(2025);
  return Array.from({ length: DROP_COUNT }).map((_, index) => {
    return {
      id: index,
      left: random() * 100,
      delay: random() * -2,
      duration: 0.8 + random() * 0.9,
      scale: 0.8 + random() * 0.6,
    } satisfies RainDrop;
  });
})();

export default function RainOverlay(): React.ReactElement {
  return (
    <div className="pointer-events-none fixed inset-0 z-[5] overflow-hidden">
      {drops.map((drop) => (
        <span
          key={drop.id}
          className="rain-drop absolute top-[-120px] w-px origin-top rounded-full bg-white/60"
          style={{
            left: `${drop.left}%`,
            animationDelay: `${drop.delay}s`,
            animationDuration: `${drop.duration}s`,
            transform: "translate3d(0, 0, 0)",
            willChange: "transform, opacity",
            height: `${drop.scale * 96}px`,
            opacity: 0.35 + drop.scale * 0.25,
          }}
        />
      ))}
      <style jsx>{`
        .rain-drop {
          animation-name: rain-fall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          filter: blur(0.4px);
          mix-blend-mode: screen;
        }

        @keyframes rain-fall {
          0% {
            transform: translate3d(0, -200px, 0);
            opacity: 0;
          }
          15% {
            opacity: 0.85;
          }
          100% {
            transform: translate3d(0, 120vh, 0);
            opacity: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .rain-drop {
            animation-duration: 4s !important;
            opacity: 0.3;
          }
        }
      `}</style>
    </div>
  );
}
