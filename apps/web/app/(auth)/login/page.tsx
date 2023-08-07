"use client";

import { useState } from "react";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

import { useLoading } from "@/hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Separator,
  TypographyH2,
  TypographySmall,
} from "@referrer/ui";

import { Icons } from "@/components/icons/icons";

const loginSchema = z.object({
  email: z.string().nonempty("This field is required"),
  password: z.string().nonempty("This field is required"),
});

const Login = () => {
  const router = useRouter();
  const { loadingValue, setLoadingValue } = useLoading();
  const [error, setError] = useState("");
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // const loginWithGoogle = async () => {
  //   setLoading(true);
  //   try {
  //     const result = await signIn("google");
  //   } catch (e) {
  //     console.log(e);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
    try {
      setLoadingValue("logIn");
      const result = await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
        callbackUrl,
      });
      console.log("result", result);
      if (!result?.error) {
        router.push(callbackUrl);
      } else {
        setError("Invalid email or password");
      }
    } catch (e) {
      console.log("signup", e);
    } finally {
      setLoadingValue("");
    }
  };
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-10 py-5 lg:h-screen">
      <TypographyH2>Welcome Back !</TypographyH2>
      <div className="flex w-11/12 flex-col items-center justify-center gap-6 rounded-md border border-gray-200 bg-white py-8 lg:w-[450px]">
        {error ? (
          <div className="border-destructive text-destructive w-10/12 rounded-sm border bg-red-300 p-2 text-center">
            {error}
          </div>
        ) : (
          <></>
        )}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex w-11/12 flex-col space-y-4 text-[#0f172a] lg:w-10/12">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black">Email address or Username</FormLabel>
                  <FormControl>
                    <Input placeholder="john.doe@example.com" type="text" {...field} />
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
                  <FormLabel className="text-black">Password</FormLabel>
                  <FormControl>
                    <Input
                      className="tracking-[0.5rem]"
                      type="password"
                      placeholder="•••••••••••"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                  <Link className="text-muted-foreground ml-auto mt-3" href="/forgot-password">
                    <TypographySmall>Forgot Password ?</TypographySmall>
                  </Link>
                </FormItem>
              )}
            />
            <Button
              isLoading={loadingValue === "logIn"}
              className="bg-[#0f172a] text-white hover:bg-[#0f172a]"
              type="submit">
              Log In
            </Button>
          </form>
        </Form>
        <Separator />
        <div className="relative flex justify-center text-xs uppercase">
          <span className="text-muted-foreground px-2">Or continue with</span>
        </div>
        {/* <div className="flex w-11/12 flex-col gap-4 lg:w-[350px]">
          <Button
            isLoading={googleLoading}
            onClick={() => signIn("google", { callbackUrl })}
            variant="secondary">
            <Icons.google className="mr-2 h-4 w-4" />
            <TypographyP>Sign In with Google</TypographyP>
          </Button>
          <Button
            variant="secondary"
            isLoading={githubLoading}
            onClick={() => signIn("github", { callbackUrl })}>
            <Icons.gitHub className="mr-2 h-4 w-4" />
            <TypographyP>Sign In with GitHub</TypographyP>
          </Button>
        </div> */}
        <div className="flex w-11/12 justify-center gap-4 lg:w-[350px]">
          <Button
            disabled={loadingValue === "githubSignUp"}
            variant="secondary"
            size="icon"
            onClick={() => setLoadingValue("githubSignUp")}>
            {loadingValue === "githubSignUp" ? (
              <Icons.spinner className="h-5 w-5 animate-spin" />
            ) : (
              <Icons.gitHub className="h-5 w-5" />
            )}
          </Button>
          <Button
            disabled={loadingValue === "googleSignUp"}
            onClick={() => setLoadingValue("googleSignUp")}
            variant="secondary"
            size="icon">
            {loadingValue === "googleSignUp" ? (
              <Icons.spinner className="h-5 w-5 animate-spin" />
            ) : (
              <Icons.google className="h-5 w-5" />
            )}
          </Button>
          <Button
            disabled={loadingValue === "appleSignUp"}
            onClick={() => setLoadingValue("appleSignUp")}
            variant="secondary"
            size="icon">
            {loadingValue === "appleSignUp" ? (
              <Icons.spinner className="h-5 w-5 animate-spin" />
            ) : (
              <Icons.apple className="h-5 w-5" />
            )}
          </Button>
          <Button
            disabled={loadingValue === "linkedinSignUp"}
            onClick={() => setLoadingValue("linkedinSignUp")}
            variant="secondary"
            size="icon">
            {loadingValue === "linkedinSignUp" ? (
              <Icons.spinner className="h-5 w-5 animate-spin" />
            ) : (
              <Icons.linkedin className="h-5 w-5" />
            )}
          </Button>
          <Button
            disabled={loadingValue === "facebookSignUp"}
            onClick={() => setLoadingValue("facebookSignUp")}
            variant="secondary"
            size="icon">
            {loadingValue === "facebookSignUp" ? (
              <Icons.spinner className="h-5 w-5 animate-spin" />
            ) : (
              <Icons.facebook className="h-6 w-6" />
            )}
          </Button>
          <Button
            disabled={loadingValue === "twitterSignUp"}
            onClick={() => setLoadingValue("twitterSignUp")}
            variant="secondary"
            size="icon">
            {loadingValue === "twitterSignUp" ? (
              <Icons.spinner className="h-5 w-5 animate-spin" />
            ) : (
              <Icons.twitter className="h-5 w-5" />
            )}
          </Button>
        </div>
        <Separator />
        <div className="flex items-center justify-center gap-2">
          <TypographySmall className="text-[#030711]">Don&prime;t have an account ?</TypographySmall>
          <Link className="text-muted-foreground" href="/sign-up">
            <TypographySmall>Sign Up</TypographySmall>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
