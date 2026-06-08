import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Mountain,
  Music2,
  Shield,
  Briefcase,
  Compass,
  Bus,
  Scale,
  Church,
  Mail,
  MapPin,
  Phone,
  Instagram,
  Facebook,
  Twitter,
  Play,
  ArrowRight,
  Anchor,
  Fish,
  Store,
  Sparkles,
  Sun,
  Waves,
  TreePine,
  Map as MapIcon,
  Car,
  Bike,
  Leaf,
  BookOpen,
  Building2,
  ScrollText,
  Flame,
  Heart,
} from "lucide-react";

import heroImg from "@/assets/hero-bellacosta.jpg";
import escutImg from "@/assets/escut-bellacosta.png";
import territoriImg from "@/assets/territori.jpg";
import economiaImg from "@/assets/economia.jpg";
import religioImg from "@/assets/religio.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bellacosta · La joia amagada de la Costa Mediterrània" },
      {
        name: "description",
        content:
          "Web oficial de Bellacosta. Descobreix el territori, l'himne, l'escut, l'economia, l'estratègia turística i el patrimoni d'un poble únic a la costa catalana.",
      },
    ],
  }),
  component: BellacostaHome,
});

const NAV_ITEMS = [
  { id: "inici", label: "Inici" },
  { id: "territori", label: "Territori" },
  { id: "himne", label: "Himne" },
  { id: "escut", label: "Escut" },
  { id: "economia", label: "Activitat Econòmica" },
  { id: "turisme", label: "Estratègia Turística" },
  { id: "transport", label: "Transport" },
  { id: "legislacio", label: "Legislació" },
  { id: "religio", label: "Religió" },
  { id: "contacte", label: "Contacte" },
];

function BellacostaHome() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopNav scrolled={scrolled} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

      <main>
        <Hero />
        <SobreBellacosta />
        <Territori />
        <Himne />
        <Escut />
        <Economia />
        <Turisme />
        <Transport />
        <Legislacio />
        <Religio />
        <Contacte />
      </main>

      <Footer />
    </div>
  );
}

/* ───────────────────────── Navigation ───────────────────────── */

function TopNav({
  scrolled,
  mobileOpen,
  setMobileOpen,
}: {
  scrolled: boolean;
  mobileOpen: boolean;
  setMobileOpen: (v: boolean) => void;
}) {
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-bell flex h-16 items-center justify-between md:h-20">
        <a href="#inici" className="flex items-center gap-2 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Waves className="h-4 w-4" />
          </div>
          <span
            className={`font-display text-xl font-semibold tracking-tight transition-colors ${
              scrolled ? "text-foreground" : "text-white"
            }`}
          >
            Bellacosta
          </span>
        </a>

        <nav className="hidden xl:flex items-center gap-1">
          {NAV_ITEMS.map((it) => (
            <a
              key={it.id}
              href={`#${it.id}`}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                scrolled
                  ? "text-foreground/75 hover:text-foreground hover:bg-muted"
                  : "text-white/85 hover:text-white hover:bg-white/10"
              }`}
            >
              {it.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contacte"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground hover:brightness-95 transition"
          >
            Visita'ns
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menú"
            className={`xl:hidden inline-flex flex-col items-center justify-center gap-1 h-10 w-10 rounded-md ${
              scrolled ? "text-foreground" : "text-white"
            }`}
          >
            <span className="h-0.5 w-5 bg-current" />
            <span className="h-0.5 w-5 bg-current" />
            <span className="h-0.5 w-5 bg-current" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="xl:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <nav className="container-bell flex flex-col py-3">
            {NAV_ITEMS.map((it) => (
              <a
                key={it.id}
                href={`#${it.id}`}
                onClick={() => setMobileOpen(false)}
                className="py-2.5 text-sm font-medium text-foreground/80 hover:text-foreground border-b border-border/50 last:border-0"
              >
                {it.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

/* ───────────────────────── Hero ───────────────────────── */

function Hero() {
  return (
    <section id="inici" className="relative h-screen min-h-[640px] w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Vista panoràmica de Bellacosta i la seva cala turquesa"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.2_0.07_250/0.55)] via-[oklch(0.2_0.07_250/0.35)] to-[oklch(0.18_0.05_250/0.75)]" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-medium tracking-[0.25em] uppercase text-white backdrop-blur-sm">
          <Sun className="h-3.5 w-3.5" /> Costa Catalana · Mediterrània
        </div>
        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] font-semibold leading-[0.95] text-white drop-shadow-lg">
          BELLACOSTA
        </h1>
        <p className="mt-6 max-w-2xl text-lg sm:text-xl md:text-2xl font-light italic text-white/90">
          La joia amagada de la Costa Mediterrània
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href="#sobre"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold tracking-wide text-primary shadow-xl hover:bg-sand transition"
          >
            Descobrir Bellacosta
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#territori"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/15 transition"
          >
            Explorar el territori
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 animate-bounce">
        <div className="h-10 w-6 rounded-full border-2 border-white/60 flex items-start justify-center pt-2">
          <div className="h-2 w-1 rounded-full bg-white" />
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Section helpers ───────────────────────── */

function SectionHeader({
  eyebrow,
  title,
  subtitle,
  center,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold text-primary">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{subtitle}</p>
      )}
      <div
        className={`mt-6 h-px w-24 bg-gradient-to-r from-secondary to-transparent ${
          center ? "mx-auto" : ""
        }`}
      />
    </div>
  );
}

function PlaceholderCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description?: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all hover:border-secondary hover:shadow-lg hover:-translate-y-1">
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/15 text-primary group-hover:bg-secondary group-hover:text-primary-foreground transition-colors">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="font-display text-xl font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
        {description ?? "Contingut en preparació."}
      </p>
      <div className="mt-5 h-px w-full bg-border" />
      <p className="mt-3 text-xs uppercase tracking-widest text-muted-foreground/60">
        Pròximament
      </p>
    </div>
  );
}

/* ───────────────────────── Sobre Bellacosta ───────────────────────── */

function SobreBellacosta() {
  return (
    <section id="sobre" className="relative py-24 md:py-32">
      <div className="container-bell grid gap-16 md:grid-cols-2 md:gap-20 items-center">
        <div>
          <SectionHeader
            eyebrow="Sobre Bellacosta"
            title="Benvinguts a Bellacosta"
            subtitle="Un racó privilegiat de la costa catalana on el mar es fa transparent, els pins toquen la sorra i la història es respira a cada cantó."
          />
          <div className="mt-8 space-y-5 text-base leading-relaxed text-foreground/80">
            <p>
              Bellacosta és un petit municipi mediterrani situat al nord-est de
              Catalunya, a la zona de l'Escala. Les seves cales amagades, els
              carrers empedrats i la llum daurada del capvespre han enamorat
              viatgers durant generacions.
            </p>
            <p>
              Aquest text és un text de mostra que serà substituït més endavant
              amb el contingut definitiu sobre la història, la cultura i la vida
              quotidiana del nostre poble.
            </p>
            <p>
              T'invitem a recórrer la nostra web i descobrir tot el que
              Bellacosta té per oferir-te: paisatge, gastronomia, patrimoni i
              una identitat única que no et deixarà indiferent.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              { k: "12 km", v: "de costa" },
              { k: "8.4k", v: "habitants" },
              { k: "320", v: "dies de sol" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-3xl font-semibold text-primary">
                  {s.k}
                </div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-secondary/30 to-sand-deep/30 blur-2xl" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border shadow-2xl">
            <img
              src={territoriImg}
              alt="Cala amagada de Bellacosta amb aigües turqueses"
              width={1280}
              height={800}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 rounded-2xl bg-card border border-border p-5 shadow-xl max-w-[220px]">
            <Sparkles className="h-5 w-5 text-secondary" />
            <p className="mt-2 font-display text-lg font-semibold text-foreground leading-tight">
              "Un petit paradís entre cales i pinedes."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Territori ───────────────────────── */

function Territori() {
  const items = [
    { icon: MapIcon, title: "Geografia", desc: "Relleu, costes i orografia del municipi." },
    { icon: Sun, title: "Clima", desc: "Mediterrani suau, amb estius llargs i hiverns temperats." },
    { icon: Compass, title: "Límits territorials", desc: "Municipis veïns i extensió del terme." },
    { icon: TreePine, title: "Medi natural", desc: "Espais protegits, flora i fauna autòctona." },
  ];
  return (
    <section id="territori" className="relative py-24 md:py-32 bg-sand/40">
      <div className="container-bell">
        <SectionHeader
          eyebrow="Apartat 1"
          title="Territori"
          subtitle="Un mosaic de cales, penya-segats, pinedes i pobles mariners que defineixen el caràcter de Bellacosta."
          center
        />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <PlaceholderCard key={it.title} {...it} description={it.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Himne ───────────────────────── */

function Himne() {
  return (
    <section id="himne" className="relative py-24 md:py-32">
      <div className="container-bell">
        <SectionHeader eyebrow="Apartat 2" title="L'Himne" center />

        <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1.2fr] items-start">
          {/* Player */}
          <div className="rounded-3xl bg-gradient-to-br from-primary to-[oklch(0.35_0.09_240)] p-8 text-primary-foreground shadow-2xl">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/70">
              <Music2 className="h-3.5 w-3.5" /> Himne oficial
            </div>
            <h3 className="mt-4 font-display text-3xl font-semibold">
              Cant a Bellacosta
            </h3>
            <p className="mt-1 text-sm text-white/70">Composició tradicional</p>

            <div className="mt-8 flex items-center gap-4">
              <button
                type="button"
                aria-label="Reproduir himne"
                className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-primary shadow-lg hover:scale-105 transition"
              >
                <Play className="h-5 w-5 fill-current ml-0.5" />
              </button>
              <div className="flex-1">
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/20">
                  <div className="h-full w-1/3 rounded-full bg-secondary" />
                </div>
                <div className="mt-2 flex justify-between text-xs text-white/60 font-mono">
                  <span>0:48</span>
                  <span>2:34</span>
                </div>
              </div>
            </div>

            <p className="mt-8 text-xs text-white/50">
              * Reproductor de mostra — l'àudio definitiu s'incorporarà properament.
            </p>
          </div>

          {/* Tabs */}
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              { icon: ScrollText, title: "Lletra" },
              { icon: BookOpen, title: "Significat" },
              { icon: Flame, title: "Història" },
              { icon: Music2, title: "Àudio" },
            ].map((it) => (
              <PlaceholderCard key={it.title} {...it} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Escut ───────────────────────── */

function Escut() {
  return (
    <section id="escut" className="relative py-24 md:py-32 bg-primary text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(circle_at_20%_20%,white_1px,transparent_1px)] [background-size:32px_32px]" />
      <div className="container-bell relative">
        <div className="text-center">
          <p className="eyebrow text-secondary">Apartat 3</p>
          <h2 className="mt-4 font-display text-5xl md:text-6xl font-semibold">L'Escut</h2>
          <div className="mt-6 h-px w-24 mx-auto bg-secondary/60" />
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1fr] items-center">
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-10 rounded-full bg-secondary/20 blur-3xl" />
              <img
                src={escutImg}
                alt="Escut heràldic oficial de Bellacosta"
                width={1024}
                height={1024}
                loading="lazy"
                className="relative w-72 sm:w-80 md:w-96 drop-shadow-2xl"
              />
            </div>
          </div>

          <div className="grid gap-5">
            {[
              { icon: Shield, title: "Descripció", desc: "Forma, colors i elements heràldics oficials." },
              { icon: Sparkles, title: "Simbologia", desc: "Significat dels emblemes que conformen l'escut." },
              { icon: Flame, title: "Història", desc: "Origen i evolució al llarg dels segles." },
            ].map((it) => (
              <div
                key={it.title}
                className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary">
                    <it.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold">{it.title}</h3>
                    <p className="mt-1 text-sm text-white/70">{it.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Economia ───────────────────────── */

function Economia() {
  const items = [
    { icon: Sun, title: "Turisme", desc: "Motor principal de l'economia local." },
    { icon: Fish, title: "Pesca", desc: "Tradició mariner i pesca artesanal." },
    { icon: Store, title: "Comerç", desc: "Petit comerç i mercats de proximitat." },
    { icon: Briefcase, title: "Serveis", desc: "Hostaleria, restauració i serveis professionals." },
    { icon: Sparkles, title: "Altres sectors", desc: "Artesania, agricultura i indústria local." },
  ];
  return (
    <section id="economia" className="relative py-24 md:py-32">
      <div className="container-bell grid gap-16 lg:grid-cols-[1fr_1.4fr] items-start">
        <div className="lg:sticky lg:top-28">
          <SectionHeader
            eyebrow="Apartat 4"
            title="Activitat Econòmica"
            subtitle="Els pilars que sostenen i fan créixer la vida econòmica de Bellacosta."
          />
          <div className="mt-8 overflow-hidden rounded-2xl border border-border shadow-lg">
            <img
              src={economiaImg}
              alt="Port pesquer de Bellacosta al capvespre"
              width={1280}
              height={800}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {items.map((it) => (
            <PlaceholderCard key={it.title} {...it} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Turisme ───────────────────────── */

function Turisme() {
  const items = [
    { icon: Compass, title: "Objectius", desc: "Línies estratègiques de creixement turístic sostenible." },
    { icon: Sparkles, title: "Projectes", desc: "Iniciatives en marxa per posar Bellacosta al mapa." },
    { icon: Heart, title: "Campanyes", desc: "Promoció nacional i internacional." },
    { icon: ArrowRight, title: "Futur", desc: "Visió 2030 per a una destinació de referència." },
  ];
  return (
    <section
      id="turisme"
      className="relative py-24 md:py-32 bg-gradient-to-br from-sand to-sand-deep/50"
    >
      <div className="container-bell">
        <SectionHeader
          eyebrow="Apartat 5"
          title="Estratègia Turística"
          subtitle="Un pla integral per fer de Bellacosta una destinació mediterrània premium, respectuosa amb el territori i la seva gent."
          center
        />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <PlaceholderCard key={it.title} {...it} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Transport ───────────────────────── */

function Transport() {
  const items = [
    { icon: Car, title: "Carreteres", desc: "Xarxa viària i accessos al municipi." },
    { icon: Bus, title: "Transport públic", desc: "Línies d'autobús i connexions ferroviàries." },
    { icon: Anchor, title: "Port", desc: "Instal·lacions portuàries i serveis nàutics." },
    { icon: Bike, title: "Bicicleta", desc: "Carrils bici i rutes cicloturistes." },
    { icon: Leaf, title: "Mobilitat sostenible", desc: "Iniciatives per a una mobilitat verda." },
  ];
  return (
    <section id="transport" className="relative py-24 md:py-32">
      <div className="container-bell">
        <SectionHeader
          eyebrow="Apartat 6"
          title="Sistemes de Transport"
          subtitle="Connectats amb el món, respectuosos amb l'entorn."
          center
        />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <PlaceholderCard key={it.title} {...it} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Legislació ───────────────────────── */

function Legislacio() {
  const items = [
    { icon: ScrollText, title: "Constitució local", desc: "El marc fonamental del municipi." },
    { icon: Scale, title: "Normatives", desc: "Ordenances vigents al terme municipal." },
    { icon: Building2, title: "Organització administrativa", desc: "Estructura institucional de Bellacosta." },
    { icon: BookOpen, title: "Reglaments", desc: "Reglaments municipals i procediments." },
  ];
  return (
    <section id="legislacio" className="relative py-24 md:py-32 bg-primary/[0.04]">
      <div className="container-bell">
        <SectionHeader
          eyebrow="Apartat 7"
          title="Legislació"
          subtitle="Transparència, normativa i organització institucional del municipi."
          center
        />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <PlaceholderCard key={it.title} {...it} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Religió ───────────────────────── */

function Religio() {
  const items = [
    { icon: Heart, title: "Creences", desc: "Tradició religiosa del municipi." },
    { icon: Flame, title: "Tradicions", desc: "Costums transmesos de generació en generació." },
    { icon: Sparkles, title: "Festivitats", desc: "Celebracions populars i festes majors." },
    { icon: Church, title: "Patrimoni religiós", desc: "Esglésies, ermites i béns patrimonials." },
  ];
  return (
    <section id="religio" className="relative py-24 md:py-32">
      <div className="container-bell grid gap-16 lg:grid-cols-2 items-center">
        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden rounded-3xl border border-border shadow-2xl">
            <img
              src={religioImg}
              alt="Campanar de l'església de Bellacosta al capvespre"
              width={1280}
              height={800}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div>
          <SectionHeader eyebrow="Apartat 8" title="Religió" subtitle="Espai dedicat al patrimoni espiritual i les tradicions del poble." />
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {items.map((it) => (
              <PlaceholderCard key={it.title} {...it} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Contacte ───────────────────────── */

function Contacte() {
  return (
    <section id="contacte" className="relative py-24 md:py-32 bg-sand/50">
      <div className="container-bell grid gap-12 lg:grid-cols-2 items-start">
        <div>
          <SectionHeader
            eyebrow="Contacte"
            title="Parlem"
            subtitle="Tens algun dubte o vols visitar-nos? Estem encantats d'atendre't."
          />
          <div className="mt-10 space-y-5">
            {[
              { icon: MapPin, label: "Plaça de la Vila, 1 · 17130 Bellacosta" },
              { icon: Phone, label: "+34 972 00 00 00" },
              { icon: Mail, label: "info@bellacosta.cat" },
            ].map((it) => (
              <div key={it.label} className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary/15 text-primary">
                  <it.icon className="h-5 w-5" />
                </div>
                <span className="text-foreground/90">{it.label}</span>
              </div>
            ))}
          </div>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="rounded-3xl border border-border bg-card p-8 shadow-lg"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Nom" placeholder="El teu nom" />
            <Field label="Correu" type="email" placeholder="tu@email.com" />
          </div>
          <div className="mt-5">
            <Field label="Assumpte" placeholder="De què vols parlar?" />
          </div>
          <div className="mt-5">
            <label className="block text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Missatge
            </label>
            <textarea
              rows={5}
              placeholder="Escriu aquí el teu missatge…"
              className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:brightness-110 transition"
          >
            Enviar missatge
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  type = "text",
  placeholder,
}: {
  label: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-xs font-medium uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}

/* ───────────────────────── Footer ───────────────────────── */

function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-bell py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-primary">
                <Waves className="h-5 w-5" />
              </div>
              <span className="font-display text-2xl font-semibold">Bellacosta</span>
            </div>
            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              Web oficial del municipi de Bellacosta, la joia amagada de la Costa Mediterrània.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Xarxa social"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/80 hover:bg-secondary hover:text-primary hover:border-secondary transition"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold">Explora</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {NAV_ITEMS.slice(0, 5).map((it) => (
                <li key={it.id}>
                  <a href={`#${it.id}`} className="hover:text-secondary transition">
                    {it.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold">Institucional</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {NAV_ITEMS.slice(5).map((it) => (
                <li key={it.id}>
                  <a href={`#${it.id}`} className="hover:text-secondary transition">
                    {it.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold">On som</h4>
            <div className="mt-4 aspect-[4/3] overflow-hidden rounded-xl border border-white/20 bg-white/5">
              <div className="h-full w-full bg-[linear-gradient(135deg,oklch(0.72_0.13_200/0.35),oklch(0.28_0.07_250/0.6)),repeating-linear-gradient(45deg,transparent_0_18px,oklch(1_0_0/0.06)_18px_19px)] flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-8 w-8 mx-auto text-secondary" />
                  <p className="mt-2 text-xs uppercase tracking-widest text-white/80">
                    Bellacosta, Costa Brava
                  </p>
                </div>
              </div>
            </div>
            <p className="mt-3 text-sm text-white/70">Plaça de la Vila, 1 · 17130</p>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© {new Date().getFullYear()} Bellacosta · Tots els drets reservats</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-white transition">Avís legal</a>
            <a href="#" className="hover:text-white transition">Privacitat</a>
            <a href="#" className="hover:text-white transition">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Suppress unused-import noise for icons referenced via lookup tables
void Mountain;
