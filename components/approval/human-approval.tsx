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
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
        Human Approval
      </h2>
      <p className="mt-2 text-xs text-slate-500">
        AgentCFO will not execute payouts without explicit human approval. Blocked items cannot proceed.
      </p>

      <div className="mt-4 space-y-3">
        {approvedItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3"
          >
            <div>
              <p className="text-sm font-medium text-emerald-900">{item.recipient.name}</p>
              <p className="text-xs text-emerald-700">{item.description}</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold text-emerald-900">
                {item.amount} {item.token}
              </p>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-700">
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
            className="flex items-center justify-between rounded-lg border border-red-200 bg-red-50 px-4 py-3"
          >
            <div>
              <p className="text-sm font-medium text-red-900">{item.recipient.name}</p>
              <p className="text-xs text-red-700">{item.description}</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold text-red-900">
                {item.amount} {item.token}
              </p>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-red-700">
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

      <div className="mt-4 rounded-lg border border-blue-200 bg-blue-50 px-4 py-3">
        <p className="text-xs text-blue-800">
          <span className="font-semibold">Policy enforced:</span> All payouts require human approval.
          Blocked items (whitelist failure) are automatically rejected and cannot be approved.
        </p>
      </div>
    </section>
  );
}
