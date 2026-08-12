import { ArrowRight } from "lucide-react";
import type { Service } from "@/data/services";

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <article className="group relative flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm shadow-ink-950/5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md">
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted text-accent transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>
      <h3 className="mt-5 text-lg font-semibold tracking-tight text-foreground">
        {service.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {service.description}
      </p>
      <a
        href="#contact"
        aria-label={`${service.title} — book a consultation`}
        className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-medium text-accent transition-colors hover:text-accent/80"
      >
        Learn more
        <ArrowRight
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </a>
    </article>
  );
}
