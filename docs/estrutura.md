# Estrutura do projeto

```
src/
├── assets/         # Recursos estáticos (global.css)
├── components/     # Componentes Vue reutilizáveis
├── interfaces/     # Interfaces TypeScript
├── services/       # Lógica de negócio e acesso a dados (fake)
├── stores/         # Stores Pinia para gerenciamento de estado
├── App.vue         # Componente raiz da aplicação
├── main.ts         # Ponto de entrada da aplicação
└── router/
    └── index.ts    # Configuração de rotas Vue Router
```

## Descrição dos diretórios

| Diretório       | Responsabilidade                                          |
|-----------------|-----------------------------------------------------------|
| `assets/`       | Arquivos estáticos (global.css)                           |
| `components/`   | Componentes de UI reutilizáveis                           |
| `interfaces/`   | Interfaces TypeScript                                     |
| `services/`     | Abstração da lógica de dados (simulação de banco de dados)|
| `stores/`       | Stores Pinia para gerenciamento de estado                 |
| `router/`       | Definição das rotas da SPA                                |
