"use client";

import { Footer } from "@/components/footer";
import { DocumentationHeader } from "./docs/documentation-header";
import { ProjectOverviewSection } from "./docs/project-overview-section";
import { DataStructureSection } from "./docs/data-structure-section";
import { HowItWorksSection } from "./docs/how-it-works-section";
import { TechnicalImplementationSection } from "./docs/technical-implementation-section";

export function DocumentationPage() {
  return (
    <div className="min-h-screen grid-pattern p-4 md:p-8 flex flex-col">
      <div className="max-w-5xl mx-auto w-full flex-1">
        <DocumentationHeader />

        <div className="space-y-8">
          <ProjectOverviewSection />
          <DataStructureSection />
          <HowItWorksSection />
          <TechnicalImplementationSection />
        </div>
      </div>

      <Footer />
    </div>
  );
}
