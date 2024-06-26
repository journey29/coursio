"use client"

import { Role } from "@prisma/client"
import { toast } from "sonner"

import RoleGate from "@/components/RoleGate"
import { FormSuccess } from "@/components/auth/FormSuccess"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

import { admin } from "@/actions/admin"

const Admin = () => {
  const onServerActionClick = () => {
    admin().then(data => {
      if (data.error) {
        toast.error(data.error)
      }

      if (data.success) {
        toast.success(data.success)
      }
    })
  }

  return (
    <Card className="w-full max-w-[600px] shadow-md dark:border-none">
      <CardHeader className="pb-3 text-center">
        <p className="text-2xl font-bold">Admin</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <RoleGate allowedRole={Role.ADMIN}>
          <FormSuccess message="You're allowed to see the content!" />
        </RoleGate>
        <div className="flex flex-col items-center justify-between gap-3 rounded-lg border border-border p-3 shadow-md mobile:flex-row">
          <p className="text-sm font-medium">Admin-only Server Action</p>
          <Button onClick={onServerActionClick}>Click to test</Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default Admin
