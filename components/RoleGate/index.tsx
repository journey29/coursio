'use client'

import { useCurrentRole } from "@/hooks/use-curren-role"
import { Role } from "@prisma/client"

type Props = {
    allowedRole: Role,
    children: React.ReactNode
}

const RoleGate = ({ allowedRole, children }: Props) => {
    const role = useCurrentRole()

    if (role !== allowedRole) {
        return <div>You don't have a permission to see it</div>
    }

    return (
        <div>
            {children}
        </div>
    )
}

export default RoleGate