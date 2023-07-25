import { IInputArr } from "./AdministrationFormTypes";

export const inputTopArr: IInputArr[] = [
    {
        name: "Тип транспорта",

        nameId: "typeTransportare",
        select: ["Электросамокаты", "Электроскутеры", "Электровелосипеды"],
    },
    {
        name: "Название товара",
        placeholder: "введи название товара",
        type: "text",
        nameId: "name",
    },
    {
        name: "Цена",
        placeholder: "введи цену в грн",
        type: "text",
        nameId: "price",
    },
    {
        name: "Скидка",
        placeholder: "введи скидку",
        type: "text",
        nameId: "sale",
    },
    {
        name: "Преимущества",
        placeholder: "до 3 слов через ','",
        type: "text",
        nameId: "features",
    },
    {
        name: "Особенности",
        nameId: "featureForProduct",
        select: [
            "Внедорожный",
            "Городской",
            "Зимний",
            "С сиденьем",
            "Без сиденья",
        ],
    },
    {
        name: "Для кого",

        nameId: "forWrom",
        select: ["Для детей и подростков", "Для взрослых", "Для пенсионеров"],
    },
];

export const inputBotArr: IInputArr[] = [
    {
        name: "Вес",
        placeholder: "введите вес в кг",
        type: "text",
        nameId: "weight",
    },
    {
        name: "Мощность",
        placeholder: "введите в Вт",
        type: "text",
        nameId: "power",
    },
    {
        name: "Максимальная скорость",
        placeholder: "введите мах скорость",
        type: "text",
        nameId: "speed",
    },
    {
        name: "Максимальная дистанция",
        placeholder: "в км ",
        type: "text",
        nameId: "maxMileage",
    },
    {
        name: "Баттарея вольтаж",
        placeholder: "пример (36 В)",
        type: "text",
        nameId: "battary",
    },
    {
        name: "Размер баттареи",
        placeholder: "мАч",
        type: "text",
        nameId: "powerBattary",
    },
    {
        name: "Время зарядки",
        placeholder: "введите время заряда",
        type: "text",
        nameId: "timeBattary",
    },
    {
        name: "Максимальный перевозимый вес",
        placeholder: "перевозимый вес в кг",
        type: "text",
        nameId: "maxWeight",
    },
    {
        name: "Размер колес",
        placeholder: "введите размер колес",
        type: "text",
        nameId: "sizeTire",
    },
    {
        name: "Тип колес",
        placeholder: "введите тип колес",
        type: "text",
        nameId: "typeTire",
    },
    {
        name: "Габариты",
        placeholder: "габариты ХХ х ХХ х ХХ см",
        type: "text",
        nameId: "dimensions",
    },
    {
        name: "Подсветка",
        placeholder: "передние и задние фонари",
        type: "text",
        nameId: "backlighting",
    },
    {
        name: "Привод",
        placeholder: "передний и задний привод",
        type: "text",
        nameId: "drive",
    },
    {
        name: "Вид тормозов",
        placeholder: "вид тормозов",
        type: "text",
        nameId: "brakeSystem",
    },
    {
        name: "Доступное оборудование",
        placeholder: "складной механизм...",
        type: "text",
        nameId: "equipment",
    },
    {
        name: "Гарантия",
        placeholder: "гарантия",
        type: "text",
        nameId: "warranty",
    },
];

// picture

export const picturesElectorSamocat = [
    "https://firebasestorage.googleapis.com/v0/b/kugoo-shop.appspot.com/o/ElectroSamokat%2FImage%2F347658975-i.webp?alt=media&token=69d817de-d4da-433f-ba37-878cf2a4fdbf",
    "https://firebasestorage.googleapis.com/v0/b/kugoo-shop.appspot.com/o/ElectroSamokat%2FImage%2F347658981-i.webp?alt=media&token=ce416059-5f13-44b2-ad81-2978dd780c34",
    "https://firebasestorage.googleapis.com/v0/b/kugoo-shop.appspot.com/o/ElectroSamokat%2FImage%2F347659004-i.webp?alt=media&token=93a91820-f893-40c2-9233-bf8b2b318603",
    "https://firebasestorage.googleapis.com/v0/b/kugoo-shop.appspot.com/o/ElectroSamokat%2FImage%2F347659040-i.webp?alt=media&token=1aff1d6a-947e-4752-ad1c-3f9acd8dca98",
    "https://firebasestorage.googleapis.com/v0/b/kugoo-shop.appspot.com/o/ElectroSamokat%2FImage%2F347659048-i.webp?alt=media&token=58ed935c-36c2-44b5-bc8a-84fb33aaa5c6",
    "https://firebasestorage.googleapis.com/v0/b/kugoo-shop.appspot.com/o/ElectroSamokat%2FImage%2F347659066-i.webp?alt=media&token=af23cf53-70f5-4498-97e3-c8bef2de5ab7",
];

export const thumbnailsElectroSamocat = [
    "https://firebasestorage.googleapis.com/v0/b/kugoo-shop.appspot.com/o/ElectroSamokat%2FThambnail%2F347658975-th.webp?alt=media&token=eac07bbb-fb55-44f8-8339-0828f66c0899",
    "https://firebasestorage.googleapis.com/v0/b/kugoo-shop.appspot.com/o/ElectroSamokat%2FThambnail%2F347658981-th.webp?alt=media&token=599315e2-f522-4fdb-9d72-7bad7e7bddfb",
    "https://firebasestorage.googleapis.com/v0/b/kugoo-shop.appspot.com/o/ElectroSamokat%2FThambnail%2F347659004-th.webp?alt=media&token=62b71c3e-66f2-4fe5-94c7-31a30863281f",
    "https://firebasestorage.googleapis.com/v0/b/kugoo-shop.appspot.com/o/ElectroSamokat%2FThambnail%2F3476590400-th.webp?alt=media&token=c6323c1d-a357-4e71-9311-dfeaec495993",
    "https://firebasestorage.googleapis.com/v0/b/kugoo-shop.appspot.com/o/ElectroSamokat%2FThambnail%2F347659048-th.webp?alt=media&token=31c9d9ac-eddb-4a62-9eec-083d40889420",
    "https://firebasestorage.googleapis.com/v0/b/kugoo-shop.appspot.com/o/ElectroSamokat%2FThambnail%2F347659066-th.webp?alt=media&token=f605c4ff-7727-4e7d-8dea-ac641ccbb295",
];
