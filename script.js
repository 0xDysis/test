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