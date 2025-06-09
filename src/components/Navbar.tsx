"use client";
import { Heart, Menu, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CartFill from "./icon/CartFill";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import SearchProduct from "./SearchProduct";
import Container from "./Container";
import { Suspense } from "react";
import DropdownUser from "./DropdownUser";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathName = usePathname();

  if (pathName.includes("auth")) return null;
  return (
    <Suspense>
      <nav className="fixed top-0 z-50 right-0 left-0 px-4 py-2 md:px-10 md:py-5 bg-[#1B6392]">
        <Container className="flex items-center justify-between mt-0 md:mt-0 lg:mt-0">
          <Link
            href={"/"}
            className="text-white flex items-center gap-x-1 lg:gap-x-3"
          >
            <Image
              src={"/letter-a.png"}
              alt="icon name"
              width={25}
              height={25}
              className="w-auto aspect-square"
            />
            <span className="text-base md:text-3xl font-bold uppercase">
              Addorama
            </span>
          </Link>
          <SearchProduct className="" />
          <div className="lg:flex hidden items-center gap-x-7 text-white">
            {/* <ShoppingCart size={25} className="cursor-pointer" /> */}
            <Link href={"/cart"}>
              <CartFill size={25} />
            </Link>
            <Link href={"/favorite"}>
              <Heart size={25} className="cursor-pointer" />
            </Link>
            <DropdownUser />
          </div>
          <div className="block lg:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Menu color="white" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuGroup>
                  <DropdownMenuItem className="flex items-center gap-x-3">
                    <CartFill size={18} />
                    <Link href={"/cart"} className="text-sm font-semibold">
                      Cart
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center gap-x-3">
                    <Heart size={25} className="cursor-pointer" />
                    <Link href={"/favorite"} className="text-sm font-semibold">
                      Favorite
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="">
                    <DropdownUser>
                      <button className="flex items-center gap-x-3">
                        <User size={18} />
                        <span className="text-sm font-semibold">Account</span>
                      </button>
                    </DropdownUser>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </Container>
      </nav>
      {/* <div className="fixed top-12 h-48 w-56 z-[100] right-10 bg-red-900">
        s
      </div> */}
    </Suspense>
  );
}
