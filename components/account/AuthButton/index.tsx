import { Button } from '@/components/ui/button'

type Props = {
    label: string,
    disabled?: boolean
}

const AuthButton = ({ label, disabled }: Props) => {
    return (
        <Button
            type="submit"
            className="my-3 h-[50px] w-full max-w-40 rounded-2xl text-[17px] disabled:bg-red-200"
            disabled={disabled}
        >
            {label}
        </Button>
    )
}

export default AuthButton