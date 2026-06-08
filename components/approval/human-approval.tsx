import type { PaymentPlan } from "@/lib/api/types";
import type { RiskCheckResult } from "@/lib/api/types";

interface HumanApprovalProps {
  plan: PaymentPlan;
  riskResult: RiskCheckResult;
}

export function HumanApproval({ plan, riskResult }: HumanApprovalProps) {
  const blockedWallets = riskResult.checks.whitelistCheck.blockedWallets ?? [];
  const approvedItems = plan.items.filter(
    (item) => !blockedWallets.includes(item.recipient.walletAddress)
  );
  const blockedItems = plan.items.filter(
    (item) => blockedWallets.includes(item.recipient.walletAddress)
  );

  return (
    <section className="relative overflow-hidden rounded-xl border border-white/10 bg-slate-900/60 backdrop-blur-sm p-5">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
      <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
        Human Approval
      </h2>
      <p className="mt-1 text-[11px] text-slate-500">
        AgentCFO will not execute payouts without explicit human approval. Blocked items cannot proceed.
      </p>

      <div className="mt-4 space-y-2">
        {approvedItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between rounded-lg border border-emerald-500/15 bg-emerald-500/5 px-4 py-3"
          >
            <div>
              <p className="text-sm font-medium text-emerald-300">{item.recipient.name}</p>
              <p className="text-[11px] text-emerald-400/70">{item.description}</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold text-emerald-300">
                {item.amount} {item.token}
              </p>
              <span className="inline-flex items-center gap-1 text-[10px] font-medium text-emerald-400">
                <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Approved
              </span>
            </div>
          </div>
        ))}

        {blockedItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between rounded-lg border border-red-500/15 bg-red-500/5 px-4 py-3"
          >
            <div>
              <p className="text-sm font-medium text-red-300">{item.recipient.name}</p>
              <p className="text-[11px] text-red-400/70">{item.description}</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold text-red-300">
                {item.amount} {item.token}
              </p>
              <span className="inline-flex items-center gap-1 text-[10px] font-medium text-red-400">
                <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
                Blocked
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-lg border border-blue-500/15 bg-blue-500/5 px-4 py-3">
        <p className="text-[11px] text-blue-300">
          <span className="font-semibold">Policy enforced:</span> All payouts require human approval.
          Blocked items (whitelist failure) are automatically rejected and cannot be approved.
        </p>
      </div>
    </section>
  );
}
