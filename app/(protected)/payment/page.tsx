import Payment from "@/components/payment/Payment"
import PaymentForm from "@/components/payment/PaymentForm"
import ReduxClientPayment from "@/components/payment/ReduxClientPayment";
import { store } from "@/store";

const PaymentPage = () => {
    async function setStateFromServer(action: any, payload: any) {
        'use server';
        store.dispatch(action(payload));
    }


    return (
        <>
            <ReduxClientPayment setStateFromServer={setStateFromServer} />
            <PaymentForm />
        </>
    )
}

export default PaymentPage