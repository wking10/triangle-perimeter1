// Triangle Perimeter Assignment Start Code

// Calculate Button
document.getElementById('btn').addEventListener('click', btnClicked);

function btnClicked() {

// GetInputs
let XA = +document.getElementById('XA').value;
let YA = +document.getElementById('YA').value;
let XB = +document.getElementById('XB').value;
let YB = +document.getElementById('YB').value;
let XC = +document.getElementById('XC').value;
let YC = +document.getElementById('YC').value;

// Calculate side lengths
let AB = dist(XA,YA,XB,YB)
let AC = dist(YA,XA,YC,XC)
let BC = dist(YB,XB,XC,YC)

// Calculate 
document.getElementById("AB-ans").innerHTML = AB
document.getElementById("AC-ans").innerHTML = AC
document.getElementById("BC-ans").innerHTML = BC
document.getElementById("Perimeter-ans").innerHTML = AB+AC+BC

}

function dist(xone, yone, xtwo, ytwo) { 
return Math.sqrt((xtwo - xone) ** 2+ (ytwo-yone) **2);
}

