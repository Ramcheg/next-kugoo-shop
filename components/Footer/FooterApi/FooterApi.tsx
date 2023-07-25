import LogoIcon from "@/public/Logo.svg";
import GooglePlayIcon from "@/public/apiSvg/googlePlay.svg";
import AppStoreIcon from "@/public/apiSvg/appStore.svg";

export function FooterApi(): JSX.Element {
    return (
        <div className="hidden md:flex  gap-2 my-9">
            <a className="mr-14" href="#">
                <LogoIcon className="w-28 h-10" />
            </a>
            <a
                href="#"
                className="transition-all delay-75 border border-solid rounded-md border-transparent hover:border-lavander-light"
            >
                <GooglePlayIcon />
            </a>
            <a
                href="#"
                className="transition-all delay-75 border border-solid rounded-lg border-transparent hover:border-lavander-light"
            >
                <AppStoreIcon />
            </a>
        </div>
    );
}
