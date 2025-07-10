"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { UserModel } from "@/model/User-Model";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import AuthAction from "../AuthAction";
import { ResponsePayload } from "@/types";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const form = useForm<z.infer<typeof UserModel.LOGIN>>({
    resolver: zodResolver(UserModel.LOGIN),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  async function handleSubmit(
    values: z.infer<typeof UserModel.LOGIN>
  ): Promise<void> {
    setIsLoading(true);
    try {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
      const response = await fetch(`${baseUrl}/user/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = (await response.json()) as ResponsePayload;
      if (data.status === "failed") {
        throw new Error(data.message);
      }

      toast({
        title: "success",
        description: "Login successful!",
        variant: "default",
      });
      router.push("/");
    } catch (error) {
      if (error instanceof Error) {
        toast({
          variant: "destructive",
          title: "Error",
          description: error.message,
        });
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: "An unexpected error occurred.",
        });
      }

      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <div className="space-y-1">
          <div className="grid grid-cols-1 gap-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="example@gmail.com"
                      type="text"
                      className="shadow"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="********"
                      type="password"
                      className="shadow"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        </div>

        <AuthAction
          href="/auth/signup"
          isLoading={isLoading}
          textGoTo="Don't have an account?"
        >
          Login
        </AuthAction>
      </form>
    </Form>
  );
}
