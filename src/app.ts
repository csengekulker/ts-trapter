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

function calcArea(a: number, b: number, c: number, d: number): number {

    let underSqrt = (a+b-c+d) * (a-b-c+d) * (a+b-c-d) * (b+c+d-a)

    let sqrt = Math.sqrt(underSqrt);

    let result: number = (a + c) * sqrt / (4 * Math.abs(a - c))

    return result

}

function displayResult(result: number) {

    resultField.innerHTML = result.toLocaleString();
    
}

function clearFields() {
    base_a.value = ''
    base_c.value = ''
    side_b.value = ''
    side_d.value = ''
}

submitButton?.addEventListener('click', () => {

    resultField.innerHTML = ''

    let a = Number(base_a.value);
    let c = Number(base_c.value);

    let b = Number(side_b.value);
    let d = Number(side_d.value);

    let result = calcArea(a, b, c, d);

    if (result > 0) {
        displayResult(result);
        clearFields();
    } else {
        console.log("hibas bemeno adatok");
    }

})