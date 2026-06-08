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
    <section className="relative overflow-hidden rounded-xl border border-white/10 bg-slate-900/60 backdrop-blur-sm">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />

      {/* Simulated banner */}
      <div className="border-b border-amber-500/15 bg-amber-500/5 px-5 py-2.5">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-[11px] font-semibold text-amber-400">
            Simulated Execution — No real blockchain transaction occurred
          </span>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Execution Result
          </h2>
          <span className="rounded-full border border-white/10 bg-slate-950/50 px-2.5 py-1 text-[10px] font-medium text-slate-400">
            Base Sepolia (testnet)
          </span>
        </div>

        <div className="mt-4 space-y-2">
          {executions.map((ex, index) => (
            <div
              key={ex.transactionHash + index}
              className="rounded-lg border border-white/5 bg-slate-950/50 px-4 py-3"
            >
              <div className="flex items-center justify-between">
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-slate-200">
                    {ex.amount} {ex.token} → {ex.recipientWallet.slice(0, 8)}...{ex.recipientWallet.slice(-4)}
                  </p>
                  <p className="mt-1 text-[11px] text-slate-500">
                    Mock tx: <span className="font-mono text-slate-400">{truncateHash(ex.transactionHash)}</span>
                  </p>
                </div>
                <span className="ml-4 inline-flex items-center gap-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-1 text-[10px] font-semibold text-emerald-400">
                  <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {ex.paymentStatus}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-3 flex items-center justify-between rounded-lg border border-white/5 bg-slate-950/50 px-4 py-3">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-wider text-slate-600">Agent Wallet</p>
            <p className="mt-0.5 text-sm font-mono text-slate-400">
              {executions[0]?.agentWalletAddress?.slice(0, 10)}...
              {executions[0]?.agentWalletAddress?.slice(-6) ?? "N/A"}
            </p>
          </div>
          <div className="text-right">
            <p className="text-[10px] font-medium uppercase tracking-wider text-slate-600">Total Executed</p>
            <p className="mt-0.5 text-lg font-bold text-slate-100">{totalExecuted} USDC</p>
          </div>
        </div>
      </div>
    </section>
  );
}
