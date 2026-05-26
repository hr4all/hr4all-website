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
    name: "Consultoría estratégica",
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
      "Indicadores y seguimiento",
      "Evaluación de desempeño",
      "Automatización y mejora continua",
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
    focus:
      "Trabajo cercano, operativo y medible para que RR.HH. deje de depender de la improvisación y pueda sostener el crecimiento de la empresa.",
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
