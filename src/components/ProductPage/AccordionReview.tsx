"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import ReplyCard from "./ReplyCard";

export default function AccordionReview() {
  const [show, setShow] = useState<boolean>(false);

  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger onClick={() => setShow((prev) => !prev)}>
          <span className="text-gray-800">{show ? "Hide" : "Show"} Reply</span>
        </AccordionTrigger>
        <AccordionContent>
          <ReplyCard />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
