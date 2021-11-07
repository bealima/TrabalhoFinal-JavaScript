/*Acessar Detalhamento de vagas :
 event.listener("click", irpara página de detalhamento da vaga)*/

//botão sair: Logout- voltar para página de login , limpar dados 

/* Cadatrar vaga: 

    tela de cadastro : 

    - título
    - descrição
    - remuneração
    - botão voltar
    - botão cadastar

*/

const cadastrarVaga = () => {
    let btnCadastrarVaga =  document.getElementById('btnCadastrarVagaHome');
    console.log(btnCadastrarVaga);
    btnCadastrarVaga.addEventListener('click', telaCadastroVaga);
};

const telaCadastroVaga = () => {
//---------- Apagando Main --------------------------------------
    let blocoMain = document.getElementById('blocoMain');
    blocoMain.setAttribute('style', 'display:none');

    

    let divInputTitulo = document.createElement('div');

//---------- Criação Inputs ----------------------------------
    let main = document.getElementById('main');
    
    let inputitulo = document.createElement('input');
    inputitulo.setAttribute('type','text')

    let inputDescricao = document.createElement('input');
    inputitulo.setAttribute('type','text')

    let inputRemuneracao = document.createElement('input');
    inputitulo.setAttribute('type','text')

// ---------- Colocando os Inputs na DIV --------------------------
    divInputTitulo.appendChild(inputitulo);

    divInputTitulo.appendChild(inputDescricao);

    divInputTitulo.appendChild(inputRemuneracao);

    main.appendChild(divInputTitulo);

    
}

cadastrarVaga()
