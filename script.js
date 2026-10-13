function adicionarCaractere(caracter) {
    
    // const entrada = document.querySelector(".calculadora").value
    
    const entrada = document.getElementById("input").value
    
    // Pega o valor e colocar no input

    document.getElementById("input").value = entrada + caracter

    // console.log(entrada)
}


function limparTela() {

    document.getElementById("input").value = '' // <-- Atribui uma string vázia ao input limpando as valores anteriores

}


function calcular() {
     
    const entrada = document.getElementById("input").value

    document.getElementById("input").value = eval(entrada)
}

