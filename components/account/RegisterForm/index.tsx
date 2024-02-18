"use client";
import { RegisterSchema, RegisterSchemaType } from "@/schemas";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { Input } from "@/components/ui/input";
import { handleRegister } from "@/actions/register";
import AuthButton from "../AuthButton";
import { FormError } from "../FormError";
import { FormSuccess } from "../FormSuccess";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const RegisterForm = () => {
  const form = useForm<RegisterSchemaType>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const [success, setSuccess] = useState<string | undefined>("");
  const [error, setError] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const onSubmit = (values: RegisterSchemaType) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      handleRegister(values).then((data) => {
        setSuccess(data.success);
        setError(data.error);
      });
    });
  };

  return (
    <Card className="w-full max-w-[600px] shadow-md dark:border-none">
      <CardHeader>
        <p className="text-center text-3xl font-bold">Register</p>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              name="name"
              control={form.control}
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel className="font-medium">Name</FormLabel>
                  <FormControl>
                    <Input {...field} className="mb-3 mt-2 text-black" />
                  </FormControl>
                  <FormMessage className="text-primary" />
                </FormItem>
              )}
            ></FormField>
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel className="font-medium">Email</FormLabel>
                  <FormControl>
                    <Input {...field} className="mb-3 mt-2 text-black" />
                  </FormControl>
                  <FormMessage className="text-primary" />
                </FormItem>
              )}
            ></FormField>
            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel className="font-medium">Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="mb-3 mt-2 text-black"
                      type="password"
                    />
                  </FormControl>
                  <FormMessage className="text-primary" />
                </FormItem>
              )}
            ></FormField>
            <div className="mt-4 flex flex-col items-start justify-between gap-1 sm:flex-row sm:items-center sm:gap-0">
              <Link href="/auth/login" className="font-light">
                Already have an account
              </Link>
              <Link href="/auth/reset" className="font-light">
                Forget the password
              </Link>
            </div>
            <FormError message={error} />
            <FormSuccess message={success} />
            <AuthButton label="Register" disabled={isPending} />
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default RegisterForm;
