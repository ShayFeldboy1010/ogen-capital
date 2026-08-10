import type { Dictionary } from "./he";

/**
 * English content dictionary (LTR).
 * Mirrors the structure of he.ts exactly. See editing guide there.
 */
export const en: Dictionary = {
  meta: {
    title: "OGen Family Office | Investment, Tax and Wealth Advisory",
    description:
      "A family office for investment advisory, tax planning and personal financial guidance, bridging traditional capital markets and digital assets. You work directly with the founding partners.",
  },

  nav: {
    home: "Home",
    about: "The Team",
    services: "Family Office",
    faq: "Questions",
    contact: "Contact",
    switchLocale: "עברית",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },

  cta: {
    whatsapp: "Talk to us on WhatsApp",
    whatsappPrefill:
      "Hello, I found OGen Family Office online and would like to schedule an introductory call.",
    stickyLabel: "An introductory call, no obligation",
    stickyButton: "WhatsApp",
  },

  ticker: [
    "You work directly with the founding partners",
    "Full fee transparency",
    "No hidden commissions",
    "We never hold client funds",
    "Absolute discretion",
    "WhatsApp reply within one business day",
  ],

  leadBand: {
    title: "Want us to call you back?",
    body: "Leave a name and phone number, and we will reach you on WhatsApp on the next business day.",
    submit: "Quick WhatsApp",
    chipsLabel: "What brings you here?",
    chips: [
      "Building an investment portfolio",
      "Tax planning",
      "Personal financial advisory",
      "Just starting to look",
    ],
  },

  home: {
    hero: {
      titleA: "",
      titleGold: "Ogen.",
      titleB: " Financial stability across generations",
      subtitle:
        "A family office for investment advisory, tax and financial planning. No promises, no noise. Professional, transparent, personal work.",
      secondaryCta: "Meet the team",
    },
    stats: [
      { value: 79, suffix: "", label: "years of combined market experience" },
      { value: 650, suffix: "+", label: "families and investors guided" },
      { value: 4, suffix: "", label: "areas of guidance under one roof" },
    ],
    process: {
      title: "The road to calm",
      steps: [
        {
          title: "An introductory call",
          body: "Half an hour on WhatsApp or by phone, with no obligation. We understand where you stand, and say honestly only what we can improve.",
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
          body: "You work directly with the founding partners, over years, with real knowledge of the client and their needs.",
        },
      ],
    },
    services: {
      title: "Where we guide you",
      linkLabel: "To the family office page",
      items: [
        {
          title: "Building an investment portfolio",
          body: "Structured periodic reviews, plus meetings or summary reports in plain language.",
        },
        {
          title: "Tax planning",
          body: "Examining holding and activity structures before decisions, and planning around events.",
        },
        {
          title: "Personal financial advisory",
          body: "Strategic planning for growth, tailored to you.",
        },
        {
          title: "Education and training",
          body: "Explained at any level, from beginner to experienced, across digital and classic assets.",
        },
      ],
    },
    approach: {
      title: "Why an anchor",
      p1: "The name was not chosen by accident. An anchor is what holds a ship in place while everything around it moves. That is exactly our work: anchoring family wealth so that markets, regulation or life itself cannot pull it off course.",
      p2: "You have already met the other side of this industry: promised returns, rented lifestyles, other people's successes. We choose the slow, seemingly boring road: research, planning, and a process we can explain out loud to any question.",
      pull: "Calm is not the absence of action. Calm is the result of planning.",
    },
    closing: {
      title: "The first call is an introduction, not a pitch",
      body: "An introduction, half an hour with no obligation. We will understand where you stand, and say honestly only what we can improve.",
    },
  },

  about: {
    title: "The Team",
    intro:
      "OGen Family Office was not founded to be one more firm that speaks in slogans. The crypto market is complex, regulation is tightening, and the banking system makes it hard to manage funds from digital sources. That is exactly why we are here. At Ogen there are no service reps and no salespeople; you work directly with the founding partners. We built an infrastructure that combines everything an investor needs in order to sleep at night: management to an institutional capital-markets standard, a legal path through the banks, and technological analysis that filters out the background noise.",
    partners: [
      {
        name: "Gil Feldboy",
        role: "Founding Partner, Head of Investment Strategy",
        bio: "Gil brings decades of experience as an investment manager in complex financial environments and institutional bodies. He is the firm's balancing force, translating the volatility of the crypto market into clear terms of risk management and long-term strategy. Gil makes sure every step is executed to the strictest standards, with a portfolio tailored to the client and a precise bridge between traditional investments and the digital economy.",
        image: "/partner-gil.jpg",
      },
      {
        name: "Jaguar A. Gal, Adv. & CPA",
        role: "Partner, Head of Regulation and Taxation",
        bio: "Jaguar leads the legal and regulatory side. Since 2015 she has been paving the way in Israel and Europe on crypto regulation, banking and taxation, including precedents that made it possible for digital-asset proceeds to be accepted into the banking system. With deep experience in structuring strategic investments and advising corporations, Jaguar makes sure every financial move meets the authorities' requirements and runs smoothly with the banks and transparently with the regulators.",
        image: "/partner-jaguar.jpg",
      },
      {
        name: "Dobi Flink",
        role: "Founding Partner, Crypto Analyst",
        bio: "Dobi comes from high-tech with deep experience in technological development. As the founder of “Crypto Israeli” and a strategic advisor to blockchain ventures, he reads the market through cold numbers and on-chain data, far from passing trends. Dobi builds capital-allocation strategies based on long-term market cycles and leads the firm's financial assessment, with one clear goal: hedging and investment decisions grounded in solid data rather than emotion.",
        image: "/partner-dobi.jpg",
      },
    ],
    values: {
      title: "How we work",
      items: [
        {
          title: "Personal accountability",
          body: "Every client is guided by a founding partner, from the first call and all the way through.",
        },
        {
          title: "Professional independence",
          body: "Our recommendations do not depend on distribution commissions from any product.",
        },
        {
          title: "Discretion",
          body: "The client's affairs stay in the room. Always.",
        },
      ],
    },
  },

  services: {
    title: "Family Office",
    intro:
      "Our work is built around the client, not around a product. These are the core areas of guidance, and every engagement is tailored to the client's wishes and needs.",
    items: [
      {
        title: "Building an investment portfolio",
        body: "Structured periodic reviews, plus meetings or summary reports in plain language.",
      },
      {
        title: "Tax planning",
        body: "Examining holding and activity structures before decisions. Optional work alongside the client's own accountants and lawyers. Planning around events.",
      },
      {
        title: "Personal financial advisory",
        body: "Strategic planning for growth, tailored to you.",
      },
      {
        title: "Education and training",
        body: "Explained at any level, from beginner to experienced. Investments in digital and classic assets.",
      },
    ],
    note: "Nothing on this page constitutes investment, tax or legal advice tailored to any particular person, unless stated otherwise in a signed engagement.",
  },

  faq: {
    title: "Questions & Answers",
    items: [
      {
        q: "Who is this for?",
        a: "Clients and private investors with significant available capital, looking for long-term professional guidance rather than a quick fix. If you are looking for a promised return, we are probably not the right address.",
      },
      {
        q: "Do you manage the money yourselves?",
        a: "No. We advise and guide. We do not hold client funds, your securities, or the private keys to your digital wallets. The decisions and the execution stay with you.",
      },
      {
        q: "What does it cost?",
        a: "The fee model is set with full transparency at the outset, according to the scope of the engagement. There are no hidden commissions and no dependence on any product. We lay it all out in the introductory call.",
      },
      {
        q: "How does it start?",
        a: "A short introductory call on WhatsApp or by phone, then an in-depth meeting to map your needs, and only then a formal proposal. No pressure and no early commitment.",
      },
      {
        q: "Do you replace our accountant or lawyer?",
        a: "No. We work alongside them. A large part of our value is coordinating every professional around one complete picture.",
      },
      {
        q: "What happens to our information?",
        a: "Discretion is a founding condition of our work. Your personal and financial information is kept in complete confidence and is never passed to a third party without your approval. The full detail is in the privacy policy.",
      },
    ],
  },

  contact: {
    title: "Let's start with a conversation",
    intro:
      "The fastest way is WhatsApp. Write to us directly, or leave your details and we will get back to you.",
    directTitle: "A quick conversation",
    directBody: "The fastest way. Write to us now and we will get back to you on the next business day.",
    form: {
      title: "Or we will call you",
      name: "Full name",
      namePlaceholder: "Jane Cohen",
      phone: "Phone",
      phonePlaceholder: "+972 50 000 0000",
      email: "Email",
      emailPlaceholder: "you@example.com",
      topic: "Subject",
      topics: [
        "Building an investment portfolio",
        "Tax planning",
        "Personal financial advisory",
        "Other",
      ],
      message: "A few words about what is on your mind",
      messagePlaceholder: "Optional",
      submit: "Quick WhatsApp",
      note: "The form opens a WhatsApp conversation with the details you entered. Nothing is stored on this site.",
      whatsappIntro: "Hello, I would like to schedule a call.",
      whatsappName: "Name",
      whatsappPhone: "Phone",
      whatsappEmail: "Email",
      whatsappTopic: "Subject",
      errors: {
        name: "Please enter a full name",
        phone: "Please enter a valid phone number",
        email: "Please enter a valid email address",
      },
    },
    newsletter: {
      title: "A newsletter for what matters, without the noise.",
      body: "Market analysis, smart risk management, and how banking and crypto connect. A professional angle to help you decide on solid reasoning.",
      email: "Email address",
      emailPlaceholder: "you@example.com",
      submit: "Subscribe",
      success: "You're in. The next issue is on its way.",
      error: "Something went wrong, please try again.",
      invalid: "Please enter a valid email address",
    },
  },

  legal: {
    disclaimerTitle: "Disclosure & Terms of Use",
    disclaimerIntro:
      "This page is deliberately written in plain language. We want you to know exactly what we are, and what we are not.",
    disclaimerSections: [
      {
        title: "Nothing here is investment advice",
        body: "The content on this site is general information only. It does not constitute investment, tax or legal advice tailored to the data, needs and goals of any particular person. Do not make decisions on the basis of this site alone; consult qualified professionals before any decision.",
      },
      {
        title: "No promised returns",
        body: "Nothing on this site promises a return, a profit or any outcome. Every investment carries risk, including the risk of losing the entire amount invested. Past performance, where shown, does not indicate future performance.",
      },
      {
        title: "Advisory, not management",
        body: "We provide advice only, not investment management. We do not hold your funds, your securities, or the private keys to your digital wallets. The decisions and the execution stay with you.",
      },
      {
        title: "Privacy",
        body: "Details you share with us are used solely to answer your enquiry and for the purposes set out in the privacy policy, and are never passed to a third party without your consent.",
      },
    ],

    rightsTitle: "Our Fee Model",
    rightsIntro:
      "Transparency is not a marketing slogan, it is a commitment. What it costs, what you get for it, and what your rights are when working with us. All written plainly, before we begin.",
    rightsHighlight: "We never hold client funds.",
    rights: [
      {
        title: "The right to know what it costs",
        body: "Our fee model is presented in writing before the engagement begins. There are no hidden commissions and no covert incentives, and our income does not depend on the product you choose.",
      },
      {
        title: "The right to understand",
        body: "Every recommendation is explained in plain language, including the risks, the costs and the alternatives. If something is unclear, it is our job to explain it again.",
      },
      {
        title: "The right to full ownership",
        body: "Your assets stay in your name and in your accounts. We never hold or withdraw client funds, and we will never ask you for a private key or seed phrase.",
      },
      {
        title: "The right to say no",
        body: "Every decision is yours. Our job is to recommend and explain, not to push. You will never hear a sales technique from us.",
      },
      {
        title: "The right to leave",
        body: "You can end the engagement at any time, with a simple notice and no exit penalties on our side.",
      },
      {
        title: "The right to discretion",
        body: "Your information stays with us. We will not share it with any third party without your explicit approval, unless required by law.",
      },
    ],
    rightsNote:
      "Disclosure: nothing on this page or anywhere on this site constitutes investment, tax or legal advice, and it is no substitute for personal advice tailored to an individual's needs. Investments carry risk. Nothing here promises a return or a profit.",

    privacyTitle: "Privacy & Information Security Policy",
    privacyLead: "Ogen Capital Advisors | www.ogen.capital",
    privacyUpdated: "Last updated: August 2026",
    privacySections: [
      {
        title: "1. Who we are, and why this document matters",
        body: [
          "Ogen Capital Advisors (“Ogen”, “we”) is the first firm in Israel, and so far the only one, to combine investment advisory in traditional capital markets with advisory on digital assets (crypto), balanced internally and under one roof. To be precise: we provide investment advice only, not investment management. We do not hold your funds, your securities, and under no scenario the private keys to your digital wallets. The decisions and the execution stay with you.",
          "This document explains what information is collected on www.ogen.capital (the “Site”), what we do with it, what we expressly do not do with it, and what rights you have under the Protection of Privacy Law, 5741-1981, including Amendment No. 13 which came into force in August 2025 (the “Law”) and its regulations.",
          "Using the Site constitutes agreement to this policy. If something here does not sit right with you, do not use the Site, or simply write to us. We are happy to answer.",
        ],
      },
      {
        title: "2. The short version",
        body: [
          "We do not sell or trade your information. Not to third parties, not to “strategic partners”, not to anyone. Our business model is advisory, not data.",
          "We collect only what is required to operate the Site and provide the service.",
          "We will never ask you for a private key, seed phrase or password; not by email, not by phone and not on WhatsApp. Anyone who asks you for these is, by definition, an impostor.",
          "You have rights of access, correction and deletion, and exercising them is simple and free. Details in section 10 below.",
        ],
      },
      {
        title: "3. Information collected automatically (analytics)",
        body: [
          "While you browse the Site, technical and statistical information is collected: pages viewed, visit duration, referral source, browser and device type, and IP address. A reminder: since Amendment 13, an IP address and online identifiers are considered “personal information” for every purpose, and we treat them accordingly. The information is used for statistical analysis, site security and improving our services and content, and is processed in aggregate wherever possible so that it does not identify you personally.",
        ],
      },
      {
        title: "4. Cookies and measurement tools",
        body: [
          "The Site uses cookies and measurement tools. Some are essential to its proper operation, and some depend on your consent. You can manage, block or delete cookies through your browser settings, although blocking essential cookies may impair how the Site works. And no, we will not pretend cookies exist purely “to improve your experience”: they also help us understand what works on the Site and what does not.",
        ],
      },
      {
        title: "5. Information you give us, and the notice under section 11 of the Law",
        body: [
          "On contact forms and newsletter sign-up you will be invited to provide details such as your name, email address and phone number. Important to know: you are under no legal obligation to provide your contact details, and doing so is entirely voluntary. It is just that without them, we simply cannot get back to you. The information is stored in the company's databases and used solely for the purposes set out in this policy: answering enquiries, operating the Site and its services, mailing only to those who signed up, and complying with the law that applies to us.",
        ],
      },
      {
        title: "6. Mailing list and newsletters",
        body: [
          "Signed up? You will receive updates, professional content and, from time to time, marketing content, all strictly in accordance with section 30A of the Communications (Telecommunications and Broadcasting) Law, 5742-1982. Three things worth knowing:",
          "Sign-up is entirely voluntary and based on explicit prior consent (opt-in).",
          "Every message carries an unsubscribe link. One click and you are out, with no questions and no persuasion.",
          "Withdrawing consent is exactly as easy as giving it, as required by law following Amendment 13.",
        ],
      },
      {
        title: "7. What we do with the information, and what we do not",
        body: [
          "We use the information to: provide and operate the Site and its services; respond to enquiries; send mail to those who subscribed; comply with the law applying to our investment advisory activity; and improve the Site, the services and the content.",
          "We do not pass personal information to third parties, except in the following cases:",
          "Essential service providers (cloud hosting, mailing systems, analytics tools), who are bound to us by data processing and confidentiality agreements and act solely on our instructions and for the purposes set out in this policy.",
          "Only where the law requires it, including a lawful demand by a competent authority, such as the Israel Securities Authority or the Capital Market, Insurance and Savings Authority.",
          "In the course of legal proceedings, or to protect our legal rights.",
          "With your explicit consent.",
        ],
      },
      {
        title: "8. Transfers of information outside Israel",
        body: [
          "Some of our service providers (such as cloud services and mailing systems) store information on servers outside Israel. Such transfers are made in accordance with the Protection of Privacy Regulations (Transfer of Information to Databases Abroad), 5761-2001, that is, to countries providing an adequate level of protection, or under appropriate contractual safeguards.",
        ],
      },
      {
        title: "9. Information security: what we do, and what nobody can promise",
        body: [
          "We apply technological and organisational security measures in accordance with the Protection of Privacy Regulations (Information Security), 5777-2017, including encryption, access controls, monitoring and internal procedures, and we follow developments in information security on an ongoing basis.",
          "Even so, professional integrity requires saying what every website knows but not every website writes: there is no such thing as absolute security. The internet is inherently exposed to risk, cyber attacks, malware, viruses, impersonation attempts, faults, outages, and exposure or alteration of information by unauthorised parties. Subject to provisions of law that cannot be contracted out of, the company, its shareholders, officers, employees and anyone acting on its behalf shall not be liable for damage, loss or expense caused to a user by or in connection with use of the Site, provided that we took the reasonable security measures required by law.",
          "A serious security incident? We are prepared to act as the law requires: reporting to the Privacy Protection Authority within 72 hours of discovering a reportable incident, and informing affected users without delay where the incident is likely to create a high risk to their rights.",
        ],
      },
      {
        title: "10. Your rights in the information",
        body: [
          "Under the Law you have, among others, the following rights:",
          "Access (section 13): to receive a copy of the information we hold about you.",
          "Correction and deletion (section 14): to demand correction or deletion of information that is incorrect, incomplete, unclear or out of date.",
          "Removal from the direct mailing database (section 17F): to be erased from our mailing lists.",
          "Withdrawal of consent: at any time, and as easily as it was given.",
          "A request to exercise your rights will be answered within 30 days at most, as the regulations require. No lawyer, notarised form or registered letter is needed; a simple email does the job.",
        ],
      },
      {
        title: "11. Identification and access credentials",
        body: [
          "If you are given identification or access credentials to dedicated areas of the Site, they are personal and confidential, and should be treated as such. You undertake to keep them confidential and not to disclose or transfer them to any third party. And a friendly tip: do not keep them in a file called “passwords.txt” on your desktop.",
        ],
      },
      {
        title: "12. Phishing, impersonation and fraud: required reading for crypto investors",
        body: [
          "Clients of financial firms, and especially in digital assets, have always been a favoured target for fraud attempts. Phishing messages today look remarkably convincing: the right logo, urgent and trustworthy wording, and a link almost identical to the real address. So please commit these rules to memory:",
          "Ogen will never ask you for a private key, seed phrase, password or verification code. Ever. If someone asked you for one, that means it was not us.",
          "Ogen will never send you a wallet address to transfer funds or coins that belong to you. We are advisors; we do not touch your assets.",
          "Always check that the address in your browser is exactly www.ogen.capital, not ogen-capital, not 0gen, and not any other creative variation.",
          "“Digital hygiene” recommendations: enable two-factor authentication (preferably via an app or hardware key, not SMS); use a password manager and a unique password for every service; keep software and security tools up to date; and for crypto holders, consider a cold wallet for significant holdings.",
          "If you suspect an unlawful action, an attempt to impersonate us, or a compromise of the identification mechanisms, please tell us immediately so that we can act as quickly as possible.",
        ],
      },
      {
        title: "13. Minors",
        body: [
          "The Site and the services are not intended for anyone under 18, and we do not knowingly collect personal information about minors.",
        ],
      },
      {
        title: "14. Privacy contact",
        body: [
          "For any privacy matter, a request for access, correction or removal from the mailing list, a report of incorrect details, a concern about a privacy breach, or simply a question, you can reach us by email at privacy@ogen.capital or by phone at +972 55 979 9433. We will handle and respond promptly, and no later than the times set by law.",
        ],
      },
      {
        title: "15. Changes to this policy",
        body: [
          "We may update this policy from time to time. The binding version is the one published on the Site, and the date of the last update appears at the top of the document. A material change will be highlighted on the Site reasonably, as required by law. Continued use of the Site after an update constitutes agreement to the updated version; so if you do not agree with it, your sole remedy is to stop using the Site.",
        ],
      },
    ],
  },

  footer: {
    brandLine: "OGen Family Office",
    tagline: "Stability. Protection. Generations.",
    navTitle: "Navigate",
    legalTitle: "Legal",
    disclaimerLink: "Disclosure & Terms",
    rightsLink: "Our Fee Model",
    privacyLink: "Privacy Policy",
    disclaimer:
      "Nothing on this site constitutes investment, tax or legal advice, and it is no substitute for personal advice tailored to an individual's needs. Investments carry risk. Nothing here promises a return or a profit.",
    rights: "OGen Family Office. All rights reserved.",
  },
};
