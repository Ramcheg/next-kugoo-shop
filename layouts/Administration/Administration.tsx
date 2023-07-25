"use client";

import { Button } from "@/components";
import Image from "next/image";
import { authOptions } from "@/configs/auth";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { AdministrationForm } from "@/components/AdministrationPage";

export default function Administration(): JSX.Element {
    const { data } = useSession();
    const userName = data?.user?.name ? data.user.name : "";
    const userEmail = data?.user?.email ? data.user.email : null;
    const userImage = data?.user?.image ? data.user.image : null;
    return (
        <div className="flex flex-col items-center justify-center mt-20">
            <div className="flex flex-col gap-10 items-center">
                <div>
                    <h1 className="text-center text-xl">{`Добро пожаловать ${userName}`}</h1>
                    {userImage ? (
                        <Image
                            alt={userName}
                            src={userImage}
                            width={80}
                            height={80}
                            className="mt-4 mx-auto rounded-lg"
                        />
                    ) : null}
                </div>
                <Button
                    color="lavander"
                    size="menu"
                    onClick={() => signOut({ callbackUrl: "/" })}
                >
                    Выйти из профиля
                </Button>
            </div>
            {userEmail === "qwerasvlad@gmail.com" ? (
                <div className=" mt-20">
                    <h2 className="text-2xl text-center text-gray-dark">
                        Добавить товар
                    </h2>
                    <AdministrationForm />
                </div>
            ) : null}
        </div>
    );
}
