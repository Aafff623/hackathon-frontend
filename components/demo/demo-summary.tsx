import type { PaymentPlan, RiskCheckResult, CAWExecution } from "@/lib/api/types";

interface DemoSummaryProps {
  paymentPlan: PaymentPlan;
  riskResult: RiskCheckResult;
  executions: CAWExecution[];
}

export function DemoSummary({ paymentPlan, riskResult, executions }: DemoSummaryProps) {
  const blockedWallets = riskResult.checks.whitelistCheck.blockedWallets ?? [];

  const approvedItems = paymentPlan.items.filter(
    (item) => !blockedWallets.includes(item.recipient.walletAddress)
  );
  const blockedItems = paymentPlan.items.filter(
    (item) => blockedWallets.includes(item.recipient.walletAddress)
  );

  const totalExecuted = executions.reduce((sum, ex) => sum + ex.amount, 0);

  const kpiCards = [
    {
      label: "Planned",
      value: `${paymentPlan.totalAmount} ${paymentPlan.token}`,
      sub: `${paymentPlan.items.length} items`,
      tone: "neutral" as const,
    },
    {
      label: "Approved",
      value: `${approvedItems.length}`,
      sub: `${approvedItems.reduce((s, i) => s + i.amount, 0)} ${paymentPlan.token}`,
      tone: "success" as const,
    },
    {
      label: "Blocked",
      value: `${blockedItems.length}`,
      sub: `${blockedItems.reduce((s, i) => s + i.amount, 0)} ${paymentPlan.token}`,
      tone: "danger" as const,
    },
    {
      label: "Executed",
      value: `${totalExecuted} ${paymentPlan.token}`,
      sub: `${executions.length} tx`,
      tone: "info" as const,
    },
    {
      label: "Mode",
      value: "Simulated",
      sub: "No real transactions",
      tone: "warning" as const,
    },
  ];

  const toneClasses = {
    neutral: "border-white/10 text-slate-50",
    success: "border-emerald-500/30 text-emerald-400",
    danger: "border-red-500/30 text-red-400",
    info: "border-blue-500/30 text-blue-400",
    warning: "border-amber-500/30 text-amber-400",
  };

  const toneGlow = {
    neutral: "",
    success: "shadow-[0_0_20px_rgba(16,185,129,0.08)]",
    danger: "shadow-[0_0_20px_rgba(239,68,68,0.08)]",
    info: "shadow-[0_0_20px_rgba(59,130,246,0.08)]",
    warning: "shadow-[0_0_20px_rgba(245,158,11,0.08)]",
  };

  return (
    <section className="mb-6">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {kpiCards.map((kpi) => (
          <div
            key={kpi.label}
            className={`relative overflow-hidden rounded-xl border bg-slate-900/60 backdrop-blur-sm px-4 py-3.5 ${toneClasses[kpi.tone]} ${toneGlow[kpi.tone]}`}
          >
            <div className="flex flex-col">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                {kpi.label}
              </span>
              <span className="mt-1 text-xl font-bold tracking-tight">
                {kpi.value}
              </span>
              <span className="mt-0.5 text-[11px] text-slate-500">
                {kpi.sub}
              </span>
            </div>
            {/* subtle top border highlight */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>
        ))}
      </div>
    </section>
  );
}
