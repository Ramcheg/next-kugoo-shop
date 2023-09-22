import { ruLink } from "@/components/Breadcrumb/translateLink";

export const translateForRuLink = (
    enLink: string
):
    | {
          enLink: string;
          translate: string;
      }
    | undefined => {
    return ruLink.find((item) => item.enLink === enLink);
};
