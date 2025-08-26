"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { cn } from "../../lib/utils"

// Inline Accordion components
const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn("border-b border-border", className)} {...props} />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 text-left font-semibold transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className,
      )}
      {...props}
    >
      {children}
      <svg 
        width={16}
        height={16}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        className="shrink-0 opacity-60 transition-transform duration-200"
        aria-hidden="true"
      >
        <path d="m6 9 6 6 6-6"/>
      </svg>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export default function FAQSection() {
  const faqItems = [
    {
      id: "item-1",
      question: "Was kostet eine professionelle Website-Erstellung?",
      answer:
        "Das hängt vom Umfang ab. Kleine Websites starten in der Regel ab ca. 2.500 €, bei umfangreicheren Projekten zzgl. Shop- oder Schnittstellenfunktion erhalten Sie immer ein individuelles Angebot abgestimmt auf den Umfang.",
    },
    {
      id: "item-2",
      question: "Wie lange dauert es, bis meine Website online ist?",
      answer:
        "Die Entwicklungszeit beträgt in der Regel 2-4 Wochen, abhängig vom Projektumfang. Nach Ihrer Freigabe ist die Website innerhalb von 24 Stunden live. Wir halten Sie während des gesamten Prozesses über den Fortschritt auf dem Laufenden.",
    },
    {
      id: "item-3",
      question: "Kann ich meine Website später selbst pflegen?",
      answer:
        "Ja, absolut! Wir entwickeln alle Websites mit benutzerfreundlichen Content-Management-Systemen. Sie erhalten eine ausführliche Einweisung und können Texte, Bilder und Inhalte jederzeit selbst aktualisieren. Bei Fragen stehen wir Ihnen gerne zur Verfügung.",
    },
    {
      id: "item-4",
      question: "Ist meine Website für Mobilgeräte optimiert?",
      answer:
        "Selbstverständlich! Alle unsere Websites sind vollständig responsive und für alle Endgeräte optimiert. Da über 60% der Nutzer mobil surfen, legen wir besonderen Wert auf eine perfekte Darstellung auf Smartphones und Tablets.",
    },
    {
      id: "item-5",
      question: "Bieten Sie auch Wartung und Support nach dem Launch an?",
      answer:
        "Ja, wir bieten verschiedene Wartungspakete an, die regelmäßige Updates, Backups, Sicherheitschecks und technischen Support umfassen. So bleibt Ihre Website immer aktuell, sicher und funktionsfähig.",
    },
  ]

  return (
    <section id="faq" className="relative py-16 md:py-24">
      {/* BGPattern using inline CSS */}
      <div 
        className="absolute inset-0 z-[-10] size-full [mask-image:radial-gradient(ellipse_at_center,white,transparent)]"
        style={{
          backgroundImage: 'radial-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="mx-auto max-w-xl text-center scroll-animate">
          <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">Häufig gestellte Fragen</h2>
          <p className="text-muted-foreground mt-4 text-balance">
            Hier finden Sie Antworten auf die wichtigsten Fragen rund um unsere Webdesign-Services für
            Finanzdienstleister.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-xl scroll-animate">
          <div className="relative">
            {/* BGPattern grid using inline CSS */}
            <div 
              className="absolute inset-0 z-[-10] size-full [mask-image:radial-gradient(ellipse_at_center,transparent,white)] rounded-2xl"
              style={{
                backgroundImage: 'linear-gradient(to right, rgba(59, 130, 246, 0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(59, 130, 246, 0.02) 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            />

            <Accordion
              type="single"
              collapsible
              className="bg-card ring-muted relative w-full rounded-2xl border px-8 py-3 shadow-sm ring-4 dark:ring-0"
            >
              {faqItems.map((item) => (
                <AccordionItem key={item.id} value={item.id} className="border-dashed">
                  <AccordionTrigger className="cursor-pointer text-base hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-base">{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}