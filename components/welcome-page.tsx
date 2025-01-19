"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import RoutingDiagram from "@/components/routing-diagram";
import { exampleStructures } from "@/lib/example-structures";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function WelcomePage() {
  const [selectedStructure, setSelectedStructure] = useState<string | null>(
    null
  );
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/20 p-8 dark:from-gray-900 dark:to-gray-800">
      <Card className="max-w-4xl mx-auto p-8 bg-background/80 backdrop-blur-sm border-accent-foreground/20 shadow-xl dark:bg-gray-800/80">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Next.js App Router Structure Visualizer
          </h1>
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          )}
        </div>

        {!selectedStructure ? (
          <>
            <p className="text-center text-muted-foreground mb-8">
              Choose an example structure to get started.
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
              initialNodes={exampleStructures[selectedStructure].nodes}
            />
          </>
        )}
      </Card>
    </div>
  );
}
