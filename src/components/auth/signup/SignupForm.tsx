"use client";
import { UserModel } from "@/model/User-Model";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import SubTitle from "../SubTitle";
import { Input } from "@/components/ui/input";
import InputPhone from "./InputPhone";
import AuthAction from "../AuthAction";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { ResponsePayload } from "@/types";
import { useRouter } from "next/navigation";

export default function SignupForm() {
  const form = useForm<z.infer<typeof UserModel.SIGNUP>>({
    resolver: zodResolver(UserModel.SIGNUP),
    defaultValues: {
      username: "",
      fullname: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
      dateOfBirth: "",
    },
  });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();
  const date = form.watch("dateOfBirth");
  const phone = form.watch("phone");

  useEffect(() => {
    const regex = /[^0-9-]/g;
    if (regex.test(date)) {
      form.setValue("dateOfBirth", date.replace(regex, ""));
    }

    if (date.length === 5 && !date.endsWith("-")) {
      const year = date.slice(0, 4);
      const result = date.charAt(date.length - 1);
      form.setValue("dateOfBirth", year + "-" + result);
    }

    if (date.length === 8 && !date.endsWith("-")) {
      const year = date.slice(0, 7);
      const result = date.charAt(date.length - 1);
      form.setValue("dateOfBirth", year + "-" + result);
    }

    if (date.length !== 5 && date.length !== 8 && date.endsWith("-")) {
      form.setValue("dateOfBirth", date.slice(0, -1));
    }
  }, [date, form]);

  useEffect(() => {
    const regex = /[^0-9]/g;
    if (regex.test(phone)) {
      form.setValue("phone", phone.replace(regex, ""));
    }

    if (phone.startsWith("0")) {
      form.setValue("phone", phone.slice(1));
    }
  }, [phone, form]);

  async function submitForm(
    values: z.infer<typeof UserModel.SIGNUP>
  ): Promise<void> {
    setIsLoading(true);
    try {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
      const response = await fetch(
        `${baseUrl}/user/auth/signup?from=e_commerce`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...values,
            phone: "+62" + values.phone,
          }),
        }
      );
      const data = (await response.json()) as ResponsePayload;
      if (data.status === "failed") {
        throw new Error(data.message);
      }

      toast({
        title: "Success",
        description: "Account created successfully!",
      });
      router.push("/");


    } catch (error) {
      if (error instanceof Error) {
        toast({
          title: "Oops! Something went wrong",
          description: error.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Oops! Something went wrong",
          description: "An unexpected error occurred.",
          variant: "destructive",
        });
      }

      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submitForm)}>
        <div className="space-y-1">
          <SubTitle>Personal Identity</SubTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="fullname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Fullname</FormLabel>
                  <FormControl>
                    <Input placeholder="Furina" type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="dateOfBirth"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date of Birth</FormLabel>
                  <FormControl className="flex items-center gap-x-4">
                    <Input
                      inputMode="numeric"
                      type="text"
                      placeholder="YYYY-MM-DD"
                      maxLength={10}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <InputPhone>
                      <Input
                        inputMode="numeric"
                        className="border-none focus:border-none focus:ring-0 focus:outline-none focus-visible:ring-0 px-1"
                        placeholder="812345678"
                        maxLength={13}
                        {...field}
                        type="text"
                      />
                    </InputPhone>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="space-y-1 mt-8">
          <SubTitle>Security Account</SubTitle>
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="JakeSmith" type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="example@gmail.com"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
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
                      placeholder="**********"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirmation Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="**********"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <AuthAction
          href="/auth/login"
          textGoTo="Already have an account?"
          isLoading={isLoading}
        >
          Signup
        </AuthAction>
      </form>
    </Form>
  );
}
