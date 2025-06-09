import Auth from "@/components/auth/Auth";
import AuthShell from "@/components/auth/AuthShell";
import SignupForm from "@/components/auth/signup/SignupForm";
import Title from "@/components/auth/Title";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up",
};

export default function SignupPage() {
  return (
    <Auth>
      <AuthShell className="min-w-[90%] md:min-w-[70%] lg:min-w-[50%]">
        <Title>Sign up</Title>
        <div className="mt-10">
          <SignupForm />
        </div>
      </AuthShell>
    </Auth>
  );
}
