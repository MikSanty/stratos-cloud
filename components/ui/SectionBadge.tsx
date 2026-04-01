interface SectionBadgeProps {
  text: string;
}

export default function SectionBadge({ text }: SectionBadgeProps) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-medium tracking-wider text-accent-light uppercase">
      <span className="h-1.5 w-1.5 rounded-full bg-accent-light animate-pulse" />
      {text}
    </span>
  );
}
