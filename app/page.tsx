export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16">
      <section className="mx-auto flex max-w-3xl flex-col items-center rounded-2xl border border-slate-200 bg-white px-6 py-12 text-center shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wider text-blue-700">
          Hackathon Demo
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
          AgentCFO / DAO AI 财务官
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
          AI Treasury Command Center for DAO payouts — from contribution records
          to risk-checked payment plans, human approval, simulated wallet
          execution, and audit reports.
        </p>
        <a
          href="/demo"
          className="mt-8 inline-flex rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
        >
          View Demo Console →
        </a>
        <p className="mt-5 text-xs text-slate-500">
          Mock-only frontend demo · No real API, Cobo CAW call, or blockchain
          transaction yet.
        </p>
      </section>
    </main>
  );
}
