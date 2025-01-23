import { cn } from "@/lib/utils";

export default function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "border border-gray-500/30 px-5 py-6 rounded-md bg-white w-full",
        className
      )}
    >
      {children}
    </div>
  );
}
