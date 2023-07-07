/* TASK-01 
Написати функцію додавання.
 
Приймає аргументи: перше число і друге число
Значення, що повертається функцією: сума двох аргументів
Обов'язково перевірити чи будуть являтися аргументи числами
В разі не коректно переданих даних повертати "null"
*/
// function sum(number1, number2) {
//     if (typeof number1 === 'number' || typeof number2 === 'number') {
//         return null;
//     }
//     let sumResult = number1 + number2
//     return sumResult
// }

// console.log(sum(17,25));

/* TASK-02
Написати функцію-лічильник.
 
Функція матиме два параметри:
Перший - число, з якого необхідно почати лічбу;
Другий - число, яким необхідно закінчити рахунок.
Якщо число, з якого починається лічба, більше, ніж число,
яким він закінчується, вивести повідомлення:
"⛔️ Помилка! Рахунок неможливий."
Якщо обидва ці числа однакові, вивести повідомлення:
"⛔️ Помилка! Нічого рахувати."
На початку рахунку необхідно вивести повідомлення:
"🏁 Відлік розпочато.".
Після проходження останнього "кроку" необхідно вивести повідомлення:
"✅ Відлік завершено.".
*/

// function counter(numb1, numb2) {
//     if (numb1>numb2) {
//         alert('⛔️ Помилка! Рахунок неможливий.')
//         return;
//     } else if (numb1===numb2) {
//         alert('⛔️ Помилка! Нічого рахувати.')
//         return;
//     } else {
//         let numbers=numb1
//         let numbersList=numb1
//         for (i=1; i<(numb2-numb1+1); i++) {
//             if (i===1) {
//                 alert('🏁 Відлік розпочато.')
//             }
//             numbers++
//             numbersList=numbersList + ', ' + numbers
//         }
//         alert (`${numbersList}`)
//         alert('✅ Відлік завершено.')
//         return;
//     }
// }
// counter(2,22);


/* TASK-03
 Написати гру - камінь, ножиці, папір
Написати функцію getResultForPlayer, у якої буде лише один аргумент (playerNumber)
Функція має випадково вибрати - камінь(rock), ножиці(scissors), папір(paper)
Вивести вибраний атрибут користувачу
Поверненим значенням буде саме цей атрибут
Вияввити результат для обох гравців
Визначити переможця, або можливо і нічья
*/

function getResultForPlayer(playerNumber){
    
    const random=Math.random()
    let result=''

    if ( random >=0 && random<0.33 ) {
        result = 'rock'
    } else if (random >=0.33 && random <0.66) {
        result = 'paper'
    } else {
        result = 'scissorc'
    }

    return result
}

const playerNumber1 = 'Gogi'
const playerNumber2 = 'Vano'

const result1 = getResultForPlayer(playerNumber1)
const result2 = getResultForPlayer(playerNumber2)

alert (`${playerNumber1}` + ' have a ' + `${result1}`)
alert (`${playerNumber2}` + ' have a ' + `${result2}`)

const resultGame = result1 + ' ' + result2

console.log(resultGame);

switch (resultGame) {
    case 'rock paper':
    case 'paper scissorc':
    case 'scissorc rock':
        alert (`${playerNumber2}` + ' is the winner!')
        break;
    case 'rock scissorc':
    case 'paper rock':
    case 'scissorc paper':
        alert (`${playerNumber1}` + ' is the winner!')
        break;
    case 'rock rock':
    case 'paper paper':
    case 'scissorc scissorc':
        alert ('Draw in the game.')
        break;
}

