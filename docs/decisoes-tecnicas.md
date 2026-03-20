# Decisões técnicas

## Vue Transitions

Utilização das [Transitions](https://vuejs.org/guide/built-ins/transition) nativas do Vue para animar:

- A virada das cartas
- A abertura e fechamento do modal de ranking

## Pinia para gerenciamento de estado

O [Pinia](https://pinia.vuejs.org/) foi escolhido para centralizar a lógica do jogo, separando-a dos componentes de UI.

## Separação em `services/` e `interfaces/`

A lógica de negócio e os contratos de dados foram separados dos componentes:

- **`interfaces/`** — Define os tipos TypeScript utilizados em todo o projeto, garantindo consistência e segurança de tipos.
- **`services/`** — Concentra a lógica de acesso a dados, inclusive a simulação de consulta a banco de dados (fake service), desacoplando os componentes de qualquer implementação de persistência.

## Paleta de cores em `global.css`

As cores foram definidas como variáveis CSS no arquivo `global.css`, facilitando a manutenção e a eventual troca de tema sem necessidade de alterar múltiplos arquivos.

```css
:root {
  --primaria: #7c6af7;
  --fundo: #0d0d0f;
  --superficie: #1e1e24;
  --texto: #e8e8f0;
  --borda: #2a2a35;
  --radius: 12px;
}
```
