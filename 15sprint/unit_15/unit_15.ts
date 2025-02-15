// Task 1
// Создайте set s1. Добавьте в него три элемента 'h', 'b', 'o', 'h'. Добавление делайте через add. Выведите в консоль получившийся набор (set) s1.

let s1: Set<string> = new Set();
s1.add('h');
s1.add('b');
s1.add('o');
s1.add('h'); // Duplicate 'h' will be ignored

console.log(s1);

// Task 2
// При нажатии b-2 выполняете функцию f2. Функция должна добавить в набор s2 элементы, которые пользователь вводит в i-2. Функция должна выводить в консоль s2 после каждого добавления элемента.

let s2: Set<string> = new Set();

const f2 = (): void => {
    const inData = document.querySelector('.i-2') as HTMLInputElement;
    s2.add(inData.value);
    console.log(s2);
};

document.querySelector('.b-2')!.addEventListener('click', f2);

// Task 3
// При нажатии b-3 выполняете функцию f3. Функция должна удалить из набора s3 строку, которую пользователь вводит в i-3. Функция должна выводить в консоль s3 после каждого удаления элемента.

let s3: Set<string> = new Set(['one', 'two', 'four']);

const f3 = (): void => {
    const inData = document.querySelector('.i-3') as HTMLInputElement;
    s3.delete(inData.value);
    console.log(s3);
};

document.querySelector('.b-3')!.addEventListener('click', f3);

// Task 4
// При нажатии b-4 выполняете функцию f4. Функция должна проверить наличие в наборе s4 строки введенной пользователем в i-4. Если строка есть - то вывести в out-4 true. Если нет - false.

let s4: Set<string> = new Set(['a', 'b', 'c', 'z']);

const f4 = (): void => {
    const inData = document.querySelector('.i-4') as HTMLInputElement;
    const out = document.querySelector('.out-4') as HTMLElement;
    out.innerHTML = s4.has(inData.value) ? 'true' : 'false';
};

document.querySelector('.b-4')!.addEventListener('click', f4);

// Task 5
// При нажатии b-5 выполняете функцию f5. Функция должна вывести в out-5 количество элементов в наборе s5.

let s5: Set<string> = new Set(['a', 'b', 'c', 'z', 'a2', 'b2', 'c2', 'z2']);

const f5 = (): void => {
    const out = document.querySelector('.out-5') as HTMLElement;
    out.innerHTML = s5.size.toString();
};

document.querySelector('.b-5')!.addEventListener('click', f5);

// Task 6
// При нажатии b-6 выполняете функцию f6. Функция должна вывести в out-6 число уникальных элементов в массиве a6. Решение должно использовать set.

let a6: number[] = [1, 2, 3, 4, 5, 3, 4, 5, 2, 4, 5, 3, 24, 5, 2, 4, 56, 4, 3, 2, 335, 2, 23, 41, 3, 4, 1, 1, 4, 2, 2, 4, 5, 24, 5, 3, 22, 56];

const f6 = (): void => {
    const s6: Set<number> = new Set(a6);
    const out = document.querySelector('.out-6') as HTMLElement;
    out.innerHTML = s6.size.toString();
};

document.querySelector('.b-6')!.addEventListener('click', f6);

// Task 7
// При нажатии b-7 выполняете функцию f7. Функция должна получать из i-7 значение пароля и проверять, чтобы пользователь в строке пароля использовал не повторяющиеся символы. Если символы уникальны, а длина пароля больше (строго) 6, то выводите в out-7 число 1. Если есть повторяющиеся символы, или длина меньше или равна 6 - то выводите 0. Для проверки уникальности символов используйте Set.

const f7 = (): void => {
    const out = document.querySelector('.out-7') as HTMLElement;
    const inData = (document.querySelector('.i-7') as HTMLInputElement).value;
    const s7: Set<string> = new Set(inData.split(''));
    out.innerHTML = (inData.length === s7.size && s7.size > 6) ? '1' : '0';
};

document.querySelector('.b-7')!.addEventListener('click', f7);

// Task 8
// При нажатии b-8 выполняете функцию f8. Функция должна перебрать набор s8 и добавить в массив ar8 только числа больше 5. Выведите массив в консоль.

let s8: Set<number> = new Set([1, 2, 3, 4, 5, 3, 4, 7, 9, 5, 7, 8, 9, 23, 45, 5, 2, 4, 5, 3, 24, 5, 2, 4, 56, 4, 3, 2, 335, 2, 23, 41, 3, 4, 1, 1, 4, 2, 2, 4, 5, 24, 5, 3, 22, 56]);
let ar8: number[] = [];

const f8 = (): void => {
    for (let item of s8) {
        if (item > 5) ar8.push(item);
    }
    console.log(ar8);
};

document.querySelector('.b-8')!.addEventListener('click', f8);

// Task 9
// При нажатии b-9 выполняете функцию f9. Функция должна принимать набор our_set в качестве параметра, преобразовывать его в строку, причем после каждого символа строки должен быть пробел. Функция должна возвращать результирующую строку.
// В нашем примере результат должен быть 9 8 7 6 5

const f9 = (our_set: Set<number>): string => {
    return Array.from(our_set).join(' ');
};

document.querySelector('.b-9')!.addEventListener('click', () => {
    const s9: Set<number> = new Set([9, 8, 7, 6, 5]);
    const out = document.querySelector('.out-9') as HTMLElement;
    out.innerHTML = f9(s9);
});

// Task 10
// При нажатии b-10 выполняете функцию f10. Функция должна принимать набор set в качестве параметра и выводить его в указанный элемент. Элемент указывается как второй параметр функции f10. Вывод значений - через пробел.

const f10 = (out_set: Set<string>, elem: string): void => {
    const result = Array.from(out_set).join(' ');
    const out = document.querySelector(elem) as HTMLElement;
    out.innerHTML = result;
};

document.querySelector('.b-10')!.addEventListener('click', () => {
    const a10: Set<string> = new Set(['4', '5', '6']);
    f10(a10, '.out-10');
});

// Task 11
// Изучите функцию f11 и ее работу. Разберитесь почему два массива добавлены в Set.
// Да, эта задача решена! Просто разберитесь.

const f11 = (): void => {
    const s: Set<number[]> = new Set();
    s.add([1]);
    s.add([1]);
    console.log(s); // Both arrays are added because they are different objects in memory
};

document.querySelector('.b-11')!.addEventListener('click', f11);

// Task 12
// При нажатии b-12 выполняете функцию f12. Функция должна преобразовать строку str12 в массив, так, что каждая буква - отдельный элемент массива. Потом создать набор на основе массива и возвратить его.

const str12: string = 'The name conjures up visions of plum pudding and Christmas punch quaint coaching inns and cozy firesides but also of orphaned and starving children';

const f12 = (): Set<string> => {
    return new Set(str12.split(''));
};

document.querySelector('.b-12')!.addEventListener('click', () => {
    console.log(f12());
});

// Task 13
// При нажатии b-13 выполняете функцию f13. Функция должна посчитать, сколько каждый символ входит в строку. Результат в виде объекта (ключи - символы, значения - сколько символ встречается в строке) возвратить.

const str13: string = 'abbat pro';

interface CharCount {
    [key: string]: number;
}

const f13 = (): CharCount => {
    const res: CharCount = {};
    const s13: Set<string> = new Set(str13);
    for (let s of s13) {
        let count = 0;
        for (let i = 0; i < str13.length; i++) {
            if (s === str13[i]) count++;
        }
        res[s] = count;
    }
    return res;
};

document.querySelector('.b-13')!.addEventListener('click', () => {
    console.log(f13());
});
export{}