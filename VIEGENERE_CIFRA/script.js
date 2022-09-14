//************ CIFRA DE VIGENERE ************//
//LISTA COM O ALFABETO ORIGINAL UTILIZADO PARA CIFRAGEM
const alfabeto_original = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


function handleClick() { //FUNÇÃO PARA LIDAR COM O CLICK DO BOTÃO submit
	//ENTRADA DE DADOS, ONDE BUSCAREMOS O INPUT DO USUÁRIO NO DOCUMENTO HTML
	let texto = document.getElementById("texto").value;
	let chave = document.getElementById("chave").value;

	for (let i = 0; i < texto.length; i++) { //LAÇO DESLOCA A POSICAO DO ELEMENTO ATRAVÉS DO INDICE PARA GERAR 26 ALFABETOS CIFRADO
		
		let tamanhoChave = chave.length; //VARIAVEL QUE ARMAZENA O TAMANHO DA PALAVRA-CHAVE
		let caracter = texto[i]; //VARIAVEL ARMAZENA CADA LETRA DO TEXTO A SER CIFRADO
		let indice = alfabeto_original.indexOf(caracter); //VARIAVEL QUE ARMAZENA OS INDICES DE CADA LETRA DO TEXTO A SER CIFRADO
		
		let indice_chave; //VARIAVEL QUE ARMAZENA O INDICE DA PALAVRA-CHAVE
		indice_chave = alfabeto_original.indexOf(chave[i % tamanhoChave]);

		let textoFinal = []; //VARIAVEL LISTA QUE RECEBERÁ O TEXTO FINAL

			var radios = document.getElementsByName("select")
			//EVENTO DE CLICK SELECIONADO radio buttom ENCRIPTAR
			if (radios[0].checked == true) {
				let encriptar = indice + indice_chave; //VARIAVEL QUE SOMA  (INDICE DO TEXTO + INDICE DA PALAVRA-CHAVE)
				encriptar = encriptar % 26; //VARIAVEL QUE FINALIZA O CALCULO CRIPTOGRAFICO (INDICE_TEXTO + INDICE_CHAVE % 26) (ENCRIPTAR)		
				textoFinal.push(alfabeto_original[encriptar]);
			}
				
			//EVENTO DE CLICK SELECIONANDO radio buttom DESCRIPTAR
			else if (radios[1].checked == true) {
				let descriptar = indice - indice_chave + 26; //VARIAVEL QUE SUBTRAI  (INDICE DO TEXTO - INDICE DA PALAVRA-CHAVE + 26)
				descriptar = descriptar % 26; //VARIAVEL QUE FINALIZA O CALCULO CRIPTOGRAFICO (INDICE_TEXTO - INDICE_CHAVE + 26 % 26 (DESCRIPTAR)
				textoFinal.push(alfabeto_original[descriptar]);		
			}

			//SAIDA DOS DADOS CRIPTOGRAFADOS
			let texto_final = textoFinal.join(""); //VARIAVEL QUE RECEBE O TEXTO ENCRIPTADO/DECRIPTADO
			
			const el = (texto_final.toLocaleUpperCase()) //VARIAVEL el RECEBE O TEXTO FINAL E TRANSFORMA OS CARACTERES EM MAIUSCULAS
			let display = document.getElementById('mensagem_cifrada') // VARIAVEL RECEBE  div HTML QUE RECEBERÁ O TEXTO FINAL
			display.appendChild(document.createTextNode(el)) // METODO appendChild INSERE O NO DE TEXTO COMPOSTO PELO texto_final

			console.log(texto_final)
	}
	
}
/*------------------------------------------------------------------------------------------------------------------*/
