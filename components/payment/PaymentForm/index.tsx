'use client'
import { createWayForPayForm } from "@/actions/payment"
import { useCart } from "@/hooks/use-cart"
import { useEffect, useState } from "react"
import { v4 as uuid } from 'uuid'
import parse from 'html-react-parser'


const PaymentForm = () => {
    const [form, setForm] = useState<string | any>();
    const { cartItems } = useCart(state => state);
    const cartTotal = cartItems.reduce((acc, i) => acc + (i.price ?? 0), 0).toString();
    const orderId = uuid();
    const cartTitles = cartItems.map(cartItem => `${cartItem.title}`);
    const cartPrices = cartItems.map(cartItem => `${cartItem?.price ?? 0}`)
    const cartCountes = cartItems.map(() => "1")

    useEffect(() => {
        createWayForPayForm({
            amount: cartTotal,
            currency: "USD",
            orderId,
            productName: cartTitles,
            productCount: cartCountes,
            productPrice: cartPrices,
            buttonTitle: 'Pay'
        })
            .then(data => setForm(data))
    }, [cartItems])

    return (
        <>
            {cartItems.length === 0
                ? <p className="text-2xl font-bold">Add courses to your cart first!</p>
                : parse(`<div className="max-w-[250px] w-full"}>${form}</div > `)
            }
        </>
    )
}

export default PaymentForm