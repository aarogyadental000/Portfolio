import { MapPin } from "lucide-react";
import { clinicInfo } from "@/lib/clinic";

const hasEmbed = clinicInfo.mapEmbedUrl.startsWith("http");

export default function GoogleMap({ className = "" }: { className?: string }) {
  return (
    <div
      className={`overflow-hidden rounded-3xl border border-border bg-muted shadow-sm ${className}`}
    >
      {hasEmbed ? (
        <iframe
          src={clinicInfo.mapEmbedUrl}
          title={`Map showing the location of ${clinicInfo.name}`}
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
            Add your Google Maps embed URL to{" "}
            <code className="rounded bg-card px-1.5 py-0.5 text-xs text-accent">
              lib/clinic.ts
            </code>{" "}
            to show the clinic location.
          </p>
        </div>
      )}
    </div>
  );
}
