import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export function DocumentationHeader() {
  return (
    <header className="mb-8">
      <div className="flex items-center gap-2 mb-2">
        <Link href="/">
          <Button
            variant="outline"
            size="sm"
            className="bg-[#1E1E1E] border-[#333333] hover:bg-[#2A2A2A] hover:border-[#4A90E2] text-[#E0E0E0]"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Visualizer
          </Button>
        </Link>
      </div>
      <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#4A90E2] to-[#9C4AE2] bg-clip-text text-transparent mt-4">
        Next.js App Router Structure Visualizer Documentation
      </h1>
      <p className="text-[#A0A0A0] text-sm md:text-base mt-2">
        Learn how this project works under the hood and how it's structured
      </p>
    </header>
  );
}
