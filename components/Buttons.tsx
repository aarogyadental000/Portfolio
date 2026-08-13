import type { ReactNode } from "react";
import Link from "next/link";
import { CalendarDays, MessageCircle, Phone } from "lucide-react";
import { phoneHref, whatsappHref } from "@/lib/clinic";

type Variant = "primary" | "outline" | "whatsapp" | "light" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-primary-foreground shadow-sm shadow-brand-900/10 hover:bg-primary/90",
  outline:
    "border border-border bg-background text-foreground hover:border-accent hover:text-accent",
  whatsapp:
    "bg-sky-700 text-white shadow-sm shadow-sky-900/10 hover:bg-sky-600",
  light: "bg-white text-ink-900 hover:bg-brand-50",
  ghost: "text-muted-foreground hover:text-accent",
};

const sizes = {
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

type ButtonLinkProps = {
  href: string;
  variant?: Variant;
  size?: keyof typeof sizes;
  className?: string;
  target?: string;
  rel?: string;
  children: ReactNode;
};

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className = "",
  target,
  rel,
  children,
}: ButtonLinkProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors duration-200 ${variants[variant]} ${sizes[size]} ${className}`;
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={classes}
    >
      {children}
    </a>
  );
}

export function BookButton({
  size = "md",
  className = "",
}: {
  size?: keyof typeof sizes;
  className?: string;
}) {
  return (
    <ButtonLink href="/#contact" size={size} className={className}>
      <CalendarDays className="h-4 w-4" aria-hidden="true" />
      Book a Consultation
    </ButtonLink>
  );
}

export function CallButton({
  size = "md",
  variant = "outline",
  label = "Call Now",
  className = "",
}: {
  size?: keyof typeof sizes;
  variant?: Variant;
  label?: string;
  className?: string;
}) {
  return (
    <ButtonLink
      href={phoneHref}
      variant={variant}
      size={size}
      className={className}
    >
      <Phone className="h-4 w-4" aria-hidden="true" />
      {label}
    </ButtonLink>
  );
}

export function WhatsAppButton({
  size = "md",
  label = "WhatsApp Us",
  className = "",
}: {
  size?: keyof typeof sizes;
  label?: string;
  className?: string;
}) {
  return (
    <ButtonLink
      href={whatsappHref}
      variant="whatsapp"
      size={size}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      <MessageCircle className="h-4 w-4" aria-hidden="true" />
      {label}
    </ButtonLink>
  );
}
