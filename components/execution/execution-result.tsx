import type { CAWExecution } from "@/lib/api/types";

interface ExecutionResultProps {
  executions: CAWExecution[];
}

function truncateHash(hash: string): string {
  if (hash.length <= 18) return hash;
  return `${hash.slice(0, 8)}...${hash.slice(-6)}`;
}

export function ExecutionResult({ executions }: ExecutionResultProps) {
  const totalExecuted = executions.reduce((sum, ex) => sum + ex.amount, 0);

  return (
    <section className="rounded-xl border border-slate-200 bg-white shadow-sm">
      {/* Simulated banner */}
      <div className="rounded-t-xl border-b border-amber-200 bg-amber-50 px-6 py-3">
        <div className="flex items-center gap-2">
          <svg className="h-4 w-4 text-amber-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-xs font-semibold text-amber-800">
            Simulated Execution — No real blockchain transaction occurred
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Execution Result
          </h2>
          <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
            Base Sepolia (testnet)
          </span>
        </div>

        <div className="mt-5 space-y-3">
          {executions.map((ex, index) => (
            <div
              key={ex.transactionHash + index}
              className="rounded-lg border border-slate-100 bg-slate-50 px-4 py-3"
            >
              <div className="flex items-center justify-between">
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-slate-900">
                    {ex.amount} {ex.token} → {ex.recipientWallet.slice(0, 8)}...{ex.recipientWallet.slice(-4)}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Mock tx: {truncateHash(ex.transactionHash)}
                  </p>
                </div>
                <span className="ml-4 inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                  <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {ex.paymentStatus}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50 px-4 py-3">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-slate-400">Agent Wallet</p>
            <p className="text-sm font-medium text-slate-700">
              {executions[0]?.agentWalletAddress?.slice(0, 10)}...
              {executions[0]?.agentWalletAddress?.slice(-6) ?? "N/A"}
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs font-medium uppercase tracking-wider text-slate-400">Total Executed</p>
            <p className="text-lg font-bold text-slate-900">{totalExecuted} USDC</p>
          </div>
        </div>
      </div>
    </section>
  );
}
