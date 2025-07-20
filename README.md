# modúlo de listar da aplicação de cadastro de usuários

Esse projeto foi desenvolvido utilizando angular 15 + a biblioteca de MFE Module Federation. Esse projeto é o módulo (remote) de uma aplicação de cadastro de usuários.

## Como rodar esse projeto

Primeiramente faça a instalação do node v20.18.2 e tenha o vscode instalado na sua maquina.

Para rodar esse projeto é necessário abrir uma janela do cmd e naveguar até a raiz do projeto e dar o comando npm install.
Após isso, na mesma janela do cmd de o comando npm run start:app. Esse comando irá rodar o projeto mfe-success-app na porta 4202.

Para acessar abra o navegador de sua preferência e digite http://localhost:4202/. Isso te levará para a tela de listar usuários.

## Rodar testes unitários

Para rodar os testes unitários você pode executar o comando npm run test. Após executar todos os testes, você pode acessar um relatório de cobertura em html no navegador, que está dentro da pasta raiz do seu projeto através do caminho mfe-success-app\coverage\mfe-success-app\index.html

## Arquitetura utilizada

Esse projeto utiliza uma arquitetura de MFE (Micro Frontend) usando a biblioteca Module Federation. Essa arquitetura permite que tenhamos projetos separados rodando como parte de um sistema unico.
Alguns pontos são levados em consideração ao utilizar esse tipo de arquitetura. 
Podemos citar:
independência de times de desenvolvimento ao criar um novo projeto que fará parte do projeto principal;
Melhoria da performance da aplicação como um todo;

