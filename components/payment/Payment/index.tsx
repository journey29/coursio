import { createWayForPayForm } from "@/actions/payment"


const Payment = async () => {
    const form: any = await createWayForPayForm({ amount: '30', currency: "UAH", orderId: "DH1724332328", productName: 'Some cool item', buttonTitle: 'CLick' })


    return (
        <div dangerouslySetInnerHTML={{ __html: form }} />
    )
}

export default Payment