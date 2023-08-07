import LogoIcon from "@/public/Logo.svg";
import GooglePlayIcon from "@/public/apiSvg/googlePlay.svg";
import AppStoreIcon from "@/public/apiSvg/appStore.svg";
import Link from "next/link";

export function FooterApi(): JSX.Element {
    return (
        <div className="hidden md:flex  gap-2 my-9">
            <Link className="mr-14" href="/">
                <LogoIcon className="w-28 h-10" />
            </Link>
            <Link
                href="https://play.google.com/store/games"
                className="transition-all delay-75 border border-solid rounded-md border-transparent hover:border-lavander-light"
            >
                <GooglePlayIcon />
            </Link>
            <Link
                href="https://support.apple.com/uk-ua/apps"
                className="transition-all delay-75 border border-solid rounded-lg border-transparent hover:border-lavander-light"
            >
                <AppStoreIcon />
            </Link>
        </div>
    );
}
