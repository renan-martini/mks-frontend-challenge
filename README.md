# Diretrizes do desafio

O objetivo principal desse teste foi avaliar a capacidade de escrever código limpo, bem testado e reutilizável. Para executar a aplicação localmente, instale as depêndencias do projeto utilizando o comando `npm i` e em seguida pode rodar os teste utilizando `npm run test` ou executar o servidor de desenvolvimento utilizando `npm run dev`.

## Tarefa (funcional)

Para esse desafio, foi necessário consumir a seguinte [API REST de produtos](https://mks-challenge-api-frontend.herokuapp.com/api-docs/) para exibir a lista de produtos da loja.

A aplicação deveria conter apenas uma página/rota e um carrinho.

- <b>Loja</b>: A lista de produtos deve ser buscada da API, deve ser usado um shimmer/skeleton enquanto estiver em loading.

- <b>Carrinho</b>: O carrinho deve conter todos os produtos selecionados, juntamente com a opção de aumentar a quantidade de cada produto selecionado.

Utilizando do Jest e a testing-library para realizar os testes unitários.

## Recursos

UI/UX: [Figma loja](https://www.figma.com/file/Z4z8osDbK1ET7cjNzFRMrK/MKS-Front-end-challenge?node-id=0%3A1) PS: O design system está incluso, incluindo a fonte.

API: [API REST de produtos](https://mks-challenge-api-frontend.herokuapp.com/api-docs/) para exibir a lista de produtos da loja.

## Ferramentas requeridas

1. TypeScript
2. React ou Next.js (Preferimos Next.js)
3. Redux toolkit
4. Styled-components
5. Jest

## Aspectos técnicos

Além das ferramentas listadas anteriormente, utilizei ChakraUI para determinados componentes.

## Deploy:

Deploy realizado no vercel: [Link do Projeto](https://mks-frontend-challenge-seven.vercel.app/)
