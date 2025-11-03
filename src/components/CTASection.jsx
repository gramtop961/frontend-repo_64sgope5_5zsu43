export default function CTASection() {
  return (
    <section id="get-started" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 to-cyan-600 p-8 sm:p-12">
          <div className="mx-auto max-w-3xl text-center text-white">
            <h3 className="text-3xl font-bold sm:text-4xl">Go live today — your first site is on us</h3>
            <p className="mt-3 text-indigo-100">
              Start free, then scale on a transparent, usage‑based plan. Migrate anytime with one click.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-indigo-700 ring-1 ring-white/20 transition hover:bg-indigo-50"
              >
                Create a free site
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-lg bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/30 backdrop-blur transition hover:bg-white/20"
              >
                View pricing
              </a>
            </div>
            <p className="mt-4 text-xs text-indigo-100">No credit card required • Cancel anytime</p>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-gray-500">Built on AWS • Automated backups • Global CDN • 99.9% uptime SLA</p>
      </div>
    </section>
  )
}
