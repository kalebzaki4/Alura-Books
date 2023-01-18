let livro = []
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscarLivrosDaAPI()
const elementoParaInserirLivros = document.getElementById('livros')

async function getBuscarLivrosDaAPI() {
    const res = await fetch(endpointDaAPI)
    livros = await res.json()
    console.table(livros)
    exibirOsLivrosNaTela(livros)
}

function exibirOsLivrosNaTela(listaDeLivros) {
    listaDeLivros.forEach(livro => {
        elementoParaInserirLivros.innerHTML += `
        <div class="livro">
        <img class="livro__imagens" src="${livro.imagem}" alt="${livro.alt}" />
        <h2 class="livro__titulo">
          Cangaceiro JavaScript:
          Uma aventura no sertão da programação
        </h2>
        <p class="livro__descricao">Flávio Almeida</p>
        <p class="livro__preco" id="preco">R$29,90</p>
        <div class="tags">
          <span class="tag">Front-end</span>
        </div>
      </div>
        `
    })
}