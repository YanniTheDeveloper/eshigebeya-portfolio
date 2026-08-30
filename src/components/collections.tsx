import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const categories = [
  {
    num: "01",
    title: "Clothing",
    text: "Dresses, sets, outerwear and everyday pieces — on-trend styles chosen for quality and fit.",
    cta: "Request a piece",
    img: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=900&q=80",
    alt: "Women's clothing rack with curated garments",
  },
  {
    num: "02",
    title: "Shoes",
    text: "Heels, sneakers, boots and sandals — comfortable, durable and made to turn heads.",
    cta: "Request a pair",
    img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=80",
    alt: "Elegant women's heels",
  },
  {
    num: "03",
    title: "Jewelry",
    text: "Necklaces, earrings, rings and sets — delicate everyday pieces to statement gold.",
    cta: "Request a piece",
    img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80",
    alt: "Gold jewelry rings",
  },
];

export function Collections() {
  return (
    <section id="collections" className="py-24 md:py-28">
      <div className="mx-auto w-[min(1180px,92%)]">
        <SectionHeading
          label="What we source"
          title="Our Collections"
          sub="Focused on women's fashion today — with the network to source anything else tomorrow."
        />

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <Reveal key={cat.num} delay={i * 90}>
              <Card className="group h-full overflow-hidden rounded-2xl border-border/60 py-0 shadow-none transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-25px_rgba(26,21,18,0.28)]">
                <div className="aspect-[4/4.4] overflow-hidden bg-secondary">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={cat.img}
                    alt={cat.alt}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <CardContent className="relative px-6 pt-6 pb-8">
                  <span className="absolute -top-7 right-5 grid size-14 place-items-center rounded-full bg-espresso font-heading text-lg italic text-gold">
                    {cat.num}
                  </span>
                  <h3 className="mb-2 font-heading text-2xl font-medium">
                    {cat.title}
                  </h3>
                  <p className="mb-5 text-[0.95rem] text-muted-foreground">
                    {cat.text}
                  </p>
                  <a
                    href="#contact"
                    className="group/link inline-flex items-center gap-2 text-sm font-bold text-gold-deep"
                  >
                    {cat.cta}
                    <ArrowRight className="size-4 transition-transform group-hover/link:translate-x-1" />
                  </a>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-9 flex flex-wrap items-center justify-between gap-7 rounded-2xl bg-gradient-to-br from-espresso to-espresso-soft px-8 py-8 text-ivory md:px-10">
            <div>
              <h3 className="mb-1.5 font-heading text-2xl font-medium">
                Looking for something else?
              </h3>
              <p className="max-w-[52ch] text-ivory/70">
                Bags, accessories, beauty, home goods — if it&apos;s made in
                China, we can source it for you.
              </p>
            </div>
            <Button
              asChild
              size="lg"
              className="rounded-full bg-gold px-7 font-semibold text-espresso hover:bg-gold-deep"
            >
              <a href="#contact">Ask us to source it</a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
