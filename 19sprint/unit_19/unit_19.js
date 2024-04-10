
// Task 1 ============================================
/* Добавьте на блок .div-1 событие клик и по клику запуск функции t1. Функция должна возвращать и выводить на экран содержимое блока (только текст). Вывод осуществляется в out-1.  */
let out = document.querySelector('.div-1');
let res = document.querySelector('.out-1');
function t1() {
    return res.textContent = out.textContent;
}
out.addEventListener('click', t1);


// Task 2 ============================================
/*  Добавьте на блок .div-2 событие клик и по клику запуск функции t2. Функция должна возвращать true или false в зависимости от того, нажата ли клавиша alt или нет в момент клика. Также, выводите на экран результат. Вывод осуществляется в out-2. */
let div2 = document.querySelector('.div-2');
let out2 = document.querySelector('.out-2');
function t2(event) {
    if (event.altKey) {
        return out2.textContent = 'true';
    } else {
        return out2.textContent = 'false';
    }
}
div2.addEventListener('click', t2);



// Task 3 ============================================
/*  Добавьте на блок .div-3 событие клик. При клике - увеличивайте ширину блока на 5px. Каждый клик - увеличение ширины на 5px. 10 кликов - на 50px. Ширину выводите в out-3. */

let w3 = 75;
let div3 = document.querySelector('.div-3')
let out3 = document.querySelector('.out-3');
function t3() {
    div3.style.width = w3 + 'px';
    w3 += 5;
    out3.textContent = div3.style.width;
}

div3.addEventListener('click', t3)

// Task 4 ============================================
/*  Добавьте на блок .div-4 событие двойной клик и по двойному клику запуск функции t4. Функция должна возвращать и выводить на экран содержимое блока (только текст). Вывод осуществляется в out-4. */
let div4 = document.querySelector('.div-4')
let out4 = document.querySelector('.out-4');

function t4() {
    return out4.textContent = div4.textContent
        ;
}
div4.addEventListener('dblclick', t4)
// Task 5 ============================================
/*  Дан блок .div-5.active. Добавьте на него событие двойной клик, по которому удалется класс active если он есть и добавляется если такого класса нет. */
let div5 = document.querySelector('.div-5');
function t5(event) {
    div5.classList.toggle('active');
}

div5.addEventListener('dblclick', t5)
// Task 6 ============================================
/*  Дан блок .div-6 и список .ul-6. При двойном клике на блоке скрывайте .ul-6 еcли он показан и показывайте если скрыт. Скрытие и показ делайте через добавление - удаление класса .hide */
let div6 = document.querySelector('.div-6');
let ul6 = document.querySelector('.ul-6');
function t6() {
    ul6.classList.toggle('hide')
}

div6.addEventListener('dblclick', t6)

// Task 7 ============================================
/*  Дан блок .div-7. При клике правой кнопкой мыши на блоке добавляйте ему класс .active. При повторном клике - удаляйте. */
let div7 = document.querySelector('.div-7');
function t7() {
    div7.classList.toggle('active');
}

div7.addEventListener('contextmenu', t7)
// Task 8 ============================================
/*  Дано checkbox .ch-8. Повесьте на него событие onchange при котором на документе отключается клик правой кнопкой мыши если checkbox выбран и отключает если не выбран. */
let ch8 = document.querySelector('.ch-8');//выбираю элемент
function t8(event) {
    if (ch8.checked) {//если нажато то
        ch8.addEventListener('contextmenu', deleteEvent)// контекст не работает
    } else {
        ch8.removeEventListener('contextmenu', deleteEvent)// контекст работает
    }
    function deleteEvent(event) {
        event.preventDefault();
    }
}

ch8.addEventListener('change', t8)

// Task 9 ============================================
/*  Дан блок .div-9. Внутри блока - изображение 1.png. При клике правой кнопкой мыши  - меняйте изображение на 2.png. Надеюсь вы догадаетесь изменить только src изображения? */
let div9 = document.querySelector('.div-9');
function t9() {
    let img = div9.querySelector('img');
    img.setAttribute('src', 'img/2.png')

}

div9.addEventListener('contextmenu', t9)

// Task 10 ============================================
/*  Дан блок .div-10. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png. */
/*  Дан блок .div-9. Внутри блока - изображение 1.png. При клике правой кнопкой мыши  - меняйте изображение на 2.png. Надеюсь вы догадаетесь изменить только src изображения? */
let div10 = document.querySelector('.div-10');
function t10() {
    let img = div10.querySelector('img');
    img.setAttribute('src', 'img/2.png');

}

div10.addEventListener('mouseenter', t10)

// Task 11 ============================================
/*  Дан блок .div-11. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png. При уведении мыши - mouseleave - возвращайте исходное изображение. */
let div11 = document.querySelector('.div-11');
function t11(event) {
    let img = div11.querySelector('img');
    if (event.type === 'mouseenter') {
        img.setAttribute('src', 'img/2.png')
    } else if (event.type === 'mouseleave') {
        img.setAttribute('src', 'img/1.png')
    }
}

div11.addEventListener('mouseenter', t11)
div11.addEventListener('mouseleave', t11)

// Task 12 ============================================
/*  Дан блок .div-12. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. */
let div12 = document.querySelector('.div-12');
function t12() {
    div12.classList.add('active')
}
div12.addEventListener('mousedown', t12)

// Task 13 ============================================
/*  Дан блок .div-13. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. Добавьте ему событие mouseup - при отпускании мыши - удаляйте класс active. */
let div13 = document.querySelector('.div-13');
function t13(event) {
    if (event.type === 'mousedown') {
        div13.classList.add('active')
    } else if (event.type === 'mouseup') {
        div13.classList.remove('active')
    }
}
div13.addEventListener('mousedown', t13)
div13.addEventListener('mouseup', t13)
// Task 14 ============================================
/*  Дан блок .div-14. При нажатии кнопки b-14 добавляйте к нему событие onclick - которое, при клике добавляем блоку div-14 класс active. */
let div14 = document.querySelector('.div-14');
function t14() {
    div14.classList.add('active');
}
document.querySelector('.b-14').onclick = t14;


// Task 15 ============================================
/*  Дан блок .div-15. Добавьте на него событие move. При каждом движении мыши увеличивайте число внутри на 1. */
let div15 = document.querySelector('.div-15');
let a = +div15.textContent;
function t15() {
    ++a;
    div15.textContent = a;

}
div15.addEventListener('mousemove', t15)

// Task 16 ============================================
/*  Дан блок .div-16. Добавьте на него событие move. При каждом движении мыши увеличивайте ширину блока на 1px. */
let div16 = document.querySelector('.div-16');
let elemWidth = div16.style.width
function t16() {
    div16.style.width = elemWidth + 'px';
    elemWidth++

}
div16.addEventListener('mousemove', t16)

// Task 17 ============================================
/*  Дано две кнопки - b-17_on и b-17_off. Напишите фукнции t17On и t17Off которые включают и отключают событие move в задании 16. */

let b17ON = document.querySelector('.b-17_on');
let b17OFF = document.querySelector('.b-17_off');
function t17On() {
    div16.addEventListener('mousemove', t16);

}
function t17Off() {
    div16.removeEventListener('mousemove', t16);
}
b17ON.addEventListener('click', t17On)// ваше событие здесь!!!
b17OFF.addEventListener('click', t17Off)// ваше событие здесь!!!

// Task 18 ============================================
/*  Дан блок div-18. Напишите фукнцию t18 которая выводит в данный блок его ширину при событии onmouseenter. */
let div18 = document.querySelector('.div-18');
function t18() {
    div18.textContent = div18.offsetWidth + 'px';
}
div18.addEventListener('mouseenter', t18)
// Task 19 ============================================
/*  Дан блок div-19. Напишите фукнцию t19 которая выводит в данный блок его классы при событии onmouseout. */
let div19 = document.querySelector('.div-19');
function t19() {
    div19.textContent = div19.classList;
}
div19.addEventListener('mouseout', t19)


// Task 20 ============================================
/*  Дан элемент progress. Напишите фукнцию t20 которая увеличивает его value на 1 при каждом событии mousemove внутри progress. */
let bar = document.querySelector('progress')
console.log(bar)
function t20() {
    bar.value++
}
bar.addEventListener('mousemove', t20)