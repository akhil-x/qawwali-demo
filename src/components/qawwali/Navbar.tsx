import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logoAsset from "@/assets/qawwali-logo.jpg";
import { LINKS } from "./links";

const NAV = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#signature", label: "Signature" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}>
      <div className="mx-auto max-w-7xl px-4">
        <nav className={`glass-strong flex items-center justify-between rounded-2xl px-4 py-3 transition-shadow ${scrolled ? "shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)]" : ""}`}>
          <a href="#home" className="flex items-center gap-3">
            <img src={logoAsset} alt="Qawwali Multi Cuisine logo" className="h-10 w-10 rounded-full object-cover ring-1 ring-white/10" width={40} height={40} />
            <div className="hidden sm:block">
              <div className="font-display text-lg font-bold leading-none text-ivory">Qawwali</div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">The Rhythm of Taste</div>
            </div>
          </a>

          <ul className="hidden items-center gap-7 lg:flex">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="text-sm font-medium text-ivory/80 transition-colors hover:text-primary">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-2 md:flex">
            <a href={LINKS.findTable} target="_blank" rel="noopener noreferrer"
               className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-ivory transition hover:border-primary hover:text-primary">
              Find a Table
            </a>
            <a href={LINKS.order} target="_blank" rel="noopener noreferrer"
               className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition hover:brightness-110">
              Order Online
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="lg:hidden text-ivory" aria-label="Toggle menu">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {open && (
          <div className="glass-strong animate-fade-up mt-2 rounded-2xl p-4 lg:hidden">
            <ul className="flex flex-col gap-1">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a onClick={() => setOpen(false)} href={n.href}
                     className="block rounded-lg px-3 py-2 text-ivory/90 hover:bg-white/5">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <a href={LINKS.findTable} target="_blank" rel="noopener noreferrer"
                 className="rounded-full border border-white/15 px-3 py-2 text-center text-sm font-medium text-ivory">
                Find a Table
              </a>
              <a href={LINKS.order} target="_blank" rel="noopener noreferrer"
                 className="rounded-full bg-primary px-3 py-2 text-center text-sm font-semibold text-primary-foreground">
                Order Online
              </a>
              <a href={`tel:${LINKS.phone}`} className="col-span-2 flex items-center justify-center gap-2 rounded-full border border-white/15 px-3 py-2 text-sm text-ivory">
                <Phone size={14} /> {LINKS.phone}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
