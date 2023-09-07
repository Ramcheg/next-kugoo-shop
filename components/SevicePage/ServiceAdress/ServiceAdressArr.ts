interface IServiceAdressArr {
    id: string;
    cityName: string;
    adress: string;
    timeWork: string;
    number: string;
    control: boolean;
}

export const serviceAdressArr: IServiceAdressArr[] = [
    {
        id: "Dnepr",
        cityName: "Днепр",
        adress: "ул. Ткацкая,5",
        timeWork: "Пн-Вс 10:00 - 20:00",
        number: "+38 (050) 350 76 92",
        control: true,
    },
    {
        id: "Kiev",
        cityName: "Киев",
        adress: "ул. Фрунзе,2",
        timeWork: "Пн-Вс 10:00 - 20:00",
        number: "+38 (050) 350 76 92",
        control: false,
    },
    {
        id: "Odessa",
        cityName: "Одесса",
        adress: "ул. Ранко,86",
        timeWork: "Пн-Вс 10:00 - 20:00",
        number: "+38 (050) 350 76 92",
        control: false,
    },
];
