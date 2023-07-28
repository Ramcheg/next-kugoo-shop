import { H } from "@/components/H/H";
import Image from "next/image";

import menengerIcon from "@/public/menengerWomanMini.png";
import { Button, Catalog, ManagerPanel } from "@/components";
import Link from "next/link";

export function HomePopularCategories(): JSX.Element {
    return (
        <div className="my-10 sm:my-20">
            <div className="flex justify-between items-center flex-col gap-2 sm:gap-0 sm:flex-row">
                <H level={2}>Популярные категории</H>
                <div className="flex   items-center p-2 rounded-md gap-4 bg-gray-editible">
                    <div className="bg-orange-light overflow-hidden rounded-md">
                        <Image
                            src={menengerIcon}
                            alt="menengerWoman"
                            width={56}
                            height={71}
                            quality={100}
                        />
                    </div>
                    <ManagerPanel />
                </div>
            </div>
            <div>
                <Catalog />
                <div className="flex justify-center">
                    <Link href={"/catalog"}>
                        <Button color="gray" size="middle">
                            Смотреть все
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
