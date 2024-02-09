"use server";
import crypto from "crypto";

export const createWayForPayForm = async (options: any) => {
  const { price, currency, orderId, productName, buttonTitle } = options;

  try {
    const wayForPayForm = await createPaymentForm({
      price,
      currency,
      orderId,
      productName,
      buttonTitle,
    });

    console.log(wayForPayForm);

    return wayForPayForm;
  } catch (error) {
    return error;
  }
};

const createPaymentForm = async (options: any) => {
  const { price, currency, orderId, productName, buttonTitle } = options;

  const today = new Date();
  const orderDate = Math.floor(today.getTime() / 1000);

  const wayForPaySecretKey = process.env.WAYFORPAY_SECRET_KEY!;
  const message = `${process.env.MERCHANT_ACCOUNT};${process.env.MERCHANT_DOMAIN};${orderId};${orderDate};${price};${currency};${productName};1;3000`;

  console.log(message);

  const hmac = crypto.createHmac("md5", wayForPaySecretKey);
  hmac.update(message);
  const merchantSignature = hmac.digest("hex");

  const HTML_FORM = `
  <form method="post" action="https://secure.wayforpay.com/pay" accept-charset="utf-8">
  <input type='hidden' name="merchantAccount" value="${
    process.env.MERCHANT_ACCOUNT
  }">
  <input type='hidden' name="merchantAuthType" value="SimpleSignature">
  <input type='hidden' name="merchantDomainName" value="${
    process.env.MERCHANT_DOMAIN
  }">
  <input type='hidden' name="orderReference" value="${orderId}">
  <input type='hidden' name="orderDate" value="${orderDate}">
  <input type='hidden' name="amount" value="${price}">
  <input type='hidden' name="currency" value="${currency}">
  <input type='hidden' name="orderTimeout" value="49000">
  <input type='hidden' name="productName[]" value="${productName}">
  <input type='hidden' name="productPrice[]" value="${price}">
  <input type='hidden' name="productCount[]" value="${1}">
  <input type='hidden' name="defaultPaymentSystem" value="card">
  <input type='hidden' name="merchantSignature" value="${merchantSignature}">
  <input type="submit" value="${buttonTitle}">
</form>
`;

  return HTML_FORM;
};
