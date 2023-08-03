export function extractDateFromUTC(utcTime: string) : string {
    const dateObj = new Date(utcTime);

    const year = dateObj.getFullYear();
    const month = dateObj.getMonth() + 1;
    const day = dateObj.getDay();
    
    return `${month}/${day}/${year}`;
}
