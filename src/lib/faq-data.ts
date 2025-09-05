import type { FAQItem } from '../components/ui/IndustryFAQSection.astro';

export interface IndustryFAQData {
  title: string;
  subtitle: string;
  faqs: FAQItem[];
}

export const faqData: Record<string, IndustryFAQData> = {
  immobilienmakler: {
    title: "Häufig gestellte Fragen",
    subtitle: "Hier finden Sie Antworten auf die wichtigsten Fragen rund um Webdesign für Immobilienmakler.",
    faqs: [
      {
        question: "Worauf kommt es bei einer Website für Immobilienmakler an?",
        answer: "Professionelle Objektpräsentation steht im Mittelpunkt. Ihre Website muss Immobilien mit hochwertigen Bildergalerien, Grundrissen und detaillierten Informationen präsentieren. Zusätzlich sind mobile Optimierung, Suchfilter und eine vertrauensvolle Optik entscheidend, da 80% der Immobiliensuche mobil stattfindet."
      },
      {
        question: "Welche Lead-Optimierungsmöglichkeiten gibt es für Immobilienmakler?",
        answer: "Kostenlose Immobilienbewertung als Hauptmagnet für Verkäufer, Marktanalysen und Objektalerts für Käufer. Intelligente Kontaktformulare sammeln vorab Budget und Wünsche. Zusätzlich können Sie mit Finanzierungsrechnern und Kaufnebenkosten-Tools Mehrwert schaffen und gleichzeitig Leads qualifizieren."
      },
      {
        question: "Warum brauchen Immobilienmakler eine professionelle Website?",
        answer: "Ihre Konkurrenz hat bereits moderne Auftritte mit virtuellen Rundgängen und professionellen Exposés. Ohne eigene Website verlieren Sie qualifizierte Käufer und Verkäufer an besser positionierte Makler. Eine professionelle Präsenz etabliert Sie als lokalen Marktexperten und automatisiert die Lead-Qualifizierung."
      },
      {
        question: "Wie lange dauert es, bis meine Immobilien-Website online ist?",
        answer: "Die Entwicklungszeit beträgt 2-4 Wochen, abhängig von der Anzahl der zu integrierenden Objekte. Wir können bestehende Exposés übernehmen und optimiert darstellen. Nach Ihrer Freigabe ist die Website innerhalb von 24 Stunden live."
      },
      {
        question: "Kann ich Objekte selbst pflegen und neue Exposés hinzufügen?",
        answer: "Absolut! Wir integrieren ein benutzerfreundliches CMS, mit dem Sie neue Objekte hinzufügen, Bilder hochladen und Informationen aktualisieren können. Sie erhalten eine ausführliche Einweisung in die Objektverwaltung."
      },
      {
        question: "Werden meine Objekte auch mobil optimal dargestellt?",
        answer: "Selbstverständlich! Da über 80% der Immobiliensuche mobil stattfindet, optimieren wir besonders die mobile Darstellung. Bildergalerien, Grundrisse und Kontaktformulare funktionieren perfekt auf Smartphone und Tablet."
      }
    ]
  },
  finanzberater: {
    title: "Häufig gestellte Fragen",
    subtitle: "Hier finden Sie Antworten auf die wichtigsten Fragen rund um Webdesign für Finanzberater.",
    faqs: [
      {
        question: "Worauf kommt es bei einer Website für Finanzberater an?",
        answer: "Vertrauen und Seriosität stehen im Vordergrund. Ihre Website muss Ihre Qualifikationen und Erfahrung professionell präsentieren. Wichtig sind zudem interaktive Finanzrechner, regulatorische Konformität (DSGVO, MiFID II) und eine klare Darstellung Ihrer Beratungsfelder wie Altersvorsorge, Geldanlage oder Versicherungen."
      },
      {
        question: "Welche Lead-Optimierungsmöglichkeiten gibt es für Finanzberater?",
        answer: "Kostenlose Finanzanalyse und Altersvorsorge-Check sind starke Lead-Magneten. Interaktive Rechner für Rente, Sparraten und Versicherungen schaffen Mehrwert. Finanz-Ratgeber als Download und regelmäßige Markteinschätzungen positionieren Sie als Experten und generieren qualifizierte Anfragen."
      },
      {
        question: "Warum brauchen Finanzberater eine professionelle Website?",
        answer: "Robo-Advisor und Fintechs gewinnen Kunden mit modernen digitalen Auftritten, während traditionelle Berater offline bleiben. Eine professionelle Website beweist Ihre Seriosität bei sensiblen Geldthemen und ermöglicht es, Ihre persönliche Beratung digital zu unterstützen. Ohne Online-Präsenz verlieren Sie an Glaubwürdigkeit."
      },
      {
        question: "Welche rechtlichen Anforderungen gibt es für Finanzberater-Websites?",
        answer: "DSGVO-konforme Datenverarbeitung ist Pflicht, da Sie sensible Finanzdaten sammeln. Zusätzlich müssen Impressum, Datenschutz und eventuelle MiFID II-Hinweise korrekt dargestellt werden. Wir erstellen Ihre Website vollständig regelkonform für den Finanzsektor."
      },
      {
        question: "Können Kunden online Termine für Finanzberatung buchen?",
        answer: "Ja, wir integrieren eine komfortable Online-Terminbuchung. Kunden können je nach Beratungsfeld (Altersvorsorge, Geldanlage, Versicherung) passende Termine wählen. Vorqualifizierende Fragen sorgen dafür, dass Sie optimal vorbereitet in das Beratungsgespräch gehen."
      },
      {
        question: "Wie kann ich meine Finanzexpertise online präsentieren?",
        answer: "Durch Fachbeiträge zu aktuellen Finanzthemen, Marktkommentare und Ratgeber-Inhalte. Wir erstellen einen Blog-Bereich, in dem Sie regelmäßig Ihre Expertise unter Beweis stellen und gleichzeitig für relevante Suchbegriffe gefunden werden."
      }
    ]
  },
  versicherungsmakler: {
    title: "Häufig gestellte Fragen",
    subtitle: "Hier finden Sie Antworten auf die wichtigsten Fragen rund um Webdesign für Versicherungsmakler.",
    faqs: [
      {
        question: "Worauf kommt es bei einer Website für Versicherungsmakler an?",
        answer: "Vertrauen ist das A und O. Ihre Website muss Seriosität und Kompetenz ausstrahlen, da Kunden bei Versicherungen besonders kritisch prüfen. Wichtig sind eine klare Darstellung Ihrer Versicherungsbereiche, DSGVO-konforme Formulare und eine vertrauensvolle Optik, die Sie von Vergleichsportalen abhebt."
      },
      {
        question: "Welche Lead-Optimierungsmöglichkeiten gibt es für Versicherungsmakler?",
        answer: "Kostenloser Versicherungscheck und Bedarfsanalyse sind bewährte Lead-Magneten. Versicherungsrechner für verschiedene Bereiche (KFZ, Hausrat, Lebensversicherung) schaffen Mehrwert. Tipps zu Schadensfällen und Versicherungs-Ratgeber als Downloads positionieren Sie als vertrauenswürdigen Experten."
      },
      {
        question: "Warum brauchen Versicherungsmakler eine professionelle Website?",
        answer: "Check24 & Co. sammeln Online-Anfragen durch moderne, vertrauensvolle Auftritte, während Sie persönlich beraten. Ohne professionelle Online-Präsenz finden Interessenten bei 'Versicherungsmakler [Stadt]' andere Anbieter. Eine seriöse Website zeigt: Hier bin ich in kompetenten Händen."
      },
      {
        question: "Wie wichtig ist DSGVO-Konformität für Versicherungsmakler?",
        answer: "Extrem wichtig! Bei Versicherungen sammeln Sie besonders sensible persönliche Daten (Gesundheit, Finanzen, Familie). DSGVO-konforme Formulare und Datenschutz sind nicht nur rechtlich erforderlich, sondern auch vertrauensbildend. Wir erstellen Ihre Website vollständig regelkonform."
      },
      {
        question: "Können Kunden online Beratungstermine für Versicherungen buchen?",
        answer: "Ja, Online-Terminbuchung reduziert Ihren Telefonaufwand und erhöht die Termintreue. Kunden können je nach Versicherungsbereich (Auto, Haus, Leben, Gewerbe) passende Zeiten wählen. Vorqualifizierende Fragen sorgen für bessere Vorbereitung auf das Beratungsgespräch."
      },
      {
        question: "Wie kann ich mich von Vergleichsportalen abheben?",
        answer: "Durch persönlichen Service und lokale Präsenz. Ihre Website sollte Ihre persönliche Beratung, lokale Erreichbarkeit und langjährige Erfahrung betonen. Kundenbewertungen, Schadenservice vor Ort und individuelle Lösungen sind Ihre Stärken gegenüber anonymen Online-Portalen."
      }
    ]
  },
  general: {
    title: "Häufig gestellte Fragen",
    subtitle: "Hier finden Sie Antworten auf die wichtigsten Fragen rund um unsere Webdesign-Services.",
    faqs: [
      {
        question: "Was kostet eine professionelle Website-Erstellung?",
        answer: "Das hängt vom Umfang ab. Kleine Websites starten in der Regel ab ca. 2.500 €, bei umfangreicheren Projekten zzgl. Shop- oder Schnittstellenfunktion erhalten Sie immer ein individuelles Angebot abgestimmt auf den Umfang."
      },
      {
        question: "Wie lange dauert es, bis meine Website online ist?",
        answer: "Die Entwicklungszeit beträgt in der Regel 2-4 Wochen, abhängig vom Projektumfang. Nach Ihrer Freigabe ist die Website innerhalb von 24 Stunden live. Wir halten Sie während des gesamten Prozesses über den Fortschritt auf dem Laufenden."
      },
      {
        question: "Kann ich meine Website später selbst pflegen?",
        answer: "Auf Wunsch können wir ein benutzerfreundliches CMS-System konfigurieren, damit Sie Inhalte selbst pflegen und erstellen können. Sie erhalten eine ausführliche Einweisung und können Texte, Bilder und Inhalte jederzeit selbst aktualisieren. Bei Fragen stehen wir Ihnen gerne zur Verfügung."
      },
      {
        question: "Ist meine Website für Mobilgeräte optimiert?",
        answer: "Selbstverständlich! Alle unsere Websites sind vollständig responsive und für alle Endgeräte optimiert. Da über 60% der Nutzer mobil surfen, legen wir besonderen Wert auf eine perfekte Darstellung auf Smartphones und Tablets."
      },
      {
        question: "Bieten Sie auch Wartung und Support nach dem Launch an?",
        answer: "Wir bieten jederzeit Support und professionelle Betreuung an. Regelmäßige Checks sorgen dafür, dass Ihre Website immer optimal funktioniert und auf dem neuesten Stand bleibt."
      },
      {
        question: "Kommen Hostingkosten auf uns zu?",
        answer: "Wir kümmern uns um das gesamte Deployment und bieten günstige Hostingkosten in Höhe von 10€ pro Monat an. So haben Sie alles aus einer Hand ohne versteckte Kosten."
      }
    ]
  }
};
