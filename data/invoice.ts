"use server";
import db from "@/lib/db";

type OptionsType = {
  amount: string;
  currency: string;
  orderId: string;
  productName: string[];
  productCount: string[];
  productPrice: string[];
  buttonTitle: string;
};

export const createInvoice = async (
  options: OptionsType,
  createdDate: number,
) => {
  try {
    const invoice = await db.invoice.findUnique({
      where: {
        orderReference: options.orderId,
      },
    });

    if (invoice) {
      return;
    }

    const productData = options.productName.map((name, index) => ({
      productName: name,
      productCount: options.productCount[index],
      productPrice: options.productPrice[index],
    }));

    await db.invoice.create({
      data: {
        amount: options.amount,
        currency: options.currency,
        createdDate,
        orderReference: options.orderId,
        products: {
          create: productData,
        },
      },
    });
  } catch {
    return null;
  }
};
