import { Button } from "@/components";

export function FooterFormDescribe(): JSX.Element {
    return (
        <form
            action=""
            className="flex flex-1 justify-between gap-5 flex-col lg:flex-row"
        >
            <input
                type="email"
                placeholder="Введите Ваш email"
                className="px-6 rounded flex-1 py-2 lg:py-4 bg-white/20 text-white 2xl:text-lg  placeholder:text-white placeholder:2xl:text-lg"
            />
            <Button color="white" size="small" typeButton="submit" onLavaner>
                Подписаться
            </Button>
        </form>
    );
}
