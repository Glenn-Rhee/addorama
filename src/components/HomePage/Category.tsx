"use client";
import { useEffect } from "react";
import OptionCategory from "./OptionCategory";
import { useRouter } from "next/navigation";
import { useTokenStore } from "@/store/tokenStore";

interface CategoryProps {
  category: string | undefined;
  xtr: string | undefined;
}

export default function Category(props: CategoryProps) {
  const { category, xtr } = props;
  const router = useRouter();
  const { setXtr } = useTokenStore();

  useEffect(() => {
    setXtr(xtr || "")
  }, [xtr, setXtr])

  useEffect(() => {
    if (
      category !== "all" &&
      category !== "laptop" &&
      category !== "accessories"
    ) {
      router.push("/");
    }
  }, [category, router]);

  return (
    <div className="p-4 w-full rounded-md shadow-[1px_1px_14px_1px_rgba(0,_0,_0,_0.2)] ">
      <h2 className="font-bold text-[#191C1F] text-xl">Category</h2>
      <div className="mt-4 grid grid-cols-3 gap-x-3 p-0">
        <OptionCategory
          active={category !== "laptop" && category !== "accessories"}
        >
          All
        </OptionCategory>
        <OptionCategory active={category === "laptop"}>Laptop</OptionCategory>
        <OptionCategory active={category === "accessories"}>
          Accessories
        </OptionCategory>
      </div>
    </div>
  );
}
