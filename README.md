# Task Api

## Descrição
Task API é um projeto de código aberto desenvolvido em Nestjs para compor o meu portifólio. É uma API simples, que no entanto utiliza recursos avançados e modernos, mostrando domínio abrangente em diversos recursos para oferecer uma aplicação segura, performática e escalável.

## Instalação

```bash
$ npm install
```

Ainda no processo de instalação, crie um arquivo .env com os mesmos campos do arquivo [.env.example](.env.example), preenchendo as variáveis com os dados que precisar para o seu ambiente.

Para dar continuidade na instalação do projeto, você precisará ter o <a href="https://docs.docker.com/desktop/install/windows-install/">Docker</a> e o utilitário Docker Compose instalado em sua máquina. Ou, se estiver utilizando Ubuntu, <a href="https://github.com/Matheus-Martins13/Scripts_Environment_Preparation/blob/master/intalacao_docker/instalacao-docker.sh">clique aqui</a> e dê uma olhada no script que preparei para realizar a instalação.

Com o .env criado e configurado, execute:

```bash
$ docker compose up -d
```

## Rodando o projeto

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Documentação Swagger
```
localhost:3000/api
```

Para visualizar a documentação completa com todos os endpoints da aplicação, acesse a rota **/api**.

## Licença
[Licença MIT](LICENSE).
