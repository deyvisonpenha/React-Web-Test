export function onAdjustTextQuestion(textToConvert: string){
    return textToConvert.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&apos;/g, '"').replace(/&#039;/g, '\'');
}