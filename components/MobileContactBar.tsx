import { MessageCircle, Phone } from "lucide-react";
import { phoneHref, whatsappHref } from "@/lib/clinic";

export default function MobileContactBar() {
  return (
    <nav
      aria-label="Contact"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background shadow-[0_-4px_16px_rgba(14,28,40,0.08)] lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="grid grid-cols-2">
        <a
          href={phoneHref}
          className="flex h-16 items-center justify-center gap-2.5 text-foreground transition-colors active:bg-muted"
        >
          <Phone className="h-5 w-5" aria-hidden="true" />
          <span className="text-base font-semibold">Call</span>
        </a>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-16 items-center justify-center gap-2.5 bg-sky-700 text-white transition-colors active:bg-sky-600"
        >
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
          <span className="text-base font-semibold">WhatsApp</span>
        </a>
      </div>
    </nav>
  );
}
