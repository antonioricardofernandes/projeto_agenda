const form = document.getElementById('form-agenda');
const nomes = [];
const numeros = [];
const observacoes = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela()
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');
    const inputObservacaoContato = document.getElementById('observacao-contato');

    if (nomes.includes(inputNomeContato.value)) {
        alert(`O contato: ${inputNomeContato.value} já está cadastrado.`);
    
    } else if (numeros.includes(inputNumeroContato.value)) {
        alert(`O número: ${inputNumeroContato.value} já está cadastrado.`);

    } else {
    nomes.push(inputNomeContato.value);
    numeros.push(inputNumeroContato.value);
    observacoes.push(inputObservacaoContato.value);

    let linha = '<tr>';
    linha += `<td class="interior">${inputNomeContato.value}</td>`;
    linha += `<td class="interior">${inputNumeroContato.value}</td>`;
    linha += `<td class="interior">${inputObservacaoContato.value}</td>`;
    linha += `</tr>`;

    linhas += linha;
    }

    inputNomeContato.value='';
    inputNumeroContato.value='';  
    inputObservacaoContato.value='';  
}

function atualizaTabela() {
    const corpotabela = document.querySelector('tbody');
    corpotabela.innerHTML = linhas;
}
