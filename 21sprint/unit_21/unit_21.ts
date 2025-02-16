// Task 1 ============================================
/* Создайте блок div-1. Добавьте на него событие touchstart. Выведите в out-1 слово  touch если событие сработает. */

function t1(): void {
    const out1: HTMLElement | null = document.querySelector('.out-1');
    if (out1) {
        out1.innerHTML = 'touch';
    }
}

const div1: HTMLElement | null = document.querySelector('.div-1');
if (div1) {
    div1.addEventListener('touchstart', t1);
}

// Task 2 ============================================
/* Создайте блок div-2. Добавьте на него событие touchstart. Выведите в out-2 число срабатываний события. */

function t2(event: TouchEvent): void {
    const out2: HTMLElement | null = document.querySelector('.out-2');
    if (out2) {
        out2.innerHTML = event.touches.length.toString();
    }
}

const div2: HTMLElement | null = document.querySelector('.div-2');
if (div2) {
    div2.addEventListener('touchstart', t2);
}

// Task 3 ============================================
/*  Создайте блок div-3_1 и div-3_2. Добавьте на них событие touchstart. Выведите в out-3 номер блока 1 или 2 на котором сработало событие. */

function t3(event: TouchEvent): void {
    const out3: HTMLElement | null = document.querySelector('.out-3');
    if (out3) {
        const target: HTMLElement = event.target as HTMLElement;
        if (target.classList.contains('div-3_1')) {
            out3.innerHTML = '1';
        } else if (target.classList.contains('div-3_2')) {
            out3.innerHTML = '2';
        }
    }
}

const div3_1: HTMLElement | null = document.querySelector('.div-3_1');
const div3_2: HTMLElement | null = document.querySelector('.div-3_2');
if (div3_1) {
    div3_1.addEventListener('touchstart', t3);
}
if (div3_2) {
    div3_2.addEventListener('touchstart', t3);
}

// Task 4 ============================================
/*  Создайте блок div-4. И кнопку b-4. При нажатии кнопки - добавляйте событие ontouchstart на блок div-4. При событии происходит вывод текста touch в out-4.  */

function t4(): void {
    const out4: HTMLElement | null = document.querySelector('.out-4');
    if (out4) {
        out4.innerHTML = 'touch';
    }
}

const b4: HTMLElement | null = document.querySelector('.b-4');
if (b4) {
    b4.addEventListener('touchstart', t4);
}

// Task 5 ============================================
/*  Дана кнопка b-5. При ее нажатии очищайте событие ontouchstart на блоке div-4. */

function t5(): void {
    const div4: HTMLElement | null = document.querySelector('.div-4');
    if (div4) {
        div4.ontouchstart = null;
    }
}

const b5: HTMLElement | null = document.querySelector('.b-5');
if (b5) {
    b5.addEventListener('touchstart', t5);
}

// Task 6 ============================================
/*  Добавьте событие ontouchend на div-4. При его срабатывании выведите в out-6 слово touchend. */

function t6(): void {
    const out6: HTMLElement | null = document.querySelector('.out-6');
    if (out6) {
        out6.innerHTML = 'touchend';
    }
}

const div4: HTMLElement | null = document.querySelector('.div-4');
if (div4) {
    div4.addEventListener('touchend', t6);
}

// Task 7 ============================================
/*  Дан блок div-7. Добавьте событие touch, при срабатывании которого окрашивайте блок в красный цвет. */

function t7(): void {
    const div7: HTMLElement | null = document.querySelector('.div-7');
    if (div7) {
        div7.style.backgroundColor = 'red';
    }
}

const div7: HTMLElement | null = document.querySelector('.div-7');
if (div7) {
    div7.addEventListener('touchstart', t7);
}

// Task 8 ============================================
/*  Дан блок div-8. Добавьте на него событие touch, которое при срабатывании окрашивает блок случаным цветом из массива a8=[red, green, blue, orange, pink, yellow] */

const a8: string[] = ['red', 'green', 'blue', 'orange', 'pink', 'yellow'];

function t8(): void {
    const div8: HTMLElement | null = document.querySelector('.div-8');
    if (div8) {
        const randomColor: string = a8[Math.floor(Math.random() * a8.length)];
        div8.style.backgroundColor = randomColor;
    }
}

const div8: HTMLElement | null = document.querySelector('.div-8');
if (div8) {
    div8.addEventListener('touchstart', t8);
}

// Task 9 ============================================
/* Дан блок div-9. Добавьте событие ontouch. Выводите количество одновременных касаний в out-9. */

function t9(event: TouchEvent): void {
    const div9: HTMLElement | null = document.querySelector('.div-9');
    if (div9) {
        div9.innerHTML = event.touches.length.toString();
    }
}

const div9: HTMLElement | null = document.querySelector('.div-9');
if (div9) {
    div9.addEventListener('touchend', t9);
}

// Task 10 ============================================
/*  Дан блок div-10. Добавьте на него событие touchmove. При срабатывании события - увеличивайте его ширину на 1. */

function t10(): void {
    const div10: HTMLElement | null = document.querySelector('.div-10');
    if (div10) {
        const curWidth: number = parseFloat(div10.style.width) || div10.offsetWidth;
        const newWidth: number = curWidth + 1;
        div10.style.width = `${newWidth}px`;
    }
}

const div10: HTMLElement | null = document.querySelector('.div-10');
if (div10) {
    div10.addEventListener('touchmove', t10);
}

// Task 11 ============================================
/*  Дан блок div-11. Добавьте на него событие touch. При срабатывании выводите радиус события radiusX, radiusY. */

function t11(event: TouchEvent): void {
    const div11: HTMLElement | null = document.querySelector('.div-11');
    if (div11) {
        const radiusX: number = event.touches[0].radiusX;
        const radiusY: number = event.touches[0].radiusY;
        div11.innerHTML = `${radiusX}x${radiusY}`;
    }
}

const div11: HTMLElement | null = document.querySelector('.div-11');
if (div11) {
    div11.addEventListener('touchmove', t11);
}

// Task 12 ============================================
/*  Мини проект. Ознакомьтесь с версткой в задании 12.
<p>Изучите html код внутри div-12-wrapper.</p>
<p>1. Добавьте на кнопку nex событие click, touch так, чтобы при событии запускалась функция nextFunction и активным становилось изображение следующее за выделенным классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>2. Добавьте на кнопку prev событие click, touch так, чтобы при событии запускалась функция prevFunction и активным становилось изображение до выделенного классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>3. Учтите краевые эффекты - когда мы доходим до конца или начала, то нажатие кнопки должно приводить к перемещению рамки в начало или конец изображений.</p>
<p>4. Добавьте кнопку reset (функция resetFunction), нажатие которой сбрасывает активное изображение на нулевое. </p>
<p>5. Добавьте во все действия следующее - в изображении img-12-max заменяется src на активную. Т.е. произошло событие - заменилась главная картинка.</p>
*/

const images: NodeListOf<HTMLElement> = document.querySelectorAll('.img-12-min');
let count: number = 0; // переменная, которая указывает на номер активного изображения в images

const next: HTMLElement | null = document.querySelector('.next');
if (next) {
    next.addEventListener('click', nextFunction);
    next.addEventListener('touchstart', nextFunction);
}

const prev: HTMLElement | null = document.querySelector('.prev');
if (prev) {
    prev.addEventListener('click', prevFunction);
    prev.addEventListener('touchstart', prevFunction);
}

const resetButton: HTMLElement | null = document.querySelector('.reset');
if (resetButton) {
    resetButton.addEventListener('click', resetFunction);
    resetButton.addEventListener('touchstart', resetFunction);
}

function nextFunction(): void {
    count++;
    const activeIndex: number = count % images.length;
    const passiveIndex: number = (count - 1 + images.length) % images.length;
    const active: HTMLElement = images[activeIndex];
    const passive: HTMLElement = images[passiveIndex];
    active.classList.add('active-img');
    passive.classList.remove('active-img');
    const imgMax: HTMLImageElement | null = document.querySelector('img.img-12-max');
    if (imgMax) {
        imgMax.src = active.getAttribute('src') || '';
    }
}

function prevFunction(): void {
    count--;
    if (count < 0) {
        count = images.length - 1;
    }
    const activeIndex: number = count % images.length;
    const passiveIndex: number = (count + 1) % images.length;
    const active: HTMLElement = images[activeIndex];
    const passive: HTMLElement = images[passiveIndex];
    active.classList.add('active-img');
    passive.classList.remove('active-img');
    const imgMax: HTMLImageElement | null = document.querySelector('img.img-12-max');
    if (imgMax) {
        imgMax.src = active.getAttribute('src') || '';
    }
}

function resetFunction(): void {
    count = 0;
    images.forEach((img: HTMLElement, index: number) => {
        if (index === 0) {
            img.classList.add('active-img');
        } else {
            img.classList.remove('active-img');
        }
    });
    const imgMax: HTMLImageElement | null = document.querySelector('img.img-12-max');
    if (imgMax) {
        imgMax.src = images[0].getAttribute('src') || '';
    }
}