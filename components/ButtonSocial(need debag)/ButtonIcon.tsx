import { IButtonIcon, IIconArr, Idef } from "./ButtonIconProps";
import cn from "classnames";

import './ButtonIconStyle.scss';

import HeartIcon from '@/public/Heart.svg';
import ShoppingIcon from '@/public/Shopping.svg';
import CompareIcon from '@/public/Compare.svg';
import TelegramIcon from '@/public/social/telegram.svg';
import ViberIcon from '@/public/social/viber.svg';
import WhatsappIcon  from '@/public/social/whatsapp.svg';



const clazz = "h-5 w-5"
const IconArr :IIconArr[] = [
    {name: "heart", element: <HeartIcon/>},
    {name: "compare", element: <CompareIcon/>},
    {name: "shopping", element: <ShoppingIcon/>},
    {name: "telegram", element: <TelegramIcon className={clazz}/>},
    {name: "viber", element: <ViberIcon className={clazz}/>},
    {name: "whatsapp", element: <WhatsappIcon className={clazz}/>},

]



export function ButtonIcon({bgColor, colorIcon, icon, size, typeIcon = 'default', withBorder, className, isblur, iconFill, ...props} : Idef): JSX.Element{

    const Icon= IconArr.map(item => {
        if(item.name === icon) {
            return item.element
        }
    })
    return(
        <button
        className ={
            cn(className, {
                ['rounded-full'] : typeIcon === "circle",
                ['rounded-[0.3125rem]'] : typeIcon === "default",

                ['p-[0.45rem]'] : size === "small",
                ['px-[1.86rem] py-[1.09rem]'] : size === "normal",
                ['p-[1.09rem]'] : size === "square",
                ['py-[1.09rem] px-[2.64rem]'] : size === "big",

                [`${icon}-ico icon-lavander`] : colorIcon === "lavander",
                [`${icon}-ico icon-black`] : colorIcon === "black",
                [`${icon}-ico icon-white`] : colorIcon === "white",



                ['ico-fill'] : iconFill,
                ['border-[1.3px] border-gray-editible bg-red-600'] : withBorder
            } )
        }
        {...props}
        >
        {Icon ? Icon : ''}
        </button>
     )
}
