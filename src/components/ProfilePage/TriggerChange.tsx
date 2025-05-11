"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface TriggerChangeProps {
  title: string;
  content: React.ReactNode;
  triggerValue: string;
}

export function TriggerChange(props: TriggerChangeProps) {
  const { title, content, triggerValue } = props;

  return (
    <Dialog>
      <DialogTrigger className="text-blue-500 cursor-pointer font-semibold text-sm">
        {triggerValue}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-lg">{title}</DialogTitle>
        </DialogHeader>
        {content}
        <DialogFooter className="w-full">
          <Button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 font-semibold"
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
