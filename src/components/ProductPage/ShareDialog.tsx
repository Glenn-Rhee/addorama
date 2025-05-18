"use client";
import { Share2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { getMessageShare } from "@/utils/MessagesShare";
import { TProductDetail } from "@/types";

interface ShareDialogProps {
  product: TProductDetail;
}

export default function ShareDialog(props: ShareDialogProps) {
  const { product } = props;
  const router = useRouter();
  const params = useSearchParams();
  const { toast } = useToast();
  const [isCopied, setIsCopied] = useState(false);

  const baseUrl = process.env.NEXT_PUBLIC_URL as string;
  const url = `${baseUrl}/product?id=${params.get("id")}`;

  function handleCopy(text: string) {
    if (navigator) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          setIsCopied(true);
          toast({
            title: "Copied to clipboard",
            description: "You can now share it with your friends",
          });
        })
        .catch((err) => {
          setIsCopied(false);
          toast({
            title: "Failed to copy",
            description: err,
            variant: "destructive",
          });
        });
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    }
  }

  const shareOptions = [
    {
      name: "Whatsapp",
      icon: "/whatsapp.png",
    },
    {
      name: "Facebook",
      icon: "/facebook.png",
    },
    {
      name: "Telegram",
      icon: "/telegram.png",
    },
    {
      name: "Copy link",
      icon: "/link.png",
      text: `Check out this product: ${url}`,
    },
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex justify-self-center items-center gap-x-2">
          <Share2 size={15} />
          <span className="text-sm font-bold text-myBlack">Share</span>
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-myBlack font-semibold text-lg">
            Where do you want to share?
          </DialogTitle>
        </DialogHeader>
        <div className="mt-6 flex items-center gap-x-10 justify-center">
          {shareOptions.map((option) => (
            <div
              key={option.name}
              className="flex items-center flex-col gap-y-2"
            >
              <button
                onClick={() => {
                  if (option.name.includes("Copy")) {
                    handleCopy(option.text as string);
                  } else {
                    const link = getMessageShare(
                      product.productName,
                      product.price,
                      url,
                      option.name.toLowerCase() as
                        | "whatsapp"
                        | "facebook"
                        | "telegram"
                    );

                    router.push(link);
                  }
                }}
              >
                <Image
                  src={
                    isCopied && option.name.includes("Copy")
                      ? "/check.png"
                      : option.icon
                  }
                  alt={`${option.name} icon`}
                  width={30}
                  height={30}
                />
              </button>
              <span className="text-myBlack text-sm">{option.name}</span>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
