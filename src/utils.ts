export function extractDateFromUTC(utcTime: string) : string {
    const dateObj = new Date(utcTime);

    const year = dateObj.getFullYear();
    const month = dateObj.getMonth() + 1;
    const day = dateObj.getDay();
    
    return `${month}/${day}/${year}`;
}

export const truncate = (text: string, numberOfWords: number) => {
    const wordsArray = text.split(' ');
    if (wordsArray.length > numberOfWords) {
        return wordsArray.slice(0, numberOfWords).join(' ') + '...';
    }
    return text;
};
