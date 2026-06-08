import { PROJECT_NAME, PROJECT_TAGLINE } from "@/lib/constants/project";

export function DemoShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <div className="flex items-baseline gap-3">
            <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
              {PROJECT_NAME}
            </h1>
            <span className="text-sm text-slate-500">{PROJECT_TAGLINE}</span>
          </div>
          <p className="mt-2 text-sm text-slate-500">
            AI Treasury Command Center for DAO payouts
          </p>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-6 py-10">{children}</main>
    </div>
  );
}
