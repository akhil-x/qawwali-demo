import { createFileRoute } from "@tanstack/react-router";
import {
  Phone, MapPin, Instagram, Star, Utensils, Wine,
  Users, Sparkles, Clock, ChefHat,
  Award, Leaf, ArrowRight,
} from "lucide-react";

import logoAsset from "@/assets/qawwali-logo.jpg";
import heroPlatter from "@/assets/hero-platter.jpg";
import dishMandi from "@/assets/dish-mandi.jpg";
import dishAlfaham from "@/assets/dish-alfaham.jpg";
import dishShawarma from "@/assets/dish-shawarma.jpg";
import dishShake from "@/assets/dish-shake.jpg";
import dishFalooda from "@/assets/dish-falooda.jpg";
import dishButterChicken from "@/assets/dish-butter-chicken.jpg";
import ambienceRooftop from "@/assets/ambience-rooftop.jpg";

import { Navbar } from "@/components/qawwali/Navbar";
import { MenuSection } from "@/components/qawwali/MenuSection";
import { LINKS } from "@/components/qawwali/links";
import { SIGNATURE_DISHES, formatPrice } from "@/lib/menu-data";

const SEO_TITLE = "Qawwali Multi Cuisine | Premium Restaurant in Aluva, Kerala";
const SEO_DESC =
  "Experience Qawwali Multi Cuisine, a premium restaurant in Thottumugham, Aluva serving signature mandi, Arabic food, Indian dishes, shawarma, fresh shakes, desserts, rooftop seating, and family dining.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: SEO_TITLE },
      { name: "description", content: SEO_DESC },
      { name: "keywords", content: "Qawwali Multi Cuisine, Qawwali Restaurant Aluva, best restaurant in Aluva, multi cuisine restaurant Aluva, mandi restaurant Aluva, Arabic food Aluva, family restaurant Aluva, rooftop restaurant Aluva, restaurant near Thottumugham, best mandi in Kochi" },
      { property: "og:title", content: SEO_TITLE },
      { property: "og:description", content: SEO_DESC },
      { property: "og:type", content: "restaurant" },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: SEO_TITLE },
      { name: "twitter:description", content: SEO_DESC },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: "Qawwali Multi Cuisine",
          image: logoAsset,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Thottumugham",
            addressLocality: "Aluva",
            addressRegion: "Kerala",
            postalCode: "683105",
            addressCountry: "IN",
          },
          telephone: "+91-7561005050",
          servesCuisine: ["Arabic", "Indian", "Kerala", "Chinese", "Mandi", "Multi-cuisine"],
          priceRange: "₹₹",
          url: "https://qawwali.example.com/",
          sameAs: [LINKS.instagram],
          hasMenu: "/#menu",
          acceptsReservations: "True",
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Signature />
      <MenuSection />
      <Gallery />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  );
}

/* -------------------- HERO -------------------- */
function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Background brush rings */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full border-[6px] border-primary/30 blur-[1px] animate-spin-slow" />
        <div className="absolute -left-32 bottom-0 h-[420px] w-[420px] rounded-full border-[4px] border-primary/20 blur-[1px]" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-[1.05fr_1fr]">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-ivory/80">
            <Sparkles size={12} className="text-primary" />
            Premium Multi-Cuisine · Aluva, Kerala
          </div>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] text-ivory sm:text-6xl lg:text-7xl">
            Qawwali <span className="text-gradient-ember">Multi Cuisine</span>
          </h1>
          <p className="mt-4 font-display text-2xl italic text-gold sm:text-3xl">
            The Rhythm of Taste
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Experience premium multi-cuisine dining in Aluva with signature mandi, Arabic specials,
            Indian favourites, fresh shakes, desserts, rooftop seating, and a cozy family-friendly ambience.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={LINKS.findTable} target="_blank" rel="noopener noreferrer"
               className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition hover:brightness-110">
              Find a Table <ArrowRight size={16} className="transition group-hover:translate-x-0.5" />
            </a>
            <a href={LINKS.order} target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-ivory backdrop-blur transition hover:border-primary hover:text-primary">
              Order Online
            </a>
            <a href="#menu"
               className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-ivory/80 transition hover:text-primary">
              View Menu →
            </a>
          </div>

          {/* Floating cards */}
          <div className="mt-10 grid grid-cols-2 gap-3 sm:max-w-lg">
            {[
              { icon: ChefHat, t: "Signature Jallikettu Mandi" },
              { icon: Wine, t: "Rooftop Seating" },
              { icon: Users, t: "Family Dining" },
              { icon: Leaf, t: "Halal Food" },
            ].map(({ icon: Icon, t }) => (
              <div key={t} className="glass flex items-center gap-3 rounded-xl p-3">
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/15 text-primary">
                  <Icon size={16} />
                </div>
                <span className="truncate text-sm font-medium text-ivory">{t}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right visual */}
        <div className="relative">
          <div className="relative mx-auto aspect-square max-w-[520px]">
            {/* Brush ring backdrop */}
            <div className="absolute inset-0 rounded-full border-[10px] border-primary/40 [mask-image:conic-gradient(from_30deg,black_0%,black_70%,transparent_75%,black_85%)]" />
            <div className="absolute inset-6 overflow-hidden rounded-full ring-1 ring-white/10 shadow-[var(--shadow-card)]">
              <img src={heroPlatter} alt="Arabic tawa platter at Qawwali Multi Cuisine"
                   className="h-full w-full object-cover" width={1024} height={1024} />
            </div>
            <img src={logoAsset} alt="Qawwali logo"
                 className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full ring-4 ring-background sm:h-28 sm:w-28"
                 width={112} height={112} />
            <div className="glass absolute -right-3 top-8 rounded-xl px-3 py-2 shadow-[var(--shadow-card)]">
              <div className="flex items-center gap-1.5 text-gold">
                {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
              </div>
              <div className="text-xs text-ivory/90">Loved by food lovers</div>
            </div>
            <div className="glass absolute -bottom-2 right-6 rounded-xl px-3 py-2 shadow-[var(--shadow-card)]">
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Open Daily</div>
              <div className="flex items-center gap-1.5 text-sm font-semibold text-ivory"><Clock size={12} /> 11 AM – Midnight</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- ABOUT -------------------- */
function About() {
  const features = [
    { icon: Wine, t: "Rooftop Seating" }, { icon: Utensils, t: "Outdoor Seating" },
    { icon: Users, t: "Family Dining" }, { icon: Leaf, t: "Halal Food" },
    { icon: Sparkles, t: "Quick Bites" }, { icon: Users, t: "Private Dining Room" },
    { icon: Award, t: "Award-Winning Mandi" },
  ];
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="font-accent text-sm uppercase tracking-[0.3em] text-primary">About Qawwali</p>
            <h2 className="mt-3 text-4xl font-bold text-ivory sm:text-5xl">
              A Premium Dining Experience<br /><span className="text-gradient-ember">in Aluva</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Qawwali Multi Cuisine brings together the richness of Arabic, Indian, Chinese, Kerala,
              and multi-cuisine flavours under one premium dining experience. Located at Thottumugham,
              Aluva, Qawwali is known for its signature Jallikettu Beef Rib Mandi, Al-Faham, shawarma,
              seafood, fresh juices, shakes, desserts, and family-friendly ambience.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={LINKS.findTable} target="_blank" rel="noopener noreferrer"
                 className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] hover:brightness-110">
                Reserve a Table
              </a>
              <a href="#menu" className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-ivory hover:border-primary hover:text-primary">
                Explore Menu
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {features.map(({ icon: Icon, t }) => (
              <div key={t} className="glass group flex flex-col items-start gap-2 rounded-xl p-4 transition hover:-translate-y-0.5 hover:border-primary/40">
                <div className="grid h-9 w-9 place-items-center rounded-lg bg-primary/15 text-primary">
                  <Icon size={16} />
                </div>
                <div className="text-sm font-medium text-ivory">{t}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- SIGNATURE -------------------- */
function Signature() {
  const imageMap: Record<string, string> = {
    "Jallikettu Beef Rib Mandi": "https://images.pexels.com/photos/18698232/pexels-photo-18698232.jpeg",
    "Jalikkettu Beef Rib": "https://images.pexels.com/photos/37051568/pexels-photo-37051568.jpeg?auto=compress&cs=tinysrgb&w=800",
    "Chicken Curry": "https://images.pexels.com/photos/9609849/pexels-photo-9609849.jpeg?auto=compress&cs=tinysrgb&w=800",
    "Chicken Mandi": "https://images.pexels.com/photos/18698227/pexels-photo-18698227.jpeg?auto=compress&cs=tinysrgb&w=800",
    "Al-Faham Mandi": "https://images.pexels.com/photos/18698227/pexels-photo-18698227.jpeg?auto=compress&cs=tinysrgb&w=800",
    "Shawarma Meal": "https://images.pexels.com/photos/8018079/pexels-photo-8018079.jpeg?auto=compress&cs=tinysrgb&w=800",
    "Non Vegetarian Sadya": "https://images.pexels.com/photos/7234281/pexels-photo-7234281.jpeg?auto=compress&cs=tinysrgb&w=800",
    "Arabic Tawa Platter": heroPlatter,
  };
  return (
    <section id="signature" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-accent text-sm uppercase tracking-[0.3em] text-primary">Chef's Selection</p>
          <h2 className="mt-3 text-4xl font-bold text-ivory sm:text-5xl">
            Signature Flavours <span className="text-gradient-ember">of Qawwali</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            The dishes that define us — bold, aromatic, and unforgettable.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SIGNATURE_DISHES.map((d) => (
            <article key={d.name}
              className="glass group relative flex flex-col overflow-hidden rounded-2xl transition hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
              <div className="relative h-48 overflow-hidden">
                <img src={imageMap[d.name] || dishMandi} alt={d.name}
                     loading="lazy" width={512} height={384}
                     className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                {d.badge && (
                  <span className="absolute left-3 top-3 rounded-full bg-primary px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">
                    {d.badge}
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col gap-2 p-5">
                <h3 className="font-display text-lg font-semibold text-ivory">{d.name}</h3>
                {d.desc && <p className="text-xs leading-relaxed text-muted-foreground">{d.desc}</p>}
                <div className="mt-auto pt-2 text-sm font-semibold text-gold">{formatPrice(d.price)}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- GALLERY -------------------- */
function Gallery() {
  const items = [
    { src: ambienceRooftop, alt: "Rooftop dining at Qawwali", span: "col-span-2 row-span-2" },
    { src: dishMandi, alt: "Signature Jallikettu Mandi", span: "" },
    { src: dishAlfaham, alt: "Al-Faham grilled chicken", span: "" },
    { src: dishShawarma, alt: "Turkish chicken shawarma", span: "row-span-2" },
    { src: dishShake, alt: "Premium Oreo shake", span: "" },
    { src: dishFalooda, alt: "Royal falooda dessert", span: "" },
    { src: heroPlatter, alt: "Arabic tawa platter", span: "col-span-2" },
    { src: dishButterChicken, alt: "Butter chicken with naan", span: "" },
  ];
  return (
    <section id="gallery" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-accent text-sm uppercase tracking-[0.3em] text-primary">Gallery</p>
          <h2 className="mt-3 text-4xl font-bold text-ivory sm:text-5xl">A taste of the experience</h2>
        </div>
        <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-3 sm:grid-cols-3 sm:auto-rows-[200px] lg:grid-cols-4 lg:auto-rows-[220px]">
          {items.map((it, i) => (
            <figure key={i} className={`group relative overflow-hidden rounded-2xl ring-1 ring-white/10 ${it.span}`}>
              <img src={it.src} alt={it.alt} loading="lazy"
                   className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              <figcaption className="absolute bottom-3 left-3 right-3 translate-y-2 text-sm font-medium text-ivory opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                {it.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- REVIEWS -------------------- */
function Reviews() {
  const reviews = [
    {
      name: "Alen Jose",
      text: "I recently tried Beef Jellikettu Mandi, and it was absolutely delicious! The beef was incredibly soft, juicy, and cooked to perfection, blending beautifully with the rich flavors of the mandi rice. Every bite was full of taste and aroma, making it a truly satisfying experience. Highly recommended for anyone who loves flavorful and well-cooked beef dishes.",
    },
    {
      name: "Tintu",
      text: "Located near the river, this place offers a great view if you choose to sit upstairs, where you can also enjoy the breeze. Their Jallikettu beef rib mandi was sooo good. The ambience is pleasant, and the place is clean, making it a good option for a family dinner. Parking can be confusing, but there's a ground adjacent to the hotel for it. It gets quite crowded on weekends, which speaks to its popularity. Service is decent. Definitely worth a try!",
    },
    {
      name: "Elda Ittiachan",
      text: "Really good restaurant with a variety of dishes. I really like the Japan Chicken and Porotta. Jallikettu Mandi is one of their signature items. The service is also really good, they have a good space for parking, and the rates are affordable.",
    },
  ];
  return (
    <section id="reviews" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-accent text-sm uppercase tracking-[0.3em] text-primary">Reviews</p>
          <h2 className="mt-3 text-4xl font-bold text-ivory sm:text-5xl">
            Loved by <span className="text-gradient-ember">Food Lovers</span>
          </h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {reviews.map((r) => (
            <blockquote key={r.name} className="glass flex flex-col rounded-2xl p-6">
              <div className="flex items-center gap-1 text-gold">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-ivory/90">"{r.text}"</p>
              <footer className="mt-6 flex items-center gap-3 border-t border-white/10 pt-4">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-primary/20 font-semibold text-primary">
                  {r.name[0]}
                </div>
                <div>
                  <div className="text-sm font-semibold text-ivory">{r.name}</div>
                  <div className="text-xs text-muted-foreground">Verified Diner</div>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}


/* -------------------- CONTACT -------------------- */
function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="glass-strong overflow-hidden rounded-3xl">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 sm:p-12">
              <p className="font-accent text-sm uppercase tracking-[0.3em] text-primary">Visit Us</p>
              <h2 className="mt-3 text-4xl font-bold text-ivory sm:text-5xl">
                Come share the <span className="text-gradient-ember">rhythm</span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                Reserve a table, order online, or simply walk in. We can't wait to host you.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/15 text-primary"><MapPin size={18} /></div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">Address</div>
                    <div className="text-sm font-medium text-ivory">Qawwali Multi Cuisine<br />{LINKS.address}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/15 text-primary"><Phone size={18} /></div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">Phone</div>
                    <a href={`tel:${LINKS.phone}`} className="text-sm font-medium text-ivory hover:text-primary">{LINKS.phone}</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/15 text-primary"><Instagram size={18} /></div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">Instagram</div>
                    <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-ivory hover:text-primary">@qawwali_multi_cuisine</a>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                <a href={`tel:${LINKS.phone}`} className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] hover:brightness-110">
                  <Phone size={14} /> Call Now
                </a>
                <a href={LINKS.maps} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-sm font-medium text-ivory hover:border-primary hover:text-primary">
                  <MapPin size={14} /> Get Directions
                </a>
                <a href={LINKS.findTable} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-sm font-medium text-ivory hover:border-primary hover:text-primary">
                  Find a Table
                </a>
                <a href={LINKS.order} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-sm font-medium text-ivory hover:border-primary hover:text-primary">
                  Order Online
                </a>
                <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-sm font-medium text-ivory hover:border-primary hover:text-primary">
                  <Instagram size={14} /> Instagram
                </a>
              </div>
            </div>

            <div className="relative min-h-[360px] bg-card">
              <iframe
                title="Qawwali Multi Cuisine on Google Maps"
                src="https://www.google.com/maps?q=Qawwali+Multi+Cuisine+Thottumugham+Aluva+Kerala&output=embed"
                className="absolute inset-0 h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- FOOTER -------------------- */
function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <img src={logoAsset} alt="Qawwali Multi Cuisine logo" width={48} height={48} className="h-12 w-12 rounded-full ring-1 ring-white/10" />
              <div>
                <div className="font-display text-xl font-bold text-ivory">Qawwali Multi Cuisine</div>
                <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">The Rhythm of Taste</div>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              Premium multi-cuisine restaurant in Thottumugham, Aluva — serving signature mandi,
              Arabic specialities, Indian classics, fresh shakes & desserts.
            </p>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-ivory">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {["About", "Menu", "Signature", "Gallery", "Reviews", "Contact"].map((l) => (
                <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-primary">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-ivory">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>{LINKS.address}</li>
              <li><a href={`tel:${LINKS.phone}`} className="hover:text-primary">{LINKS.phone}</a></li>
              <li><a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-primary">Instagram</a></li>
              <li><a href={LINKS.maps} target="_blank" rel="noopener noreferrer" className="hover:text-primary">Google Maps</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">© 2026 Qawwali Multi Cuisine. All rights reserved.</p>
          <p className="text-xs text-muted-foreground">Crafted with passion in Aluva, Kerala.</p>
        </div>
      </div>
    </footer>
  );
}
