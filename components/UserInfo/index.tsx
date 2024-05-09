import { Card, CardContent, CardHeader } from "@/components/ui/card"

import { ExtendedUser } from "@/next-auth"

type Props = {
  label: string
  user?: ExtendedUser
}

const UserInfo = ({ label, user }: Props) => {
  return (
    <Card className="w-full max-w-[600px] shadow-md dark:border-none">
      <CardHeader className="text-center">
        <p className="text-2xl font-bold">{label}</p>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <UserInfoItem
          title="ID"
          text={user?.id}
        />
        <UserInfoItem
          title="Name"
          text={user?.name}
        />
        <UserInfoItem
          title="Email"
          text={user?.email}
        />
        <UserInfoItem
          title="Two factor enabled"
          text={user?.isTwoFactorEnabled}
        />
        <UserInfoItem
          title="Role"
          text={user?.role}
        />
      </CardContent>
    </Card>
  )
}

export default UserInfo

type UserInfoItemProps = {
  title: string
  text: string | undefined | boolean | null
}

const UserInfoItem = ({ title, text }: UserInfoItemProps) => {
  return (
    <div className="flex w-full flex-col items-center justify-between rounded-xl border border-border p-4 mobile:flex-row">
      <p>{title}</p>
      <p className="max-w-[280px] truncate rounded-lg bg-slate-100 p-1 px-3 font-mono text-sm text-black">
        {title === "Two factor enabled" ? (text ? "ON" : "OFF") : text}
      </p>
    </div>
  )
}
