const vaga = () =>{
    // let elementoOrigem = document.getElementById('home');
    // let elementoDestino = document.getElementById('edit');
    // elementoOrigem.className = elementoOrigem.className.replace('d-flex', 'd-none');
    // elementoDestino.className = elementoDestino.className.replace('d-none', 'd-flex');

    let id = 13;
    let tituloVaga =  document.getElementById('titulo');
    let descricaoVaga = document.getElementById('descricao');
    let remuneracao = document.getElementById('remuneracao');
    let nomeCandidato = document.getElementById('nome');
    let dataNascimentoCandidato = document.getElementById('birthday');

    axios.get(`http://localhost:3000/vagas/${id}`)
    .then((response) => {
    let responseData = response.data;
    tituloVaga.innerText = responseData.titulo;
    descricaoVaga.innerText = responseData.descricao;
    remuneracao.innerText = responseData.remuneracao;

/* --------------- Candidato ---------------- */

    let arrayCandidatos = responseData.candidatos;
    let spreadCandidatos = [...arrayCandidatos];
    let candidato = spreadCandidatos.find( user => user.email === 'aa@bb.cc');
    console.log(candidato)
    
    

    nomeCandidato.innerText = candidato.nome;
    dataNascimentoCandidato.innerText = candidato.dataNascimento;
    // console.log(candidato);
    })
}

vaga();


