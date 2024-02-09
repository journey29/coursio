import { createWayForPayForm } from "@/actions/payment"


const Payment = async () => {
    const form: any = await createWayForPayForm({ price: '3000', currency: "UAH", orderId: "DH1707337229", productName: 'Some cool item', buttonTitle: 'CLick' })


    return (
        <div dangerouslySetInnerHTML={{ __html: form }} />
    )
}

export default Payment