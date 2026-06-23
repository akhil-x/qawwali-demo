import { useMemo, useState } from "react";
import { MENU, formatPrice, type MenuItem } from "@/lib/menu-data";
import { Sparkles } from "lucide-react";

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary ring-1 ring-primary/30">
      <Sparkles size={10} /> {children}
    </span>
  );
}

function ItemCard({ item }: { item: MenuItem }) {
  return (
    <div className="glass group flex flex-col gap-2 rounded-xl p-4 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-card/80">
      <div className="flex items-start justify-between gap-3">
        <h4 className="font-display text-base font-semibold text-ivory">{item.name}</h4>
        {item.badge && <Badge>{item.badge}</Badge>}
      </div>
      {item.desc && <p className="text-xs text-muted-foreground">{item.desc}</p>}
      <div className="mt-auto pt-2 text-sm font-semibold text-gold">{formatPrice(item.price)}</div>
    </div>
  );
}

export function MenuSection() {
  const [active, setActive] = useState(MENU[0].id);
  const cat = useMemo(() => MENU.find((c) => c.id === active)!, [active]);

  return (
    <section id="menu" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-accent text-sm uppercase tracking-[0.3em] text-primary">The Full Menu</p>
          <h2 className="mt-3 text-4xl font-bold text-ivory sm:text-5xl">Crafted for every craving</h2>
          <p className="mt-4 text-muted-foreground">
            From signature mandi to fresh shakes — explore every flavour Qawwali has to offer.
          </p>
        </div>

        {/* Category tabs */}
        <div className="mt-10 flex gap-2 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="mx-auto flex gap-2">
            {MENU.map((c) => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition ${
                  active === c.id
                    ? "border-primary bg-primary text-primary-foreground shadow-[var(--shadow-glow)]"
                    : "border-white/10 text-ivory/70 hover:border-white/30 hover:text-ivory"
                }`}
              >
                {c.title}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 max-h-[70vh] overflow-y-auto rounded-2xl border border-white/10 bg-card/30 p-4 [scrollbar-width:thin] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary/40">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cat.items.map((item) => (
              <ItemCard key={item.name} item={item} />
            ))}
          </div>
        </div>

        <p className="mt-10 text-center text-xs text-muted-foreground">
          Q · H · F refer to Quarter / Half / Full portions. APS = As Per Selection. Prices in ₹ Indian Rupees.
        </p>
      </div>
    </section>
  );
}
