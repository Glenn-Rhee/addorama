import { cn } from "@/lib/utils";

interface ItemEtalaseProps {
  children: React.ReactNode;
  className?: string;
}
export default function ItemEtalase(props: ItemEtalaseProps) {
  const { children, className } = props;
  return (
    <li
      className={cn(
        "ps-4 hover:bg-gray-300 rounded-sm cursor-pointer transition-all duration-100 hover:font-bold",
        className
      )}
    >
      {children}
    </li>
  );
}
