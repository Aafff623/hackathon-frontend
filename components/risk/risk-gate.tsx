import type { RiskCheckResult } from "@/lib/api/types";

interface RiskGateProps {
  result: RiskCheckResult;
}

interface CheckItemProps {
  name: string;
  passed: boolean;
  reason?: string;
  warning?: string;
}

function CheckItem({ name, passed, reason, warning }: CheckItemProps) {
  return (
    <div className={`rounded-lg border px-4 py-3 ${passed ? "border-emerald-200 bg-emerald-50" : "border-red-200 bg-red-50"}`}>
      <div className="flex items-center gap-2">
        {passed ? (
          <svg className="h-4 w-4 text-emerald-600" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          <svg className="h-4 w-4 text-red-600" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        )}
        <span className={`text-sm font-medium ${passed ? "text-emerald-800" : "text-red-800"}`}>
          {name}
        </span>
      </div>
      {reason && (
        <p className={`mt-1 text-xs ${passed ? "text-emerald-700" : "text-red-700"}`}>{reason}</p>
      )}
      {warning && (
        <p className="mt-1 text-xs font-medium text-red-700">{warning}</p>
      )}
    </div>
  );
}

export function RiskGate({ result }: RiskGateProps) {
  const { checks } = result;
  const blockedCount = Object.values(checks).filter((c) => !c.passed).length;

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          Risk Gate
        </h2>
        <div className="flex items-center gap-2">
          {result.passed ? (
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
              All Clear
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 rounded-full bg-red-50 px-2.5 py-1 text-xs font-medium text-red-700">
              {blockedCount} check{blockedCount > 1 ? "s" : ""} failed
            </span>
          )}
        </div>
      </div>

      <p className="mt-2 text-xs text-slate-500">
        AI Agent verifies every payout against treasury policy before execution.
      </p>

      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <CheckItem
          name="Budget Check"
          passed={checks.budgetCheck.passed}
          reason={checks.budgetCheck.reason}
        />
        <CheckItem
          name="Whitelist Check"
          passed={checks.whitelistCheck.passed}
          reason={checks.whitelistCheck.reason}
          warning={
            checks.whitelistCheck.blockedWallets
              ? `Blocked: ${checks.whitelistCheck.blockedWallets.join(", ")}`
              : undefined
          }
        />
        <CheckItem
          name="Single-Payment Limit"
          passed={checks.limitCheck.passed}
          reason={checks.limitCheck.reason}
        />
        <CheckItem
          name="Duplicate Check"
          passed={checks.duplicateCheck.passed}
          reason={checks.duplicateCheck.reason}
        />
      </div>
    </section>
  );
}
