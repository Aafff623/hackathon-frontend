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
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          Execution Result
        </h2>
        <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-700">
          <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          Simulated
        </span>
      </div>

      <p className="mt-2 text-xs text-slate-500">
        Mock execution on Base Sepolia testnet. No real blockchain transaction occurred.
      </p>

      <div className="mt-4 space-y-3">
        {executions.map((ex, index) => (
          <div
            key={ex.transactionHash + index}
            className="rounded-lg border border-slate-100 bg-slate-50 px-4 py-3"
          >
            <div className="flex items-center justify-between">
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-slate-900">
                  {ex.amount} {ex.token} → {ex.recipientWallet.slice(0, 8)}...{ex.recipientWallet.slice(-4)}
                </p>
                <p className="mt-0.5 text-xs text-slate-500">
                  Tx: {truncateHash(ex.transactionHash)}
                </p>
              </div>
              <span className="ml-4 inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700">
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
          <p className="text-xs text-slate-500">Agent Wallet</p>
          <p className="text-sm font-medium text-slate-700">
            {executions[0]?.agentWalletAddress?.slice(0, 10)}...
            {executions[0]?.agentWalletAddress?.slice(-6) ?? "N/A"}
          </p>
        </div>
        <div className="text-right">
          <p className="text-xs text-slate-500">Total Executed</p>
          <p className="text-sm font-semibold text-slate-900">{totalExecuted} USDC</p>
        </div>
      </div>
    </section>
  );
}
