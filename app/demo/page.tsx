import { DemoShell } from "@/components/demo/demo-shell";
import { WorkflowTimeline } from "@/components/workflow/workflow-timeline";
import { PaymentPlanBoard } from "@/components/payment/payment-plan";
import { RiskGate } from "@/components/risk/risk-gate";
import { HumanApproval } from "@/components/approval/human-approval";
import { ExecutionResult } from "@/components/execution/execution-result";
import { AuditReport } from "@/components/audit/audit-report";

import { mockPaymentPlan } from "@/lib/mock/payment-plan";
import { mockRiskCheckResult } from "@/lib/mock/risk-check";
import { mockCAWExecutions } from "@/lib/mock/caw-execution";
import { mockAuditReport } from "@/lib/mock/audit-report";

export default function DemoPage() {
  return (
    <DemoShell>
      <div className="space-y-8">
        <WorkflowTimeline riskResult={mockRiskCheckResult} />
        <PaymentPlanBoard plan={mockPaymentPlan} riskResult={mockRiskCheckResult} />
        <RiskGate result={mockRiskCheckResult} />
        <HumanApproval plan={mockPaymentPlan} riskResult={mockRiskCheckResult} />
        <ExecutionResult executions={mockCAWExecutions} />
        <AuditReport report={mockAuditReport} />
      </div>
    </DemoShell>
  );
}
