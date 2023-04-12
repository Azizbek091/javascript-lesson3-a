let one = +prompt('Первое число')
let two = +prompt('Второе число')
let three = +prompt('Третье число')

if(one > two && one < three || one > three && one < two) {
    alert('Среднее число ' + one)
}else if(two > three && two < one || two > one && two < three) {
    alert('Среднее число ' + two)
}else if(three > one && three < two || three > two && three < one) {
    alert('Среднее число ' + three)
}