"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { FileRouteVisualizer } from "./file-route-visualizer";
import { exampleStructures } from "@/lib/example-structures";
import { Footer } from "./footer";

export function RoutingVisualizer() {
  const [selectedStructure, setSelectedStructure] = useState<
    keyof typeof exampleStructures | null
  >(null);

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
                className="bg-[#1E1E1E] border border-[#333333] hover:border-[#4A90E2] transition-colors p-4 cursor-pointer"
                onClick={() => setSelectedStructure(key)}
              >
                <h2 className="text-lg font-medium mb-2">{structure.name}</h2>
                <p className="text-[#A0A0A0] text-sm">
                  {structure.description}
                </p>
              </Card>
            ))}
          </div>
        ) : (
          <div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setSelectedStructure(null)}
              className="mb-6 bg-[#1E1E1E] border-[#333333] hover:bg-[#2A2A2A] text-[#E0E0E0]"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to examples
            </Button>
            <FileRouteVisualizer
              structure={exampleStructures[selectedStructure].nodes}
            />
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
