"use server";
import crypto from "crypto";

type OptionsType = {
  amount: string;
  currency: string;
  orderId: string;
  productName: string[];
  productCount: string[];
  productPrice: string[];
  buttonTitle: string;
};

export const createWayForPayForm = async (options: OptionsType) => {
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

const createPaymentForm = async (options: OptionsType) => {
  const {
    amount,
    currency,
    orderId,
    productName,
    productCount,
    productPrice,
    buttonTitle,
  } = options;

  const productNameString = productName.map((item) => `${item};`).join("");
  const productCountString = productCount.map((item) => `${item};`).join("");
  const productPriceString = productPrice.map((item) => `${item};`).join("");

  const today = new Date();
  const orderDate = Math.floor(today.getTime() / 1000);

  const wayForPaySecretKey = process.env.WAYFORPAY_SECRET_KEY!;
  const message =
    `${process.env.MERCHANT_ACCOUNT};${process.env.MERCHANT_DOMAIN};${orderId};${orderDate};${amount};${currency};${productNameString}${productCountString}${productPriceString}`.slice(
      0,
      -1,
    );

  const hmac = crypto.createHmac("md5", wayForPaySecretKey);
  hmac.update(message);
  const merchantSignature = hmac.digest("hex");

  const productCountArray = productCount.map(
    (value) =>
      `<input
      type="hidden"
      name="productCount[]"
      value="${value}"
    >`,
  );

  const productPriceArray = productPrice.map(
    (value) =>
      `<input
      type="hidden"
      name="productPrice[]"
      value="${value}"
    >`,
  );

  const productNameArray = productName.map(
    (value) =>
      `<input
      type="hidden"
      name="productName[]"
      value="${value}"
    >`,
  );

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
  <input type='hidden' name="amount" value="${amount}">
  <input type='hidden' name="currency" value="${currency}">
  <input type='hidden' name="orderTimeout" value="49000">
  ${productNameArray.join("")}
  ${productPriceArray.join("")}
  ${productCountArray.join("")}
  <input type='hidden' name="defaultPaymentSystem" value="card">
  <input type='hidden' name="merchantSignature" value="${merchantSignature}">
  <input class="bg-primary text-white shadow hover:bg-primary/90 p-5 h-[50px] w-full cursor-pointer rounded-lg text-xl font-semibold" type="submit" value="${buttonTitle}">
</form>
`;

  return HTML_FORM;
};

export const handleWayForPayPaymentStatus = async () => {};
