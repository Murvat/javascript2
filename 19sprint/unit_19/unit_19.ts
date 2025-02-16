// Task 1 ============================================
/* Добавьте на блок .div-1 событие клик и по клику запуск функции t1. Функция должна возвращать и выводить на экран содержимое блока (только текст). Вывод осуществляется в out-1.  */
const out: HTMLElement | null = document.querySelector('.div-1');
const res: HTMLElement | null = document.querySelector('.out-1');
function t1(): void {
    if (out && res) {
        res.textContent = out.textContent;
    }
}
if (out) {
    out.addEventListener('click', t1);
}

// Task 2 ============================================
/*  Добавьте на блок .div-2 событие клик и по клику запуск функции t2. Функция должна возвращать true или false в зависимости от того, нажата ли клавиша alt или нет в момент клика. Также, выводите на экран результат. Вывод осуществляется в out-2. */
const div2: HTMLElement | null = document.querySelector('.div-2');
const out2: HTMLElement | null = document.querySelector('.out-2');
function t2(event: MouseEvent): void {
    if (out2) {
        out2.textContent = event.altKey ? 'true' : 'false';
    }
}
if (div2) {
    div2.addEventListener('click', t2);
}

// Task 3 ============================================
/*  Добавьте на блок .div-3 событие клик. При клике - увеличивайте ширину блока на 5px. Каждый клик - увеличение ширины на 5px. 10 кликов - на 50px. Ширину выводите в out-3. */
let w3: number = 75;
const div3: HTMLElement | null = document.querySelector('.div-3');
const out3: HTMLElement | null = document.querySelector('.out-3');
function t3(): void {
    if (div3 && out3) {
        div3.style.width = `${w3}px`;
        w3 += 5;
        out3.textContent = div3.style.width;
    }
}
if (div3) {
    div3.addEventListener('click', t3);
}

// Task 4 ============================================
/*  Добавьте на блок .div-4 событие двойной клик и по двойному клику запуск функции t4. Функция должна возвращать и выводить на экран содержимое блока (только текст). Вывод осуществляется в out-4. */
const div4: HTMLElement | null = document.querySelector('.div-4');
const out4: HTMLElement | null = document.querySelector('.out-4');
function t4(): void {
    if (div4 && out4) {
        out4.textContent = div4.textContent;
    }
}
if (div4) {
    div4.addEventListener('dblclick', t4);
}

// Task 5 ============================================
/*  Дан блок .div-5.active. Добавьте на него событие двойной клик, по которому удалется класс active если он есть и добавляется если такого класса нет. */
const div5: HTMLElement | null = document.querySelector('.div-5');
function t5(): void {
    if (div5) {
        div5.classList.toggle('active');
    }
}
if (div5) {
    div5.addEventListener('dblclick', t5);
}

// Task 6 ============================================
/*  Дан блок .div-6 и список .ul-6. При двойном клике на блоке скрывайте .ul-6 еcли он показан и показывайте если скрыт. Скрытие и показ делайте через добавление - удаление класса .hide */
const div6: HTMLElement | null = document.querySelector('.div-6');
const ul6: HTMLElement | null = document.querySelector('.ul-6');
function t6(): void {
    if (ul6) {
        ul6.classList.toggle('hide');
    }
}
if (div6) {
    div6.addEventListener('dblclick', t6);
}

// Task 7 ============================================
/*  Дан блок .div-7. При клике правой кнопкой мыши на блоке добавляйте ему класс .active. При повторном клике - удаляйте. */
const div7: HTMLElement | null = document.querySelector('.div-7');
function t7(event: MouseEvent): void {
    event.preventDefault();
    if (div7) {
        div7.classList.toggle('active');
    }
}
if (div7) {
    div7.addEventListener('contextmenu', t7);
}

// Task 8 ============================================
/*  Дано checkbox .ch-8. Повесьте на него событие onchange при котором на документе отключается клик правой кнопкой мыши если checkbox выбран и отключает если не выбран. */
const ch8: HTMLInputElement | null = document.querySelector('.ch-8');
function t8(): void {
    if (ch8) {
        if (ch8.checked) {
            document.addEventListener('contextmenu', deleteEvent);
        } else {
            document.removeEventListener('contextmenu', deleteEvent);
        }
    }
}
function deleteEvent(event: MouseEvent): void {
    event.preventDefault();
}
if (ch8) {
    ch8.addEventListener('change', t8);
}

// Task 9 ============================================
/*  Дан блок .div-9. Внутри блока - изображение 1.png. При клике правой кнопкой мыши  - меняйте изображение на 2.png. Надеюсь вы догадаетесь изменить только src изображения? */
const div9: HTMLElement | null = document.querySelector('.div-9');
function t9(event: MouseEvent): void {
    event.preventDefault();
    if (div9) {
        const img: HTMLImageElement | null = div9.querySelector('img');
        if (img) {
            img.src = 'img/2.png';
        }
    }
}
if (div9) {
    div9.addEventListener('contextmenu', t9);
}

// Task 10 ============================================
/*  Дан блок .div-10. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png. */
const div10: HTMLElement | null = document.querySelector('.div-10');
function t10(): void {
    if (div10) {
        const img: HTMLImageElement | null = div10.querySelector('img');
        if (img) {
            img.src = 'img/2.png';
        }
    }
}
if (div10) {
    div10.addEventListener('mouseenter', t10);
}

// Task 11 ============================================
/*  Дан блок .div-11. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png. При уведении мыши - mouseleave - возвращайте исходное изображение. */
const div11: HTMLElement | null = document.querySelector('.div-11');
function t11(event: MouseEvent): void {
    if (div11) {
        const img: HTMLImageElement | null = div11.querySelector('img');
        if (img) {
            if (event.type === 'mouseenter') {
                img.src = 'img/2.png';
            } else if (event.type === 'mouseleave') {
                img.src = 'img/1.png';
            }
        }
    }
}
if (div11) {
    div11.addEventListener('mouseenter', t11);
    div11.addEventListener('mouseleave', t11);
}

// Task 12 ============================================
/*  Дан блок .div-12. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. */
const div12: HTMLElement | null = document.querySelector('.div-12');
function t12(): void {
    if (div12) {
        div12.classList.add('active');
    }
}
if (div12) {
    div12.addEventListener('mousedown', t12);
}

// Task 13 ============================================
/*  Дан блок .div-13. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. Добавьте ему событие mouseup - при отпускании мыши - удаляйте класс active. */
const div13: HTMLElement | null = document.querySelector('.div-13');
function t13(event: MouseEvent): void {
    if (div13) {
        if (event.type === 'mousedown') {
            div13.classList.add('active');
        } else if (event.type === 'mouseup') {
            div13.classList.remove('active');
        }
    }
}
if (div13) {
    div13.addEventListener('mousedown', t13);
    div13.addEventListener('mouseup', t13);
}

// Task 14 ============================================
/*  Дан блок .div-14. При нажатии кнопки b-14 добавляйте к нему событие onclick - которое, при клике добавляем блоку div-14 класс active. */
const div14: HTMLElement | null = document.querySelector('.div-14');
const b14: HTMLElement | null = document.querySelector('.b-14');
function t14(): void {
    if (div14) {
        div14.classList.add('active');
    }
}
if (b14) {
    b14.addEventListener('click', t14);
}

// Task 15 ============================================
/*  Дан блок .div-15. Добавьте на него событие move. При каждом движении мыши увеличивайте число внутри на 1. */
const div15: HTMLElement | null = document.querySelector('.div-15');
let a: number = div15 ? parseInt(div15.textContent || '0') : 0;
function t15(): void {
    if (div15) {
        a++;
        div15.textContent = a.toString();
    }
}
if (div15) {
    div15.addEventListener('mousemove', t15);
}

// Task 16 ============================================
/*  Дан блок .div-16. Добавьте на него событие move. При каждом движении мыши увеличивайте ширину блока на 1px. */
const div16: HTMLElement | null = document.querySelector('.div-16');
let elemWidth: number = div16 ? parseInt(div16.style.width) || 0 : 0;
function t16(): void {
    if (div16) {
        elemWidth++;
        div16.style.width = `${elemWidth}px`;
    }
}
if (div16) {
    div16.addEventListener('mousemove', t16);
}

// Task 17 ============================================
/*  Дано две кнопки - b-17_on и b-17_off. Напишите фукнции t17On и t17Off которые включают и отключают событие move в задании 16. */
const b17ON: HTMLElement | null = document.querySelector('.b-17_on');
const b17OFF: HTMLElement | null = document.querySelector('.b-17_off');
function t17On(): void {
    if (div16) {
        div16.addEventListener('mousemove', t16);
    }
}
function t17Off(): void {
    if (div16) {
        div16.removeEventListener('mousemove', t16);
    }
}
if (b17ON) {
    b17ON.addEventListener('click', t17On);
}
if (b17OFF) {
    b17OFF.addEventListener('click', t17Off);
}

// Task 18 ============================================
/*  Дан блок div-18. Напишите фукнцию t18 которая выводит в данный блок его ширину при событии onmouseenter. */
const div18: HTMLElement | null = document.querySelector('.div-18');
function t18(): void {
    if (div18) {
        div18.textContent = `${div18.offsetWidth}px`;
    }
}
if (div18) {
    div18.addEventListener('mouseenter', t18);
}

// Task 19 ============================================
/*  Дан блок div-19. Напишите фукнцию t19 которая выводит в данный блок его классы при событии onmouseout. */
const div19: HTMLElement | null = document.querySelector('.div-19');
function t19(): void {
    if (div19) {
        div19.textContent = div19.classList.toString();
    }
}
if (div19) {
    div19.addEventListener('mouseout', t19);
}

// Task 20 ============================================
/*  Дан элемент progress. Напишите фукнцию t20 которая увеличивает его value на 1 при каждом событии mousemove внутри progress. */
const bar: HTMLProgressElement | null = document.querySelector('progress');
function t20(): void {
    if (bar) {
        bar.value++;
    }
}
if (bar) {
    bar.addEventListener('mousemove', t20);
};
export{}