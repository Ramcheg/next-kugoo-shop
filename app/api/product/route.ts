import { getAllProductsFire } from "@/helpers/getAllProductsFire";
import { getProductsFireType } from "@/helpers/getProductsFireType";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const key: string | undefined = req.nextUrl.searchParams
        .keys()
        .next().value;

    if (typeof key === "string") {
        try {
            const param = key !== "sold" ? "==" : ">";
            const value = req.nextUrl.searchParams.get(key) as string;
            const product = await getProductsFireType(key, param, value);

            return NextResponse.json(product);
        } catch (err) {
            return NextResponse.json({ message: "Error", err });
        }
    } else {
        try {
            const product = await getAllProductsFire();

            return NextResponse.json(product);
        } catch (err) {
            return NextResponse.json({ message: "Error", err });
        }
    }
}
