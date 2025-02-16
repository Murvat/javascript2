// Task 1 ============================================
/* Дан input .i-1. Напишите функцию t1, которая по событию keydown считывает содержимое event.key и добавляет в .out-1. Во всех последующих задачах - работаем с латиницей и цифрами. */

function t1(event: KeyboardEvent): void {
    const out1: HTMLElement | null = document.querySelector('.out-1');
    if (out1) {
        out1.innerHTML = event.key;
    }
}

const i1: HTMLInputElement | null = document.querySelector('.i-1');
if (i1) {
    i1.onkeydown = t1;
}

// Task 2 ============================================
/*  Дан input .i-2. Напишите функцию t2, которая по событию onkeypress выводит в out-2 числовой код символа (event.keyCode). */

function t2(event: KeyboardEvent): void {
    const out2: HTMLElement | null = document.querySelector('.out-2');
    if (out2) {
        out2.innerHTML = event.keyCode.toString();
    }
}

const i2: HTMLInputElement | null = document.querySelector('.i-2');
if (i2) {
    i2.onkeypress = t2;
}

// Task 3 ============================================
/*  Дан input .i-3. Напишите функцию t3, которая выводит на страницу true если введен символ и false если цифра. Для определения - используйте keyCode. */

function t3(event: KeyboardEvent): void {
    const out3: HTMLElement | null = document.querySelector('.out-3');
    if (out3) {
        out3.innerHTML = (event.keyCode >= 65 && event.keyCode <= 90) ? 'true' : 'false';
    }
}

const i3: HTMLInputElement | null = document.querySelector('.i-3');
if (i3) {
    i3.onkeypress = t3;
}

// Task 4 ============================================
/*  Дан input .i-4. Напишите функцию t4, которая выводит в .out-4 только символы в нижнем регистре. Т.е. ввели ab4Bci в out-4 получаем ab4ci. */

function t4(event: KeyboardEvent): void {
    const out4: HTMLElement | null = document.querySelector('.out-4');
    if (out4) {
        const key: string = event.key.toLowerCase();
        out4.innerHTML += key;
    }
}

const i4: HTMLInputElement | null = document.querySelector('.i-4');
if (i4) {
    i4.onkeypress = t4;
}

// Task 5 ============================================
/*  Дан input .i-5. Напишите функцию t5, которая выводит в .out-5 все вводимые символы в верхнем регистре. Т.е. пользователь ввел AbCd и функция выведет ABCD. */

function t5(event: KeyboardEvent): void {
    const out5: HTMLElement | null = document.querySelector('.out-5');
    if (out5) {
        const key: string = event.key.toUpperCase();
        out5.innerHTML += key;
    }
}

const i5: HTMLInputElement | null = document.querySelector('.i-5');
if (i5) {
    i5.onkeydown = t5;
}

// Task 6 ============================================
/*  Дан input .i-6. Напишите функцию t6, которая позволяет вводить в i-6 только символы в нижнем регистре. Т.е. мы до функции создаем строку. Внутри функции проверяем код символа. Если символ - в нижнем регистре - добавляем в строку. Потом принудительно присваиваем строку в value input i-6. Чтобы блокировать стандартный вывод в input в конце функции пишем return false;  */

let str: string = '';
function t6(event: KeyboardEvent): boolean {
    const i6: HTMLInputElement | null = document.querySelector('.i-6');
    if (i6) {
        const keyCode: number = event.keyCode;
        if (keyCode >= 97 && keyCode <= 122) {
            str += String.fromCharCode(keyCode);
            i6.value = str;
        }
    }
    return false;
}

const i6: HTMLInputElement | null = document.querySelector('.i-6');
if (i6) {
    i6.onkeypress = t6;
}

// Task 7 ============================================
/*  Дан input .i-7. Напишите функцию t7, которая выводит в .out-7 случайный символ из массива a7 при каждом вводе символа. */

const a7: string[] = ['a', 'z', 'x', 'w', 'y', 't'];

function t7(): void {
    const out7: HTMLElement | null = document.querySelector('.out-7');
    if (out7) {
        const count: number = Math.floor(Math.random() * a7.length);
        out7.innerHTML = a7[count];
    }
}

const i7: HTMLInputElement | null = document.querySelector('.i-7');
if (i7) {
    i7.onkeydown = t7;
}

// Task 8 ============================================
/*  Дан input .i-8. Напишите функцию t8, которая дописывает в .out-8 вводимый в input текст, но заменяет i на 1, o на 0, l на 7. */

const a8: { [key: string]: number } = {
    i: 1,
    o: 0,
    l: 7
};

function t8(event: KeyboardEvent): void {
    const out8: HTMLElement | null = document.querySelector('.out-8');
    if (out8) {
        let key: string = event.key;
        if (a8[key]) {
            key = a8[key].toString();
        }
        out8.innerHTML += key;
    }
}

const i8: HTMLInputElement | null = document.querySelector('.i-8');
if (i8) {
    i8.onkeydown = t8;
}

// Task 9 ============================================
/* Дан input .i-9. Напишите функцию t9, выводит в .out-9 количество (число) нажатых клавиш стрелка вниз. */

let count: number = 0;
function t9(event: KeyboardEvent): void {
    const out9: HTMLElement | null = document.querySelector('.out-9');
    if (out9 && event.key === 'ArrowDown') {
        count++;
        out9.innerHTML = count.toString();
    }
}

const i9: HTMLInputElement | null = document.querySelector('.i-9');
if (i9) {
    i9.onkeydown = t9;
}

// Task 10 ============================================
/*  Дан input .i-10 и блок .block-10. Добавьте событие на input, при нажатии клавиш стрелка вправо и стрелка влево увеличивать ширину блока. Клавиши стрелка вверх и вниз - увеличивать высоту блока. Одно нажатие клавиши - 1px. */

let h: number = 75;
let w: number = 75;

function t10(event: KeyboardEvent): void {
    const block10: HTMLElement | null = document.querySelector('.block-10');
    if (block10) {
        if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
            w += 1;
            block10.style.width = `${w}px`;
        }
        if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
            h += 1;
            block10.style.height = `${h}px`;
        }
    }
}

const i10: HTMLInputElement | null = document.querySelector('.i-10');
if (i10) {
    i10.onkeydown = t10;
}

// Task 11 ============================================
/*  Проект. 
1. Изучите верстку клавиатуры.
2. При вводе символа в i-11 (латиница, нижний регистр) - клавише с таким символом присвойте класс .active. Это окрасит клавишу оранжевым фоном. Перед поиском и присвоением active, с помощью цикла удалите класс active у всех клавиш с классом keyboard.
3. Если все сделано верно, то при вводе следующего символа, предыдущая клавиша потеряет оранжевый фон, а новая введенная окрасится. 
4. Самостоятельно добавьте все цифры и второй ряд клавиш от a до l
5. Самостоятельно добавьте клавишу alt, enter.
*/

function t11(event: KeyboardEvent): void {
    const keyW: HTMLCollectionOf<Element> = document.getElementsByClassName('keyboard');
    for (let i = 0; i < keyW.length; i++) {
        keyW[i].classList.remove('active');
    }
    for (let i = 0; i < keyW.length; i++) {
        const value: string | null = keyW[i].getAttribute('data');
        if (value === event.key) {
            keyW[i].classList.add('active');
        }
    }
}

const i11: HTMLInputElement | null = document.querySelector('.i-11');
if (i11) {
    i11.onkeydown = t11;
};

export{}