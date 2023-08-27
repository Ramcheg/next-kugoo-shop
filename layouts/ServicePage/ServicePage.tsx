import { Button, H } from "@/components";
import Image from "next/image";
import RoomIcon from "@mui/icons-material/Room";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import SettingsIcon from "@mui/icons-material/Settings";

import womanWithElecticImg from "@/public/ServicePage/woman-with-electric.png";
import {
    ServiceBanner,
    ServiceDiagnostic,
    ServiceFindReason,
    ServiceHidro,
    ServicePriceList,
    ServiceRepairCost,
} from "@/components/SevicePage";

export default function ServicePage(): JSX.Element {
    return (
        <>
            <ServiceBanner />
            <section className="mt-14 md:mt-24 hidden md:block">
                <ServiceDiagnostic />
            </section>
            <section className=" mt-14 md:mt-24 ">
                <ServiceRepairCost />
            </section>
            <section className=" mt-14 md:mt-24">
                <ServiceFindReason />
            </section>
            <section className=" mt-6 md:mt-16">
                <ServiceHidro />
            </section>
            <section className="mt-6 md:mt-16">
                <ServicePriceList />
            </section>
        </>
    );
}
