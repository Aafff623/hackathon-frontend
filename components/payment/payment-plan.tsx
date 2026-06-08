import type { PaymentPlan } from "@/lib/api/types";
import type { RiskCheckResult } from "@/lib/api/types";

interface PaymentPlanProps {
  plan: PaymentPlan;
  riskResult: RiskCheckResult;
}

function getItemStatus(
  walletAddress: string,
  riskResult: RiskCheckResult
): { label: string; style: string; borderStyle: string; glow: string } {
  const blockedWallets = riskResult.checks.whitelistCheck.blockedWallets ?? [];
  if (blockedWallets.includes(walletAddress)) {
    return {
      label: "Blocked",
      style: "border-red-500/30 bg-red-500/10 text-red-400",
      borderStyle: "border-l-2 border-l-red-500/60",
      glow: "shadow-[0_0_16px_rgba(239,68,68,0.06)]",
    };
  }
  return {
    label: "Approved",
    style: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
    borderStyle: "border-l-2 border-l-emerald-500/60",
    glow: "shadow-[0_0_16px_rgba(16,185,129,0.06)]",
  };
}

function getRiskLevel(
  walletAddress: string,
  riskResult: RiskCheckResult
): { label: string; style: string } {
  const blockedWallets = riskResult.checks.whitelistCheck.blockedWallets ?? [];
  if (blockedWallets.includes(walletAddress)) {
    return { label: "High", style: "bg-red-500/15 text-red-400" };
  }
  return { label: "Low", style: "bg-slate-800 text-slate-400" };
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
    <section className="relative overflow-hidden rounded-xl border border-white/10 bg-slate-900/60 backdrop-blur-sm p-5">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Payment Plan
          </h2>
          <p className="mt-1 text-[11px] text-slate-500">
            {approvedItems.length} approved · {blockedItems.length} blocked · {plan.items.length} total
          </p>
        </div>
        <div className="text-right">
          <p className="text-xl font-bold tracking-tight text-slate-50">
            {plan.totalAmount} <span className="text-sm font-semibold text-slate-400">{plan.token}</span>
          </p>
        </div>
      </div>

      <div className="mt-5 space-y-2.5">
        {plan.items.map((item) => {
          const status = getItemStatus(item.recipient.walletAddress, riskResult);
          const risk = getRiskLevel(item.recipient.walletAddress, riskResult);
          return (
            <div
              key={item.id}
              className={`flex items-center justify-between rounded-lg border border-white/5 bg-slate-950/50 px-4 py-3 ${status.borderStyle} ${status.glow}`}
            >
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold text-slate-200">{item.recipient.name}</p>
                  <span
                    className={`inline-flex rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${status.style}`}
                  >
                    {status.label}
                  </span>
                </div>
                <p className="mt-1 text-[11px] text-slate-500">
                  {truncateAddress(item.recipient.walletAddress)} · {item.description}
                </p>
              </div>
              <div className="ml-4 text-right">
                <p className="text-sm font-bold text-slate-200">
                  {item.amount} {item.token}
                </p>
                <span
                  className={`inline-flex rounded px-1.5 py-0.5 text-[10px] font-medium ${risk.style}`}
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
