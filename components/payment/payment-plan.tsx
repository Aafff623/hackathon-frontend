import type { PaymentPlan } from "@/lib/api/types";
import type { RiskCheckResult } from "@/lib/api/types";

interface PaymentPlanProps {
  plan: PaymentPlan;
  riskResult: RiskCheckResult;
}

function getItemStatus(
  walletAddress: string,
  riskResult: RiskCheckResult
): { label: string; style: string; borderStyle: string } {
  const blockedWallets = riskResult.checks.whitelistCheck.blockedWallets ?? [];
  if (blockedWallets.includes(walletAddress)) {
    return {
      label: "Blocked",
      style: "bg-red-50 text-red-700 border-red-200",
      borderStyle: "border-l-4 border-l-red-400",
    };
  }
  return {
    label: "Approved",
    style: "bg-emerald-50 text-emerald-700 border-emerald-200",
    borderStyle: "border-l-4 border-l-emerald-400",
  };
}

function getRiskLevel(
  walletAddress: string,
  riskResult: RiskCheckResult
): { label: string; style: string } {
  const blockedWallets = riskResult.checks.whitelistCheck.blockedWallets ?? [];
  if (blockedWallets.includes(walletAddress)) {
    return { label: "High", style: "bg-red-100 text-red-700" };
  }
  return { label: "Low", style: "bg-slate-100 text-slate-600" };
}

function truncateAddress(addr: string): string {
  if (addr.length <= 14) return addr;
  return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
}

export function PaymentPlanBoard({ plan, riskResult }: PaymentPlanProps) {
  const approvedItems = plan.items.filter((item) => {
    const blockedWallets = riskResult.checks.whitelistCheck.blockedWallets ?? [];
    return !blockedWallets.includes(item.recipient.walletAddress);
  });
  const blockedItems = plan.items.filter((item) => {
    const blockedWallets = riskResult.checks.whitelistCheck.blockedWallets ?? [];
    return blockedWallets.includes(item.recipient.walletAddress);
  });

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Payment Plan
          </h2>
          <p className="mt-1 text-xs text-slate-500">
            {approvedItems.length} approved · {blockedItems.length} blocked · {plan.items.length} total
          </p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-slate-900">
            {plan.totalAmount} <span className="text-lg font-semibold text-slate-500">{plan.token}</span>
          </p>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        {plan.items.map((item) => {
          const status = getItemStatus(item.recipient.walletAddress, riskResult);
          const risk = getRiskLevel(item.recipient.walletAddress, riskResult);
          return (
            <div
              key={item.id}
              className={`flex items-center justify-between rounded-lg border border-slate-100 bg-white px-4 py-3.5 shadow-sm ${status.borderStyle}`}
            >
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold text-slate-900">{item.recipient.name}</p>
                  <span
                    className={`inline-flex rounded-full border px-2 py-0.5 text-xs font-semibold uppercase tracking-wide ${status.style}`}
                  >
                    {status.label}
                  </span>
                </div>
                <p className="mt-1 text-xs text-slate-500">
                  {truncateAddress(item.recipient.walletAddress)} · {item.description}
                </p>
              </div>
              <div className="ml-4 text-right">
                <p className="text-sm font-bold text-slate-900">
                  {item.amount} {item.token}
                </p>
                <span
                  className={`inline-flex rounded px-1.5 py-0.5 text-xs font-medium ${risk.style}`}
                >
                  {risk.label} risk
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
