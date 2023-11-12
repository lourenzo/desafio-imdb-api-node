# Globo Code Challenge: Internet Movie Database Clone

## Solution Architecture

- API service using NodeJS, TypeScript, Koa (alternative to express), TypeDI (Dependency Injection Container) and routing-controllers
  - Use Clean Architecture
  - Use Prisma
  - Use Dependency Injection
- Front-end using Next.js
  - Use Next.js
  - Build a Static server structure using nginx
- Deploy as Kubernetes application
  - Deployments for MySQL, Node and Nginx for static content
  
## Usage instructions

Start docker database
```
docker run -p 3306:3306 --name globo-desafio-mysql -e MYSQL_ROOT_PASSWORD='$3nh4' -d mysql:8.1

```

Install deps, compile and run API
```
cd api;
npm install
npm start
```

http://localhost:3000/titles


## References

see https://help.imdb.com/article/imdb/general-information/can-i-use-imdb-data-in-my-software/G5JTRESSHJBBHTGX#