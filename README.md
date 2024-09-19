# Fastify Redis SQL API

Este projeto é uma API de busca de produtos utilizando Fastify, Redis e um banco de dados SQL (PostgreSQL ou MySQL). O sistema implementa um cache de produtos com TTL (Time to Live) de 3 minutos.

## Estrutura

- **Controllers**: Lida com as requisições HTTP e interage com a camada de serviços.
- **Services**: Contém a lógica de negócio.
- **Repositories**: Acesso a dados, tanto para cache (Redis) quanto para o banco de dados SQL.
- **Entities**: Define o modelo de dados dos produtos.

## Rodando o projeto

1. Instale as dependências:

```bash
npm install
```

2. Inicie os containers do Redis e do banco SQL usando Docker:

```bash
docker-compose up -d
```

3. Para iniciar a aplicação:

```bash
npm start
```

4. Para rodar os testes:

```bash
npm test
```
