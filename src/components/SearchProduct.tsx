"use client";

import { cn } from "@/lib/utils";
import { useSearchStore } from "@/store/searchStore";
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

interface SearchProductProps {
  className?: string;
}

export default function SearchProduct(props: SearchProductProps) {
  const { className } = props;
  const searchParams = useSearchParams();
  const [query, setQuery] = useState<string>(searchParams.get("q") || "");
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const { setInputRef } = useSearchStore();

  useEffect(() => {
    setInputRef(inputRef);
  }, [inputRef, setInputRef]);

  function handleSearch() {
    if (query === "") return;
    router.push("/search?q=" + query);
  }
  return (
    <div
      className={cn(
        "items-center flex justify-between bg-white w-[200px] md:w-[300px] lg:w-[500px] pr-3 py-1 rounded-md",
        className
      )}
    >
      <input
        placeholder="Search everything"
        ref={inputRef}
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyUp={(e) => e.key === "Enter" && handleSearch()}
        className="outline-none border-none placeholder-[#77878F] placeholder:text-sm lg:placeholder:text-base text-sm lg:text-base text-[#191C1F] w-[95%] px-3 bg-transparent py-1"
      />
      <button className="cursor-pointer" onClick={handleSearch}>
        <Search color="#191C1F" size={25} />
      </button>
    </div>
  );
}
