<h1 align="center">
   <a href="#" alt="">Type-orm-ts</a>
</h1>

<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
 <img alt="typeorm" title="#typeorm" src="" width="600px">

<h4 align="center">
 🚧Em produção🚀 🚧
</h4>

Tabela de conteúdos
=================
<!--ts-->
  * [Sobre o projeto](#-sobre-o-projeto)
  * [Funcionalidades](#-funcionalidades)
  * [Layout](#-layout)
  * [Como executar o projeto](#-como-executar-o-projeto)
    * [Pré-requisitos](#pré-requisitos)
    * [Rodando o Projeto](#user-content--rodando-o-backend-servidor)
  * [Tecnologias](#-tecnologias)

<!--te-->

## 💻 Sobre o projeto

Objetivo deste repositório é, desenvolvimento de API Restful com Node.js, Express, Typescript, TypeORM, Postgres, Redis, Docker.

Através do TypeORM e feito entidades e repositórios para cada recurso a ser consumido na API.

Aplicação backend para gestão de vendas com funcionalidades para criação de cadastro de produtos, cadastro de clientes, pedidos de compras e uma completa gestão de usuários da aplicação, com autenticação via Token JWT, recuperação de senha por email, atualização de perfil, atualização de avatar.

- A senha deve ser armazenada com criptografia;
- Não pode haver mais de um produto com o mesmo nome;
- Não pode haver um mesmo email sendo usado por mais de um usuário;


---


## ⚙️ Funcionalidades

Aplicaremos conceitos de boas práticas e qualidade no código, usando Design Patterns, Domain Driven Design (DDD) e Princípios SOLID, além de introduzir Testes Automatizados com o framework Jest.

Principais recursos que implementaremos no projeto:
- [X] API Restful
- [X] CORS
- [X] Tratamento de erros
- [X] Sistema de roteamento
- [X] Middlewares
- [X] CRUD
- [X] TypeORM com o padrão Repository
- [X] Migrations
- [ ] Relacionamento Many-to-Many
- [ ] Filesystem/upload de arquivos
- [ ] Armazenamento de arquivos em Bucket Amazon S3
- [ ] Envio de email fake (dev env) e email profissional com o Zoho Mail e Amazon SES
- [ ] Autenticação JWT Token
- [ ] Cache com Redis
- [ ] Proteção contra ataque DDoS
- [ ] Design Patterns com Domain Driven Design (DDD) e Princípios SOLID
- [ ] Iniciando com Testes Automatizados com Jest
- [ ] Deploy em Produção na Digital Ocean

### Estrutura de pastas:
`config` - configurações de bibliotecas externas, como por exemplo, autenticação, upload, email, etc.

`modules` - áreas de conhecimento da aplicação, diretamente relacionados com as regras de negócios. A princípio os seguintes módulos na aplicação: customers, products, orders e users.

`shared` - módulos de uso geral compartilhados com mais de um módulo da aplicação, como por exemplo, o arquivo server.ts, o arquivo principal de rotas, conexão com banco de dados, etc.

`services` - estarão dentro de cada módulo da aplicação e serão responsáveis por todas as regras que a aplicação precisa atender, como por exemplo:
1 - A senha deve ser armazenada com criptografia;
2 - Não pode haver mais de um produto com o mesmo nome;
3 - Não pode haver um mesmo email sendo usado por mais de um usuário;

---

## 🎨 Layout

O layout da aplicação:

<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
 <img alt="typeorm" title="#typeorm" src="" width="400px">

 <img alt="typeorm" title="#typeorm" src="" width="400px">
</p>

<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
 <img alt="typeorm" title="#typeorm" src="" width="400px">

 <img alt="typeorm" title="#typeorm" src="" width="400px">
</p>

---

## 🚀 Como executar o projeto

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com),[Node.js](https://nodejs.org/en/),

* Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

* Um sgbd que suporte uuuid sugiro [DBeaver](https://dbeaver.io/download/)

* Ter conhecimento básico sobre container e [Docker](https://docs.docker.com/get-docker/)
#### 1º Criar um arquivo `ormconfig.json` na raiz da pasta server, onde será config o banco de dados
```bash
{
  "type": "postgres",
  "host": "localhost",
  "port": 5432,
  "username": "admin",
  "password": "root",
  "database": "sales",
  "entities": [
    "./src/modules/**/typeorm/entities/*.ts"
  ],
  "migrations": [
    "./src/shared/typeorm/migrations/*.ts"
  ],
  "cli": {
    "migrationsDir":"./src/shared/typeorm/migrations"
  }
}

```
#### 2º Postgres através de container Docker
```bash
# rode esse comando, caso quera troca senha e nome do database
# lembre-se de tambem no `ormconfig.json`
docker run \
   --name postgres \
   -e POSTGRES_USER=admin \
   -e POSTGRES_PASSWORD=root \
   -e POSTGRES_DB=sales \
   -p 5432:5432 \
   -d \
   postgres:11.5

```

#### 🎲 Rodando o projeto
```bash

# Instale as dependências na raiz do projeto
$ yarn
$ yarn add -D tsconfig-paths

# verificar se banco de dado esta criado corretamente e conectado
# feito rode o comando para criar coluna e tabelas no banco de dados
$ yarn typeorm migration:run

# start na api
1 terminal rode yarn dev
2 abra insonima e nele projeto typeorm-ts
3 no insomia atualize o token, pois dura 1 dia
4 teste as funções com CRUD, por exemplo

```
---
## 🛠 Tecnologias

Principais tecnologias que utilizaremos para desenvolvimento da API:

Node.js, Express, Typescript, TypeORM, Postgres através de container Docker, Redis através de container Docker, Amazon S3, Amazon SES

* Construir API Restful Javascript Node com Express e Typescript
* Implementar o TypeORM em projetos Node com Postgres
* Configurar cache na API com o Redis
* Usar o Docker em ambiente de desenvolvimento
* Realizar o deploy em produção com servidor na Digital Ocean
* Qualidade em código com Design Patterns, Domain Driven Design (DDD) e Princípios SOLID
* Testes Automatizados com o framework Jest


### Na parte do Server foram utilizadas as seguintes bibliotecas:

```bash
    "bcryptjs": "^2.4.3",
    "celebrate": "^15.0.0",
    "cors": "^2.8.5",
    "express": "^4.17.1",
    "express-async-errors": "^3.1.1",
    "jsonwebtoken": "^8.5.1",
    "multer": "^1.4.2",
    "pg": "^8.6.0",
    "reflect-metadata": "^0.1.13",
    "typeorm": "^0.2.34"

```
