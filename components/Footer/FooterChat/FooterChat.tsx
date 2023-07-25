import { SocialIconGroup } from "@/components";

export function FooterChat(): JSX.Element {
    return (
        <div className="hidden md:flex  items-center gap-[.74rem]">
            <div className="text-xs 2xl:text-sm">Online чат:</div>
            <SocialIconGroup />
        </div>
    );
}
