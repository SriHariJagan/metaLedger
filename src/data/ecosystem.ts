import type { LucideIcon } from 'lucide-react'
import {
  Megaphone,
  BadgeCheck,
  Receipt,
  UserPlus,
  Workflow,
  Package,
  CreditCard,
  HeartPulse,
  GraduationCap,
  Leaf,
  Navigation,
} from 'lucide-react'

export interface EcosystemProduct {
  id: string
  name: string
  subtitle: string
  description: string
  benefitForMetaLedger: string
  icon: LucideIcon
  href: string
  accent: string // hex color
  external: boolean
}

const PRODUCT_ICONS: Record<string, LucideIcon> = {
  metahealth: HeartPulse,
  metaedu: GraduationCap,
  metagreen: Leaf,
  metaflow: Workflow,
  metahire: UserPlus,
  metacheck: BadgeCheck,
  metaads: Megaphone,
  metanav: Navigation,
  metaledger: Receipt,
  metacard: CreditCard,
  metaim: Package,
}

const ACCENTS: Record<string, string> = {
  metahealth: '#14B8A6',
  metaedu: '#0066FF',
  metagreen: '#10B981',
  metaflow: '#8B5CF6',
  metahire: '#0066FF',
  metacheck: '#F59E0B',
  metaads: '#8B5CF6',
  metanav: '#F97316',
  metaledger: '#0756F2',
  metacard: '#6366F1',
  metaim: '#06B6D4',
}

// All products — mirrors MetaDev constants/products.ts but includes benefit copy for MetaLedger
export const ALL_ECOSYSTEM_PRODUCTS: EcosystemProduct[] = [
  {
    id: 'metahealth',
    name: 'MetaHealth',
    subtitle: 'Healthcare Platform',
    description: 'Hospital & clinic operating system.',
    benefitForMetaLedger: 'Healthcare providers reconcile insurance payouts and patient billing automatically through MetaLedger.',
    icon: PRODUCT_ICONS.metahealth,
    href: 'https://metahealth.metadev.io',
    accent: ACCENTS.metahealth,
    external: true,
  },
  {
    id: 'metaedu',
    name: 'MetaEdu',
    subtitle: 'EdTech Platform',
    description: 'Learning management & live classrooms.',
    benefitForMetaLedger: 'Sync tuition billing, refunds and installments from MetaEdu straight into your books — zero manual entry.',
    icon: PRODUCT_ICONS.metaedu,
    href: 'https://metaedu.metadev.io',
    accent: ACCENTS.metaedu,
    external: true,
  },
  {
    id: 'metagreen',
    name: 'MetaGreen',
    subtitle: 'Sustainability',
    description: 'Carbon & ESG tracking.',
    benefitForMetaLedger: 'Attach verified carbon credits and ESG costs from MetaGreen directly to ledger entries for audit-ready reporting.',
    icon: PRODUCT_ICONS.metagreen,
    href: 'https://metagreen.metadev.io',
    accent: ACCENTS.metagreen,
    external: true,
  },
  {
    id: 'metaflow',
    name: 'MetaFlow',
    subtitle: 'Enterprise Workflow',
    description: 'Approvals & automation.',
    benefitForMetaLedger: 'Route invoice approvals, payment authorizations and period closes through MetaFlow workflows.',
    icon: PRODUCT_ICONS.metaflow,
    href: 'https://metaflow.metadev.io',
    accent: ACCENTS.metaflow,
    external: true,
  },
  {
    id: 'metahire',
    name: 'MetaHire',
    subtitle: 'Hiring & Talent',
    description: 'Talent pipeline & interviews.',
    benefitForMetaLedger: 'Tie recruiting spend, salaries and contractor invoices from MetaHire to budget lines in real time.',
    icon: PRODUCT_ICONS.metahire,
    href: 'https://metahire.metadev.io',
    accent: ACCENTS.metahire,
    external: true,
  },
  {
    id: 'metacheck',
    name: 'MetaCheck',
    subtitle: 'Verification',
    description: 'Fraud & compliance shield.',
    benefitForMetaLedger: 'MetaCheck screens transactions and vendors pre-payment, flagging fraud before money moves.',
    icon: PRODUCT_ICONS.metacheck,
    href: 'https://metacheck.metadev.io',
    accent: ACCENTS.metacheck,
    external: true,
  },
  {
    id: 'metaads',
    name: 'MetaAds',
    subtitle: 'AdTech & Marketing',
    description: 'Unified campaigns, attribution and AI optimization.',
    benefitForMetaLedger: 'Attribute ad spend to revenue precisely — MetaAds campaigns reconcile against actual sales in MetaLedger.',
    icon: PRODUCT_ICONS.metaads,
    href: 'https://metaads.metadev.io',
    accent: ACCENTS.metaads,
    external: true,
  },
  {
    id: 'metanav',
    name: 'MetaNav',
    subtitle: 'Fleet & Logistics',
    description: 'Route & fleet control.',
    benefitForMetaLedger: 'Reconcile fuel, tolls and logistics costs per route with live data synced from MetaNav.',
    icon: PRODUCT_ICONS.metanav,
    href: 'https://metanav.metadev.io',
    accent: ACCENTS.metanav,
    external: true,
  },
  {
    id: 'metaledger',
    name: 'MetaLedger',
    subtitle: 'Billing & Finance',
    description: 'Invoicing & revenue reconciliation.',
    benefitForMetaLedger: 'The core: every transaction captured, reconciled and reported — one source of financial truth.',
    icon: PRODUCT_ICONS.metaledger,
    href: '/',
    accent: ACCENTS.metaledger,
    external: false,
  },
  {
    id: 'metacard',
    name: 'MetaCard',
    subtitle: 'Digital ID',
    description: 'Verified identity cards.',
    benefitForMetaLedger: 'Issue verified corporate cards through MetaCard where every swipe lands auto-reconciled in the ledger.',
    icon: PRODUCT_ICONS.metacard,
    href: 'https://metacard.metadev.io',
    accent: ACCENTS.metacard,
    external: true,
  },
  {
    id: 'metaim',
    name: 'MetaIM',
    subtitle: 'Inventory',
    description: 'Stock & catalog sync.',
    benefitForMetaLedger: 'COGS stays accurate as MetaIM stock movements flow into inventory valuation automatically.',
    icon: PRODUCT_ICONS.metaim,
    href: 'https://metaim.metadev.io',
    accent: ACCENTS.metaim,
    external: true,
  },
]

// For MetaLedger: only show useful companions (not every product). Curated for finance relevance.
export const METALEDGER_ECOSYSTEM_IDS = ['metacheck', 'metacard', 'metaflow', 'metaads', 'metaim', 'metahire'] as const

export function getUsefulFor(productId: string): EcosystemProduct[] {
  if (productId === 'metaledger') {
    return ALL_ECOSYSTEM_PRODUCTS.filter((p) => (METALEDGER_ECOSYSTEM_IDS as readonly string[]).includes(p.id))
  }
  // Generic fallback: show 4 others that are most commonly useful (used when reusing section in other product pages)
  const priority: Record<string, string[]> = {
    metahire: ['metaledger', 'metacheck', 'metacard', 'metaflow'],
    metacheck: ['metaledger', 'metacard', 'metaflow', 'metaads'],
    metahealth: ['metaledger', 'metacheck', 'metaedu', 'metacard'],
    metaedu: ['metaledger', 'metahire', 'metacheck', 'metacard'],
    default: ['metaledger', 'metacheck', 'metacard', 'metaflow'],
  }
  const ids = priority[productId] || priority.default
  return ALL_ECOSYSTEM_PRODUCTS.filter((p) => ids.includes(p.id))
}

export function getProductById(id: string): EcosystemProduct | undefined {
  return ALL_ECOSYSTEM_PRODUCTS.find((p) => p.id === id)
}
