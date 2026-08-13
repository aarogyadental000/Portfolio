import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/data/services";

export default function ServicePhotoCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <a
      href={`/services/${service.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md md:flex-row"
    >
      <div className="relative h-56 shrink-0 overflow-hidden md:h-auto md:w-56 lg:w-64">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="(min-width: 768px) 256px, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-7">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-muted text-accent">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </span>
          <h2 className="text-lg font-semibold tracking-tight text-foreground">
            {service.title}
          </h2>
        </div>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {service.description}
        </p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
          Learn more
          <ArrowRight
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </span>
      </div>
    </a>
  );
}
