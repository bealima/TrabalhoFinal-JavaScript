const cadastrarUsuario = () => {
    let nomeCompletoInput = document.getElementById('nome-completo-input-cadastro')
    let dataInput = document.getElementById('data-nascimento-input-cadastro');
    let emailInput = document.getElementById('email-input-cadastro');
    let senhaInput = document.getElementById('password-input-login');

    // aqui entra lógica de POST para salvar usuário

    let candidato = { 
        nomeCompleto: nomeCompletoInput.value,
        dataNascimento: dataInput.value,
        email: emailInput.value,
        senha: senhaInput.value,
    }

    // Endpoint
    axios.post('http://localhost:3000/candidatos', candidato)
        .then((response) => {
            console.log('Candidato cadastrado cadastrado => ', response.data);
            resetarCampos(nomeCompletoInput, dataInput, emailInput, senhaInput);
        })
        .catch((error) => {
            console.log('Erro => ', error);
        });
};

