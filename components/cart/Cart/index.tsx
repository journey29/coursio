'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { useAppSelector } from "@/hooks/redux"
import { Sheet, SheetTrigger, SheetContent, SheetHeader } from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import CartItem from "../CartItem"
import CartInfo from "../CartInfo"

const Cart = () => {
    const { cartItems } = useAppSelector(state => state.cartReducer);

    const cartTotal = cartItems.reduce((acc, item) => acc + (item.price ?? 0), 0);

    return (
        <Sheet>
            <SheetTrigger className="relative group">
                <FontAwesomeIcon className="group-hover:text-primary/90" icon={faCartShopping} width={30} height={30} />
                <span className="flex justify-center items-center absolute -bottom-[5px] -right-[5px] rounded-full w-5 h-5 bg-primary text-white text-xs font-medium group-hover:bg-primary/90">
                    {cartItems.length}
                </span>
            </SheetTrigger>
            <SheetContent className='flex flex-col pr-0 sm:max-w-lg'>
                <SheetHeader>
                    Cart | ({cartItems.length})
                </SheetHeader>
                {cartItems.length > 0 ? (
                    <>
                        <div className='flex w-full flex-col pr-6'>
                            <ScrollArea>
                                {cartItems.map((cartItem, index) => (
                                    <CartItem
                                        cartItem={cartItem}
                                        isLastItem={index === cartItems.length - 1}
                                        key={cartItem.id}
                                    />
                                ))}
                            </ScrollArea>
                        </div>
                        <CartInfo cartTotal={cartTotal} />
                    </>
                ) : (
                    <div className='flex h-full flex-col items-center justify-center space-y-1'>
                        <div className='text-xl font-semibold'>
                            Your cart is empty
                        </div>
                    </div>
                )}
            </SheetContent>
        </Sheet>
    )
}

export default Cart