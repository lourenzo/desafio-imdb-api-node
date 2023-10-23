# DESAFIO GLOBO


## O que fazer?

Você deve criar um repositório e, ao finalizar, enviar o link do seu repositório para a nossa equipe. E então iremos avaliar e retornar por e-mail o resultado do seu teste.


## O que desenvolver?

Você deverá criar uma API que o site [IMDb: Ratings, Reviews, and Where to Watch the Best Movies & TV Shows](https://www.imdb.com/)  irá consultar para exibir seu conteúdo, sua API deve conter as seguintes features:

Cadastro de usuários com 2 níveis, Usuário e Admin; Usuários/Login de acesso:

* Usuário
   + Cadastro
   + Edição
   + Exclusão lógica (Desativação)
* Admin
   + Cadastro
   + Edição
   + Exclusão lógica (Desativação)
* Somente usuário administrador pode cadastrar novos usuários.

## Filmes:

* Cadastro (Somente um usuário administrador poderá realizar esse cadastro)
* Voto (A contagem dos votos será feita por usuário de 0-4 que indica quanto o usuário gostou do filme)
* Listagem (deverá ter filtro por diretor, nome, gênero e/ou atores)
* Detalhe do filme trazendo todas as informações sobre o filme, inclusive a média dos votos

Obs.: Apenas os usuários poderão votar nos filmes e a API deverá validar quem é o usuário que está acessando, ou seja, se é admin ou não



## Front

* Página para a realização do login e logout.
* Página de filmes
    + Listagem.
    + Cadastro do filme.
    + Página de detalhe do filme.


**Obs.:** Todas as páginas devem respeitar os dados de acordo com a API desenvolvida.


## Requisitos de tecnologia

* Implementar autenticação e deverá seguir o padrão JWT, lembrando que o token a ser recebido deverá ser no formato Bearer
* Bancos relacionais permitidos:
    + MySQL
    + SQLite
    + Postgres
* Sua API deverá ser Restful.
* Sugerimos o uso de Vanilha, React ou Angular no front-end
* Sugerimos NodeJS, Java ou Python no back-end


Itens a serem avaliados

* Estrutura/Arquitetura do projeto
* Segurança do projeto, como autenticação, estratégia para senhas salvas no banco, SQL Injection e outros
* Boas práticas da Linguagem/Framework
* Seu projeto deverá seguir tudo o que foi exigido na seção [O que desenvolver?]
* Migrations para a criação das tabelas do banco de dados
* Simplicidade de execução do projeto
* Testes automatizados
* Documentação do projeto

Fique à vontade para também adicionar qualquer evolução extra não mencionada no documento mas que possa gerar alguma forma de melhoria (como em performance). Adoramos proatividade!!

 

## Sugestões

Esses itens não são obrigatórios, porém podem apoiar na sua jornada

* Conteineres podem ajudar (uso de Docker/Docker Compose/Kubernetes)
* Recomendamos o uso da especificação OpenAPI para documentar sua API (Ou alguma ferramenta como Postman/Insomnia)
* Entre em detalhes dos usos de tecnologia (por exemplo, a justificativa entre usar uma biblioteca e não outra)
* Documente as suas decisões, quais prioridades você decidiu tomar resolver o problema. Gostamos de boas histórias :)
* Deploy em um ambiente não é necessário, mas pode ser interessante.