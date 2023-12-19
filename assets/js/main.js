const formulario = document.querySelector("#formulario");


//adicionando um escutador de eventos na página
form.addEventListener("submit", function (e) {
  //previnindo o default da página para que ela não seja enviada
  e.preventDefault();

  /*estamos selecionando os campos do formulário que receberão os valores,e para isso estamos usando o e.target 
   ele vai informar para nós o elemento que está recebendo a ação */
  const inputPeso = e.target.querySelector("#peso");
  const inputAltura = e.target.querySelector("#altura");

  //pegando os valores digitados nos campos pelo usuário, usei o Number para evitar o NaN
  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  /* Usei essa lógica para aproveitar a estrutura da função que faz com que tudo que venha após do return não seja mais executado.
  Assim tudo que for diferente da variável peso que é um Number, por exemplo, o usuário utilizar um texto ele vai retornar 
  'Peso inválido'
  */
  if (!peso) {
    setResultado("Peso inválido", false);
    return;
  }

  if (!altura) {
    setResultado("Altura inválida", false);
    return;
  }

    //Aqui nós estamos criando iuma variável que irá invocar a function getImc e fará o calculo do peso e altura que o usuário informar
    const imc = getImc(peso, altura);

    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc})`

    setResultado(msg, true);
});

function getNivelImc(imc) {

  const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']

  if (imc >= 39.9) {
    return nivel[5];
  }

  if(imc >= 34.9 ){
    return nivel[4];
  }

  if(imc >= 29.9){
    return nivel[3];
  }

  if(imc >= 24.9){
    return nivel[2];
  }

  if(imc >= 18.5){
    return nivel[1]
  }

  if(imc < 18.5){
    return nivel[0];
  }
}


//Funcção criada para calcular o IMC da pessoa
function getImc(peso, altura) {
  const imc = peso / (altura * altura);
  return imc.toFixed(2);
}
/*
Função que insere um texto dentro da div resultado

adicionais um segundo parâmetro 'isValid' para verificar se o que o usuário digitou é válido
*/
function setResultado(msg, isValid) {
  //selecionando o div resultado pelo ID
  const resultado = document.querySelector("#resultado");

  //trecho de código responsável por alterar a visualização do HTML
  resultado.innerHTML = "";

  //inserindo uma function dentro de outra a partir de uma variável
  const p = criaP();

  if (isValid) {
    p.classList.add('paragrafo-resultado')
  }else{
    p.classList.add('bad')
  }

  //adicionando um texto no HTML do paraágrafo que criei dentro da div resultado
  p.innerHTML = msg;

  //adicionando o p a div resultado
  resultado.appendChild(p);

}

function criaP() {
  //criando um paragrafo no HTML
  const p = document.createElement("p");
  return p;

  
}

