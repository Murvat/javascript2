// Constants for API URL and API Key
const URL: string = 'https://api.itgid.info';
const APIKEY: string = 'your-api-key-here'; // Replace with your actual API key

// Task 1
function f1(): void {
    const requestHeaders: Headers = new Headers();
    requestHeaders.append('apikey', APIKEY);

    const p: Promise<{ 'random-number': number }> = new Promise((resolve, reject) => {
        fetch(`${URL}/api/27/random/random-number`, {
            headers: requestHeaders,
        })
            .then((response: Response) => {
                if (response.ok) resolve(response.json());
                else reject(response);
            })
            .catch((error: Error) => reject(error));
    });

    p.then(resolveF1, rejectError);
}

function rejectError(err: Response | Error): void {
    console.log('Houston, We Have a Problem!');
    console.log(err);
}

function resolveF1(data: { 'random-number': number }): void {
    console.log(data);
    (document.querySelector('.out-1') as HTMLElement).innerHTML =
        data['random-number'] > 50 ? 'true' : 'false';
}

document.querySelector('.b-1')?.addEventListener('click', f1);

// Task 2
function f2(): void {
    const requestHeaders: Headers = new Headers();
    requestHeaders.append('apikey', APIKEY);

    const p: Promise<{ 'random-string': string }> = new Promise((resolve, reject) => {
        fetch(`${URL}/api/27/random/random-string`, {
            headers: requestHeaders,
        })
            .then((response: Response) => {
                if (response.ok) resolve(response.json());
                else reject(response);
            })
            .catch((error: Error) => reject(error));
    });

    p.then(resolveF2);
}

function resolveF2(data: { 'random-string': string }): void {
    console.log(data);
    (document.querySelector('.out-2') as HTMLElement).innerHTML = data['random-string'];
}

document.querySelector('.b-2')?.addEventListener('click', f2);

// Task 3
let emloyeerId: number;

function f3(): void {
    const requestHeaders: Headers = new Headers();
    requestHeaders.append('apikey', APIKEY);

    fetch(`${URL}/api/27/random/random-number?min=1&max=10`, {
        headers: requestHeaders,
    })
        .then((response: Response) => response.json())
        .then((data: { 'random-number': number }) => {
            console.log(data);
            emloyeerId = data['random-number'];
            return fetch(`${URL}/api/27/employee/read/${emloyeerId}`, {
                headers: requestHeaders,
            });
        })
        .then((response: Response) => response.json())
        .then((data: { result: { email: string } }) => {
            console.log(data);
            (document.querySelector('.out-3') as HTMLElement).innerHTML = data.result.email;
        });
}

document.querySelector('.b-3')?.addEventListener('click', f3);

// Task 4
let employeeEmail: string;

function f4(): void {
    const requestHeaders: Headers = new Headers();
    requestHeaders.append('apikey', APIKEY);

    fetch(`${URL}/api/27/employee/random-email`, {
        headers: requestHeaders,
    })
        .then((response: Response) => response.json())
        .then((data: { email: string }) => {
            employeeEmail = data.email;
            return fetch(`${URL}/api/27/employee/email?email=${employeeEmail}`, {
                headers: requestHeaders,
            });
        })
        .then((response: Response) => response.json())
        .then((data: { result: { name: string } }) => {
            console.log(data);
            (document.querySelector('.out-4') as HTMLElement).innerHTML = data.result.name;
        });
}

document.querySelector('.b-4')?.addEventListener('click', f4);

// Task 5
let randomWorld: string;

function f5(): void {
    const requestHeaders: Headers = new Headers();
    requestHeaders.append('apikey', APIKEY);

    fetch(`${URL}/api/27/gow/random-world`, {
        headers: requestHeaders,
        method: 'POST',
    })
        .then((response: Response) => response.json())
        .then((data: { world: string }) => {
            console.log(data);
            randomWorld = data.world;
            return fetch(`${URL}/api/27/gow/world/${randomWorld}`, {
                headers: requestHeaders,
            });
        })
        .then((response: Response) => response.json())
        .then((data: { world: { governor: string } }) => {
            console.log(data);
            (document.querySelector('.out-5') as HTMLElement).innerHTML = data.world.governor;
        });
}

document.querySelector('.b-5')?.addEventListener('click', f5);

// Task 6
let min_1: number = 0;
let max_1: number = 20;
let min_2: number = 100;
let max_2: number = 120;

function f6(): void {
    const requestHeaders: Headers = new Headers();
    requestHeaders.append('apikey', APIKEY);

    const formData1: FormData = new FormData();
    formData1.append('min', min_1.toString());
    formData1.append('max', max_1.toString());

    const formData2: FormData = new FormData();
    formData2.append('min', min_2.toString());
    formData2.append('max', max_2.toString());

    const promise_1: Promise<{ 'random-number': number }> = new Promise((resolve) => {
        fetch(`${URL}/api/27/random/random-number`, {
            method: 'POST',
            headers: requestHeaders,
            body: formData1,
        }).then((data: Response) => resolve(data.json()));
    });

    const promise_2: Promise<{ 'random-number': number }> = new Promise((resolve) => {
        fetch(`${URL}/api/27/random/random-number`, {
            method: 'POST',
            headers: requestHeaders,
            body: formData2,
        }).then((data: Response) => resolve(data.json()));
    });

    Promise.all([promise_1, promise_2]).then(
        (data: [{ 'random-number': number }, { 'random-number': number }]) => {
            console.log(data);
            (document.querySelector('.out-6') as HTMLElement).innerHTML = (
                data[0]['random-number'] + data[1]['random-number']
            ).toString();
        },
    );
}

document.querySelector('.b-6')?.addEventListener('click', f6);

// Task 7
function f7(): void {
    const requestHeaders: Headers = new Headers();
    requestHeaders.append('apikey', APIKEY);

    const p1: Promise<{ 'random-number': number }> = new Promise((resolve) => {
        fetch(`${URL}/api/27/random/random-number`, {
            headers: requestHeaders,
        })
            .then((response: Response) => response.json())
            .then((data: { 'random-number': number }) => resolve(data));
    });

    const p2: Promise<{ 'random-string': string }> = new Promise((resolve) => {
        fetch(`${URL}/api/27/random/random-string`, {
            headers: requestHeaders,
        })
            .then((response: Response) => response.json())
            .then((data: { 'random-string': string }) => resolve(data));
    });

    Promise.all([p1, p2]).then(
        (data: [{ 'random-number': number }, { 'random-string': string }]) => {
            console.log(data);
            (document.querySelector('.out-71') as HTMLElement).innerHTML =
                data[0]['random-number'].toString();
            (document.querySelector('.out-72') as HTMLElement).innerHTML = data[1]['random-string'];
        },
    );
}

document.querySelector('.b-7')?.addEventListener('click', f7);
export{}
// Task 8
const out8: HTMLElement = document.querySelector('.out-8') as HTMLElement;

function f8(): void {
    out8.innerHTML = '';
    const requestHeaders: Headers = new Headers();
    requestHeaders.append('apikey', APIKEY);

    const value1: string = (document.querySelector('.s-81') as HTMLSelectElement).value;
    const value2: string = (document.querySelector('.s-82') as HTMLSelectElement).value;

    const p1: Promise<{ result: { image: string } }> = new Promise((resolve) => {
        fetch(`${URL}/api/27/sr/read/${value1}`, {
            headers: requestHeaders,
        })
            .then((response: Response) => response.json())
            .then((data: { result: { image: string } }) => resolve(data));
    });

    const p2: Promise<{ result: { image: string } }> = new Promise((resolve) => {
        fetch(`${URL}/api/27/sr/read?race=${value2}`, {
            headers: requestHeaders,
        })
            .then((response: Response) => response.json())
            .then((data: { result: { image: string } }) => resolve(data));
    });

    Promise.all([p1, p2]).then(
        (data: [{ result: { image: string } }, { result: { image: string } }]) => {
            console.log(data);
            const img1: HTMLImageElement = document.createElement('img');
            img1.src = `${URL}${data[0].result.image}`;
            const img2: HTMLImageElement = document.createElement('img');
            img2.src = `${URL}${data[1].result.image}`;
            out8.appendChild(img1);
            out8.appendChild(img2);
        },
    );
}

document.querySelector('.b-8')?.addEventListener('click', f8);