"use client";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { cn } from "@/lib/utils";

export default function SelectSortingProduct() {
  const [borderColor, setBorderColor] = useState<string>("");

  return (
    <Select>
      <SelectTrigger
        onClick={() => {
          setBorderColor("border-myBlue");
        }}
        className={cn(
          "w-[150px] focus:ring-0 focus:outline-none focus:border-myBlue",
          borderColor
        )}
      >
        <SelectValue placeholder="Terbaru" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="latest" className="cursor-pointer">
            Latest
          </SelectItem>
          <SelectItem value="highestPrice" className="cursor-pointer">
            Highest Price
          </SelectItem>
          <SelectItem value="lowestPrice" className="cursor-pointer">
            Lowest Price
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
