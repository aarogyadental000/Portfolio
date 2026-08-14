"use client";

import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import {
  AlertCircle,
  CheckCircle2,
  MessageCircle,
  Send,
} from "lucide-react";
import { clinicInfo, branchWhatsappHref } from "@/lib/clinic";
import { getServiceBySlug, services } from "@/data/services";
import { useBranch } from "./BranchProvider";

type Status = "idle" | "submitting" | "success" | "error";

const inputClasses =
  "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground transition-all placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-ring/30";

const labelClasses =
  "mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground";

const initialForm = {
  name: "",
  phone: "",
  service: "",
  date: "",
  message: "",
};

export default function ContactForm() {
  const { branch } = useBranch();
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState(initialForm);
  const [highlighted, setHighlighted] = useState(false);
  const highlightTimer = useRef<number | undefined>(undefined);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const slug = params.get("service");
    if (!slug) return;

    const service = getServiceBySlug(slug);
    if (!service) return;

    const timer = window.setTimeout(() => {
      setForm((current) => ({ ...current, service: service.title }));
      setHighlighted(true);
      window.clearTimeout(highlightTimer.current);
      highlightTimer.current = window.setTimeout(
        () => setHighlighted(false),
        2600,
      );
    }, 0);

    return () => {
      window.clearTimeout(timer);
      window.clearTimeout(highlightTimer.current);
    };
  }, []);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "submitting") return;

    const hasEndpoint = clinicInfo.formEndpoint.length > 0;

    if (!hasEndpoint) {
      const message = [
        `Branch: ${branch.shortName}`,
        `Name: ${form.name}`,
        `Phone: ${form.phone}`,
        form.service && `Service: ${form.service}`,
        form.date && `Preferred date: ${form.date}`,
        form.message && `Message: ${form.message}`,
      ]
        .filter(Boolean)
        .join("\n");

      window.open(
        branchWhatsappHref(branch, message),
        "_blank",
        "noopener,noreferrer",
      );
      return;
    }

    setStatus("submitting");
    try {
      const response = await fetch(clinicInfo.formEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...form,
          _subject: `New appointment request from ${clinicInfo.name} website`,
        }),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setStatus("success");
      setForm(initialForm);
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="h-full rounded-3xl border border-border bg-card p-7 shadow-sm sm:p-8">
      <h3 className="text-xl font-semibold tracking-tight text-foreground">
        Book an Appointment
      </h3>
      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
        Send us your details and we will get back to you to confirm your visit.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="cf-name" className={labelClasses}>
              Full name
            </label>
            <input
              id="cf-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              className={inputClasses}
            />
          </div>
          <div>
            <label htmlFor="cf-phone" className={labelClasses}>
              Phone
            </label>
            <input
              id="cf-phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              placeholder="98XXXXXXXX"
              value={form.phone}
              onChange={handleChange}
              className={inputClasses}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="cf-service" className={labelClasses}>
              Service
            </label>
            <select
              id="cf-service"
              name="service"
              value={form.service}
              onChange={handleChange}
              required
              className={`${inputClasses} ${
                highlighted ? "animate-field-pulse border-accent" : ""
              }`}
            >
              <option value="">Choose a service</option>
              {services.map((service) => (
                <option key={service.title} value={service.title}>
                  {service.title}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="cf-date" className={labelClasses}>
              Preferred date
            </label>
            <input
              id="cf-date"
              name="date"
              type="date"
              required
              value={form.date}
              onChange={handleChange}
              className={inputClasses}
            />
          </div>
        </div>

        <div>
          <label htmlFor="cf-message" className={labelClasses}>
            Message
          </label>
          <textarea
            id="cf-message"
            name="message"
            rows={4}
            placeholder="Tell us briefly what you need help with."
            value={form.message}
            onChange={handleChange}
            className={inputClasses}
          />
        </div>

        {status === "error" && (
          <p
            role="alert"
            className="flex items-start gap-2 rounded-xl bg-red-50 p-3 text-sm font-medium text-red-700 dark:bg-red-950/40 dark:text-red-300"
          >
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            Something went wrong. Please try again, or message us on WhatsApp.
          </p>
        )}

        {status === "success" && (
          <p
            role="status"
            className="flex items-start gap-2 rounded-xl bg-sky-50 p-3 text-sm font-medium text-sky-700 dark:bg-sky-950/40 dark:text-sky-300"
          >
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            Thank you! Your request has been sent. We will contact you shortly.
          </p>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="flex w-full mx-auto items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm shadow-brand-900/10 transition-all hover:bg-primary/90 hover:shadow-md hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 active:translate-y-0"
        >
          {clinicInfo.formEndpoint.length === 0 ? (
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
          ) : (
            <Send className="h-4 w-4" aria-hidden="true" />
          )}
          {status === "submitting"
            ? "Sending…"
            : clinicInfo.formEndpoint.length === 0
              ? "Send via WhatsApp"
              : "Send request"}
        </button>

        {clinicInfo.formEndpoint.length === 0 && (
          <p className="text-center text-xs text-muted-foreground">
            This will open WhatsApp with your details pre-filled.
          </p>
        )}
      </form>
    </div>
  );
}
