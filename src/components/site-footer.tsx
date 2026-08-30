import { Separator } from "@/components/ui/separator";
import { Logo } from "@/components/logo";
import { site } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#120e0b] pt-16 pb-24 text-ivory/65 md:pb-0">
      <div className="mx-auto grid w-[min(1180px,92%)] gap-10 pb-12 md:grid-cols-[1.6fr_1fr_1fr]">
        <div>
          <Logo dark />
          <p className="mt-4 max-w-[36ch] text-sm">
            Curated fashion &amp; goods, sourced from China with care —
            delivered across Ethiopia.
          </p>
        </div>

        <nav aria-label="Explore">
          <h4 className="mb-4 font-heading text-lg font-medium text-ivory">
            Explore
          </h4>
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block py-1 text-sm transition-colors hover:text-gold"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <nav aria-label="Connect">
          <h4 className="mb-4 font-heading text-lg font-medium text-ivory">
            Connect
          </h4>
          <a
            href={site.socials.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="block py-1 text-sm transition-colors hover:text-gold"
          >
            Telegram
          </a>
          <a
            href={site.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="block py-1 text-sm transition-colors hover:text-gold"
          >
            Instagram
          </a>
          <a
            href={site.messages.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="block py-1 text-sm transition-colors hover:text-gold"
          >
            Order Now
          </a>
        </nav>
      </div>

      <Separator className="bg-ivory/10" />
      <div className="mx-auto flex w-[min(1180px,92%)] flex-wrap items-center justify-between gap-2 py-6 text-[0.85rem]">
        <p>&copy; {year} {site.name}. All rights reserved.</p>
        <p lang="am" className="font-ethiopic tracking-[0.2em] text-gold">
          {site.nameAmharic}
        </p>
      </div>
    </footer>
  );
}
