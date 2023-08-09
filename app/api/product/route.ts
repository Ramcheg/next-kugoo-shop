import { getProductsFireType } from "@/helpers/getProductsFireType";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    // const r = await fetch("https://jsonplaceholder.typicode.com/todos/1").then(
    //     (response) => response.json()
    // );
    const product = await getProductsFireType("price", "<", "5000");
    // const inJson = JSON.stringify(product);

    return NextResponse.json(product);
}
