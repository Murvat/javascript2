// Task 1 ============================================
/* При нажатии кнопки .b-1, срабатывает функция f1. Функция отсылает запрос на api.itgid.info со следующими параметрами:
url: /api/25/random/random-string
method: GET
Ответ сервера (строку случайных символов) - выводит в .out-1 */
export{}
function f1(): void {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `${URL}/api/25/random/random-string`);
    xhr.setRequestHeader('apikey', APIKEY);
    xhr.onload = function () {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.response);
            (document.querySelector('.out-1')as HTMLElement).textContent = data['random-string'];
        } else {
            console.error('Ошибка при выполнении запроса:', xhr.statusText);
        }
    };
    xhr.onerror = function () {
        console.error('Ошибка сети');
    };
    xhr.send();
}

(document.querySelector('.b-1')as HTMLElement).addEventListener('click', f1);

// Task 2 ============================================
/* При нажатии кнопки .b-2, срабатывает функция f2. Функция отсылает запрос на api.itgid.info со следующими параметрами:
url: /api/25/random/random-string
method: GET
в качестве query параметра задайте length равный числу из input .i-2
Ответ сервера (строку случайных символов длиной length) - выводите в .out-2 */

function f2(): void {
    const numLen = (document.querySelector('.i-2') as HTMLInputElement).value;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `${URL}/api/25/random/random-string?length=${numLen}`);
    xhr.setRequestHeader('apikey', APIKEY);
    xhr.onload = function () {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.response);
            (document.querySelector('.out-2')as HTMLElement).textContent = data['random-string'];
        } else {
            console.error('Ошибка при выполнении запроса:', xhr.statusText);
        }
    };
    xhr.onerror = function () {
        console.error('Ошибка сети');
    };
    xhr.send();
}

(document.querySelector('.b-2')as HTMLElement).addEventListener('click', f2);

// Task 3 ============================================
/* При нажатии кнопки .b-3 срабатывает функция f3. Функция отсылает запрос на api.itgid.info со следующими параметрами:
url: /api/25/sr/read
method: POST
если запрос отправлен верно, то будет получен массив с описаниями рас игры "Космические рейнджеры"
выведите в .out-3 названия рас (race) через пробел. */

function f3(): void {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', `${URL}/api/25/sr/read`);
    xhr.setRequestHeader('apikey', APIKEY);
    xhr.onload = function () {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.response);
            const races = data.result.map((race: any) => race.race).join(' ');
            (document.querySelector('.out-3')as HTMLElement).textContent = races;
        } else {
            console.error('Ошибка при выполнении запроса:', xhr.statusText);
        }
    };
    xhr.onerror = function () {
        console.error('Ошибка сети');
    };
    xhr.send();
}

(document.querySelector('.b-3')as HTMLElement).addEventListener('click', f3);

// Task 4 ============================================
/* При нажатии кнопки .b-4 срабатывает функция f4. Функция отсылает запрос на api.itgid.info со следующими параметрами:
url: /api/25/random/random-number
method: GET
укажите параметры запроса min = переменной min, max равное переменной max
если запрос отправлен верно, то будет получен массив c случайным числом от min до max
выведите в .out-4 полученное число. */

const min = 1000;
const max = 1150;

function f4(): void {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `${URL}/api/25/random/random-number?min=${min}&max=${max}`);
    xhr.setRequestHeader('apikey', APIKEY);
    xhr.onload = function () {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.response);
            (document.querySelector('.out-4')as HTMLElement).textContent = data['random-number'];
        } else {
            console.error('Ошибка при выполнении запроса:', xhr.statusText);
        }
    };
    xhr.onerror = function () {
        console.error('Ошибка сети');
    };
    xhr.send();
}

(document.querySelector('.b-4')as HTMLElement).addEventListener('click', f4);

// Task 5 ============================================
/* При нажатии кнопки .b-5 срабатывает функция f5. Функция отсылает запрос на api.itgid.info со следующими параметрами:
url: /api/25/random/random-number
method: POST
укажите параметры в body POST запроса min = переменной min, max равное переменной max, формат - form-data.
если запрос отправлен верно, то будет получен массив c случайным числом от min до max
выведите в .out-5 полученное число. */

function f5(): void {
    const xhr = new XMLHttpRequest();
    const data = new FormData();
    data.append('min', min.toString());
    data.append('max', max.toString());

    xhr.open('POST', `${URL}/api/25/random/random-number`);
    xhr.setRequestHeader('apikey', APIKEY);
    xhr.onload = function () {
        if (xhr.status === 200) {
            const res = JSON.parse(xhr.response);
            (document.querySelector('.out-5')as HTMLElement).textContent = res['random-number'];
        } else {
            console.error('Ошибка при выполнении запроса:', xhr.statusText);
        }
    };
    xhr.onerror = function () {
        console.error('Ошибка сети');
    };
    xhr.send(data);
}

(document.querySelector('.b-5')as HTMLElement).addEventListener('click', f5);

// Task 6 ============================================
/* При нажатии кнопки .b-6 срабатывает функция f6. Функция отсылает запрос на api.itgid.info со следующими параметрами:
url: /api/25/random/circle
method: POST
без аргументов
поскольку такого адреса в API не предусмотрено, то сервер должен вернуть ошибку 404
выведите статус ответа сервера в .out-6-status
выведите сообщение ответа сервера в out-6-response */

function f6(): void {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', `${URL}/api/25/random/circle`);
    xhr.setRequestHeader('apikey', APIKEY);
    xhr.onload = function () {
        (document.querySelector('.out-6-status')as HTMLElement).textContent = `Статус: ${xhr.status}`;
        (document.querySelector('.out-6-response')as HTMLElement).textContent = xhr.responseText;
    };
    xhr.onerror = function () {
        console.error('Ошибка сети');
    };
    xhr.send();
}

(document.querySelector('.b-6')as HTMLElement).addEventListener('click', f6);

// Task 7 ============================================
/* При нажатии кнопки .b-7 срабатывает функция f7. Функция отсылает запрос на api.itgid.info со следующими параметрами:
url: /api/25/sr/read
method: GET
укажите параметр запроса race = переменной requestRace
если запрос отправлен верно, то будет получен массив c описанием расы гаальцев из игры "Космические рейнджеры"
выведите в .out-7 изображение image расы. Для этого создайте image и присвойте src ссылку на изображение.
В начале функции делайте очистку .out-7 */

const requestRace = 'gaal';

function f7(): void {
    const xhr = new XMLHttpRequest();
    (document.querySelector('.out-7')as HTMLElement).innerHTML = '';
    xhr.open('GET', `${URL}/api/25/sr/read?race=${requestRace}`);
    xhr.setRequestHeader('apikey', APIKEY);
    xhr.onload = function () {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.response);
            const img = document.createElement('img');
            img.src = `${URL}${data.result[4].image}`;
            (document.querySelector('.out-7')as HTMLElement).appendChild(img);
        } else {
            console.error('Ошибка при выполнении запроса:', xhr.statusText);
        }
    };
    xhr.onerror = function () {
        console.error('Ошибка сети');
    };
    xhr.send();
}

(document.querySelector('.b-7')as HTMLElement).addEventListener('click', f7);

// Task 8 ============================================
/* При нажатии кнопки .b-8 срабатывает функция f8. Функция отсылает запрос на api.itgid.info со следующими параметрами:
url: /api/25/employee/read
method: POST
без параметров
если запрос отправлен верно, то будет получен массив сотрудников компании. 
выведите в .out-8 число сотрудников компании itemCount. */

function f8(): void {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', `${URL}/api/25/employee/read`);
    xhr.setRequestHeader('apikey', APIKEY);
    xhr.onload = function () {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.response);
            (document.querySelector('.out-8')as HTMLElement).textContent = data.itemCount.toString();
        } else {
            console.error('Ошибка при выполнении запроса:', xhr.statusText);
        }
    };
    xhr.onerror = function () {
        console.error('Ошибка сети');
    };
    xhr.send();
}

(document.querySelector('.b-8')as HTMLElement).addEventListener('click', f8);

// Task 9 ============================================
/* При нажатии кнопки .b-9 срабатывает функция f9. Функция отсылает запрос на api.itgid.info со следующими параметрами:
url: /api/25/employee/read/5
method: POST
где 5 - число считываемое из input .i-9. Понятно, что число может быть введено в input - любое.
если запрос отправлен верно, то будет получен массив с описанием сотрудника компании с id = 5
выведите обозначение (designation) сотрудника в .out-9 */

function f9(): void {
    const num = (document.querySelector('.i-9') as HTMLInputElement).value;
    const xhr = new XMLHttpRequest();
    xhr.open('POST', `${URL}/api/25/employee/read/${num}`);
    xhr.setRequestHeader('apikey', APIKEY);
    xhr.onload = function () {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.response);
            (document.querySelector('.out-9')as HTMLElement).textContent = data.result.designation;
        } else {
            console.error('Ошибка при выполнении запроса:', xhr.statusText);
        }
    };
    xhr.onerror = function () {
        console.error('Ошибка сети');
    };
    xhr.send();
}

(document.querySelector('.b-9')as HTMLElement).addEventListener('click', f9);

// Task 10 ============================================
/* При нажатии кнопки .b-10 срабатывает функция f10. Функция отсылает запрос на api.itgid.info со следующими параметрами:
url: /api/25/employee/read/7
method: GET
если запрос отправлен верно, то будет получен массив данных сотрудника с id = 7
число 7 получайте с input .i-10
выведите в .out-10 возраст сотрудника, данные которого вы получили. */

function f10(): void {
    const num = (document.querySelector('.i-10') as HTMLInputElement).value;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `${URL}/api/25/employee/read/${num}`);
    xhr.setRequestHeader('apikey', APIKEY);
    xhr.onload = function () {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.response);
            (document.querySelector('.out-10')as HTMLElement).textContent = data.result.age.toString();
        } else {
            console.error('Ошибка при выполнении запроса:', xhr.statusText);
        }
    };
    xhr.onerror = function () {
        console.error('Ошибка сети');
    };
    xhr.send();
}

(document.querySelector('.b-10')as HTMLElement).addEventListener('click', f10);

// Task 11 ============================================
/* При нажатии кнопки .b-11 срабатывает функция f11. Функция отсылает запрос на api.itgid.info со следующими параметрами:
url: /api/25/random/generate-password
method: POST
укажите в body POST запроса аргумент length равный числу из input .i-11 (form-data) 
если запрос отправлен верно, то будет возвращен пароль длиной равный указанной длине.
выведите в .out-11 полученный пароль. */

function f11(): void {
    const num = (document.querySelector('.i-11') as HTMLInputElement).value;
    const xhr = new XMLHttpRequest();
    const data = new FormData();
    data.append('length', num);

    xhr.open('POST', `${URL}/api/25/random/generate-password`);
    xhr.setRequestHeader('apikey', APIKEY);
    xhr.onload = function () {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.response);
            (document.querySelector('.out-11')as HTMLElement).textContent = data.password;
        } else {
            console.error('Ошибка при выполнении запроса:', xhr.statusText);
        }
    };
    xhr.onerror = function () {
        console.error('Ошибка сети');
    };
    xhr.send(data);
}

(document.querySelector('.b-11')as HTMLElement).addEventListener('click', f11);

// Task 12 ============================================
/* При нажатии кнопки .b-12 срабатывает функция f12. Функция отсылает запрос на api.itgid.info со следующими параметрами:
url: /api/25/random/generate-password
method: POST
укажите в body POST запроса аргумент length равный числу из input .i-12 (form-data) 
укажите в body POST запроса аргумент symbols равный 0 или 1, данные берем из состояния checkbox .ch-12
если запрос отправлен верно, то будет возвращен пароль длиной равный указанной длине и если указан symbols равный 1 то в пароле будут спецсимволы
выведите в .out-12 полученный пароль. */

function f12(): void {
    const num = (document.querySelector('.i-12') as HTMLInputElement).value;
    const checkbox = document.querySelector('.ch-12') as HTMLInputElement;
    const xhr = new XMLHttpRequest();
    const data = new FormData();
    data.append('length', num);
    data.append('symbols', checkbox.checked ? '1' : '0');

    xhr.open('POST', `${URL}/api/25/random/generate-password`);
    xhr.setRequestHeader('apikey', APIKEY);
    xhr.onload = function () {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.response);
            (document.querySelector('.out-12')as HTMLElement).textContent = data.password;
        } else {
            console.error('Ошибка при выполнении запроса:', xhr.statusText);
        }
    };
    xhr.onerror = function () {
        console.error('Ошибка сети');
    };
    xhr.send(data);
}

(document.querySelector('.b-12')as HTMLElement).addEventListener('click', f12);



// Constants for API URL and API Key
const URL: string = 'https://api.itgid.info';
const APIKEY: string = 'your-api-key-here'; // Replace with your actual API key

// Task 13
function f13(): void {
    const xhr: XMLHttpRequest = new XMLHttpRequest();
    const num: string = (document.querySelector('.i-13') as HTMLInputElement).value;
    const checkbox1: HTMLInputElement = document.querySelector('.ch-131') as HTMLInputElement;
    const checkbox2: HTMLInputElement = document.querySelector('.ch-132') as HTMLInputElement;

    xhr.open('POST', `${URL}/api/25/random/generate-password`);
    xhr.setRequestHeader('apikey', APIKEY);

    const data: FormData = new FormData();
    data.append('length', num);
    data.append('symbols', checkbox1.checked ? '1' : '0');
    data.append('uppercase', checkbox2.checked ? '1' : '0');

    xhr.onload = function (): void {
        if (xhr.status === 200) {
            const response = JSON.parse(xhr.response);
            (document.querySelector('.out-13') as HTMLElement).innerHTML = response.password;
        } else {
            console.error('Error:', xhr.statusText);
        }
    };

    xhr.send(data);
}

(document.querySelector('.b-13') as HTMLElement).onclick = f13;

// Task 14
function f14(): void {
    const xhr: XMLHttpRequest = new XMLHttpRequest();
    const human: string = (document.querySelector('.s-14') as HTMLInputElement).value;

    xhr.open('GET', `${URL}/api/25/sr/read/${human}`);
    xhr.setRequestHeader('apikey', APIKEY);

    xhr.onload = function (): void {
        if (xhr.status === 200) {
            const response = JSON.parse(xhr.response);
            (document.querySelector('.out-14') as HTMLElement).innerHTML = response.result.description;
        } else {
            console.error('Error:', xhr.statusText);
        }
    };

    xhr.send();
}

(document.querySelector('.b-14') as HTMLElement).onclick = f14;

// Task 15
function f15(): void {
    const xhr: XMLHttpRequest = new XMLHttpRequest();
    const out: HTMLElement = document.querySelector('.out-15') as HTMLElement;
    out.innerHTML = '';

    xhr.open('POST', `${URL}/api/25/sr/read`);
    xhr.setRequestHeader('apikey', APIKEY);

    xhr.onload = function (): void {
        if (xhr.status === 200) {
            const response = JSON.parse(xhr.response);
            for (const key in response.result) {
                const img: HTMLImageElement = document.createElement('img');
                img.src = `${URL}${response.result[key].image}`;
                out.appendChild(img);
            }
        } else {
            console.error('Error:', xhr.statusText);
        }
    };

    xhr.send();
}

(document.querySelector('.b-15') as HTMLElement).onclick = f15;

// Task 16
function f16(): void {
    const xhr: XMLHttpRequest = new XMLHttpRequest();

    xhr.open('GET', `${URL}/api/25/gow/world`);
    xhr.setRequestHeader('apikey', APIKEY);

    xhr.onload = function (): void {
        if (xhr.status === 200) {
            const response = JSON.parse(xhr.response);
            const out: HTMLElement = document.querySelector('.out-16') as HTMLElement;
            out.innerHTML = response.worlds.map((world: { title: string }) => world.title).join(' ');
        } else {
            console.error('Error:', xhr.statusText);
        }
    };

    xhr.send();
}

(document.querySelector('.b-16') as HTMLElement).onclick = f16;

// Task 17
function f17(): void {
    const xhr: XMLHttpRequest = new XMLHttpRequest();
    const worldName: string = (document.querySelector('.s-17') as HTMLInputElement).value;

    xhr.open('GET', `${URL}/api/25/gow/world/${worldName}`);
    xhr.setRequestHeader('apikey', APIKEY);

    xhr.onload = function (): void {
        if (xhr.status === 200) {
            const response = JSON.parse(xhr.response);
            (document.querySelector('.out-17') as HTMLElement).innerHTML = response.world.description;
        } else {
            console.error('Error:', xhr.statusText);
        }
    };

    xhr.send();
}

(document.querySelector('.b-17') as HTMLElement).onclick = f17;

// Task 18
function f18(): void {
    const xhr: XMLHttpRequest = new XMLHttpRequest();
    const out: HTMLElement = document.querySelector('.out-18') as HTMLElement;
    out.innerHTML = '';

    xhr.open('POST', `${URL}/api/25/gow/rune`);
    xhr.setRequestHeader('apikey', APIKEY);

    xhr.onload = function (): void {
        if (xhr.status === 200) {
            const response = JSON.parse(xhr.response);
            for (const key in response.rune) {
                const img: HTMLImageElement = document.createElement('img');
                img.src = `${URL}${response.rune[key]}`;
                img.alt = key;
                out.appendChild(img);
            }
        } else {
            console.error('Error:', xhr.statusText);
        }
    };

    xhr.send();
}

(document.querySelector('.b-18') as HTMLElement).onclick = f18;