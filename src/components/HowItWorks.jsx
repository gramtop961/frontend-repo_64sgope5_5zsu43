import { MapPin, Rocket, CheckCircle2 } from 'lucide-react'

const steps = [
  {
    id: 1,
    title: 'Create your site',
    description: 'Name your WordPress site and pick a performance tier that fits your traffic.',
    icon: CheckCircle2,
  },
  {
    id: 2,
    title: 'Choose region',
    description: 'Select the AWS region closest to your audience for the lowest latency.',
    icon: MapPin,
  },
  {
    id: 3,
    title: 'Click deploy',
    description: 'We provision, secure, and optimize everything automatically. Go live in minutes.',
    icon: Rocket,
  },
]

export default function HowItWorks() {
  return (
    <section className="relative bg-gradient-to-b from-white to-indigo-50/40" id="how">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">How it works</h2>
          <p className="mt-3 text-gray-600">Launch production‑ready WordPress in three simple steps.</p>
        </div>

        <ol className="mt-12 grid gap-6 sm:grid-cols-3">
          {steps.map(({ id, title, description, icon: Icon }) => (
            <li key={id} className="relative rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-white">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{id}. {title}</h3>
              <p className="mt-2 text-sm text-gray-600">{description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
