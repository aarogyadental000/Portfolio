"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin, Phone } from "lucide-react";
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
    else if ((!open || hasChosen) && dialog.open) dialog.close();
  }, [open, hasChosen]);

  useEffect(() => {
    document.body.style.overflow = open && !hasChosen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open, hasChosen]);

  if (hasChosen) return null;

  const close = () => setOpen(false);

  return (
    <dialog
      ref={dialogRef}
      onClose={close}
      onCancel={(event) => event.preventDefault()}
      aria-labelledby="branch-welcome-title"
      className="m-auto w-[calc(100vw-2rem)] max-w-lg rounded-3xl border border-border bg-card p-6 text-foreground shadow-xl sm:p-8 backdrop:bg-ink-950/60 backdrop:backdrop-blur-sm"
    >
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Welcome to
        </p>
        <h2
          id="branch-welcome-title"
          className="mt-2 text-2xl font-semibold tracking-tight text-foreground"
        >
          {clinicInfo.name}
        </h2>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          Pick your preferred branch to continue.
        </p>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {branches.map((branch) => (
          <button
            key={branch.slug}
            type="button"
            onClick={() => select(branch.slug)}
            className="group flex cursor-pointer flex-col rounded-2xl border border-border bg-background p-5 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:shadow-md"
          >
            <span className="flex items-center gap-2 font-semibold text-foreground">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-muted text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                <MapPin className="h-4 w-4" aria-hidden="true" />
              </span>
              {branch.shortName}
            </span>
            <span className="mt-3 min-h-[4.25rem] text-sm leading-relaxed text-muted-foreground">
              {branchFullAddress(branch)}
            </span>
            <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              {branch.phone}
            </span>
            <span className="mt-3 inline-flex w-fit items-center gap-1 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-all duration-200 group-hover:scale-105 group-hover:bg-primary/90 group-hover:shadow-md">
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
