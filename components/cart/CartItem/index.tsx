"use client"

import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { Button } from "@/components/ui/button"

import { useCart } from "@/hooks/use-cart"

import type { CartItem } from "@/types"

type Props = {
  cartItem: CartItem
}

const CartItem = ({ cartItem }: Props) => {
  const deleteItem = useCart(state => state.deleteItem)

  return (
    <div className="flex flex-col items-start justify-between gap-3 border-b border-border py-4 sm:flex-row sm:items-center">
      <div className="space-y-3">
        <h5 className="text-md font-semibold sm:text-xl">{cartItem.title}</h5>
        <div className="flex items-center gap-3">
          <p>{cartItem.level}</p> |<p>{cartItem.costType}</p>
        </div>
        <p className="font-medium">{cartItem.price} $</p>
      </div>
      <Button
        variant="destructive"
        onClick={() => deleteItem(cartItem.id)}
      >
        <FontAwesomeIcon
          icon={faTrash}
          width={20}
          height={20}
        />
      </Button>
    </div>
  )
}

export default CartItem
