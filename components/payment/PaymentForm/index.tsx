'use client'
import { createWayForPayForm } from "@/actions/payment"
import { useCart } from "@/hooks/use-cart"
import { useEffect, useState } from "react"
import { v4 as uuid } from 'uuid'


const PaymentForm = () => {
    const [form, setForm] = useState<any>();
    const { cartItems } = useCart(state => state);
    const cartTotal = cartItems.reduce((acc, i) => acc + (i.price ?? 0), 0).toString();
    const orderId = uuid();
    const cartTitles = cartItems.map(cartItem => `${cartItem.title}`);
    const cartPrices = cartItems.map(cartItem => `${cartItem?.price ?? 0}`)
    const cartCountes = cartItems.map(() => "1")

    useEffect(() => {
        createWayForPayForm({
            amount: cartTotal,
            currency: "UAH",
            orderId,
            productName: cartTitles,
            productCount: cartCountes,
            productPrice: cartPrices,
            buttonTitle: 'Pay'
        })
            .then(data => setForm(data))
    }, [])

    return (
        <>
            <div dangerouslySetInnerHTML={{ __html: form }} />
        </>
    )
}

export default PaymentForm