import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  /** Light text for dark backgrounds (hero nav, footer, mobile menu) */
  dark?: boolean;
};

/**
 * Brand logo: the circular mark + wordmark. The mark is a circle, so
 * `rounded-full` crops the jpeg's white corners cleanly on any background.
 */
export function Logo({ className, dark = false }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      {site.logoSrc ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={site.logoSrc}
          alt={`${site.name} logo`}
          className="size-9 rounded-full object-cover"
        />
      ) : (
        <span className="grid size-9 place-items-center rounded-full bg-espresso font-heading text-lg italic text-gold">
          E
        </span>
      )}
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-heading text-xl font-medium tracking-tight transition-colors",
            dark ? "text-ivory" : "text-foreground"
          )}
        >
          {site.name}
        </span>
        <span
          lang="am"
          className={cn(
            "mt-1 font-ethiopic text-[0.72rem] tracking-[0.12em] transition-colors",
            dark ? "text-gold" : "text-gold-deep"
          )}
        >
          {site.nameAmharic}
        </span>
      </span>
    </span>
  );
}
