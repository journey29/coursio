'use client'

import { useAppDispatch, useAppSelector } from "@/hooks/redux"
import { initializeCart, setCart } from "@/store/features/cart"

const ReduxClientPayment = ({ setStateFromServer }: { setStateFromServer: any }) => {
    const { cartItems } = useAppSelector(state => state.cartReducer);

    return (
        <>
            <button onClick={async () => {
                await setStateFromServer(initializeCart, cartItems)
            }}>Click</button>
        </>
    )
}

export default ReduxClientPayment