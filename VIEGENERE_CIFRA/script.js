//LISTA COM O ALFABETO ORIGINAL UTILIZADO PARA CIFRAGEM
const alfabeto_original = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//ENTRADA DE DADOS, ONDE BUSCAREMOS O INPUT DO USUÁRIO NO DOCUMENTO HTML
let texto = "resignacao";
let chave = "deus";

let textoFinal = []; //VARIAVEL LISTA QUE RECEBERÁ O TEXTO FINAL CRIPTOGRAFADO

for (let i = 0; i < texto.length; i++) { //LAÇO DESLOCA A POSICAO DO ELEMENTO ATRAVÉS DO INDICE PARA GERAR 26 ALFABETOS CIFRADO
	
  let tamanhoChave = chave.length; //VARIAVEL QUE ARMAZENA O TAMANHO DA PALAVRA-CHAVE
	let caracter = texto[i]; //VARIAVEL ARMAZENA CADA LETRA DO TEXTO A SER CIFRADO
	let indice = alfabeto_original.indexOf(caracter); //VARIAVEL QUE ARMAZENA OS INDICES DE CADA LETRA DO TEXTO A SER CIFRADO
	let indice_chave;//VARIAVEL QUE ARMAZENA O INDICE DA PALAVRA-CHAVE


	if (i > tamanhoChave) {
		indice_chave = alfabeto_original.indexOf(chave[i % tamanhoChave]); //VARIAVEL QUE ARMAZENA O INDICE DE CADA LETRA DA CHAVE
	} 

  else {
		indice_chave = alfabeto_original.indexOf(chave[i % tamanhoChave]);
	}

	let indice_final = indice + indice_chave; //VARIAVEL QUE SOMA O INDICE DO TEXTO + INDICE DA PALAVRA-CHAVE

	if (indice_final >= 26) {
		indice_final = indice_final % 26; //VARIAVEL QUE FINALIZA O CALCULO CRIPTOGRAFICO (INDICE_TEXTO + INDICE_CHAVE % 26)
	}

	textoFinal.push(alfabeto_original[indice_final]);
}

let texto_final = textoFinal.join(""); //VARIAVEL QUE RECEBE O TEXTO ENCRIPTADO

console.log(texto_final);

