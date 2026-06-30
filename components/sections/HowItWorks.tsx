import { steps } from "@/lib/data";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function HowItWorks() {
  return (
    <AnimatedSection
      id="how-it-works"
      className="bg-card py-20 lg:py-28"
    >
      <Container>
        <SectionHeading
          eyebrow="How It Works"
          title="Your Path to Placement Success"
          subtitle="Four simple steps from assessment to offer letter — powered by AI every step of the way."
        />

        <div className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-8 hidden h-0.5 bg-gradient-to-r from-primary to-accent lg:block" />

          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative text-center">
                <div className="relative z-10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent text-white shadow-lg shadow-primary/25">
                  <Icon className="h-7 w-7" />
                </div>
                <div className="absolute left-1/2 top-8 z-0 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-card bg-primary lg:block" />
                <span className="mb-2 inline-block text-sm font-bold text-primary">
                  Step {step.number}
                </span>
                <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </AnimatedSection>
  );
}
