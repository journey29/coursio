'use client'
import { useEffect } from "react";

const PaymenySuccessPage = () => {
    const requestData = {
        parsedResponse: '',
        invoice: '',
        owner: ''
    };

    useEffect(() => {
        fetch('http://localhost:3000/api/wayforpay/payment-status', {
            method: "POST",
            headers: {
                "Content-Type": "application/json" // Make sure to set the content type
            },
            body: JSON.stringify(requestData) // Serialize the request body
        })
            .then(response => response.json())
            .then(data => {
                console.log(data); // Handle the JSON response data
            });
    }, [])

    return (
        <div></div>
    )
}

export default PaymenySuccessPage