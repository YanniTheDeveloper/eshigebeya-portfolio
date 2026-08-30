import { Button } from "@/components/ui/button";
import { InstagramIcon, TelegramIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";

export function ContactCta() {
  return (
    <section
      id="contact"
      className="bg-espresso py-24 text-center text-ivory md:py-32"
      style={{
        backgroundImage:
          "radial-gradient(ellipse 60% 80% at 80% 20%, rgba(212,162,78,0.14), transparent)",
      }}
    >
      <div className="mx-auto w-[min(1180px,92%)]">
        <Reveal>
          <p className="mb-3.5 text-xs font-bold tracking-[0.3em] uppercase text-gold">
            Order &amp; inquiries
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-heading text-[clamp(2.3rem,5.4vw,4rem)] leading-[1.08] tracking-[-0.02em] text-balance">
            Ready to order?
            <br />
            Come say <em className="italic text-gold">selam</em>.
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="mx-auto mt-6 max-w-[48ch] text-[1.05rem] text-ivory/70">
            Message us directly to place an order or request a custom item —
            we reply fast.
          </p>
        </Reveal>
        <Reveal delay={240}>
          <div className="mt-11 flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-[#229ed9] px-9 py-6 text-base font-semibold text-white shadow-[0_10px_30px_-10px_rgba(34,158,217,0.55)] transition-transform hover:-translate-y-0.5 hover:bg-[#1b8cc4]"
            >
              <a href={site.messages.telegram} target="_blank" rel="noopener noreferrer">
                <TelegramIcon className="size-5" />
                Message on Telegram
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="rounded-full bg-gold px-9 py-6 text-base font-semibold text-espresso shadow-[0_10px_30px_-10px_rgba(180,131,47,0.55)] transition-transform hover:-translate-y-0.5 hover:bg-gold-deep"
            >
              <a href={site.messages.instagram} target="_blank" rel="noopener noreferrer">
                <InstagramIcon className="size-5" />
                DM on Instagram
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
