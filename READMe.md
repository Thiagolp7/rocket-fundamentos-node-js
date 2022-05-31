# Rockeseat - NodeJs

## Chapter I

### Configurando o projeto:

- yarn init -y : Instala e configura o package.json.
- yarn add express: adiciona o framework express que é o que vamos utilizar durante as aulas.

### Adicionando o Nodemon na aplicação

> Vamos instalar o nodemon para não termos sempre que reniciar o server a cada alteração.

- yarn add nodemon -D : para instalar o nodemon como dependência de dev.
- Adicionamos um script no package.json ""dev": "nodemon src/index.js"", para executarmos o serv com "yarn dev".

### Utilizar os métodos Http

> Criamos algumas rotas para nossa aplicação utilizando os métodos abaixo.

- GET - Buscar uma info dentro do servidor.
- POST - Inserir uma info no servidor.
- PUT - Alterar uma informação no servidor.
- PATCH - Alterar uma info específica.
- DELETE - Deletar uma info do servidor.
  > - Obs.: Os métodos GET e POST recebem os params de forma opcional de acordo com a rota que queremos acessar.
  > - Os métodos PUT, PATCH e DELETE, precisam receber um param na rota de acordo com o que queremos atualizar ou deletar. Se vamos excluir um user ex.: app.delet("/users/:id", (req, res) => {}).
