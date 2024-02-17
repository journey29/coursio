'use client'
import { Button } from "@/components/ui/button"
import { ResetSchema, ResetSchemaType } from "@/schemas";
import Link from "next/link";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { reset } from "@/actions/reset";
import AuthButton from "../AuthButton";
import { FormError } from "../FormError";
import { FormSuccess } from "../FormSuccess";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const ResetForm = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<ResetSchemaType>({
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
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <Label htmlFor="email" className="font-bold">
                            Email
                        </Label>
                        <Input
                            {...register("email")}
                            type="text"
                            className="mb-3 mt-2"
                            name="email"
                        />
                        {errors.email && (
                            <p className="text-primary/50">{`${errors.email.message}`}</p>
                        )}
                    </div>
                    <div className="flex justify-between items-center">
                        <Link href="/auth/register" className="font-light" >Don't have an account yet?</Link>
                    </div>
                    <FormError message={error} />
                    <FormSuccess message={success} />
                    <AuthButton label="Reset" />
                </form>
            </CardContent>
        </Card>
    )
}

export default ResetForm