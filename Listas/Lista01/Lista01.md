Lista 1- Conhecendo JAVA
 Prazo de entrega: 26/04/2024 até 23:59 (Sexta)
 Instruções de entrega: Você deve ter um repositório em seu github para a disciplina de POO chamado Programacao-Orientado-Objetos.
 Crie uma pasta dentro dele chamada Listas e dentro dela crie uma pasta chamada Lista1.
 Para cada exercício da lista deve ser criado um projeto java.
 Ao terminar a lista, suba seus exercícios no github e envie o link no formulário abaixo.
 Link para o formulário de envio: https://forms.gle/23nteGuMMb2wS83CA
 MONITORIAS: Serão realizados quatro dias de monitorias para auxiliar com a resolução dos exercícios. As datas e horários das monitorias são:
 Dia
 Segunda-Feira
 Terça-Feira
 Horários
 19h até 21h
 19h até 21h
Quarta-Feira
 Quinta-Feira
 Sexta-Feira
 09h até 11h
 19h até 21h
 09h até 11h
 19h até 21h
19h até 21h--
22h até 23:59
 OBS: Se você não conseguir participar das monitorias nos dias e horários propostos, você pode solicitar uma monitoria em uma data e horário diferente, desde que seja comunicado com pelo menos um dia de antecedência 
�
�
Exercícios
 1. Crie um programa em JAVA que contenha um vetor de tamanho 10 em escopo global para armazenar nomes.
 O programa deve ter as seguintes funções:
 1. A primeira função deve preencher o vetor com nomes, utilizando o Scanner para receber esses nomes via teclado.
 2. A segunda função deve receber um nome por parâmetro e buscá-lo no vetor de nomes, retorne true se encontrar e false se não.
 Função main:
 A main deve chamar a função 1 para preencher o vetor de nomes, após preenchê-lo, seu programa deve receber um novo nome e armazená-lo em uma variável comum. Esse nome deve ser passado por parâmetro para a função 2 buscá-lo no vetor.
 Seu programa deve armazenar o retorno da função 2 em uma variável do tipo boolean. Caso a função retornar true, seu programa deve escrever a mensagem ACHEI, se retornar false, seu programa deve exibir a mensagem NAO ACHEI.
 OBS:A não utilização do vetor global e das funções acarretará em nota 0.
 Exemplo de entrada:
 ● Joao
 ● Maria
 ● Rosa
 ● Lucas
 ● Guilhermina
 ● Guto
 ● Laura
 ● Isaias
 ● Alice
 ● Ivan
 ● Julia →nomedigitado para busca
 Saída esperada:
 ● NAOACHEI
 Exemplo de entrada:
 ● Joao
 ● Maria
 ● Rosa
 ● Lucas
 ● Guilhermina
 ● Guto
 ● Laura
● Isaias
 ● Alice
 ● Ivan
 ● Rosa→nomedigitado para busca
 Saída esperada:
 ● ACHEI
 2. Um dos jogos mais influentes da história recente dos videogames é The Legend of Zelda: Breath of the Wild. O jogo preza pela liberdade, onde o jogador pode escolher o que fazer, quando, como, e isso inclui a liberação do mapa.
 Espalhado pelo mundo temos as torres Sheikah.
 Quando o jogador escala uma dessas, ele pode escanear essa região do mapa, e conseguir visualizar as localizações ao redor.
 Crie um programa em JAVA que contenha uma matriz booleana 4 por 4 em escopo global para representar o mapa do Breath of the Wild.
O programa deve ter as seguintes funções:
 1. A primeira função deve percorrer a matriz preenchendo todas as células com valor false.
 2. A segunda função deve receber por parâmetro a linha e coluna de onde o jogador está no mapa e mudar para true na matriz a localização referente às
 coordenadas recebidas.
 3. A terceira função deve imprimir a matriz e onde for true imprimir O se for false X
 Função main:
 A main deve chamar a função 1 para preencher a matriz, após isso seu programa deve receber via teclado às coordenadas da torre a ser ativada e armazenar esses valores em variáveis comuns. As coordenadas devem ser passadas por parâmetro para a função 2 ativar a torre daquela região.
 No final, seu programa deve chamar a função 3 para imprimir o mapa na tela.
 Exemplo de entrada:
 ● 2
 3
 Saída esperada:
 ● |X|X|X|X|
 |X|X|X|X|
 |X|X|X|O|
 |X|X|X|X|