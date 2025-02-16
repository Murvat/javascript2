// Constants for API URL and API Key
const URL: string = 'https://api.itgid.info';
const APIKEY: string = 'your-api-key-here'; // Replace with your actual API key
export{}
// Task 1
async function f1(): Promise<void> {
    const requestHeaders: Headers = new Headers();
    requestHeaders.append('apikey', APIKEY);

    const res: Response = await fetch(`${URL}/api/26/employee/read`, {
        method: 'GET',
        headers: requestHeaders,
    });

    const result: { result: { age: number }[] } = await res.json();
    let out: string = '';
    result.result.forEach((item: { age: number }) => {
        out += `${item.age} `;
    });
    (document.querySelector('.out-1') as HTMLElement).innerHTML = out;
}

document.querySelector('.b-1')?.addEventListener('click', f1);

// Task 2
async function f2(): Promise<void> {
    const inputId: string = (document.querySelector('.i-2') as HTMLInputElement).value;
    const requestHeaders: Headers = new Headers();
    requestHeaders.append('apikey', APIKEY);

    const fetchData: Response = await fetch(`${URL}/api/26/employee/read?id=${inputId}`, {
        method: 'GET',
        headers: requestHeaders,
    });

    const fetchResult: { result: { email: string } } = await fetchData.json();
    (document.querySelector('.out-2') as HTMLElement).innerHTML = fetchResult.result.email;
}

document.querySelector('.b-2')?.addEventListener('click', f2);

// Task 3
async function f3(): Promise<void> {
    const inputId: string = (document.querySelector('.i-3') as HTMLInputElement).value;
    const requestHeaders: Headers = new Headers();
    requestHeaders.append('apikey', APIKEY);

    const fetchRequest: Response = await fetch(`${URL}/api/26/employee/read/${inputId}`, {
        method: 'POST',
        headers: requestHeaders,
    });

    const fetchResult: { result: { name: string } } = await fetchRequest.json();
    (document.querySelector('.out-3') as HTMLElement).innerHTML = fetchResult.result.name;
}

document.querySelector('.b-3')?.addEventListener('click', f3);

// Task 4
async function f4(): Promise<void> {
    const requestHeaders: Headers = new Headers();
    requestHeaders.append('apikey', APIKEY);

    const fetchRequest: Response = await fetch(`${URL}/api/26/sr/read`, {
        method: 'POST',
        headers: requestHeaders,
    });

    const fetchResult: { result: { title: string }[] } = await fetchRequest.json();
    let out: string = '';
    fetchResult.result.forEach((item: { title: string }) => {
        out += `${item.title} `;
    });
    (document.querySelector('.out-4') as HTMLElement).innerHTML = out;
}

document.querySelector('.b-4')?.addEventListener('click', f4);

// Task 5
async function f5(): Promise<void> {
    const requestHeaders: Headers = new Headers();
    requestHeaders.append('apikey', APIKEY);
    const selRace: string = (document.querySelector('.s-5') as HTMLSelectElement).value;

    const fetchRequest: Response = await fetch(`${URL}/api/26/sr/read?race=${selRace}`, {
        method: 'GET',
        headers: requestHeaders,
    });

    const fetchResult: { result: { description: string } } = await fetchRequest.json();
    (document.querySelector('.out-5') as HTMLElement).innerHTML = fetchResult.result.description;
}

document.querySelector('.b-5')?.addEventListener('click', f5);

// Task 6
async function f6(): Promise<void> {
    const requestHeaders: Headers = new Headers();
    requestHeaders.append('apikey', APIKEY);

    const fetchRequest: Response = await fetch(`${URL}/api/26/run`, {
        method: 'GET',
        headers: requestHeaders,
    });

    (document.querySelector('.out-6-status') as HTMLElement).innerHTML = fetchRequest.status.toString();
}

document.querySelector('.b-6')?.addEventListener('click', f6);

// Task 7
async function f7(): Promise<void> {
    (document.querySelector('.out-7') as HTMLElement).innerHTML = '';
    const requestHeaders: Headers = new Headers();
    requestHeaders.append('apikey', APIKEY);
    const selRace: string = (document.querySelector('.s-7') as HTMLSelectElement).value;

    const fetchRequest: Response = await fetch(`${URL}/api/26/sr/read/${selRace}`, {
        method: 'POST',
        headers: requestHeaders,
    });

    const fetchResult: { result: { image: string } } = await fetchRequest.json();
    const img: HTMLImageElement = document.createElement('img');
    img.src = `${URL}${fetchResult.result.image}`;
    (document.querySelector('.out-7') as HTMLElement).append(img);
}

document.querySelector('.b-7')?.addEventListener('click', f7);

// Task 8
async function f8(): Promise<void> {
    const requestHeaders: Headers = new Headers();
    requestHeaders.append('apikey', APIKEY);

    const fetchRequest: Response = await fetch(`${URL}/api/26/random/random-number`, {
        method: 'GET',
        headers: requestHeaders,
    });

    const fetchResult: { 'random-number': number } = await fetchRequest.json();
    (document.querySelector('.out-8') as HTMLElement).innerHTML = fetchResult['random-number'].toString();
}

document.querySelector('.b-8')?.addEventListener('click', f8);

// Task 9
let min: number = 400;
let max: number = 500;

async function f9(): Promise<void> {
    const requestHeaders: Headers = new Headers();
    requestHeaders.append('apikey', APIKEY);

    const fetchRequest: Response = await fetch(`${URL}/api/26/random/random-number?min=${min}&max=${max}`, {
        method: 'GET',
        headers: requestHeaders,
    });

    const fetchResult: { 'random-number': number } = await fetchRequest.json();
    (document.querySelector('.out-9') as HTMLElement).innerHTML = fetchResult['random-number'].toString();
}

document.querySelector('.b-9')?.addEventListener('click', f9);

// Task 10
async function f10(): Promise<void> {
    const requestHeaders: Headers = new Headers();
    requestHeaders.append('apikey', APIKEY);

    const queryForm: FormData = new FormData();
    queryForm.append('min', min.toString());
    queryForm.append('max', max.toString());

    const fetchRequest: Response = await fetch(`${URL}/api/26/random/random-number`, {
        method: 'POST',
        headers: requestHeaders,
        body: queryForm,
    });

    const fetchResult: { 'random-number': number } = await fetchRequest.json();
    (document.querySelector('.out-10') as HTMLElement).innerHTML = fetchResult['random-number'].toString();
}

document.querySelector('.b-10')?.addEventListener('click', f10);

// Task 11
async function f11(): Promise<void> {
    const requestHeaders: Headers = new Headers();
    requestHeaders.append('apikey', APIKEY);
    const inLen: number = +(document.querySelector('.i-11') as HTMLInputElement).value;

    const fetchRequest: Response = await fetch(`${URL}/api/26/random/random-string?length=${inLen}`, {
        method: 'GET',
        headers: requestHeaders,
    });

    const fetchResult: { 'random-string': string } = await fetchRequest.json();
    (document.querySelector('.out-11') as HTMLElement).innerHTML = fetchResult['random-string'];
}

document.querySelector('.b-11')?.addEventListener('click', f11);

// Task 12
async function f12(): Promise<void> {
    const inLen: string = (document.querySelector('.i-12') as HTMLInputElement).value;
    const checkbox: HTMLInputElement = document.querySelector('.ch-12') as HTMLInputElement;

    const requestHeaders: Headers = new Headers();
    requestHeaders.append('apikey', APIKEY);

    const queryForm: FormData = new FormData();
    queryForm.append('length', inLen);
    queryForm.append('symbols', checkbox.checked ? '1' : '0');

    const fetchRequest: Response = await fetch(`${URL}/api/26/random/generate-password`, {
        method: 'POST',
        headers: requestHeaders,
        body: queryForm,
    });

    const fetchResult: { password: string } = await fetchRequest.json();
    (document.querySelector('.out-12') as HTMLElement).innerHTML = fetchResult.password;
}

document.querySelector('.b-12')?.addEventListener('click', f12);

// Task 13
async function f13(): Promise<void> {
    const inLen: string = (document.querySelector('.i-13') as HTMLInputElement).value;
    const ch131: HTMLInputElement = document.querySelector('.ch-131') as HTMLInputElement;
    const ch132: HTMLInputElement = document.querySelector('.ch-132') as HTMLInputElement;

    const requestHeaders: Headers = new Headers();
    requestHeaders.append('apikey', APIKEY);

    const queryForm: FormData = new FormData();
    queryForm.append('length', inLen);
    queryForm.append('symbols', ch131.checked ? '1' : '0');
    queryForm.append('uppercase', ch132.checked ? '1' : '0');

    const fetchRequest: Response = await fetch(`${URL}/api/26/random/generate-password`, {
        method: 'POST',
        headers: requestHeaders,
        body: queryForm,
    });

    const fetchResult: { password: string } = await fetchRequest.json();
    (document.querySelector('.out-13') as HTMLElement).innerHTML = fetchResult.password;
}

document.querySelector('.b-13')?.addEventListener('click', f13);

// Task 14
async function f14(): Promise<void> {
    const requestHeaders: Headers = new Headers();
    requestHeaders.append('apikey', APIKEY);

    const fetchRequest: Response = await fetch(`${URL}/api/26/gow/world`, {
        method: 'GET',
        headers: requestHeaders,
    });

    const fetchResult: { worlds: { title: string }[] } = await fetchRequest.json();
    let out: string = '';
    fetchResult.worlds.forEach((item: { title: string }) => {
        out += `${item.title} `;
    });
    (document.querySelector('.out-14') as HTMLElement).innerHTML = out;
}

document.querySelector('.b-14')?.addEventListener('click', f14);

// Task 15
async function f15(): Promise<void> {
    const requestHeaders: Headers = new Headers();
    requestHeaders.append('apikey', APIKEY);
    const elemS: string = (document.querySelector('.s-15') as HTMLSelectElement).value;

    const fetchRequest: Response = await fetch(`${URL}/api/26/gow/world/${elemS}`, {
        method: 'GET',
        headers: requestHeaders,
    });

    const fetchResult: { world: { description: string } } = await fetchRequest.json();
    (document.querySelector('.out-15') as HTMLElement).innerHTML = fetchResult.world.description;
}

document.querySelector('.b-15')?.addEventListener('click', f15);

// Task 16
async function f16(): Promise<void> {
    (document.querySelector('.out-16') as HTMLElement).innerHTML = '';
    const requestHeaders: Headers = new Headers();
    requestHeaders.append('apikey', APIKEY);
    const elemS: string = (document.querySelector('.s-16') as HTMLSelectElement).value;

    const fetchRequest: Response = await fetch(`${URL}/api/26/gow/governor/${elemS}`, {
        method: 'GET',
        headers: requestHeaders,
    });

    const fetchResult: { world: { rune: string } } = await fetchRequest.json();
    const img: HTMLImageElement = document.createElement('img');
    img.src = `${URL}${fetchResult.world.rune}`;
    (document.querySelector('.out-16') as HTMLElement).append(img);
}

document.querySelector('.b-16')?.addEventListener('click', f16);

// Task 17
async function f17(): Promise<void> {
    const requestHeaders: Headers = new Headers();
    requestHeaders.append('apikey', APIKEY);

    const fetchRequest: Response = await fetch(`${URL}/api/26/get-time`, {
        method: 'POST',
        headers: requestHeaders,
    });

    const fetchResult: { time: { h: number; m: number } } = await fetchRequest.json();
    (document.querySelector('.out-17') as HTMLElement).innerHTML = `${fetchResult.time.h}:${fetchResult.time.m}`;
}

document.querySelector('.b-17')?.addEventListener('click', f17);

// Task 18
async function f18(): Promise<void> {
    (document.querySelector('.out-18') as HTMLElement).innerHTML = '';
    const requestHeaders: Headers = new Headers();
    requestHeaders.append('apikey', APIKEY);

    const fetchRequest: Response = await fetch(`${URL}/api/26/gow/rune`, {
        method: 'POST',
        headers: requestHeaders,
    });

    const fetchResult: { rune: { [key: string]: string } } = await fetchRequest.json();
    for (const key in fetchResult.rune) {
        const img: HTMLImageElement = document.createElement('img');
        img.src = `${URL}${fetchResult.rune[key]}`;
        img.alt = key;
        (document.querySelector('.out-18') as HTMLElement).append(img);
    }
}

document.querySelector('.b-18')?.addEventListener('click', f18);