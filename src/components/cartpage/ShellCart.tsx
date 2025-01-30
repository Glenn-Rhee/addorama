import { cn } from "@/lib/utils";

interface ShellCartProps {
  children: React.ReactNode;
  className?: string;
}
export default function ShellCart(props: ShellCartProps) {
  const { children, className } = props;
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-[1fr_30%] gap-x-4",
        className
      )}
    >
      {children}
    </div>
  );
}
