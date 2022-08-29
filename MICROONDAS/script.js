/* QUANDO O USUÁRIO CLICAR NO BOTÃO,
ALTERNAR ENTRE ESCONDER E MOSTRAR O CONTEÚDO DO MENU SUSPENSO */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
  
  // PARA FECHAR O MENU SUSPENSO QUANDO O USUÁRIO CLICAR FORA
//   window.onclick = function(event) {
//     if (!event.target.matches('.dropbtn')) {
//       var dropdowns = document.getElementsByClassName("dropdown-content");
//       var i;
//       for (i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains('show')) {
//           openDropdown.classList.remove('show');
//         }
//       }
//     }
//   }

function myFunction1() {
    document.getElementById("myDropdown1").classList.toggle("show");
}

//EVENTO DE CLICK PARA QUE AO CLICAR O BOTAO ENVIAR, O JS CRIE UM ELEMENTO <li> FILHO E ATRIBUA COMO VALOR O INPUT DO USUARIO
const btn = document.querySelector('#cad_prato')

btn.addEventListener('click', function(e) { 
    
    const prato = document.querySelector('#prato').value;
    //appendChild METODO ADICIONA UM ELEMENTO FILHO <li> DENTRO DE OUTRO ELEMENTO HTML <ul>
    const el = document.createElement('li');
    el.innerHTML = prato;
    document.getElementById('pratos').appendChild(el)
    //appendChild METODO ADICIONA UM ELEMENTO FILHO <option> DENTRO DE OUTRO ELEMENTO HTML <select>
    const el2 = document.createElement('option')
    el2.innerHTML = prato;
    document.getElementById('pratos_option').appendChild(el2)

    e.preventDefault();
})


//MICROONDAS NO CLIQUE - EVENTO DE CLICK PARA QUE A FUNÇÃO microondas SEJA CHAMADA

const aquecer = document.getElementById("aquecer");

aquecer.addEventListener('click', function() {

    //O VALOR ATRIBUIDO ACESSA AS OPCOES DO <select> PORÉM NÃO CONSIGO CHAMAR ELE ATRAVÉS DA VARIAVEL select
    let select = document.getElementById("pratos_option").options[document.getElementById("pratos_option").selectedIndex].value

    let aquecimento_tempo = document.querySelector('#aquecimento_tempo').value
    

    microondas(select, aquecimento_tempo)

})

