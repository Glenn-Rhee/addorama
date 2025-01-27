import { Badge } from "../ui/badge";

interface ReviewCardProps {
  avatarImage: React.ReactNode;
  username: string;
  isSeller?: boolean;
  children: React.ReactNode;
  time?: string;
}

export default function ReviewCard(props: ReviewCardProps) {
  const { avatarImage, username, isSeller, children, time } = props;
  return (
    <>
      <div className="flex flex-col md:flex-row items-start md:items-center gap-x-2">
        {avatarImage}
        <span className="font-bold text-myBlack">{username}</span>
        {isSeller ? (
          <>
            <Badge className="bg-myBlue/30 hover:bg-myBlue/30 text-myBlue font-bold rounded-sm">
              Seller
            </Badge>
            <span className="font-semibold text-gray-500 text-sm">{time}</span>
          </>
        ) : null}
      </div>
      <p className="text-gray-800">{children}</p>
    </>
  );
}
