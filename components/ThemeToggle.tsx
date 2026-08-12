"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const isDark = theme === "dark";
  const label = isDark ? "Switch to light mode" : "Switch to dark mode";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={mounted ? label : "Toggle theme"}
      title={mounted ? label : "Toggle theme"}
      className="relative inline-flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
    >
      {mounted ? (
        <>
          <Sun
            aria-hidden
            className={`size-[18px] transition-all duration-300 ${
              isDark
                ? "scale-0 rotate-90 opacity-0"
                : "scale-100 rotate-0 opacity-100"
            }`}
          />
          <Moon
            aria-hidden
            className={`absolute size-[18px] transition-all duration-300 ${
              isDark
                ? "scale-100 rotate-0 opacity-100"
                : "scale-0 -rotate-90 opacity-0"
            }`}
          />
        </>
      ) : (
        <span aria-hidden className="size-[18px]" />
      )}
    </button>
  );
}
