import { IButtonIcon, IIconArr } from "./ButtonIconProps";
import cn from "classnames";

import './ButtonIconStyle.scss';

import HeartIcon from '@/public/Heart.svg';
import ShoppingIcon from '@/public/Shopping.svg';
import CompareIcon from '@/public/Compare.svg';

const clazzIcon = "w-[1.25rem] h-[1.25rem]  2xl:w-[1.62rem] 2xl:h-[1.62rem]";
const IconArr :IIconArr[] = [
    {name: "heart", element: <HeartIcon className={clazzIcon}/>},
    {name: "compare", element: <CompareIcon className={clazzIcon}/>},
    {name: "shopping", element: <ShoppingIcon className={clazzIcon}/>},

]



export function ButtonIcon({colorIcon, icon, withBorder, className, isblur, iconFill, animateHover, children, ...props} : IButtonIcon): JSX.Element{

    const Icon= IconArr.map(item => {
        if(item.name === icon) {
            return item.element
        }
    })
    return(
        <button
        className ={
            cn('transition-all delay-100 rounded-full  hover:bg-gray-editible', className, {

                [`${icon}-lavander`] : colorIcon === "lavander",
                [`${icon}-black`] : colorIcon === "black",



                [`${icon}-fill`] : iconFill,
                ['border-[1.3px] border-gray-editible p-[0.42rem] 2xl:p-[0.55rem] '] : withBorder,
                ['p-[0.45rem] 2xl:p-[0.77rem]'] : !withBorder,
                ['hover:bg-[rgba(255,255,255,0.15)]'] : isblur,
                ['special-hover']: icon ===  "compare" && animateHover,
                [' flex items-center gap-[0.62rem] text-[0.875rem] 2xl:text-base font-bold']: children
            } )
        }
        {...props}
        >
        <div className={
            cn({[`${icon}-hover`] : animateHover})
        }>{Icon ? Icon : ''}</div>
        {children ? children : ''}
        </button>
     )
}
