import { db } from "@/firebase/firebase";
import { IProduct } from "@/interfaces/productInterface";
import {
    WhereFilterOp,
    collection,
    getDoc,
    getDocs,
    query,
    where,
} from "firebase/firestore";

export interface IDate extends IProduct {
    id: string;
}

export const getProductsFireType = async (
    before: string,
    search: WhereFilterOp,
    after: string
) => {
    const collectionRef = collection(db, "Products");
    const q = query(collectionRef, where(before, search, after));
    const doc = await getDocs(q);

    let date: IDate[] = [];
    doc.forEach((item) => {
        const data = item.data() as IProduct;
        date.push({ id: item.id, ...data });
    });

    return date;
};
