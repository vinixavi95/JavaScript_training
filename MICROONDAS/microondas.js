//LISTA DE PRATOS DISPONIVEIS PARA AQUECER NO MICROONDAS
const pratos = ['pipoca', 'macarrão', 'carne', 'feijão', 'arroz']

let novoPrato = pratos.push(document.getElementById('prato')); //VARIAVEL QUE INDICA O CADASTRAMENTO DE UM NOVO PRATO
let novoTempo = document.getElementById('tempo'); //VARIAVEL PARA ARMAZENAR O TEMPO PADRAO DO NOVO PRATO

//FUNCTION QUE DEFINE O TEMPO IDEAL DE CADA PRATO
function microondas(prato, tempo) {
    if (prato == pratos[0]) {
        verificarTempo(10, tempo)
    } 
    
    else if (prato == pratos[1]) {
        verificarTempo(15, tempo)
    } 
    
    else if (prato == pratos[2]) {
        verificarTempo(30, tempo)
    }

    else if (prato == pratos[3]) {
        verificarTempo(25, tempo)
    }

    else if (prato == pratos[4]) {
        verificarTempo(12, tempo)
    }

    else if (prato == novoPrato) {
        verificarTempo(novoTempo, tempo) 
    }
}

//FUNÇAO QUE VERIFICA SE O TEMPO DIGITADO É SUFICIENTE, INSULFICIENTE OU DEMASIADO
function verificarTempo(tempo_padrao, tempo_definido) {
    if (tempo_definido > tempo_padrao * 3) {
        console.log('Kabuuuuuum');
    } 
    
    else if (tempo_definido > tempo_padrao * 2) {
        console.log('Comida queimou');
    }

    else if (tempo_definido < tempo_padrao) {
        console.log('Tempo insulficiente');
    }

    else {
        console.log('Prato está pronto')
    }
}

//CHAMAMOS A FUNCTION MICROONDAS E PASSAMOS O PRATO QUE DEVE SER AQUECIDO E O TEMPO DESEJADO 
microondas()



//cadastrar prato - USUARIO CADASTRA UM PRATO A SER PREPARADO
//Usuario digita dois campos de texto (nome e tempo de preparo)
//usuario clica em OK e o sistema salva o prato no array
//Validacao do item (o nome do prato não pode ser vazio, simbolo, nao pode ter numero e nao pode ser repitido)

//preparar prato
//QUAL PRATO VOCE QUER PREPARAR? - apresentara os pratos do array
//POR QUANTO TEMPO - usuario digita o tempo
