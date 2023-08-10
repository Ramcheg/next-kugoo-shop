import { db } from "@/firebase/firebase";
import { IProduct } from "@/interfaces/productInterface";
import { collection, getDocs } from "firebase/firestore";

export interface IProductWithoutFirebase extends IProduct {
    id: string;
}

export const getAllProductsFire = async () => {
    let date: IProductWithoutFirebase[] = [];
    const collectionRef = collection(db, "Products");

    const doc = await getDocs(collectionRef);

    doc.forEach((item) => {
        const data = item.data() as IProduct;
        date.push({ id: item.id, ...data });
    });

    return date;
};
