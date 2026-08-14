"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin, Phone, X } from "lucide-react";
import { useBranch } from "./BranchProvider";
import { branchFullAddress, branchPhoneHref, clinicInfo } from "@/lib/clinic";

export default function BranchWelcome() {
  const { branches, select, hasChosen } = useBranch();
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (hasChosen) return;
    const timer = window.setTimeout(() => setOpen(true), 600);
    return () => window.clearTimeout(timer);
  }, [hasChosen]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    else if (!open && dialog.open) dialog.close();
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (hasChosen) return null;

  const close = () => setOpen(false);

  return (
    <dialog
      ref={dialogRef}
      onClose={close}
      onClick={(event) => {
        if (event.target === event.currentTarget) close();
      }}
      aria-labelledby="branch-welcome-title"
      className="m-auto w-[calc(100vw-2rem)] max-w-lg rounded-3xl border border-border bg-card p-6 text-foreground shadow-xl sm:p-8 backdrop:bg-ink-950/60 backdrop:backdrop-blur-sm"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Welcome
          </p>
          <h2
            id="branch-welcome-title"
            className="mt-2 text-2xl font-semibold tracking-tight text-foreground"
          >
            {clinicInfo.name}
          </h2>
        </div>
        <button
          type="button"
          onClick={close}
          aria-label="Close welcome message"
          className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
        {branches[0].welcomeMessage}
      </p>

      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {branches.map((branch) => (
          <button
            key={branch.slug}
            type="button"
            onClick={() => select(branch.slug)}
            className="group flex flex-col rounded-2xl border border-border bg-background p-5 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:shadow-md"
          >
            <span className="flex items-center gap-2 font-semibold text-foreground">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-muted text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                <MapPin className="h-4 w-4" aria-hidden="true" />
              </span>
              {branch.shortName}
            </span>
            <span className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {branchFullAddress(branch)}
            </span>
            <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              {branch.phone}
            </span>
            <span className="mt-3 inline-flex w-fit items-center gap-1 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors group-hover:bg-primary/90">
              Visit this branch
            </span>
          </button>
        ))}
      </div>

      <a
        href={branchPhoneHref(branches[0])}
        className="mt-6 block text-center text-sm text-muted-foreground transition-colors hover:text-accent"
      >
        Not sure? Call us and we will help.
      </a>
    </dialog>
  );
}
