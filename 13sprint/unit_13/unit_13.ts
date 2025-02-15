// Task 1
// При нажатии b-1 выполняете функцию f1. Функция должна вывести в out-1 значение сохраненное под ключем two из массива a1. Возвратите это значение.

function f1(): number {
    interface Iobj1 {
        "one": number;
        "two": number;
        "five": number;
    }
    let a1: Iobj1 = {
        "one": 15,
        "two": 16,
        "five": 20
    };
    let out: string = '';
    for (let key in a1) {
        if (key == 'two') {
            out += a1.two;
        }
    }
    document.querySelector('.out-1')!.innerHTML = out;
    return a1.two;
}

document.querySelector('.b-1')!.addEventListener('click', f1);

// Task 2
// При нажатии b-2 выполняете функцию f2. Функция должна вывести в out-2 значение hi из массива a2. Возвратите это значение.
// Вывод, как и в предыдущем задании пишем "руками"

function f2(): string {
    // Define a type for the object structure
    type a2Type = string;

    // Define an interface for the object with an index signature
    interface Ia2Obj {
        [key: string]: a2Type; // Index signature
        one: a2Type;
        two: a2Type;
        five: a2Type;
    }

    // Initialize the object with the required structure
    const a2: Ia2Obj = {
        one: "hello",
        two: "mahai",
        five: "hi"
    };

    // Initialize an empty string to store the result
    let out: string = '';

    // Iterate over the keys of the object
    for (let key in a2) {
        // Check if the current value is 'hi'
        if (a2[key] === 'hi') {
            out += a2[key];
        }
    }

    // Return the result
    return out;
}document.querySelector('.b-2')!.addEventListener('click', () => {
    document.querySelector('.out-2')!.innerHTML = f2();
});

// Task 3
// При нажатии b-3 выполняете функцию f3. Функция должна вывести в out-3 значения hi из массива a3. Возвратите результирующую строку значение. Вывод - через пробел.
// Вывод, как и в предыдущем задании пишем "руками"

function f3(): string {
    let a3: { [key: string]: string | number } = {
        "one": "hello",
        "two": "mahai",
        "five": "hi",
        "test": 21,
        "odd": "hi",
        "mix": "mix"
    };
    let out: string = '';
    for (let key in a3) {
        if (a3[key] == 'hi') {
            out += a3[key] + ' ';
        }
    }
    return out.trim();
}

document.querySelector('.b-3')!.addEventListener('click', () => {
    document.querySelector('.out-3')!.innerHTML = f3();
});

// Task 4
// Давайте напишем функцию f4, которая будет выводить массив a4 в out-4 при нажатии кнопки b-4. Формат вывода - ключ пробел значение +' <br>'. Функция должна возвращать строку в указанном формате вывода.
// Обратите внимание на пробел перед br!!!!!!!!!

let a4: { [key: string]: string | number } = {
    "one": "hello",
    "two": "mahai",
    "five": "hi",
    "test": 21,
    "odd": "hi",
    "mix": "mix"
};

function f4(): string {
    let out: string = '';
    for (let key in a4) {
        out += key + ' ' + a4[key] + ' <br>';
    }
    return out;
}

document.querySelector('.b-4')!.addEventListener('click', () => {
    document.querySelector('.out-4')!.innerHTML = f4();
});

// Task 5
// Функция f4 жестко привязана к массиву a4. Это не удобно. Давайте напишем функцию f5, которая принимает массив как параметр и выводит его в формате указанном в функции в указанный блок (как второй параметр).

function f5(arr: { [key: string]: any }, block: string): void {
    let out: string = '';
    for (let key in arr) {
        out += `${key} : ${arr[key]} <br>`;
    }
    document.querySelector(block)!.innerHTML = out;
}

document.querySelector('.b-5')!.addEventListener('click', () => {
    let a5: { [key: string]: number } = {
        "one": 1,
        "two": 2
    };
    f5(a5, '.out-5');
});

// Task 6
// Добавьте input .i-61 и i-62. При нажатии b-6 выполняете функцию f6. Функция должна получать из i-61 ключ, а из i-62 значение и добавлять его в массив a6. После этого, с помощью функции f5 выводите массив a6 в out-6.

let a6: { [key: string]: string } = {
    "b": "17",
    "e": "22"
};

function f6(): void {
    let input1: string = (document.querySelector('.i-61') as HTMLInputElement).value;
    let input2: string = (document.querySelector('.i-62') as HTMLInputElement).value;
    a6[input1] = input2;
    f5(a6, '.out-6');
}

document.querySelector('.b-6')!.addEventListener('click', f6);

// Task 7
// Добавьте input .i-7. При нажатии b-7 выполняете функцию f7. Функция должна получать из i-7 ключ. Если такой ключ есть в a7 то выводить 1 в out-7, если нет - 0.

let a7: { [key: string]: number } = {
    "b": 17,
    "e": 22
};

function f7(): void {
    let inputValue: string = (document.querySelector('.i-7') as HTMLInputElement).value;
    let out: number = inputValue in a7 ? 1 : 0;
    document.querySelector('.out-7')!.innerHTML = out.toString();
}

document.querySelector('.b-7')!.addEventListener('click', f7);

// Task 8
// Добавьте input .i-8. При нажатии b-8 выполняете функцию f8. Функция должна выводить значение в out-8, если ключ введенный в i-8 есть в массиве, если нет - 0.

let a8: { [key: string]: number } = {
    "b": 17,
    "e": 22
};

function f8(): void {
    let inputValue: string = (document.querySelector('.i-8') as HTMLInputElement).value;
    let out: string | number = inputValue in a8 ? a8[inputValue] : 0;
    document.querySelector('.out-8')!.innerHTML = out.toString();
}

document.querySelector('.b-8')!.addEventListener('click', f8);

// Task 9
// Добавьте input .i-9. При нажатии b-9 выполняете функцию f9. Функция должна вывести в out-9 все ключи массива a9, которые содержат значение, равное значению в input.i-9. Вывод через пробел. Если значений - нет - то выводить пустую строку.

let a9: { [key: string]: number } = {
    "b": 17,
    "e": 22,
    "j": 17,
    "k": 22,
    "d": 54
};

function f9(): void {
    let inputValue: number = +(document.querySelector('.i-9') as HTMLInputElement).value;
    let out: string = '';
    for (let key in a9) {
        if (a9[key] === inputValue) {
            out += key + ' ';
        }
    }
    document.querySelector('.out-9')!.innerHTML = out.trim();
}

document.querySelector('.b-9')!.addEventListener('click', f9);

// Task 10
// Давайте напишем полезную функцию f10, которая проверяет есть ли значение в ассоциативном массиве. Фукнция должна возвращать true если есть, и false если нет. Массив и значение передавать функции в качестве параметров.

function f10(arr: { [key: string]: any }, val: any): boolean {
    for (let key in arr) {
        if (arr[key] === val) {
            return true;
        }
    }
    return false;
}

document.querySelector('.b-10')!.addEventListener('click', () => {
    let a10: { [key: string]: number } = {
        "k": 22,
        "d": 54,
        "m": 22,
    };
    document.querySelector('.out-10')!.innerHTML = f10(a10, 22).toString();
});

// Task 11
// При нажатии b-11 выполняете функцию f11. Функция должна получить ключ из i-11 и удалить запись из массива a11 с таким ключем. После этого вывести массив в out-11. Для вывода используйте функцию f5.

let a11: { [key: string]: number } = {
    "b": 17,
    "e": 22,
    "j": 17,
    "k": 22,
    "d": 54
};

function f11(): void {
    let inputValue: number = Number((document.querySelector('.i-11') as HTMLInputElement).value);
    if (inputValue in a11) {
        delete a11[inputValue];
    }
    f5(a11, '.out-11');
}

document.querySelector('.b-11')!.addEventListener('click', f11);

// Task 12
// При нажатии b-12 выполняете функцию f12. Функция должна получить значение из i-12 и удалить запись из массива a12 с таким значением. После этого вывести массив в out-12. Для вывода используйте функцию f5.

let a12: { [key: string]: number } = {
    "b": 17,
    "e": 22,
    "j": 17,
    "k": 22,
    "d": 17,
};

function f12(): void {
    let inputValue: number = +(document.querySelector('.i-12') as HTMLInputElement).value;
    for (let key in a12) {
        if (a12[key] === inputValue) {
            delete a12[key];
        }
    }
    f5(a12, '.out-12');
}

document.querySelector('.b-12')!.addEventListener('click', f12);

// Task 13
// При нажатии b-13 выполняете функцию f13. Функция должна в out-13 выводить сумму значений массива a13 (только числа).

let a13: { [key: string]: string | number } = {
    'prim': 'hello',
    'one': 4,
    'testt': 'vodoley',
    'ivan': 6
};

function f13(): void {
    let num: number = 0;
    for (let key in a13) {
        if (typeof (a13[key]) === 'number') {
            num += a13[key] as number;
        }
    }
    document.querySelector('.out-13')!.innerHTML = num.toString();
}

document.querySelector('.b-13')!.addEventListener('click', f13);

// Task 14
// При нажатии b-14 выполняете функцию f14. Функция должна в out-14 выводить нулевые (по индексу) элементы вложенных массивов в a14. Вывод через пробел.
// Ожидаемый вывод - 1 3 6 9

let a14: { [key: string]: number[] } = {
    'prim': [1, 2, 23],
    'one': [3, 4, 5],
    'testt': [6, 7, 8],
    'ivan': [9, 10]
};

function f14(): void {
    let out: string = '';
    for (let key in a14) {
        out += a14[key][0] + ' ';
    }
    document.querySelector('.out-14')!.innerHTML = out.trim();
}

document.querySelector('.b-14')!.addEventListener('click', f14);

// Task 15
// При нажатии b-15 выполняете функцию f15. Функция должна в out-15 выводить элементы вложенных массивов в a15. Вывод через пробел.

let a15: { [key: string]: number[] } = {
    'prim': [1, 2, 23],
    'one': [3, 5],
    'testt': [6, 7, 8],
    'ivan': [9, 10]
};

function f15(): void {
    let out: string = '';
    for (let key in a15) {
        let a: number[] = a15[key];
        for (let i = 0; i < a.length; i++) {
            out += a[i] + ' ';
        }
    }
    document.querySelector('.out-15')!.innerHTML = out.trim();
}

document.querySelector('.b-15')!.addEventListener('click', f15);

// Task 16
// При нажатии b-16 выполняете функцию f16. Функция должна в out-16 выводить элементы name вложенных массивов в a16. Вывод через пробел.

let a16: { [key: string]: { name: string, age: number } } = {
    "iis8sj": {
        "name": "Ivan",
        "age": 27,
    },
    "iiss7j": {
        "name": "Petr",
        "age": 26,
    },
    "s3s8sj": {
        "name": "Serg",
        "age": 47,
    },
};

function f16(): void {
    let out: string = '';
    for (let key in a16) {
        out += a16[key] + ' ';
    }
    document.querySelector('.out-16')!.innerHTML = out.trim();
}

document.querySelector('.b-16')!.addEventListener('click', f16);

// Task 17
// При нажатии b-17 выполняете функцию f17. Функция должна в out-17 выводить элементы name вложенных массивов в a17 для который age > 30. Вывод через пробел.

let a17: { [key: string]: { name: string, age: number } } = {
    "iis8sj": {
        "name": "Ivan",
        "age": 27,
    },
    "iiss7j": {
        "name": "Petr",
        "age": 26,
    },
    "s3s8sj": {
        "name": "Serg",
        "age": 47,
    },
};

function f17(): void {
    let out: string = '';
    for (let key in a17) {
        if (a17[key].age > 30) {
            out += a17[key].name + ' ';
        }
    }
    document.querySelector('.out-17')!.innerHTML = out.trim();
}

document.querySelector('.b-17')!.addEventListener('click', f17);

// Task 18
// При нажатии b-18 выполняете функцию f18. Функция должна в out-18 вывести станции метро из массива a18 той ветки, которую пользователь ввел в i-18. Вывод станций - через пробел. Если ветка не найдена выводите пустую строку.

let a18: { [key: string]: string[] } = {
    "red": ['Akademmistechko', 'Nyvky', 'Universytet', 'Lisova'],
    "blue": ['Minska', 'Obolon', 'Pochaina', 'Holosiivska'],
    "green": ['Syrets', 'Zoloti Vorota', 'Klovska', 'Vidubichi']
};

function f18(): void {
    let dest: string = (document.querySelector('.i-18') as HTMLInputElement).value;
    let out: string = '';
    if (dest in a18) {
        out = a18[dest].join(' ');
    }
    document.querySelector('.out-18')!.innerHTML = out;
}

document.querySelector('.b-18')!.addEventListener('click', f18);

// Task 19
// При нажатии b-19 выполняете функцию f19. Функция должна в out-19 вывести цвет ветки станции которую пользователь ввел в i-19. Пользователь может вводить текст как с большой, так и с маленькой буквы. Если ветка не найдена - выводите пустую строку.
// Пользователь ввел Lisova - вывод red, ввел Obolon - вывод blue.

let a19: { [key: string]: string[] } = {
    "red": ['Akademmistechko', 'Nyvky', 'Universytet', 'Lisova'],
    "blue": ['Minska', 'Obolon', 'Pochaina', 'Holosiivska'],
    "green": ['Syrets', 'Zoloti Vorota', 'Klovska', 'Vidubichi']
};

function f19(): void {
    let inValue: string = (document.querySelector('.i-19') as HTMLInputElement).value.toLowerCase();
    let out: string = '';
    for (let key in a19) {
        if (a19[key].map(station => station.toLowerCase()).includes(inValue)) {
            out = key;
            break;
        }
    }
    document.querySelector('.out-19')!.innerHTML = out;
}

document.querySelector('.b-19')!.addEventListener('click', f19);

// Task 20
// При нажатии b-20 выполняете функцию f20. Функция должна в out-20 вывести название станции которые содержат переход на другую ветку. Такие станции маркируются 2. Вывод через пробел

let a20: { [key: string]: [string, number][] } = {
    "red": [['Akademmistechko', 1], ['Nyvky', 0], ['Universytet', 3], ['Lisova', 1]],
    "blue": [['Minska', 1], ['Obolon', 0], ['Pochaina', 2], ['Holosiivska', 0]],
    "green": [['Syrets', 1], ['Zoloti Vorota', 2], ['Klovska', 0], ['Vidubichi', 1]],
};

function f20(): void {
    let out: string = '';
    for (let key in a20) {
        for (let station of a20[key]) {
            if (station[1] === 2) {
                out += station[0] + ' ';
            }
        }
    }
    document.querySelector('.out-20')!.innerHTML = out.trim();
}

document.querySelector('.b-20')!.addEventListener('click', f20);
export{}