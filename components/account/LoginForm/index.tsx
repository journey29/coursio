'use client'
import { Button } from "@/components/ui/button"
import { LoginSchema, LoginSchemaType } from "@/schemas";
import Link from "next/link";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { useSearchParams } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { login } from "@/actions/login";
import Social from "../Socials";

const LoginForm = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<LoginSchemaType>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    });
    const [success, setSuccess] = useState<string | undefined>('');
    const [error, setError] = useState<string | undefined>('');
    const [isPending, startTransition] = useTransition();
    const [showCode, setShowCode] = useState(false)
    const searchParams = useSearchParams();
    const urlError = searchParams.get('error') === 'OAuthAccountNotLinked' ? 'Email already in use with different provider!' : '';

    const onSubmit = (values: LoginSchemaType) => {
        setError('')
        setSuccess('')

        startTransition(() => {
            login(values)
                .then(data => {
                    if (data?.error || data?.success) {
                        setSuccess(data?.success)
                        setError(data?.error)
                    }

                    if (data?.twoFactor) {
                        setShowCode(true)
                    }
                })
        })
    }

    return (
        <>
            {showCode &&
                <form className="shadow-lg pt-[42px] pb-[25px] px-[42px] my-[25px]" onSubmit={handleSubmit(onSubmit)}>
                    <Label htmlFor="code" className="font-bold">Code</Label>
                    <Input
                        {...register('code')}
                        className="mt-2"
                        name="code"
                    />
                    <div className="flex justify-between items-center">
                        <Link href="/auth/reset" className="text-secondary-foreground hover:text-primary-foreground font-light" >You forget the password?</Link>
                    </div>
                    <Button
                        variant={'custom'}
                        type="submit"
                        className="my-3 max-w-40 h-[50px] rounded-2xl font-light disabled:bg-gray-500"
                        disabled={isPending}
                    >
                        Confirm
                    </Button>
                    <div>{error || urlError}</div>
                    <div>{success}</div>
                </form>
            }
            {!showCode &&
                <form className="shadow-lg pt-[42px] pb-[25px] px-[42px] my-[25px]" onSubmit={handleSubmit(onSubmit)}>
                    <Label htmlFor="email" className="font-bold">Email</Label>
                    <Input
                        {...register('email')}
                        type="text"
                        className="mt-2"
                        name="email"
                    />
                    {errors.email && <p>{`${errors.email.message}`}</p>}
                    <Label htmlFor="password" className="font-bold">Password</Label>
                    <Input
                        {...register('password')}
                        type="password"
                        className="mt-2"
                        name="password"
                    />
                    {errors.password && <p>{`${errors.password.message}`}</p>}
                    <div className="flex justify-between items-center">
                        <Link href="/auth/register" className="text-secondary-foreground hover:text-primary-foreground font-light" >Don't have an account yet?</Link>
                        <Link href="/auth/reset" className="text-secondary-foreground hover:text-primary-foreground font-light" >You forget the password?</Link>
                    </div>
                    <Button
                        variant={'custom'}
                        type="submit"
                        className="my-3 max-w-40 h-[50px] rounded-2xl font-light disabled:bg-gray-500"
                        disabled={isPending}
                    >
                        Login
                    </Button>
                    <div>{error || urlError}</div>
                    <div>{success}</div>
                    <Social />
                </form>
            }
        </>
    )
}

export default LoginForm