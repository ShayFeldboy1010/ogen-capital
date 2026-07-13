import type { Dictionary } from "./he";

/**
 * English content dictionary (LTR).
 * Mirrors the structure of he.ts exactly. See editing guide there.
 */
export const en: Dictionary = {
  meta: {
    title: "Ogen Capital | Investment Advisory, Tax and Family Wealth",
    description:
      "A partnership for investment advisory, tax planning and personal financial guidance. Quiet, transparent, professional work with families and private investors.",
  },

  nav: {
    home: "Home",
    about: "The Partners",
    services: "Services",
    results: "Client Stories",
    trust: "Testimonials",
    faq: "Questions",
    contact: "Contact",
    switchLocale: "עברית",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },

  cta: {
    whatsapp: "Talk to us on WhatsApp",
    whatsappPrefill:
      "Hello, I found Ogen Capital online and would like to schedule an introductory call.",
    stickyLabel: "An introductory call, no obligation",
    stickyButton: "WhatsApp",
  },

  ticker: [
    "Guided by a partner, not a rep",
    "Full fee transparency",
    "No hidden commissions",
    "Assets stay in your name",
    "Absolute discretion",
    "WhatsApp reply within one business day",
  ],

  leadBand: {
    title: "Want us to call you back?",
    body: "Leave a name and phone number, and we will reach you on WhatsApp within one business day.",
    submit: "Talk to us",
    chipsLabel: "What brings you here?",
    chips: [
      "Investing a significant sum",
      "Long-term financial planning",
      "A generational transfer",
      "Just starting to look",
    ],
  },

  home: {
    hero: {
      titleA: "",
      titleGold: "Ogen.",
      titleB: " Financial stability across generations",
      subtitle:
        "A partnership for investment advisory, tax and financial planning. No promises, no noise. Professional, transparent, personal work.",
      secondaryCta: "Meet the partnership",
    },
    stats: [
      { value: 15, suffix: "+", label: "years of combined market experience" },
      { value: 120, suffix: "+", label: "families and investors guided" },
      { value: 4, suffix: "", label: "areas of guidance under one roof" },
    ],
    process: {
      title: "The road to calm",
      steps: [
        {
          title: "An introductory call",
          body: "Half an hour on WhatsApp or by phone. We meet, understand where you stand, and answer honestly whether we can help.",
        },
        {
          title: "Mapping and planning",
          body: "An in-depth meeting to map assets, needs and goals. You leave it with a complete picture and a written plan.",
        },
        {
          title: "Guidance over time",
          body: "Ongoing work at your side: structured reviews, availability for decisions, and a plan that adapts when life changes.",
        },
      ],
    },
    principles: {
      title: "Three principles that never move",
      items: [
        {
          title: "Stability before returns",
          body: "Every investment decision starts with what protects the capital, not what promises the most.",
        },
        {
          title: "Full transparency",
          body: "Every recommendation comes with its reasoning, costs and risks. On the table, up front.",
        },
        {
          title: "Personal guidance",
          body: "You work with the partners themselves, over years, with real knowledge of your family and its needs.",
        },
      ],
    },
    services: {
      title: "Where we guide you",
      linkLabel: "All services",
      items: [
        {
          title: "Investment advisory",
          body: "A complete picture of your assets, a written investment policy, and steady guidance as it is carried out.",
        },
        {
          title: "Tax planning",
          body: "The right structure for holdings and activity, coordinated with your own advisors, before decisions are made.",
        },
        {
          title: "Personal financial guidance",
          body: "One address for questions of money, family and the future. From scheduled reviews to the moments that matter.",
        },
      ],
    },
    approach: {
      title: "Why an anchor",
      p1: "The name was not chosen by accident. An anchor is what holds a ship in place while everything around it moves. That is exactly our work: anchoring family wealth so that markets, regulation or life itself cannot pull it off course.",
      p2: "You have already met the other side of this industry: promised returns, rented lifestyles, other people's successes. We choose the slow, seemingly boring road: research, planning, and a process we can explain out loud to any question.",
      pull: "Calm is not the absence of action. Calm is the result of planning.",
    },
    quote: {
      text: "A real quote from a client we advise will appear here, in their own words and with their full permission.",
      name: "Client name",
      role: "Occupation, to be provided by the client",
      linkLabel: "More testimonials and trust signals",
    },
    testimonials: {
      title: "What clients say",
      subtitle:
        "Real testimonials from the families and investors we advise will appear here — in their words, with their full consent. For now, these are placeholders.",
      items: [
        {
          quote:
            "A featured client testimonial will appear here — their story, in their words, with full approval. This is where trust built over years finds a voice.",
          name: "Client name",
          role: "Occupation, to be provided by the client",
        },
        {
          quote:
            "A client's words about working together will appear here — in their language, with their approval.",
          name: "Client name",
          role: "Occupation, to be provided by the client",
        },
        {
          quote:
            "Space for a short client testimonial. Content to be provided and approved by the client.",
          name: "Client name",
          role: "Occupation, to be provided by the client",
        },
        {
          quote:
            "Space for one more client testimonial. To be added later, with full consent.",
          name: "Client name",
          role: "Occupation, to be provided by the client",
        },
      ],
    },
    closing: {
      title: "The first call is an introduction, not a pitch",
      body: "Half an hour, no obligation. We will understand where you stand, and tell you honestly if and how we can help.",
    },
  },

  about: {
    title: "The Partners",
    intro:
      "Behind Ogen Capital are partners with decades of combined experience in capital markets, taxation and family advisory. Not account managers, not sales representatives. The people you talk to are the people who do the work.",
    partners: [
      {
        name: "Partner name goes here",
        role: "Founding Partner",
        bio: "The partner's professional background will appear here: years of experience, key positions, education and areas of expertise. Content to be provided by the client.",
        imageSeed: "ogen-partner-one",
      },
      {
        name: "Partner name goes here",
        role: "Founding Partner",
        bio: "The partner's professional background will appear here: years of experience, key positions, education and areas of expertise. Content to be provided by the client.",
        imageSeed: "ogen-partner-two",
      },
    ],
    values: {
      title: "How we work",
      items: [
        {
          title: "Personal accountability",
          body: "Every family is guided by a partner, from the first call and throughout.",
        },
        {
          title: "Professional independence",
          body: "Our recommendations do not depend on distribution fees from any product.",
        },
        {
          title: "Discretion",
          body: "Family matters stay in the room. Always.",
        },
      ],
    },
  },

  results: {
    title: "Client Stories",
    intro:
      "We do not publish return figures and we do not promise outcomes. Instead, here are real stories about the kinds of problems we solve, with identifying details changed and our clients' permission.",
    caseLabels: {
      situation: "The starting point",
      work: "What we did",
      outcome: "Where it stands today",
    },
    cases: [
      {
        title: "A family after an exit",
        situation:
          "The client's starting point will be described here: assets, challenges and open questions. Content to be provided by the client.",
        work: "The working process will be described here: diagnosis, planning and key decisions. Content to be provided by the client.",
        outcome:
          "The outcome will be described here in qualitative terms, without promises. Content to be provided by the client.",
      },
      {
        title: "A portfolio spread too thin",
        situation:
          "The client's starting point will be described here: assets, challenges and open questions. Content to be provided by the client.",
        work: "The working process will be described here: diagnosis, planning and key decisions. Content to be provided by the client.",
        outcome:
          "The outcome will be described here in qualitative terms, without promises. Content to be provided by the client.",
      },
      {
        title: "A generational transfer",
        situation:
          "The client's starting point will be described here: assets, challenges and open questions. Content to be provided by the client.",
        work: "The working process will be described here: diagnosis, planning and key decisions. Content to be provided by the client.",
        outcome:
          "The outcome will be described here in qualitative terms, without promises. Content to be provided by the client.",
      },
    ],
    note: "Past performance does not guarantee future results. All investments involve risk.",
  },

  services: {
    title: "Services",
    intro:
      "Our work is built around the family, not around a product. These are the main areas of guidance, and every engagement is tailored to the need.",
    items: [
      {
        title: "Investment advisory",
        body: "A full map of existing assets, a written investment policy, and guidance through its implementation with the managing institutions.",
        points: [
          "A complete asset picture: traded, real estate, alternative and pension",
          "A written investment policy with clear risk boundaries",
          "Structured periodic reviews and a plain-language summary report",
        ],
      },
      {
        title: "Tax planning",
        body: "Reviewing the structure of holdings and activity before decisions are made, working together with your accountants and lawyers.",
        points: [
          "Holding structures for assets in Israel and abroad",
          "Tax planning around major events: a sale, an exit, an inheritance",
          "Full coordination with your existing advisors",
        ],
      },
      {
        title: "Personal financial guidance",
        body: "One continuous address for every significant financial decision of the family, from the day-to-day to long-term planning.",
        points: [
          "Structured working sessions throughout the year",
          "Availability for questions and decisions that cannot wait",
          "Guiding the next generation: financial education and preparation",
        ],
      },
      {
        title: "Generational transfer",
        body: "An orderly plan for passing wealth and knowledge to the next generation, keeping the family aligned and the assets protected.",
        points: [
          "Mapping intentions and defining family principles",
          "A legal and financial structure for a gradual transfer",
          "Guiding the family conversation with sensitivity and discretion",
        ],
      },
    ],
    note: "These services do not constitute personal investment advice tailored to a specific client's circumstances, unless stated otherwise in an engagement agreement.",
  },

  faq: {
    title: "Questions and Answers",
    items: [
      {
        q: "Who is this service for?",
        a: "Families and private investors with significant available capital, looking for long-term professional guidance rather than a quick fix. If you are looking for a promised return, we are probably not the right address.",
      },
      {
        q: "Do you manage the money yourselves?",
        a: "No. We are an advisory partnership. Your assets stay in your name and in your accounts, and we work alongside you with the managing institutions.",
      },
      {
        q: "What does it cost?",
        a: "The fee model is set with full transparency at the start, according to the scope of the engagement. No hidden fees and no dependence on any product. We will detail everything in the introductory call.",
      },
      {
        q: "What does getting started look like?",
        a: "A short introductory call on WhatsApp or by phone, followed by an in-depth meeting to map your needs, and only then an orderly engagement proposal. No pressure and no early commitment.",
      },
      {
        q: "Do you replace our accountant or lawyer?",
        a: "No. We work with them. A large part of our value is coordinating all your advisors around one complete picture.",
      },
      {
        q: "What happens with our information?",
        a: "Discretion is a foundation of our work. Your family and financial information is kept fully confidential and is not shared with any third party without your approval.",
      },
    ],
  },

  trust: {
    title: "Testimonials and Trust",
    intro:
      "Trust is not built from our own words. It is built from what clients say, and from how we choose to work.",
    testimonials: [
      {
        text: "A real client quote will appear here, in their own words and with their full permission.",
        name: "Client name",
        role: "Occupation, to be provided by the client",
      },
      {
        text: "A real client quote will appear here, in their own words and with their full permission.",
        name: "Client name",
        role: "Occupation, to be provided by the client",
      },
      {
        text: "A real client quote will appear here, in their own words and with their full permission.",
        name: "Client name",
        role: "Occupation, to be provided by the client",
      },
    ],
    signals: {
      title: "How we protect your trust",
      items: [
        {
          title: "Full disclosure",
          body: "Any potential conflict of interest is presented up front and in writing, before any decision.",
        },
        {
          title: "Investor rights",
          body: "A dedicated page details your rights when working with us, including the right to end the engagement at any time.",
          linkLabel: "The investor rights page",
        },
        {
          title: "Orderly records",
          body: "Every recommendation, decision and meeting is documented and available to you at any moment.",
        },
      ],
    },
  },

  contact: {
    title: "Let's start with a conversation",
    intro:
      "The fastest way is WhatsApp. Write to us directly, or leave your details and we will get back to you.",
    directTitle: "Straight to WhatsApp",
    directBody: "Write to us now and we will reply within one business day.",
    form: {
      title: "Or we can call you back",
      name: "Full name",
      namePlaceholder: "Your name",
      phone: "Phone",
      phonePlaceholder: "+972 50 000 0000",
      topic: "Topic",
      topics: [
        "Investment advisory",
        "Tax planning",
        "Personal financial guidance",
        "Other",
      ],
      message: "A few words about what is on your mind",
      messagePlaceholder: "Optional",
      submit: "Send via WhatsApp",
      note: "The form opens a WhatsApp conversation with the details you filled in. Nothing is stored on this site.",
      whatsappIntro: "Hello, I would like to schedule a call.",
      whatsappName: "Name",
      whatsappPhone: "Phone",
      whatsappTopic: "Topic",
      errors: {
        name: "Please enter your full name",
        phone: "Please enter a valid phone number",
      },
    },
    newsletter: {
      title: "A periodic letter, without the noise",
      body: "A few times a year: thoughts on markets, tax and family wealth. No spam, unsubscribe at any time.",
      email: "Email address",
      emailPlaceholder: "you@example.com",
      submit: "Subscribe",
      success: "You are in. The next letter is on its way.",
      error: "Something went wrong, please try again.",
      invalid: "Please enter a valid email address",
    },
  },

  legal: {
    disclaimerTitle: "Disclosure and Terms of Use",
    disclaimerIntro:
      "This page is written in plain language on purpose. It matters to us that you know exactly what we are, and what we are not.",
    disclaimerSections: [
      {
        title: "No promise of returns",
        body: "Nothing on this site promises a return, a profit or any outcome. Every investment involves risk, including the risk of losing the entire invested amount. Past performance, where presented, does not indicate future performance.",
      },
      {
        title: "This site is not personal advice",
        body: "The content on this site is general information only and does not constitute investment, tax or legal advice tailored to any specific person's circumstances. Do not make decisions based on this site alone; consult qualified professionals.",
      },
      {
        title: "Our regulatory standing",
        body: "Details of the partnership's regulatory standing, licenses and certifications will appear here. Content to be provided by the client and approved by legal counsel.",
      },
      {
        title: "Privacy",
        body: "Details you share with us are used solely to respond to your inquiry and are not passed to any third party without your consent. A full privacy policy will be provided by the client and approved by legal counsel.",
      },
    ],
    rightsTitle: "Protecting Investor Rights",
    rightsIntro:
      "Transparency is not a marketing slogan, it is a commitment. These are your rights when working with us, stated clearly.",
    rights: [
      {
        title: "The right to understand",
        body: "Every recommendation is explained in plain language, including its risks, costs and alternatives. If something is unclear, it is our responsibility to explain it again.",
      },
      {
        title: "The right to know what it costs",
        body: "Our fee model is presented in writing before any engagement begins. No hidden fees and no concealed incentives.",
      },
      {
        title: "The right to full ownership",
        body: "Your assets remain in your name, in your accounts. We do not hold and do not withdraw client funds.",
      },
      {
        title: "The right to say no",
        body: "Every decision is yours. Our role is to recommend and explain, not to pressure. You will not hear sales techniques from us.",
      },
      {
        title: "The right to leave",
        body: "You may end the engagement at any time, with a simple notice, with no exit penalties from our side.",
      },
      {
        title: "The right to discretion",
        body: "Your information stays with us. We will not share it with any third party without your explicit approval, except where required by law.",
      },
    ],
    rightsNote:
      "The final wording of this page will be approved by legal counsel before launch.",
  },

  footer: {
    brandLine: "Ogen Capital",
    tagline: "Stability. Protection. Generational.",
    navTitle: "Navigate",
    legalTitle: "Legal",
    disclaimerLink: "Disclosure and Terms",
    rightsLink: "Investor Rights",
    disclaimer:
      "Nothing on this site constitutes investment, tax or legal advice, or a substitute for personal advice tailored to your circumstances. Investments involve risk. Nothing here is a promise of returns or profit.",
    rights: "Ogen Capital. All rights reserved.",
  },
};
