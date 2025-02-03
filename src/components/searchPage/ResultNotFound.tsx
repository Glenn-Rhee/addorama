"use client";
import Image from "next/image";
import Card from "../Card";
import { useSearchStore } from "@/store/searchStore";

export default function ResultNotFound() {
  const { inputRef } = useSearchStore();
  console.log(inputRef)
  return (
    <Card className="flex items-center gap-x-4 ps-10">
      <Image
        src={"/no-results.png"}
        alt="No Results Image"
        width={100}
        height={100}
        className="w-auto aspect-square"
      />
      <div className="flex flex-col gap-y-3">
        <h5 className="text-lg md:text-xl font-bold text-gray-700">
          Oops, we think it hides somewhere
        </h5>
        <span className="text-gray-500 font-medium">
          Try another keyword or check product recommendation below.
        </span>
        <button
          onClick={() => {
            if (inputRef && inputRef.current) {
              inputRef.current.focus();
              const length = inputRef.current.value.length;
              console.log(length)
              inputRef.current.setSelectionRange(length, length);
            }
          }}
          className="bg-myBlue max-w-[200px] transition-all duration-200 hover:bg-[#1282cd] flex items-center justify-center py-1 rounded-lg text-white font-semibold text-base md:text-lg"
        >
          Change Keywords
        </button>
      </div>
    </Card>
  );
}
