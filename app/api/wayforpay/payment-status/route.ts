import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";

export async function POST(request: NextRequest) {
  const { parsedResponse, invoice, owner } = await request.json();

  try {
    await db.invoice.create({
      data: {
        ...invoice,
      },
    });
  } catch {
    await db.invoice.create({
      data: {
        amount: "30",
        currency: "UAH",
        createdDate: 11223,
        orderReference: "12",
        products: {
          create: [{ productName: "", productCount: "1", productPrice: "" }],
        },
      },
    });
  }

  return NextResponse.json({ message: parsedResponse, invoice, owner });
}
