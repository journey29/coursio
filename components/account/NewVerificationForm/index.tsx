'use client'

import { newVerification } from "@/actions/new-verification";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { useSearchParams } from "next/navigation"
import { useCallback, useEffect, useState } from "react"

const NewVerificationForm = () => {
    const [error, setError] = useState<string | undefined>('')
    const [success, setSuccess] = useState<string | undefined>('')
    const searchParams = useSearchParams();
    const token = searchParams.get('token');

    const onSubmit = useCallback(async () => {
        if (!token) {
            setError('Missing token!')
            return
        }

        newVerification(token)
            .then(data => {
                setError(data.error)
                setSuccess(data.success)
            }).catch(() => {
                setError('Something went wrong!')
            })
    }, [token]);

    useEffect(() => {
        onSubmit()
    }, [onSubmit]);

    return (
        <Card>
            <CardHeader>
                <CardTitle>Hello</CardTitle>
            </CardHeader>
            <CardContent>
                {!success || !error && <div>Loading...</div>}
                <div>{success}</div>
                <div>{error}</div>
            </CardContent>
            <CardFooter>
                <Link href="/auth/login">Log in</Link>
            </CardFooter>
        </Card>
    )
}

export default NewVerificationForm