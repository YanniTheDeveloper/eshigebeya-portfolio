const items = ["Clothing", "Shoes", "Jewelry", "Custom Sourcing"];

export function Marquee() {
  const row = [...items, ...items];
  return (
    <div
      aria-hidden
      className="overflow-hidden border-y border-gold/25 bg-espresso py-4 text-ivory"
    >
      <div className="flex w-max animate-marquee items-center gap-11">
        {[0, 1].map((half) => (
          <div key={half} className="flex items-center gap-11">
            {row.map((item, i) => (
              <span key={`${half}-${i}`} className="flex items-center gap-11">
                <span className="font-heading text-lg italic tracking-wide whitespace-nowrap">
                  {item}
                </span>
                <span className="text-xs text-gold">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
