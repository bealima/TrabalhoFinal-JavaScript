/* Listra vagas e Acessar Detalhamento de vagas :
 event.listener("click", irpara página de detalhamento da vaga)*/


//botão sair: Logout- voltar para página de login , limpar dados 
//axios.post('http://localhost:3000/usuarios', {nome: "Ana", idade: 27});
//console.log("olaá")

let usuario = {
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
    candidatos = [],
    rejeitado = false
}

// let vagas = [{
//     id:2,
//     titulo: 'test3',
//     descricao: 'Teteteetxxe'
// },
// {
//     id:3,
//     titulo: 'test2',
//     descricao: 'Tetetaaeete'
// },
// {
//     id:6,
//     titulo: 'test1',
//     descricao: 'Teteteetsse'
// }]

//    let obj = {
//        vaga:[]
//    }

//    let job = vagas.find(o => o.id === 2);
//    obj.vaga.push(job)



class Usuario {
    tipo = '';
    nome = '';
    dataNascimento = '';
    email = '';
    senha = '';
    primeiroEmprego = '';
    candidaturas = '';
}

class Candidatura {
    idVaga = 0;
    idCandidato = 0;
    reprovado = false;
}

class Vaga{
    titulo;
    remuneracao; 
    candidatos = []
}