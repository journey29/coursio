import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger
} from "@/components/ui/sheet"

import { useCart } from "@/hooks/use-cart"

import CartInfo from "../CartInfo"
import CartItem from "../CartItem"

const Cart = () => {
  const cartItems = useCart(state => state.cartItems)
  const cartTotal = cartItems.reduce((acc, item) => acc + (item.price ?? 0), 0)

  return (
    <Sheet>
      <SheetTrigger
        className="relative"
        asChild
      >
        <Button
          className="px-3"
          variant={"ghost"}
        >
          <FontAwesomeIcon
            className="h-5 w-5"
            icon={faCartShopping}
          />
          <span className="absolute -bottom-[5px] -right-[5px] flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-medium text-white">
            {cartItems.length}
          </span>
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col border-none pr-0 sm:max-w-lg">
        {cartItems.length > 0 ? (
          <>
            <SheetHeader>Cart | ({cartItems.length})</SheetHeader>
            <div className="flex w-full flex-col gap-5 pr-6">
              <ScrollArea className="max-h-[532px]">
                {cartItems.map(cartItem => (
                  <CartItem
                    cartItem={cartItem}
                    key={cartItem.id}
                  />
                ))}
              </ScrollArea>
              <CartInfo cartTotal={cartTotal} />
            </div>
            <SheetFooter className="mt-5 w-full pr-6">
              <SheetTrigger asChild>
                <Button
                  className="w-full py-6 text-lg font-medium"
                  asChild
                >
                  <Link href="/payment">Checkout</Link>
                </Button>
              </SheetTrigger>
            </SheetFooter>
          </>
        ) : (
          <div className="flex h-full flex-col items-center justify-center space-y-1">
            <div className="text-xl font-semibold">Your cart is empty!</div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}

export default Cart
