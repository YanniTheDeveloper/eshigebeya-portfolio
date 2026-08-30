import { SiteHeader } from "@/components/site-header";
import { MobileNav } from "@/components/mobile-nav";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { Collections } from "@/components/collections";
import { HowItWorks } from "@/components/how-it-works";
import { Showcase } from "@/components/showcase";
import { About } from "@/components/about";
import { ContactCta } from "@/components/contact-cta";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="top" className="flex-1">
        <Hero />
        <Marquee />
        <Collections />
        <HowItWorks />
        <Showcase />
        <About />
        <ContactCta />
      </main>
      <SiteFooter />
      <MobileNav />
    </>
  );
}
