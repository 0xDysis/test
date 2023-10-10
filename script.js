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
// Existing JavaScript here

appSelector.addEventListener('change', (e) => {
    if (e.target.value === 'calculator') {
        calculatorApp.style.display = 'block';
        converterApp.style.display = 'none';
        cipherApp.style.display = 'none';
        keyshiftApp.style.display = 'none';
    } else if (e.target.value === 'converter') {
        calculatorApp.style.display = 'none';
        converterApp.style.display = 'block';
        cipherApp.style.display = 'none';
        keyshiftApp.style.display = 'none';
    } else if (e.target.value === 'cipher') {
        calculatorApp.style.display = 'none';
        converterApp.style.display = 'none';
        cipherApp.style.display = 'block';
        keyshiftApp.style.display = 'none';
    } else {
        calculatorApp.style.display = 'none';
        converterApp.style.display = 'none';
        cipherApp.style.display = 'none';
        keyshiftApp.style.display = 'block';
    }
});

let keyshiftApp = document.getElementById('keyshift');
let keyInput = document.getElementById('key-input');
let wordInput = document.getElementById('word-input');
let shiftButton = document.getElementById('shift');
let shiftOutput = document.getElementById('shift-output');

shiftButton.addEventListener('click', () => {
    shiftOutput.value = keyShift(keyInput.value, wordInput.value);
});

function keyShift(key, word) {
    let keyA1Z26 = encodeA1Z26(key).split(' ').map(Number);
    let wordA1Z26 = encodeA1Z26(word).split(' ').map(Number);
    let output = [];

    for (let i = 0; i < Math.max(keyA1Z26.length, wordA1Z26.length); i++) {
        let sum = (keyA1Z26[i % keyA1Z26.length] + wordA1Z26[i % wordA1Z26.length]) % 26;
        output.push(sum === 0 ? 26 : sum);
    }

    return output.join(' ');
}


appSelector.addEventListener('change', (e) => {
    calculatorApp.style.display = 'none';
    converterApp.style.display = 'none';
    cipherApp.style.display = 'none';
    keyshiftApp.style.display = 'none';

    if (e.target.value === 'calculator') {
        calculatorApp.style.display = 'block';
    } else if (e.target.value === 'converter') {
        converterApp.style.display = 'block';
    } else if (e.target.value === 'cipher') {
        cipherApp.style.display = 'block';
    } else {
        keyshiftApp.style.display = 'block';
    }
});