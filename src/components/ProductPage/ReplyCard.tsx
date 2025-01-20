import MyAvatar from "../MyAvatar";
import ReviewCard from "./ReviewCard";

export default function ReplyCard() {
  return (
    <div className="rounded-sm p-2 flex flex-col gap-y-2 bg-green-100/50">
      <div className="space-y-2">
        <ReviewCard
          username="Glenn Store"
          avatarImage={
            <MyAvatar src="/prof.jpg" alt="Ariel Profile" fallBack="AR" />
          }
          isSeller
          time="2 Weeks ago"
        >
          Terima kasih telah berbelanja di SmartClick. Bagikan link toko kami
          https://www.tokopedia.com/smartclick kepada teman-teman Anda dan
          favoritkan Toko kami untuk terus update mengenai stok dan produk
          terbaru
        </ReviewCard>
      </div>
    </div>
  );
}
