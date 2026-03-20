# jogo-da-memoria

Projeto desenvolvido para desafio técnico.

## Tecnologias utilizadas

- Vue 3
- TypeScript
- Pinia

## Requisitos

- Node.js 24
- npm 11.7.0

## Como executar

Dentro da pasta do projeto, execute os comandos abaixo:

```bash
npm install
npm run dev
```

O projeto estará disponível em `http://localhost:5173`

## Regras do jogo

1. Digite o nome do jogador e clique em "Iniciar Jogo"
2. Clique em uma carta para virá-la para cima.
3. Clique em uma segunda carta para tentar formar um par.
4. Se as cartas formarem um par, elas permanecem viradas para cima.
5. Se as cartas **não** formarem um par, elas são viradas para baixo após **1 segundo**.
6. Repita até encontrar todos os pares.
7. Ao encontrar todos os pares, será exibido um modal com o ranking de jogadores e um botão para iniciar um novo jogo.

## Estrutura do projeto

```
src/
├── assets/
├── components/
├── interfaces/
├── services/
├── stores/
├── App.vue
├── main.ts
└── router/index.ts
```

## Decisões técnicas 

- [Transitions](https://vuejs.org/guide/built-ins/transition) (funcionalidade do vue) para as cartas e para o modal de ranking.
- Uso de [Pinia](https://pinia.vuejs.org/) para gerenciamento de estado, separando a lógica do jogo do componente.
- Separação em `services/` e `interfaces/` para desacoplar a lógica de negócio dos componentes.
- Uso da `services/`para implementar lógica fake de consulta a banco de dados.
- Paleta de cores definida no `global.css` para facilitar a manutenção e alteração das cores.

## Decisões de design

- Utilização de emojis para representar as cartas para facilitar a identificação e diferenciação entre elas.
- Paleta de cores centralizada via variáveis CSS, facilitando manutenção e troca de tema.
- Layout em grid responsivo para organização das cartas no tabuleiro

