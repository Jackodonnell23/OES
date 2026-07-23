export default function PageHero({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="border-b border-border bg-cream">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="font-serif text-4xl font-semibold text-primary sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-lg text-foreground/70">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
