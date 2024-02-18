"use client";
import { Button } from "@/components/ui/button";
import { LoginSchema, LoginSchemaType } from "@/schemas";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { login } from "@/actions/login";
import Socials from "../Socials";
import { FormSuccess } from "../FormSuccess";
import { FormError } from "../FormError";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const LoginForm = () => {
  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const [success, setSuccess] = useState<string | undefined>("");
  const [error, setError] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const [showCode, setShowCode] = useState(false);
  const searchParams = useSearchParams();
  const urlError =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "Email already in use with different provider!"
      : "";

  const onSubmit = (values: LoginSchemaType) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      login(values).then((data) => {
        if (data?.error) {
          setError(data?.error);
        }

        if (data?.success) {
          setSuccess(data?.success);
        }

        if (data?.twoFactor) {
          setShowCode(true);
        }
      });
    });
  };

  return (
    <Card className="w-full max-w-[600px] shadow-md dark:border-none">
      <CardHeader>
        <p className="text-center text-3xl font-bold">
          {showCode ? "Two factor token" : "Login"}
        </p>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            {showCode && (
              <>
                <FormField
                  name="code"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold">Code</FormLabel>
                      <FormControl>
                        <Input {...field} className="mb-3 mt-2 text-black" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                ></FormField>
                <Link href="/auth/reset" className="block font-light">
                  You forget the password?
                </Link>
              </>
            )}
            {!showCode && (
              <>
                <FormField
                  name="email"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="mb-4">
                      <FormLabel className="font-medium">Email</FormLabel>
                      <FormControl>
                        <Input className="mb-3 mt-2 text-black" {...field} />
                      </FormControl>
                      <FormMessage className="text-primary" />
                    </FormItem>
                  )}
                />
                <FormField
                  name="password"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="mb-4">
                      <FormLabel className="font-medium">Password</FormLabel>
                      <FormControl>
                        <Input
                          className="mb-3 mt-2 text-black"
                          {...field}
                          type="password"
                        />
                      </FormControl>
                      <FormMessage className="text-primary" />
                    </FormItem>
                  )}
                />
                <div className="mt-4 flex flex-col items-start justify-between gap-1 sm:flex-row sm:items-center sm:gap-0">
                  <Link href="/auth/register" className="font-light">
                    Don't have an account yet
                  </Link>
                  <Link href="/auth/reset" className="font-light">
                    Forget the password
                  </Link>
                </div>
              </>
            )}
            <FormSuccess message={success} />
            <FormError message={error || urlError} />
            <Button
              className="my-3 h-[50px] w-full max-w-40 rounded-2xl text-[17px]"
              disabled={isPending}
              type="submit"
            >
              {showCode ? "Confirm" : "Login"}
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter>
        <Socials disabled={isPending} />
      </CardFooter>
    </Card>
  );
};

export default LoginForm;
