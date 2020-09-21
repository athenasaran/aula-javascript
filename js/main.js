var nome = "Athena";
var idade = 22;
console.log("Bem vindo " + nome + " e tem " + idade + " anos");

//alert("Bem vindo " + nome + "e tem " + idade + "anos")
var frase = "Japão é o melhor time do mundo";
console.log(frase.replace("Japão", "Brasil"));
console.log(frase.toLowerCase());

var lista = ["maça", "pera", "banana"];

console.log(lista[0]);
lista.push("uva");
console.log(lista);
lista.pop(); //tira ultimo
console.log(lista.length);
console.log(lista.toString());
console.log(lista.toString()[0]);
console.log(lista.join(" - "));

var fruta = { nome: "maça", cor: "vermelha" };

console.log(fruta.nome);
console.log(fruta.cor);

var frutas = [
  { nome: "maça", cor: "vermelha" },
  { nome: "uva", cor: "roxa" },
];

console.log(frutas[1].nome);
console.log(frutas[1].cor);

//var idade = prompt("Qual sua idade");

if (idade >= 18) {
  console.log("maior de idade");
} else {
  console.log("menor de idade");
}

var count = 0;

while (count < 5) {
  console.log(count);
  count = count + 1;
}

for (var i = 0; i <= 5; i++) {
  console.log(i);
}

var d = new Date();

console.log(d);
console.log(d.getMonth() + 1);

function soma(n1, n2) {
  return n1 + n2;
}

console.log(soma(5, 10));

function setReplace(frase, nome, novo_nome) {
  return frase.replace(nome, novo_nome);
}

console.log(setReplace("Vai japao", "japao", "brasil"));

function validaIdade(idade) {
  var validar;
  if (idade >= 18) {
    validar = true;
  } else {
    validar = false;
  }
  return validar;
}

//var idade = prompt("Qual sua idade");

console.log(validaIdade(idade));


function clicou(){
   document.getElementById("agradecimento").innerHTML = "<b>OIII</b>";
}

function redirecionar(){
    window.open("https://github.com/athenasaran")//outra pagina
    //window.location.href = "https://github.com/athenasaran" //mesma pagina
}

function trocar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Obrigada por passar o mouse"
    elemento.innerHTML = "Obrigada por passar o mouse"
}

function voltar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
    elemento.innerHTML = "Passe o mouse aqui"
}

function load(){
    alert("Pagina carregada")
}

function change(elemento){
    console.log(elemento.value)
}