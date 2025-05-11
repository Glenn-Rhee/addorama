"use client";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function ChangeDateofBirth() {
  const [isOpens, setIsOpens] = useState({
    day: false,
    month: false,
    year: false,
  });
  
  return (
    <div className="flex items-center gap-x-2">
      <Select
        open={isOpens.day}
        onOpenChange={() =>
          setIsOpens({ day: !isOpens.day, month: false, year: false })
        }
      >
        <SelectTrigger>
          <SelectValue placeholder="Date" />
        </SelectTrigger>
        <SelectContent>
          {Array.from({ length: 31 }).map((_, i) => (
            <SelectItem key={i} value={(i + 1).toString()}>
              {i + 1}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select
        open={isOpens.month}
        onOpenChange={() =>
          setIsOpens({ day: false, month: !isOpens.month, year: false })
        }
      >
        <SelectTrigger>
          <SelectValue placeholder="Month" />
        </SelectTrigger>
        <SelectContent>
          {months.map((month, i) => (
            <SelectItem key={i} value={month}>
              {month}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select
        open={isOpens.year}
        onOpenChange={() =>
          setIsOpens({ day: false, month: false, year: !isOpens.year })
        }
      >
        <SelectTrigger>
          <SelectValue placeholder="Year" />
        </SelectTrigger>
        <SelectContent>
          {Array.from({ length: 67 }).map((_, i) => (
            <SelectItem key={i} value={(1945 + i).toString()}>
              {1945 + i}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
