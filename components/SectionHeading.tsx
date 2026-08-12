type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  return (
    <div
      className={`max-w-2xl ${isCenter ? "mx-auto text-center" : "text-left"} ${className}`}
    >
      <p
        className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent ${
          isCenter ? "justify-center" : ""
        }`}
      >
        <span aria-hidden="true" className="h-px w-6 bg-brand-400" />
        {eyebrow}
        {isCenter && <span aria-hidden="true" className="h-px w-6 bg-brand-400" />}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
