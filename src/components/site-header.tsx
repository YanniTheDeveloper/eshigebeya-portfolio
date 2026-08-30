"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onDark = !scrolled; // hero is dark, so nav starts light-on-dark

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b bg-ivory/85 py-3 shadow-[0_1px_0_var(--border)] backdrop-blur-xl"
          : "bg-transparent py-5"
      )}
    >
      <div className="mx-auto flex w-[min(1180px,92%)] items-center justify-between">
        <a href="#top" aria-label={`${site.name} home`}>
          <Logo dark={onDark} />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "relative text-sm font-medium transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full",
                onDark
                  ? "text-ivory/85 hover:text-ivory"
                  : "text-foreground/80 hover:text-foreground"
              )}
            >
              {item.label}
            </a>
          ))}
          <Button
            asChild
            className="rounded-full bg-gold px-5 font-semibold text-espresso hover:bg-gold-deep"
          >
            <a href={site.messages.telegram} target="_blank" rel="noopener noreferrer">
              Order Now
            </a>
          </Button>
        </nav>

        {/* Mobile: compact order button (full nav lives in the bottom bar) */}
        <Button
          asChild
          size="sm"
          className="rounded-full bg-gold px-4 font-semibold text-espresso hover:bg-gold-deep md:hidden"
        >
          <a href={site.messages.telegram} target="_blank" rel="noopener noreferrer">
            Order Now
          </a>
        </Button>
      </div>
    </header>
  );
}
