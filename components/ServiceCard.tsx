import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";

export default function ServiceCard({ title }: { title: string }) {
  const service = services.find((item) => item.title === title);
  if (!service) return null;
  const Icon = service.icon;
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm shadow-ink-950/5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md">
      <div className="relative h-44 overflow-hidden">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-ink-950/40 via-transparent to-transparent"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-ink-950/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />

        <a
          href={`/services/${service.slug}`}
          className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        >
          <span className="inline-flex translate-y-2 items-center gap-2 rounded-full bg-background/95 px-5 py-2.5 text-sm font-medium text-foreground shadow-lg backdrop-blur transition-transform duration-300 group-hover:translate-y-0">
            Learn More
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </span>
        </a>
      </div>

      <div className="flex flex-1 flex-col p-7">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-muted text-accent">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </span>
          <h3 className="text-lg font-semibold tracking-tight text-foreground">
            {service.title}
          </h3>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {service.description}
        </p>
      </div>
    </article>
  );
}
