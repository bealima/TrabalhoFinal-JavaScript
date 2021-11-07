//#region OBJETOS
    // let candidato = { 
    //     nomeCompleto: nomeCompletoInput.value,
    //     dataNascimento: dataInput.value,
    //     email: emailInput.value,
    //     senha: senhaInput.value,
    // }

    let trabalhador = {
        nome : '',
        dataNascimento : '',
        email : '',
        senha : '',
        primeiroEmprego : null,
        tipoUsuario : '',
        vagasCadastradas : [{id:0, rejeitado:false}]
    }

    let vaga = {
        titulo : '',
        descricao : '',
        remuneracao : '',
        candidatos : [],
        rejeitado : false
    }
//#endregion
class Usuario {
    tipo = '';
    nome = '';
    dataNascimento = '';
    email = '';
    senha = '';
    primeiroEmprego = '';
    candidaturas = [];
}


// Cadastro nome de usuário

const cadastrarUsuario = () => {
    let nomeCompletoInput = document.getElementById('nome-completo-input-cadastro');
    let dataInput = document.getElementById('data-nascimento-input-cadastro');
    let emailInput = document.getElementById('email-input-cadastro');
    let senhaInput = document.getElementById('password-input-cadastro');
    let checkbox = document.getElementById('checkbox');
    if (checkbox.checked === true) {
        checkbox.value = true ;  
    }
    else {
        checkbox.value = false;
    }
    let select = document.getElementById('tipo-cadastro');
     

    let usuario = new Usuario();
    usuario.nome = nomeCompletoInput.value;
    usuario.dataNascimento = dataInput.value;
    usuario.email = emailInput.value;
    usuario.senha = senhaInput.value;
    usuario.primeiroEmprego = checkbox.value;
    usuario.tipo = select.value;
    usuario.candidaturas = [];

    // let trabalhador = {
    //     nome : nomeCompletoInput.value,
    //     dataNascimento : dataInput.value,
    //     email : emailInput.value,
    //     senha : senhaInput.value,
    //     primeiroEmprego : checkbox.value,
    //     tipoUsuario : select.value,
    //     vagasCadastradas : []
    // }

    console.log(trabalhador)
    axios.post('http://localhost:3000/usuarios', usuario)
    .then((response) => {
        console.log('Candidato cadastrado cadastrado => ', response.data);
        resetarCampos(nomeCompletoInput, dataInput, emailInput, senhaInput);
    })
    .catch((error) => {
        console.log('Erro => ', error);
    });


};

// function checkboxChecked(){
//     let dataInput = document.getElementById('data-nascimento-input-cadastro');
//     console.log(dataInput.value);
//     let checkbox = document.getElementById('checkbox');
//     if (checkbox.checked === true) {
//         let checked = checkbox.checked;
//         console.log(checked)
//     }
    
// }

// let birthDate = moment('04-03-1998', 'DDMMYYYY').format('DD/MM/YYYY')

// moment().diff(birthDate, 'years')



// Validar nome
const validarNome = () => {
    // BUG >>> 'Senha inválida' some a partir do espaço'
    let inputNome = document.getElementById('nome-completo-input-cadastro').value;
    let nameStr = inputNome.split(' ');
    let nameCheck = nameStr.length > 1;
    let erroNome = document.getElementById('nome-completo-cadastro-erro');
    erroNome.setAttribute('style', nameCheck ? 'display: none' : 'color: red');
    

    return nameCheck;
}


// Validar data
const validarData = () => { 
    let inputData = document.getElementById('data-nascimento-input-cadastro').value;
    let conversor = moment(inputData).format('DD/MM/YYYY');
    let hoje = moment().format('DD/MM/YYYY');
    let dezoitoAnosAtras = moment(hoje).diff(conversor, 'years');
    let ehValido = dezoitoAnosAtras >= 18; 
    let erroData = document.getElementById('birth-date-cadastro-erro');
    erroData.setAttribute('style', ehValido ? 'display: none' : 'color: red');

    return ehValido;
}




// Validar email
const validarEmail = () => {
    let emailDigitado = document.getElementById('email-input-cadastro').value;
    let listaCaracteres = emailDigitado.split(''); // [...emailDigitado]
    let emailSplit = emailDigitado.split('@');
    let possuiArroba = emailSplit.length > 1;
    let dominioEmail = possuiArroba ? emailSplit[1] : '';
    let dominioEmailSplit = dominioEmail.split('.');
    let possuiPontosNoDominio = dominioEmailSplit.length > 1;
    let possuiCaracteresEntrePontos = dominioEmailSplit.every( d => d.length > 1 );
    let comecaComLetra = listaCaracteres.length ? listaCaracteres[0].toUpperCase() !== listaCaracteres[0].toLowerCase() : false;
    let ehValido = possuiArroba && possuiPontosNoDominio && possuiCaracteresEntrePontos && comecaComLetra;
    let erroEmail = document.getElementById('email-cadastro-erro');
    erroEmail.setAttribute('style', ehValido ? 'display: none' : 'color: red');

    return ehValido;
}



// Cadastro de senha

const validarSenha = () => {
    let senhaDigitada = document.getElementById('password-input-cadastro').value;
    let listaCaracteres = senhaDigitada.split('');
    let letras = listaCaracteres.filter( char => char.toLowerCase() !== char.toUpperCase() );
    let possuiLetraMaiuscula = letras.some( l => l.toUpperCase() === l ); // "A".toUppercase() === "A"
    let possuiLetraMinuscula = letras.some( l => l.toLowerCase() === l );
    let possuiCharEspecial = listaCaracteres.some( char => char.toLowerCase() === char.toUpperCase() && isNaN(parseInt(char)) );
    let possuiNumero = listaCaracteres.some( char => char.toLowerCase() === char.toUpperCase() && !isNaN(parseInt(char)) );
    let possuiOitoCaracteres = senhaDigitada.length >= 8;
    let naoPossuiEspacos = !senhaDigitada.includes(' ');
    let ehValido = possuiOitoCaracteres && possuiLetraMaiuscula && possuiLetraMinuscula && 
        possuiCharEspecial && possuiNumero && naoPossuiEspacos;
    let erroSenha = document.getElementById('senha-invalida-cadastro');
    erroSenha.setAttribute('style', ehValido ? 'display: none' : 'color: red');

    return ehValido;
}

const validarLogin = () => {
    let cadastroValido =  validarEmail() && validarSenha() && validarData() ;
    console.log(`Cadastro ${cadastroValido ? 'válido!' : 'inválido'}`);

    if(cadastroValido) {
        cadastrarUsuario();
    }
}
// reset de campos

const resetarCampos = (...campos) => {
    campos.forEach(c => c.value = '');
}



const changePage = () => {
    window.location.href = '/Aula 10/TrabalhoFinal-JavaScript/tela-login/Login.html'
}


// end point
// axios.post('http://localhost:3000/candidatos', candidato)
// .then((response) => {
//     console.log('Candidato cadastrado cadastrado => ', response.data);
//     resetarCampos(nomeCompletoInput, dataInput, emailInput, senhaInput);
// })
// .catch((error) => {
//     console.log('Erro => ', error);
// });