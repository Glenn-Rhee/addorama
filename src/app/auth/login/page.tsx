import Auth from "@/components/auth/Auth";
import AuthShell from "@/components/auth/AuthShell";
import LoginForm from "@/components/auth/login/LoginForm";
import Title from "@/components/auth/Title";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
  keywords: ["login", "signin", "authentication"],
};

export default function LoginPage() {
  return (
    <Auth>
      <AuthShell className="min-w-[80%] md:min-w-[75%] lg:min-w-[40%]">
        <Title>Login</Title>
        <div className="mt-10">
          <LoginForm />
        </div>
      </AuthShell>
    </Auth>
  );
}
