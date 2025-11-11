export default function Page() {
  return (
    <main className="page-wrapper">
      <h1>Project Briefing: Standardised Cloud Orchestration for Cross-Cloud Migrations</h1>

      <section>
        <h2>Overview</h2>
        <p>
          Standardised cloud orchestration abstracts constructs spanning AWS, Azure, and Google
          Cloud so teams migrate workloads without rebuilding pipelines or governance guardrails.
          This briefing outlines a research and development programme measuring whether open
          orchestration specifications reduce migration friction while sustaining performance and cost
          efficiency.
        </p>
      </section>

      <section>
        <h2>Problem Statement</h2>
        <p>
          Portfolio migrations today demand bespoke integration work for autoscaling, identity, and
          compliance, creating duplicated runbooks, performance regressions, and opaque cost
          variance. Without a portable orchestration layer, platform teams struggle to justify cloud
          diversification strategies because each relocation consumes engineering time and multiplies
          operational risk.
        </p>
      </section>

      <section>
        <h2>Proposed Initiative</h2>
        <p>
          Build an orchestration control plane that harmonises container, serverless, and data
          workloads using Crossplane, the Open Application Model, and provider-neutral Terraform
          modules. Execute mirrored workload migrations each quarter between the three public clouds,
          comparing native deployments with the standardised stack to quantify deployment velocity,
          runtime overhead, and operational expenditure over a twelve-month horizon.
        </p>
      </section>

      <section>
        <h2>Research Questions</h2>
        <p>
          What step-change in deployment lead time and rollback complexity is achieved when
          orchestration policies are portable? How do latency, throughput, and autoscaling
          responsiveness respond to standardised resource compositions under stressing load? Which
          compliance controls can be templated without erasing provider-specific optimisations, and
          how do incident response metrics shift when expertise is encoded once?
        </p>
      </section>

      <section>
        <h2>Stakeholder Benefits</h2>
        <p>
          Cloud platform directors gain evidence for investing in platform engineering capabilities.
          FinOps leaders receive normalised cost baselines that expose amortised migration labour and
          unused services. Security and compliance teams inherit auditable guardrails for identity,
          encryption, and logging. Application delivery squads experience consistent developer
          workflows that lessen cognitive load and support regulated release cadences.
        </p>
      </section>

      <section>
        <h2>Supporting Literature</h2>
        <p>
          Dutta et al. (2023) report Crossplane’s effectiveness in unifying multi-cloud provisioning
          through declarative compositions. Gartner (2024) positions orchestration standardisation as
          a top enablement trend for hybrid resilience. Kim and Villard (2022) model operational
          expenditure reductions tied to policy-as-code adoption. The CNCF Multi-Cloud Working Group
          (2023) documents interoperability gaps that this project seeks to close.
        </p>
      </section>

      <section>
        <h2>Resource Requirements</h2>
        <p>
          Core team of five specialists covering cloud architecture, platform engineering, FinOps,
          and performance research. Tooling stack comprising managed Crossplane clusters, Terraform
          Cloud, GitHub Actions, Prometheus-Grafana observability, and CloudHealth for cost
          attribution. Budget allocations for tri-cloud sandboxes, synthetic load generation,
          security assessments, and stakeholder immersion workshops.
        </p>
      </section>

      <section>
        <h2>Development Plan and Milestones</h2>
        <p>
          Phase 0 (Month 1) finalises governance approvals, success metrics, and baseline test assets.
          Phase 1 (Months 2-3) instruments the reference workloads and captures native cloud
          benchmarks. Phase 2 (Months 4-6) implements the standardised orchestration layer,
          integrating policy-as-code and compliance pipelines. Phase 3 (Months 7-9) runs orchestrated
          migration drills, analysing telemetry and cost deltas. Phase 4 (Months 10-11) validates
          findings with stakeholder panels and codifies decision playbooks. Phase 5 (Month 12)
          publishes comparative results and prepares an adoption roadmap.
        </p>
      </section>

      <section>
        <h2>Expected Outcomes</h2>
        <p>
          The initiative targets a fifteen percent performance overhead reduction and a thirty percent
          decrease in migration runbook labour, producing reusable orchestration templates, cost
          models, and governance artefacts. Executives receive a decision matrix for platform
          investment, while delivery teams gain confidence to execute mandated cloud shifts without
          jeopardising service level objectives.
        </p>
      </section>
    </main>
  );
}
