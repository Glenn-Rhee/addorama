"use client";
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
import { useTokenStore } from "@/store/tokenStore";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { DataUser, ResponsePayload } from "@/types";
import { Skeleton } from "./ui/skeleton";
import Image from "next/image";

interface DropdownUserProps {
  children?: React.ReactNode;
}

export default function DropdownUser(props: DropdownUserProps) {
  const { children } = props;
  const { xtr } = useTokenStore();
  const { toast } = useToast();
  const [dataUser, setDataUser] = useState({
    username: "",
    email: "",
    image: "",
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      setIsLoading(true);
      try {
        if (!xtr) {
          setIsLoading(false);
          return;
        }
        const url = process.env.NEXT_PUBLIC_BASE_URL;
        const response = await fetch(`${url}/user`, {
          method: "GET",
          headers: {
            authorization: xtr,
          },
        });

        const dataResponse = (await response.json()) as ResponsePayload;
        if (dataResponse.status === "failed") {
          throw new Error(dataResponse.message);
        }

        const data = dataResponse.data as DataUser;
        setDataUser({
          username: data.username,
          email: data.email,
          image: data.urlImage,
        });
        setIsLoading(false);
      } catch (error) {
        if (error instanceof Error) {
          toast({
            title: "Error",
            description: error.message,
            variant: "destructive",
          });
        } else {
          toast({
            title: "Error",
            description: "An unexpected error occurred.",
            variant: "destructive",
          });
        }

        setIsLoading(false);
      }
    };

    fetchUserData();
  }, [xtr, toast]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {children || (
          <button>
            {isLoading ? (
              <Skeleton className="h-[30px] w-[30px] bg-gray-400 rounded-full" />
            ) : dataUser.image === "" ? (
              <User size={25} />
            ) : (
              <Image
                src={dataUser.image}
                alt={`Profile user ${dataUser.username}`}
                width={30}
                height={30}
                className="rounded-full object-cover aspect-square"
              />
            )}
          </button>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel className="flex flex-col gap-y-1">
          {isLoading ? (
            <>
              <Skeleton className="h-[18px] w-[50px] rounded-md" />
              <Skeleton className="h-[18px] w-[50px] rounded-md" />
            </>
          ) : (
            <>
              <span className="text-myBlack font-semibold">
                {dataUser.username}
              </span>
              <span className="text-gray-500 text-sm">{dataUser.email}</span>
            </>
          )}
        </DropdownMenuLabel>
        <DropdownMenuSeparator color="red" />
        <DropdownMenuGroup>
          <Link href={"/profile"}>
            <DropdownMenuItem className="cursor-pointer">
              Profile
            </DropdownMenuItem>
          </Link>
          <DropdownMenuItem className="cursor-pointer">
            Log out
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
