
const abrirTelacadastroVaga = () => {
    let btnCadastrarVaga =  document.getElementById('btnCadastrarVagaHome');
    btnCadastrarVaga.addEventListener('click', telaCadastroVaga);
};

const telaCadastroVaga = () => {
//---------- Apagando Main --------------------------------------
    let blocoMain = document.getElementById('blocoMain');
    blocoMain.setAttribute('style', 'display:none');

    
    let main = document.getElementById('main');
    main.setAttribute('class', 'classMainCadastroVagas');
    

    let divInputs = document.createElement('div');
    divInputs.setAttribute('class', 'classDivInputs');   
    main.appendChild(divInputs);

    
    let divInputTitulo = document.createElement('div');
    divInputTitulo.setAttribute('class', 'classDivInputTitulo');
    divInputs.appendChild(divInputTitulo);
    
    let h3Titulo = document.createElement('h3');
    h3Titulo.innerText = 'Título da Vaga:'
    divInputTitulo.appendChild(h3Titulo);

    let inputTitulo = document.createElement('input');
    inputTitulo.setAttribute('class', 'classInputTitulo');
    divInputTitulo.appendChild(inputTitulo);


    let divInputRemuneracao = document.createElement('div');
    divInputRemuneracao.setAttribute('class', 'classDivInputRemuneracao');
    divInputs.appendChild(divInputRemuneracao);

    let h3Remuneracao = document.createElement('h3');
    h3Remuneracao.innerText = 'Salário: '
    divInputRemuneracao.appendChild(h3Remuneracao);

    let inputRemuneracao = document.createElement('input');
    inputRemuneracao.setAttribute('class', 'classInputRemuneracao');
    divInputRemuneracao.appendChild(inputRemuneracao);

    let divInputDescricao = document.createElement('div');
    divInputDescricao.setAttribute('class', 'classDivInputDescricao');
    divInputs.appendChild(divInputDescricao);

    let h3Descricao = document.createElement('h3');
    h3Descricao.innerText = 'Descrição da vaga:'
    divInputDescricao.appendChild(h3Descricao);

    let inputDescricao = document.createElement('input');
    inputDescricao.setAttribute('class', 'classInputDescricao');
    divInputDescricao.appendChild(inputDescricao);

  
    let divButtonsCadastrarVagas = document.createElement('div');
    divButtonsCadastrarVagas.setAttribute('class','classDivButtonsCadastrarVagas');
    divInputs.appendChild(divButtonsCadastrarVagas);

    let btnSairTelaCadastroVaga = document.createElement('button');
    btnSairTelaCadastroVaga.setAttribute('class', 'classBtnSairTelaCadastroVaga');
    btnSairTelaCadastroVaga.innerText = 'Voltar'
    divButtonsCadastrarVagas.appendChild(btnSairTelaCadastroVaga);

    let btnCadastrarTelaCadastroVaga = document.createElement('button');
    btnCadastrarTelaCadastroVaga.setAttribute('class', 'classBtnCadastrarTelaCadastroVaga');
    btnCadastrarTelaCadastroVaga.innerText = 'Cadastrar'
    divButtonsCadastrarVagas.appendChild(btnCadastrarTelaCadastroVaga); 
    
    const cadastrarVaga = () => { 
       
        console.log('String test')
        
        class Vaga{
            titulo = '';
            descricao = '';
            remuneracao = ''; 
            candidatos = []
        }

        let vaga = new Vaga();
        vaga.titulo = inputTitulo.value;
        vaga.descricao = inputDescricao.value;
        vaga.remuneracao = inputRemuneracao.value;
        vaga.candidatos = [];


        // let vaga = {
        //     titulo : inputTitulo.value,
        //     remuneracao : inputRemuneracao.value,
        //     descricao : inputDescricao.value,
        //     candidatos :[] ,
        //     rejeitado : false
            
        // };
    
        axios.post('http://localhost:3000/vagas', vaga)
        .then((response) => {
            console.log('Vaga cadastrada => ', response.data);
            resetarCampos(inputTitulo, inputRemuneracao, inputDescricao);
        })
        .catch((error) => {
            console.log('Erro => ', error);
        });
    
    };

    btnCadastrarTelaCadastroVaga.addEventListener('click', cadastrarVaga);
    
    
}

abrirTelacadastroVaga()

