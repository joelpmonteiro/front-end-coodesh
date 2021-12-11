> This is a challenge by [Coodesh](https://coodesh.com/)
> Video da Apresentação [video-clique-aqui](https://www.loom.com/share/908977b68a3c4586b009543db2eda29a)
## Project setup

> Esse front end ele foi feito para consumir uma api da `Space Flight` que criei que se encontra nesse repositorio [Back-End](google.com)
### Bibliotecas e Framework Usado
> - [Vue.js 2.6](https://vuejs.org/)
> - [Axios 0.24.0](https://vuejs.org/)
> - [bootstrap 5.1.3](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
> - [Vue-Router 3.5.3](https://router.vuejs.org/)
> - [Vue-Swal 1.0.0](https://www.npmjs.com/package/vue-swal)
> - [Vuex 3.6.2](https://vuex.vuejs.org/ptbr/)

## Como instalar o Projeto
```
Ao entrar na pasta do Projeto Rode o comando abaixo, e ele irá lhe entregar esse endereço abaixo 
```
- `http://localhost:8080`

```
Provavelmente poderá mudar o numero da porta se tiver algum projeto rodando.
```

```
npm install
```

### Compilar projeto com docker

- certifique que tenha o [docker](https://www.docker.com/get-started) instalado, e seus deverivados como docker compose e etc.

- para criar uma imagem do projeto rode o comando `docker build -t front-end-coodesh .` 
- E vai iniciar a etapa de criação da imagem que terá o nome *front-end-coodesh*
- e para iniciar a imagem em um container rode o seguinte comando caso tenha o docker compose instalado.
```
docker-compose up -d
```
- Esse comando irá usar a imagem que você acabou de buildar e ligará um containers nessa imagem.
- e com isso usar o nginx para prover o uso de um serviço web como apache e etc.
- Ao final do processo irá te entregar com a mesma porta #8080 no final, e caso deseja trocar é só modificar no arquivo dockerfile, docker-compose.yml.

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
