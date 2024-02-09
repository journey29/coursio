import { Separator } from '@/components/ui/separator'

type Props = {
    cartTotal: number
}

const CartInfo = ({ cartTotal }: Props) => {
    return (
        <div className='space-y-4 pr-6'>
            <Separator />
            <div className='space-y-1.5 text-sm'>
                <div className='flex'>
                    <span className='flex-1'>Shipping</span>
                    <span>Free</span>
                </div>
                <div className='flex'>
                    <span className='flex-1'>
                        Transaction Fee
                    </span>
                    <span>0</span>
                </div>
                <div className='flex'>
                    <span className='flex-1'>Subtotal</span>
                    <span>
                        {cartTotal}$
                    </span>
                </div>
            </div>
        </div>
    )
}

export default CartInfo