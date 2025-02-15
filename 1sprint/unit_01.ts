// Task 1.
// Выведите в консоль ваше имя. Напоминаю - в ходе работы, консоль открыта всегда!
console.log('Murvat');

// Task 2.
// Выведите в консоль номер месяца в котором вы родились. Изучите чем отличается вывод числа и строки.
console.log('2');
console.log(2);

// Task 3.
// Выведите в консоль строку: 'Добро '+'пожаловать '+' на курс'
console.log('Добро ' + 'пожаловать' + ' на курс');

// Task 4.
// С помощью alert выведите число 2019. После срабатывания кода - закомментируйте его, чтобы не мешал для дальнейшей разработки
// alert(2019);

// Task 5.
// С помощью console.log выведите результат операции 2019 - 200. Проверьте результат в консоли.
console.log(2019 - 200);

// Task 6.
// На странице создан div#six. С помощью document.getElementById запишите в div#six текст 'Hello World'.
const six: HTMLElement = document.getElementById('six') as HTMLElement;
six.innerHTML = 'Hello World';

// Task 7.
// На странице создан div#seven. С помощью document.getElementById запишите в данный элемент результат умножения 12 на 12.
const seven: HTMLElement = document.getElementById('seven') as HTMLElement;
seven.innerHTML = String(12 * 12);

// Task 8.
// На странице создан div.out-8. С помощью document.querySelector запишите в данный элемент текст 'task-8'.
const out8: HTMLElement = document.querySelector('.out-8') as HTMLElement;
out8.innerHTML = 'task-8';

// Task 9.
// На странице созданa верстка :
// <h2>Hello <span class="out-8">everyone</span></h2>
// Замените с помощью querySelector текст внутри span на 'world'.
const spanOut8: HTMLElement = document.querySelector('span.out-8') as HTMLElement;
spanOut8.innerHTML = 'world';

// Task 10.
// На странице создан div.out-10. С помощью innerHTML запишите внутрь него следующую строку '<h2>Hi</h2>'.
const out10: HTMLElement = document.querySelector('.out-10') as HTMLElement;
out10.innerHTML = '<h2>Hi</h2>';

// Task 11.
// На странице создан div.out-11. Запишите внутрь него строку '123'. Затем допишите в div.out-11 строку '345' с помощью +=.
const out11: HTMLElement = document.querySelector('.out-11') as HTMLElement;
out11.innerHTML = '123';
out11.innerHTML += '345';

// Task 12.
// На странице создан div.out-12. Получите его в переменную a. С помощью innerHTML запишите внутрь переменной a число 3.1415.
let a:number  = Number(document.querySelector('.out-12')as HTMLElement) ;
a = 3.1415;
console.log(a);

// Task 13.
// На странице создан div.out-13. Получите его в переменную out13. 
// С помощью innerHTML запишите в него строку: '<img src="https://itgid.info/img/js20/js20_unit_01.png" alt="js">'
const out13: HTMLElement = document.querySelector('div.out-13') as HTMLElement;
out13.innerHTML = '<img src="https://itgid.info/img/js20/js20_unit_01.png" alt="js">';

// Task 14.
// Создайте две переменных z1 = 6, z2 = 3. В div.out-14 выведите результат умножения z1 на z2.
let z1: number = 6;
let z2: number = 3;
let result: number = z1 * z2;
const out14: HTMLElement = document.querySelector('div.out-14') as HTMLElement;
out14.innerHTML = String(result);
console.log(result);

// Task 15.
// Создайте две переменных y1 = 6, y2 = 3. В div.out-15 выведите результат деления y1 на y2.
let y1: number = 6;
let y2: number = 3;
const out15: HTMLElement = document.querySelector('div.out-15') as HTMLElement;
out15.innerHTML = String(y1 / y2);
console.log(y1 / y2);

// Task 16.
// Создайте две переменных x1='Hello', x2 = 5. В div.out-16 выведите сумму x1 + x2.
let x1: string = 'Hello';
let x2: number = 5;
const out16: HTMLElement = document.querySelector('div.out-16') as HTMLElement;
out16.innerHTML = x1 + String(x2);
console.log(x1 + x2);

// Task 17.
// Получите div.out-17 в переменную out17 и выведите её в консоль.
const out17: HTMLElement = document.querySelector('.out-17') as HTMLElement;
console.log(out17);

// Task 18.
// Получите div.out-18 в переменную out18, выведите её в консоль, затем присвойте out18 значение 5 и снова выведите.
let out18: string | number = (document.querySelector('.out-18') as HTMLElement).innerHTML;
out18 = 5;
console.log(out18);

// Task 19.
// Получите div.out-19 в переменную out19, выведите её в консоль. Затем получите блок div.out-19-test, перезапишите переменную и выведите.
let out19: HTMLElement | null = document.querySelector('div.out-19');
out19 = document.querySelector('div.out-19-test');
console.log(out19);

// Task 20.
// Получите div.out-20 в переменную out20. С помощью textContent запишите в него строку '<h2>Hi</h2>'.
const out20: HTMLElement = document.querySelector('.out-20') as HTMLElement;
out20.textContent = '<h2>Hi</h2>';