export {}

function f1(): void {
    (document.querySelector('.out-1') as HTMLElement).innerHTML = '1';
}

(document.querySelector('.b-1') as HTMLElement).onclick = f1;

// Task 2
// При нажатии (click) на .i-2 запускайте f2, которая выводите в .out-2 число 2. Т.е. как видите, мы можем повесить клик на любой элемент.

function f2(): void {
    (document.querySelector('.out-2') as HTMLElement).innerHTML = '1';
}

(document.querySelector('.i-2') as HTMLElement).onclick = f2;

// Task 3
//  При нажатии (click) на .p-3 запускайте f3, которая выводите в .out-3 число 3. Т.е. как видите, мы можем повеcить клик на любой элемент.

function f3(): void {
    (document.querySelector('.out-3') as HTMLElement).innerHTML = '3';
}

(document.querySelector('.p-3') as HTMLElement).onclick = f3;

// Task 4. 
// При клике по кнопке .b-4 запускается функция f4. Функция проверяет состояние .i-4 и если он checked - выводит true, если не выбран - false. Вывод везде в задачах, где не указано другое, осуществляется в div.out-номер задачи. В данном случае - div.out-4

function f4(): void {
    const checkElement = document.querySelector('.i-4') as HTMLInputElement;
    if (checkElement.checked) {
        (document.querySelector('div.out-4') as HTMLElement).innerHTML = 'true';
    } else {
        (document.querySelector('div.out-4') as HTMLElement).innerHTML = 'false';
    }
}

(document.querySelector('.b-4') as HTMLElement).onclick = f4;

// Task 5.
// При клике по кнопке .b-5 запускается функция f5. Функция проверяет состояние .i-5 и если он checked - выводит value данного элемента, если не выбран - false. Вывод везде в задачах, где не указано другое, осуществляется в div.out-номер задачи. В данном случае div.out-5

function f5(): void {
    const divElem = document.querySelector('div.out-5') as HTMLElement;
    const checkValue = document.querySelector('.i-5') as HTMLInputElement;
    if (checkValue.checked) {
        divElem.innerHTML = checkValue.value;
    } else {
        divElem.innerHTML = 'false';
    }
}

(document.querySelector('.b-5') as HTMLElement).onclick = f5;

// Task 6. 
// При нажатии на кнопку выводите value из input.i-6 в div.out-6. Обратите внимание, что даже скрытый hidden input - нам не помеха. 

function f6(): void {
    const inputValue = document.querySelector('input.i-6') as HTMLInputElement;
    const outputValue = document.querySelector('div.out-6') as HTMLElement;
    outputValue.innerHTML = inputValue.value;
}

(document.querySelector('.b-6') as HTMLElement).onclick = f6;

// Task 7.
// При нажатии на кнопку выводите в div.out-71 value прописанное в input .i-7. В .out-72 выводите 1 если длина пароля больше или равна 6 или 0 если меньше. Для подсчета количества символов в строке используйте length.

function f7(): void {
    const inputValue = document.querySelector('input.i-7') as HTMLInputElement;
    const outputValue = document.querySelector('div.out-71') as HTMLElement;
    const outputLength = document.querySelector('div.out-72') as HTMLElement;
    outputValue.innerHTML = inputValue.value;
    if (inputValue.value.length >= 6) {
        outputLength.innerHTML = '1';
    } else {
        outputLength.innerHTML = '0';
    }
}

(document.querySelector('.b-7') as HTMLElement).onclick = f7;

// Task 8.
// При нажатии кнопки .b-8 запускается функция f8. Функция с помощью innerHTML создает в .out-8 новый div с классом js2 и текстом new div. Нажали несколько раз? Создаем несколько раз!

function f8(): void {
    (document.querySelector('div.out-8') as HTMLElement).innerHTML =
        "<div class='js2'>new div</div>";
}

(document.querySelector('.b-8') as HTMLElement).onclick = f8;

// Task 9
// При нажатии кнопки .b-9 запускаем функцию f9. Функция проверяет checked элемента .r-9. Если элемент выбран (checked) то выводит в .out-9 value radiobutton. Если не выбран - выводит false.

function f9(): void {
    const radioElem = document.querySelector('.r-9') as HTMLInputElement;
    const out9 = document.querySelector('div.out-9') as HTMLElement;
    if (radioElem.checked) {
        out9.innerHTML = radioElem.value;
    } else {
        out9.innerHTML = 'false';
    }
}

(document.querySelector('.b-9') as HTMLElement).onclick = f9;

// Task 10
// При нажатии кнопки .b-10 запускаем функцию f10. Функция получает из .i-10 значение цвета и окрашивает style.background элемента .out-10 в этот цвет.

function f10(): void {
    const colorElem = document.querySelector('.i-10') as HTMLInputElement;
    (document.querySelector('div.out-10') as HTMLElement).style.background =
        colorElem.value;
}

(document.querySelector('.b-10') as HTMLElement).onclick = f10;

// Task 11
// При нажатии кнопки .b-11 запускается функция f11. Функция получает цвет из .i-111 и присваивает как value элементу .i-112. Т.е. после нажатия кнопки выбранный цвета в первом и втором input станут одинаковые.

function f11(): void {
    const colorElem111 = (document.querySelector('.i-111') as HTMLInputElement).value;
    (document.querySelector('.i-112') as HTMLInputElement).value = colorElem111;
}

(document.querySelector('.b-11') as HTMLElement).onclick = f11;

// Task 12
// При нажатии кнопки .b-12 запускается функция f12. Функция выводит дату из .i-12 в out-12.

function f12(): void {
    const input12 = document.querySelector('.i-12') as HTMLInputElement;
    (document.querySelector('div.out-12') as HTMLElement).innerHTML = input12.value;
}

(document.querySelector('.b-12') as HTMLElement).onclick = f12;

// Task 13
//  При изменении положения ползунка .i-13 выводите его значение в out-13. Обратите внимание на событие.

function f13(): void {
    const input13 = document.querySelector('.i-13') as HTMLInputElement;
    (document.querySelector('div.out-13') as HTMLElement).innerHTML = input13.value;
}

(document.querySelector('.i-13') as HTMLInputElement).oninput = f13;

// Task 14
// При нажатии на кнопку выводите текст из textarea .t-14 в .out-14.

function f14(): void {
    const t14 = document.querySelector('.t-14') as HTMLTextAreaElement;
    (document.querySelector('div.out-14') as HTMLElement).innerHTML = t14.value;
}

(document.querySelector('.b-14') as HTMLElement).onclick = f14;

// Task 15
// При нажатии кнопки .b-15 функция должна выводить текст из .i-15 в textarea .t-15 и в .out-15.

function f15(): void {
    const input15 = document.querySelector('.i-15') as HTMLInputElement;
    const t15 = document.querySelector('.t-15') as HTMLTextAreaElement;
    const out15 = document.querySelector('div.out-15') as HTMLElement;
    t15.value = input15.value;
    out15.innerHTML = input15.value;
}

(document.querySelector('.b-15') as HTMLElement).onclick = f15;

// Task 16
// При нажатии на кнопку .b-16 выводите в .out-16 value выбранного option из .s-16.

function f16(): void {
    const selectVar = document.querySelector('.s-16') as HTMLSelectElement;
    (document.querySelector('div.out-16') as HTMLElement).innerHTML = selectVar.value;
}

(document.querySelector('.b-16') as HTMLElement).onclick = f16;

// Task 17
// При смене выбранного значения .s-17 выводите в .out-17 value выбранного option из .s-17.

function f17(): void {
    const selectVar = document.querySelector('.s-17') as HTMLSelectElement;
    (document.querySelector('div.out-17') as HTMLElement).innerHTML = selectVar.value;
}

(document.querySelector('.s-17') as HTMLSelectElement).onchange = f17;

// Task 18
// При смене выбранного значения в s-18, получайте из него value выбранного option и присвойте данный value в input .i-18.

function f18(): void {
    const selectVar = document.querySelector('.s-18') as HTMLSelectElement;
    (document.querySelector('.i-18') as HTMLInputElement).value = selectVar.value;
}

(document.querySelector('.s-18') as HTMLSelectElement).onchange = f18;

// Task 19
// На странице создан div.out-19. По нажатию кнопки, получите из него текст и присвойте в value элемента .i-19.

function f19(): void {
    const out19 = document.querySelector('div.out-19') as HTMLElement;
    (document.querySelector('.i-19') as HTMLInputElement).value = out19.innerHTML;
}

(document.querySelector('.b-19') as HTMLElement).onclick = f19;

// Task 20
// У вас есть два select. Напишите код, который при изменении select .s-201 будет аналогично изменять выбранный option в .s-202.

function f20(): void {
    const s201 = document.querySelector('.s-201') as HTMLSelectElement;
    const s202 = document.querySelector('.s-202') as HTMLSelectElement;
    s202.value = s201.value;
}

(document.querySelector('.s-201') as HTMLSelectElement).onchange = f20;