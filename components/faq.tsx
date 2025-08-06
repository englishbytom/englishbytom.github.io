import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

type FAQItem = {
  id: string
  question: string
  answer: React.ReactNode
  types: string[] // defines which "types" this question applies to
}

const faqData: FAQItem[] = [
  {
    id: "item-1",
    types: ["grupales", "unt", "individuales"],
    question: "¿Cómo puedo unirme a las clases online?",
    answer: (
      <>
        Todas las clases se hacen por <b>Google Meet</b>, una plataforma simple y accesible desde cualquier dispositivo.
        Una vez que reserves tu lugar, vas a recibir por correo el link de acceso para conectarte. No hace falta que instales
        nada si usás una computadora — solo necesitás tener una buena conexión a internet. Si usás celular o tablet, podés
        descargar la app gratuita de Google Meet.
      </>
    ),
  },
  {
    id: "item-2",
    types: ["individuales", "grupales"],
    question: "¿Cuáles son los niveles?",
    answer: (
      <>
        Los niveles que uso para organizar las clases siguen el Marco Común Europeo de Referencia para las Lenguas (MCER), una guía internacional
        que clasifica el dominio del idioma desde A1 (principiante) hasta C2 (avanzado). Esta escala permite saber con claridad qué puede hacer una persona
        en inglés en cada etapa — por ejemplo: presentarse, mantener una conversación, escribir un correo formal, entender textos complejos, etc.
        Antes de empezar, evaluamos tu nivel para que puedas aprender con materiales y actividades acordes a tus conocimientos y objetivos.
      </>
    ),
  },
  {
    id: "item-3",
    types: ["grupales", "individuales"],
    question: "¿Cómo es el proceso de nivelación?",
    answer: (
      <>
        Todos los estudiantes, excepto aquellos que indican que nunca han estudiado inglés antes y no tienen habilidades en el idioma,
        deben pasar por el proceso de nivelación antes de su primera clase. Comenzando por una prueba de nivelación online,
        que se encarga de recavar el conocimiento que tenga el estudiante de la parte gramatical del lenguaje,
        para después agendar una prueba de comprensión oral y auditiva en el idioma. Esto me permite determinar con precisión
        las habilidades y necesidades específicas de cada estudiante.
      </>
    ),
  },
]

export const FAQ = ({ types = ["grupales", "unt", "individuales"] }: { types?: string[] }) => {
  const filteredFaqs = faqData.filter((faq) =>
    faq.types.some((type) => types.includes(type))
  )

  return (
    <Accordion type="single" collapsible>
      {filteredFaqs.map((faq) => (
        <AccordionItem key={faq.id} value={faq.id}>
          <AccordionTrigger>{faq.question}</AccordionTrigger>
          <AccordionContent>{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
