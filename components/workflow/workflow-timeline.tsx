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
  if (step.id === "risk-check" && !riskResult.passed) {
    return "blocked";
  }
  return "completed";
}

function StepIcon({ status, index }: { status: DemoStep["status"]; index: number }) {
  if (status === "completed") {
    return (
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 ring-1 ring-emerald-500/30">
        <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
    );
  }
  if (status === "blocked") {
    return (
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-amber-400 ring-1 ring-amber-500/30">
        <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
    );
  }
  return (
    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-800 text-slate-500 ring-1 ring-white/10">
      <span className="text-xs font-medium">{index + 1}</span>
    </div>
  );
}

export function WorkflowTimeline({ riskResult }: WorkflowTimelineProps) {
  const hasRiskFlagged = !riskResult.passed;

  return (
    <section className="relative overflow-hidden rounded-xl border border-white/10 bg-slate-900/60 backdrop-blur-sm p-5">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
      <div className="flex items-center justify-between">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
          Agent Workflow
        </h2>
        {hasRiskFlagged ? (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/20 bg-amber-500/10 px-2.5 py-1 text-xs font-semibold text-amber-400">
            <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            Risk flagged
          </span>
        ) : (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-400">
            <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            All clear
          </span>
        )}
      </div>

      <div className="mt-5">
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
                      <div className="h-px w-full bg-gradient-to-r from-slate-700 to-slate-700" />
                    )}
                  </div>
                  <StepIcon status={status} index={index} />
                  <div className="flex flex-1 justify-start pl-2">
                    {!isLast && (
                      <div className="h-px w-full bg-gradient-to-r from-slate-700 to-slate-700" />
                    )}
                  </div>
                </div>
                <div className="mt-3 text-center">
                  <p className="text-xs font-medium text-slate-200">{step.title}</p>
                  <p className="mt-0.5 text-[10px] leading-relaxed text-slate-500">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile: vertical timeline */}
        <div className="space-y-3 sm:hidden">
          {demoSteps.map((step, index) => {
            const status = resolveStepStatus(step, riskResult);
            const isLast = index === demoSteps.length - 1;
            return (
              <div key={step.id} className="flex items-start gap-3">
                <div className="flex flex-col items-center">
                  <StepIcon status={status} index={index} />
                  {!isLast && (
                    <div className="mt-1 h-5 w-px bg-slate-700" />
                  )}
                </div>
                <div className="pb-2">
                  <p className="text-xs font-medium text-slate-200">{step.title}</p>
                  <p className="text-[10px] text-slate-500">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
