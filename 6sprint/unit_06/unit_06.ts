//  Task 1
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// ***_***_***_
// </pre>
// <p>где звездочкa рисуются с помощью внутреннего цикла от 0 до 3, а _ с помощью внешнего.</p>
function t1(): void {
    const renderOut: HTMLElement = document.querySelector('div.out-1') as HTMLElement;
    let out: string = '';
    for (let i: number = 0; i < 3; i++) {
        for (let j: number = 0; j < 3; j++) {
            out += '*';
        }
        out += '_';
    }
    renderOut.innerHTML = out;
}

(document.querySelector('.b-1') as HTMLElement).onclick = t1;

//  Task 2
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// 1<br>
// *_*_*_<br>
// 2<br>
// *_*_*_<br>
// 3<br>
// *_*_*_<br>
function t2(): void {
    const renderOut: HTMLElement = document.querySelector('div.out-2') as HTMLElement;
    let out: string = '';
    for (let i: number = 1; i <= 3; i++) {
        out += `${i} <br>`;
        for (let j: number = 0; j < 3; j++) {
            out += '*_';
        }
        out += '<br>';
    }
    renderOut.innerHTML = out;
}

(document.querySelector('.b-2') as HTMLElement).onclick = t2;

//  Task 3
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// *_*_*_<br>
// *_*_*_<br>
// *_*_*_<br>
// *_*_*_<br>
function t3(): void {
    const renderOut: HTMLElement = document.querySelector('div.out-3') as HTMLElement;
    let out: string = '';
    for (let i: number = 0; i <= 3; i++) {
        for (let j: number = 0; j <= 2; j++) {
            out += '*_';
        }
        out += '<br>';
    }
    renderOut.innerHTML = out;
}

(document.querySelector('.b-3') as HTMLElement).onclick = t3;

//  Task 4
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// 1_1*2*3*4*5*2_1*2*3*4*5*3_1*2*3*4*5*
function t4(): void {
    const renderOut: HTMLElement = document.querySelector('div.out-4') as HTMLElement;
    let out: string = '';
    for (let i: number = 1; i <= 3; i++) {
        out += `${i}_`;
        for (let j: number = 1; j <= 5; j++) {
            out += `${j}*`;
        }
    }
    renderOut.innerHTML = out;
}

(document.querySelector('.b-4') as HTMLElement).onclick = t4;

//  Task 5
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// 101010<br>
// 101010<br>
// 101010<br>
function t5(): void {
    const renderOut: HTMLElement = document.querySelector('div.out-5') as HTMLElement;
    let out: string = '';
    for (let i: number = 0; i < 3; i++) {
        for (let k: number = 0; k < 6; k++) {
            out += (k % 2 === 0) ? "1" : "0";
        }
        out += '<br>';
    }
    renderOut.innerHTML = out;
}

(document.querySelector('.b-5') as HTMLElement).onclick = t5;

//  Task 6
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// 10x01x<br>
// 10x01x<br>
// 10x01x<br>
function t6(): void {
    const renderOut: HTMLElement = document.querySelector('div.out-6') as HTMLElement;
    let out: string = '';
    for (let i: number = 0; i < 3; i++) {
        for (let k: number = 0; k <= 6; k++) {
            if (k === 0 || k === 4) {
                out += '1';
            } else if (k === 2 || k === 5) {
                out += 'x';
            } else if (k === 1 || k === 3) {
                out += '0';
            }
        }
        out += '<br>';
    }
    renderOut.innerHTML = out;
}

(document.querySelector('.b-6') as HTMLElement).onclick = t6;

//  Task 7
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// *<br>
// **<br>
// ***<br>
// ****<br>
function t7(): void {
    const renderOut: HTMLElement = document.querySelector('div.out-7') as HTMLElement;
    let out: string = '';
    for (let i: number = 0; i < 4; i++) {
        for (let k: number = 0; k <= i; k++) {
            out += '*';
        }
        out += '<br>';
    }
    renderOut.innerHTML = out;
}

(document.querySelector('.b-7') as HTMLElement).onclick = t7;

//  Task 8
// Per aspera ad astra
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// *****<br>
// ****<br>
// ***<br>
// **<br>
// *<br>
function t8(): void {
    const renderOut: HTMLElement = document.querySelector('div.out-8') as HTMLElement;
    let out: string = '';
    for (let i: number = 0; i < 5; i++) {
        for (let k: number = 5; k > i; k--) {
            out += '*';
        }
        out += '<br>';
    }
    renderOut.innerHTML = out;
}

(document.querySelector('.b-8') as HTMLElement).onclick = t8;

//  Task 9
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// 1_<br>
// 1_2_<br>
// 1_2_3_<br>
// 1_2_3_4_<br>
// 1_2_3_4_5_<br>
function t9(): void {
    const renderOut: HTMLElement = document.querySelector('div.out-9') as HTMLElement;
    let out: string = '';
    for (let i: number = 1; i <= 5; i++) {
        for (let k: number = 1; k <= i; k++) {
            out += `${k}_`;
        }
        out += '<br>';
    }
    renderOut.innerHTML = out;
}

(document.querySelector('.b-9') as HTMLElement).onclick = t9;

//  Task 10
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// 01_02_03_04_05_06_07_08_09_10_<br>
// 11_12_13_14_15_16_17_18_19_20_<br>
// 21_22_23_24_25_26_27_28_29_30_<br>
// 31_32_33_34_35_36_37_38_39_40_<br>
// 41_42_43_44_45_46_47_48_49_50_<br>
function t10(): void {
    const renderOut: HTMLElement = document.querySelector('div.out-10') as HTMLElement;
    let out: string = '';
    for (let i: number = 0; i < 5; i++) {
        for (let k: number = 1; k <= 10; k++) {
            let number: number | string = (10 * i + k);
            if (number < 10) {
                number = '0' + number.toString();
            }
            out += number + '_';
        }
        out += '<br>';
    }
    renderOut.innerHTML = out;
}

(document.querySelector('.b-10') as HTMLElement).onclick = t10;
