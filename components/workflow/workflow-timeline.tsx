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
    return "completed";
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
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          Agent Workflow
        </h2>
        <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
          All steps completed
        </span>
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
