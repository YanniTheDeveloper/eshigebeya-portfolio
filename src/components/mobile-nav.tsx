import { Home, Shirt, LayoutGrid } from "lucide-react";
import { InstagramIcon, TelegramIcon } from "@/components/icons";
import { site } from "@/lib/site";

const links = [
  { label: "Home", href: "#top", icon: Home },
  { label: "Collections", href: "#collections", icon: Shirt },
  { label: "Showcase", href: "#showcase", icon: LayoutGrid },
];

export function MobileNav() {
  return (
    <nav
      aria-label="Mobile navigation"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-ivory/10 bg-espresso/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-xl md:hidden"
    >
      <div className="grid grid-cols-5 items-end px-2 py-2">
        {links.slice(0, 2).map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="flex flex-col items-center gap-1 rounded-lg py-1.5 text-[0.65rem] font-medium text-ivory/70 transition-colors active:text-gold"
          >
            <link.icon className="size-5" />
            {link.label}
          </a>
        ))}

        {/* Center order action */}
        <a
          href={site.messages.telegram}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto -mt-6 flex size-14 flex-col items-center justify-center rounded-full bg-gold text-espresso shadow-[0_8px_24px_-6px_rgba(180,131,47,0.6)] ring-4 ring-espresso transition-transform active:scale-95"
          aria-label="Order now on Telegram"
        >
          <TelegramIcon className="size-6" />
        </a>

        {links.slice(2).map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="flex flex-col items-center gap-1 rounded-lg py-1.5 text-[0.65rem] font-medium text-ivory/70 transition-colors active:text-gold"
          >
            <link.icon className="size-5" />
            {link.label}
          </a>
        ))}

        <a
          href={site.socials.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 rounded-lg py-1.5 text-[0.65rem] font-medium text-ivory/70 transition-colors active:text-gold"
        >
          <InstagramIcon className="size-5" />
          Instagram
        </a>
      </div>
    </nav>
  );
}
