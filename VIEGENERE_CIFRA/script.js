const alfabeto_original = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'] 

//ENTRADA DE DADOS, ONDE BUSCAREMOS O INPUT DO USUÁRIO NO DOCUMENTO HTML
let texto = document.getElementById("vigenere_input")
let palavra_chave = document.getElementById("palavra-chave")

let texto_saida = ''
let palavra_chave_final = ''

//CONDICIONAL PARA VERIFICAR SE PALAVRA-CHAVE É MAIOR QUE O TEXTO A SER ENCRIPTADO
if (palavra_chave.length > texto.length) {
console.log('Palavra-chave maior que o texto')
}

//CASO A PALAVRA-CHAVE SEJA MENOR QUE TEXTO A SER ENCRIPTADO, O LAÇO DE REPETIÇÃO WHILE REPETIRA AS LETRAS DA PALAVRA-CHAVE QUE INDICA O ALFABETO CIFRADO CORREPONDENTE, ATÉ QUE O NUMERO DE CARACTERES DA PALAVRA-CHAVE E TEXTO SEJAM IGUAIS
else {
    i = 0
    while (palavra_chave.length < texto.length) {
        palavra_chave_final += palavra_chave[i]
        i+=1
        if (i == palavra_chave.length) {
            i = 0
        }
    }
}

for (index in alfabeto_original) {
    console.log(index, alfabeto_original[index])
  }

