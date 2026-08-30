import { Button } from "@/components/ui/button";
import { InstagramIcon, TelegramIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-svh items-center text-ivory">
      {/* Background */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 animate-hero-drift bg-espresso bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(105deg, rgba(20,15,11,0.88) 0%, rgba(20,15,11,0.55) 45%, rgba(20,15,11,0.35) 100%), url('https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=2000&q=80')",
        }}
      />

      <div className="mx-auto w-[min(1180px,92%)] pt-32 pb-24">
        <Reveal>
          <p className="mb-7 flex items-center gap-3.5 text-xs font-semibold tracking-[0.28em] uppercase text-gold">
            <span className="h-px w-11 bg-gold" />
            Addis Ababa &middot; Guangzhou
          </p>
        </Reveal>

        <Reveal delay={40}>
          <p
            lang="am"
            className="mb-5 font-ethiopic text-[clamp(2.6rem,6vw,4.8rem)] leading-[1.15] text-gold"
          >
            {site.nameAmharic}
          </p>
        </Reveal>

        <h1 className="max-w-[14ch] font-heading text-[clamp(2.7rem,6.4vw,5.2rem)] leading-[1.06] tracking-[-0.02em] text-balance">
          <Reveal delay={80}>
            <span className="block">Style, hand-picked</span>
          </Reveal>
          <Reveal delay={160}>
            <span className="block">
              in <em className="italic text-gold">China</em>, delivered
            </span>
          </Reveal>
          <Reveal delay={240}>
            <span className="block">
              to <em className="italic text-gold">Ethiopia</em>.
            </span>
          </Reveal>
        </h1>

        <Reveal delay={320}>
          <p className="mt-6 max-w-[46ch] text-lg text-ivory/80">
            {site.name} curates women&apos;s clothing, shoes and jewelry from
            trusted suppliers in China — and sources anything else you need on
            request.
          </p>
        </Reveal>

        <Reveal delay={400}>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-[#229ed9] px-7 font-semibold text-white shadow-[0_10px_30px_-10px_rgba(34,158,217,0.55)] transition-transform hover:-translate-y-0.5 hover:bg-[#1b8cc4]"
            >
              <a href={site.socials.telegram} target="_blank" rel="noopener noreferrer">
                Join our Telegram
                <TelegramIcon />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="rounded-full bg-gold px-7 font-semibold text-espresso shadow-[0_10px_30px_-10px_rgba(180,131,47,0.55)] transition-transform hover:-translate-y-0.5 hover:bg-gold-deep"
            >
              <a href={site.socials.instagram} target="_blank" rel="noopener noreferrer">
                Follow on Instagram
                <InstagramIcon />
              </a>
            </Button>
          </div>
        </Reveal>

      </div>

      {/* Scroll hint */}
      <div
        aria-hidden
        className="absolute bottom-8 left-1/2 h-10 w-6 -translate-x-1/2 rounded-full border-[1.5px] border-ivory/40"
      >
        <span className="absolute top-[7px] left-1/2 -ml-px h-2 w-[3px] animate-scroll-hint rounded-full bg-gold" />
      </div>
    </section>
  );
}
