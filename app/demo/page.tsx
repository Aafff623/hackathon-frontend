import { DemoShell } from "@/components/demo/demo-shell";
import { DemoSummary } from "@/components/demo/demo-summary";
import { WorkflowTimeline } from "@/components/workflow/workflow-timeline";
import { PaymentPlanBoard } from "@/components/payment/payment-plan";
import { RiskGate } from "@/components/risk/risk-gate";
import { HumanApproval } from "@/components/approval/human-approval";
import { ExecutionResult } from "@/components/execution/execution-result";
import { AuditReport } from "@/components/audit/audit-report";

import { demoData } from "@/lib/demo/demo-data";

export default function DemoPage() {
  return (
    <DemoShell>
      <div className="space-y-6">
        <DemoSummary
          paymentPlan={demoData.paymentPlan}
          riskResult={demoData.riskResult}
          executions={demoData.executions}
        />

        <WorkflowTimeline riskResult={demoData.riskResult} />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <PaymentPlanBoard plan={demoData.paymentPlan} riskResult={demoData.riskResult} />
          </div>
          <div className="lg:col-span-5">
            <RiskGate result={demoData.riskResult} />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <HumanApproval plan={demoData.paymentPlan} riskResult={demoData.riskResult} />
          </div>
          <div className="lg:col-span-6">
            <ExecutionResult executions={demoData.executions} />
          </div>
        </div>

        <AuditReport report={demoData.auditReport} plan={demoData.paymentPlan} />
      </div>
    </DemoShell>
  );
}
