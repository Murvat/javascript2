// Task 1
// Добавьте в код функции try catch так, чтобы вместо ошибки выводилось в out-1 цифра 1.

function t1(): void {
    try {
        let a: number = 22;
        let c: number = a ; // This will throw an error since 'd' is not defined
    } catch (error) {
        const out1: HTMLElement | null = document.querySelector('.out-1');
        if (out1) {
            out1.innerHTML = '1';
        }
    }
}

const b1: HTMLElement | null = document.querySelector('.b-1');
if (b1) {
    b1.onclick = t1;
}

// Task 2
// Добавьте в код функции try catch так, чтобы вместо ошибки был вывод результата в out-2.

function t2(): void {
    try {
        let a: number = 4;
        let b: number = 5;
        const out2222222: HTMLElement | null = document.querySelector('.out-2222222');
        if (out2222222) {
            out2222222.innerHTML = (a * b).toString();
        }
    } catch (error) {
        const out2: HTMLElement | null = document.querySelector('.out-2');
        if (out2) {
            out2.innerHTML = error instanceof Error ? error.message : 'An error occurred';
        }
    }
}

const b2: HTMLElement | null = document.querySelector('.b-2');
if (b2) {
    b2.onclick = t2;
}

// Task 3
// Добавьте в код функции try catch так, чтобы вместо ошибки был вывод результата в out-3. Если его нет - создавайте в коде.
// т.е. вы не знаете будет или нет он в html.

function t3(): void {
    try {
        let a: number = 4;
        let b: number = 5;
        let out3: HTMLElement | null = document.querySelector('.out-3');
        if (!out3) {
            out3 = document.createElement('div');
            out3.classList.add('out-3');
            document.body.appendChild(out3);
        }
        out3.innerHTML = (a * b).toString();
    } catch (error) {
        const out3: HTMLElement | null = document.querySelector('.out-3');
        if (out3) {
            out3.innerHTML = error instanceof Error ? error.message : 'An error occurred';
        }
    }
}

const b3: HTMLElement | null = document.querySelector('.b-3');
if (b3) {
    b3.onclick = t3;
}

// Task 4
// Дана переменная a. В переменную делается push. Используя try catch отловите ошибки если они есть. Если ошибка вывести в out-4 число 0. Если не ошибка - то результирующий массив через пробел.

let a: number[] = [2, 3, 4];

function t4(): void {
    try {
        a.push(7);
        const out4: HTMLElement | null = document.querySelector('.out-4');
        if (out4) {
            out4.innerHTML = a.join(' ');
        }
    } catch (error) {
        const out4: HTMLElement | null = document.querySelector('.out-4');
        if (out4) {
            out4.innerHTML = '0';
        }
    }
}

const b4: HTMLElement | null = document.querySelector('.b-4');
if (b4) {
    b4.onclick = t4;
}

// Task 5
// Добавьте try, catch, finally так, чтобы в out-5 выводился 0 при ошибки. А в out-5-1 всегда выводилось слово 'finally';

function t5(): void {
    try {
        let p: NodeListOf<HTMLParagraphElement> = document.querySelectorAll('p');
        // @ts-ignore - This will throw an error since NodeList does not have a push method
        p.push(3);
    } catch (error) {
        const out5: HTMLElement | null = document.querySelector('.out-5');
        if (out5) {
            out5.innerHTML = '0';
        }
    } finally {
        const out51: HTMLElement | null = document.querySelector('.out-5-1');
        if (out51) {
            out51.innerHTML = 'finally';
        }
    }
}

const b5: HTMLElement | null = document.querySelector('.b-5');
if (b5) {
    b5.onclick = t5;
};
export{}