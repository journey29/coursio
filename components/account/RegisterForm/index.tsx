'use client'
import { Button } from "@/components/ui/button"
import { RegisterSchema, RegisterSchemaType } from "@/schemas";
import Link from "next/link";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { handleRegister } from '@/actions/register'

const RegisterForm = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<RegisterSchemaType>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    });
    const [success, setSuccess] = useState<string | undefined>('');
    const [error, setError] = useState<string | undefined>('');
    const [isPending, startTransition] = useTransition();

    const onSubmit = (values: RegisterSchemaType) => {
        setError('')
        setSuccess('')

        startTransition(() => {
            handleRegister(values).then(data => {
                toast.success('Welcome to Coursio!')
                setSuccess(data.success)
                setError(data.error)
            })
        })
    }

    return (
        <>
            <form className="shadow-lg pt-[42px] pb-[25px] px-[42px] my-[25px]" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <Label htmlFor="name" className="font-bold">Name</Label>
                    <Input
                        {...register('name')}
                        type="text"
                        className="mt-2"
                        name="name"
                    />
                </div>
                <div>
                    <Label htmlFor="email" className="font-bold">Email</Label>
                    <Input
                        {...register('email')}
                        type="text"
                        className="mt-2"
                        name="email"
                    />
                    {errors.email && <p>{`${errors.email.message}`}</p>}
                </div>
                <div>
                    <Label htmlFor="password" className="font-bold">Password</Label>
                    <Input
                        {...register('password')}
                        type="password"
                        className="mt-2"
                        name="password"
                    />
                    {errors.password && <p>{`${errors.password.message}`}</p>}
                </div>
                <div className="flex justify-between items-center">
                    <Link href="/" className="text-secondary-foreground hover:text-primary-foreground font-light" >You forget the password?</Link>
                </div>
                <Button
                    variant={'custom'}
                    className="my-3 max-w-40 h-[50px] rounded-2xl font-light disabled:bg-gray-500"
                    type="submit"
                    disabled={isPending}
                >
                    Register
                </Button>
                <div>{success}</div>
                <div>{error}</div>
            </form>
        </>
    )
}

export default RegisterForm