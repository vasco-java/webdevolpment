/*function calculate(){
	var nome = document.getElementById("name").value;
	var peso = document.getElementById("weight").value;
	var altura = document.getElementById("height").value;
	//altura = altura /100;
    var imc = peso / (altura * altura);
    var caixa2 = document.getElementById("classificacao");

    //---------------//
    const caixa = document.getElementById("resposta");
   

    if (imc < 18.5) {
    	var estado = "Abaixo de Peso";
    }else if (imc >18.6 && imc <= 24.9 ) {
    	var estado = "Saudavél";
    }else if (imc >=25.0 && imc <= 29.9 ) {
    	var estado = "Peso em excesso";
    }else if (imc >=30.0 && imc <= 34.9 ) {
    	var estado = "Obesidade Grau I";
    }else if(imc >=35.0 && imc <= 39.9) {
    	var estado ="Obesidade Grau II";
    }else if(imc >= 40) {
       var estado ="Obesidade Grau III";
    }else{
    	var estado = "Baleia";
    }

    caixa.innerHTML= nome+" "+ "o seu IMC"+" " + "e de"+" "+ imc;
    caixa2.innerHTML="esta em"+" "+ estado;
    
}*/



function validaEntrada(args) {
  for (let i = 0; i < arguments.length; i++) {
    if (!!arguments[i] == false || arguments[i] < 0) {
      return false;
    }
  }
  return true;
}

function calcularIMC(kilos, altura) {
  altura = altura / 100;
  return kilos / (altura * altura);
}

const formCalcularIMC = document.getElementById('form');

formCalcularIMC.addEventListener('submit', function (event) {
  event.preventDefault();

  const kilos = parseFloat(document.getElementById('kilos').value);
  const altura = parseFloat(document.getElementById('altura').value);

  if (validaEntrada(kilos, altura)) {
    const imc = calcularIMC(kilos, altura);
    document.getElementById('imc').value = parseFloat(imc).toFixed(2);
    verificarIMC(imc);
  } else {
    document.getElementById('imc').value = 'Dados incorretos!!';
    
  }
});

function verificarIMC(imc) {
  if (imc < 17) {
    createMessage('Muito abaixo do peso', 'alert');
  } else if (imc > 17 && imc <= 18.49) {
    createMessage('Abaixo do peso', 'warning');
  } else if (imc >= 18.5 && imc <= 24.99) {
    createMessage('Peso normal', 'sucess');
  } else if (imc >= 25 && imc <= 29.99) {
    createMessage('Acima do peso', 'warning');
  } else if (imc >= 30 && imc <= 34.99) {
    createMessage('Obesidade I', 'alert');
  } else {
    createMessage('Obesidade II', 'danger');
  }
}

function createMessage(msg, type) {
  document
    .querySelector('body')
    .insertAdjacentHTML(
      'beforebegin',
      `<div class='message ${type}'>${msg}</div>`
    );

  setTimeout(function () {
    deleteMessage();
  }, 3000);
}

function deleteMessage() {
  const list = document.querySelectorAll('.message');
  for (const item of list) {
    item.remove();
  }
}