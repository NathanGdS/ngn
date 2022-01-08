***Requisitos Não-Funcionais da Aplicação***

A API RESTFul deve ser desenvolvida na linguagem Typescript utilizando o framework Node.js

O banco de dados utilizado deve ser o PostgreSQL

Os containers devem ser rodados através do Docker Compose

A exclusão de registros deve ser realizada de forma lógica e não física

A API deve utilizar a notação JSON

A API deve ter o CORS ativo

A API deve ter um sistema de versionamento de endpoints

O sistema de autenticação deve conter JWT Token

Os identificadores (IDs) devem ser do tipo Universally Unique Identifier (UUID)

A documentação da API deve ser feita utilizando o Swagger UI

Para garantir a corretude, deve ser realizado o TDD e TDA na aplicação

O versionamento do código deve ser feito através da ferramenta Git

O repositório deve estar contido na plataforma GitHub


***Usuários***

Requisitos Funcionais

Deve ser possível cadastrar novos Usuários

Deve ser possível listar os Usuários cadastrados

Deve ser possível consultar o registro de usuário através do CPF cadastrado


Regras de Negócio

Não deve ser possível cadastrar um usuário com o mesmo CPF

Deve ser possível diferenciar usuários administradores de usuários comuns

Por padrão, os usuários são cadastrados como sendo usuários comuns


***Endereço***

Requisitos Funcionais

Deve ser possível cadastrar novos Endereços

Deve ser possível listar o endereço atrelado a um Usuário


Regras de Negócio

Não deve ser possível cadastrar mais de um endereço com o mesmo CEP

Não deve ser possível cadastrar mais de um endereço para o mesmo Usuário


##Automóveis##

Requisitos Funcionais

Deve ser possível cadastrar novos Automóveis

Deve ser possível realizar a listagem de Automóveis

Deve ser possível obter o histórico de Ordens de Serviço de cada automóvel


Regras de Negócio

Não deve ser possível cadastrar um carro com uma placa já existente

O carro deve ser cadastrado com disponibilidade por padrão. 

O usuário responsável pelo cadastro deve ser um usuário administrador.



***Tipo Automóvel***

Requisitos Funcionais

Deve ser possível listar os tipos de automóveis

O cadastro deve ser realizado através de seeders



***Status Ordem***

Requisitos Funcionais

Deve ser possível listar os tipos de automóveis

O cadastro deve ser realizado através de seeders

Tipos de Status devem ser: 1 - Aberta, 2- Aprovada, 3 - Reaberta, 4 - Finalizada, 5 - Cancelada



***Ordem de Serviço***

Requisitos Funcionais

Deve ser possível gerar uma nova ordem de serviço

Deve ser possível listar as ordens de serviço finalizadas

Deve ser possível listar as ordens de serviços em aberto

Deve ser possível listar as ordens de serviço canceladas

Cada Ordem de Serviço deverá apresentar o automóvel, o dono e seu documento, as peças e os procedimentos realizados (com seus respectivos valores), o status, uma descrição / observação e o valor total da OS. 


Regras de Negócio

Não deve ser possível gerar uma ordem de serviço caso o automóvel em questão já tenha outra ordem de serviço com status Aberta

Não deve ser possível alterar dados quando a Ordem estiver com status 2 ou 4. Pode ser reaberta quando o status for 2 (caso seja 4, deve ser feita uma nova OS).

