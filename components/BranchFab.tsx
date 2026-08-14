"use client";

import { useEffect, useRef, useState } from "react";
import { Check, MapPin } from "lucide-react";
import { useBranch } from "./BranchProvider";

export default function BranchFab() {
  const { branch, branches, select } = useBranch();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div
      ref={rootRef}
      className="fixed bottom-24 right-4 z-50 lg:bottom-6 lg:right-6"
    >
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={`Select branch. Current branch: ${branch.shortName}`}
        className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-3.5 text-primary-foreground shadow-lg shadow-brand-900/20 transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      >
        <MapPin className="h-5 w-5 shrink-0" aria-hidden="true" />
        <span className="hidden text-sm font-semibold sm:inline">
          {branch.shortName}
        </span>
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label="Branches"
          className="absolute bottom-0 right-full z-50 mr-3 w-72 max-w-[calc(100vw-5rem)] overflow-hidden rounded-2xl border border-border bg-card p-1.5 shadow-xl shadow-ink-950/10"
        >
          {branches.map((item) => {
            const isActive = item.slug === branch.slug;
            return (
              <li key={item.slug} role="option" aria-selected={isActive}>
                <button
                  type="button"
                  onClick={() => {
                    select(item.slug);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center justify-between gap-3 rounded-xl px-3.5 py-2.5 text-left transition-colors ${
                    isActive
                      ? "bg-muted text-foreground"
                      : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                  }`}
                >
                  <span className="flex min-w-0 flex-col">
                    <span className="text-sm font-semibold">
                      {item.shortName}
                    </span>
                    <span className="truncate text-xs text-muted-foreground">
                      {item.address}
                    </span>
                  </span>
                  {isActive && (
                    <Check
                      className="h-4 w-4 shrink-0 text-accent"
                      aria-hidden="true"
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
