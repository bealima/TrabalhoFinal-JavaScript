let trabalhador = {
    nome = '',
    dataNascimento = '',
    email = '',
    senha = '',
    primeiroEmprego = null,
    tipoUsuario = '',
    vagasCadastradas = [{id:0, rejeitado:false}]
}

let vaga = {
    titulo = '',
    descricao = '',
    remuneracao = '',
    candidatos = []
}

// const restornarVagaClicada = () => {
//     // axios.get('http://localhost:3000/vagas')
//     // .then((response) => {
//     //     let responseData = response.data;
        
//         let main = document.getElementById('main');
//         console.log(response);

//         let vagasHome = document.createElement('div');
//         vagasHome.setAttribute('class', 'classVagasHome');
//         main.appendChild(vagasHome);
//         vagasHome.addEventListener('click', direcionarDetalheVaga );

//         let spanTitulo = document.createElement('span');
//         spanTitulo.setAttribute('class', 'classSpan');
//         vagasHome.appendChild(spanTitulo);

//         let h4Titulo = document.createElement('h4');
//         h4Titulo.setAttribute('class', 'classh4');
//         h4Titulo.innerText = 'Titulo: '
//         spanTitulo.appendChild(h4Titulo);

//         let divTitulo = document.createElement('div');
//         divTitulo.setAttribute('class', 'classDivTitulo')
//         spanTitulo.appendChild(divTitulo);

//         let spanRemuneracao = document.createElement('span');
//         spanRemuneracao.setAttribute('class', 'classSpan');
//         vagasHome.appendChild(spanRemuneracao);

//         let h4Remuneracao = document.createElement('h4');
//         h4Remuneracao.setAttribute('class', 'classh4');
//         h4Remuneracao.innerText = 'Remuneração: R$ '
//         spanRemuneracao.appendChild(h4Remuneracao);

//         let divRemuneracao = document.createElement('div');
//         divRemuneracao.setAttribute('class', 'classDivRemuneracao')
//         spanRemuneracao.appendChild(divRemuneracao);

//         divTitulo.innerText = 'titulo' 
//         divRemuneracao.innerText = 'remuneracao'
//         //console.log(element);
            
//     });
// }

// restornarVagaClicada()