import { readFileSync } from "node:fs";
import path from "node:path";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import {
  branches,
  branchFullAddress,
  clinicInfo,
  siteUrl,
} from "@/lib/clinic";
import { services } from "@/data/services";

export const runtime = "nodejs";

type AppointmentInput = {
  branch: string;
  name: string;
  phone: string;
  service: string;
  date: string;
  message: string;
};

const branchNames = branches.map((branch) => branch.shortName);
const serviceTitles = new Set(services.map((service) => service.title));

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function isValidIsoDate(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const parsed = new Date(`${value}T00:00:00Z`);
  return (
    !Number.isNaN(parsed.getTime()) &&
    parsed.toISOString().slice(0, 10) === value
  );
}

function validate(input: Record<string, unknown>):
  | { ok: true; data: AppointmentInput }
  | { ok: false } {
  const branch = typeof input.branch === "string" ? input.branch.trim() : "";
  const name = typeof input.name === "string" ? input.name.trim() : "";
  const phone = typeof input.phone === "string" ? input.phone.trim() : "";
  const service = typeof input.service === "string" ? input.service.trim() : "";
  const date = typeof input.date === "string" ? input.date.trim() : "";
  const message = typeof input.message === "string" ? input.message.trim() : "";

  if (!branchNames.includes(branch)) return { ok: false };
  if (name.length < 2 || name.length > 100) return { ok: false };

  const phoneDigits = phone.replace(/\D/g, "");
  if (
    !/^[+()\-\s\d]{7,20}$/.test(phone) ||
    phoneDigits.length < 7 ||
    phoneDigits.length > 15
  ) {
    return { ok: false };
  }

  if (!serviceTitles.has(service)) return { ok: false };
  if (!isValidIsoDate(date)) return { ok: false };
  if (message.length > 2000) return { ok: false };

  return {
    ok: true,
    data: {
      branch,
      name,
      phone,
      service,
      date,
      message: message.slice(0, 2000),
    },
  };
}

function formatPreferredDate(isoDate: string): string {
  return new Date(`${isoDate}T00:00:00Z`).toLocaleDateString("en-US", {
    timeZone: "UTC",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function formatSubmittedAt(): string {
  const submittedAt = new Date().toLocaleString("en-GB", {
    timeZone: "Asia/Kathmandu",
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return `${submittedAt.replace(/\b(am|pm)\b/gi, (match) =>
    match.toUpperCase(),
  )} (Nepal time)`;
}

function buildEmailHtml(data: AppointmentInput): string {
  const branch = branches.find((item) => item.shortName === data.branch);
  const rows: Array<[label: string, value: string]> = [
    ["Patient", escapeHtml(data.name)],
    [
      "Phone",
      `<a href="tel:${escapeHtml(data.phone)}" style="color:#0369a1;text-decoration:none;font-weight:600;">${escapeHtml(data.phone)}</a>`,
    ],
    ["Branch", escapeHtml(data.branch)],
    ["Service", escapeHtml(data.service)],
    ["Preferred date", escapeHtml(formatPreferredDate(data.date))],
    ["Message", data.message ? escapeHtml(data.message) : "&mdash;"],
    ["Submitted", formatSubmittedAt()],
  ];

  const rowHtml = rows
    .map(
      ([label, value], index) => `
              <tr${index % 2 === 0 ? ' bgcolor="#f0f9ff"' : ""}>
                <td style="padding:12px 16px;font-size:11px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:#0369a1;width:130px;white-space:nowrap;vertical-align:top;">${label}</td>
                <td style="padding:12px 16px;font-size:14px;line-height:1.5;color:#082f49;vertical-align:top;">${value}</td>
              </tr>`,
    )
    .join("");

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>New Appointment Request</title>
  </head>
  <body style="margin:0;padding:0;background-color:#f0f9ff;-webkit-font-smoothing:antialiased;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#f0f9ff" style="background-color:#f0f9ff;">
      <tr>
        <td align="center" style="padding:32px 16px;">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px;max-width:100%;background-color:#ffffff;border-radius:16px;overflow:hidden;font-family:'Segoe UI',Helvetica,Arial,sans-serif;box-shadow:0 1px 3px rgba(8,47,73,0.08);">
            <tr>
              <td align="center" bgcolor="#0369a1" style="background-color:#0369a1;padding:30px 24px;">
                <img src="cid:appointment-logo" width="52" height="52" alt="&#129463; ${escapeHtml(clinicInfo.shortName)} Dental Clinic" style="display:block;margin:0 auto 10px;border-radius:12px;border:0;">
                <div style="color:#ffffff;font-size:17px;font-weight:700;letter-spacing:0.02em;">${escapeHtml(clinicInfo.name)}</div>
                <div style="margin-top:6px;color:#bae6fd;font-size:12px;letter-spacing:0.04em;">${escapeHtml(clinicInfo.tagline)}</div>
              </td>
            </tr>
            <tr>
              <td style="padding:32px 32px 0;">
                <h1 style="margin:0;font-size:20px;font-weight:700;color:#082f49;">New Appointment Request</h1>
                <p style="margin:8px 0 0;font-size:14px;line-height:1.6;color:#475569;">A patient has requested an appointment at the <strong style="color:#0369a1;">${escapeHtml(data.branch)}</strong> branch. Please contact them to confirm their visit.</p>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 32px 32px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border:1px solid #bae6fd;border-radius:12px;overflow:hidden;">${rowHtml}
                </table>
              </td>
            </tr>
            <tr>
              <td bgcolor="#f0f9ff" style="background-color:#f0f9ff;padding:22px 32px;border-top:1px solid #e0f2fe;">
                <p style="margin:0;font-size:13px;font-weight:700;color:#0c4a6e;">${escapeHtml(clinicInfo.name)} &mdash; ${escapeHtml(data.branch)}</p>
                ${branch ? `<p style="margin:6px 0 0;font-size:12px;line-height:1.7;color:#475569;">${escapeHtml(branchFullAddress(branch))}<br>Phone: ${escapeHtml(branch.phone)}<br>Hours: ${escapeHtml(branch.openingHours.weekdays)} (${escapeHtml(branch.openingHours.note)})</p>` : ""}
                <p style="margin:14px 0 0;font-size:11px;color:#94a3b8;">This message was sent automatically from the online appointment form at ${escapeHtml(siteUrl)}.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function buildEmailText(data: AppointmentInput): string {
  return [
    "NEW APPOINTMENT REQUEST",
    "",
    `Patient: ${data.name}`,
    `Phone: ${data.phone}`,
    `Branch: ${data.branch}`,
    `Service: ${data.service}`,
    `Preferred date: ${formatPreferredDate(data.date)}`,
    `Message: ${data.message || "-"}`,
    `Submitted: ${formatSubmittedAt()}`,
    "",
    `${clinicInfo.name} — ${data.branch}`,
  ].join("\n");
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request." },
      { status: 400 },
    );
  }

  if (typeof body !== "object" || body === null) {
    return NextResponse.json(
      { success: false, message: "Invalid request." },
      { status: 400 },
    );
  }

  const input = body as Record<string, unknown>;

  // Hidden honeypot checkbox: bots tick it, humans never see it. Silently
  // accept so the bot does not learn anything.
  if (input.botcheck === true || input.botcheck === "on") {
    return NextResponse.json({ success: true });
  }

  const result = validate(input);
  if (!result.ok) {
    return NextResponse.json(
      {
        success: false,
        message: "Please check the form fields and try again.",
      },
      { status: 400 },
    );
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT ?? 587);
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const recipient = process.env.APPOINTMENT_EMAIL;

  if (!smtpHost || !smtpUser || !smtpPass || !recipient || !smtpPort) {
    console.error("[appointment] Email sending is not configured.");
    return NextResponse.json(
      {
        success: false,
        message:
          "Online booking is temporarily unavailable. Please contact us on WhatsApp or by phone.",
      },
      { status: 503 },
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: { user: smtpUser, pass: smtpPass },
      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
      socketTimeout: 15_000,
    });

    const logo = readFileSync(
      path.join(process.cwd(), "public", "images", "logo-email.png"),
    );

    await transporter.sendMail({
      from: { name: clinicInfo.name, address: smtpUser },
      to: recipient,
      subject: `🦷 New Appointment Request — ${result.data.name} (${result.data.branch})`,
      text: buildEmailText(result.data),
      html: buildEmailHtml(result.data),
      attachments: [
        {
          filename: "logo-email.png",
          content: logo,
          cid: "appointment-logo",
        },
      ],
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[appointment] Failed to send email:", error);
    return NextResponse.json(
      { success: false, message: "Unable to send appointment request." },
      { status: 500 },
    );
  }
}
