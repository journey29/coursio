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
        <>
            <form className="shadow-lg pt-[42px] pb-[25px] px-[42px] my-[25px]" onSubmit={handleSubmit(onSubmit)}>
                <Label htmlFor="email" className="font-bold">Email</Label>
                <Input
                    {...register("email")}
                    type="text"
                    className="mt-2"
                    name="email"
                />
                {errors.email && <p>{`${errors.email.message}`}</p>}
                <div className="flex justify-between items-center">
                    <Link href="/auth/register" className="text-secondary-foreground hover:text-primary-foreground font-light" >Don't have an account yet?</Link>
                </div>
                <Button
                    variant={'custom'}
                    type="submit"
                    className="my-3 max-w-40 h-[50px] rounded-2xl font-light disabled:bg-gray-500"
                    disabled={isPending}
                >
                    Reset
                </Button>
                <div>{error}</div>
                <div>{success}</div>
            </form>
        </>
    )
}

export default ResetForm