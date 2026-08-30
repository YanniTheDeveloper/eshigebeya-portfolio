import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  label: string;
  title: string;
  sub?: string;
  align?: "left" | "center";
  dark?: boolean;
};

export function SectionHeading({
  label,
  title,
  sub,
  align = "left",
  dark = false,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "mb-16 max-w-2xl",
        align === "center" && "mx-auto text-center"
      )}
    >
      <p
        className={cn(
          "mb-3.5 text-xs font-bold tracking-[0.3em] uppercase",
          dark ? "text-gold" : "text-gold-deep"
        )}
      >
        {label}
      </p>
      <h2
        className={cn(
          "font-heading text-[clamp(2rem,4.4vw,3.2rem)] leading-[1.1] tracking-[-0.015em] text-balance",
          dark && "text-ivory"
        )}
      >
        {title}
      </h2>
      {sub && (
        <p
          className={cn(
            "mt-4 text-[1.05rem]",
            dark ? "text-ivory/70" : "text-muted-foreground"
          )}
        >
          {sub}
        </p>
      )}
    </Reveal>
  );
}
