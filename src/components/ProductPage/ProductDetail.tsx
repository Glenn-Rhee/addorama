import { Heart, Star } from "lucide-react";
import { Separator } from "../ui/separator";
import Image from "next/image";
import Delivery from "./Delivery";
import { Badge } from "../ui/badge";
import Link from "next/link";
import PurchaseCard from "./PurchaseCard";
import { TProductDetail } from "@/types";

interface ProductDetailProps {
  product: TProductDetail;
}

export default function ProductDetail(props: ProductDetailProps) {
  const { product } = props;

  return (
    <div className="px-2 py-4">
      <div className="flex flex-col gap-y-3">
        <div>
          <h4 className="text-myBlack font-semibold text-lg md:text-xl lg:text-2xl">
            {product.productName}
          </h4>
          <div className="flex items-center h-5 gap-x-2 mt-1">
            <Star size={20} color="yellow" fill="yellow" />
            <span className="text-sm font-semibold">
              {Math.floor(product.avgRating) === 0
                ? 5
                : Math.floor(product.avgRating)}{" "}
              <span className="text-gray-500 font-normal">
                ({product.ratingCount} rating)
              </span>
            </span>
            <Separator orientation="vertical" className="bg-myBlack" />
            <Heart size={20} color="rgb(220 38 38)" fill="rgb(220 38 38)" />
            <span className="text-sm font-semibold text-myBlack">
              {product.countFavorite}{" "}
              <span className="text-gray-500 font-normal">Favorite</span>
            </span>
            <Separator orientation="vertical" className="bg-myBlack" />
            <span className="text-sm font-semibold text-myBlack">
              {product.countReview}{" "}
              <span className="text-gray-500 font-normal">review</span>
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-y-1">
          <span className="text-myBlue font-bold text-lg md:text-xl lg:text-3xl">
            Rp
            {(
              product.price -
              (product.price * product.discount) / 100
            ).toLocaleString("id-ID")}
          </span>
          {product.discount > 0 ? (
            <div className="flex items-center gap-x-1 mt-1">
              <Badge className="rounded-sm hover:bg-red-200 bg-red-200 text-red-600 font-bold px-2 py-0">
                {product.discount}%
              </Badge>
              <span className="text-base line-through font-semibold text-gray-400">
                Rp{product.price.toLocaleString("id-ID")}
              </span>
            </div>
          ) : null}
        </div>
      </div>
      <div className="mt-8">
        <p className="font-semibold line-clamp-5">{product.description}</p>
        <div className="flex justify-between items-center min-w-full mt-10">
          <Link href={"/store/" + product.storeId} className="flex gap-x-3">
            <Image
              src={product.urlImageStore}
              alt="Profile picture store"
              width={40}
              height={40}
              className="aspect-square w-auto rounded-full"
            />
            <div className="space-y-1 flex items-center">
              <h5 className="font-bold text-sm md:text-base text-myBlack">
                {product.storeName}
              </h5>
            </div>
          </Link>
          <div>
            <button className="border border-myBlue text-myBlue px-4 rounded-lg py-1 font-semibold hover:bg-myBlue hover:text-white transition-all duration-75 active:bg-blue-600">
              Follow
            </button>
          </div>
        </div>
      </div>
      <Delivery product={product} />
      <PurchaseCard product={product} />
    </div>
  );
}
