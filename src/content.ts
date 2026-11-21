// All copy lives here so the page can be re-themed without touching layout.
// Sections read from this file; remove a section by deleting it from App.tsx.

export const brand = {
  name: 'Acreline AI',
  tagline: 'AI deal sourcing for real estate investors',
}

export const nav = {
  links: [
    { label: 'Deals', href: '#deals' },
    { label: 'Features', href: '#features' },
    { label: 'Strategies', href: '#how' },
    { label: 'Pricing', href: '#pricing' },
  ],
  signIn: { label: 'Log in', href: '#cta' },
  cta: { label: 'Start free', href: '#cta' },
}

export const hero = {
  badge: 'Pro is free — every agent unlocked',
  title: ['The AI that finds and', 'closes your next deal'],
  highlight: 'closes',
  description:
    '44 AI agents scan county records, auctions and off-market listings, underwrite every property in seconds, and handle the seller outreach — so you can buy below market without the spreadsheets.',
  primary: { label: 'Browse sample deals', href: '#deals' },
  secondary: { label: 'See how it works', href: '#how' },
  footnote: 'Pro is free forever. No card, no trial, no unlock fee.',
  rating: '5.0',
  ratingNote: 'Used by 2,742 investors to source deals without paying for software.',
}

export const proStrip = {
  label: 'Pro is free',
  text: 'All 44 agents, every deal type, autopilot outreach — $0 per month, permanently.',
  cta: { label: 'See what is included', href: '#pricing' },
}

export const dataSources = [
  'County records',
  'Tax deed auctions',
  'HUD listings',
  'Probate filings',
  'Sheriff sales',
  'Off-market MLS',
  'Bank REO',
  'Public auctions',
]

export const features = {
  eyebrow: 'What the agents do',
  title: 'From a cold lead to a funded deal',
  description: 'Each agent owns one part of the process and hands the result to the next. You review, approve, close.',
  items: [
    {
      key: 'scanner',
      title: 'Off-market deal scanner',
      description:
        'County records, probate filings, tax-deed auctions, HUD and stale listings surface in one scored feed — often weeks before they reach the portals.',
      span: 2,
    },
    {
      key: 'underwrite',
      title: 'Underwriting in seconds',
      description: 'Rent comps, rehab range, DSCR, cap rate and cash flow, with every assumption shown.',
      span: 1,
    },
    {
      key: 'outreach',
      title: 'Agents that talk to sellers',
      description: 'Email and SMS outreach, replies triaged, calls booked on your calendar.',
      span: 1,
    },
    {
      key: 'funding',
      title: 'Financing and paperwork handled',
      description:
        'DSCR, hard money and seller-finance structures matched to each deal, with offers and contracts drafted for your review.',
      span: 2,
    },
  ],
}

export const steps = {
  eyebrow: 'Strategies, not theory',
  title: 'Three ways to make the deals pay',
  items: [
    {
      title: 'Contract flipping',
      description:
        'Lock a below-market property under contract, then assign it to a cash buyer. No purchase, no credit check, no rehab budget.',
    },
    {
      title: 'Buy & hold rentals',
      description:
        'Target cash-flowing doors in Section 8 and workforce markets, with DSCR financing lined up before you make the offer.',
    },
    {
      title: 'BRRRR',
      description:
        'Buy distressed below market, make a light rehab, rent it out, refinance, and roll the proceeds into the next property.',
    },
  ],
}

export const deals = {
  eyebrow: 'Sample deal feed',
  title: 'What the scanner actually returns',
  description:
    'Illustrative deal cards showing the shape of the feed: source, price, estimated rent and cash flow. Live data comes from county and auction sources after you connect a market.',
  note: 'Sample properties with illustrative numbers, not a live inventory.',
  items: [
    {
      address: '1420 Marigold St',
      city: 'Cleveland, OH',
      tag: 'Tax deed',
      price: 4_800,
      value: 128_000,
      beds: 3,
      baths: 1,
      sqft: 1_120,
      rent: 1_650,
      cashFlow: 1_212,
      dscr: 1.84,
      tone: 'accent',
    },
    {
      address: '905 Kestrel Ave',
      city: 'Kansas City, KS',
      tag: 'Probate',
      price: 18_500,
      value: 112_000,
      beds: 3,
      baths: 2,
      sqft: 1_640,
      rent: 1_495,
      cashFlow: 964,
      dscr: 1.52,
      tone: 'violet',
    },
    {
      address: '318 Gulfstream Pkwy',
      city: 'Cape Coral, FL',
      tag: 'Gov seized',
      price: 46_000,
      value: 214_000,
      beds: 4,
      baths: 2,
      sqft: 2_180,
      rent: 2_350,
      cashFlow: 1_408,
      dscr: 1.67,
      tone: 'teal',
    },
    {
      address: '77 Beacon Row',
      city: 'Memphis, TN',
      tag: 'Bank REO',
      price: 62_000,
      value: 149_000,
      beds: 3,
      baths: 2,
      sqft: 1_360,
      rent: 1_420,
      cashFlow: 797,
      dscr: 1.38,
      tone: 'accent',
    },
    {
      address: '2120 Quarry Ln',
      city: 'Birmingham, AL',
      tag: 'Seller finance',
      price: 34_500,
      value: 121_000,
      beds: 3,
      baths: 1,
      sqft: 1_180,
      rent: 1_310,
      cashFlow: 886,
      dscr: 1.61,
      tone: 'teal',
    },
    {
      address: '640 Whitlock Dr',
      city: 'Homestead, FL',
      tag: 'Section 8',
      price: 88_000,
      value: 236_000,
      beds: 4,
      baths: 2,
      sqft: 1_520,
      rent: 2_180,
      cashFlow: 1_043,
      dscr: 1.44,
      tone: 'violet',
    },
  ],
}

export const metrics = [
  { value: 44, decimals: 0, suffix: '', label: 'AI agents on one account' },
  { value: 2742, decimals: 0, suffix: '+', label: 'Investors using the feed' },
  { value: 18, decimals: 0, suffix: '', label: 'Public sources scanned' },
  { value: 95, decimals: 0, suffix: '%', label: 'Of the busywork automated' },
]

export const testimonials = {
  eyebrow: 'Sample stories',
  title: 'What a working feed changes',
  note: 'Illustrative examples written for this demo build.',
  items: [
    {
      quote:
        'I stopped opening six tabs every morning. The agents bring me a short list, I approve two, and the seller emails are already written. Twenty minutes instead of three hours.',
      name: 'Mara Ellison',
      role: 'Small business owner, Ohio',
      hue: 250,
    },
    {
      quote: 'The underwriting is what sold me. Every number comes with its source, so I can argue with it instead of guessing.',
      name: 'Devon Price',
      role: 'First-time investor, Tennessee',
      hue: 170,
    },
    {
      quote: 'We run the BRRRR playbook on two properties a quarter now. Same team, same hours, just far less searching.',
      name: 'Priya Raman',
      role: 'Buy & hold investor, Florida',
      hue: 20,
    },
  ],
}

export const pricing = {
  eyebrow: 'Pricing',
  title: 'Pro is free. Permanently.',
  description: 'The full AI platform costs $0. The only paid option is done-with-you coaching, for people who want it.',
  note: 'No card required. No trial countdown. No feature held back behind an upgrade.',
  tiers: [
    {
      name: 'Starter',
      price: '$0',
      priceNote: 'forever',
      popular: false,
      badge: '',
      description: 'Look around the market and test the AI on a few deals.',
      cta: 'Create a free account',
      features: [
        'On-market deal feed',
        '10 deal analyses / month',
        '50 AI credits / month',
        'Rental comps and DSCR estimates',
        'Saved deals and notes',
        'Deal calculator',
        'Community support',
      ],
    },
    {
      name: 'Pro',
      price: '$0',
      priceNote: 'free forever',
      description: 'The whole platform: every agent, every deal type, no limits worth worrying about.',
      cta: 'Start Pro for free',
      popular: true,
      badge: 'Free, not a trial',
      features: [
        'Everything in Starter, unlocked',
        'All 44 AI agents',
        'Off-market, probate, tax deed, REO and gov-seized deals',
        'Autopilot seller outreach (up to 250/day)',
        'Unlimited underwriting and offer drafts',
        'Cash buyer matching',
        'Personalised deal feed and browser agent',
        'Mentor bot and deal review',
        'Priority support',
      ],
    },
    {
      name: 'Operator',
      price: 'Custom',
      priceNote: 'talk to us',
      popular: false,
      badge: '',
      description: 'Optional hand-holding: a coach, a lender network and a team that closes with you.',
      cta: 'Book a strategy call',
      features: [
        'Everything in Pro — still $0',
        '1-on-1 coaching matched to your strategy',
        'Lending network (DSCR, hard money, private money)',
        'Custom market and zip-code build',
        'Deal review calls with a coach',
        'Transaction coordination',
        'Cash buyer blasting for your market',
        'Dedicated account manager',
      ],
    },
  ],
}

export const faq = {
  title: 'Questions, answered',
  items: [
    {
      q: 'Is Pro really free, or is this a trial?',
      a: 'Pro is $0 forever. There is no card, no trial countdown and no upgrade prompt to unlock the agents. The only paid option is Operator, which is optional coaching and closing support for people who want a team beside them.',
    },
    {
      q: 'Do I need money or experience to start?',
      a: 'Not for contract flipping, where you assign the contract instead of buying the property. For rentals, the underwriting panel shows which financing route fits: DSCR, hard money or seller financing. The AI explains each step in plain English.',
    },
    {
      q: 'Where do the deals come from?',
      a: 'County records, probate filings, sheriff sales, tax-deed auctions, HUD and bank REO lists, plus stale and expired listings. Each card names its source and the date it was pulled.',
    },
    {
      q: 'How accurate is the underwriting?',
      a: 'Rent comps come from nearby leased units and public records; rehab ranges are modeled from condition notes and photos. Every figure shows its source and confidence, and you should still verify with an inspection and a local agent before committing.',
    },
    {
      q: 'How much time does it take?',
      a: 'Most of the searching, drafting and follow-up is automated. A realistic week is a couple of hours reviewing deals and approving outreach, not a full-time job.',
    },
    {
      q: 'What happens to my data?',
      a: 'Your markets, notes and saved deals belong to you. This demo build stores nothing: the form on this page does not save addresses and no email is sent.',
    },
  ],
}

export const cta = {
  title: 'Start with Pro. Pay nothing.',
  description: 'Pick a market, let the agents scan it, and see what comes back tonight.',
  placeholder: 'you@example.com',
  button: 'Create free account',
  success: 'Demo complete. Nothing was saved and no email was sent.',
}

export const footer = {
  blurb: 'AI deal sourcing for real estate investors. Pro is free, forever.',
  columns: [
    { title: 'Product', links: ['Deal feed', 'Underwriting', 'Autopilot', 'Pricing', 'Changelog'] },
    { title: 'Company', links: ['About', 'Blog', 'Careers', 'Contact'] },
    { title: 'Resources', links: ['Guides', 'Deal calculator', 'Glossary', 'Support'] },
    { title: 'Legal', links: ['Privacy', 'Terms', 'Disclosures', 'Licenses'] },
  ],
  legal: `© ${new Date().getFullYear()} ${brand.name}. Demo site, not a licensed brokerage.`,
}
