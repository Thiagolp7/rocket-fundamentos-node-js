# Rockeseat - NodeJs

## Chapter I

### Configurando o projeto:

- yarn init -y : Instala e configura o package.json.
- yarn add express: adiciona o framework express que é o que vamos utilizar durante as aulas.

### Adicionando o Nodemon na aplicação

> Vamos instalar o nodemon para não termos sempre que reniciar o server a cada alteração.

- yarn add nodemon -D : para instalar o nodemon como dependência de dev.
- Adicionamos um script no package.json ""dev": "nodemon src/index.js"", para executarmos o serv com "yarn dev".
