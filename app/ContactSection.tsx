"use client";

import { FormEvent, useState } from "react";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

const GOOGLE_CALENDAR_BOOKING_LINK = "https://calendar.app.google/uAokYvSRgdH3Wk4D6";
const FORMSUBMIT_ENDPOINT = "https://formsubmit.co/ajax/contacto.hr4all@gmail.com";

export default function ContactSection() {
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactError, setContactError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const requiredFields = ["name", "company", "email", "need", "message"];
    const hasMissingField = requiredFields.some((field) => !String(formData.get(field) ?? "").trim());

    if (hasMissingField) {
      setContactSubmitted(false);
      setContactError("Completá todos los campos para continuar.");
      return;
    }

    setIsSubmitting(true);
    setContactError("");
    setContactSubmitted(false);

    try {
      const name = String(formData.get("name") ?? "").trim();
      const company = String(formData.get("company") ?? "").trim();
      const email = String(formData.get("email") ?? "").trim();
      const need = String(formData.get("need") ?? "").trim();
      const message = String(formData.get("message") ?? "").trim();

      const response = await fetch(FORMSUBMIT_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _captcha: "false",
          _replyto: email,
          _subject: `Nueva consulta HR4All - ${company}`,
          _template: "table",
          Nombre: name,
          Empresa: company,
          "Correo electronico": email,
          "Que necesita ordenar": need,
          Mensaje: message,
        }),
      });
      const responseBody = await response.json();

      if (!response.ok || responseBody.success !== "true") {
        throw new Error("contact-submit-failed");
      }

      setContactSubmitted(true);
    } catch {
      setContactError("No pudimos enviar tu consulta. Probá nuevamente o escribinos por email.");
    } finally {
      setIsSubmitting(false);
    }
  }
  return (
    <section id="contacto" className="py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.28em] text-forest">Contacto</p>
          <h2 className="mt-3 text-4xl font-black tracking-normal md:text-5xl">
            Hablemos de lo que hoy te está trabando
          </h2>
          <p className="mt-5 text-lg leading-8 text-ink/72">
            Puede ser un proceso desordenado, falta de seguimiento, sobrecarga operativa o
            simplemente la sensación de que RR.HH. depende demasiado de personas específicas.
            <br />
            <br />
            La primera conversación nos ayuda a entender dónde estás hoy y qué tiene más sentido
            ordenar primero.
          </p>
          <div className="mt-8 grid gap-4 text-sm font-bold text-ink/72">
            <p className="flex items-center gap-3">
              <MapPin className="text-forest" size={20} aria-hidden="true" />
              Buenos Aires, Argentina
            </p>
            <p className="flex items-center gap-3">
              <Phone className="text-forest" size={20} aria-hidden="true" />
              Atención remota para toda Argentina
            </p>
            <p className="flex items-center gap-3">
              <Mail className="text-forest" size={20} aria-hidden="true" />
              <a className="transition hover:text-forest" href="mailto:contacto@hr4all.com">
                contacto@hr4all.com
              </a>
            </p>
            <p className="flex items-center gap-3">
              <MessageCircle className="text-forest" size={20} aria-hidden="true" />
              <a
                className="transition hover:text-forest"
                href="https://www.instagram.com/hrforall.ar?igsh=MXFjOTFteXVhZHJ6aA=="
                rel="noreferrer"
                target="_blank"
              >
                Instagram: @hrforall.ar
              </a>
            </p>
          </div>
        </div>

        <form className="rounded-lg border border-navy/10 bg-cloud p-6 shadow-soft md:p-8" onSubmit={handleContactSubmit}>
          <div className="grid gap-5 md:grid-cols-2">
            <label className="text-sm font-black text-navy">
              Nombre
              <input
                className="mt-2 h-12 w-full rounded-md border border-navy/15 bg-white px-4 text-base outline-none transition focus:border-forest focus:ring-4 focus:ring-mint"
                name="name"
                required
                type="text"
                placeholder="Tu nombre"
              />
            </label>
            <label className="text-sm font-black text-navy">
              Empresa
              <input
                className="mt-2 h-12 w-full rounded-md border border-navy/15 bg-white px-4 text-base outline-none transition focus:border-forest focus:ring-4 focus:ring-mint"
                name="company"
                required
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
              required
              type="email"
              placeholder="nombre@empresa.com"
            />
          </label>
          <label className="mt-5 block text-sm font-black text-navy">
            ¿Qué necesitás ordenar?
            <select
              className="mt-2 h-12 w-full rounded-md border border-navy/15 bg-white px-4 text-base outline-none transition focus:border-forest focus:ring-4 focus:ring-mint"
              name="need"
              required
            >
              <option>Payroll y administración</option>
              <option>Procesos y políticas</option>
              <option>Estructura HR</option>
              <option>Capacitación</option>
              <option>No estoy seguro todavía</option>
            </select>
          </label>
          <label className="mt-5 block text-sm font-black text-navy">
            Mensaje
            <textarea
              className="mt-2 min-h-36 w-full resize-y rounded-md border border-navy/15 bg-white px-4 py-3 text-base outline-none transition focus:border-forest focus:ring-4 focus:ring-mint"
              name="message"
              required
              placeholder="Contanos brevemente qué está pasando hoy en tu operación o qué te gustaría ordenar."
            />
          </label>
          {contactError ? (
            <p className="mt-5 rounded-md border border-coral/25 bg-white px-4 py-3 text-sm font-bold text-coral">
              {contactError}
            </p>
          ) : null}
          {contactSubmitted ? (
            <div className="mt-5 rounded-md border border-forest/20 bg-white px-4 py-4">
              <p className="text-sm font-bold leading-6 text-ink/78">
                Gracias. Ya recibimos tu consulta. Ahora podés agendar una primera conversación para
                revisar tu situación.
              </p>
              <a
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-coral px-7 py-4 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]"
                href={GOOGLE_CALENDAR_BOOKING_LINK}
                rel="noreferrer"
                target="_blank"
              >
                Agendar reunión
                <MessageCircle size={18} aria-hidden="true" />
              </a>
            </div>
          ) : null}
          {!contactSubmitted ? (
            <button
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-coral px-7 py-4 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]"
              type="submit"
              disabled={isSubmitting}
            >
              Quiero ordenar mi operación
              <MessageCircle size={18} aria-hidden="true" />
            </button>
          ) : null}
        </form>
      </div>
    </section>
  );
}
