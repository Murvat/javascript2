export{}
// Task 1.
// Создайте две переменные a = 7 и b = 9. Выведите в консоль результа умножения a на b.
let a: number = 7;
let b: number = 9;
console.log(a * b);

// Task 2.
// Создайте две переменные c = 7 и d = 9. Выведите на страницу в .out-2 результат деления c на d.
let c: number = 7;
let d: number = 9;
const out2: HTMLElement = document.querySelector('.out-2') as HTMLElement;
out2.textContent = String(c / d);

// Task 3.
// Создайте две переменные e = 3 и f = 5. Выведите на страницу в .out-3 результат сложения e + f.
let e: number = 3;
let f: number = 5;
const out3: HTMLElement = document.querySelector('.out-3') as HTMLElement;
out3.textContent = String(e + f);

// Task 4.
// Создайте две переменные e1 = '3' и f1 = 5. Выведите на страницу в .out-4 результат сложения e1 + f1. Объясните разницу.
let e1: string = '3';
let f1: number = 5;
const out4: HTMLElement = document.querySelector('.out-4') as HTMLElement;
out4.textContent = e1 + f1; // e1 является строкой, значит конкатенация

// Task 5.
// Создайте две переменные e2 = 3 и f2 = 0. Выведите на страницу в .out-5 результат деления e2 на f2.
let e2: number = 3;
let f2: number = 0;
const out5: HTMLElement = document.querySelector('.out-5') as HTMLElement;
out5.textContent = String(e2 / f2);

// Task 6.
// Создайте две переменные e3 = 3 и f3 = 'Hello'. Выведите на страницу в .out-6 результат сложения двух переменных.
let e3: number = 13;
let f3: string = 'Hello';
const out6: HTMLElement = document.querySelector('.out-6') as HTMLElement;
// Note: Division here will result in NaN because f3 is not a number.
out6.textContent = String(e3 / (f3 as unknown as number));

// Task 7.
// Создайте две переменные e4 = 3 и f4 = 'Hello'. Выведите на страницу в .out-7 результат умножения двух переменных.
let e4: number = 3;
let f4: string = 'Hello';
const out7: HTMLElement = document.querySelector('.out-7') as HTMLElement;
// Using a type assertion to bypass type checking. Multiplication will yield NaN.
out7.textContent = String(e4 * (f4 as unknown as number));

// Task 8.
// По нажатию на кнопку .b-8 выполняется функция t8, которая выводит в div.out-8 то, что пользователь ввел в input.i-8.
function t8(): void {
    let data: string = (document.querySelector('.i-8') as HTMLInputElement).value;
    const out8: HTMLElement = document.querySelector('.out-8') as HTMLElement;
    out8.textContent = data;
}
(document.querySelector('.b-8') as HTMLElement).onclick = t8;

// Task 9.
// По нажатию на кнопку .b-9 выполняется функция t9, которая выводит в div.out-9 то, что пользователь ввел в input.i-9. 
// Добавьте очистку input после нажатия кнопки.
function t9(): void {
    let data: string = (document.querySelector('.i-9') as HTMLInputElement).value;
    const out9: HTMLElement = document.querySelector('.out-9') as HTMLElement;
    out9.textContent = data;
    (document.querySelector('.i-9') as HTMLInputElement).value = '';
}
(document.querySelector('.b-9') as HTMLElement).onclick = t9;

// Task 10.
// По нажатию на кнопку .b-10 выполняется функция t10, которая выводит в div.out-10 то, что пользователь ввел в input.i-10 умноженное на 20.
function t10(): void {
    let data: string = (document.querySelector('.i-10') as HTMLInputElement).value;
    const out10: HTMLElement = document.querySelector('.out-10') as HTMLElement;
    out10.textContent = `${Number(data) * 20}`;
}
(document.querySelector('.b-10') as HTMLElement).onclick = t10;

// Task 11.
// По нажатию на кнопку .b-11 выполняется функция t11, которая выводит на страницу в .out-11 число, 
// которое ввел пользователь в i-11 и к нему добавленное число 55.
function t11(): void {
    let data: string = (document.querySelector('.i-11') as HTMLInputElement).value;
    const out11: HTMLElement = document.querySelector('.out-11') as HTMLElement;
    out11.textContent = data + '55';
}
(document.querySelector('.b-11') as HTMLElement).onclick = t11;

// Task 12.
// По нажатию на кнопку выполняется функция t12. Функция должна получить данные из input.i-12-1 и .i-12-2 
// (пользователь вводит в них фамилию и имя). После чего вывести в .out-12 строку 'Hello имя фамилия'.
function t12(): void {
    let userName: string = (document.querySelector('.i-12-1') as HTMLInputElement).value;
    let userSurName: string = (document.querySelector('.i-12-2') as HTMLInputElement).value;
    const out12: HTMLElement = document.querySelector('.out-12') as HTMLElement;
    out12.textContent = `Hello ${userName} ${userSurName}`;
}
(document.querySelector('.b-12') as HTMLElement).onclick = t12;

// Task 13.
// При нажатии кнопки .b-13 выполняется t13. Функция получает из input.i-13-1 и .i-13-2 числа в переменные a, b. 
// После чего в .out-13 выводит их сумму. Преобразовывайте a, b в числа!!!!
function t13(): void {
    let a: number = +((document.querySelector('.i-13-1') as HTMLInputElement).value);
    let b: number = +((document.querySelector('.i-13-2') as HTMLInputElement).value);
    const out13: HTMLElement = document.querySelector('.out-13') as HTMLElement;
    out13.textContent = String(a + b);
}
(document.querySelector('.b-13') as HTMLElement).onclick = t13;

// Task 14.
// По нажатию кнопки .b-14 выполняется функция t14. Она заменяет значение value в input.i-14 на строку 'Go';
function t14(): void {
    (document.querySelector('.i-14') as HTMLInputElement).value = 'Go';
}
(document.querySelector('.b-14') as HTMLElement).onclick = t14;

// Task 15.
// По нажатию кнопки .b-15 выполняется функция t15. Она присваивает .i-15 свойство = "";
function t15(): void {
    (document.querySelector('.i-15') as HTMLInputElement).setAttribute('style', 'border:4px solid red');
}
(document.querySelector('.b-15') as HTMLElement).onclick = t15;

// Task 16.
// По нажатию на кнопку .b-16 выполняется функция t16. Функция получает из .i-16-1 и .i-16-2 числа. 
// Выведите в .out-16 сумму данных чисел по нажатию кнопки b-16. Не переводите полученное из input в число!!!!
function t16(): void {
    let a: string = (document.querySelector('.i-16-1') as HTMLInputElement).value;
    let b: string = (document.querySelector('.i-16-2') as HTMLInputElement).value;
    const out16: HTMLElement = document.querySelector('.out-16') as HTMLElement;
    out16.textContent = a + b;
}
(document.querySelector('.b-16') as HTMLElement).onclick = t16;

// Task 17.
// По нажатию на кнопку .b-17 выполняется функция t17. Функция получает из .i-17 число. 
// Изучите работу кода и запомните отличия.
function t17(): void {
    let a: string = (document.querySelector('.i-17') as HTMLInputElement).value;
    const out17_1: HTMLElement = document.querySelector('.out-17-1') as HTMLElement;
    const out17_2: HTMLElement = document.querySelector('.out-17-2') as HTMLElement;
    const out17_3: HTMLElement = document.querySelector('.out-17-3') as HTMLElement;
    out17_1.innerHTML = String(+a);
    out17_2.innerHTML = String(parseInt(a, 10));
    out17_3.innerHTML = String(Number(a));
}
(document.querySelector('.b-17') as HTMLElement).onclick = t17;

// Task 18.
// По нажатию на кнопку .b-18 выполняется функция t18. Функция получает из .i-18 число в переменную a.
// Выводит в out-18 результат операции parseFloat(a).
function t18(): void {
    let a: string = (document.querySelector('.i-18') as HTMLInputElement).value;
    const out18: HTMLElement = document.querySelector('.out-18') as HTMLElement;
    out18.innerHTML = String(parseFloat(a));
}
(document.querySelector('.b-18') as HTMLElement).onclick = t18;

// Task 19.
// По нажатию кнопки .b-19 функция t19 должна в out-19 вывести сумму двух отрицательных чисел из input .i-19-1 и .i-19-2.
function t19(): void {
    let a: string = (document.querySelector('.i-19-1') as HTMLInputElement).value;
    let b: string = (document.querySelector('.i-19-2') as HTMLInputElement).value;
    const out19: HTMLElement = document.querySelector('.out-19') as HTMLElement;
    out19.innerHTML = a + b;
}
(document.querySelector('.b-19') as HTMLElement).onclick = t19;

// Task 20
// При нажатии на кнопку .b-20 в out-20 выводится число - сколько раз была нажата кнопка .b-20.
let count: number = 0;
function t20(): void {
    const out20: HTMLElement = document.querySelector('.out-20') as HTMLElement;
    out20.textContent = String(count++);
}
(document.querySelector('.b-20') as HTMLElement).onclick = t20;