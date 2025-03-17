"use client";

import { FileRouteVisualizer } from "@/components/file-route-visualizer";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { exampleStructures } from "@/lib/example-structures";
import { ArrowLeft, FileJson, Sparkles } from "lucide-react";
import { useState } from "react";
import { ImportStructure } from "./import-structure";

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

    return <FileRouteVisualizer structure={structure.nodes} />;
  };

  return (
    <div className="min-h-screen grid-pattern p-4 md:p-8 flex flex-col">
      <div className="max-w-5xl mx-auto w-full flex-1">
        <header className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-[#E0E0E0] mb-2">
            Next.js App Router Structure
          </h1>
          <p className="text-[#A0A0A0] text-sm md:text-base">
            Visualize your application's routing hierarchy based on the file
            system
          </p>
        </header>

        {!selectedStructure ? (
          <div className="grid gap-4">
            {Object.entries(exampleStructures).map(([key, structure]) => (
              <Card
                key={key}
                className={`
                bg-[#1E1E1E] border border-[#333333] hover:border-[#4A90E2] transition-colors p-4 cursor-pointer
                ${
                  key === "import"
                    ? "relative overflow-hidden bg-gradient-to-r from-[#1E1E1E] to-[#1E1E2A] border-[#4A4AE2]/30"
                    : ""
                }
              `}
                onClick={() => setSelectedStructure(key)}
              >
                {key === "import" && (
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#4A4AE2]/20 to-[#9C4AE2]/10 rounded-bl-full -z-10" />
                )}
                <div className="flex justify-between items-start">
                  <h2
                    className={`text-lg font-medium mb-2 ${
                      key === "import"
                        ? "bg-gradient-to-r from-[#4A90E2] to-[#9C4AE2] bg-clip-text text-transparent"
                        : ""
                    }`}
                  >
                    {structure.name}
                  </h2>
                  {key === "import" && (
                    <Sparkles className="h-5 w-5 text-[#9C4AE2]" />
                  )}
                </div>
                <p className="text-[#A0A0A0] text-sm">
                  {structure.description}
                </p>
                {key === "import" && (
                  <div className="flex items-center gap-2 mt-3 text-xs text-[#9C4AE2] font-medium">
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
              className="mb-6 bg-[#1E1E1E] border-[#333333] hover:bg-[#2A2A2A] hover:border-[#4A90E2] text-[#E0E0E0]"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to examples
            </Button>

            {renderSelectedContent()}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
