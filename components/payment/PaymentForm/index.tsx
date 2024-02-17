import { createWayForPayForm } from "@/actions/payment"
import { store } from "@/store"


const PaymentForm = async () => {
    const state = store.getState();

    console.log(state)
    const form: any = await createWayForPayForm({ amount: '2', currency: "UAH", orderId: "DH1720703328", productName: 'Some cool item', buttonTitle: 'Pay' })

    return (
        <>
            <div dangerouslySetInnerHTML={{ __html: form }} />
        </>
    )
}

export default PaymentForm