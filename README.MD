# INGAIA - API 2

Welcome to the API 2.
### Esta api retorna o calculo do metro quadrado

### Tecnologias usadas:
- Node.js 
- Express.js
- Typescript
## Instruções para executar o projeto

## Testes
```
npm run test
```
ou
```
yarn test
```
### Documentação swagger no heroku
https://api02-ing-aia.herokuapp.com/api-docs

### Crie .env baseado no .env-example
O .env-example tem as urls apontadas para o heroku
```
cp .env-example .env
```

### Usando docker (opção 1)
A imagem do docker gera um container com o pm2 para executar o projeto
```
docker build -t ingaia-api-02 .
docker run -p 3002:3000 ingaia-api-02
```

### Executando localmente (opção 2)
```
npm install
npm run start
```
ou se preferir o yarn
```
yarn install
yarn start
```

### Estrutura do projeto
```
.github
    └── workflows
            └── main.yml // configuração do github actions 
                            com heroku 
node_modules // dependencias
src
  └── controllers // contém toda a logica
  └── interfaces // d.ts com interfaces do typescript
  └── middlewares // contém middleware de requisições
  └── routes      // contém todas as rotas da aplicação
  └── services   // configuração do axios para uma ou mais apis
  └── index.ts    // arquivo principal de carregamento
.env-example // arquivo .env de exemplo
Dockerfile   // arquivo de imagem do docker
nodemon.json // arquivo de configuração do nodemon
package.json // arquivo de configurações e dependencias
README.MD    // readme.md
tsconfig.json // arquivo de configuração do ts
```

