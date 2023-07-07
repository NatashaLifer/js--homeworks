/* TASK 1
Написати фунцію, яка буде визначати чи є буква в слові на визначеній позиції.

Arguments:
- word - слово, на якому треба буде перевіряти наявність букви
- index - позиція символу на якому треба перевірити здогадку
- char - буква, наявність якої треба перевіряти в слові

Return value
true або false, залежно від того є буква в слові чи ні. */

// function checkCharPosition(word, index, char) {
//     if (char === word.charAt(index)) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(checkCharPosition("gogi", 3, "_"));
// console.log(checkCharPosition("gogi", 0, "g"));




/* TASK 2
Напишіть функцію, яка перевірятиме довжину свого аргументу.

Arguments:
- str - строка, довжину якої має перевіряти функція
- expectedLength - очікувана довжина строки

Return value
true або false */

/*function checkLength(str, expectedLength) {
    if (expectedLength === str.length) {
        return true;
    } else {
        return false;
    }
}
console.log(checkLength("Gogi - nice place", 17));*/

/* TASK 3
Напишіть гру для відгадування слова.

Game flow:
- Спитати чи користувач хоче зіграти у гру?
- Попросити користувача загадати слово.
- Для кожного символу у загаданому слові, перевірити чи є такий символ у слові взагалі та чи співпадає здогадка користувача із символом на поточній позиції.
- Якщо здогадка користувача вірна - переходити до наступного символу
- Якщо здогадка користувача не вірна - повторювати запит символу допоки не набереться 5 помилкових здогадок, далі - вивести в консоль "You lose!". Якщо одна зі здогадок виявилася вірною - переходити на відгадування наступного символу.
- Якщо користувач виграв - вивести у консоль "You win!" */

let agreement = confirm ('Ця гра для двох людей. Хочеш зіграти?')
let wrongLetter = 0
if (agreement === false) {
    alert ('Шкода!')
    
} else {
    let word = prompt ('Почнемо! Напиши слово, яке буде вгадувати другий гравець.')
    let char = prompt ('Завдання для другого гравця: вгадай та напиши першу букву загаданого слова.')
    let wrongLetter = 0
    for (i=0; i<=(word.length-1); i++) {
        if (checkCharPosition(word, i, char) === false) {
            if (wrongLetter === 4) {
                alert ("ти не вгадав цю букву п'ятий раз - ти програв")
                break;
            } else {
                char = prompt ('ти не вгадав! спробуй відгадати цю букву ще раз') 
                wrongLetter = wrongLetter + 1
                i=i-1
            }
        } else if (checkCharPosition(word, i, char) === true && i === (word.length-1)) {
            alert ('вітаю! ти вгадав все слово.') 
            break
        } else {
            char = prompt ('ти вгадав! спробуй вгадати наступну букву')
            wrongLetter = 0
        }
    }
}
function checkCharPosition(word, index, char) {
    if (char === word.charAt(index)) {
        return true;
    } else {
        return false;
    }
}

// Ще один варіант вирішення task-3 (без використання функцій)
// let agreement = confirm ('Ця гра для двох людей. Хочеш зіграти?')
// let wrongLetter = 0
// if (agreement === false) {
//     alert ('Шкода!')
    
// } else {
//     let word = prompt ('Почнемо! Напиши слово, яке буде вгадувати другий гравець.')
//     let char = prompt ('Завдання для другого гравця: вгадай та напиши букву загаданого слова.')
//     labelNextLetter: for (i=0; i<=(word.length-1); i++) {
//         if (char === word.charAt(i)) {
//             if (char === word.charAt(word.length-1) && i === (word.length-1)) {
//                 alert ('вітаю! ти вгадав все слово.')
//                 break
//             }
//             char = prompt ('ти вгадав! спробуй вгадати наступну букву')
//         } else {
//             for (count=1; wrongLetter<5; count++) {
//                 wrongLetter = wrongLetter + 1
//                 char = prompt ('ти не вгадав! спробуй відгадати цю букву ще раз') 
//                 if (char === word.charAt(i) && i !== (word.length-1))  {
//                     char = prompt ('ти вгадав! спробуй вгадати наступну букву')
//                     wrongLetter = 0
//                     continue labelNextLetter;
//                 } else if (char === word.charAt(i) && i === (word.length-1)) {
//                     alert ('вітаю! ти вгадав все слово.') 
//                     break
//                 } else if (char !== word.charAt(i) && wrongLetter === 4) {
//                     alert ('ти не вгадав цю букву за п`ять спроб - ти програв')
//                     wrongLetter = wrongLetter + 1
//                     break
//                 } 
//             }
//         }
//     }
// }
