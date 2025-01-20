import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface MyAvatarProps {
  src: string;
  alt: string;
  fallBack: string;
}

export default function MyAvatar(props: MyAvatarProps) {
  const { src, alt, fallBack } = props;
  return (
    <Avatar>
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback>{fallBack}</AvatarFallback>
    </Avatar>
  );
}
