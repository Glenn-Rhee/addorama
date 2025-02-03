"use client";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import React from "react";

interface StateSearchProps {
  icon: React.ReactNode;
  isActive?: boolean;
  query: string | undefined;
  children: React.ReactNode;
}

export default function StateSearch(props: StateSearchProps) {
  const { icon, isActive, children, query } = props;
  const router = useRouter();

  return (
    <div
      className={cn(
        "after:block w-[140px] after:content-[''] after:w-full after:mt-2 after:h-1 after:bg-myBlue",
        {
          "after:opacity-0": !isActive,
        }
      )}
    >
      <button
        onClick={() => {
          router.push(
            `/search?s=${children?.toString().toLowerCase()}&q=${query}`
          );
        }}
        className="flex items-center justify-center w-full gap-x-2"
      >
        {icon}
        <span
          className={cn("font-semibold text-base md:text-lg text-gray-700", {
            "text-myBlue": isActive,
          })}
        >
          {children}
        </span>
      </button>
    </div>
  );
}
