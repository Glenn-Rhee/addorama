import { cn } from "@/lib/utils";

interface CardCartProps {
  className?: string;
  children: React.ReactNode;
}

export default function CardCart(props: CardCartProps) {
  const { className, children } = props;
  return (
    <div className={cn("w-full bg-white py-3 px-6", className)}>{children}</div>
  );
}
