import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  Mail,
  MapPin,
  MessageCircle,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { getService, services } from "../../services";

const iconMap = {
  users: Users,
  target: Target,
  sparkles: Sparkles,
  clipboard: ClipboardList,
};

type ServicePageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const service = getService(params.slug);

  if (!service) {
    return {
      title: "Servicio no encontrado | HR4All",
    };
  }

  return {
    title: `${service.name} | HR4All`,
    description: service.description,
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getService(params.slug);

  if (!service) {
    notFound();
  }

  const Icon = iconMap[service.icon];
  const otherServices = services.filter((item) => item.slug !== service.slug);

  return (
    <main className="min-h-screen bg-white text-navy">
      <header className="border-b border-navy/10 bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-3" aria-label="HR4All inicio">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-mint text-sm font-black text-forest">
              HR
            </span>
            <span>
              <span className="block text-lg font-black leading-none tracking-normal">HR4All</span>
              <span className="text-xs font-semibold text-ink/60">People Operations</span>
            </span>
          </Link>
          <Link
            href="/#contacto"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-coral px-5 py-3 text-sm font-black text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-[#f05931]"
          >
            Agendar reunión
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </nav>
      </header>

      <section className="relative overflow-hidden bg-cloud">
        <div className="absolute inset-x-0 top-0 h-36 bg-mint/55" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <Link
            href="/#servicios"
            className="mb-8 inline-flex items-center gap-2 text-sm font-black text-forest transition hover:text-navy"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            Volver a servicios
          </Link>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_0.55fr] lg:items-end">
            <div>
              <span className="mb-6 grid h-14 w-14 place-items-center rounded-full bg-white text-forest shadow-[0_10px_30px_rgba(5,36,74,0.08)]">
                <Icon size={28} aria-hidden="true" />
              </span>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-coral">
                {service.name}
              </p>
              <h1 className="mt-4 max-w-4xl text-5xl font-black leading-[1.05] tracking-normal md:text-6xl">
                {service.title}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-ink/75">{service.description}</p>
            </div>
            <aside className="rounded-lg border border-navy/10 bg-white p-6 shadow-soft">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-forest">
                Enfoque
              </p>
              <p className="mt-4 text-base leading-7 text-ink/72">{service.focus}</p>
            </aside>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[1fr_0.75fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-forest">Alcance</p>
            <h2 className="mt-3 text-4xl font-black tracking-normal">
              {service.scopeTitle ?? "Qué podemos cubrir"}
            </h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {service.subservices.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-lg border border-navy/10 bg-white p-4 shadow-[0_10px_30px_rgba(5,36,74,0.04)]"
                >
                  <CheckCircle2 className="mt-0.5 shrink-0 text-forest" size={20} aria-hidden="true" />
                  <p className="text-sm font-bold leading-6 text-ink/78">{item}</p>
                </div>
              ))}
            </div>
            {service.scopeNote ? (
              <p className="mt-6 max-w-2xl text-base leading-7 text-ink/62">{service.scopeNote}</p>
            ) : null}
          </div>

          <div className="rounded-lg bg-navy p-6 text-white md:self-start md:p-7">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-mint">
              {service.detailTitle}
            </p>
            <div className="mt-6 grid gap-3">
              {service.detailItems.map((item) => (
                <div key={item} className="rounded-lg border border-white/12 bg-white/7 p-3.5">
                  <p className="font-black">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-navy/10 bg-cloud py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-coral">
                También puede interesarte
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-normal md:text-4xl">
                Otras soluciones HR4All
              </h2>
            </div>
            <Link href="/#servicios" className="text-sm font-black text-forest hover:text-navy">
              Ver todos los servicios
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {otherServices.map((item) => (
              <Link
                key={item.slug}
                href={`/servicios/${item.slug}`}
                className="group flex h-full flex-col rounded-lg border border-navy/10 bg-white p-5 transition hover:-translate-y-1 hover:border-forest/35 hover:shadow-soft"
              >
                <h3 className="text-lg font-black">{item.name}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/68">{item.summary}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-black text-coral">
                  Ver detalle
                  <ArrowRight size={16} aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-forest">Contacto</p>
            <h2 className="mt-3 text-4xl font-black tracking-normal">
              Revisemos si este servicio encaja con tu necesidad actual
            </h2>
            <p className="mt-5 text-lg leading-8 text-ink/72">
              Una primera conversación alcanza para entender el punto de partida y priorizar el
              próximo paso sin sobredimensionar la solución.
            </p>
            <div className="mt-8 grid gap-4 text-sm font-bold text-ink/72">
              <p className="flex items-center gap-3">
                <MapPin className="text-forest" size={20} aria-hidden="true" />
                Buenos Aires, Argentina
              </p>
              <p className="flex items-center gap-3">
                <Mail className="text-forest" size={20} aria-hidden="true" />
                contacto@hr4all.com
              </p>
            </div>
          </div>

          <form className="rounded-lg border border-navy/10 bg-cloud p-6 shadow-soft md:p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="text-sm font-black text-navy">
                Nombre
                <input
                  className="mt-2 h-12 w-full rounded-md border border-navy/15 bg-white px-4 text-base outline-none transition focus:border-forest focus:ring-4 focus:ring-mint"
                  name="name"
                  type="text"
                  placeholder="Tu nombre"
                />
              </label>
              <label className="text-sm font-black text-navy">
                Empresa
                <input
                  className="mt-2 h-12 w-full rounded-md border border-navy/15 bg-white px-4 text-base outline-none transition focus:border-forest focus:ring-4 focus:ring-mint"
                  name="company"
                  type="text"
                  placeholder="Nombre de la empresa"
                />
              </label>
            </div>
            <label className="mt-5 block text-sm font-black text-navy">
              Correo electrónico
              <input
                className="mt-2 h-12 w-full rounded-md border border-navy/15 bg-white px-4 text-base outline-none transition focus:border-forest focus:ring-4 focus:ring-mint"
                name="email"
                type="email"
                placeholder="nombre@empresa.com"
              />
            </label>
            <label className="mt-5 block text-sm font-black text-navy">
              Mensaje
              <textarea
                className="mt-2 min-h-36 w-full resize-y rounded-md border border-navy/15 bg-white px-4 py-3 text-base outline-none transition focus:border-forest focus:ring-4 focus:ring-mint"
                name="message"
                placeholder={`Me interesa ${service.name.toLowerCase()}`}
              />
            </label>
            <button
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-coral px-7 py-4 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#f05931]"
              type="submit"
            >
              Enviar consulta
              <MessageCircle size={18} aria-hidden="true" />
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
