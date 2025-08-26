export interface IndustryData {
  slug: string
  name: string
  title: string
  subtitle: {
    regular: string
    gradient: string
  }
  description: string
  heroData: {
    ctaText: string
  }
  painPoints: {
    title: string
    subtitle: string
    problems: Array<{
      icon: string
      title: string
      description: string
    }>
  }
  solutions: {
    title: string
    subtitle: string
    advantages: Array<{
      title: string
      icon: string
      description: string
    }>
  }
  cta: {
    title: string
    subtitle: string
    mainTitle: string
    description: string
    ctaText: string
    benefits: string[]
    footer: string
  }
  seo: {
    title: string
    description: string
    keywords: string[]
  }
}

export const industryData: Record<string, IndustryData> = {
  versicherung: {
    slug: "versicherungsmakler",
    name: "Versicherungsmakler",
    title: "Webdesign für Versicherungsmakler",
    subtitle: {
      regular: "Vertrauen digital aufbauen durch ",
      gradient: "professionelle Website-Präsenz",
    },
    description: "Ihre Kunden vergleichen online – wirkt Ihre Website vertrauenswürdig genug? Speziell für Versicherungsmakler entwickelt.",
    heroData: {
      ctaText: "Kostenlose Website-Analyse sichern"
    },
    painPoints: {
      title: "Kennen Versicherungsmakler diese Probleme?",
      subtitle: "Ihre Kunden vergleichen online – aber wie wirkt Ihre digitale Präsenz auf potenzielle Interessenten?",
      problems: [
        {
          icon: "Users",
          title: "Kunden finden andere Makler online?",
          description: "Ihre Interessenten suchen \"Versicherungsmakler [Stadt]\" und finden Ihre veraltete oder nicht existierende Website nicht."
        },
        {
          icon: "TrendingDown",
          title: "Vergleichsportale gewinnen Kunden?",
          description: "Während Sie persönlich beraten, sammeln Check24 & Co. die Online-Anfragen durch moderne, vertrauensvolle Auftritte."
        },
        {
          icon: "Shield",
          title: "Vertrauen geht online verloren?",
          description: "Bei Versicherungen entscheidet Vertrauen. Eine unprofessionelle Website erweckt Zweifel an Ihrer Kompetenz."
        }
      ]
    },
    solutions: {
      title: "So gewinnen Versicherungsmakler online Vertrauen",
      subtitle: "Professionelle Website-Lösungen, die speziell für die Herausforderungen von Versicherungsmaklern entwickelt wurden.",
      advantages: [
        {
          title: "Vertrauensvolle Online-Präsenz",
          icon: "Shield",
          description: "Seriöses Design mit Fokus auf Sicherheit und Kompetenz. Ihre Kunden erkennen sofort: Hier bin ich in guten Händen."
        },
        {
          title: "DSGVO-konforme Formulare",
          icon: "Sparkles",
          description: "Rechtssichere Kontakt- und Anfrageformulare speziell für Versicherungsmakler. Datenschutz als Vertrauensbasis."
        },
        {
          title: "Online-Terminbuchung",
          icon: "TrendingUp",
          description: "Kunden können direkt online Beratungstermine buchen. Weniger Telefonaufwand, mehr qualifizierte Termine."
        },
        {
          title: "Lokale SEO-Optimierung",
          icon: "Target",
          description: "Werden Sie bei 'Versicherungsmakler [Ihre Stadt]' gefunden, bevor Kunden zu Vergleichsportalen gehen."
        },
        {
          title: "Mobile Kundengewinnung",
          icon: "Users",
          description: "80% der Versicherungsinteressenten nutzen das Smartphone. Ihre Website funktioniert perfekt auf allen Geräten."
        },
        {
          title: "Schnelle Lead-Qualifizierung",
          icon: "Zap",
          description: "Intelligente Formulare sammeln vorab wichtige Informationen. Sie sprechen nur mit qualifizierten Interessenten."
        }
      ]
    },
    cta: {
      title: "Bereit für mehr Vertrauen online?",
      subtitle: "Kostenlose Website-Analyse für Versicherungsmakler",
      mainTitle: "30 Minuten für Ihren digitalen Erfolg",
      description: "Lassen Sie uns besprechen, wie eine vertrauensvolle Website mehr qualifizierte Interessenten für Ihre Versicherungsberatung generiert.",
      ctaText: "Kostenlose Website-Analyse sichern",
      benefits: [
        "DSGVO-konforme Versicherungs-Website",
        "Online-Terminbuchung & Lead-Qualifizierung",
        "Lokale SEO für Ihren Standort",
        "Mobile-optimiert für unterwegs"
      ],
      footer: "30 Min · Kostenlos · Speziell für Versicherungsmakler"
    },
    seo: {
      title: "Webdesign für Versicherungsmakler | RM Webdesign & AI",
      description: "Professionelle Website für Versicherungsmakler. Vertrauen digital aufbauen, DSGVO-konform, Online-Terminbuchung. Aus Birkenfeld für ganz Deutschland.",
      keywords: ["Webdesign Versicherungsmakler", "Website Versicherungsmakler", "Homepage Versicherungsmakler", "Versicherungsmakler Website erstellen", "DSGVO Versicherung", "Online Terminbuchung Versicherung"]
    }
  },
  finanz: {
    slug: "finanzberater",
    name: "Finanzberater",
    title: "Webdesign für Finanzberater",
    subtitle: {
      regular: "Seriös auftreten und ",
      gradient: "neue Kunden digital gewinnen",
    },
    description: "Finanzberatung ist Vertrauenssache – eine veraltete Website schreckt Interessenten ab. Professionelles Webdesign für Finanzexperten.",
    heroData: {
      ctaText: "Kostenloses Beratungsgespräch sichern"
    },
    painPoints: {
      title: "Kennen Finanzberater diese Herausforderungen?",
      subtitle: "In der Finanzberatung entscheidet der erste Eindruck – online wie offline.",
      problems: [
        {
          icon: "Calculator",
          title: "Komplexe Finanzthemen vermitteln?",
          description: "Ihre Expertise in Geldanlage und Vorsorge muss online verständlich und vertrauensvoll präsentiert werden."
        },
        {
          icon: "TrendingDown",
          title: "Roboadvisor & Fintechs überholen Sie?",
          description: "Digitale Finanzdienstleister gewinnen Kunden mit modernen Plattformen, während traditionelle Berater offline bleiben."
        },
        {
          icon: "Briefcase",
          title: "Seriosität online beweisen?",
          description: "Bei Geldanlagen prüfen Kunden besonders kritisch. Eine unprofessionelle Website zerstört Vertrauen sofort."
        }
      ]
    },
    solutions: {
      title: "So positionieren sich Finanzberater digital",
      subtitle: "Professionelle Website-Lösungen, die Ihre Finanzexpertise überzeugend online präsentieren.",
      advantages: [
        {
          title: "Kompetenz digital präsentieren",
          icon: "Briefcase",
          description: "Ansprechendes Design, das Ihre Qualifikationen und Erfahrung in Finanzberatung professionell hervorhebt."
        },
        {
          title: "Finanz-Tools & Rechner",
          icon: "Calculator",
          description: "Interaktive Finanzrechner für Rente, Versicherungen und Geldanlage. Mehrwert für Besucher schaffen."
        },
        {
          title: "Lead-Generierung optimiert",
          icon: "Target",
          description: "Qualifizierte Interessenten durch gezielte Inhalte zu Rente, Geldanlage und Finanzplanung gewinnen."
        },
        {
          title: "Regulatorische Sicherheit",
          icon: "Shield",
          description: "DSGVO-konforme Website mit allen rechtlichen Anforderungen für Finanzdienstleister."
        },
        {
          title: "Mobile Beratungsanfragen",
          icon: "Users",
          description: "Kunden können jederzeit mobile Termine für Finanzberatung buchen. Flexibilität als Wettbewerbsvorteil."
        },
        {
          title: "Vertrauensaufbau durch Content",
          icon: "Sparkles",
          description: "Fachbeiträge zu Finanzthemen positionieren Sie als Experten und bauen nachhaltiges Vertrauen auf."
        }
      ]
    },
    cta: {
      title: "Bereit für mehr digitale Finanz-Kunden?",
      subtitle: "Kostenloses Strategiegespräch für Finanzberater",
      mainTitle: "30 Minuten für Ihren digitalen Erfolg",
      description: "Lassen Sie uns besprechen, wie eine professionelle Website mehr qualifizierte Interessenten für Ihre Finanzberatung generiert.",
      ctaText: "Jetzt Beratungsgespräch buchen",
      benefits: [
        "Website optimiert für Finanzdienstleister",
        "Interaktive Finanz-Tools & Rechner",
        "Regulatorisch sichere Umsetzung",
        "Mobile Lead-Generierung"
      ],
      footer: "30 Min · Kostenlos · Speziell für Finanzberater"
    },
    seo: {
      title: "Webdesign für Finanzberater | RM Webdesign & AI",
      description: "Professionelle Website für Finanzberater. Seriös auftreten, neue Kunden digital gewinnen. Finanz-Tools, DSGVO-konform. Aus Birkenfeld für ganz Deutschland.",
      keywords: ["Webdesign Finanzberater", "Website Finanzberater", "Homepage Finanzberatung", "Finanzberater Website erstellen", "Finanzdienstleister Website", "Finanzberater Online Marketing"]
    }
  },
  immobilien: {
    slug: "immobilienmakler",
    name: "Immobilienmakler",
    title: "Webdesign für Immobilienmakler",
    subtitle: {
      regular: "Immobilien online ",
      gradient: "perfekt präsentieren",
    },
    description: "Ihre Objekte überzeugen offline – aber online fehlen moderne Präsentationen. Professionelles Webdesign für Immobilienprofis.",
    heroData: {
      ctaText: "Kostenloses Erstgespräch sichern"
    },
    painPoints: {
      title: "Kennen Immobilienmakler diese Herausforderungen?",
      subtitle: "Ihre Immobilien sind top – aber wie präsentieren Sie diese online potenziellen Käufern und Verkäufern?",
      problems: [
        {
          icon: "Home",
          title: "Veraltete Exposés online?",
          description: "Ihre Immobilien verdienen bessere Online-Präsentationen als einfache PDF-Uploads und Standardportale."
        },
        {
          icon: "TrendingDown",
          title: "Kunden gehen zu Konkurrenz?",
          description: "Moderne Immobilienmakler mit professionellen Websites und virtuellen Rundgängen gewinnen Ihre Interessenten."
        },
        {
          icon: "Users",
          title: "Leads versickern online?",
          description: "Ohne professionelle Online-Präsenz verlieren Sie qualifizierte Verkäufer und Käufer an besser aufgestellte Makler."
        }
      ]
    },
    solutions: {
      title: "So präsentieren Immobilienmakler online professionell",
      subtitle: "Moderne Website-Lösungen, die Ihre Immobilien und Expertise perfekt in Szene setzen.",
      advantages: [
        {
          title: "Professionelle Objektpräsentation",
          icon: "Home",
          description: "Moderne Exposé-Darstellung mit Bildergalerien, Grundrissen und detaillierten Informationen. Ihre Objekte wirken hochwertiger."
        },
        {
          title: "Immobilien-Suchfilter",
          icon: "Target",
          description: "Interessenten finden passende Objekte schnell über intelligente Suchfilter nach Preis, Lage, Größe und Ausstattung."
        },
        {
          title: "Mobile Objektsuche",
          icon: "Users",
          description: "80% der Immobiliensuche läuft mobil. Ihre Website funktioniert perfekt auf Smartphone und Tablet."
        },
        {
          title: "Lead-Qualifizierung automatisch",
          icon: "Zap",
          description: "Kontaktformulare sammeln vorab Budgetvorstellungen und Wünsche. Sie sprechen nur mit ernsthaften Interessenten."
        },
        {
          title: "Lokale Marktpositionierung",
          icon: "Sparkles",
          description: "SEO-optimiert für 'Immobilienmakler [Ihre Stadt]'. Werden Sie als lokaler Experte wahrgenommen."
        },
        {
          title: "Verkäufer-Akquise digital",
          icon: "Briefcase",
          description: "Bewertungstools und Marktanalysen überzeugen Verkäufer, Sie als Makler zu beauftragen."
        }
      ]
    },
    cta: {
      title: "Bereit für mehr Immobilien-Erfolg online?",
      subtitle: "Kostenloses Strategiegespräch für Immobilienmakler",
      mainTitle: "30 Minuten für Ihren digitalen Erfolg",
      description: "Lassen Sie uns besprechen, wie eine professionelle Website mehr qualifizierte Käufer und Verkäufer für Ihr Immobiliengeschäft generiert.",
      ctaText: "Jetzt Erstgespräch sichern",
      benefits: [
        "Website optimiert für Immobilienmakler",
        "Objektpräsentation & Suchfunktionen",
        "Mobile-optimiert für unterwegs",
        "Automatische Lead-Qualifizierung"
      ],
      footer: "30 Min · Kostenlos · Speziell für Immobilienmakler"
    },
    seo: {
      title: "Webdesign für Immobilienmakler | RM Webdesign & AI",
      description: "Professionelle Website für Immobilienmakler. Objekte perfekt präsentieren, Suchfilter, mobile Optimierung. Aus Birkenfeld für ganz Deutschland.",
      keywords: ["Webdesign Immobilienmakler", "Website Immobilienmakler", "Homepage Immobilienmakler", "Immobilienmakler Website erstellen", "Immobilien Website", "Makler Online Marketing"]
    }
  }
}