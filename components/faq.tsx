import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { useTranslations } from 'next-intl';

type FAQItem = {
  id: string
  question: string
  answer: string
  types: string[] // defines which "types" this question applies to
}


export const FAQ = ({ types = ["group", "unt", "individual"] }: { types?: string[] }) => {

  const t = useTranslations('FAQ');

  const faqData: FAQItem[] = [
    {
      id: "item-1",
      types: ["group", "unt", "individual"],
      question: t('item1.question'),
      answer: t('item1.answer')
    },
    {
      id: "item-2",
      types: ["individual", "group"],
      question: t('item2.question'),
      answer: t('item2.answer')
    },
    {
      id: "item-3",
      types: ["individual", "group"],
      question: t('item3.question'),
      answer: t('item3.answer')
    },
  ]

  const filteredFaqs = faqData.filter((faq) =>
    faq.types.some((type) => types.includes(type))
  )



  return (
    <section className="section">
      <h3 className="h3">{t('title')}</h3>
      <Accordion type="single" collapsible>
        {filteredFaqs.map((faq) => (
          <AccordionItem key={faq.id} value={faq.id}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
