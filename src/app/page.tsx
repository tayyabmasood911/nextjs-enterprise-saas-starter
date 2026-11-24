export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero Section */}
      <div className="text-center space-y-6 max-w-3xl mx-auto">
        <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-700/10">
          Next.js 14 App Router &bull; Production SaaS Architecture
        </div>
        <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
          Scale Your SaaS to <span className="text-blue-600">Enterprise Grade</span>
        </h1>
        <p className="text-lg text-slate-600">
          A robust, multi-tenant boilerplate featuring React Server Components, Edge Middleware,
          Stripe customer billing, API route handlers, and Dockerized standalone deployments.
        </p>
        <div className="flex justify-center gap-4 pt-4">
          <a
            href="/dashboard"
            className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition"
          >
            Launch Live Dashboard &rarr;
          </a>
          <a
            href="/api/health"
            className="rounded-lg bg-slate-100 px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-200 transition"
          >
            Check API Health
          </a>
        </div>
      </div>

      {/* Feature Grid */}
      <div id="features" className="mt-24 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition">
          <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center font-bold mb-4">
            01
          </div>
          <h3 className="text-lg font-bold text-slate-900">App Router &amp; RSC</h3>
          <p className="mt-2 text-sm text-slate-600">
            Next.js 14+ architecture featuring streaming server-side rendering, nested layouts, and suspense boundaries.
          </p>
        </div>

        <div className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition">
          <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold mb-4">
            02
          </div>
          <h3 className="text-lg font-bold text-slate-900">Edge Middleware</h3>
          <p className="mt-2 text-sm text-slate-600">
            Sub-millisecond authentication verification, multi-tenant hostname resolution, and path protection at the edge.
          </p>
        </div>

        <div className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition">
          <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center font-bold mb-4">
            03
          </div>
          <h3 className="text-lg font-bold text-slate-900">Production Docker</h3>
          <p className="mt-2 text-sm text-slate-600">
            Multi-stage Dockerfile packaging standalone Node.js builds into ultra-compact, non-root hardened containers.
          </p>
        </div>
      </div>
    </div>
  );
}
