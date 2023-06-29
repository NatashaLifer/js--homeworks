/* TASK - 4
 
Написати перетворювач пікселів.
Тобто користувач має ввести в перше модальне вікно кількість пікселів
У друге модальне вікно одиницю виміру на яку потрібно перетворити пікселі(em,rem,percent,vh)
У 3 модальне вікно значення від якого ми маємо прораховувати
Вивести користувачу прораховане значення
*/

let quantityOfPixels = prompt('Введіть кількість пікселів')
let unit = prompt('Введіть одну з потрібних одиниць виміру: em, rem, percent, vh')
if (unit==='em') {
    let base = prompt('Введіть базовий розмір шрифта в пікселях')
    let unitEm = quantityOfPixels / base
    alert(quantityOfPixels + 'px буде дорівнювати ' + unitEm.toFixed(0) + 'em при базовому розмірі шрифта: ' + base + 'px')
} else if (unit==='rem') {
    base = prompt('Введіть базовий розмір шрифта в пікселях')
    let unitRem = quantityOfPixels / base
    alert(quantityOfPixels + 'px буде дорівнювати ' + unitRem.toFixed(0) + 'rem при базовому розмірі шрифта: ' + base + 'px')
} else if (unit=== 'percent') {
    base = prompt('Введіть розмір батьківського елементу в пікселях')
    let unitPercent = quantityOfPixels * 100 / base
    alert(quantityOfPixels + 'px буде дорівнювати ' + unitPercent.toFixed(0) + '% при розмірі батьківського елементу: ' + base + 'px')
} else if (unit==='vh') {
    base = prompt('Введіть розмір висоти екрану в пікселях')
    let unitVh = quantityOfPixels * 100 / base
    alert(quantityOfPixels + 'px буде дорівнювати ' + unitVh.toFixed(0) + 'vh при розмірі висоти екрану: ' + base + 'px')
}