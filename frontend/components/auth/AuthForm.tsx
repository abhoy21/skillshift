"use client";

import { SignInSchema, SignUpSchema } from "@/types/types";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type signInType = z.infer<typeof SignInSchema>;
type signUpType = z.infer<typeof SignUpSchema>;

type AuthResponse = {
  token: string;
};

export default function AuthPage({ isSignin }: { isSignin: boolean }) {
  const router = useRouter();
  const showPasswordRef = useRef(false);

  const form = useForm<signInType | signUpType>({
    resolver: zodResolver(isSignin ? SignInSchema : SignUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const togglePasswordVisibility = () => {
    showPasswordRef.current = !showPasswordRef.current;
  };

  const onSubmit = async (data: signInType | signUpType) => {
    try {
      const response = await axios.post<AuthResponse>(
        `${process.env.NEXT_PUBLIC_HTTP_URL}/api/v1/auth/${
          isSignin ? "signin" : "signup"
        }`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        if (isSignin) {
          localStorage.setItem("token", response.data.token);
          toast.success("Signed in successfully");
          router.push("/interview");
        } else {
          toast.success("Account created successfully. Please sign in.");
          router.push("/signIn");
        }
      }
      form.reset();
    } catch (error) {
      console.log(error);
      toast.error(`There was an error: ${error}`);
      form.reset();
    }
  };

  return (
    <div className="w-full max-w-md mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-[48rem]">
      <div className="flex flex-col gap-6 card py-8 px-6 sm:py-10 sm:px-8 md:py-12 md:px-10 lg:py-14 lg:px-12">
        <div className="flex flex-col items-center gap-4">
          <Link href={"/"} className="flex items-center gap-2">
            <Image
              src="/logo.svg"
              alt="logo"
              height={32}
              width={38}
              className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 md:w-12"
            />
            <h2 className="text-primary-100 font-montserrat font-extrabold text-xl sm:text-3xl lg:text-5xl">
              SkillShift AI
            </h2>
          </Link>

          <h3 className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 text-center">
            An AI-driven platform designed to help you master mock interviews
            with smart feedback and personalized preparation.
          </h3>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-4 sm:space-y-5 md:space-y-6 mt-2 sm:mt-3 md:mt-4"
          >
            {!isSignin && (
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm sm:text-base text-gray-700">
                      Full Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your full name"
                        {...field}
                        className="focus:ring-2 focus:ring-accent h-10 sm:h-11 md:h-12 text-sm sm:text-base rounded-xl"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm sm:text-base text-gray-700">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your email address"
                      {...field}
                      className="focus:ring-2 focus:ring-accent h-10 sm:h-11 md:h-12 text-sm sm:text-base rounded-xl"
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
                  <FormLabel className="text-sm sm:text-base text-gray-700">
                    Password
                  </FormLabel>
                  <div className="relative">
                    <FormControl>
                      <Input
                        placeholder="Enter your password"
                        type={showPasswordRef.current ? "text" : "password"}
                        {...field}
                        className="focus:ring-2 focus:ring-accent h-10 sm:h-11 md:h-12 text-sm sm:text-base rounded-xl"
                      />
                    </FormControl>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 text-gray-500 hover:text-accent"
                      onClick={togglePasswordVisibility}
                    >
                      {showPasswordRef.current ? (
                        <svg
                          viewBox="0 0 16 16"
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 sm:h-5 sm:w-5"
                        >
                          <path
                            clipRule="evenodd"
                            d="M16 16H13L10.8368 13.3376C9.96488 13.7682 8.99592 14 8 14C6.09909 14 4.29638 13.1557 3.07945 11.6953L0 8L3.07945 4.30466C3.14989 4.22013 3.22229 4.13767 3.29656 4.05731L0 0H3L16 16ZM8.84053 10.8807L5.35254 6.58774C5.12755 7.00862 5 7.48941 5 8C5 9.65685 6.34315 11 8 11C8.29178 11 8.57383 10.9583 8.84053 10.8807Z"
                            fill="currentColor"
                            fillRule="evenodd"
                          />
                          <path
                            d="M16 8L14.2278 10.1266L7.63351 2.01048C7.75518 2.00351 7.87739 2 8 2C9.90091 2 11.7036 2.84434 12.9206 4.30466L16 8Z"
                            fill="currentColor"
                          />
                        </svg>
                      ) : (
                        <svg
                          viewBox="0 0 24 24"
                          version="1.2"
                          baseProfile="tiny"
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 sm:h-5 sm:w-5"
                        >
                          <path
                            d="M21.821 12.43c-.083-.119-2.062-2.944-4.793-4.875-1.416-1.003-3.202-1.555-5.028-1.555-1.825 0-3.611.552-5.03 1.555-2.731 1.931-4.708 4.756-4.791 4.875-.238.343-.238.798 0 1.141.083.119 2.06 2.944 4.791 4.875 1.419 1.002 3.205 1.554 5.03 1.554 1.826 0 3.612-.552 5.028-1.555 2.731-1.931 4.71-4.756 4.793-4.875.239-.342.239-.798 0-1.14zm-9.821 4.07c-1.934 0-3.5-1.57-3.5-3.5 0-1.934 1.566-3.5 3.5-3.5 1.93 0 3.5 1.566 3.5 3.5 0 1.93-1.57 3.5-3.5 3.5zM14 13c0 1.102-.898 2-2 2-1.105 0-2-.898-2-2 0-1.105.895-2 2-2 1.102 0 2 .895 2 2z"
                            fill="currentColor"
                          />
                        </svg>
                      )}
                    </Button>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              className="w-full bg-accent hover:bg-accent/90 text-dark-300 h-10 sm:h-11 md:h-12 text-sm sm:text-base rounded-xl"
              type="submit"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? (
                <span className="spinner-border spinner-border-sm mr-1"></span>
              ) : null}
              {isSignin ? "Sign In" : "Create Account"}
            </Button>
          </form>
        </Form>

        <p className="text-center text-xs sm:text-sm text-gray-600">
          {isSignin ? "No account yet?" : "Have an account already?"}
          <Link
            href={isSignin ? "/signUp" : "/signIn"}
            className="font-bold text-accent ml-1 hover:underline"
          >
            {isSignin ? "Sign Up" : "Sign In"}
          </Link>
        </p>
      </div>
    </div>
  );
}
