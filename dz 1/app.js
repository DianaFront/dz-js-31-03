const name = prompt('Введите ваше имя').toUpperCase()
const surname = prompt('Введите вашу фамилию').toUpperCase()
const age = Number(prompt('Введите ваш возраст'))

if (age <= 18 && age >= 14) {
    alert(`Привет, ${name}`)
} else if (age >= 18 && age <= 60) {
    alert(`Здравствуйте, ${surname} ${name}`)
} else if (age >= 60 && age <= 80) {
    alert(`Добро пожаловать, ${surname} ${name}`)
} else {
    alert('Введите корректные данные')
}