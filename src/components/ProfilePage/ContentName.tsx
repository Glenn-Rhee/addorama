"use client";
import { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function ContentName() {
  const [value, setValue] = useState("");
  return (
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="name" className="text-right">
          Name
        </Label>
        <Input
          id="name"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="col-span-3"
        />
      </div>
    </div>
  );
}
