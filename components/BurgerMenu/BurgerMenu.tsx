import "./BurgerMenu.scss";
import { IBurgerMenu } from "./BurgerMenuProps";
import cn from "classnames";

export function BurgerMenu({ className, ...props }: IBurgerMenu): JSX.Element {
    return (
        <div className={cn("burgerMenu ", className)} {...props}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
}
