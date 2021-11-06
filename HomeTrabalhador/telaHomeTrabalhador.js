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