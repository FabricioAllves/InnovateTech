<h1 align="center">InnovateTech</h1>

<img alt="gif-cell" src="https://github.com/FabricioAllves/InnovateTech/blob/main/src/assets/home.png"/>


Esse projeto é uma aplicação mobile que consome a API Randomuser para listar os users(Alunos). O usuário pode visualizar detalhes do aluno, como endereço, data de registro, idade entre outros.

Abaixo você encontrará informações importantes sobre o projeto como: tecnologias utilizadas, como rodar o projeto.

## Tomadas de  decisões
Para esse projeto optei por utilizar uma arquitetura MVVM, pois oferece uma maneira clara e organizada de estruturar seu código, separando a logica  e regra de negocio da UI e facilitando a manutenção e a escalabilidade do aplicativo.


### Api

Nessa projeto foi utilizada a api da [Random User](https://randomuser.me/documentation) onde utilizei o seguinte endPoint

```bash
https://randomuser.me/api/?seed=${SEED}&results=${MAX_RESULTS}&page=${page}
```

- **seed**: Usado para garantir que os dados nao sejam gerados randomicos a cada requisicao, assim trazendo sendo para o endpoint paginado.

- **results**: definiçao de quantidade de users por requisiçao da pagina.

- **page**: pagina a ser requisitada.

## Tecnologias Utilizadas

- React Native -> (Expo)
- TypeScript
- Axios
- Zustand




## Configuração do Arquivo .env

Para rodar o projeto é necessário criar um arquivo .env na raiz do projeto com a seguinte chave:

```bash
BASE_URL=https://randomuser.me/api
```

## Instalação

Para instalar as dependências do projeto, execute o comando:

```bash
yarn install
```


## Instalação
Para rodar o projeto, execute o comando:

```bash
yarn start
```



---

Desenvolvido por [Fabricio Henrique](https://www.linkedin.com/in/fabricio-26/)
