const PaymentPage = () => {
    return (
        <div className="flex items-start justify-between py-[34px]">
            <div className="max-w-[482px] px-[25px] py-[17px]">
                <h2 className="text-[30px] mb-6">
                    Payment
                </h2>
                <p className="text-[17px] mb-6">We currently accept the following payment methods (you will have the option to select your payment method when placing your order):</p>
                <ul className="list-disc ml-10">
                    <li className="text-[17px] font-bold mb-2">Bankovním převodem</li>
                    <li className="text-[17px] font-bold">Cash <span className="font-normal">(on delivery)</span></li>
                </ul>
            </div>
            <div className="max-w-[482px] px-[25px] py-[17px]">
                <h2 className="text-[30px] mb-6">Documents</h2>
                <p className="text-[17px] mb-6">If you pay by bank transfer, you will receive an electronic gift voucher in PDF format by e-mail, which you can print.</p>
                <p className="text-[17px] mb-6">If you pay in cash at the reception of our salon, we will hand you a printed voucher. The gift voucher and packaging have been polished to perfection.</p>
                <p className="text-[17px] mb-6">Zdarma expresní doručení kurýrem po Praze do 120 minut. Každý den od 09:00 do 19:30 hodin.</p>
            </div>
        </div>
    )
}

export default PaymentPage