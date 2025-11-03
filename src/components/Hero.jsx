import { Rocket, Shield, Zap } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50" />
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-gradient-to-tr from-indigo-300/30 to-cyan-300/30 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-indigo-700 ring-1 ring-indigo-200 backdrop-blur">
            <Zap className="h-3.5 w-3.5" />
            Launch on AWS in minutes
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
            Deploy WordPress without the ops.
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            A modern Platform-as-a-Service that handles servers, scaling, backups, and security —
            so you can launch fast and grow with confidence on top of AWS.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <a
              href="#get-started"
              className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm ring-1 ring-indigo-600 transition hover:bg-indigo-500"
            >
              <Rocket className="mr-2 h-4 w-4" />
              Get started free
            </a>
            <a
              href="#how"
              className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-gray-900 ring-1 ring-gray-200 transition hover:bg-gray-50"
            >
              See how it works
            </a>
          </div>
          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-emerald-600" />
              Free SSL & daily backups
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-amber-500" />
              Optimized for speed
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
