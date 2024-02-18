'use client'
import { ResetSchema, ResetSchemaType } from "@/schemas";
import Link from "next/link";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { Input } from "@/components/ui/input";
import { reset } from "@/actions/reset";
import AuthButton from "../AuthButton";
import { FormError } from "../FormError";
import { FormSuccess } from "../FormSuccess";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const ResetForm = () => {
    const form = useForm<ResetSchemaType>({
        resolver: zodResolver(ResetSchema),
        defaultValues: {
            email: "",
        }
    });
    const [success, setSuccess] = useState<string | undefined>('');
    const [error, setError] = useState<string | undefined>('');
    const [isPending, startTransition] = useTransition();

    const onSubmit = (values: ResetSchemaType) => {
        setError('')
        setSuccess('')

        startTransition(() => {
            reset(values)
                .then(data => {
                    setSuccess(data?.success)
                    setError(data?.error)
                })
        })
    }

    return (
        <Card className="w-full max-w-[600px] shadow-md dark:border-none">
            <CardHeader>
                <p className="text-center text-3xl font-bold">Reset Password</p>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
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
                        >
                        </FormField>
                        <div className="flex justify-between items-center">
                            <Link href="/auth/register" className="font-light" >Don't have an account yet?</Link>
                        </div>
                        <FormError message={error} />
                        <FormSuccess message={success} />
                        <AuthButton label="Reset" disabled={isPending} />
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}

export default ResetForm