const perguntas = [
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      respostas: [
        "var myVar;",
        "let myVar;",
        "const myVar;",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do operador '===' em JavaScript?",
      respostas: [
        "Comparação estrita (valor e tipo)",
        "Atribuição",
        "Comparação solta (apenas valor)",
      ],
      correta: 0
    },
    {
      pergunta: "Como você faz um loop 'for' que itera de 0 a 4 em JavaScript?",
      respostas: [
        "for (let i = 1; i <= 4; i++)",
        "for (let i = 0; i < 5; i++)",
        "for (let i = 0; i <= 4; i++)",
      ],
      correta: 2
    },
    {
      pergunta: "O que o método 'querySelector' faz em JavaScript?",
      respostas: [
        "Seleciona vários elementos",
        "Seleciona o primeiro elemento que corresponde a um seletor CSS",
        "Seleciona todos os elementos filhos de um elemento",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do método 'map' em arrays JavaScript?",
      respostas: [
        "Itera sobre os elementos e retorna uma nova array modificada",
        "Filtra os elementos da array com base em uma condição",
        "Inverte a ordem dos elementos na array",
      ],
      correta: 0
    },
    {
      pergunta: "O que o operador '&&' faz em JavaScript?",
      respostas: [
        "Concatena duas strings",
        "Executa uma operação lógica 'E' entre dois valores",
        "Converte um valor para tipo booleano",
      ],
      correta: 1
    },
    {
      pergunta: "Como se escreve um comentário de linha única em JavaScript?",
      respostas: [
        "// Comentário",
        "/* Comentário */",
        "# Comentário",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do método 'push' em arrays JavaScript?",
      respostas: [
        "Remove o último elemento da array",
        "Adiciona um elemento ao final da array",
        "Inverte a ordem dos elementos na array",
      ],
      correta: 1
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Document Object Model - Uma interface para interagir com documentos HTML e XML",
        "Uma biblioteca popular de JavaScript",
        "Um método para declarar variáveis",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a diferença entre 'let' e 'const' na declaração de variáveis?",
      respostas: [
        "'let' é usado para variáveis que não mudam, enquanto 'const' é para variáveis mutáveis",
        "'let' é usado para variáveis mutáveis, enquanto 'const' é para variáveis que não mudam",
        "Não há diferença entre 'let' e 'const'",
      ],
      correta: 1
    },
  ];
  
const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')
  
  
//mostra quantidade de perguntas acertadas
const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  
//loop de toda a repetição abaixo
for(const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta
  
  for(const resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
  
  
    //separa as perguntas para análise infividual no código
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
  
  
    //analisa qual é a verdadeira e as falsas das perguntas
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
  
  
      //analisa e aumenta ou abaixa a contagem de acertos quando respondidas
      corretas.delete(item)
      if(estaCorreta) {
        corretas.add(item)
      }
  
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
  
    quizItem.querySelector('dl').appendChild(dt)
  }
  
  quizItem.querySelector('dl dt').remove()
  
  quiz.appendChild(quizItem)
}