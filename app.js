// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar o nome do amigo à lista
function adicionarAmigo() {
    // Captura o valor do campo de entrada
    const nome = document.getElementById('amigo').value.trim();

    // Validação: Se o campo estiver vazio, exibe um alerta
    if (nome === '') {
        alert('Por favor, insira um nome.');
        return; // Interrompe a função caso o nome esteja vazio
    }

    // Adiciona o nome ao array de amigos
    amigos.push(nome);

    // Limpa o campo de entrada
    document.getElementById('amigo').value = '';

    // Atualiza a lista de amigos na página
    atualizarListaAmigos();
}

// Função para exibir a lista de amigos
function atualizarListaAmigos() {
    // Obtém o elemento da lista onde os amigos serão exibidos
    const lista = document.getElementById('listaAmigos');

    // Limpa a lista existente para evitar duplicados
    lista.innerHTML = '';

    // Percorre o array de amigos e cria um item de lista para cada amigo
    for (let i = 0; i < amigos.length; i++) {
        // Cria um novo elemento <li> para cada amigo
        const li = document.createElement('li');
        li.textContent = amigos[i];

        // Adiciona o item à lista
        lista.appendChild(li);
    }
}

// Função para sortear um amigo
function sortearAmigo() {
    // Verifica se há amigos disponíveis no array
    if (amigos.length === 0) {
        alert('Não há amigos na lista para sortear.');
        return; // Interrompe a função se não houver amigos na lista
    }

    // Gera um índice aleatório entre 0 e o tamanho do array
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtém o nome do amigo sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Exibe o resultado no elemento de resultado
    document.getElementById('resultado').innerHTML = `O amigo sorteado é: ${amigoSorteado}`;
}
