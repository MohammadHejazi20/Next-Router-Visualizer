"use client";

import { FileRouteVisualizer } from "@/components/file-route-visualizer";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { exampleStructures } from "@/lib/example-structures";
import { ArrowLeft, FileJson, FileText, Sparkles } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { ImportStructure } from "./import-structure";
import { GridBackground } from "./ui/grid-background";

export function RoutingVisualizer() {
  const [selectedStructure, setSelectedStructure] = useState<string | null>(
    null
  );

  const renderSelectedContent = () => {
    if (!selectedStructure) return null;

    const structure = exampleStructures[selectedStructure];

    if (structure.component === "ImportStructure") {
      return <ImportStructure />;
    }

    if ("nodes" in structure) {
      return <FileRouteVisualizer structure={structure.nodes} />;
    }
    return null;
  };

  return (
    <GridBackground containerClassName="p-4 md:p-8 flex flex-col">
      <div className="max-w-5xl mx-auto w-full flex-1">
        <header className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Next.js App Router Structure
            </h1>
            <p className="text-muted-foreground text-sm md:text-base">
              Visualize your application&apos;s routing hierarchy based on the
              file system
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/documentation">
              <Button
                variant="outline"
                size="sm"
                className="bg-background border-border hover:bg-accent text-foreground gap-2"
              >
                <FileText className="h-4 w-4 text-primary" />
                Documentation
              </Button>
            </Link>
          </div>
        </header>

        {!selectedStructure ? (
          <div className="grid gap-4">
            {Object.entries(exampleStructures).map(([key, structure]) => (
              <Card
                key={key}
                className={`
                  bg-card border-border hover:border-primary transition-colors p-4 cursor-pointer
                  ${
                    key === "import"
                      ? "relative overflow-hidden dark:bg-gradient-to-r dark:from-[#1E1E1E] dark:to-[#1E1E2A] dark:border-[#4A4AE2]/30"
                      : ""
                  }
                `}
                onClick={() => setSelectedStructure(key)}
              >
                {key === "import" && (
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/10 rounded-bl-full -z-10" />
                )}
                <div className="flex justify-between items-start">
                  <h2
                    className={`text-lg font-medium mb-2 ${
                      key === "import"
                        ? "bg-gradient-to-r from-[#4A90E2] to-[#9C4AE2] bg-clip-text text-transparent"
                        : "text-foreground"
                    }`}
                  >
                    {structure.name}
                  </h2>
                  {key === "import" && (
                    <Sparkles className="h-5 w-5 text-accent" />
                  )}
                </div>
                <p className="text-muted-foreground text-sm">
                  {structure.description}
                </p>
                {key === "import" && (
                  <div className="flex items-center gap-2 mt-3 text-xs text-accent font-medium">
                    <FileJson className="h-3.5 w-3.5" />
                    <span>Generate from your own project</span>
                  </div>
                )}
              </Card>
            ))}
          </div>
        ) : (
          <div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setSelectedStructure(null)}
              className="mb-6 bg-background border-border hover:bg-accent text-foreground"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to examples
            </Button>
            {renderSelectedContent()}
          </div>
        )}
      </div>

      <Footer />
    </GridBackground>
  );
}
