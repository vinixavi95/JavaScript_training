//************ CIFRA DE VIGENERE ************//
//LISTA COM O ALFABETO ORIGINAL UTILIZADO PARA CIFRAGEM
const alfabeto_original = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//ENTRADA DE DADOS, ONDE BUSCAREMOS O INPUT DO USUÁRIO NO DOCUMENTO HTML
let texto = 'vamos codar';
let chave = 'react';
let opcao = '1';

let textoFinal = []; //VARIAVEL LISTA QUE RECEBERÁ O TEXTO FINAL CRIPTOGRAFADO

for (let i = 0; i < texto.length; i++) { //LAÇO DESLOCA A POSICAO DO ELEMENTO ATRAVÉS DO INDICE PARA GERAR 26 ALFABETOS CIFRADO
	
  	let tamanhoChave = chave.length; //VARIAVEL QUE ARMAZENA O TAMANHO DA PALAVRA-CHAVE
	let caracter = texto[i]; //VARIAVEL ARMAZENA CADA LETRA DO TEXTO A SER CIFRADO
	let indice = alfabeto_original.indexOf(caracter); //VARIAVEL QUE ARMAZENA OS INDICES DE CADA LETRA DO TEXTO A SER CIFRADO
	
	let indice_chave;//VARIAVEL QUE ARMAZENA O INDICE DA PALAVRA-CHAVE
	indice_chave = alfabeto_original.indexOf(chave[i % tamanhoChave]);
	

	let encriptar = indice + indice_chave; //VARIAVEL QUE SOMA  (INDICE DO TEXTO + INDICE DA PALAVRA-CHAVE)
    let descriptar = indice - indice_chave + 26; //VARIAVEL QUE SUBTRAI  (INDICE DO TEXTO - INDICE DA PALAVRA-CHAVE + 26)

	if (opcao == '1') {
		encriptar = encriptar % 26; //VARIAVEL QUE FINALIZA O CALCULO CRIPTOGRAFICO (INDICE_TEXTO + INDICE_CHAVE % 26) (ENCRIPTAR)
	}

    else if (opcao == '2' ) {
        descriptar = descriptar % 26; //VARIAVEL QUE FINALIZA O CALCULO CRIPTOGRAFICO (INDICE_TEXTO - INDICE_CHAVE + 26 % 26 (DESCRIPTAR)
    }

	textoFinal.push(alfabeto_original[encriptar]);
}

let texto_final = textoFinal.join(""); //VARIAVEL QUE RECEBE O TEXTO ENCRIPTADO

console.log(texto_final);

