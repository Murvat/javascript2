export {}

//  Task 1
// По нажатию на кнопку .b-1 функция присваивает блоку .out-1 ширину 200px, высоту 90px.
function f1(): void {
    const div: HTMLElement = document.querySelector('div.out-1') as HTMLElement;
    div.style.width = '200px';
    div.style.height = '90px';
}

(document.querySelector('.b-1') as HTMLElement).onclick = f1;

//  Task 2
// По нажатию на кнопку .b-2 функция f2, которая присваивает блоку .out-2 класс .bg-orange.
function f2(): void {
    const div: HTMLElement = document.querySelector('div.out-2') as HTMLElement;
    div.setAttribute('class', 'bg-orange');
}

(document.querySelector('.b-2') as HTMLElement).onclick = f2;

//  Task 3
// По нажатию кнопки .b-3 запускайте функцию f3, которая удаляет у блока .out-3 класс .bg-orange.
function f3(): void {
    const div: HTMLElement = document.querySelector('div.out-3') as HTMLElement;
    // As removeAttribute takes a single argument, remove the class without the dot.
    div.removeAttribute('class');
}

(document.querySelector('.b-3') as HTMLElement).onclick = f3;

//  Task 4
// По нажатию кнопки .b-4 запускайте функцию f4, которая делает toggle класса .bg-orange для блока .out-4.
function f4(): void {
    const div: HTMLElement = document.querySelector('div.out-4') as HTMLElement;
    div.classList.toggle('bg-orange');
}

(document.querySelector('.b-4') as HTMLElement).onclick = f4;

//  Task 5
// По нажатию кнопки .b-5 запускайте функцию f5, которая проверяет наличие класса .bg-orange у блока .out-4 и выводит результат в .out-5.
function f5(): void {
    const div: HTMLElement = document.querySelector('div.out-4') as HTMLElement;
    const out: HTMLElement = document.querySelector('div.out-5') as HTMLElement;
    if (div.classList.contains('bg-orange')) {
        out.innerHTML = 'true';
    } else {
        out.innerHTML = 'false';
    }
}

(document.querySelector('.b-5') as HTMLElement).onclick = f5;

//  Task 6
// По нажатию кнопки .b-6 запускайте функцию f6, которая выводит в .out-6 количество параграфов с классом .p-6.
function f6(): void {
    const paragraphs: NodeListOf<HTMLElement> = document.querySelectorAll('.p-6');
    const out: HTMLElement = document.querySelector('div.out-6') as HTMLElement;
    out.innerHTML = paragraphs.length.toString();
}

(document.querySelector('.b-6') as HTMLElement).onclick = f6;

//  Task 7
// По нажатию кнопки .b-7 запускайте функцию f7, которая присваивает блокам .out-7 класс .bg-orange.
const blocks7: NodeListOf<HTMLElement> = document.querySelectorAll('.out-7');
function f7(): void {
    for (let i: number = 0; i < blocks7.length; i++) {
        blocks7[i].classList.add('bg-orange');
    }
}

(document.querySelector('.b-7') as HTMLElement).onclick = f7;

//  Task 8
// По нажатию кнопки .b-8 запускайте функцию f8, которая делает toggle для классов .bg-orange у блоков .out-8.
const blocks8: NodeListOf<HTMLElement> = document.querySelectorAll('.out-8');
function f8(): void {
    for (let i: number = 0; i < blocks8.length; i++) {
        blocks8[i].classList.toggle('bg-orange');
    }
}

(document.querySelector('.b-8') as HTMLElement).onclick = f8;

//  Task 9
// С помощью цикла повесьте на блоки .out-9 событие клик, по которому выполняется функция f9.
// Функция добавляет класс .bg-orange тому блоку, на котором кликнули.
function f9(this: GlobalEventHandlers, e: MouseEvent): void {
    (this as HTMLElement).classList.add('bg-orange');
}

const div9: NodeListOf<HTMLElement> = document.querySelectorAll('.out-9');
for (let i: number = 0; i < div9.length; i++) {
    div9[i].onclick = f9;
}

//  Task 10
// С помощью цикла повесьте на блоки .out-10 событие клик, по которому выполняется функция f10.
// Функция делает toggle класса .bg-orange тому блоку, на котором кликнули.
function f10(this: GlobalEventHandlers): void {
    (this as HTMLElement).classList.toggle('bg-orange');
}

const div10: NodeListOf<HTMLElement> = document.querySelectorAll('.out-10');
for (let i: number = 0; i < div10.length; i++) {
    div10[i].onclick = f10;
}

//  Task 11
// Кнопка .b-11 запускает функцию f11. Функция создает через createElement div c текстом "25" и добавляет его через append в .out-11.
function f11(): void {
    const newDiv: HTMLDivElement = document.createElement('div');
    newDiv.textContent = '25';
    const div: HTMLElement = document.querySelector('div.out-11') as HTMLElement;
    div.append(newDiv);
}

(document.querySelector('.b-11') as HTMLElement).onclick = f11;

//  Task 12
// Кнопка .b-12 запускает функцию f12. Функция создает через createElement div c текстом "12" и добавляет ему класс "bg-12".
// Созданный div добавляется в .out-12.
function f12(): void {
    const div: HTMLElement = document.querySelector('div.out-12') as HTMLElement;
    const newDiv: HTMLDivElement = document.createElement('div');
    newDiv.classList.add('bg-12');
    newDiv.textContent = '12';
    div.append(newDiv);
}

(document.querySelector('.b-12') as HTMLElement).onclick = f12;

//  Task 13
// Кнопка .b-13 запускает функцию f13. Функция создает через createElement div c текстом "pushMe", добавляет ему класс "bg-orange"
// и событие onclick, по которому выполняется функция f13_1. Созданный div добавляется в .out-13.
function f13(): void {
    const div: HTMLElement = document.querySelector('.out-13') as HTMLElement;
    const newDiv: HTMLDivElement = document.createElement('div');
    newDiv.textContent = 'pushMe';
    newDiv.classList.add('bg-orange');
    newDiv.onclick = f13_1; // Now f13_1 has the proper signature.
    div.append(newDiv);
}

function f13_1(this: GlobalEventHandlers, e: MouseEvent): void {
    const out: HTMLElement = document.querySelector('.out-13-1') as HTMLElement;
    out.innerHTML += (this as HTMLElement).innerHTML;
}

(document.querySelector('.b-13') as HTMLElement).onclick = f13;

//  Task 14
// Кнопка .b-14 запускает функцию f14. Функция создает через createElement div c текстом "14" и добавляет ему класс "bg-orange".
// Созданный div добавляется в .out-14 с помощью append.
function f14(): void {
    const newDiv: HTMLDivElement = document.createElement('div');
    newDiv.classList.add('bg-orange');
    newDiv.textContent = '14';
    const div: HTMLElement = document.querySelector('.out-14') as HTMLElement;
    div.append(newDiv);
}

(document.querySelector('.b-14') as HTMLElement).onclick = f14;

//  Task 15
// Кнопка .b-15 запускает функцию f15. Функция создает через createElement div c текстом "15" и добавляет ему класс "bg-orange".
// Созданный div добавляется перед .out-15 с помощью before.
function f15(): void {
    const newDiv: HTMLDivElement = document.createElement('div');
    newDiv.classList.add('bg-orange');
    newDiv.textContent = '15';
    const div: HTMLElement = document.querySelector('.out-15') as HTMLElement;
    div.before(newDiv);
}

(document.querySelector('.b-15') as HTMLElement).onclick = f15;

//  Task 16
// Кнопка .b-16 запускает функцию f16. Функция создает через createElement div c текстом "16" и добавляет ему класс "bg-orange".
// Созданный div добавляется после .out-16 с помощью after.
function f16(): void {
    const newDiv: HTMLDivElement = document.createElement('div');
    newDiv.classList.add('bg-orange');
    newDiv.textContent = '16';
    const div: HTMLElement = document.querySelector('.out-16') as HTMLElement;
    div.after(newDiv);
}

(document.querySelector('.b-16') as HTMLElement).onclick = f16;

//  Task 17
// Кнопка .b-17 запускает функцию f17. Функция создает через createElement div c текстом "17" и добавляет ему класс "bg-orange".
// Созданный div заменяет .out-17 с помощью replaceWith.
function f17(): void {
    const newDiv: HTMLDivElement = document.createElement('div');
    newDiv.classList.add('bg-orange');
    newDiv.textContent = '17';
    const div: HTMLElement = document.querySelector('.out-17') as HTMLElement;
    div.replaceWith(newDiv);
}

(document.querySelector('.b-17') as HTMLElement).onclick = f17;

//  Task 18
// Кнопка .b-18 запускает функцию f18. Функция с помощью getAttribute получает data-b атрибут с параграфа .p-18 и выводит его в .out-18.
function f18(): void {
    const p: HTMLElement = document.querySelector('.p-18') as HTMLElement;
    const out: HTMLElement = document.querySelector('.out-18') as HTMLElement;
    out.innerHTML = p.getAttribute('data-b') || '';
}

(document.querySelector('.b-18') as HTMLElement).onclick = f18;

//  Task 19
// Кнопка .b-19 запускает функцию f19. Функция с помощью getAttribute получает data-b атрибут с параграфов .p-19 и выводит их через пробел в .out-19.
function f19(): void {
    const paragraphs: NodeListOf<HTMLElement> = document.querySelectorAll('.p-19');
    let outStr: string = '';
    for (let i: number = 0; i < paragraphs.length; i++) {
        outStr += (paragraphs[i].getAttribute('data-b') || '') + ' ';
    }
    const out: HTMLElement = document.querySelector('.out-19') as HTMLElement;
    out.innerHTML = outStr;
}

(document.querySelector('.b-19') as HTMLElement).onclick = f19;

//  Task 20
// Кнопка .b-20 запускает функцию f20. Функция с помощью setAttribute присваивает атрибут title="go" элементу div.out-20.
function f20(): void {
    const div: HTMLElement = document.querySelector('div.out-20') as HTMLElement;
    div.setAttribute('title', 'go');
}

(document.querySelector('.b-20') as HTMLElement).onclick = f20;