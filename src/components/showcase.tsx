import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const items = [
  {
    tag: "Clothing",
    title: "Two-Piece Set",
    img: "/products/two-piece-set.jpg",
    alt: "Women's modest two-piece set with wide-leg pants",
    tall: true,
  },
  {
    tag: "Clothing",
    title: "Gold Button Set",
    img: "/products/gold-button-set.jpg",
    alt: "Women's brown two-piece set with gold button details",
    tall: true,
  },
  {
    tag: "Shoes",
    title: "Street Edit",
    img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80",
    alt: "Sneakers",
  },
  {
    tag: "Jewelry",
    title: "Gold Hour",
    img: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=800&q=80",
    alt: "Gold necklace",
  },
];

export function Showcase() {
  return (
    <section id="showcase" className="py-24 md:py-28">
      <div className="mx-auto w-[min(1180px,92%)]">
        <SectionHeading
          label="Recent drops"
          title="The Showcase"
          sub="A taste of what's moving through our Telegram group right now."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal
              key={item.title}
              delay={(i % 3) * 90}
              className={item.tall ? "h-full sm:row-span-2" : ""}
            >
              <figure
                className={
                  item.tall
                    ? "group relative h-full cursor-pointer overflow-hidden rounded-2xl bg-secondary max-sm:aspect-[9/16]"
                    : "group relative aspect-[4/5] cursor-pointer overflow-hidden rounded-2xl bg-secondary"
                }
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.img}
                  alt={item.alt}
                  loading="lazy"
                  className={
                    item.tall
                      ? "size-full object-cover object-top transition-transform duration-700 group-hover:scale-107"
                      : "size-full object-cover transition-transform duration-700 group-hover:scale-107"
                  }
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent"
                />
                <figcaption className="absolute bottom-5 left-5 z-10">
                  <Badge className="mb-2 border-0 bg-gold/90 text-[0.68rem] font-bold tracking-[0.2em] uppercase text-espresso hover:bg-gold">
                    {item.tag}
                  </Badge>
                  <span className="block font-heading text-xl italic text-ivory">
                    {item.title}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-9 text-center text-[0.95rem] text-muted-foreground italic">
            These are sample styles — join our channels to see this week&apos;s
            live drops.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
