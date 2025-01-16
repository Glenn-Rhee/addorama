import { cn } from "@/lib/utils";
import { Search } from "lucide-react";

interface SearchProductProps {
  className?: string;
}

export default function SearchProduct(props: SearchProductProps) {
  const { className } = props;
  return (
    <div
      className={cn(
        "items-center flex justify-between bg-white w-[200px] md:w-[300px] lg:w-[500px] pr-3 py-1 rounded-md",
        className
      )}
    >
      <input
        placeholder="Search everything"
        type="search"
        className="outline-none border-none placeholder-[#77878F] placeholder:text-sm lg:placeholder:text-base text-sm lg:text-base text-[#191C1F] w-[95%] px-3 bg-transparent py-1"
      />
      <button className="cursor-pointer">
        <Search color="#191C1F" size={25} />
      </button>
    </div>
  );
}
