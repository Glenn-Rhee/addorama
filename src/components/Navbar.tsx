import { Heart, Menu, UserRound } from "lucide-react";
import Image from "next/image";
import User from "./icon/User";
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

export default function Navbar() {
  return (
    <nav className="fixed top-0 right-0 left-0 px-4 py-2 md:px-10 md:py-5 bg-[#1B6392]">
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
          <User size={25} className="cursor-pointer" />
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
                <DropdownMenuItem className="flex items-center gap-x-3">
                  <UserRound size={25} />
                  <span className="text-sm font-semibold">Account</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </Container>
    </nav>
  );
}
