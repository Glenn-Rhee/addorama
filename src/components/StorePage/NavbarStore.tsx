"use client";
import { usePathname } from "next/navigation";
import LinkStore from "./LinkStore";

export default function NavbarStore() {
  const pathName = usePathname();
  return (
    <nav className="w-full box-border h-fit mt-8 px-4 border-b border-b-gray-800">
      <div className="flex items-center text-base md:text-lg gap-x-10 font-bold">
        <LinkStore href="/store/123" isActive={!pathName.includes("reviews")}>
          Product
        </LinkStore>
        <LinkStore
          href="/store/123/reviews"
          isActive={pathName.includes("reviews")}
        >
          Reviews
        </LinkStore>
      </div>
    </nav>
  );
}
