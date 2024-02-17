"use client";
import { Button } from "@/components/ui/button";
import { RegisterSchema, RegisterSchemaType } from "@/schemas";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { handleRegister } from "@/actions/register";
import AuthButton from "../AuthButton";
import { FormError } from "../FormError";
import { FormSuccess } from "../FormSuccess";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const RegisterForm = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<RegisterSchemaType>({
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
            handleRegister(values)
                .then((data) => {
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
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <Label htmlFor="name" className="font-medium">
                            Name
                        </Label>
                        <Input
                            {...register("name")}
                            type="text"
                            className="mb-3 mt-2 text-black"
                            name="name"
                        />
                    </div>
                    <div className="mb-4">
                        <Label htmlFor="email" className="font-medium">
                            Email
                        </Label>
                        <Input
                            {...register("email")}
                            type="text"
                            className="mb-3 mt-2 text-black"
                            name="email"
                        />
                        {errors.email && (
                            <p className="text-primary">{`${errors.email.message}`}</p>
                        )}
                    </div>
                    <div className="mb-4">
                        <Label htmlFor="password" className="font-medium">
                            Password
                        </Label>
                        <Input
                            {...register("password")}
                            type="password"
                            className="mb-3 mt-2 text-black"
                            name="password"
                        />
                        {errors.password && (
                            <p className="text-primary">{`${errors.password.message}`}</p>
                        )}
                    </div>
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
            </CardContent>
        </Card>
    );
};

export default RegisterForm;
