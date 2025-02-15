let a1_res: number[] = [],
    a2_res: number[] = [],
    a3_res: number[] = [],
    a4_res: string[] = [],
    a5_res: string[] = [],
    a6_res: string[] = [],
    a7_res: string[] = [],
    a8_res: string = '',
    a9_res: string = '',
    a10_res: string = '';

// Task 1 ============================================
/* <p>Дан массив a1 = [4,5,6,7,12,34,56,78,90,11] - с помощью forEach переберите массив и создайте новый массив a1_res куда добавьте элементы данного массива умноженные на 2. Действия должны запускаться при вызове функции t1.</p> */

function t1(): void {
    let a1: number[] = [4, 5, 6, 7, 12, 34, 56, 78, 90, 11];
    a1.forEach((elem) => {
        a1_res.push(elem * 2);
    });
    document.querySelector('.out-1')!.innerHTML = a1_res.join(' ');
}

document.querySelector('.b-1')!.addEventListener('click', t1);

// Task 2 ============================================
/*  Дан массив a2 = [2,3,4,5,10,11,12] - с помощью forEach переберите массив и создайте новый массив a2_res куда добавьте элементы данного массива деленные на 2. Действия должны запускаться при вызове функции t2.*/

let a2: number[] = [2, 3, 4, 5, 10, 11, 12];

function t2(): void {
    a2.forEach((item) => {
        a2_res.push(item / 2);
    });
    console.log(a2_res);
}

document.querySelector('.b-2')!.addEventListener('click', t2);

// Task 3 ============================================
/*  Дан массив a3 = [2, 'hello', 3, 'hi', 4, 'Mazai'] - с помощью forEach переберите массив и создайте новый массив a3_res куда добавьте элементы данного массива являющиеся числом. Запускаться решение должно при вызове функции t3.*/

let a3: (number | string)[] = [2, 'hello', 3, 'hi', 4, 'Mazai'];

function t3(): void {
    a3.forEach((item) => {
        if (typeof item === 'number') {
            a3_res.push(item);
        }
    });
    console.log(a3_res);
}

document.querySelector('.b-3')!.addEventListener('click', t3);

// Task 4 ============================================
/*  На странице созданы 3 span.task-4 c атрибутом data. С помощью forEach переберите их и добавьте атрибуты в массив a4_res. Запускаться решение должно при вызове функции t4.*/

function t4(): void {
    let a4: NodeListOf<Element> = document.querySelectorAll('span.task-4');
    a4.forEach((item) => {
        const data = item.getAttribute('data');
        if (data) {
            a4_res.push(data);
        }
    });
    console.log(a4_res);
}

document.querySelector('.b-4')!.addEventListener('click', t4);

// Task 5 ============================================
/*  На странице созданы 3 p.task-5 c атрибутом data. С помощью forEach переберите их и добавьте событие клик. Напишите функцию t5, которая будет запускаться при клике и добавлять атрибут data элемента, по которому кликнули в массив a5_res.*/

function t5(): void {
    let pElems: NodeListOf<Element> = document.querySelectorAll('p.task-5');
    pElems.forEach((item) => {
        item.addEventListener('click', () => {
            const data = item.getAttribute('data');
            if (data) {
                a5_res.push(data);
                console.log(a5_res);
            }
        });
    });
}

document.querySelectorAll('.task-5').forEach((elem) => {
    elem.addEventListener('click', t5);
});

// Task 6 ============================================
/*  Дана строка str6='helloworld' - преобразуйте ее в массив (c разбиением по буквам) и присвойте a6_res. Выведите на страницу. Запускаться решение должно при вызове функции t6. */

let str6: string = 'helloworld';

function t6(): void {
    a6_res = str6.split('');
    console.log(a6_res);
}

document.querySelector('.b-6')!.addEventListener('click', t6);

// Task 7 ============================================
/*  Дана строка str7='hello world hi mazai' - преобразуйте ее в массив и разбейте по словам. Причем слова не должны содержать пробелов и присвойте a7_res. Выведите на страницу. Запускаться решение должно при вызове функции t7. */

let str7: string = 'hello world hi mazai';

function t7(): void {
    a7_res = str7.split(' ');
    console.log(a7_res);
}

document.querySelector('.b-7')!.addEventListener('click', t7);

// Task 8 ============================================
/*  Дан массив a8 = [1,2,66,77,15] - преобразуйте ее в строку. Разделитель - дефис. Результат присвойте a8_res. Запускаться решение должно при вызове функции t8. */

let a8: number[] = [1, 2, 66, 77, 15];

function t8(): void {
    a8_res = a8.join('-');
    console.log(a8_res);
}

document.querySelector('.b-8')!.addEventListener('click', t8);

// Task 9 ============================================
/*  Дан массив a9 = [['hi', 'mahai'], ['test', 'best']] - преобразуйте его в строку. Разделитель - дефис. Результат присвойте a9_res. Запускаться решение должно при вызове функции t9. Допускается лишний дефис в конце строки!!! */

let a9: string[][] = [['hi', 'mahai'], ['test', 'best']];

function t9(): void {
    a9_res = a9
        .map((item) => item.join('-'))
        .join('-');
    console.log(a9_res);
}

document.querySelector('.b-9')!.addEventListener('click', t9);

// Task 10 ============================================
/*  Дан массив a10 = {name: ivan, age: 15, sex: 1, id: 45} - преобразуйте его в query строку (так передаются GET параметры). Найдите описание что такое query строка самостоятельно. Разделитель - амперсанд. Результат присвойте a10_res. Запускаться решение должно при вызове функции t10. Допускается лишний амперсанд в конце строки!!! */

interface A10 {
    name: string;
    age: number;
    sex: number;
    id: number;
}

let a10: A10 = { name: 'ivan', age: 15, sex: 1, id: 45 };
let url: string = 'https://example.com/api/users?';

function t10(): void {
    let arr: string[] = [];
    for (let key in a10) {
        arr.push(`${key}=${a10[key as keyof A10]}`);
    }
    a10_res = url + arr.join('&');
    console.log(a10_res);
}

document.querySelector('.b-10')!.addEventListener('click', t10);