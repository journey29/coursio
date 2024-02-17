"use client";

import { newVerification } from "@/actions/new-verification";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { FormError } from "../FormError";
import { FormSuccess } from "../FormSuccess";

const NewVerificationForm = () => {
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const searchParams = useSearchParams();
    const token = searchParams.get("token");

    const onSubmit = useCallback(async () => {
        if (!token) {
            setError("Missing token!");
            return;
        }

        newVerification(token)
            .then((data) => {
                setError(data.error);
                setSuccess(data.success);
            })
            .catch(() => {
                setError("Something went wrong!");
            });
    }, [token]);

    useEffect(() => {
        onSubmit();
    }, [onSubmit]);

    return (
        <Card className="w-full max-w-[600px] shadow-md dark:border-none">
            <CardHeader>
                <p className="text-center text-3xl font-bold">Token verification</p>
            </CardHeader>
            <CardContent>
                {!success || (!error && <div>Loading...</div>)}
                <FormError message={error} />
                <FormSuccess message={success} />
            </CardContent>
            <CardFooter>
                <Link className="font-light" href="/auth/login">
                    Login
                </Link>
            </CardFooter>
        </Card>
    );
};

export default NewVerificationForm;
