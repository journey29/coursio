"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { CartItem } from "@/types";
import { useCart } from "@/hooks/use-cart";

type Props = {
    cartItem: CartItem;
};

const CartItem = ({ cartItem }: Props) => {
    const deleteItem = useCart(state => state.deleteItem)

    return (
        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center justify-between py-4 border-b border-border">
            <div className="space-y-3">
                <h5 className="text-md sm:text-xl font-semibold">{cartItem.title}</h5>
                <div className="flex items-center gap-3">
                    <p>{cartItem.level}</p> |<p>{cartItem.costType}</p>
                </div>
                <p className="font-medium">{cartItem.price} $</p>
            </div>
            <Button
                variant="destructive"
                onClick={() => deleteItem(cartItem.id)}
            >
                <FontAwesomeIcon icon={faTrash} width={20} height={20} />
            </Button>
        </div>
    );
};

export default CartItem;
