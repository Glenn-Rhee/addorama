import { cn } from "@/lib/utils";
import Link from "next/link";

interface LinkStoreProps {
  children: React.ReactNode;
  href: string;
  isActive?: boolean;
}

export default function LinkStore(props: LinkStoreProps) {
  const { children, href, isActive } = props;
  return (
    <div
      className={cn(
        "after:block after:content-[''] after:w-full after:mt-2 after:h-1 after:bg-myBlue",
        {
          "after:opacity-100": isActive,
          "after:opacity-0": !isActive,
        }
      )}
    >
      <Link
        href={href}
        className={cn("text-myBlue w-full px-4", {
          "text-myBlue": isActive,
          "text-gray-600": !isActive,
        })}
      >
        {children}
      </Link>
    </div>
  );
}
