import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { FileText, Folder, Layout, Plus } from "lucide-react";

type AddNodeDropdownProps = {
  onSelect: (type: "layout" | "page" | "folder") => void;
};

export default function AddNodeDropdown({ onSelect }: AddNodeDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="h-6 w-6 p-0 rounded-full bg-[#2A2A2A] border-[#333333] hover:bg-[#4A90E2] hover:text-white hover:border-[#4A90E2]"
        >
          <Plus className="h-3 w-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="bg-[#1E1E1E] border border-[#333333] text-[#E0E0E0]"
      >
        <DropdownMenuItem
          onClick={() => onSelect("layout")}
          className="flex items-center gap-2 hover:bg-[#2A2A2A] cursor-pointer focus:bg-[#2A2A2A] focus:text-white"
        >
          <Layout className="h-4 w-4 text-[#A0A0A0]" />
          <span>Add layout</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => onSelect("page")}
          className="flex items-center gap-2 hover:bg-[#2A2A2A] cursor-pointer focus:bg-[#2A2A2A] focus:text-white"
        >
          <FileText className="h-4 w-4 text-[#A0A0A0]" />
          <span>Add page</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => onSelect("folder")}
          className="flex items-center gap-2 hover:bg-[#2A2A2A] cursor-pointer focus:bg-[#2A2A2A] focus:text-white"
        >
          <Folder className="h-4 w-4 text-[#A0A0A0]" />
          <span>Add folder</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
