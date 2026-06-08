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
  // All steps are completed in this mock demo
  if (step.id === "risk-check" && !riskResult.passed) {
    return "completed";
  }
  return "completed";
}

function StepIcon({ status, index }: { status: DemoStep["status"]; index: number }) {
  if (status === "completed") {
    return (
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">
        <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
    );
  }
  if (status === "blocked") {
    return (
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-500 text-white">
        <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
    );
  }
  return (
    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 text-slate-500">
      <span className="text-xs font-medium">{index + 1}</span>
    </div>
  );
}

export function WorkflowTimeline({ riskResult }: WorkflowTimelineProps) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
        Agent Workflow
      </h2>
      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-0">
        {demoSteps.map((step, index) => {
          const status = resolveStepStatus(step, riskResult);
          const isLast = index === demoSteps.length - 1;
          return (
            <div key={step.id} className="flex items-center gap-3 sm:flex-1 sm:flex-col sm:gap-2">
              <div className="flex items-center gap-3 sm:flex-col sm:gap-2">
                <StepIcon status={status} index={index} />
                {!isLast && (
                  <div className="hidden h-px w-8 bg-slate-200 sm:block sm:h-8 sm:w-px" />
                )}
              </div>
              <div className="sm:text-center">
                <p className="text-sm font-medium text-slate-900">{step.title}</p>
                <p className="text-xs text-slate-500">{step.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
