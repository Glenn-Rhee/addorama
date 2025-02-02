import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface AccordionFilterProps {
  filterFor: string;
  children: React.ReactNode;
}

export default function AccordionFilter(props: AccordionFilterProps) {
  const { filterFor, children } = props;
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="font-bold text-base md:text-l">
          {filterFor}
        </AccordionTrigger>
        <AccordionContent>{children}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
