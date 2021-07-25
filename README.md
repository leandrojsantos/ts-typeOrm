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

Fora eles fazer, cadastro em sites que vão nos auxiliar durante o projeto como :
* []()

Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

#### 1º Criar um arquivo `.env` na raiz da pasta server, onde será guarda as senhas/links de acesso para app

```bash



```


#### 🎲 Rodando o projeto

```bash
# Clone este repositório
$

# Acesse a pasta do projeto no terminal/cmd
$

# Instale as dependências
$

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


### Na parte do Server:
```bash

```

* [Acesse o curso no portal Udemy.](https://www.udemy.com/course/api-restful-de-vendas/?referralCode=6DDEF85A747CA5CC4135)












