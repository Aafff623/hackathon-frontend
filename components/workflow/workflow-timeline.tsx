import type { DemoStep } from "@/lib/workflow/demo-steps";
import { demoSteps } from "@/lib/workflow/demo-steps";
import type { RiskCheckResult } from "@/lib/api/types";

interface WorkflowTimelineProps {
  riskResult: RiskCheckResult;
}

function resolveStepStatus(
  step: DemoStep,
  riskResult: RiskCheckResult
): DemoStep["status"] {
  // If risk check failed, mark that step as blocked to show it was flagged
  if (step.id === "risk-check" && !riskResult.passed) {
    return "blocked";
  }
  return "completed";
}

function StepIcon({ status, index }: { status: DemoStep["status"]; index: number }) {
  if (status === "completed") {
    return (
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white shadow-sm">
        <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
    );
  }
  if (status === "blocked") {
    return (
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-500 text-white shadow-sm">
        <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
    );
  }
  return (
    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-200 text-slate-500">
      <span className="text-xs font-medium">{index + 1}</span>
    </div>
  );
}

export function WorkflowTimeline({ riskResult }: WorkflowTimelineProps) {
  const hasRiskFlagged = !riskResult.passed;

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          Agent Workflow
        </h2>
        {hasRiskFlagged ? (
          <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-700">
            <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            Workflow complete · Risk flagged
          </span>
        ) : (
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
            <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            All steps completed
          </span>
        )}
      </div>

      <div className="mt-6">
        {/* Desktop: horizontal timeline */}
        <div className="hidden sm:flex sm:items-start sm:justify-between">
          {demoSteps.map((step, index) => {
            const status = resolveStepStatus(step, riskResult);
            const isLast = index === demoSteps.length - 1;
            return (
              <div key={step.id} className="flex flex-1 flex-col items-center">
                <div className="flex w-full items-center">
                  <div className="flex flex-1 justify-end pr-2">
                    {!isLast && (
                      <div className="h-0.5 w-full bg-blue-100" />
                    )}
                  </div>
                  <StepIcon status={status} index={index} />
                  <div className="flex flex-1 justify-start pl-2">
                    {!isLast && (
                      <div className="h-0.5 w-full bg-blue-100" />
                    )}
                  </div>
                </div>
                <div className="mt-3 text-center">
                  <p className="text-sm font-medium text-slate-900">{step.title}</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-slate-500">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile: vertical timeline */}
        <div className="space-y-4 sm:hidden">
          {demoSteps.map((step, index) => {
            const status = resolveStepStatus(step, riskResult);
            const isLast = index === demoSteps.length - 1;
            return (
              <div key={step.id} className="flex items-start gap-3">
                <div className="flex flex-col items-center">
                  <StepIcon status={status} index={index} />
                  {!isLast && (
                    <div className="mt-1 h-6 w-0.5 bg-blue-100" />
                  )}
                </div>
                <div className="pb-2">
                  <p className="text-sm font-medium text-slate-900">{step.title}</p>
                  <p className="text-xs text-slate-500">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
