let resultField = document.getElementById('result');
let digits = Array.from(document.getElementsByClassName('digit'));
let operators = Array.from(document.getElementsByClassName('operator'));

digits.map( button => {
    button.addEventListener('click', (e) => {
        resultField.value += e.target.innerText;
    })
});

operators.map( button => {
    button.addEventListener('click', (e) => {
        resultField.value += e.target.innerText;
    })
});

document.getElementById('clear').addEventListener('click', () => {
    resultField.value = '';
});

document.getElementById('equals').addEventListener('click', () => {
    try {
        resultField.value = eval(resultField.value);
    } catch {
        resultField.value = "Error";
    }
});


let appSelector = document.getElementById('app-selector');
let calculatorApp = document.getElementById('calculator');
let converterApp = document.getElementById('converter');

appSelector.addEventListener('change', (e) => {
    if (e.target.value === 'calculator') {
        calculatorApp.style.display = 'block';
        converterApp.style.display = 'none';
    } else {
        calculatorApp.style.display = 'none';
        converterApp.style.display = 'block';
    }
});

let textInput = document.getElementById('text-input');
let convertButton = document.getElementById('convert');
let hexOutput = document.getElementById('hex-output');

convertButton.addEventListener('click', () => {
    hexOutput.value = textToHex(textInput.value);
});

function textToHex(text) {
    let hex = '';
    for (let i = 0; i < text.length; i++) {
        hex += text.charCodeAt(i).toString(16);
    }
    return hex;
}


appSelector.addEventListener('change', (e) => {
    if (e.target.value === 'calculator') {
        calculatorApp.style.display = 'block';
        converterApp.style.display = 'none';
        cipherApp.style.display = 'none';
    } else if (e.target.value === 'converter') {
        calculatorApp.style.display = 'none';
        converterApp.style.display = 'block';
        cipherApp.style.display = 'none';
    } else {
        calculatorApp.style.display = 'none';
        converterApp.style.display = 'none';
        cipherApp.style.display = 'block';
    }
});

let cipherApp = document.getElementById('cipher');
let cipherInput = document.getElementById('cipher-input');
let encodeButton = document.getElementById('encode');
let cipherOutput = document.getElementById('cipher-output');

encodeButton.addEventListener('click', () => {
    cipherOutput.value = encodeA1Z26(cipherInput.value);
});

function encodeA1Z26(text) {
    let encoded = '';
    for (let i = 0; i < text.length; i++) {
        if (text[i].match(/[a-z]/i)) {
            encoded += text[i].toUpperCase().charCodeAt(0) - 64 + ' ';
        } else {
            encoded += text[i] + ' ';
        }
    }
    return encoded.trim();
}