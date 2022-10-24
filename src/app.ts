/*
* File: app.ts
* Author: Balogh Csenge
* Copyright: 2022, Balogh Csenge
* Group: Szoft_II_N
* Date: 2022-10-24
* Github: https://github.com/csengekulker/
* Licenc: GNU GPL
*/

const base_a = document.querySelector("#base_a") as HTMLInputElement;
const base_c = document.querySelector("#base_c") as HTMLInputElement;
const side_b = document.querySelector("#side_b") as HTMLInputElement;
const side_d = document.querySelector("#side_d") as HTMLInputElement;

const submitButton = document.querySelector("#submitButton");
const resultField = document.querySelector("#resultField") as HTMLInputElement;

function calcArea(a: number, b: number, c: number, d: number) {

    let underSqrt = (a+b-c+d) * (a-b-c+d) * (a+b-c-d) * (b+c+d-a)

    let next = Math.sqrt(underSqrt);

    let result = (a + c) * next / (4 * (a - c))

    resultField.innerHTML = result.toLocaleString();
    
}

submitButton?.addEventListener('click', () => {
    let a = Number(base_a.value);
    let c = Number(base_c.value);

    let b = Number(side_b.value);
    let d = Number(side_d.value);

    calcArea(a, b, c, d);
})