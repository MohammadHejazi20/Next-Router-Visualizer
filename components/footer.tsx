import { Github, Rocket } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-12 py-6 border-t border-[#333333] max-w-5xl mx-auto w-full">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center text-[#A0A0A0] text-sm">
          <Rocket className="h-4 w-4 mr-2 text-[#4A90E2]" />
          <p>
            This project is currently under development, and more features will
            be added soon
          </p>
        </div>

        <Link
          href="https://github.com/MohammadHejazi20/Next-Router-Visualizer"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[#A0A0A0] hover:text-[#4A90E2] transition-colors text-sm bg-[#1E1E1E] px-3 py-2 rounded-md border border-[#333333]"
        >
          <Github className="h-4 w-4" />
          <span>View on GitHub</span>
        </Link>
      </div>
    </footer>
  );
}
