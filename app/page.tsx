import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ClipboardList,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import ContactSection from "./ContactSection";
import { services } from "./services";

const iconMap = {
  users: Users,
  target: Target,
  sparkles: Sparkles,
  clipboard: ClipboardList,
};

const reasons = [
  "Experiencia operativa real en RR.HH.",
  "Procesos simples y sostenibles para PyMEs",
  "Acompañamiento cercano y práctico",
  "People Operations aplicado a la realidad del negocio",
];

const steps = [
  {
    title: "Entendemos",
    text: "Entendemos cómo trabaja hoy la empresa: procesos, roles, urgencias, herramientas y puntos de fricción.",
  },
  {
    title: "Priorizamos",
    text: "Definimos qué ordenar primero para lograr impacto operativo sin abrir más frentes de los necesarios.",
  },
  {
    title: "Implementamos",
    text: "Creamos procesos, documentación, rutinas e indicadores con seguimiento práctico.",
  },
  {
    title: "Acompañamos",
    text: "Medimos, corregimos y ayudamos a sostener una operación más clara, repetible y escalable.",
  },
];

const heroStats = [
  { label: "Operación HR ordenada", icon: ClipboardList },
  { label: "Procesos repetibles", icon: BarChart3 },
  { label: "Mejores decisiones", icon: ShieldCheck },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-navy">
      <header className="sticky top-0 z-50 border-b border-navy/10 bg-white/90 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-3" aria-label="HR4All inicio">
            <img
              src="/logo-hr4all.png"
              alt="HR4All - People + Operations"
              className="h-10 w-auto max-w-[150px] object-contain sm:h-12 sm:max-w-[190px]"
            />
          </Link>
          <div className="hidden items-center gap-8 text-sm font-bold text-ink/70 md:flex">
            <a className="transition hover:text-forest" href="#servicios">Soluciones</a>
            <a className="transition hover:text-forest" href="#proceso">Proceso</a>
            <a className="transition hover:text-forest" href="#por-que">Por qué HR4All</a>
            <a className="transition hover:text-forest" href="#contacto">Contacto</a>
          </div>
          <a
            href="#contacto"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-coral px-5 py-3 text-sm font-black text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]"
          >
            Agendar reunión
            <ArrowRight size={16} aria-hidden="true" />
          </a>
        </nav>
      </header>

      <section id="inicio" className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-40 bg-mint/45" aria-hidden="true" />
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1fr_0.95fr] lg:px-8 lg:py-24">
          <div className="relative z-10 flex flex-col justify-center">
            <p className="mb-6 max-w-2xl text-base font-black leading-6 text-coral md:text-lg">
              RR.HH. pensado para empresas que necesitan procesos claros
            </p>
            <h1 className="max-w-4xl text-5xl font-black leading-[0.98] tracking-normal text-navy md:text-6xl lg:text-7xl">
              Ordenamos la operación para que tu empresa pueda crecer
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/75">
              Diseñamos, implementamos y acompañamos procesos de RR.HH. que se usan en la práctica:
              liquidación de sueldos, cargas sociales e impuestos, búsqueda y selección de personal,
              procesos de incorporación, desempeño y desarrollo, creación y revisión de políticas
              internas, indicadores y métricas de gestión, estructuras salariales y compensaciones,
              y administración de beneficios corporativos.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-coral px-7 py-4 text-sm font-black text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]"
              >
                Agendá una reunión
                <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-coral px-7 py-4 text-sm font-black text-coral transition hover:bg-coral hover:text-white"
              >
                Ver soluciones
              </a>
            </div>
            <div className="mt-12 grid max-w-2xl gap-5 sm:grid-cols-3">
              {heroStats.map(({ label, icon: Icon }) => (
                <div key={label} className="flex items-start gap-3">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-mint text-forest">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <p className="text-sm font-extrabold leading-5 text-navy">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10">
            <div className="relative min-h-[520px] overflow-hidden rounded-[32px] bg-navy shadow-soft">
              <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(37,99,255,0.88),rgba(6,26,61,0.96))]" />
              <div className="absolute inset-x-8 top-8 h-64 rounded-[28px] bg-white/14" />
              <div className="relative flex h-full min-h-[520px] flex-col justify-end p-8 text-white md:p-10">
                <div className="mb-8 grid grid-cols-3 gap-3">
                  <div className="h-36 rounded-3xl bg-white/90 p-4 text-navy">
                    <Users className="mb-7 text-forest" size={28} />
                    <p className="text-xs font-black uppercase text-ink/60">Personas</p>
                    <p className="mt-1 text-xl font-black leading-tight">Roles claros</p>
                  </div>
                  <div className="mt-12 h-36 rounded-3xl bg-mint p-4 text-navy">
                    <BarChart3 className="mb-7 text-forest" size={28} />
                    <p className="text-xs font-black uppercase text-ink/60">Procesos</p>
                    <p className="mt-1 text-xl font-black leading-tight">Gestión ordenada</p>
                  </div>
                  <div className="h-36 rounded-3xl bg-coral p-4 text-white">
                    <ShieldCheck className="mb-7" size={28} />
                    <p className="text-xs font-black uppercase text-white/75">Seguimiento</p>
                    <p className="mt-1 text-xl font-black leading-tight">Indicadores activos</p>
                  </div>
                </div>
                <p className="text-sm font-black uppercase tracking-[0.24em] text-mint">
                  Nuestra forma de trabajar
                </p>
                <h2 className="mt-4 text-4xl font-black leading-tight">Menos improvisación, más gestión</h2>
                <p className="mt-4 max-w-md text-base leading-7 text-white/78">
                  Transformamos tareas, procesos y responsabilidades en una operación más clara,
                  ordenada y fácil de gestionar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="border-y border-navy/10 bg-cloud py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-forest">
                Cómo podemos ayudarte
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-normal md:text-5xl">
                Soluciones concretas para ordenar RR.HH.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-ink/70">
              Cada solución se adapta a la etapa, estructura y necesidades reales de tu empresa.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = iconMap[service.icon];

              return (
                <Link
                  key={service.slug}
                  href={`/servicios/${service.slug}`}
                  className="group flex h-full flex-col rounded-lg border border-navy/10 bg-white p-6 shadow-[0_10px_30px_rgba(5,36,74,0.05)] transition duration-300 hover:-translate-y-1 hover:border-forest/35 hover:shadow-soft focus:outline-none focus:ring-4 focus:ring-mint"
                >
                  <span className="mb-8 grid h-12 w-12 place-items-center rounded-full bg-mint text-forest transition group-hover:bg-forest group-hover:text-white">
                    <Icon size={24} aria-hidden="true" />
                  </span>
                  <h3 className="text-xl font-black">{service.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-ink/68">{service.summary}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-black text-coral">
                    Ver detalle
                    <ArrowRight size={16} aria-hidden="true" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section id="proceso" className="bg-navy py-16 text-white lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-mint">Proceso</p>
            <h2 className="mt-3 text-4xl font-black tracking-normal md:text-5xl">
              Un método claro para pasar del desorden a la mejora continua
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <article key={step.title} className="rounded-lg border border-white/12 bg-white/7 p-6">
                <span className="text-sm font-black text-coral">0{index + 1}</span>
                <h3 className="mt-6 text-2xl font-black">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/72">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="por-que" className="py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-coral">Por qué HR4All</p>
            <h2 className="mt-3 text-4xl font-black tracking-normal md:text-5xl">
              Menos teoría. Más gestión real.
            </h2>
            <p className="mt-5 text-lg leading-8 text-ink/72">
              Trabajamos cerca de dueños, líderes y equipos administrativos para ordenar procesos,
              dar seguimiento y transformar la gestión diaria en una operación más clara y
              sostenible.
            </p>
          </div>
          <div className="grid gap-4">
            {reasons.map((reason) => (
              <div
                key={reason}
                className="flex gap-4 rounded-lg border border-navy/10 bg-white p-5 shadow-[0_10px_30px_rgba(5,36,74,0.05)]"
              >
                <CheckCircle2 className="mt-1 shrink-0 text-forest" size={24} aria-hidden="true" />
                <p className="text-base font-bold leading-7 text-ink/78">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />

      <footer className="border-t border-navy/10 bg-cloud">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 text-sm text-ink/65 md:flex-row md:items-center md:justify-between lg:px-8">
          <p className="font-black text-navy">HR4All</p>
          <p>© 2026 HR4All. Todos los derechos reservados.</p>
        </div>
      </footer>
    </main>
  );
}
