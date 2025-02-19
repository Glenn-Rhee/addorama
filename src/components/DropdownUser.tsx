import { User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Link from "next/link";

interface DropdownUserProps {
  children?: React.ReactNode;
}

export default function DropdownUser(props: DropdownUserProps) {
  const { children } = props;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {children || (
          <button>
            <User size={25} />
          </button>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel className="flex flex-col gap-y-1">
          <span className="text-myBlack font-semibold">Ariel Rizki</span>
          <span className="text-gray-500 text-sm">ariel@gmail.com</span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator color="red" />
        <DropdownMenuGroup>
          <DropdownMenuItem className="cursor-pointer">
            <Link href={"/profile"}>Profile</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            Log out
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
