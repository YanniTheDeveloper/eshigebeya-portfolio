import { Check } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const points = [
  "Vetted suppliers & quality checks",
  "Transparent pricing, no hidden fees",
  "Pay on delivery available",
];

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-espresso py-24 text-ivory md:py-28"
    >
      {/* Oversized Amharic watermark */}
      <span
        aria-hidden
        lang="am"
        className="pointer-events-none absolute -top-8 right-0 select-none font-ethiopic text-[clamp(6rem,18vw,16rem)] leading-none whitespace-nowrap text-ivory/[0.04]"
      >
        እሺ ገበያ
      </span>
      <div className="relative mx-auto grid w-[min(1180px,92%)] items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <Reveal>
          <div className="relative max-w-md overflow-hidden rounded-2xl">
            <div className="aspect-[4/4.6] bg-espresso-soft">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=900&q=80"
                alt="Shipping containers moving goods internationally"
                loading="lazy"
                className="size-full object-cover"
              />
            </div>
            <div className="absolute bottom-5 left-5 rounded-xl bg-ivory/95 px-5 py-3.5 text-espresso backdrop-blur-sm">
              <strong className="block font-heading text-lg tracking-wide">
                CN &rarr; ET
              </strong>
              <span className="text-xs text-muted-foreground">
                Direct sourcing route
              </span>
            </div>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            dark
            label="Our story"
            title="From Guangzhou markets to your doorstep in Addis."
          />
          <Reveal delay={80}>
            <p className="-mt-8 mb-4 text-ivory/75">
              Eshi Gebeya started with a simple idea: Ethiopian women deserve
              access to the same styles, quality and prices found in
              China&apos;s fashion markets — without the hassle of importing
              alone.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <p className="mb-4 text-ivory/75">
              We handle everything: finding trusted suppliers, checking quality,
              shipping and customs. You just pick what you love.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <ul className="mt-7 grid gap-3">
              {points.map((point) => (
                <li key={point} className="flex items-center gap-3 font-medium">
                  <span className="grid size-6 shrink-0 place-items-center rounded-full bg-gold/15">
                    <Check className="size-3.5 text-gold" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
