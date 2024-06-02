/*for (var produto of produtos) {
    console.log(produto)
}*/

var bancoDeDados = [
    {
        nome: "Bolu de murangu",
        descricao: "Melhor bolo do mundo",
        preco: 10000,
        imagem: "https://via.placeholder.com/150"
    },
    {
        nome: "Bolo de chocolate",
        descricao: "Bolo toooooop",
        preco: 100,
        imagem: "https://via.placeholder.com/150"
    },
    {
        nome: "Bolo de cenoura com chocolate",
        descricao: "Hmmmmmmmm bolinho de cenoura",
        preco: 200,
        imagem: "https://via.placeholder.com/150"
    }
]

var conteudoPrincipal = document.getElementById('conteudo-principal')

for (var produto of bancoDeDados) {
    var conteudoProduto = document.createElement('div')
    conteudoProduto.className = "conteudo-produto"

    var imagem = document.createElement('img')
    imagem.src = produto.imagem
    conteudoProduto.appendChild(imagem)
    
    nomeProduto

    var nomeProduto = document.createElement('h2')
    nomeProduto.textContent = produto.nome
    conteudoProduto.appendChild(nomeProduto)

    var descricaoProduto = document.createElement()
    descricaoProduto.textContent = produto.descricao
    conteudoProduto.appendChild(descricaoProduto)

    var precoProduto = documento.createElement('p')
    precoProduto.textContent = `${produto.preco}`
    conteudoProduto.appendChild(precoProduto)

    var botoes = documetn.createElement('div')
    botoes.className = "btn"
    conteudoProduto.appendChild(botoes)

    var botaoComprar = document.createElement('button')
    botaoComprar.textContent = "Comprar"
    botoes.appendChild(botaoComprar)

    var botaoDetalhes = document.createElement('button')
    botaoComprar.textContent = "Detalhes"
    botoes.appendChild(botaoDetalhes)

    conteudoProduto.appendChild(botoes)

    conteudoPrincipal.appendChild(conteudoProduto)
}

//var img = document.createElement('img')
//img.src = "https://br.freepik.com/vetores-gratis/astronauta-bonito-pendurado-na-ilustracao-do-icone-do-vetor-dos-desenhos-animados-da-estrela-icone-da-tecnologia-da-ciencia-isolado_49484634.htm#query=astronauta%20estrela&position=1&from_view=keyword&track=ais_user&uuid=9a73d558-2587-4278-b74d-daebe78829ae"

/*var paragrafo = document.createElement('p')
paragrafo.textContent = "Isso é um paragrafo"*/

/*var botao = document.createElement('button')
botao.textContent = "Login"*/

//conteudoPrincipal.appendChild(img)
//conteudoPrincipal.appendChild(paragrafo)
//conteudoPrincipal.appendChild(botao)