type ShinyTextProps = {
  text: string;
  className?: string;
  color?: string;
  shineColor?: string;
  speed?: number;
  disabled?: boolean;
  pauseOnHover?: boolean;
};

export default function ShinyText({
  text,
  className = "",
  color = "#b5b5b5",
  shineColor = "#ffffff",
  speed = 3,
  disabled = false,
  pauseOnHover = false,
}: ShinyTextProps) {
  return (
    <span
      aria-hidden={disabled}
      className={`inline-block ${disabled ? "" : "animate-shine"} ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""} ${className}`}
      style={{
        backgroundImage: `linear-gradient(110deg, ${color} 40%, ${shineColor} 50%, ${color} 60%)`,
        backgroundSize: "200% auto",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        WebkitTextFillColor: "transparent",
        color: "transparent",
        animationDuration: `${speed}s`,
      }}
    >
      {text}
    </span>
  );
}
