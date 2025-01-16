import { cn } from "@/lib/utils";

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}
export default function Container(props: ContainerProps) {
  const { className, children } = props;
  return (
    <div className={cn("px-1 md:px-7 lg:px-10 mt-14 md:mt-24", className)}>
      {children}
    </div>
  );
}
