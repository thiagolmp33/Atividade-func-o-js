const prompt = require("prompt-sync")()
//Exercicio 1
function Boasvinda() {
    console.log("Bem-vindo ao Sistema Escolar!");
    console.log("-----------------------------");
}
Boasvinda()

//Exercicio 2
function mostrarCurso() {
    console.log("Exercicio 2");
    console.log("Curso: Desenvolvimento de Sistemas");
    console.log("Instituição: Escola de Tecnologia");
    console.log("-----------------------------");
}
mostrarCurso()

//Exercicio 3
function saudarALuno(nome) {
    console.log("Exercicio 3");
    console.log("Olá," + nome + "!" + "Seja bem vindo");
    console.log("-----------------------------");

}

saudarALuno("Thiago")

//Exercicio 4
console.log("Exercicio 4");
function mostrarAluno(nome, curso) {
    console.log("Aluno:" + nome)
    console.log("Curso:" + curso);
    console.log("-----------------------------");
}

mostrarAluno("Ana", "Desenvolvimento de sistemas")

//Exercicio 5

function CalcularMedia(nota1, nota2) {
    console.log("Exercicio 5");
    nota1 = Number(prompt("Digite um numero:"))
    nota2 = Number(prompt("Digite um numero:"))
    resultado = (nota1 + nota2) / 2
    console.log("O resultado da sua media foi de:" + resultado);
    console.log("-----------------------------");
}
CalcularMedia()


//Exercicio 6

function adicionarPontos(nota, pontosExtras) {
    console.log("Exercicio 6");
    notaAtualizada = nota + pontosExtras
    console.log("Sua nota original foi de:" + nota);
    console.log("Você recebeu: " + pontosExtras + " pontos extras:");
    console.log("Nota Atualizada: " + notaAtualizada);
    console.log("-----------------------------");
}
adicionarPontos(10, 5)

//Exercicio 7
function verificarAprovacao(media) {
    console.log("Exercicio 7");
    media = Number(prompt("Digite a sua media: "))
    if (media < 60) {
        console.log("Você foi reprovado");
    } else {
        console.log("Aluno aprovado");
    }
    console.log("-----------------------------");

}
verificarAprovacao()
//Exercicio 8
function classificarAluno(nota) {
    console.log("Exercicio 8");

    nota = Number(prompt("Digite a sua nota: "))
    if (nota < 60) {
        console.log("Nota insuficiente");
    } else if (nota >= 60 && nota <= 69) {
        console.log("Nota Regular");
    } else if (nota >= 70 && nota <= 89) {
        console.log("Boa nota");
    } else {
        console.log("Nota excelente");
    }
    console.log("-----------------------------");
}
classificarAluno(90)

//Exercicio 9
function calcularMensalidade(valor) {
    console.log("Exercicio 9");
    const desconto = (valor * 0.10)
    const precoFinal = (valor - desconto)
    return precoFinal;
}
const valorOriginal = 500;
let precoFinal = calcularMensalidade(valorOriginal);
console.log("Valor original era de: " + valorOriginal + " | Com seu desconto de 10% fica: " + precoFinal);
console.log("-----------------------------");

//Exercicio 10
function calcularMedia(nota1, nota2) {
    let resultado = (nota1 + nota2) / 2;
    return resultado;
}

function avaliarAluno() {
    console.log("Exercicio 10");
    

    let nome = prompt("Digite o seu nome:");
    let n1 = Number(prompt("Digite a primeira nota:"));
    let n2 = Number(prompt("Digite a segunda nota:"));
    

    let media = calcularMedia(n1, n2);
    let situação = "";

    if (media >= 60) {
        situação = "Aluno aprovado";
    } else {
        situação = "Aluno reprovado";
    }


    console.log("Aluno: " + nome);
    console.log("Media: " + media);
    console.log("Situação: " + situação);
}


avaliarAluno();