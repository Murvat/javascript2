// Task 1
// При нажатии b-1 выполняете функцию f1. Функция должна вывести в out-1 значение 55 из массива a1. Возвратите это значение.
// Первая задача дана в качестве примера.

function f1(): number {
    let a1: (number | number[])[] = [12, [45, 87], [55, 13]];
    let out: string = '';
    for (let i: number = 0; i < a1.length; i++) {
        let a: any = a1[i];
        if (Array.isArray(a)) {
            for (let k: number = 0; k < a.length; k++) {
                if (a[k] === 55) {
                    out += a[k];
                }
            }
        }
    }
    document.querySelector('.out-1')!.innerHTML = out;
    return 55;
}

document.querySelector('.b-1')!.addEventListener('click', f1);

// Task 2
// При нажатии b-2 выполняете функцию f2. Функция должна вывести в out-2 значение hi из массива a2. Возвратите это значение.

function f2(): string {
    let a2: ((string | number)[] | number[])[] = [[12, 'hi'], [45, 87], [55, 13]];
    let out: string = '';
    for (let i: number = 0; i < a2.length; i++) {
        let a: any = a2[i];
        if (Array.isArray(a)) {
            for (let k: number = 0; k < a.length; k++) {
                if (a[k] === 'hi') {
                    out += a[k];
                }
            }
        }
    }
    document.querySelector('.out-2')!.innerHTML = out;
    return 'hi';
}

document.querySelector('.b-2')!.addEventListener('click', f2);

// Task 3
// При нажатии b-3 выполняете функцию f3. Функция должна вывести в out-3 значение my из массива a3. Возвратите это значение.

function f3(): string {
    let a3:(number | (string | number)[])[][]= [[1, 2, 3], [3, 4, 5], [6, [7, 'my']]];
    let out: string = '';
    for (let i: number = 0; i < a3.length; i++) {
        let a: any = a3[i];
        if (Array.isArray(a)) {
            for (let k: number = 0; k < a.length; k++) {
                let b: any = a[k];
                if (Array.isArray(b)) {
                    for (let j: number = 0; j < b.length; j++) {
                        if (b[j] === 'my') {
                            out += b[j];
                        }
                    }
                }
            }
        }
    }
    document.querySelector('.out-3')!.innerHTML = out;
    return 'my';
}

document.querySelector('.b-3')!.addEventListener('click', f3);

// Task 4
// При нажатии b-4 выполняете функцию f4. Функция должна вывести в out-4 значение go из массива a4. Возвратите это значение.

function f4(): string {
    type a4Arr = (string | (number | (string | number)[])[])[];
    let a4: a4Arr = [[1, 2, 3], 'go', [3, 4, 5], [6, [7, 'my']]];
    let out: string = '';
    for (let i: number = 0; i < a4.length; i++) {
        if (a4[i] === 'go') {
            out += a4[i];
        }
    }
    document.querySelector('.out-4')!.innerHTML = out;
    return 'go';
}

document.querySelector('.b-4')!.addEventListener('click', f4);

// Task 5
// При нажатии b-5 выполняете функцию f5. Функция должна вывести в out-5 четные значения из массива a5. Для перебора используем цикл.

function f5(): void {
    let out: string = '';
    let a5: number[][] = [[1, 2], [3, 4], [5, 6], [21, 34], [44, 56]];
    for (let i: number = 0; i < a5.length; i++) {
        let a: number[] = a5[i];
        for (let k: number = 0; k < a.length; k++) {
            if (a[k] % 2 === 0) {
                out += a[k] + ' ';
            }
        }
    }
    document.querySelector('.out-5')!.innerHTML = out;
}

document.querySelector('.b-5')!.addEventListener('click', f5);

// Task 6
// При нажатии b-6 выполняете функцию f6. Функция должна вывести в out-6 нечетные значения из массива a6. Для перебора используем цикл. Делаем по образу предыдущей задачи.

function f6(): void {
    let out: string = '';
    let a6: number[][] = [[1, 2], [3, 4], [5, 6], [21, 34], [44, 56]];
    for (let i: number = 0; i < a6.length; i++) {
        let a: number[] = a6[i];
        for (let k: number = 0; k < a.length; k++) {
            if (a[k] % 2 !== 0) {
                out += a[k] + ' ';
            }
        }
    }
    document.querySelector('.out-6')!.innerHTML = out;
}

document.querySelector('.b-6')!.addEventListener('click', f6);

// Task 7
// При нажатии b-7 выполняете функцию f7. Функция должна вывести в out-7 четные значения из массива a7. Как видите, вложенные массивы имеют разную длину, значит, предыдущий вариант уже не работает. Используем цикл. Вывод - через пробел.

function f7(): void {
    let out: string = '';
    let a7: number[][] = [
        [1, 2, 3, 9],
        [3, 4, 7],
        [5, 6, 8, 32],
        [21, 34, 43],
        [44, 56]
    ];
    for (let i: number = 0; i < a7.length; i++) {
        for (let k: number = 0; k < a7[i].length; k++) {
            if (a7[i][k] % 2 === 0) {
                out += a7[i][k] + ' ';
            }
        }
    }
    document.querySelector('.out-7')!.innerHTML = out;
}

document.querySelector('.b-7')!.addEventListener('click', f7);

// Task 8
// При нажатии b-8 выполняете функцию f8. Функция должна вывести в out-8 нечетные значения из массива a8. Как видите, вложенные массивы имеют разную длину, значит, предыдущий вариант уже не работает. Используем цикл. Вывод - через пробел.

function f8(): void {
    let out: string = '';
    let a8: number[][] = [
        [1, 2, 3, 9],
        [3, 4, 7],
        [5, 6, 8, 32],
        [21, 34, 43],
        [44, 56]
    ];
    for (let i: number = 0; i < a8.length; i++) {
        let a: number[] = a8[i];
        for (let k: number = 0; k < a.length; k++) {
            if (a[k] % 2 !== 0) {
                out += a[k] + ' ';
            }
        }
    }
    document.querySelector('.out-8')!.innerHTML = out;
}

document.querySelector('.b-8')!.addEventListener('click', f8);

// Task 9
// При нажатии b-9 выполняете функцию f9. Функция должна вывести в out-9 значения из массива a9, которые больше нуля. Используем цикл. Вывод - через пробел.

function f9(): void {
    let out: string = '';
    let a9: number[][] = [
        [-2, 7, -3],
        [3, 4, -7],
        [-5, 6, -8, 32],
        [21, -34, -43],
        [44, -56]
    ];
    for (let i: number = 0; i < a9.length; i++) {
        let a: number[] = a9[i];
        for (let k: number = 0; k < a.length; k++) {
            if (a[k] > 0) {
                out += a[k] + ' ';
            }
        }
    }
    document.querySelector('.out-9')!.innerHTML = out;
}

document.querySelector('.b-9')!.addEventListener('click', f9);

// Task 10
// При нажатии b-10 выполняете функцию f10. Функция должна вывести в out-10 значения из массива a10, которые являются строкой. Используем цикл. Вывод - через пробел.

function f10(): void {
    let out: string = '';
    let a10: (number | string)[][] = [
        [-2, '7', -3],
        [3, 4, -7],
        [-5, 6, -8, 32, 'a'],
        ['st', 21, -34, -43],
        [44, -56, 'task']
    ];
    for (let i: number = 0; i < a10.length; i++) {
        let a: (number | string)[] = a10[i];
        for (let k: number = 0; k < a.length; k++) {
            if (typeof a[k] === 'string') {
                out += a[k] + ' ';
            }
        }
    }
    document.querySelector('.out-10')!.innerHTML = out;
}

document.querySelector('.b-10')!.addEventListener('click', f10);

// Task 11
// При нажатии b-11 выполняете функцию f11. Функция должна вывести в out-11 значения из массива a11, причем каждый вложенный массив должен идти в обратном порядке. Вывод через пробел. Т.е. вы должны получить в out-10 строку вида 6 5 4 8 7 13 12 11 10 9. Решаем задачу двумя циклами, без reverse.

let a11: number[][] = [
    [4, 5, 6],
    [7, 8],
    [9, 10, 11, 12, 13]
];

function f11(): void {
    let out: string = '';
    for (let i: number = 0; i < a11.length; i++) {
        let a: number[] = a11[i];
        for (let j: number = a.length - 1; j >= 0; j--) {
            out += a[j] + ' ';
        }
    }
    document.querySelector('.out-11')!.innerHTML = out;
}

document.querySelector('.b-11')!.addEventListener('click', f11);

// Task 12
// Дан массив a12 который моделирует шахматную доску. Используя цикл выведите в out-12 единицы из этого массива. Все действия в функции f12. Функция запускается при нажатии на b12. Вывод через пробел.

function f12(): void {
    let a12: number[][] = [
        [0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0],
    ];
    let out: string = '';
    for (let i: number = 0; i < a12.length; i++) {
        let a: number[] = a12[i];
        for (let k: number = 0; k < a.length; k++) {
            if (a[k] === 1) {
                out += '1 ';
            }
        }
    }
    document.querySelector('.out-12')!.innerHTML = out;
}

document.querySelector('.b-12')!.addEventListener('click', f12);

// Task 13
// При нажатии b-13 выполняете функцию f13. Функция должна присвоить переменной a13 массив эмулирующий шахматную доску. Причем массив должен создаваться с помощью циклов. Для проверки - выведите массив в консоль.

let a13: number[][] = [];

function f13(): void {
    for (let i: number = 0; i < 8; i++) {
        a13.push([]);
        let a: number[] = a13[i];
        for (let k: number = 0; k < 8; k++) {
            if ((i + k) % 2 === 0) {
                a[k] = 1;
            } else {
                a[k] = 0;
            }
        }
    }
    console.log(a13);
}

document.querySelector('.b-13')!.addEventListener('click', f13);

// Task 14
// При нажатии b-14 выполняете функцию f14. Функция должна вывести в out-14 длины вложенных в a14 массивов. Через пробел.
// т.е ожидаем 0 2 4 ...

let a14: number[][] = [
    [],
    [1, 0],
    [1, 0, 0, 0],
    [3, 4, 5, 6, 7, 8],
    [1, 2]
];

function f14(): void {
    let out: string = '';
    for (let i: number = 0; i < a14.length; i++) {
        out += a14[i].length + ' ';
    }
    document.querySelector('.out-14')!.innerHTML = out;
}

document.querySelector('.b-14')!.addEventListener('click', f14);

// Task 15
// При нажатии b-15 выполняете функцию f15. Функция должна вывести в out-15 длину самого большого вложенного массива в a15.
// т.е ожидаем 6

let a15: number[][] = [
    [],
    [1, 0],
    [1, 0, 0, 0],
    [3, 4, 5, 6, 7, 8],
    [1, 2]
];

function f15(): void {
    let out: string = '';
    let maxLength: number = a15[0].length;
    for (let i: number = 0; i < a15.length; i++) {
        if (a15[i].length > maxLength) {
            maxLength = a15[i].length;
        }
    }
    out += maxLength;
    document.querySelector('.out-15')!.innerHTML = out;
}

document.querySelector('.b-15')!.addEventListener('click', f15);

// Task 16
// Впишите в переменную a16 массив, который соответствует всем условиям приведенным ниже ( все console.log должны дать true;
// Ответ в данной задаче прописан сразу. Т.е вы руками просто пишите массив такой, чтобы условия выполнялись.

let a16: (number[] | number)[] = [
    [0, 7, 0, 6],
    0,
    0,
    8
];

console.group('Task 16 ================');
console.log(a16[3] == 8);

console.groupEnd();

// Task 17
// Впишите в переменную a17 массив, который соответствует всем условиям приведенным ниже ( все console.log должны дать true;
//  Т.е вы руками просто пишите массив такой, чтобы условия выполнялись.

let a17: number[][] = [
    [0, 1, 6],
    [0, 7],
    [],
    [0, 1, 8]
];

console.group('Task 17 ================');
console.log(a17[3][2] == 8);
console.log(a17[1][1] == 7);
console.log(a17[0][2] == 6);
console.groupEnd();

// Task 18
// Впишите в переменную a18 массив, который соответствует всем условиям приведенным ниже ( все console.log должны дать true;
//  Т.е вы руками просто пишите массив такой, чтобы условия выполнялись.

let a18: (number[] | number)[] = [
    3,
    [],
    [0, 12],
    [],
    [8]
];

console.group('Task 18 ================');
console.log(a18[0] == 3);
console.groupEnd();

// Task 19
// Впишите в переменную a19 массив, который соответствует всем условиям приведенным ниже ( все console.log должны дать true;
//  Т.е вы руками просто пишите массив такой, чтобы условия выполнялись.

let a19: (number[] | (number[] | number[][])[])[] = [
    [[[], [3]]],
    [[[], [], [8]]],
    [[], [12]]
];

console.group('Task 19 ================');
console.groupEnd();

// Task 20
// Впишите в переменную a20 массив, который соответствует всем условиям приведенным ниже ( все console.log должны дать true;
//  Т.е вы руками просто пишите массив такой, чтобы условия выполнялись.

let a20: (number[] | (number[] | number[][])[])[] = [
    [],
    [[], [[], [9]]],
    [[], [], [18]],
    [12]
];

console.group('Task 20 ================');
console.log(a20[2][2] == 18);
console.groupEnd();