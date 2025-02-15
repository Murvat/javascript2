// Task 1
// Создайте массив ar1 содержащий строки, числа, булевы значения. Выведите его в .out-1. Вывод - по нажатию кнопки b-1

let arr1: (string | number | boolean)[] = ['City', true, 2024];

function f1(): void {
    document.querySelector('.out-1')!.innerHTML = arr1.toString();
}

document.querySelector('.b-1')!.addEventListener('click', f1);

// Task 2
// Создайте массив ar2 содержащий строки, числа, булевы значения. Выведите его в div.out-2. Используйте шаблон вывода из кода в JS. Вывод - по нажатию кнопки b-2

let ar2: (string | number | boolean)[] = ['CityName:', 'Warsaw', 2024, true];

function f2(): void {
    let out: string = '';
    for (let i: number = 0; i < ar2.length; i++) {
        out += ar2[i] + ' ';
    }
    document.querySelector('.out-2')!.innerHTML = out;
}

document.querySelector('.b-2')!.addEventListener('click', f2);

// Task 3
// Создайте массив ar3, заполните его любыми значениями. Выведите длину массива.
// Вывод - по нажатию кнопки b-3
// Вывод в out-3
// Тест допустим массив [1,2,3] вывод - 3

let ar3: number[] = [1, 2, 4, 5, 6, 9];

function f3(): void {
    document.querySelector('.out-3')!.innerHTML = ar3.length.toString();
}

document.querySelector('.b-3')!.addEventListener('click', f3);

// Task 4
// Создайте массив ar4. Выведите нулевой, третий, восьмой элемент массива в out-4 через пробел.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-4
// Вывод в out-4
// Тест допустим массив вывод: 1 4 9

let arr4: number[] = [20, 2, 3, 21, 4, 6, 7, 8, 22, 10];

function f4(): void {
    let out: string = '';
    for (let i: number = 0; i < arr4.length; i++) {
        if (i === 0 || i === 3 || i === 8) {
            out += arr4[i] + ' ';
        }
    }
    document.querySelector('.out-4')!.innerHTML = out;
}

document.querySelector('.b-4')!.addEventListener('click', f4);

// Task 5
// Создайте массив ar5 длина которого больше 5. Выведите сумму нулевого, второго и третьего элементов массива (нуль, второй - и третий это индексы 0, 2, 3)
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-5
// Вывод в out-5
// Тест допустим массив [1,2,3,4,5,6,7,8,9,10] вывод: 8

let ar5: number[] = [20, 2, 3, 21, 4, 6, 7, 8, 22, 10];

function f5(): void {
    let out: number = 0;
    for (let i: number = 0; i < ar5.length; i++) {
        if (i === 0 || i === 2 || i === 3) {
            out += ar5[i];
        }
    }
    document.querySelector('.out-5')!.innerHTML = out.toString();
}

document.querySelector('.b-5')!.addEventListener('click', f5);

// Task 6
// Создайте массив ar6, который содержит ваше имя, знак зодиака, день рождения и месяц рождения. Выведите массив на страницу в div-6. Разделитель - пробел.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-6
// Вывод в out-6

let ar6: (string | number)[] = ['Murvat', 'Vodoley', 9, 'Fevrala'];

function f6(): void {
    let out: string = '';
    for (let i: number = 0; i < ar6.length; i++) {
        out += ar6[i] + ' ';
    }
    document.querySelector('.out-6')!.innerHTML = out;
}

document.querySelector('.b-6')!.addEventListener('click', f6);

// Task 7
// Добавьте в массив ar7 значения 'vietnam' с индексом 7 , 'turkey' с индексом 6, 'italy' с индексом 5. Добавление элементов сделайте в f7. Выведите массив на страницу в .out-7. Разделитель - пробел.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-7
// Вывод в out-7

let ar7: string[] = ['china', 'india', 'brazil', 'japan', 'egypt'];

function f7(): void {
    ar7[7] = 'vietnam';
    ar7[6] = 'turkey';
    ar7[5] = 'italy';
    let out: string = '';
    for (let i: number = 0; i < ar7.length; i++) {
        out += ar7[i] + ' ';
    }
    document.querySelector('.out-7')!.innerHTML = out;
}

document.querySelector('.b-7')!.addEventListener('click', f7);

// Task 8
// Добавьте в массив ar8 третий (индекс 3) элемент равный 3.14, 4 (индекс 4) элемент равный 17, 6 элемент (индекс 6) равный 5. Выведите массив в .out-8. Разделитель - дефис. В .out-8-1 выведите длину массива ar8.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-8
// Вывод в out-8

let ar8: number[] = [];

function f8(): void {
    ar8[3] = 3.14;
    ar8[4] = 17;
    ar8[6] = 5;
    let out: string = '';
    for (let i: number = 0; i < ar8.length; i++) {
        out += ar8[i] + '-';
    }
    document.querySelector('.out-8')!.innerHTML = out;
    document.querySelector('.out-8-1')!.innerHTML = ar8.length.toString();
}

document.querySelector('.b-8')!.addEventListener('click', f8);

// Task 9
// Выведите последний элемент массива ar9. Вывод последнего элемента - реализуйте по индексу. Чтобы рассчитать индекс последнего элемента - используйте на длину массива.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-9
// Вывод в out-9

let ar9: number[] = [100, 200, 300, 400, 700, 121];

function f9(): void {
    let i: number = ar9.length;
    let num: number = ar9[i - 1];
    document.querySelector('.out-9')!.innerHTML = num.toString();
}

document.querySelector('.b-9')!.addEventListener('click', f9);

// Task 10
// Выведите сумму первого (индекс 1) и последнего массива ar10 в блок out-10. Индекс последнего элемента массива не указывайте напрямую, а вычисляйте через длину массива.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-10
// Вывод в out-10

let ar10: number[] = [100, 200, 300, 400, 700, 121];

function f10(): void {
    let i: number = ar10.length;
    let num: number = ar10[i - 1];
    let sum: number = ar10[0] + num;
    document.querySelector('.out-10')!.innerHTML = sum.toString();
}

document.querySelector('.b-10')!.addEventListener('click', f10);

// Task 11
// Напишите функцию, которая меняет местами второй (индекс 2) и четвертый (индекс 4) элемент массива ar11 и выводит его в out-11. Разделитель - пробел.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-11
// Вывод в out-11

let ar11: number[] = [2, 3, 4, 5, 6, 7];

function f11(): void {
    let num: number = ar11[4];
    ar11[4] = ar11[2];
    ar11[2] = num;
    let out: string = '';
    for (let i: number = 0; i < ar11.length; i++) {
        out += ar11[i] + ' ';
    }
    document.querySelector('.out-11')!.innerHTML = out;
}

document.querySelector('.b-11')!.addEventListener('click', f11);

// Task 12
// Напишите функцию f12, которая меняет местами нулевой и последний элемент массива ar12 и выводит его в out-12. Разделитель - пробел. Последний элемент вычислять через длину массива.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-12
// Вывод в out-12

let ar12: string[] = ['test', 'west', 'list', 'class', 'best'];

function f12(): void {
    let firstE: string = ar12[0];
    let elemL: number = ar12.length;
    let lastE: string = ar12[elemL - 1];
    let cust: string = lastE;
    ar12[elemL - 1] = firstE;
    ar12[0] = cust;
    let out: string = '';
    for (let i: number = 0; i < ar12.length; i++) {
        out += ar12[i] + ' ';
    }
    document.querySelector('.out-12')!.innerHTML = out;
}

document.querySelector('.b-12')!.addEventListener('click', f12);

// Task 13
// Выведите массив ar13 в out-13 в формате индекс пробел значение пробел.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-13
// Вывод в out-13
// Тест допустим массив [1,2,3] вывод:
//  0 1 1 2 2 3

let ar13: string[] = ['test', 'west', 'list', 'class', 'best'];

function f13(): void {
    let out: string = '';
    for (let i: number = 0; i < ar13.length; i++) {
        out += i + ' ' + ar13[i] + ' ';
    }
    document.querySelector('.out-13')!.innerHTML = out;
}

document.querySelector('.b-13')!.addEventListener('click', f13);

// Task 14
// Используя цикл выведите на страницу массив ar14 в обратном порядке. Разделитель - пробел.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-14
// Вывод в out-14

let ar14: (number | string)[] = [1, 2, 3, 'hello', 66];

function f14(): void {
    let out: string = '';
    let elemNum: number = ar14.length - 1;
    for (let i: number = elemNum; i >= 0; i--) {
        out += ar14[i] + ' ';
    }
    document.querySelector('.out-14')!.innerHTML = out;
}

document.querySelector('.b-14')!.addEventListener('click', f14);

// Task 15
// Используя цикл выведите на страницу элементы массива ar15, которые больше нуля. Разделитель - пробел.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-15
// Вывод в out-15

let ar15: number[] = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];

function f15(): void {
    let out: string = '';
    for (let i: number = 0; i < ar15.length; i++) {
        if (ar15[i] > 0) {
            out += ar15[i] + ' ';
        }
    }
    document.querySelector('.out-15')!.innerHTML = out;
}

document.querySelector('.b-15')!.addEventListener('click', f15);

// Task 16
// Выполните перебор массива ar16. Четные элементы добавьте в массив ar16_even, нечетные в ar16_odd. Добавление в массив - по индексу, а не +=!!!!!. Протестируйте задачу на повторный запуск! Выведите ar16_odd в div.out-16-odd, а ar16_even в div.out-16-even. Разделитель - пробел.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-16
// Вывод в out-16

let ar16: number[] = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
let ar16_odd: number[] = [];
let ar16_even: number[] = [];

function f16(): void {
    ar16_odd = [];
    ar16_even = [];
    for (let i: number = 0; i < ar16.length; i++) {
        if (ar16[i] % 2 === 0) {
            ar16_even[ar16_even.length] = ar16[i];
        } else {
            ar16_odd[ar16_odd.length] = ar16[i];
        }
    }
    document.querySelector('div.out-16-odd')!.innerHTML = ar16_odd.join(' ');
    document.querySelector('div.out-16-even')!.innerHTML = ar16_even.join(' ');
}

document.querySelector('.b-16')!.addEventListener('click', f16);

// Task 17
// Используя цикл выведите в .out-17 количество элементов ar17, значение которых больше 3. Для расчета используйте цикл и переменную счетчик.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-17
// Вывод в out-17

let ar17: number[] = [3, 0, 2, 6, 0, 1, 3, 1, 9, 0, 2, 0];

function f17(): void {
    let amountNum: number = 0;
    for (let i: number = 0; i < ar17.length; i++) {
        if (ar17[i] > 3) {
            amountNum++;
        }
    }
    document.querySelector('.out-17')!.innerHTML = amountNum.toString();
}

document.querySelector('.b-17')!.addEventListener('click', f17);

// Task 18
// Используя цикл выведите в .out-18 максимальный элемент массива ar18.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-18
// Вывод в out-18

let ar18: number[] = [15, 24, 13, 78, 21, 4, 45, 67];

function f18(): void {
    let max: number = ar18[0];
    for (let i: number = 1; i < ar18.length; i++) {
        if (ar18[i] > max) {
            max = ar18[i];
        }
    }
    document.querySelector('.out-18')!.innerHTML = max.toString();
}

document.querySelector('.b-18')!.addEventListener('click', f18);

// Task 19
// Выведите в .out-19 индекс минимального элемента в массиве ar19
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-19
// Вывод в out-19

let ar19: number[] = [15, 424, 313, 78, 241, 4, 45, 67];

function f19(): void {
    let min: number = 0;
    for (let i: number = 1; i < ar19.length; i++) {
        if (ar19[i] < ar19[min]) {
            min = i;
        }
    }
    document.querySelector('.out-19')!.innerHTML = min.toString();
}

document.querySelector('.b-19')!.addEventListener('click', f19);

// Task 20
// Выведите в .out-20 сумму элементов в массиве ar20
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-20
// Вывод в out-20

let ar20: number[] = [4, 5, 6, 7, 8, 9, 10];

function f20(): void {
    let sum: number = 0;
    for (let i: number = 0; i < ar20.length; i++) {
        sum += ar20[i];
    }
    document.querySelector('.out-20')!.innerHTML = sum.toString();
}

document.querySelector('.b-20')!.addEventListener('click', f20);
export{}