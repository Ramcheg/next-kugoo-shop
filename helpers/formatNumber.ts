export default function formatNumber(anmout: number): string {
    const formatedAnmout = anmout.toLocaleString("uk-UA", {
        maximumFractionDigits: 0,
    });
    return formatedAnmout;
}
