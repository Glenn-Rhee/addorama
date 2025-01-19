"use client";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

interface OptionCategoryProps {
  className?: string;
  active?: boolean;
  children: React.ReactNode;
}

export default function OptionCategory(props: OptionCategoryProps) {
  const { className, active, children } = props;
  const router = useRouter();

  return (
    <button
      className={cn(
        "flex justify-center rounded-xl px-4 py-2",
        {
          "bg-orange": active,
          "bg-white border border-gray-400/40": !active,
        },
        className
      )}
      onClick={() => {
        router.push("/?category=" + (children as string).toLowerCase());
      }}
    >
      <span
        className={cn("font-bold text-xs md:text-sm", {
          "text-white": active,
          "text-[#191C1F]": !active,
        })}
      >
        {children}
      </span>
    </button>
  );
}
