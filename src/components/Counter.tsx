"use client";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface CounterProps {
  className?: string;
}

export default function Counter(props: CounterProps) {
  const { className } = props;
  const [qty, setQty] = useState<number>(1);
  const [disable, setDisable] = useState<boolean>(true);

  useEffect(() => {
    if (qty === 1) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [qty]);
  return (
    <div
      className={cn(
        "py-0 px-3 rounded-sm border  max-w-[200px] items-center border-myBlue/40 flex justify-between",
        className
      )}
    >
      <button
        disabled={disable}
        onClick={() => {
          setQty((prev) => prev - 1);
        }}
        className={cn("font-semibold", {
          "text-myBlue": !disable,
          "text-gray-500/40": disable,
        })}
      >
        &ndash;
      </button>
      <span className="font-semibold text-myBlue text-lg">{qty}</span>
      <button
        className="text-myBlue font-semibold text-xl"
        onClick={() => {
          setQty((prev) => prev + 1);
        }}
      >
        &#43;
      </button>
    </div>
  );
}
