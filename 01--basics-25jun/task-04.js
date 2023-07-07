/* TASK - 4
 
Запитати у корситувача його посаду
В залежності від посади вивести повідомлення з наступними привітаннями
devOps - 'welcome master file builder'
Senior - 'welcome master my mind'
Middle - 'welcome master talk'
Junior - 'welcome dude'
Якщо посада не вказана, або написано не вірно питати у користувача до ти пір поки він не введе коректно
*/

let position = prompt ("What is your position?")
while (position !=='devOps' && position !=='Senior' && position !=='Middle' && position !=='Junior') {
    position = prompt ('Write your position againe')
}
if (position === 'devOps') {
    alert ('welcome master file builder')
} else if (position === 'Senior'){
    alert ('welcome master my mind')
}  else if (position === 'Middle'){
    alert ('welcome master talk')
} else if (position === 'Junior'){
    alert ('welcome dude')
}