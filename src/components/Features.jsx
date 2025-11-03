import { Rocket, Server, Shield, Zap, Cloud, Globe } from 'lucide-react'

const features = [
  {
    title: '1‑Click WordPress',
    description:
      'Spin up production‑ready WordPress with a single click — pre‑tuned for performance and security.',
    icon: Rocket,
  },
  {
    title: 'Managed AWS',
    description:
      'We handle VPCs, compute, storage, networking, scaling, and updates — you focus on content.',
    icon: Server,
  },
  {
    title: 'Blazing Fast',
    description:
      'Edge caching, PHP optimizations, object cache, and image compression out of the box.',
    icon: Zap,
  },
  {
    title: 'Security First',
    description:
      'Automatic SSL, WAF, DDoS protection, daily malware scans, and role‑based access.',
    icon: Shield,
  },
  {
    title: 'Global Delivery',
    description:
      'Built‑in CDN accelerates your site worldwide with zero config.',
    icon: Globe,
  },
  {
    title: 'AWS Native',
    description:
      'Runs on top of AWS for reliability and durability — backups to S3 and multi‑AZ support.',
    icon: Cloud,
  },
]

export default function Features() {
  return (
    <section className="relative bg-white" id="features">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Everything you need to launch and scale</h2>
          <p className="mt-3 text-gray-600">
            Production‑grade infrastructure, tuned for WordPress — without the complexity of managing AWS yourself.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, description, icon: Icon }) => (
            <div key={title} className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
