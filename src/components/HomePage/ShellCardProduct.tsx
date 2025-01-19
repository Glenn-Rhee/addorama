import { cn } from "@/lib/utils";

export default function ShellCardProduct({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mt-8 mb-10", className)}>{children}</div>
  );
}
