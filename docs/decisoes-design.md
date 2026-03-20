# Decisões de design

## Emojis como representação das cartas

Emojis foram utilizados para representar as cartas, facilitando a identificação visual e a diferenciação entre os pares sem depender de assets externos.

## Paleta de cores centralizada via variáveis CSS

As cores são gerenciadas por variáveis CSS no arquivo global, facilitando:

- Manutenção centralizada
- Troca de tema sem alterações nos componentes
- Consistência visual em toda a aplicação

## Layout em grid responsivo

O tabuleiro do jogo utiliza CSS Grid com layout responsivo, garantindo que as cartas se organizem adequadamente em diferentes tamanhos de tela.

!!! tip "Responsividade"
    O grid se adapta automaticamente ao número de colunas conforme o viewport disponível, mantendo a jogabilidade em dispositivos móveis e desktop.
