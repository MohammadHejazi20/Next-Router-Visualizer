"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import RoutingDiagram from "@/components/routing-diagram";
import { exampleStructures } from "@/lib/example-structures";
import { UploadJson } from "@/components/upload-json";

export function WelcomePage() {
  const [selectedStructure, setSelectedStructure] = useState<string | null>(
    null,
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/20 p-8">
      <Card className="max-w-4xl mx-auto p-8 bg-background/80 backdrop-blur-sm border-accent-foreground/20 shadow-xl">
        <h1 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Welcome to (Next.js) App Router Structure Visualizer
        </h1>

        {!selectedStructure ? (
          <>
            <p className="text-center text-muted-foreground mb-8">
              Choose an example structure or upload your own to get started.
            </p>
            <div className="grid grid-cols-1 gap-4 mb-8">
              {Object.entries(exampleStructures).map(([key, structure]) => (
                <Button
                  key={key}
                  onClick={() => setSelectedStructure(key)}
                  variant="outline"
                  className="h-auto py-4 px-6 text-left"
                >
                  <div>
                    <h3 className="font-semibold mb-2">{structure.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {structure.description}
                    </p>
                  </div>
                </Button>
              ))}
            </div>
            <div className="flex justify-center">
              <UploadJson
                onUpload={(data) => {
                  // Here you would process the uploaded JSON and set it as the selected structure
                  console.log("Uploaded data:", data);
                  // For now, we'll just set a dummy key
                  setSelectedStructure("uploaded");
                }}
              />
            </div>
          </>
        ) : (
          <>
            <Button
              onClick={() => setSelectedStructure(null)}
              variant="outline"
              className="mb-4"
            >
              Back to Examples
            </Button>
            <RoutingDiagram
              initialNodes={
                selectedStructure === "uploaded"
                  ? [] // You would use the uploaded data here
                  : exampleStructures[selectedStructure].nodes
              }
            />
          </>
        )}
      </Card>
    </div>
  );
}
