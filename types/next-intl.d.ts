import "next-intl"

declare module "next-intl" {
  export interface Messages {
    common: {
      language: string
      languageCode: string
    }
    header: {
      about: string
      services: string
      book: string
    }
    hero: {
      title: string
      name: string
      profession: string
      description: string
      bookButton: string
      learnMoreButton: string
      imageAlt: string
      stats: {
        clients: string
        clientsDescription: string
        experience: string
        experienceDescription: string
      }
    }
    about: {
      title: string
      subtitle: string
      description: string
      explorationAreas: Record<string, string>
      paragraphs: Record<string, string>
      features: Record<
        string,
        {
          title: string
          description: string
        }
      >
      howItWorks: {
        title: string
        paragraphs: Record<string, string>
      }
    }
    results: {
      title: string
      subtitle: string
      imageAlt: string
      results: Record<string, string>
      quote: string
    }
    examples: {
      title: string
      subtitle: string
      categories: Record<
        string,
        {
          title: string
          items: Record<string, string>
        }
      >
      footer: string
    }
    requirements: {
      title: string
      subtitle: string
      requirements: Record<
        string,
        {
          title: string
          description: string
        }
      >
      additionalRecommendations: {
        title: string
        items: Record<string, string>
      }
    }
    faq: {
      title: string
      subtitle: string
      questions: Record<
        string,
        {
          question: string
          answer: string
        }
      >
      footer: string
    }
    services: {
      title: string
      subtitle: string
      services: Record<
        string,
        {
          title: string
          price: string
          features: Record<string, string>
        }
      >
      individualApproach: {
        title: string
        description: string
      }
    }
    contact: {
      title: string
      subtitle: string
      form: {
        title: string
        name: string
        email: string
        phone: string
        message: string
        namePlaceholder: string
        emailPlaceholder: string
        phonePlaceholder: string
        messagePlaceholder: string
        submitButton: string
        submitting: string
      }
      success: {
        title: string
        message: string
        button: string
      }
      contactInfo: {
        title: string
        phone: {
          title: string
          value: string
        }
        email: {
          title: string
          value: string
        }
        workingHours: {
          title: string
          value: string
        }
      }
      messengers: {
        title: string
        telegram: string
        viber: string
        whatsapp: string
      }
    }
    footer: {
      description: string
      navigation: {
        title: string
        about: string
        results: string
        examples: string
        requirements: string
        faq: string
        services: string
        contact: string
      }
      contacts: {
        title: string
        phone: string
        email: string
        workingHours: string
      }
      copyright: string
      createdBy: string
      creatorName: string
      privacy: string
      terms: string
    }
    metadata: {
      title: string
      description: string
      keywords: string
      og: {
        title: string
        description: string
        imageAlt: string
      }
      twitter: {
        title: string
        description: string
      }
    }
    privacy: {
      title: string
      lastUpdated: string
      backToHome: string
      intro: string
      sections: {
        collection: {
          title: string
          intro: string
          items: Record<string, string>
          outro: string
        }
        usage: {
          title: string
          intro: string
          items: Record<string, string>
        }
        protection: {
          title: string
          intro: string
          items: Record<string, string>
        }
        confidentiality: {
          title: string
          content: string
        }
        cookies: {
          title: string
          content: string
        }
        thirdParty: {
          title: string
          content: string
        }
        changes: {
          title: string
          content: string
        }
        rights: {
          title: string
          intro: string
          items: Record<string, string>
        }
        contact: {
          title: string
          intro: string
          email: string
          emailValue: string
          phone: string
          phoneValue: string
        }
      }
    }
    terms: {
      title: string
      lastUpdated: string
      backToHome: string
      welcomeMessage: string
      acceptanceTitle: string
      acceptanceText: string
      servicesTitle: string
      servicesDescription: string
      sessionRegression: string
      sessionProgression: string
      therapyConsciousness: string
      consultations: string
      servicesDisclaimer: string
      appointmentTitle: string
      appointmentText: string
      paymentText: string
      cancellationText: string
      confidentialityTitle: string
      confidentialityText: string
      privacyPolicyLink: string
      intellectualPropertyTitle: string
      intellectualPropertyText: string
      intellectualPropertyUsage: string
      liabilityTitle: string
      liabilityText: string
      resultsDisclaimer: string
      contraindicationsTitle: string
      contraindicationsText: string
      contraindication1: string
      contraindication2: string
      contraindication3: string
      contraindicationsDisclaimer: string
      changesTitle: string
      changesText: string
      contactTitle: string
      contactText: string
    }
  }
}
