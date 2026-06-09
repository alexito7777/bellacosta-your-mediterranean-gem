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
  Ship,
  Landmark,
} from "lucide-react";

import heroImg from "@/assets/hero-bellacosta.jpg";
import escutImg from "@/assets/escut-real.png.asset.json";
import banderaImg from "@/assets/bandera-real.png.asset.json";
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
  const elements = [
    { sym: "Gavina", meaning: "Llibertat i aire fresc" },
    { sym: "Pi", meaning: "Natura i vida" },
    { sym: "Torre", meaning: "Protecció i història" },
    { sym: "Vaixell", meaning: "Mar i aventura" },
    { sym: "Senyera", meaning: "Orgull català" },
    { sym: "Corona", meaning: "Dignitat i reconeixement" },
  ];
  return (
    <section id="escut" className="relative py-24 md:py-32 bg-primary text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(circle_at_20%_20%,white_1px,transparent_1px)] [background-size:32px_32px]" />
      <div className="container-bell relative">
        <div className="text-center">
          <p className="eyebrow text-secondary">Apartat 3</p>
          <h2 className="mt-4 font-display text-5xl md:text-6xl font-semibold">L'Escut i la Bandera</h2>
          <div className="mt-6 h-px w-24 mx-auto bg-secondary/60" />
          <p className="mt-6 max-w-2xl mx-auto text-white/80">
            Els símbols oficials de Bellacosta expressen la nostra identitat mediterrània,
            la història mariner i l'orgull català.
          </p>
        </div>

        {/* Escut */}
        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1fr] items-center">
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-10 rounded-full bg-secondary/20 blur-3xl" />
              <img
                src={escutImg.url}
                alt="Escut heràldic oficial de Bellacosta"
                loading="lazy"
                className="relative w-72 sm:w-80 md:w-96 drop-shadow-2xl"
              />
            </div>
          </div>

          <div>
            <h3 className="font-display text-3xl font-semibold">L'Escut</h3>
            <p className="mt-4 text-white/85 leading-relaxed">
              Al mig hi ha un rombe amb la <strong>Senyera</strong>, les quatre barres vermelles sobre fons groc.
              Això vol dir que som catalans i que estimem la nostra terra.
            </p>
            <ul className="mt-6 space-y-3 text-white/85">
              <li><strong>A dalt</strong>, una <strong>gavina</strong>, que representa la llibertat i el cel.</li>
              <li><strong>A l'esquerra</strong>, un <strong>pi</strong>, que simbolitza la natura i que som una ciutat verda i mediterrània.</li>
              <li><strong>A la dreta</strong>, una <strong>torre de guaita</strong>, que recorda la protecció i la història de la ciutat, com les torres que vigilaven la costa.</li>
              <li><strong>A baix</strong>, un <strong>vaixell</strong>, que representa el mar, el comerç i la vida marinera.</li>
            </ul>
          </div>
        </div>

        {/* Bandera */}
        <div className="mt-20 grid gap-12 lg:grid-cols-[1fr_1fr] items-center">
          <div className="order-2 lg:order-1">
            <h3 className="font-display text-3xl font-semibold">La Bandera</h3>
            <p className="mt-4 text-white/85 leading-relaxed">La bandera té tres franges:</p>
            <ul className="mt-4 space-y-2 text-white/85">
              <li><span className="inline-block w-3 h-3 rounded-sm bg-sky-400 mr-2 align-middle" /><strong>Blava</strong> a dalt, pel cel.</li>
              <li><span className="inline-block w-3 h-3 rounded-sm bg-yellow-400 mr-2 align-middle" /><strong>Groga</strong> al mig, per la llum del sol.</li>
              <li><span className="inline-block w-3 h-3 rounded-sm bg-teal-400 mr-2 align-middle" /><strong>Turquesa</strong> a baix, pel mar.</li>
            </ul>
            <p className="mt-4 text-white/85 leading-relaxed">
              Al centre hi ha l'escut amb tots els símbols. Els colors són alegres i mediterranis, com la nostra ciutat.
            </p>

            <h3 className="mt-8 font-display text-2xl font-semibold">La Corona</h3>
            <p className="mt-3 text-white/85 leading-relaxed">
              A sobre de l'escut hi ha una corona amb <strong>cinc florons</strong>, que vol dir honor i importància.
              Representa que la ciutat té història i orgull.
            </p>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-10 rounded-full bg-secondary/20 blur-3xl" />
              <img
                src={banderaImg.url}
                alt="Bandera oficial de Bellacosta"
                loading="lazy"
                className="relative w-80 sm:w-96 md:w-[28rem] rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Taula significat general */}
        <div className="mt-20">
          <h3 className="font-display text-3xl font-semibold text-center">El significat general</h3>
          <p className="mt-3 text-center text-white/75">Cada element diu alguna cosa sobre nosaltres.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {elements.map((el) => (
              <div key={el.sym} className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
                <div className="font-display text-xl font-semibold text-secondary">{el.sym}</div>
                <p className="mt-1 text-sm text-white/80">{el.meaning}</p>
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
  const sectors = [
    {
      icon: Fish,
      title: "Sector Primari",
      points: [
        "Aprofitant les planes fèrtils i els aiguamolls propers.",
        "Activitat destacada: Agricultura de qualitat i productes locals (vi, oli, fruita, arròs en zones humides).",
        "Pesca artesanal i aqüicultura a la badia.",
        "Cooperatives agrícoles i cellers de vins de l'Empordà (Garnatxa, Carinyena).",
        "Granges ecològiques i producció d'hortalisses.",
        "Flota pesquera petita a Roses i empreses d'aqüicultura.",
        "Mercats setmanals de productes km0.",
      ],
    },
    {
      icon: Briefcase,
      title: "Sector Secundari",
      points: [
        "Indústria lleugera relacionada amb el turisme i l'alimentació.",
        "Construcció i manteniment d'infraestructures turístiques (sostenible).",
        "Petites fàbriques d'elaboració d'aliments (conserves de peix, embotits).",
        "Empreses de construcció ecològica i rehabilitació d'habitatges turístics.",
        "Tallers de reparació nàutica i manteniment de vaixells.",
        "Altres serveis (administració, sanitat, educació, tecnologia) (10-13%).",
        "Serveis públics i privats per a residents i turistes.",
        "Petita presència de tecnologies verdes (energies renovables, gestió d'aigua).",
      ],
    },
    {
      icon: Store,
      title: "Sector Terciari",
      points: [
        "És el motor econòmic principal gràcies a la ubicació costanera i la marina d'Empuriabrava (una de les més grans d'Europa).",
        "Subsectors destacats:",
        "Allotjament (hotels, apartaments turístics, càmpings i residències de luxe).",
        "Restauració i oci.",
        "Nàutica i esports aquàtics.",
        "Comerç minorista orientat al turista.",
      ],
    },
    {
      icon: Sparkles,
      title: "Empreses i Comerços",
      points: [
        "Hotels i resorts com Hotel Marina Palace o cadenes internacionals.",
        "Xarxes de xalets i apartaments turístics de lloguer (Airbnb i gestors locals).",
        "Ports esportius i empreses de lloguer de vaixells, kitesurf, paddle i immersió.",
        "Restaurants de peix fresc i cuina empordanesa (ex: arrossos, anxoves de l'Escala, vins DO Empordà).",
        "Botigues de souvenirs, roba de platja, equipament nàutic i supermercats turístics.",
      ],
    },
  ];

  return (
    <section id="economia" className="relative py-24 md:py-32">
      <div className="container-bell">
        <SectionHeader
          eyebrow="Apartat 4"
          title="Activitat Econòmica"
          subtitle="Els pilars que sostenen i fan créixer la vida econòmica de Bellacosta."
        />
        <div className="mt-12 overflow-hidden rounded-2xl border border-border shadow-lg">
          <img
            src={economiaImg}
            alt="Port pesquer de Bellacosta al capvespre"
            width={1600}
            height={700}
            loading="lazy"
            className="aspect-[21/9] w-full object-cover"
          />
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {sectors.map((s) => {
            const Icon = s.icon;
            return (
              <article
                key={s.title}
                className="rounded-2xl border border-border bg-card p-7 shadow-sm transition hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-2xl text-foreground">{s.title}</h3>
                </div>
                <ul className="mt-5 space-y-2 text-sm leading-relaxed text-muted-foreground">
                  {s.points.map((p, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/60" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Turisme ───────────────────────── */

function Turisme() {
  const activities = [
    {
      icon: Waves,
      title: "Ruta amb moto d'aigua per la badia",
      desc: "Una de les activitats més emocionants que es poden fer és una ruta amb moto d'aigua per la badia de Bellacosta. Durant el recorregut es poden veure cales amagades, precipicis i les aigües cristal·lines de la Costa Brava. És una activitat plena d'adrenalina on la sensació de velocitat sobre el mar i les vistes fan que sigui una experiència única. A més, moltes rutes permeten parar-se per banyar-se o fer fotografies del paisatge.",
    },
    {
      icon: Ship,
      title: "Mini ferri fins a les Illes Medes",
      desc: "Una altra activitat molt popular és agafar un mini ferri fins a les Illes Medes. Aquest ferri és especial perquè té una part inferior de vidre que permet observar el fons marí i els peixos mentre es navega. Durant el trajecte es poden veure bancs de peixos, plantes marines i fins i tot alguna estrella de mar. És una activitat perfecta per a famílies i per a persones que volen descobrir el món submarí sense necessitat de bussejar.",
    },
    {
      icon: Fish,
      title: "Sortida de submarinisme a les Illes Medes",
      desc: "Les Illes Medes són un dels millors llocs de tota la Mediterrània per practicar submarinisme. Les seves aigües protegides tenen una gran biodiversitat marina. Els submarinistes poden veure peixos grans, pops, coralls, estrelles de mar i coves submarines impressionants. Les excursions solen sortir des del port de L'Estartit o directament des de Bellacosta. És una experiència increïble tant per a experts com per a principiants.",
    },
    {
      icon: Sun,
      title: "Cala Montgó",
      desc: "La Cala Montgó és una de les platges més famoses de la zona. Té sorra fina, aigües tranquil·les i està envoltada de natura i tranquil·litat. És ideal per passar el dia en família, prendre el sol o fer esport com el pàdel surf i el caiac. A l'estiu hi ha molt ambient i diversos restaurants prop de la platja.",
    },
    {
      icon: Landmark,
      title: "Ruïnes d'Empúries",
      desc: "Les Ruïnes d'Empúries són un dels llocs històrics més importants de Catalunya. En aquest espai arqueològic es poden veure restes de les antigues civilitzacions gregues i romanes. Passejant per les ruïnes es poden veure antics temples, mosaics i carrers de fa milers d'anys. A més, el lloc té unes vistes espectaculars al mar Mediterrani.",
    },
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
          subtitle="Descobreix Bellacosta i la Costa Brava — un dels pobles més bonics de la costa catalana."
          center
        />

        <div className="mt-12 max-w-3xl mx-auto text-center text-muted-foreground leading-relaxed">
          <p>
            Bellacosta és conegut per les seves platges, les seves aigües cristalines, la gastronomia marinera i les activitats aquàtiques. A prop del poble també hi trobem les magnífiques Illes Medes, un espai ple de vida marina.
          </p>
          <p className="mt-4">
            A continuació, us presentem alguns dels punts turístics i activitats més espectaculars de la zona.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((a) => {
            const Icon = a.icon;
            return (
              <div
                key={a.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all hover:border-secondary hover:shadow-lg hover:-translate-y-1"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/15 text-primary group-hover:bg-secondary group-hover:text-primary-foreground transition-colors">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground leading-tight">
                  {a.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {a.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 max-w-3xl mx-auto rounded-2xl border border-border bg-card p-8 md:p-10 text-center">
          <h3 className="font-display text-2xl font-semibold text-primary">Conclusió</h3>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Bellacosta i les Illes Medes són un destí perfecte per gaudir del mar, la natura i la història. Les activitats aquàtiques, les platges espectaculars i els paisatges mediterranis fan que sigui un lloc ideal per passar unes vacances inoblidables.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Transport ───────────────────────── */

import transportImg from "@/assets/transport.jpg";

function Transport() {
  return (
    <section id="transport" className="relative py-24 md:py-32">
      <div className="container-bell">
        <SectionHeader
          eyebrow="Apartat 6"
          title="Sistema de transport Bellacosta"
          subtitle="Una ciutat connectada, respectuosa amb el medi ambient."
          center
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-2 items-center">
          <div className="rounded-3xl overflow-hidden shadow-elegant">
            <img
              src={transportImg}
              alt="Autobús elèctic de Bellacosta circulant per la costa"
              className="w-full h-full object-cover"
              loading="lazy"
              width={800}
              height={600}
            />
          </div>

          <div className="space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Per Bellacosta hem creat una sèrie de vehicles de transport públics que fan que la nostra ciutat sigui ecològica i que no contamini.
            </p>

            <div className="rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/10 p-8 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Bus className="w-6 h-6" />
                </div>
                <h3 className="font-display text-2xl text-foreground">Autobusos elèctrics</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Els nous autobusos són elèctrics, és a dir que no fan soroll i no contaminen. Ajuden a l'ecosistema sense haver d'utilitzar combustibles. El que fa que a la nostra ciutat no hi hagi gairebé benzineres.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 text-emerald-700 px-4 py-2 text-sm font-medium">
                  <Leaf className="w-4 h-4" />
                  Zero emissions
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 text-sky-700 px-4 py-2 text-sm font-medium">
                  <Waves className="w-4 h-4" />
                  Silenciosos
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 text-amber-700 px-4 py-2 text-sm font-medium">
                  <Sun className="w-4 h-4" />
                  Energia neta
                </span>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-6 space-y-3">
                <Car className="w-6 h-6 text-primary" />
                <h4 className="font-display text-lg">Mobilitat sostenible</h4>
                <p className="text-sm text-muted-foreground">Carrils bici i vianants prioritaris per una ciutat amable.</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6 space-y-3">
                <Anchor className="w-6 h-6 text-primary" />
                <h4 className="font-display text-lg">Port verd</h4>
                <p className="text-sm text-muted-foreground">Connexions marítimes amb baixa petjada de carboni.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Legislació ───────────────────────── */

function Legislacio() {
  const articles = [
    {
      num: "1",
      title: "Dret als mínims universal per la vida",
      text: "Tota persona té dret a l'educació, sanitat, una vivenda, un treball i tot el necessari per al seu desenvolupament durant totes les edats (nens, adults i persones de la tercera edat).",
    },
    {
      num: "2",
      title: "Llibertat d'Expressió i de Pensament",
      text: "Es garanteix la llibertat absoluta d'expressió, incloent-hi l'humor, la crítica i les idees incòmodes, sempre que no constitueixin amenaces directes de violència. Ningú no pot ser perseguit per les seves opinions si no fa mal als altres.",
    },
    {
      num: "3",
      title: "Igualtat davant la Llei",
      text: "Tots els individus són iguals davant la llei, sense distinció de sexe, origen, ideologia o condició. Es rebutja qualsevol discriminació positiva o negativa basada en identitats de grup.",
    },
    {
      num: "4",
      title: "Deures Fonamentals",
      text: "Tot membre del territori té el deure de: actuar amb responsabilitat dels seus actes, respectar als altres i contribuir positivament segons les seves capacitats.",
    },
    {
      num: "5",
      title: "Seguretat i Protecció",
      text: "La seguretat és un dret fonamental. La comunitat té dret a seguretat davant amenaces internes i externes. Es promou la proporcionalitat en l'ús de la força i es rebutja la violència gratuïta.",
    },
    {
      num: "6",
      title: "Civisme i Respecte Mutu",
      text: "Es fomenta el civisme, el respecte a la propietat aliena i el bon tracte entre persones. L'assetjament, la intimidació i la cancel·lació sistemàtica es consideren infraccions greus.",
    },
    {
      num: "7",
      title: "Economia i Lliure Iniciativa",
      text: "Es reconeix el dret a la propietat privada i a la lliure empresa. L'economia ha de ser el més lliure possible, amb intervenció mínima de qualsevol autoritat central. La innovació i la competència honesta són valors protegits.",
    },
    {
      num: "8",
      title: "Hisenda i Fiscalitat",
      text: "Els impostos han de ser justos, transparents i proporcionals. Es prohibeix l'ús de la hisenda com a eina de control social o redistribució ideològica. Tot ciutadà té dret a saber exactament on van els seus diners i exigir-ne rendició de comptes.",
    },
    {
      num: "9",
      title: "Llengua i Cultura",
      text: "El català, el castellà i l'anglès són les llengües de treball principals. Es promou el multilingüisme i el respecte per les llengües maternes. No s'imposarà cap llengua per motius ideològics, però es valorarà l'esforç d'integració lingüística.",
    },
    {
      num: "10",
      title: "Principi de Realitat i Millora Contínua",
      text: "Tota llei i decisió ha d'estar fonamentada en la realitat observable i en l'evidència disponible. Els polítics es comprometen a revisar periòdicament les seves regles per corregir errors i adaptar-se a noves circumstàncies, sempre prioritzant la veritat per sobre de la comoditat.",
    },
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
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {articles.map((a) => (
            <div
              key={a.num}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all hover:border-secondary hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-display text-lg font-semibold">
                  {a.num}
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground leading-tight">
                  {a.title}
                </h3>
              </div>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                {a.text}
              </p>
            </div>
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
