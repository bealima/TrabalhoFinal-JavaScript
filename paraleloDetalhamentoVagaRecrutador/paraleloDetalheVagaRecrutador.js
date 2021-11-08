const direcionarDetalheVaga = async () =>{
    
    let responseId = await axios.get('http://localhost:3000/idVagaAtual/0')

    let id = responseId.data.idAtual;
    
    // let elementoOrigem = document.getElementById('home');
    // let elementoDestino = document.getElementById('edit');
    // elementoOrigem.className = elementoOrigem.className.replace('d-flex', 'd-none');
    // elementoDestino.className = elementoDestino.className.replace('d-none', 'd-flex');

    // let vagaId = id;
    console.log(id)
    let tituloVaga =  document.getElementById('titulo');
    let descricaoVaga = document.getElementById('descricao');
    let remuneracao = document.getElementById('remuneracao');
    let nomeCandidato = document.getElementById('nome');
    let dataNascimentoCandidato = document.getElementById('birthday');

    let response = await axios.get(`http://localhost:3000/vagas/${id}`)
    
    let responseData = response.data;
    
    tituloVaga.innerText = responseData.titulo;
    console.log(response.titulo)
    descricaoVaga.innerText = responseData.descricao;
    remuneracao.innerText = responseData.remuneracao;
    console.log(responseData)

/* --------------- Candidato ---------------- */

    let arrayCandidatos = responseData.candidatos;
    let spreadCandidatos = [...arrayCandidatos];
    let candidato = spreadCandidatos.find( user => user.email === 'dcruzbhha2@gmail.com');
    console.log(candidato)
    
    

    nomeCandidato.innerText = candidato.nome;
    dataNascimentoCandidato.innerText = candidato.dataNascimento;
    // console.log(candidato);
   

    // window.location.href = '../paraleloDetalhamentoVagaRecrutador/paraleloDetalheVagaRecrutador.html'
}

direcionarDetalheVaga()