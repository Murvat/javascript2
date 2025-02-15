export {}

let a1: number = 8;

function t1(): void {
    (document.querySelector('div.out-1') as HTMLElement).innerHTML = a1.toString();
}

(document.querySelector('.b-1') as HTMLElement).onclick = t1;

// Task 2.
let a2: number = 8;
function t2(): number {
    return a2;
}

(document.querySelector('.b-2') as HTMLElement).onclick = function (): void {
    (document.querySelector('.out-2') as HTMLElement).textContent = t2().toString();
    console.log(5 + t2());
    console.log(6 * t2());
    console.log(t2() * t2() * t2());
}

// Task 3.
// Returns the product of two numbers.
function t3(a: number, b: number): number {
    return a * b;
}

(document.querySelector('.b-3-1') as HTMLElement).onclick = function (): void {
    (document.querySelector('.out-3-1') as HTMLElement).textContent = t3(3, 4).toString();
};
(document.querySelector('.b-3-2') as HTMLElement).onclick = function (): void {
    (document.querySelector('.out-3-2') as HTMLElement).textContent = t3(5, 6).toString();
}

// Task 4.
// Returns age calculated from the provided birth year.
function t4(year: number): number {
    let age: number = new Date().getFullYear() - year;
    return age;
}

(document.querySelector('.b-4') as HTMLElement).onclick = function (): void {
    (document.querySelector('.out-4') as HTMLElement).textContent = t4(2002).toString();
}

// Task 5.
// Returns the length of the provided name.
function t5(yourName: string): number {
    let nameLength: number = yourName.length;
    return nameLength;
}

(document.querySelector('.b-5') as HTMLElement).onclick = function (): void {
    (document.querySelector('.out-5') as HTMLElement).textContent = t5('Alex').toString();
}

// Task 6.
// Returns a random integer between a and b.
function t6(a: number, b: number): number {
    return Math.floor(Math.random() * (b - a)) + a;
}

(document.querySelector('.b-6') as HTMLElement).onclick = function (): void {
    (document.querySelector('.out-6') as HTMLElement).textContent = t6(100, 107).toString();
}

// Task 7.
// Returns a random RGB color string.
function t7(): string {
    function innerT6(a: number, b: number): number {
        return Math.floor(Math.random() * (b - a)) + a;
    }
    return `rgb(${innerT6(0, 255)}, ${innerT6(0, 255)}, ${innerT6(0, 255)})`;
}

(document.querySelector('.b-7') as HTMLElement).onclick = function (): void {
    (document.querySelector('.out-7') as HTMLElement).style.background = t7();
}

// Task 8.
// Returns the input string with trimmed spaces.
function t8(str: string): string {
    return str.trim();
}

(document.querySelector('.b-8') as HTMLElement).onclick = function (): void {
    let s: string = "            Hello                ";
    console.log(s);
    console.log(t8(s));
}

// Task 9.
// Returns true if the number is even, false otherwise.
function t9(num: number): boolean {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

(document.querySelector('.b-9') as HTMLElement).onclick = function (): void {
    (document.querySelector('.out-9') as HTMLElement).textContent = t9(15).toString();
}

// Task 10.
// Returns the greater of two numbers. In case of equality, returns the first.
function t10(x: number, y: number): number {
    if (x > y) {
        return x;
    } else if (x === y) {
        return x;
    } else {
        return y;
    }
}

(document.querySelector('.b-10') as HTMLElement).onclick = function (): void {
    (document.querySelector('.out-10') as HTMLElement).textContent = t10(3, 9).toString();
}
