import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const steps = [
  {
    num: "1",
    title: "Pick or request",
    text: "Browse our drops on Telegram & Instagram, or send us a photo of anything you want.",
  },
  {
    num: "2",
    title: "We source it",
    text: "We find the best quality and price from vetted suppliers across China.",
  },
  {
    num: "3",
    title: "Quality check & ship",
    text: "Every item is inspected, packed and shipped with tracking you can follow.",
  },
  {
    num: "4",
    title: "Delivered to you",
    text: "Receive your order in Ethiopia — pay on pickup or delivery, simple as that.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="bg-secondary py-24 md:py-28">
      <div className="mx-auto w-[min(1180px,92%)]">
        <SectionHeading label="Simple & transparent" title="How It Works" />

        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.num} delay={i * 90}>
              <Card className="h-full rounded-2xl border-border/60 bg-ivory shadow-none transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_44px_-22px_rgba(26,21,18,0.22)]">
                <CardContent className="px-7 py-9">
                  <span className="mb-6 grid size-11 place-items-center rounded-full bg-espresso font-heading text-lg italic text-gold">
                    {step.num}
                  </span>
                  <h3 className="mb-2.5 font-heading text-xl font-medium">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{step.text}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
