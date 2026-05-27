export type ServiceSlug =
  | "outsourcing-rrhh"
  | "consultoria-estrategica"
  | "capacitacion"
  | "procesos-politicas";

export type Service = {
  slug: ServiceSlug;
  name: string;
  title: string;
  description: string;
  summary: string;
  icon: "users" | "target" | "sparkles" | "clipboard";
  focus: string;
  scopeTitle?: string;
  scopeNote?: string;
  subservices: string[];
  detailTitle: string;
  detailItems: string[];
};

export const services: Service[] = [
  {
    slug: "outsourcing-rrhh",
    name: "Outsourcing de RR.HH.",
    title: "Externalizá procesos de RR.HH. sin sumar estructura interna",
    description:
      "Externalizamos tareas y procesos de RR.HH. para que puedas enfocarte en el negocio mientras nosotros sostenemos la operación.",
    summary:
      "Delegá procesos clave de RR.HH. en un equipo externo que se ocupa de ejecutar y sostener la operación de tu empresa, sin necesidad de sumar estructura interna: liquidación de sueldos, administración, búsquedas y compensaciones.",
    icon: "users",
    focus:
      "Nos ocupamos de sostener procesos clave de RR.HH. para que tu empresa pueda operar con más tranquilidad y menos urgencias.",
    scopeTitle: "Procesos que podemos tomar por vos",
    scopeNote: "¿No encontrás lo que necesitás? Contanos tu situación y vemos cómo ayudarte.",
    subservices: [
      "Payroll e impuestos",
      "Administración de personal",
      "Selección e incorporación",
      "Compensaciones y beneficios",
      "Soporte HR",
    ],
    detailTitle: "Problemas que ayudamos a resolver",
    detailItems: [
      "Procesos poco claros",
      "Tareas sin seguimiento",
      "Sobrecarga administrativa",
      "Dependencia de personas clave",
    ],
  },
  {
    slug: "consultoria-estrategica",
    name: "Consultoría",
    title: "Diseñamos procesos de RR.HH. que funcionan en la práctica",
    description:
      "Combinamos visión estratégica y experiencia operativa para transformar RR.HH. en una función que genere impacto real.",
    summary:
      "Ordenamos roles, procesos e indicadores para que RR.HH. deje de operar por urgencias y empiece a tomar decisiones con criterio de negocio.",
    icon: "target",
    focus:
      "Trabajo cercano, operativo y medible para que RR.HH. deje de depender de la improvisación y pueda sostener el crecimiento de la empresa.",
    scopeTitle: "Procesos que podemos mejorar",
    scopeNote:
      "Cada empresa necesita un nivel distinto de estructura. Adaptamos el trabajo según la etapa y necesidad del negocio.",
    subservices: [
      "Roles y responsabilidades",
      "Procesos y circuitos HR",
      "Compensaciones y bandas salariales",
      "Métricas y seguimiento",
      "Evaluación de desempeño",
      "Procesos más eficientes",
    ],
    detailTitle: "Lo que cambia cuando RR.HH. funciona",
    detailItems: [
      "Más claridad organizacional",
      "Decisiones basadas en datos",
      "Menos fricción operativa",
      "Procesos más sostenibles",
    ],
  },
  {
    slug: "capacitacion",
    name: "Capacitación",
    title: "Capacitaciones prácticas para líderes y equipos",
    description:
      "Diseñamos espacios de aprendizaje aplicables al día a día, enfocados en mejorar liderazgo, comunicación y gestión.",
    summary:
      "Facilitamos workshops concretos, con herramientas utilizables desde el día siguiente y foco en conversaciones, coordinación y gestión real de equipos.",
    icon: "sparkles",
    focus:
      "Trabajo cercano, operativo y medible para que RR.HH. deje de depender de la improvisación y pueda sostener el crecimiento de la empresa.",
    scopeTitle: "Procesos que podemos trabajar",
    scopeNote:
      "¿No encontrás el tema que necesitás? Contanos tu situación y armamos una propuesta acorde a tu equipo.",
    subservices: [
      "Liderazgo y gestión de equipos",
      "Comunicación efectiva",
      "Feedback y conversaciones difíciles",
      "Gestión de conflictos",
      "Cultura y trabajo entre áreas",
      "Evaluación de desempeño",
      "Compromiso y seguimiento",
      "Diversidad e inclusión",
    ],
    detailTitle: "Lo que hacemos diferente",
    detailItems: [
      "Workshops aplicables al día a día",
      "Casos reales y herramientas concretas",
      "Espacios participativos y dinámicos",
      "Contenido adaptado a cada equipo",
    ],
  },
  {
    slug: "procesos-politicas",
    name: "Procesos y políticas",
    title: "Transformamos informalidad en estructura clara",
    description:
      "Diseñamos políticas, procesos y documentación para que RR.HH. funcione con criterios claros, menos dependencia individual y mayor consistencia operativa.",
    summary:
      "Documentamos reglas, flujos y responsabilidades para que la gestión interna sea repetible, auditable y fácil de explicar a líderes y colaboradores.",
    icon: "clipboard",
    focus:
      "Trabajo cercano, operativo y medible para que RR.HH. deje de depender de la improvisación y pueda sostener el crecimiento de la empresa.",
    scopeTitle: "Procesos que podemos documentar",
    scopeNote:
      "¿Necesitás documentar otro proceso? Adaptamos la estructura según la realidad y operación de cada empresa.",
    subservices: [
      "Políticas internas y criterios HR",
      "SOPs y manuales operativos",
      "Flujos y circuitos de trabajo",
      "Templates y documentación estándar",
      "Procesos de payroll y administración",
      "Vacaciones, licencias y beneficios",
      "Reclutamiento e incorporación",
      "Evaluación de desempeño y seguimiento",
    ],
    detailTitle: "Lo que generamos",
    detailItems: [
      "Procesos más claros",
      "Mayor consistencia operativa",
      "Menos dependencia individual",
      "Más trazabilidad y control",
      "Operación más ordenada",
    ],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
