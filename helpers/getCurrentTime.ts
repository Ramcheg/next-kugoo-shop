export const getCurrentDateTime = (): string => {
    const currentDate = new Date();
    const hours = String(currentDate.getHours()).padStart(2, "0");
    const minutes = String(currentDate.getMinutes()).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");
    const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Месяцы в объекте Date начинаются с 0, поэтому добавляем 1
    const year = currentDate.getFullYear();

    return `${hours}:${minutes}/${day}/${month}/${year}`;
};
