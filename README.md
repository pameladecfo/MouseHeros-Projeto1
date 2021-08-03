# Dividir o Pão

## Sobre o Cliente

O projeto Dividir o Pão é uma iniciativa que surgiu durante a pandemia, em março de 2021, para auxiliar pessoas em situação de rua a se alimentarem, atuando como um banco de captação e distribuição de alimentos. A missão do projeto é mitigar a fome de pessoas em situação de vulnerabilidade, por intermédio de um grupo de voluntários que tem como objetivo distribuir quentinhas pelas ruas e praças de Fortaleza - CE. 

## Sobre o projeto

O projeto é um PWA (híbrido entre _site_ e aplicativo) voltado para _smartphones_ e _desktop_, realizado em parceria com o Dividir o Pão, cujo objetivo é otimizar os processos de captação das listas de insumos (listas de doações e auxílios que cada voluntário faz mensalmente, que guiam os processos de distribuição das doações arrecadadas para os voluntários realizarem os processos de preparação e entrega das quentinhas) e dos cadastros dos voluntários no projeto.

## Sobre a equipe

### Equipe MouseHeros

- Felipe Ferreira do Nascimento
- Marcela Pinto Custódio
- Mateus Marques de Aquino
- Pâmela de Castro Freitas Oliveira 
- Vanessa Rolim de Aquino 


## Requisitos

### Requisitos implementados
|Requisitos Funcionais Básicos |     Descrição      |  Codificação |
|----------|:-------------:|------:|
| RF_B1. Cadastrar: |  O usuário precisa se cadastrar e fornecer informações pessoais como nome, número de telefone, função no projeto, e-mail e senha.|Arquivo "js/realtime-database.js" - Linha 1 a 35  |
| RF_B2. Autenticação: |    Com o cadastro, o usuário precisa ser autenticado no banco de dados. Assim, com sua conta registrada no banco, ele pode fazer o login e logout.| Arquivo “js/main.js” -  Linha 18 a 65  |
| RF_B3. Login | O usuário precisa ser capaz de entrar na sua conta.| Arquivo “js/main.js” - Linha 68 a 92  |
| RF_B4. Logout |  O usuário precisa ser capaz de sair da sua conta.| Arquivo “js/main.js” - Linha 151 a 153 |
| RF_B5. Resetar senha |    O usuário precisa ser capaz de trocar sua senha, caso ele esqueça a mesma.| Arquivo “js/main.js” - 142 a 148   |
| RF_B6. Alterar informações pessoais | O usuário precisa ser capaz de alterar suas informações pessoais, como número de telefone, foto de perfil, nome, senha e função.| Arquivo “js/realtime-database.js” - Linha 41 a 57   |


|Requisitos Funcionais Fundamentais |     Descrição      |  Codificação |
|----------|:-------------:|------:|
| RF_F1. Utilizar banco de dados |  A aplicação utiliza uma base de dados para armazenar os insumos necessários, as informações pessoais dos usuários e as doações. |  |
| RF_F2. Registrar lista de insumos |    O usuário pode registrar uma lista de insumos necessários para a sua produção no próximo mês.|    |
| RF_F3. Registrar pedido de auxílio gasolina ou gás | O usuário pode registrar um pedido de auxílio para gasolina ou gás de cozinha. Esse auxílio é basicamente um valor X em reais.|     |
| RF_F4. Definir um valor para cada insumo | O usuário (administrador) pode definir o valor de cada insumo para, assim, o sistema calcular a quantia necessária para comprar todos os produtos.|     |
| RF_F5. Definir um valor para cada auxílio | O usuário (administrador) pode definir o valor de auxílio (gasolina ou gás) para, assim, o sistema calcular a quantia necessária para enviar aos voluntários que requisitaram o auxílio.|   |


|Requisitos Funcionais de Saída |     Descrição      |  Codificação |
|----------|:-------------:|------:|
| RF_S1. Mostrar a lista de insumos total |  A aplicação gera uma lista total com todas as solicitações de insumos feitas pelos usuários mensalmente.| |
| RF_S2. Mostrar a lista de auxílios total |    A aplicação gera uma lista total com todas as solicitações de auxílios feitas pelos usuários mensalmente.|    |
| RF_S3. Mostrar a lista com informações dos usuários | O sistema mostra os dados pessoais como número de telefone, endereço e e-mail dos usuários, facilitando o contato entre colaboradores.|    |
| RF_S4. Mostrar o valor necessário para comprar todos os insumos |  O sistema mostra o resultado do cálculo da quantia necessária para comprar todos os produtos.|  |
| RF_S5. Mostrar o valor total dos pedidos de auxílio |    O sistema mostra o resultado do cálculo do valor total de auxílios requisitados para gasolina ou gás de cozinha.|   |
| RF_S6. Mostrar as doações arrecadadas | O sistema mostra o valor que o projeto já recebeu em dinheiro.|     |


## Sobre o Cliente

O projeto Dividir o Pão é uma iniciativa que surgiu durante a pandemia, em março de 2021, para auxiliar pessoas em situação de rua a se alimentarem, atuando como um banco de captação e distribuição de alimentos. A missão do projeto é mitigar a fome de pessoas em situação de vulnerabilidade, por intermédio de um grupo de voluntários que tem como objetivo distribuir quentinhas pelas ruas e praças de Fortaleza - CE. 
