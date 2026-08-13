import Link from "next/link";
import Image from "next/image";
import { clinicInfo } from "@/lib/clinic";

export function ToothMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M12 5.5c-1.9-1.3-4.5-1.6-6.7-1C4.6 7.3 4.9 10.9 6.2 15c.9 2.7 1.3 5.2 1.8 7.1.3 1.3 1.1 2 1.9 1.8 1.2-.3 1-2.3 1.9-3.5.6-.8 1.1-.8 1.7 0 .9 1.2.7 3.2 1.9 3.5.8.2 1.6-.5 1.9-1.8.5-1.9.9-4.4 1.8-7.1 1.3-4.1 1.6-7.7.9-10.5-2.2-.6-4.8-.3-6.7 1z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Logo() {
  return (
    <Link href="/#home" className="group flex items-center gap-2.5">
      <Image
        src="/images/logo.webp"
        alt={clinicInfo.name}
        width={354}
        height={354}
        className="h-14 w-14 object-contain"
      />
      <span className="flex flex-col leading-tight">
        <span className="text-base font-semibold tracking-tight text-foreground">
          {clinicInfo.name}
        </span>
        <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-accent">
          {clinicInfo.city}
        </span>
      </span>
    </Link>
  );
}
