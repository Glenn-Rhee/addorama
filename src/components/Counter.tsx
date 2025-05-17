"use client";
import { cn } from "@/lib/utils";
import { usePurchaseStore } from "@/store/purchaseStore";
import { useEffect, useState } from "react";

interface CounterProps {
  className?: string;
  stock: number;
}

export default function Counter(props: CounterProps) {
  const { className, stock } = props;
  const { qty, incQty, decQty } = usePurchaseStore();
  const [disable, setDisable] = useState({
    increment: false,
    decrement: true,
  });

  useEffect(() => {
    if (qty === 1 || qty < 1) {
      setDisable((prev) => ({ ...prev, decrement: true }));
    } else {
      setDisable((prev) => ({ ...prev, decrement: false }));
    }

    if (qty === stock) {
      setDisable((prev) => ({ ...prev, increment: true }));
    } else {
      setDisable((prev) => ({ ...prev, increment: false }));
    }
  }, [qty, stock]);

  return (
    <div
      className={cn(
        "py-0 px-3 rounded-sm border max-w-[200px] items-center border-myBlue/40 flex justify-between",
        className
      )}
    >
      <button
        disabled={disable.decrement}
        onClick={() => {
          decQty();
        }}
        className={cn("font-semibold text-xl", {
          "text-myBlue": !disable.decrement,
          "text-gray-500/40": disable.decrement,
        })}
      >
        &ndash;
      </button>
      <span className="font-semibold text-myBlue text-base md:text-lg">
        {qty}
      </span>
      <button
        disabled={disable.increment}
        className={cn("font-semibold text-xl", {
          "text-myBlue": !disable.increment,
          "text-gray-500/40": disable.increment,
        })}
        onClick={() => {
          incQty();
        }}
      >
        &#43;
      </button>
    </div>
  );
}
