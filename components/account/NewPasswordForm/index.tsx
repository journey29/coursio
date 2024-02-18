"use client";
import { NewPasswordSchema, NewPasswordType } from "@/schemas";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { Input } from "@/components/ui/input";
import { useSearchParams } from "next/navigation";
import { newPassword } from "@/actions/new-password";
import AuthButton from "../AuthButton";
import { FormError } from "../FormError";
import { FormSuccess } from "../FormSuccess";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const NewPasswordForm = () => {
    const form = useForm<NewPasswordType>({
        resolver: zodResolver(NewPasswordSchema),
        defaultValues: {
            password: "",
        },
    });
    const [success, setSuccess] = useState<string | undefined>("");
    const [error, setError] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();
    const useSearch = useSearchParams();
    const token = useSearch.get("token");

    const onSubmit = (values: NewPasswordType) => {
        setError("");
        setSuccess("");

        startTransition(() => {
            newPassword(values, token).then((data) => {
                setSuccess(data?.success);
                setError(data?.error);
            });
        });
    };

    return (
        <Card className="w-full max-w-[600px] shadow-md dark:border-none">
            <CardHeader>
                <p className="text-center text-3xl font-bold">New Password</p>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <FormField
                            name="password"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem className="mb-4">
                                    <FormLabel className="font-bold">Password</FormLabel>
                                    <FormControl>
                                        <Input {...field} className="mb-3 mt-2" />
                                    </FormControl>
                                    <FormMessage className="text-primary" />
                                </FormItem>
                            )}
                        >
                        </FormField>
                        <div className="flex items-center justify-between">
                            <Link href="/auth/register" className="font-light">
                                Don't have an account yet?
                            </Link>
                        </div>
                        <FormError message={error} />
                        <FormSuccess message={success} />
                        <AuthButton label="Reset Password" disabled={isPending} />
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
};

export default NewPasswordForm;
