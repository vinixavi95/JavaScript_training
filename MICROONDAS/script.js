/* MICROONDAS*/
//LISTA DE PRATOS DISPONIVEIS PARA AQUECER NO MICROONDAS
const lista_pratos = [
    {
    prato: 'pipoca',
    tempo: 10},

    {
    prato: 'macarrão',
    tempo: 15},

    {
    prato: 'carne',
    tempo: 25},

    {
    prato: 'feijão',
    tempo: 25},

    {
    prato: 'arroz',
    tempo: 12},
]

//FUNÇÃO MICROONDAS RECEBE COMO PARAMETROS O PRATO SELECIONADO PELO, E O TEMPO DIGITADO PELO USUÁRIO
function microondas(prato_usuario, tempo_usuario) {
    
    const prato_atual = lista_pratos.find((prato) => prato.prato == prato_usuario) // A VARIAVEL prato_atual PROCURA NA LISTA DE OBJETOS lista_pratos ATRAVÉS DO MÉTODO find() PASSANDO COMO PARAMETRO UMA ARROW FUNCTION, UM ITEM QUE SEJA IGUAL AO DIGITADO PELO USUÁRIO
    verificarTempo(prato_atual.tempo, tempo_usuario) // FUNÇÃO verificarTempo COMPARA O VALOR PADRÃO COM O VALOR DEFINIDO

}

//FUNÇAO verificarTempo VERIFICA SE O TEMPO DIGITADO É SUFICIENTE, INSULFICIENTE OU DEMASIADO
function verificarTempo(tempo_padrao, tempo_definido) {
    const display = document.getElementById('microondas-saida')

    if (display.hasChildNodes()) { // CONDICIONAL CRIADA PARA QUE A SAIDA DO PROCESSAMENTO SEJA EXCLUIDA AO SOLICITAR AQUECIMENTO DE OUTRO PRATO
        display.removeChild(display.firstChild) 
    }

    if (tempo_definido > tempo_padrao * 3) {
        console.log('Kabuuuuuum');
        display.appendChild(document.createTextNode('Kabuuuuuum'))
        return
    } 
    
    else if (tempo_definido > tempo_padrao * 2) {
        console.log('Comida queimou');
        display.appendChild(document.createTextNode('Comida queimou'))
        return
    }

    else if (tempo_definido < tempo_padrao) {
        console.log('Tempo insuficiente');
        display.appendChild(document.createTextNode('Tempo insulficiente'))
        return
    }

    else {
        console.log('Prato está pronto')
        display.appendChild(document.createTextNode('Prato está pronto'))
    }
}

// MENU SUSPENSO dropdown menu - CADASTRAR PRATO
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// MENU SUSPENSO dropdown menu - AQUECER PRATO
function myFunction1() {
    document.getElementById("myDropdown1").classList.toggle("show");
}

//EVENTO DE CLICK PARA QUE AO CLICAR O BOTAO ENVIAR, O JS CRIE UM ELEMENTO <li> FILHO E ATRIBUA COMO VALOR O INPUT DO USUARIO
const btn = document.querySelector('#cad_prato')

btn.addEventListener('click', function(e) { 
    
    e.preventDefault();

    const prato = document.querySelector('#prato').value;
    const tempo_prato = document.getElementById('tempo').value; //VARIAVEL PARA ARMAZENAR O TEMPO PADRÃO DO NOVO PRATO

    const objeto_prato = { //TRANFORMEI PRATO E TEMPO EM UM OBJETO
        prato: prato,
        tempo: Number(tempo_prato)
    }
    
    lista_pratos.push(objeto_prato); // ARMAZENA NA LISTA DE OBJETOS O NOVO PRATO E TEMPO
    
    //appendChild METODO ADICIONA UM ELEMENTO FILHO <li> DENTRO DE OUTRO ELEMENTO HTML <ul>
    const el = document.createElement('li');
    el.innerHTML = prato;
    document.getElementById('pratos').appendChild(el)

    //appendChild METODO ADICIONA UM ELEMENTO FILHO <option> DENTRO DE OUTRO ELEMENTO HTML <select>
    const el2 = document.createElement('option')
    el2.innerHTML = prato;
    el2.value = prato;
    document.getElementById('pratos_option').appendChild(el2)

})

//MICROONDAS NO CLIQUE - EVENTO DE CLICK PARA QUE A FUNÇÃO microondas SEJA CHAMADA
const aquecer = document.getElementById("aquecer");

aquecer.addEventListener('click', function() {

    let select = document.getElementById("pratos_option").options[document.getElementById("pratos_option").selectedIndex].value
    let aquecimento_tempo = document.querySelector('#aquecimento_tempo').value
    
    microondas(select, aquecimento_tempo)
})

