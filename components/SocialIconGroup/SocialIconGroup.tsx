
import { ISocialIconGroupProps } from "./SocialIconGroupProps";
import './SocialIconGroup.scss'

import WhatsappIcon from '@/public/social/whatsapp.svg';
import ViberIcon from '@/public/social/viber.svg';
import TelegramIcon from '@/public/social/telegram.svg'

export function SocialIconGroup ({...props} : ISocialIconGroupProps): JSX.Element {
  return (
    <nav className="flex gap-[0.56rem]" {...props}>
      <a className="w-3 h-3 2xl:w-5 2xl:h-5 socialIcon socialIcon_viber" target="_blank" href="#">{<ViberIcon />}</a>
      <a className="w-3 h-3 2xl:w-5 2xl:h-5 socialIcon socialIcon_whatsapp" target="_blank" href="#">{<WhatsappIcon />}</a>
      <a className="w-3 h-3 2xl:w-5 2xl:h-5 socialIcon socialIcon_telegram" target="_blank" href="#">{<TelegramIcon />}</a>
    </nav>
  );
};
