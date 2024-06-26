// В данной работе и далее под определением набор понимают Set. 

// Task 1
// Создайте set s1. Добавьте в него три элемента 'h', 'b', 'o', 'h'. Добавление делайте через add. Выведите в консоль получившийся набор (set) s1.

let s1 = new Set();
s1.add('h')
s1.add('b')
s1.add('o')
s1.add('h')

console.log(s1)


// Task 2
// При нажатии b-2 выполняете функцию f2. Функция должна добавить в набор s2 элементы, которые пользователь вводит в i-2. Функция должна выводить в консоль s2 после каждого добавления элемента.


let s2 = new Set();

const f2 = () => {
    let inData = document.querySelector('.i-2');
    s2.add(inData.value);
    console.log(s2)
}

document.querySelector('.b-2').onclick = f2;


// Task 3
// При нажатии b-3 выполняете функцию f3. Функция должна удалить из набора s3 строку, которую пользователь вводит в i-3. Функция должна выводить в консоль s3 после каждого удаления элемента.

let s3 = new Set(['one', 'two', 'four']); // обратите внимание, как просто можно добавить массив в набор!

const f3 = () => {
    let inData = document.querySelector('.i-3');
    s3.delete(inData.value);
    console.log(s3)
}

document.querySelector('.b-3').onclick = f3;


// Task 4
// При нажатии b-4 выполняете функцию f4. Функция должна проверить наличие в наборе s4 строки введенной пользователем в i-4. Если строка есть - то вывести в out-4 true. Если нет - false.

let s4 = new Set(['a', 'b', 'c', 'z']);

const f4 = () => {
    let inData = document.querySelector('.i-4');
    if (s4.has(inData.value)) {
        console.log(true)
    } else {
        console.log(false)
    }

}

document.querySelector('.b-4').onclick = f4;

// Task 5
//  При нажатии b-5 выполняете функцию f5. Функция должна вывести в out-5 количество элементов в наборе s5.


let s5 = new Set(['a', 'b', 'c', 'z', 'a2', 'b2', 'c2', 'z2']);

const f5 = () => {
    let out = document.querySelector('.out-5');
    out.innerHTML = s5.size;
}

document.querySelector('.b-5').onclick = f5;

// Task 6
// При нажатии b-6 выполняете функцию f6. Функция должна вывести в out-6 число уникальных элементов в массиве a6. Решение должно использовать set.

let a6 = [1, 2, 3, 4, 5, 3, 4, 5, 2, 4, 5, 3, 24, 5, 2, 4, 56, 4, 3, 2, 335, 2, 23, 41, 3, 4, 1, 1, 4, 2, 2, 4, 5, 24, 5, 3, 22, 56];

const f6 = () => {
    s6 = new Set(a6)
    let out = document.querySelector('.out-6');
    out.innerHTML = s6.size;

}

document.querySelector('.b-6').onclick = f6;

// Task 7
// При нажатии b-7 выполняете функцию f7. Функция должна получать из i-7 значение пароля и проверять, чтобы пользователь в строке пароля использовал не повторяющиеся символы. Если символы уникальны, а длина пароля больше ( строго) 6 то выводите в out-7 число 1. Если есть повторяющиеся символы, или длина меньше или равна 6 - то выводите 0. Для проверки уникальности символов используйте Set.

const f7 = () => {
    let out = document.querySelector('.out-7');//сюда выводим
    let inData = document.querySelector('.i-7').value//отсюда получаем
    s7 = new Set(inData.split(''))//разделяем на символы
    console.log(s7)
    if (inData.length === s7.size && s7.size > 6) {
        out.innerHTML = 1;
    } else {
        out.innerHTML = 0;

    }
}

document.querySelector('.b-7').onclick = f7;

// Task 8
// При нажатии b-8 выполняете функцию f8. Функция должна перебрать набор s8 и добавить в массив ar8 только числа больше 5. Выведите массив в консоль.

let s8 = new Set([1, 2, 3, 4, 5, 3, 4, 7, 9, 5, 7, 8, 9, 23, 45, 5, 2, 4, 5, 3, 24, 5, 2, 4, 56, 4, 3, 2, 335, 2, 23, 41, 3, 4, 1, 1, 4, 2, 2, 4, 5, 24, 5, 3, 22, 56]);
let ar8 = [];

const f8 = () => {
    for (let item of s8) {
        if (item > 5) { ar8.push(item) };
    }
    console.log(ar8)

}

document.querySelector('.b-8').onclick = f8;

// Task 9
//  При нажатии b-9 выполняете функцию f9. Функция должна принимать набор our_set в качестве параметра, преобразовывать его в строку, причем после каждого символа строки должен быть пробел. Функция должна возвращать результирующую строку. 
// В нашем примере результат должен быть 9 8 7 6 5 

const f9 = our_set => {
    let newS = Array.from(our_set);
    const result = newS.join(' ');
    return result;
}

document.querySelector('.b-9').onclick = () => {
    let s9 = new Set([9, 8, 7, 6, 5]);

    document.querySelector('.out-9').innerHTML = f9(s9);
}

// Task 10
// При нажатии b-10 выполняете функцию f10. Функция должна принимать набор set в качестве параметра и выводить его в указанный элемент. Элемент указывается как второй параметр функции f10. Вывод значений - через пробел.

const f10 = (out_set, elem) => {
    let newArr = Array.from(out_set);
    let result = newArr.join(' ')
    let out = document.querySelector(elem);
    out.innerHTML = result;
}

document.querySelector('.b-10').onclick = () => {
    let a10 = new Set(['4', '5', '6']);
    f10(a10, '.out-10');
};


// Task 11
// Изучите функцию f11 и ее работу. Разберитесь почему два массива добавлены в Set.
// Да, эта задача решена! Просто разберитесь.

const f11 = () => {
    let s = new Set();
    s.add([1]);
    s.add([1]);
    console.log(s);
}

document.querySelector('.b-11').onclick = f11;

// Task 12
//   При нажатии b-12 выполняете функцию f12. Функция должна преобразовать строку str12 в массив, так, что каждая буква - отдельный элемент массива. Потом создать набор на основе массива и возвратить его.

let str12 = 'The name conjures up visions of plum pudding and Christmas punch quaint coaching inns and cozy firesides but also of orphaned and starving children';

const f12 = () => {
    let arr = str12.split(' ');

    let arr2 = str12.split('');
    let newSet = new Set(arr2);
    return newSet;



}

document.querySelector('.b-12').onclick = () => {
    console.log(f12());
}

// Task 13
// При нажатии b-13 выполняете функцию f13. Функция должна посчитать, сколько каждый символ входит в строку. Результат в виде объекта (ключи - символы, значения - сколько символ встречается в строке) возвратить. 
// пример результата для строки 'Hello'
// должен возвратить объект типа (внешний вид и оформление
// может отличаться в разных консолях)
// { H : 1, e : 1, l : 2, o : 1 }:

let str13 = 'abbat pro';


const f13 = () => {
    let res = {};//Для начала создаем временный объект:
    let s13 = new Set(str13);//Потом создаем набор из строки - это сразу разобьет ее по символам:
    console.log(s13);
    for (let s of s13) {//Мы получаем символ который будем считать в строке.
        let count = 0;
        for (let i = 0; i < str13.length; i++) {//Теперь задача - посчитать сколько раз он встречается в строке 
            if (s === str13[i]) count++;// // проверяем совпадает ли текущий символ строки
            // с s. Если да - добавляе 1 к счетчику
        }
        res[s] = count;// нужно записать символ s и его количество в строке count в массив res

    }
    return res
}

document.querySelector('.b-13').onclick = () => {
    console.log(f13());
}
