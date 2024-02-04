'use client'
import { Button } from "@/components/ui/button"
import { NewPasswordSchema, NewPasswordType } from "@/schemas";
import Link from "next/link";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useSearchParams } from "next/navigation";
import { newPassword } from "@/actions/new-password";

const NewPasswordForm = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<NewPasswordType>({
        resolver: zodResolver(NewPasswordSchema),
        defaultValues: {
            password: "",
        }
    });
    const [success, setSuccess] = useState<string | undefined>('');
    const [error, setError] = useState<string | undefined>('');
    const [isPending, startTransition] = useTransition();
    const useSearch = useSearchParams()
    const token = useSearch.get('token')

    const onSubmit = (values: NewPasswordType) => {
        setError('')
        setSuccess('')

        startTransition(() => {
            newPassword(values, token)
                .then(data => {
                    setSuccess(data?.success)
                    setError(data?.error)
                })
        })
    }

    return (
        <>
            <form className="shadow-lg pt-[42px] pb-[25px] px-[42px] my-[25px]" onSubmit={handleSubmit(onSubmit)}>
                <Label htmlFor="password" className="font-bold">Password</Label>
                <Input
                    {...register("password")}
                    type="password"
                    className="mt-2"
                    name="password"
                />
                {errors.password && <p>{`${errors.password.message}`}</p>}
                <div className="flex justify-between items-center">
                    <Link href="/auth/register" className="text-secondary-foreground hover:text-primary-foreground font-light" >Don't have an account yet?</Link>
                </div>
                <Button
                    variant={'custom'}
                    type="submit"
                    className="my-3 max-w-40 h-[50px] rounded-2xl font-light disabled:bg-gray-500"
                    disabled={isPending}
                >
                    Reset password
                </Button>
                <div>{error}</div>
                <div>{success}</div>
            </form>
        </>
    )
}

export default NewPasswordForm