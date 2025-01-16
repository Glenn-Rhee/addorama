import { cn } from "@/lib/utils";

export default function ShellCardProduct({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("grid gap-4 grid-cols-6 mt-8", className)}>{children}</div>
  );
}
