export {}

//  Task 1
function t1(): void {
    const renderOut: HTMLElement = document.querySelector('div.out-1') as HTMLElement;
    let out: string = '';
    let num: number = 0;
    while (num < 50) {
        out += (++num) + '_';
    }
    renderOut.innerHTML = out;
}

(document.querySelector('.b-1') as HTMLElement).onclick = t1;

//  Task 2
function t2(): void {
    const renderOut: HTMLElement = document.querySelector('div.out-2') as HTMLElement;
    let out: string = '';
    let num: number = 0;
    while (num < 46) {
        num += 2;
        out += num + '_';
        console.log(out);
    }
    renderOut.innerHTML = out;
}

(document.querySelector('.b-2') as HTMLElement).onclick = t2;

//  Task 3
function t3(): void {
    const renderOut: HTMLElement = document.querySelector('div.out-3') as HTMLElement;
    let out: string = '';
    let num: number = 26;
    // Adjusted condition: while num > 7, decrement then output.
    while (num > 7) {
        num--;
        out += num + '_';
    }
    renderOut.innerHTML = out;
}

(document.querySelector('.b-3') as HTMLElement).onclick = t3;

//  Task 4
function t4(): void {
    const renderOut: HTMLElement = document.querySelector('div.out-4') as HTMLElement;
    let out: string = '';
    let num: number = 80;
    while (num > 35) {
        num = num - 3;
        out += num + '_';
    }
    renderOut.innerHTML = out;
}

(document.querySelector('.b-4') as HTMLElement).onclick = t4;

//  Task 5
function t5(): void {
    const renderOut: HTMLElement = document.querySelector('div.out-5') as HTMLElement;
    let out: string = '';
    let num: number = 0;
    while (num < 17) {
        num++;
        if (num % 2 === 0) {
            out += num + '_**';
        } else {
            out += num + '_*';
        }
    }
    renderOut.innerHTML = out;
}

(document.querySelector('.b-5') as HTMLElement).onclick = t5;

//  Task 6
function t6(): void {
    const renderOut: HTMLElement = document.querySelector('div.out-6') as HTMLElement;
    let out: string = '';
    let num: number = 0;
    const iterCountStr: string = (document.querySelector('.i-6') as HTMLInputElement).value;
    const iterCount: number = Number(iterCountStr);
    while (num < iterCount) {
        let iRowNum: number = 0;
        while (iRowNum < 6) {
            out += '*';
            console.log(out);
            iRowNum++;
        }
        out += '<br>';
        num++;
    }
    renderOut.innerHTML = out;
}

(document.querySelector('.b-6') as HTMLElement).onclick = t6;

//  Task 7
function t7(): void {
    const inputNumStr: string = (document.querySelector('.i-7') as HTMLInputElement).value;
    let inputNum: number = Number(inputNumStr);
    const renderOut: HTMLElement = document.querySelector('div.out-7') as HTMLElement;
    let out: string = '';
    while (inputNum >= 0) {
        out += inputNum + '_';
        inputNum--;
    }
    renderOut.innerHTML = out;
}

(document.querySelector('.b-7') as HTMLElement).onclick = t7;

//  Task 8
function t8(): void {
    const numSmallStr: string = (document.querySelector('.i-81') as HTMLInputElement).value;
    const numBigStr: string = (document.querySelector('.i-82') as HTMLInputElement).value;
    let numSmall: number = Number(numSmallStr);
    const numBig: number = Number(numBigStr);
    let out: string = '';
    const renderOut: HTMLElement = document.querySelector('div.out-8') as HTMLElement;
    while (numSmall <= numBig) {
        out += numSmall + '_';
        numSmall++;
    }
    renderOut.innerHTML = out;
}

(document.querySelector('.b-8') as HTMLElement).onclick = t8;

//  Task 9
function t9(): void {
    const num1Str: string = (document.querySelector('.i-91') as HTMLInputElement).value;
    const num2Str: string = (document.querySelector('.i-92') as HTMLInputElement).value;
    let num1: number = Number(num1Str);
    let num2: number = Number(num2Str);
    let out: string = '';
    const renderOut: HTMLElement = document.querySelector('div.out-9') as HTMLElement;
    if (num1 > num2) {
        while (num1 >= num2) {
            out += num2 + '_';
            console.log(out);
            num2++;
        }
    } else {
        while (num2 >= num1) {
            out += num1 + '_';
            console.log(out);
            num1++;
        }
    }
    renderOut.innerHTML = out;
}

(document.querySelector('.b-9') as HTMLElement).onclick = t9;

//  Task 10
function t10(): void {
    let iterStart: number = 1950;
    const iterFinish: number = 1966;
    const renderOut: HTMLElement = document.querySelector('div.out-10') as HTMLElement;
    let out: string = '';
    while (iterStart <= iterFinish) {
        out += iterStart + '_';
        iterStart += 2;
        console.log(out);
    }
    renderOut.innerHTML = out;
}

(document.querySelector('.b-10') as HTMLElement).onclick = t10;

//  Task 11
function t11(): void {
    const divs: NodeListOf<HTMLDivElement> = document.querySelectorAll('div.div-11');
    let out: string = '';
    const renderOut: HTMLElement = document.querySelector('div.out-11') as HTMLElement;
    let i: number = 0;
    while (i < divs.length) {
        out += divs[i].innerHTML + '_';
        console.log(out);
        i++;
    }
    renderOut.innerHTML += out;
}

(document.querySelector('.b-11') as HTMLElement).onclick = t11;

//  Task 12
function t12(): void {
    const divs: NodeListOf<HTMLDivElement> = document.querySelectorAll('div.div-12');
    const renderOut: HTMLElement = document.querySelector('div.out-12') as HTMLElement;
    let i: number = 0;
    while (i < divs.length) {
        divs[i].style.background = 'orange';
        i++;
    }
    renderOut.innerHTML = 'Applied orange background';
}

(document.querySelector('.b-12') as HTMLElement).onclick = t12;

//  Task 13
function t13(): void {
    const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('input.i-13');
    let i: number = 0;
    while (i < inputs.length) {
        inputs[i].value = String(i + 1);
        i++;
    }
}

(document.querySelector('.b-13') as HTMLElement).onclick = t13;

//  Task 14
function t14(): void {
    const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('input.i-14');
    const renderOut: HTMLElement = document.querySelector('div.out-14') as HTMLElement;
    let i: number = 0;
    let out: string = '';
    while (i < inputs.length) {
        if (inputs[i].checked) {
            out += inputs[i].value;
        }
        i++;
    }
    renderOut.innerHTML = out;
}

(document.querySelector('.b-14') as HTMLElement).onclick = t14;

//  Task 15
function t15(): void {
    let out: string = '';
    const renderOut: HTMLElement = document.querySelector('div.out-15') as HTMLElement;
    const num: string = '77_88_99_';
    let i: number = 0;
    while (i < 3) {
        out += num;
        i++;
    }
    renderOut.innerHTML = out;
}

(document.querySelector('.b-15') as HTMLElement).onclick = t15;
