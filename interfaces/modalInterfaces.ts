export interface IPoductModalProps {
    name: string;
    id: string;
    mainImg: string;
}

export interface IProductInModalProps extends Omit<IPoductModalProps, "id"> {}
