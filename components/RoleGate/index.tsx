'use client'

import { useCurrentRole } from "@/hooks/use-current-role"
import { Role } from "@prisma/client"
import { FormError } from "../account/FormError"

type Props = {
    allowedRole: Role,
    children: React.ReactNode
}

const RoleGate = ({ allowedRole, children }: Props) => {
    const role = useCurrentRole()

    if (role !== allowedRole) {
        return <FormError message="You don't have a permission to see it!" />
    }

    return (
        <div>
            {children}
        </div>
    )
}

export default RoleGate