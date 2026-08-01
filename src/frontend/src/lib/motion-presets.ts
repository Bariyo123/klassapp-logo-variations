export const revealOnce = { once: true } as const;

export function fadeIn(
  axis: "x" | "y",
  offset: number,
  duration = 0.45,
  delay = 0,
) {
  return {
    initial: { opacity: 0, [axis]: offset },
    whileInView: { opacity: 1, [axis]: 0 },
    viewport: revealOnce,
    transition: { duration, delay },
  };
}

export function fadeInUp(delay = 0, duration = 0.45) {
  return fadeIn("y", 20, duration, delay);
}

export function fadeInScale(delay = 0, duration = 0.4) {
  return {
    initial: { opacity: 0, scale: 0.93 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: revealOnce,
    transition: { duration, delay },
  };
}
