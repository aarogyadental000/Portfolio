"use client";

import { ArrowLeft, Home } from "lucide-react";
import { ButtonLink } from "@/components/Buttons";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center bg-background px-4 text-center">
      <p className="text-7xl font-bold tracking-tight text-primary">404</p>
      <h1 className="mt-4 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-base leading-relaxed text-muted-foreground">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
        <ButtonLink href="/#home" size="lg">
          <Home className="h-4 w-4" aria-hidden="true" />
          Go Home
        </ButtonLink>
        <ButtonLink href="/#contact" size="lg" variant="outline">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Contact Us
        </ButtonLink>
      </div>
    </section>
  );
}
