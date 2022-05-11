# Todo-List

Olá, esse e um projeto idealizado pela PODCODAR CODE SCHOOL, visando aprimorar conhecimentos em:
  - Git
  - ReactTs
  - DevOps
  - Trabalho em Equipe e comunicacao
---

# Objetivo desse projeto:

Criar uma lista de tarefas com as funções de ⇒
  - adicionar
  - editar
  - deletar
  - filtrar

Fomentando a colaboração e comunicação dos envolvidos, utilizando praticas como code review, pair programming, one a one com os líderes, e algumas partes da metodologia scrum para melhor interação da equipe.

## Desenvolvimento:

O projeto foi divido em pequenas tarefas sedo elas: adicionar, deletar, editar, filtrar e implementar o context. Decidimos utilizar essa prática para ter um desenvolvimento dinâmico, assim podendo tratar erros de acordo for necessário e também para usar a prática de pull request.

   ### Adicionar ⇒
  Nesta parte optei por criar uma lista de dicionários para armazenar dados necessários para a construção de cada tarefa, disponibilizando-a para funções que alterariam seus valores excluindo ou gerando novas tarefas.
  ### Deletar ⇒
  Utilizei uma função para identificar a tarefa pelo seu id e a excluir do array principal assim rerenderizando o array sem a tarefa deletada.
  ### Editar ⇒
  Para implementar essa funcionalidade foi usado duas funções, primeira para começar a edição e a segunda para concluir, também uma operação logica para alterar o nome dos botoes entre save e edit.
  ### Filtrar ⇒
  Para filtrar utilizei duas funções sendo uma com a função de alterar um identificador booleano para saber quais tarefas seriam filtrada e no intuito de não alterar o array original usei a função [filter](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) do Js.
  ### Context ⇒
  Foi implementado no intuito de evitar oque chamamos [props drilling](https://www.alura.com.br/artigos/prop-drilling-no-react-js) e com isso ganhamos melhor organização no código.

---

# :toolbox: Ferramentas utilizadas no projeto

Este é um projeto React construído utilizando o _Superset Javascript_ [TypeScript](https://www.typescriptlang.org/), pois ela nos oferece algumas vantagens sobre o Javascript como: maior facilidade de identificar erros no código, maior legibilidade do código por outros desenvolvedores, etc.  Essas e outras vantagens [neste link](https://kenzie.com.br/blog/typescript/).

Utilizamos também [ESLint](https://eslint.org/) que nos traz como vantagem identificar padrões de código em desacordo com as regras pre-estabelecidas e com ele usamos o [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) que tem por responsabilidade formatar o código conforme as regras pre estabelecidas pelo ESLint. Mais informações do ESLint + Prettier [neste link](https://medium.com/cwi-software/eslint-prettier-a-dupla-perfeita-para-produtividade-e-padroniza%C3%A7%C3%A3o-de-c%C3%B3digo-6a7730cfa358).

E como não podia faltar utilizamos também o [GitHub](https://www.remessaonline.com.br/blog/github/?utm_id=8625638102&matchtype=&placement=&adgroupid=87163560379&loc_interest_ms=&loc_physical_ms=1032008&network=g&target=&adposition=&utm_source=google&utm_medium=cpc&utm_campaign=RM_Search_Desk_DSA_Blog_PF&utm_term=&utm_content=557101616375&gclid=CjwKCAjwve2TBhByEiwAaktM1Pu1F2tqxxXOBPAoSsU2NobDWRh349-EdbgDVe048A2wxzgc_eyF1hoC5L8QAvD_BwE) para o code review e hospedar a aplicação.

### Pré-requisitos para executar esse projeto localmente.

Para rodar esse projeto localmente e necessário ter alguns requezitos cumpridos como:

- Node.js 12.22.0 ou versão superior.  Caso não tenha O NodeJs instalado [clique aqui](https://nodejs.org/pt-br/download/) para instalá-lo.
- Git . Caso não tenha o Git instalado[clique aqui](https://git-scm.com/)
- [Clonar](git@github.com:Guilherme-BS/todo-list.git) o repositório do projeto.
Para clonar o repositório basta abrir o terminal, navegar até o local desejado e rodar o comando

```bash
git clone link do repositorio
```

# Executando o projeto localmente

Primeiramente abra o terminal e navegue até o diretório do repositório clonado anteriormente e digite o seguinte comando (dependendo de que gerenciador de pacotes você utiliza!)

```bash
npm install
 ou
yarn install
```
Para baixar a dependências necessárias para executar o projeto.

Logo em seguida rode o comando (dependendo do seu gerenciador de pacotes)

```bash
npm start
ou
yarn dev
```
para iniciar a aplicação.

# Link do projeto:
Mas caso você não tenha interesse ou não esteja disposto a cumprir os requisitos, aqui esta o link para ver o projeto hospedado no Git Hub pages.
#### [Todo-List](https://guilherme-bs.github.io/todo-list/)

# Possiveis melhorias futuras:
- A construção de um Back-End constituído de uma api rest para possibilitar salvar e consumir os dados da página
