import type { ReactNode } from "react";

interface SectionHeaderProps {
  icon: ReactNode;
  title: string;
}

export function SectionHeader({ icon, title }: SectionHeaderProps) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 rounded-lg bg-[#1E1E1E] border border-[#333333]">
        {icon}
      </div>
      <h2 className="text-xl font-semibold text-[#E0E0E0]">{title}</h2>
    </div>
  );
}
