// Task 1 ============================================
/* Создайте функцию t1 которая записывает  в LS  ключ 5 со значением 11. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-1. */

function t1(): void {
    localStorage.setItem('5', '11'); // Keys and values in localStorage must be strings
}

const b1: HTMLElement | null = document.querySelector('.b-1');
if (b1) {
    b1.onclick = t1;
}

// Task 2 ============================================
/* Создайте функцию t2 которая записывает  в LS  массив a2 = [7,6,5]. Ключ a2. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-2. */

function t2(): void {
    const a2: number[] = [7, 6, 5];
    localStorage.setItem('a2', JSON.stringify(a2));
}

const b2: HTMLElement | null = document.querySelector('.b-2');
if (b2) {
    b2.onclick = t2;
}

// Task 3 ============================================
/*  При нажатии кнопки t3 выведите из LS сохранненный массив a2. Выведите в out-3 в формате ключ пробел значение перенос строки.  */

function t3(): void {
    const out3: HTMLElement | null = document.querySelector('.out-3');
    if (out3) {
        const a2String: string | null = localStorage.getItem('a2');
        if (a2String) {
            const a2: number[] = JSON.parse(a2String);
            let output: string = '';
            a2.forEach((value: number, index: number) => {
                output += `${index} ${value}<br>`;
            });
            out3.innerHTML = output;
        }
    }
}

const b3: HTMLElement | null = document.querySelector('.b-3');
if (b3) {
    b3.onclick = t3;
}

// Task 4 ============================================
/*  Создайте функцию t4 которая записывает  в LS  массив a4 = {hello: world, hi:mahai}. Ключ a4. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-4.*/

const a4: { [key: string]: string } = { hello: 'world', hi: 'mahai' };

function t4(): void {
    localStorage.setItem('a4', JSON.stringify(a4));
}

const b4: HTMLElement | null = document.querySelector('.b-4');
if (b4) {
    b4.onclick = t4;
}

// Task 5 ============================================
/*   При нажатии кнопки b-5 выведите из LS сохранненный массив a4. Выведите в out-5 в формате ключ пробел значение перенос строки. */

function t5(): void {
    const out5: HTMLElement | null = document.querySelector('.out-5');
    if (out5) {
        const a4String: string | null = localStorage.getItem('a4');
        if (a4String) {
            const a4: { [key: string]: string } = JSON.parse(a4String);
            let output: string = '';
            for (const key in a4) {
                output += `${key} ${a4[key]}<br>`;
            }
            out5.innerHTML = output;
        }
    }
}

const b5: HTMLElement | null = document.querySelector('.b-5');
if (b5) {
    b5.onclick = t5;
}

// Task 6 ============================================
/*  Создайте функцию t6 которая очищает весь LS. Запуск по кнопке b-6*/

function t6(): void {
    localStorage.clear();
}

const b6: HTMLElement | null = document.querySelector('.b-6');
if (b6) {
    b6.onclick = t6;
}

// Task 7 ============================================
/*  Создайте input i-7 куда пользователь может вводить числа и строки. Создайте массив a7. Когда пользователь нажимает кнопку b-7 число должно добавляться в массив. Массив должен сохраняться в LS с ключем a7.*/

let a7: (number | string)[] = [];

function t7(): void {
    const i7: HTMLInputElement | null = document.querySelector('.i-7');
    if (i7) {
        const inputValue: string = i7.value;
        if (!isNaN(Number(inputValue))) {
            a7.push(Number(inputValue)); // If it's a number, push as number
        } else {
            a7.push(inputValue); // Otherwise, push as string
        }
        localStorage.setItem('a7', JSON.stringify(a7));
    }
}

const b7: HTMLElement | null = document.querySelector('.b-7');
if (b7) {
    b7.onclick = t7;
}

// Task 8 ============================================
/*   Создайте функцию t8 при запуске которой из a7 удаляется последний элемент. После чего массив сохраняется в LS с ключем a7. Использовать массив из предыдущего задания. */

function t8(): void {
    a7.pop();
    localStorage.setItem('a7', JSON.stringify(a7));
}

const b8: HTMLElement | null = document.querySelector('.b-8');
if (b8) {
    b8.onclick = t8;
};

export{}