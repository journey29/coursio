'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { Button } from "@/components/ui/button"
import { useAppDispatch } from "@/hooks/redux"
import { removeCart } from "@/store/features/cart"
import { CartItem } from "@/types"

type Props = {
    cartItem: CartItem;
    isLastItem: boolean
}

const CartItem = ({ cartItem, isLastItem }: Props) => {
    const dispatch = useAppDispatch()

    return (
        <div className={`flex items-center justify-between p-4 ${isLastItem ? `` : `border-b`}`}>
            <div className="space-y-3">
                <h5 className="font-semibold text-xl">{cartItem.title}</h5>
                <div className="flex items-center gap-3">
                    <p>{cartItem.level}</p> |
                    <p>{cartItem.costType}</p>
                </div>
            </div>
            <Button variant="destructive" onClick={() => dispatch(removeCart(cartItem))}>
                <FontAwesomeIcon icon={faTrash} width={20} height={20} />
            </Button>
        </div>
    )
}

export default CartItem