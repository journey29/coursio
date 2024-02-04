import { Button } from '@/components/ui/button'
import React from 'react'

type Props = {
    children: React.ReactNode,
    label: string
}

const LoginButton = ({ children, label }: Props) => {
    return (
        <Button>
            {label}
            {children}
        </Button>
    )
}

export default LoginButton