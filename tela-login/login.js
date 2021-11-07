const validarLogin = () => {
    axios.get('http://localhost:3000/candidatos', candidato)
        .then(response => {
            let emailDigitado = document.getElementById('email-input-login').value;
            let senhaDigitada = document.getElementById('password-input-login').value;
            
            let podeLogar = response.data.some(c => c.email === emailDigitado && c.senha === senhaDigitada);

            if(podeLogar) {
                irPara('login', 'home');
            }
        })
        .catch(error => console.error(error));
}