console.log("hola");

const boton = document.getElementById("miboton");

boton.addEventListener('click', () => {
    alert('hola mundo!')
});

const texto = document.getElementById('texto');
const boton2 = document.getElementById('btnColor');

boton2.addEventListener('click', () => {
    texto.style.color = 'red';
    texto.style.fontSize = '24px';
});

const boton3 = document.getElementById('btnModo');

boton3.addEventListener('click', () => {
       document.body.classList.toggle('modo-oscuro');
});

const caja = document.getElementById('miCaja');
const btnAnimar = document.getElementById('btnAnimar');

btnAnimar.addEventListener('click', () => {
    caja.classList.toggle('animacion');
});

const input1 = document.getElementById('num1').value;
const input2 = document.getElementById('num2').value;
const txtResultado = document.getElementById('resultado');


function calcular(operacion) {
   
    if (input1 === "" || input2 === "") {
        txtResultado.textContent = "Ingresa ambos números";
        return;
    }

    const n1 = Number(input1);
    const n2 = Number(input2);
    let total = 0;


    if (operacion === '+') {
        total = n1 + n2;
    } else if (operacion === '-') {
        total = n1 - n2;
    } else if (operacion === '*') {
        total = n1 * n2;
    } else if (operacion === '/') {
        if (n2 === 0) {
            txtResultado.textContent = "No se puede dividir por 0";
            return;
        }
        total = n1 / n2;
    }
    
    txtResultado.textContent = total;
};

const miSelect = document.getElementById("MiSelector");
const valorSelector = miSelect.value;

console.log(valorSelector);

btnCalcular.addEventListener('click', () => {

    const input1 = document.getElementById('num1').value;
    const input2 = document.getElementById('num2').value;
    const miSelect = document.getElementById("MiSelector");
    const valorSelector = miSelect.value;

    if (input1 === "" || input2 === "") {
            txtResultado.textContent = "Ingresa ambos números";
            return;
        }

    const n1 = Number(input1);
    const n2 = Number(input2);
    let total = 0;

    if (valorSelector==='suma') {
        total = n1 + n2;
    } else if (valorSelector === 'resta') {
        total = n1 - n2;
    } else if (valorSelector === 'multiplicacion') {
        total = n1 * n2;
    } else if (valorSelector === 'division') {
        if (n2 === 0) {
            txtResultado.textContent = "No se puede dividir por 0";
            return;
        }
        total = n1 / n2;
    };

    txtResultado.textContent = total;
});