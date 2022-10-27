/*
* File: app.ts
* Author: Balogh Csenge
* Copyright: 2022, Balogh Csenge
* Group: Szoft_II_N
* Date: 2022-10-24
* Github: https://github.com/csengekulker/
* Licenc: GNU GPL
*/

var x_percent: number
var y_percent: number

const base_a = document.querySelector("#base_a") as HTMLInputElement;
const base_c = document.querySelector("#base_c") as HTMLInputElement;
const side_b = document.querySelector("#side_b") as HTMLInputElement;
const side_d = document.querySelector("#side_d") as HTMLInputElement;

const submitButton = document.querySelector("#submitButton") as HTMLInputElement;
const resultField = document.querySelector("#resultField") as HTMLInputElement;
const resultHeading = document.querySelector("#resultHeading") as HTMLInputElement;

function onMouseMove (x: number, y: number):void {

    // not final

    x += 70
    y += 40 
    
    document.body.style.backgroundColor = `rgb(${x}, 170, ${y})`

}

document.body.addEventListener('mousemove', (e) => {

    x_percent = Number(Math.round(100 * e.clientX / (screen.width)))
    y_percent = Number(Math.round(100 * e.clientY / (screen.height)))

    onMouseMove(x_percent, y_percent) 
    
})



function calcArea(a: number, b: number, c: number, d: number): number {

    let underSqrt = (a+b-c+d) * (a-b-c+d) * (a+b-c-d) * (b+c+d-a)

    let sqrt = Math.sqrt(underSqrt);

    let result: number = (a + c) * sqrt / (4 * Math.abs(a - c))

    return result

}

function displayResult(result: number) {
    if (result > 0) {
        resultField.innerHTML = result.toLocaleString();
    } else {
        resultHeading.innerHTML = "Hibás bemenő adatok!"
        resultHeading.parentElement?.classList.add("bg-warning br")
        
    }   
}

function clearFields() {
    base_a.value = ''
    base_c.value = ''
    side_b.value = ''
    side_d.value = ''
}

submitButton.addEventListener('click', () => {

    resultField.innerHTML = ''
    resultHeading.innerHTML = "Eredmény"

    let a = Number(base_a.value);
    let c = Number(base_c.value);

    let b = Number(side_b.value);
    let d = Number(side_d.value);

    let result = calcArea(a, b, c, d);
    
    displayResult(result);
    clearFields();    
})