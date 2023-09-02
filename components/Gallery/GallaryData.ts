import { StaticImageData } from "next/image";

import gallary1 from "@/public/ServicePage/ServiceGallary/gallary1.png";
import gallary2 from "@/public/ServicePage/ServiceGallary/gallary2.png";
import gallary3 from "@/public/ServicePage/ServiceGallary/gallary1.png";
import gallary4 from "@/public/ServicePage/ServiceGallary/gallary4.png";
import gallary5 from "@/public/ServicePage/ServiceGallary/gallary5.png";
import gallary6 from "@/public/ServicePage/ServiceGallary/gallary6.png";
import gallarybig1 from "@/public/ServicePage/ServiceGallary/gallaryBig.jpg";
import gallarybig2 from "@/public/ServicePage/ServiceGallary/gallaryBig2.jpg";
import gallarybig3 from "@/public/ServicePage/ServiceGallary/gallaryBig.jpg";
import gallarybig4 from "@/public/ServicePage/ServiceGallary/gallaryBig4.jpg";
import gallarybig5 from "@/public/ServicePage/ServiceGallary/gallaryBig5.jpg";
import gallarybig6 from "@/public/ServicePage/ServiceGallary/gallaryBig6.jpg";

export interface IGallaryData {
    name: StaticImageData;
    id: string;
}

export const serviceGallaryMiniData: IGallaryData[] = [
    { name: gallary1, id: "gallary1" },
    { name: gallary2, id: "gallary2" },
    { name: gallary3, id: "gallary3" },
    { name: gallary4, id: "gallary4" },
    { name: gallary5, id: "gallary5" },
    { name: gallary6, id: "gallary6" },
];

export const serviceGallaryData: IGallaryData[] = [
    { name: gallarybig1, id: "gallarybig1" },
    { name: gallarybig2, id: "gallarybig2" },
    { name: gallarybig3, id: "gallarybig3" },
    { name: gallarybig4, id: "gallarybig4" },
    { name: gallarybig5, id: "gallarybig5" },
    { name: gallarybig6, id: "gallarybig6" },
];
