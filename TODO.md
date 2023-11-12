# Tasks

- [Tasks](#tasks)
  - [Modelagem dos dados](#modelagem-dos-dados)
  - [Front-end](#front-end)
  - [Authentication](#authentication)
  - [Open API](#open-api)
  - [Containerização](#containerização)


## Modelagem dos dados


- [ ] Remodelar campos a partir do modelo fornecido no website, copiado abaixo
  - [x] Verificar se estão OK
  - [x] Reproduzir modelo como markdown
  - [ ] Modelar no prisma
    - Usando https://github.com/emyann/prisma-uml para gerar o modelo
    - [ ] Melhorar modelagem de names e principals, usando categorização
  - [ ] [Opcional] extrair samples dos datasets para incluir no banco de dados e depois criar como migrations com mais filmes


Modelando dados a partir da API:
https://developer.imdb.com/documentation/api-documentation/calling-the-api/?ref_=up_next

A API é fechada, paga, e bastante cara, mas por sorte dispobibilizam uma versão não-comercial dos dados para download, e configuração.

Referências:
* https://developer.imdb.com/non-commercial-datasets/

Antes de localizar esta versão, encontrei algumas referências externas para ajudar a nortear os campos necessários, e modelei os dados da API a partir dessas referências e também o front-end do próprio site do IMDB para determinar quais informações são necessárias para renderizar uma interface semelhante.

* https://imdb-api.com/API#Title-header
* https://imdb-api.com/en/API/Title/k_12345678/tt1375666/FullActor,Posters
* https://github.com/kiendang/imdb-graphql



- [ ] Adicionar awards
- [ ] Adicionar Cast completo
- [ ] [opcional] incluir `startYear`, `endYear`, e suportar Séries e episódios?

---
rip actors:
Array.from(document.querySelectorAll("div[data-testid='title-cast-item'] img")).map((img, idx)=>({id: idx + 1, name: img.alt, pictureUrl: img.src}))


## Front-end

- [ ] Criar módulo frontend com interface
  - [ ] Inicializar Repositório
  - [ ] Modelar o front considerando um visual atraente mas uma implementação enxuta
  - [ ] Implementar o Front-End usando testComponents para criar unitTests
  - [ ] [Opcional] Criar suíte de teste e2e



## Authentication

- [ ] Refinar permissão de usuários
  - [ ] Verificar regras
  - [ ] Planejar implementação e testes


- [ ] - (required) Use JWT to authenticate and authorize users
  - [ ] Implementar a estrutura no backend
  - [ ] implementar a parte no front-end para consumir
  - [ ] testar ostensivamente o funcionamento
  - [ ] [opcional] implementar testes e2e



JWT:
- https://jasonwatmore.com/nodejs-jwt-authentication-tutorial-with-example-api
- https://www.geeksforgeeks.org/jwt-authentication-with-node-js/
> nodejs authentication with jwt



## Open API
- [ ] Pesquisar solução OpenAPI que seja integrada com routing-controllers
- [ ] Gerar documentação da API
- [ ] Adicionar link da documentação da API na documentação markdown do projeto
- [ ] [opcional] OpenAPI to Markdown?



- [ ] Adicionar inicialização post-install adicionando o generate do prisma, e também a instalação das migrations


- [ ] Reinstalar o prisma-zod , caso não seja possível, criar clone com versão atualizada (como instalar diretamente do github, fazer PR para o repo original, relatar isso para o pessoal e documentar)

- [ ] Criar README.md com documentação dentro dos módulos


## Containerização

- [ ] Containerizar a api
- [ ] Containerizar o front-end
- [ ] Criar kubernetes pods e cluster


- [ ] Criar instância MySQL
  - [x] docker run -p 3306:3306 --name globo-desafio-mysql -e MYSQL_ROOT_PASSWORD='$3nh4' -d mysql:8.1
  - [x] docker run -it --network host --rm mysql mysql -h127.0.0.1 -uroot -p'$3nh4'
  - [ ] Criar Database e usuário ao inicializar o container
  - [ ] Importar migrations ao inicializar container





---


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
 
