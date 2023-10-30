# Tasks

- [ ] Puxar campos do IMDB
- [ ] Refinar permissão de usuários
- [ ] Adicionar inicialização post-install adicionando o generate do prisma, e também a instalação das migrations
- [ ] Criar instância MySQL
  - [x] docker run -p 3306:3306 --name globo-desafio-mysql -e MYSQL_ROOT_PASSWORD='$3nh4' -d mysql:8.1
  - [x] docker run -it --network host --rm mysql mysql -h127.0.0.1 -uroot -p'$3nh4'
  - [ ] Criar Database e usuário ao inicializar o container
  - [ ] Importar migrations ao inicializar container
- [ ] - (required) Use JWT to authenticate and authorize users


Modelando dados a partir da API:
https://developer.imdb.com/documentation/api-documentation/calling-the-api/?ref_=up_next

- [ ] Adicionar awards
- [ ] Adicionar Cast completo

---
rip actors:
Array.from(document.querySelectorAll("div[data-testid='title-cast-item'] img")).map((img, idx)=>({id: idx + 1, name: img.alt, pictureUrl: img.src}))




---

JWT:
- https://jasonwatmore.com/nodejs-jwt-authentication-tutorial-with-example-api
- https://www.geeksforgeeks.org/jwt-authentication-with-node-js/
> nodejs authentication with jwt


Kubernetes deployments:
https://stackoverflow.com/questions/69675718/react-application-in-kubernetes-with-nodejs-and-mysql
https://phoenixnap.com/kb/kubernetes-mysql
https://stackoverflow.com/questions/63377752/connecting-frontend-api-application-to-backend-database

See later:
- https://swc.rs/playground
- https://github.com/luisrudge/prisma-generator-fake-data
> pirâmide de testes
- https://github.com/AlexSergey/rockpack
- https://www.bing.com/search?q=quantidade+de+mortos+por+covid+na+china&cvid=f0cbceb065c6435598c4449e10d19227&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIECAEQANIBCDgyODhqMGo5qAIAsAIA&FORM=ANAB01&PC=U531
- 

Tests e2e:
- https://docs.cypress.io/guides/overview/why-cypress#Setting-up-tests
- https://playwright.dev/docs/intro#installing-playwright
 
