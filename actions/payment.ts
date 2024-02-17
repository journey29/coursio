"use server";
import crypto from "crypto";
import db from "@/lib/db";

type InvoiceType = {
  amount: string;
  currency: string;
  orderId: string;
  productName: string;
  productCount: string;
  productPrice: string;
  buttonTitle: string;
};

export const createWayForPayForm = async (options: InvoiceType) => {
  const {
    amount,
    currency,
    orderId,
    productName,
    productCount,
    productPrice,
    buttonTitle,
  } = options;

  try {
    const wayForPayForm = await createPaymentForm({
      amount,
      currency,
      orderId,
      productName,
      productCount,
      productPrice,
      buttonTitle,
    });

    return wayForPayForm;
  } catch (error) {
    return error;
  }
};

const createPaymentForm = async (options: InvoiceType) => {
  const {
    amount,
    currency,
    orderId,
    productName,
    productCount,
    productPrice,
    buttonTitle,
  } = options;

  const today = new Date();
  const orderDate = Math.floor(today.getTime() / 1000);

  const wayForPaySecretKey = process.env.WAYFORPAY_SECRET_KEY!;
  const message = `${process.env.MERCHANT_ACCOUNT};${process.env.MERCHANT_DOMAIN};${orderId};${orderDate};${amount};${currency};${productName}${productCount}${productPrice}`;

  const hmac = crypto.createHmac("md5", wayForPaySecretKey);
  hmac.update(message);
  const merchantSignature = hmac.digest("hex");

  // const invoice = await db.invoice.findUnique({
  //   where: {
  //     orderReference: orderId,
  //   },
  // });

  // await db.invoice.create({
  //   data: {
  //     amount,
  //     currency,
  //     createdDate: orderDate,
  //     orderReference: orderId,
  //     products: {
  //       create: [{ productName: "", productCount: "1", productPrice: "" }],
  //     },
  //   },
  // });

  const HTML_FORM = `
  <form method="post" action="https://secure.wayforpay.com/pay" accept-charset="utf-8">
  <input type='hidden' name="merchantAccount" value="${process.env.MERCHANT_ACCOUNT}">
  <input type='hidden' name="merchantAuthType" value="SimpleSignature">
  <input type='hidden' name="merchantDomainName" value="${process.env.MERCHANT_DOMAIN}">
  <input type='hidden' name="orderReference" value="${orderId}">
  <input type='hidden' name="orderDate" value="${orderDate}">
  <input type='hidden' name="amount" value="${amount}">
  <input type='hidden' name="currency" value="${currency}">
  <input type='hidden' name="orderTimeout" value="49000">
  <input type='hidden' name="productName[]" value="${productName}">
  <input type='hidden' name="productPrice[]" value="${amount}">
  <input type='hidden' name="productCount[]" value="${1}">
  <input type='hidden' name="serviceUrl" value="${process.env.MERCHANT_DOMAIN}/api/wayforpay/payment-status">
  <input type='hidden' name="defaultPaymentSystem" value="card">
  <input type='hidden' name="merchantSignature" value="${merchantSignature}">
  <input type="submit" value="${buttonTitle}">
</form>
`;

  return HTML_FORM;
};

export const handleWayForPayPaymentStatus = async () => {
  console.log(123);
};
