

function exercicio1() {

    //1 - Escreva um algoritmo para ler 2 valores informados pelo usuário e se o segundo valor informado for igual ou menor que ZERO, deve ser lido um novo valor. Ou seja, para o segundo valor não pode ser aceito o valor zero, nem um valor negativo.  O seu programa deve imprimir o resultado da divisão do primeiro valor lido pelo segundo valor.

    let pr1 = parseFloat(prompt("digite um valor"))
    let pr2 = parseFloat(prompt("digite um valor"))


    while (pr2 <= 0) {
        pr2 = prompt(`o segundo valor tem que ser maior que zero, tente novamente.`)
    }


    alert(pr1 / pr2)
}

function exercicio2() {

    //2 - Crie uma bomba relógio (usando somente código - para deixar claro!) cuja contagem regressiva vá de 30 a 0. Utilize "document.write" para escrever em tela e no final da repetição escreva "EXPLOSÃO".

    let inicio = 30
    let fim = 0

    while (inicio >= fim) {
        document.write(`<h3> A bomba vai explodir em ${inicio} segundos <h3>`)
        inicio--
    }

    document.write(`BOOOMMMM`)

}

function exercicio3() {

    /*3 - Escreva um algoritmo para imprimir os números de 1 (inclusive) a 10 (inclusive) em ordem decrescente.
    Exemplo: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1*/

    let inicio = 10
    let fim = 1

    while (inicio >= fim) {
        document.write(`<h1>${inicio} </h1>`)
        inicio--

    }
}

function exercicio4() {

    // 4 - Faça um algoritmo que calcule e escreva a média aritmética dos números inteiros entre 15 (inclusive) e 100 (inclusive).

    let soma = 0
    let contador = 0

    for (let numero = 15; numero <= 100; numero++) {
        soma += numero

        contador++
    }

    let media = soma / contador

    alert(`A média aritmética dos números entre 15 e 100 é:  ${media}`)

}

function exercicio5() {
    //5 - Faça um algoritmo que calcule e escreva a média aritmética dos dois números inteiros informados pelo usuário e todos os números inteiros entre eles. Considere que o primeiro sempre será menor que o segundo.

    let contador = 0
    let soma = 0
    numero1 = parseInt(prompt("digite o primeiro numero:"))
    numero2 = parseInt(prompt("digite o segundo numero:"))

    for (let numero = numero1; numero <= numero2; numero++) {
        soma += numero
        contador++
    }

    let media = soma / contador

    alert(`A média aritmética dos seus números é:  ${media}`)

}

function exercicio6() {
    //6 - Escreva um programa para ler 2 notas de um aluno, calcular e imprimir a média final. Considere que a nota de aprovação é 9,5. Logo após escrever a mensagem "Calcular a média de outro aluno Sim/Não?" e solicitar um resposta. Se a resposta for "S", o programa deve ser executado novamente, caso contrário deve ser encerrado exibindo a quantidade de alunos aprovados.




}




function exercicio7() {



}

function exercicio8() {
    // 8 - Ler um valor N e imprimir todos os valores inteiros entre 1(inclusive) e N(inclusive).Considere que o N será sempre maior que ZERO. N  é um valor informado pelo usuário


    let numero = []
    let N = 0

    do {
        N = parseInt(prompt("Digite um valor maior que zero:"));


    } while (N <= 0)
    for (let i = 1; i <= N; i++) {
        numero.push(i)
        alert(`${numero}`)
    }
}




function exercicio9() {
    //9 - Escreva um algoritmo para imprimir os 10 primeiros números inteiros maiores que 100.


    for (let i = 101; i <= 111; i++) {
        document.write(`${i} <br>`);
    }
}



function exercicio10() {
    //10 - Escreva um programa para imprimir todas as tabuadas de 1 a N.N será informado pelo usuário.

    let nun = parseInt(prompt('Informe até qual numero você quer sua tabuada: (somente numeros positivos)'));

    for (let numero = 1; numero <= nun; numero++) {
        document.write(`<br>Tabuada do ${numero}: <br>`);

        for (tabuada = 1; tabuada <= 10; tabuada++) {
            let resultado = (numero * tabuada)
            document.write(`${numero} x ${tabuada} = ${resultado} <br>`);
        }
    }
}

function exercicio11() {

    let valido = 0;
    let invalido = 0;

    //como For esta fechando em baixo esta pegando todos os valores, sento assim a condição "valor" esta funcionando
    
    for (let numero = 0; numero < 10; numero++) {
        let valor = parseFloat(prompt(`digite dez valores:`))

        if (valor >= 24 && valor <= 42) {
            valido++
        } else {
            invalido++;

        }
    }


    alert(`valores validos ${valido}`)
    alert(`valores invalidos ${invalido}`)
}
