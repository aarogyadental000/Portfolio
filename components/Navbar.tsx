"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import { BookButton, CallButton } from "./Buttons";
import { showDoctors } from "@/data/doctor";
import { clinicInfo } from "@/lib/clinic";

const baseNavItems = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/#contact", label: "Contact" },
];

const navItems = showDoctors
  ? [
      ...baseNavItems.slice(0, 3),
      { href: "/#doctor", label: "Doctor" },
      ...baseNavItems.slice(3),
    ]
  : baseNavItems;

const getId = (href: string) => href.split("#")[1] ?? "";

const sectionIds = navItems.map((item) => getId(item.href));

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isServicesRoute =
    pathname === "/services" || pathname.startsWith("/services/");
  const activeNav = isServicesRoute ? "services" : active;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (pathname !== "/") return;
    const label = active.charAt(0).toUpperCase() + active.slice(1);
    document.title = `${label} | ${clinicInfo.name}`;
  }, [active, pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-border bg-background/90 shadow-sm shadow-ink-950/5 backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className={`mx-auto flex max-w-7xl items-center justify-between px-4 transition-all duration-300 sm:px-6 lg:px-8 ${
          scrolled ? "h-16" : "h-18"
        }`}
      >
        <Logo />

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const isActive = activeNav === getId(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-accent"
                      : "text-muted-foreground hover:text-accent"
                  }`}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-accent transition-opacity ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle />
          <BookButton />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-ink-800 transition-colors hover:bg-muted dark:text-ink-300"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-border bg-background lg:hidden"
        >
          <ul className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            {navItems.map((item) => {
              const isActive = activeNav === getId(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive ? "true" : undefined}
                    className={`block rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                      isActive
                        ? "bg-muted text-accent"
                        : "text-ink-800 hover:bg-muted dark:text-ink-300"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 pb-6 pt-1 sm:px-6">
            <BookButton className="w-full" />
            <CallButton label="Call Now" className="w-full" variant="outline" />
          </div>
        </div>
      )}
    </header>
  );
}
