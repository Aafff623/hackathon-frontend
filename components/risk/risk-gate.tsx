import type { RiskCheckResult } from "@/lib/api/types";

interface RiskGateProps {
  result: RiskCheckResult;
}

interface CheckItemProps {
  name: string;
  passed: boolean;
  reason?: string;
  warning?: string;
  isFailed?: boolean;
}

function CheckItem({ name, passed, reason, warning, isFailed }: CheckItemProps) {
  return (
    <div
      className={`rounded-lg border px-4 py-3.5 ${
        isFailed
          ? "border-red-300 bg-red-50 shadow-sm"
          : passed
          ? "border-emerald-200 bg-emerald-50"
          : "border-red-200 bg-red-50"
      }`}
    >
      <div className="flex items-center gap-2">
        {passed ? (
          <svg className="h-5 w-5 text-emerald-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ) : (
          <svg className="h-5 w-5 text-red-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )}
        <span className={`text-sm font-semibold ${passed ? "text-emerald-900" : "text-red-900"}`}>
          {name}
        </span>
      </div>
      {reason && (
        <p className={`mt-2 text-xs leading-relaxed ${passed ? "text-emerald-700" : "text-red-700"}`}>
          {reason}
        </p>
      )}
      {warning && (
        <p className="mt-2 text-xs font-semibold leading-relaxed text-red-800">
          {warning}
        </p>
      )}
    </div>
  );
}

export function RiskGate({ result }: RiskGateProps) {
  const { checks } = result;
  const failedChecks = Object.entries(checks).filter(([, c]) => !c.passed);

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Risk Gate
          </h2>
          <p className="mt-1 text-xs text-slate-500">
            AI Agent verifies every payout against treasury policy
          </p>
        </div>
        <div className="flex items-center gap-2">
          {result.passed ? (
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
              <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              All Clear
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 rounded-full bg-red-50 px-3 py-1.5 text-xs font-semibold text-red-700">
              <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {failedChecks.length} check{failedChecks.length > 1 ? "s" : ""} failed
            </span>
          )}
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
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
              ? `Blocked wallets: ${checks.whitelistCheck.blockedWallets.join(", ")}`
              : undefined
          }
          isFailed={!checks.whitelistCheck.passed}
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
