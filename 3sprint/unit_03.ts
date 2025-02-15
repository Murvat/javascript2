// Task 1
// При нажатии кнопки .b-1 срабатывает функция f1. Функция должна прочитать содержимое .i-1
// и сравнить его с числом 4 (сравнение ==). Результат сравнения - true или false выведите в .out-1.
function f1(): void {
    const a: string = (document.querySelector('.i-1') as HTMLInputElement).value;
    const res: boolean = a == "4"; // Using string "4" for loose equality
    (document.querySelector('.out-1') as HTMLElement).innerHTML = String(res);
}

(document.querySelector('.b-1') as HTMLElement).onclick = f1;

// Task 2
// Даны две переменные a21 и a22. При нажатии кнопки .b-2, запускается функция f2. 
// Функция должна сравнить переменные с помощью if else и вывести в .out-2 число, которое больше.
let a21: number = 45;
let a22: number = 32;

function f2(): void {
    if (a21 > a22) {
        (document.querySelector('.out-2') as HTMLElement).innerHTML = String(a21);
    } else {
        (document.querySelector('.out-2') as HTMLElement).innerHTML = String(a22);
    }
}

(document.querySelector('.b-2') as HTMLElement).onclick = f2;

// Task 3
// Даны 2 input - .i-31 и .i-32, оба - input[type=number]. При нажатии кнопки .b-3 срабатывает функция f3.
// Функция должна сравнить числа из input, вывести в .out-3 большее число.
function f3(): void {
    const a: number = parseFloat((document.querySelector('.i-31') as HTMLInputElement).value);
    const b: number = parseFloat((document.querySelector('.i-32') as HTMLInputElement).value);
    const out3: HTMLElement = (document.querySelector('.out-3') as HTMLElement);
    if (a > b) {
        out3.innerHTML = String(a);
    } else {
        out3.innerHTML = String(b);
    }
}

(document.querySelector('.b-3') as HTMLElement).onclick = f3;

// Task 4 
// Пользователь вводит в .i-4 год своего рождения. Есть кнопка .b-4 которая запускает функцию f4. 
// Функция должна вывести в .out-4 число 1 если пользователю больше или равно 18 лет, и 0 если меньше.
function f4(): void {
    const curYear: number = new Date().getFullYear();
    const birthYear: number = parseInt((document.querySelector('.i-4') as HTMLInputElement).value);
    const age: number = curYear - birthYear;
    (document.querySelector('.out-4') as HTMLElement).innerHTML = age >= 18 ? "1" : "0";
}

(document.querySelector('.b-4') as HTMLElement).onclick = f4;

// Task 5 
// На странице есть input c классом i-5, куда пользователь может ввести число. 
// Есть кнопка .b-5 которая запускает функцию f5. Функция должна вывести в .out-5 символ 'm' если число меньше нуля, 
// 0 если число равно нулю и число 1 если больше.
function f5(): void {
    const data: number = parseFloat((document.querySelector('.i-5') as HTMLInputElement).value);
    const out5: HTMLElement = (document.querySelector('.out-5') as HTMLElement);
    if (data < 0) {
        out5.textContent = 'm';
    } else if (data === 0) {
        out5.textContent = '0';
    } else {
        out5.textContent = '1';
    }
}

(document.querySelector('.b-5') as HTMLElement).onclick = f5;

// Task 6
// На странице есть input с классом i-6, куда пользователь может ввести число. 
// Есть кнопка .b-6 которая запускает функцию f6. Функция должна вывести в .out-6 слово even если число чётное, odd если нечетное.
function f6(): void {
    const data: number = parseFloat((document.querySelector('.i-6') as HTMLInputElement).value);
    const out6: HTMLElement = (document.querySelector('.out-6') as HTMLElement);
    out6.textContent = data % 2 === 0 ? 'even' : 'odd';
}

(document.querySelector('.b-6') as HTMLElement).onclick = f6;

// Task 7
// Даны 2 input - .i-71 и .i-72, оба - input[type=number]. При нажатии кнопки .b-7 срабатывает функция f7.
// Функция должна число из .i-71 возвести в степень .i-72, вывести результат в .out-7.
function f7(): void {
    const num1: number = parseFloat((document.querySelector('.i-71') as HTMLInputElement).value);
    const num2: number = parseFloat((document.querySelector('.i-72') as HTMLInputElement).value);
    const res: number = num1 ** num2;
    (document.querySelector('.out-7') as HTMLElement).innerHTML = String(res);
}

(document.querySelector('.b-7') as HTMLElement).onclick = f7;

// Task 8
// Дан select s-8, содержащий 3 значения: 1, 2, 3. При нажатии на кнопку .b-8 функция f8 получает выбранное число,
// потом с помощью switch case сравнивает его и выводит: one, two или three в .out-8.
function f8(): void {
    const value: number = parseFloat((document.querySelector('.s-8') as HTMLSelectElement).value);
    const out8: HTMLElement = (document.querySelector('.out-8') as HTMLElement);
    switch (value) {
        case 1:
            out8.innerHTML = 'one';
            break;
        case 2:
            out8.innerHTML = 'two';
            break;
        case 3:
            out8.innerHTML = 'three';
            break;
    }
}

(document.querySelector('.b-8') as HTMLElement).onclick = f8;

// Task 9
// Есть input с классом .i-9, куда пользователь может ввести номер квартиры. Есть кнопка .b-9, 
// которая запускает функцию f9. Функция должна вывести в .out-9 номер подъезда, где находится квартира.
function f9(): void {
    const localeNum: number = parseInt((document.querySelector('.i-9') as HTMLInputElement).value);
    let result: string;
    if (localeNum >= 1 && localeNum <= 32) {
        result = '1';
    } else if (localeNum >= 33 && localeNum <= 43) {
        result = '2';
    } else if (localeNum >= 44 && localeNum <= 66) {
        result = '3';
    } else {
        result = '0';
    }
    (document.querySelector('.out-9') as HTMLElement).innerHTML = result;
}

(document.querySelector('.b-9') as HTMLElement).onclick = f9;

// Task 10
// Дан select .s-100. По нажатию кнопки .b-10 необходимо вывести value выбранного option в .out-10.
function f10(): void {
    const optionValue: string = (document.querySelector('.s-100') as HTMLSelectElement).value;
    (document.querySelector('.out-10') as HTMLElement).innerHTML = optionValue;
}

(document.querySelector('.b-10') as HTMLElement).onclick = f10;

// Task 11
// Дан select .s-110. По изменению состояния select (onchange) выведите value выбранного option в .out-11.
function f11(): void {
    const optionValue: string = (document.querySelector('.s-110') as HTMLSelectElement).value;
    (document.querySelector('.out-11') as HTMLElement).innerHTML = optionValue;
}

(document.querySelector('.s-110') as HTMLSelectElement).onchange = f11;

// Task 12
// Дан input .i-120. По нажатию кнопки .b-12 получите значение из input в переменную, 
// а затем выведите в .out-12 typeof полученной переменной.
function f12(): void {
    const i120: HTMLInputElement = (document.querySelector('.i-120') as HTMLInputElement);
    const v: string = i120.value;
    (document.querySelector('.out-12') as HTMLElement).innerHTML = typeof v;
}

(document.querySelector('.b-12') as HTMLElement).onclick = f12;

// Task 13
// Дан input .i-130 (type="number"). По нажатию кнопки .b-13 выведите в .out-13 typeof полученной переменной.
// Обратите внимание: даже для input[type=number] тип будет string.
function f13(): void {
    const optionValue: string = (document.querySelector('.i-130') as HTMLInputElement).value;
    (document.querySelector('.out-13') as HTMLElement).innerHTML = typeof optionValue;
}

(document.querySelector('.b-13') as HTMLElement).onclick = f13;

// Task 14
// Дан input .i-141 и .i-142, type="number". Дан select .s-143 с четырьмя операциями: +, -, *, /.
// По нажатию кнопки .b-14 функция f14 выводит результат операции выбранной в select к числам из input.
function f14(): void {
    const num1: number = parseFloat((document.querySelector('.i-141') as HTMLInputElement).value);
    const num2: number = parseFloat((document.querySelector('.i-142') as HTMLInputElement).value);
    const operator: string = (document.querySelector('.s-143') as HTMLSelectElement).value;
    const out14: HTMLElement = (document.querySelector('.out-14') as HTMLElement);
    switch (operator) {
        case "+":
            out14.innerHTML = String(num1 + num2);
            break;
        case "-":
            out14.innerHTML = String(num1 - num2);
            break;
        case "*":
            out14.innerHTML = String(num1 * num2);
            break;
        case "/":
            out14.innerHTML = String(num1 / num2);
            break;
    }
}

(document.querySelector('.b-14') as HTMLElement).onclick = f14;

// Task 15
// Дан select .s-151 и .s-152, каждый содержит 1 и 0.
// Дан select .s-153 с операциями "&&" и "||". По нажатию кнопки .b-15 функция f15 выводит в .out-15 результат логической операции,
// примененной к значениям из первых двух select.
function f15(): void {
    const num1: number = parseFloat((document.querySelector('.s-151') as HTMLSelectElement).value);
    const num2: number = parseFloat((document.querySelector('.s-152') as HTMLSelectElement).value);
    const operator: string = (document.querySelector('.s-153') as HTMLSelectElement).value;
    const out15: HTMLElement = (document.querySelector('.out-15') as HTMLElement);
    switch (operator) {
        case "&&":
            out15.innerHTML = String(num1 && num2);
            break;
        case "||":
            out15.innerHTML = String(num1 || num2);
            break;
        default:
            out15.innerHTML = '';
            break;
    }
}

(document.querySelector('.b-15') as HTMLElement).onclick = f15;



