
const abrirTelacadastroVaga = () => {
    let btnCadastrarVaga =  document.getElementById('btnCadastrarVagaHome');
    console.log(btnCadastrarVaga);
    btnCadastrarVaga.addEventListener('click', telaCadastroVaga);
};

const telaCadastroVaga = () => {
//---------- Apagando Main --------------------------------------
    let blocoMain = document.getElementById('blocoMain');
    blocoMain.setAttribute('style', 'display:none');

    

    let main = document.getElementById('main');
    main.setAttribute('class', 'classMainCadastroVagas' );
    

    let divInputs = document.createElement('div');
    divInputs.setAttribute('class', 'classDivInputs');   
    main.appendChild(divInputs);

    
    let divInputTitulo = document.createElement('div');
    divInputTitulo.setAttribute('class', 'classDivInputTitulo');
    divInputs.appendChild(divInputTitulo);
    
    let inputTitulo = document.createElement('input');
    inputTitulo.setAttribute('class', 'classInputTitulo');
    divInputTitulo.appendChild(inputTitulo);

    let divInputDescricao = document.createElement('div');
    divInputDescricao.setAttribute('class', 'classDivInputDescricao');
    divInputs.appendChild(divInputDescricao);

    let inputDescricao = document.createElement('input');
    inputDescricao.setAttribute('class', 'classInputDescricao');
    divInputDescricao.appendChild(inputDescricao);
    

    let divInputRemuneracao = document.createElement('div');
    divInputRemuneracao.setAttribute('class', 'classDivInputRemuneracao');
    divInputs.appendChild(divInputRemuneracao);

    let inputRemuneracao = document.createElement('input');
    inputRemuneracao.setAttribute('class', 'classInputRemuneracao');
    divInputRemuneracao.appendChild(inputRemuneracao);

  
    let divButtonsCadastrarVagas = document.createElement('div');
    divButtonsCadastrarVagas.setAttribute('class','classDivButtonsCadastrarVagas');
    divInputs.appendChild(divButtonsCadastrarVagas);

    let btnSairTelaCadastroVaga = document.createElement('button');
    btnSairTelaCadastroVaga.setAttribute('class', 'classBtnSairTelaCadastroVaga');
    divButtonsCadastrarVagas.appendChild(btnSairTelaCadastroVaga);

    let btnCadastrarTelaCadastroVaga = document.createElement('button');
    btnCadastrarTelaCadastroVaga.setAttribute('class', 'classBtnCadastrarTelaCadastroVaga');
    divButtonsCadastrarVagas.appendChild(btnCadastrarTelaCadastroVaga);
    

// ---------- Colocando os Inputs na DIV --------------------------
    

    
}

abrirTelacadastroVaga()


//---------Cadastrar Vaga --------------------------

const cadastrarVaga = () => {

    let nomeCompletoInput = document.getElementById('nome-completo-input-cadastro');
    let dataInput = document.getElementById('data-nascimento-input-cadastro');
    let emailInput = document.getElementById('email-input-cadastro');
    let senhaInput = document.getElementById('password-input-cadastro');
    let checkbox = document.getElementById('checkbox');
    
    let vaga = {
        titulo : nomeCompletoInput.value,
        descricao : dataInput.value,
        remuneracao : emailInput.value,
        candidatos : senhaInput.value,
        rejeitado : checkbox.value,
        
    }

}
//----------------Axio Post---------------------------
// let gravarVagas = async() => {
//     let vaga = {

//         titulo : '',
//         descricao : '',
//         remuneracao : '',
//         candidatos : [],
//         rejeitado : false
//     }

//     let response = await axios.post ('http://localhost:3000/vagas', vaga);
//     console.log(response);
// };
// gravarVagas()