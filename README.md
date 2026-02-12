# API de produtos - Mini Projeto Back-end

Este projeto é uma API REST simples para gerenciamento de produtos

Foi desenvolvido com foco em aprendizado de arquitetura, separação de responsabilidade e boas práticas

## Objetivo

Permitir operações básicas de um catálogo de produtos:

- Criar
- Listar
- Buscar por ID
- Atualizar
- remover

Os dados são armazenados em memória (array), sem banco de dados

## Conceitos aplicados

- Node.js
- Express
- Rotas
- Controllers
- Services
- Padrão de resposta de API
- status HTTP corretos
- Validações de entrada
- Organização de projetos

## Estrutura de pastas

```text
src/
├── controllers/ # Recebe os pedidos do usuário e envia as respostas.
├── database/ # Onde os dados "moram"
├── routes/ # Lista de endereços (URLs) que a nossa API aceita.
├── services/ # Onde ficam as regras: o que pode ou não pode ser feito.
└── server.js # onde ligamos o nosso servidor.
```

## Padrão de Resposta

```json
{
"ok": true, // Indica se a operação deu certo
"data": { ... }, // Os dados que você pediu (ou null)
"erro": null // A mensagem de erro (caso algo dê errado)
}
```

## Como rodar o projeto

## Instalar dependências

```bash
npm install
```

## Iniciar servidor

```bash
npm start
```

## Servidor iniciará em

```bash
http://localhost:3000


```
