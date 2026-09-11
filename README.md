# FILMEX

![React Native](https://img.shields.io/badge/React_Native-20232A?style=flat&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-000020?style=flat&logo=expo&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

Catálogo de filmes em React Native, organizado por categorias (Romance, Comédias, Ação e Aventura), com carrossel horizontal em cada uma — parecido com a interface da Netflix, mas com filmes escolhidos a dedo.

Fiz esse projeto como parte do Checkpoint 1 da disciplina de Cross-Platform Application Development, focado em praticar componentização e listas performáticas em React Native.

---

## O que ele faz

O app mostra uma tela única com várias categorias empilhadas verticalmente. Cada categoria tem seus próprios filmes, e dá pra rolar de lado pra ver todos eles sem sair da categoria. Os pôsteres e títulos vêm de um arquivo de dados separado, então é fácil trocar os filmes ou adicionar categorias novas sem mexer na lógica do app.

## Screenshots

<p>
  <img src="./screenshots/print3.png" width="260" />
  <img src="./screenshots/print2.png" width="260" />
</p>

## Tecnologias

`React Native` · `Expo` · `JavaScript`

## Estrutura do projeto

App.js → monta a tela, junta o Header e as categorias
Header.jsx → cabeçalho fixo com a logo
CategoryRow.jsx → uma fileira de filmes de uma categoria (FlatList horizontal)
MovieCard.jsx → o card individual de cada filme (imagem + título)
movies.js → os dados: categorias e seus respectivos filmes

## Rodando localmente

Clone o repositório:

git clone https://github.com/afroagg/filmex.git

Instale as dependências:

cd filmex
npm install

Rode o projeto:

npx expo start

Escaneie o QR code com o app **Expo Go** no celular, ou aperte `w` no terminal pra abrir no navegador.

## Próximas ideias

- Tela de detalhes ao clicar em um filme
- Busca por título
- Favoritar filmes
- Puxar os dados de uma API em vez de lista fixa

---

Feito por [Agatha Rodrigues](https://www.linkedin.com/in/agatha-carolina-rodrigues-887567250)