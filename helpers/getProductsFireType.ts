import { db } from "@/firebase/firebase";
import { IProduct } from "@/interfaces/productInterface";
import {
    WhereFilterOp,
    collection,
    getDoc,
    getDocs,
    query,
    where,
    limit,
} from "firebase/firestore";

export interface IDate extends IProduct {
    id: string;
}

export const getProductsFireType = async (
    before: string,
    search: WhereFilterOp,
    after: string,
    limited: number = 0
) => {
    let date: IDate[] = [];
    const collectionRef = collection(db, "Products");
    let q;
    if (limited <= 0) {
        q = query(collectionRef, where(before, search, after));
    } else {
        q = query(collectionRef, where(before, search, after), limit(limited));
    }
    const doc = await getDocs(q);

    doc.forEach((item) => {
        const data = item.data() as IProduct;
        date.push({ id: item.id, ...data });
    });

    return date;
};
