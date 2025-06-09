import { cn } from "@/lib/utils";

export default function Auth({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("flex w-full pt-8 justify-center items-center", className)}>
      {children}
    </div>
  );
}
