import { handleWayForPayPaymentStatus } from "@/actions/payment"

const PaymenySuccessPage = async () => {
    const success = await handleWayForPayPaymentStatus()
    return (
        <div>PaymenySuccessPage</div>
    )
}

export default PaymenySuccessPage