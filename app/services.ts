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
  subservices: string[];
  detailTitle: string;
  detailItems: string[];
};

export const services: Service[] = [
  {
    slug: "outsourcing-rrhh",
    name: "Outsourcing de RR.HH.",
    title: "Operación de RR.HH. simple, ordenada y escalable",
    description:
      "Acompañamos la gestión operativa de personas para que tu empresa pueda enfocarse en crecer, tomar decisiones y desarrollar su negocio.",
    summary:
      "Tomamos la operación diaria de RR.HH. con procesos claros, seguimiento y soporte para equipos que necesitan orden sin armar una estructura sobredimensionada.",
    icon: "users",
    subservices: [
      "Payroll y administración HR",
      "Gestión de novedades",
      "Vacaciones y licencias",
      "Altas y bajas",
      "Legajos y documentación",
      "Atención al empleado",
      "Recruiting y selección",
      "Onboarding",
      "People Operations",
      "HR Shared Services",
      "Soporte temporal para equipos sin estructura HR",
    ],
    detailTitle: "Problemas que resolvemos",
    detailItems: [
      "Procesos desordenados",
      "Falta de seguimiento",
      "Sobrecarga operativa",
      "Dependencia de personas clave",
      "Falta de estructura HR",
    ],
  },
  {
    slug: "consultoria-estrategica",
    name: "Consultoría estratégica",
    title: "Diseñamos procesos de RR.HH. que funcionan en la práctica",
    description:
      "Combinamos visión estratégica y experiencia operativa para transformar RR.HH. en una función que genere impacto real.",
    summary:
      "Ordenamos roles, procesos e indicadores para que RR.HH. deje de operar por urgencias y empiece a tomar decisiones con criterio de negocio.",
    icon: "target",
    subservices: [
      "Diseño organizacional",
      "Roles y responsabilidades",
      "Performance management",
      "Talent review",
      "Compensación y beneficios",
      "Bandas salariales",
      "HR Analytics",
      "KPIs y dashboards",
      "Employee Experience",
      "Encuestas y clima",
      "Optimización de procesos",
      "Automatización y mejora continua",
    ],
    detailTitle: "Qué logramos",
    detailItems: [
      "Más claridad organizacional",
      "Decisiones basadas en datos",
      "Menos fricción operativa",
      "Mejor experiencia del empleado",
      "Procesos más eficientes",
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
    subservices: [
      "Liderazgo",
      "Feedback y conversaciones difíciles",
      "Comunicación efectiva",
      "Gestión de conflictos",
      "Trabajo entre áreas",
      "Evaluación de desempeño",
      "Cultura y engagement",
      "Accountability",
      "Herramientas de RR.HH.",
      "DEI e inclusión",
    ],
    detailTitle: "Modalidad",
    detailItems: ["Workshops", "Capacitaciones in-company", "Sesiones virtuales", "Programas a medida"],
  },
  {
    slug: "procesos-politicas",
    name: "Procesos y políticas",
    title: "Transformamos informalidad en estructura clara",
    description:
      "Creamos procesos y documentación que ayudan a ordenar la operación, reducir errores y profesionalizar la gestión.",
    summary:
      "Documentamos reglas, flujos y responsabilidades para que la gestión interna sea repetible, auditable y fácil de explicar a líderes y colaboradores.",
    icon: "clipboard",
    subservices: [
      "Políticas internas",
      "Vacaciones y licencias",
      "Trabajo remoto",
      "Beneficios",
      "Payroll",
      "Reclutamiento",
      "Performance",
      "SOPs y documentación",
      "Flujogramas",
      "Templates y manuales",
      "Auditoría y trazabilidad",
    ],
    detailTitle: "Resultados",
    detailItems: [
      "Más orden operativo",
      "Procesos repetibles",
      "Menos errores",
      "Mejor experiencia interna",
      "Escalabilidad",
    ],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
