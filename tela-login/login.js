const validarLogin = () => {
    axios.get('http://localhost:3000/usuarios' )
        .then(response => {
            let emailDigitado = document.getElementById('email-input-login').value;
            let senhaDigitada = document.getElementById('password-input-login').value;
            let podeLogar = response.data.some(c => c.email === emailDigitado && c.senha === senhaDigitada);

            if(podeLogar) {
                changePage(); //falta setar pra onde vai
            }else{
                alert('Usuário ou senha inválido');
            }
        })
        .catch(error => console.error(error));
}


const esqueceuSenha = () => {
    let emailRemind = prompt('Digite seu email cadastrado')

    axios.get('http://localhost:3000/usuarios' )
        .then(response => {
            let emailDigitado = emailRemind;
            let responseData = response.data;
            let userEmail = responseData.find(email => emailDigitado === email.email);
            alert(`Sua senha é: ${userEmail.tipo}`);
        })
        .catch(error => console.error(error));
}

// Mudar páginas
const changePage = () => {
    axios.get('http://localhost:3000/usuarios' )
    .then(response => {
        let emailDigitado = document.getElementById('email-input-login').value;
        let responseData = response.data;
        let userEmail = responseData.find(email => emailDigitado === email.email);
        let typeUsuario = userEmail.tipo;
        if(typeUsuario === '1'){
            window.location.href = '/Aula 10/TrabalhoFinal-JavaScript/HomeTrabalhador/telaHomeTrabalhador.html'
        } else {
            window.location.href = '/Aula 10/TrabalhoFinal-JavaScript/HomeRecrutador/telaHomeTrabalhador.html'
        }
    })
    .catch(error => console.error(error)); 
}

const changePageToCadastro = () => {
    window.location.href = '/Aula 10/TrabalhoFinal-JavaScript/tela-cadastro/cadastro.html'
}


