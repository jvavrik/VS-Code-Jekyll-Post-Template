export function generateDateString(date: Date): string {
    const currentMonth = getTwoDigitMonth(date.getMonth());

    const currentDateForFileName = date.getFullYear() + "-" + currentMonth + "-" + date.getDate();

    return currentDateForFileName;
}


export function getTwoDigitMonth(month: number): string {
    const adjustedMonth = month + 1;
    if (adjustedMonth < 10) {
        return "0" + adjustedMonth;
    } else {
        return adjustedMonth.toString();
    }
}