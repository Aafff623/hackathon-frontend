import { DemoShell } from "@/components/demo/demo-shell";
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
      <div className="space-y-8">
        <WorkflowTimeline riskResult={demoData.riskResult} />
        <PaymentPlanBoard plan={demoData.paymentPlan} riskResult={demoData.riskResult} />
        <RiskGate result={demoData.riskResult} />
        <HumanApproval plan={demoData.paymentPlan} riskResult={demoData.riskResult} />
        <ExecutionResult executions={demoData.executions} />
        <AuditReport report={demoData.auditReport} plan={demoData.paymentPlan} />
      </div>
    </DemoShell>
  );
}
