import { NextResponse } from "next/server";

const destinationEmail = "contacto.hr4all@gmail.com";
const formSubmitEndpoint = `https://formsubmit.co/ajax/${destinationEmail}`;
const requiredFields = ["name", "company", "email", "need", "message"] as const;

type ContactPayload = Record<(typeof requiredFields)[number], string>;

function cleanValue(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isSuccessfulFormSubmitResponse(responseBody: string) {
  try {
    const parsed = JSON.parse(responseBody) as { success?: boolean | string };
    return parsed.success === true || parsed.success === "true";
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const payload = requiredFields.reduce((values, field) => {
      values[field] = cleanValue(body[field]);
      return values;
    }, {} as ContactPayload);

    const hasMissingField = requiredFields.some((field) => !payload[field]);

    if (hasMissingField) {
      return NextResponse.json({ error: "Faltan campos obligatorios." }, { status: 400 });
    }

    const origin = request.headers.get("origin") ?? "https://hr4all-website.vercel.app";
    const referer = request.headers.get("referer") ?? `${origin}/`;

    const formSubmitResponse = await fetch(formSubmitEndpoint, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Origin: origin,
        Referer: referer,
      },
      body: JSON.stringify({
        _captcha: "false",
        _replyto: payload.email,
        _subject: `Nueva consulta HR4All - ${payload.company}`,
        _template: "table",
        Nombre: payload.name,
        Empresa: payload.company,
        "Correo electronico": payload.email,
        "Que necesita ordenar": payload.need,
        Mensaje: payload.message,
      }),
    });

    const formSubmitBody = await formSubmitResponse.text();

    if (!formSubmitResponse.ok || !isSuccessfulFormSubmitResponse(formSubmitBody)) {
      return NextResponse.json(
        { error: "No se pudo enviar la consulta." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "No se pudo procesar la consulta." },
      { status: 500 },
    );
  }
}