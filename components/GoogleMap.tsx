"use client";

import { MapPin } from "lucide-react";
import { useBranch } from "./BranchProvider";

export default function GoogleMap({ className = "" }: { className?: string }) {
  const { branch, branches, select } = useBranch();
  const hasEmbed = branch.mapEmbedUrl.startsWith("http");

  return (
    <div
      className={`relative overflow-hidden rounded-3xl border border-border bg-muted shadow-sm ${className}`}
    >
      <div className="absolute left-1/2 top-3 z-10 flex -translate-x-1/2 items-center gap-1 rounded-full bg-background/90 p-1 shadow-lg shadow-ink-950/10 backdrop-blur">
        {branches.map((item) => {
          const isActive = item.slug === branch.slug;
          return (
            <button
              key={item.slug}
              type="button"
              onClick={() => select(item.slug)}
              aria-pressed={isActive}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                isActive
                  ? "bg-accent text-white"
                  : "text-muted-foreground hover:text-accent"
              }`}
            >
              {item.shortName}
            </button>
          );
        })}
      </div>

      {hasEmbed ? (
        <iframe
          src={branch.mapEmbedUrl}
          title={`Map showing the location of ${branch.name}`}
          className="h-full w-full border-0"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <div className="flex h-full min-h-72 flex-col items-center justify-center gap-3 p-8 text-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-card text-accent shadow-sm">
            <MapPin className="h-7 w-7" aria-hidden="true" />
          </span>
          <p className="font-semibold text-foreground">Map coming soon</p>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            The map for the {branch.shortName} branch is being added. In the
            meantime, use the other branch or contact us for directions.
          </p>
        </div>
      )}
    </div>
  );
}
