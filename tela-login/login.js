const validarLogin = () => {
    axios.get('http://localhost:3000/usuarios' )
        .then(response => {
            let emailDigitado = document.getElementById('email-input-login').value;
            let senhaDigitada = document.getElementById('password-input-login').value;
            
            let podeLogar = response.data.some(c => c.email === emailDigitado && c.senha === senhaDigitada);
            
            
            
            if(podeLogar) {
                changePage();
            }else{
                alert('Usuário ou senha inválido')
            }
        })
        .catch(error => console.error(error));

        
}

const changePage = () => {
    window.location.href = '/Aula 10/TrabalhoFinal-JavaScript/tela-cadastro/cadastro.html'
}