import Container from "@/components/Container";
import ChangeProfile from "@/components/ProfilePage/ChangeProfile";
import ProfileImage from "@/components/ProfilePage/ProfileImage";
import ShellPersonal from "@/components/ProfilePage/ShellPersonal";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile User | Addorama",
  description: "Profile user page",
};

export default function ProfilePage() {
  return (
    <Container className="lg:px-20 md:px-[70px] px-6 pb-40">
      <div className="grid grid-cols-1 lg:grid-cols-[40%_1fr] gap-x-4">
        <ShellPersonal>
          <ProfileImage />
        </ShellPersonal>
        <ShellPersonal>
          <ChangeProfile />
        </ShellPersonal>
      </div>
    </Container>
  );
}
