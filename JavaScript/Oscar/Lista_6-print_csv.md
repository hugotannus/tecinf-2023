#  Lista de Exercícios #6

> :bulb: **Recomendação:** ANTES de iniciar cada resolução, procure na [MDN Web Docs](https://developer.mozilla.org/pt-BR/) por métodos da linguagem JavaScript para os *objetos nativos* [String](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String) e [Array](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array) que sejam adequados para resolver o exercício em questão. Analise também os exemplos contidos na [MDN Web Docs](https://developer.mozilla.org/pt-BR/) para o método [Console.table()](https://developer.mozilla.org/en-US/docs/Web/API/console/table_static), que deverá ser utilizado na implementação do último exercício.

## Imprimir arquivo CSV

Implemente a sequência de funções de nº 1 a 6 abaixo, atendendo às expectativas de entrada e saída definidas como requisitos para cada uma delas. As funções **deverão ser disponibilizadas como módulos JavaScript**.

Em seguida, **faça importação dos módulos criados nos exercícios anteriores** e utilize as funções na implementação do procedimento `printCSV`, pedido ao final da lista de exercícios, para formatar os dados de acordo com as especificações do método [Console.table](https://developer.mozilla.org/en-US/docs/Web/API/console/table_static).

---

### ***Função 1*** - `csvToLines`
**Requisitos:**
- **Entrada:** `csvText` - Uma string contendo o conteúdo de um CSV.
- **Saída:** `lines` - Uma lista de strings, onde cada string representa uma linha do CSV.

**Cenários de Teste:**
1. **Entrada:** `"nome;idade\nJoão;28\nMaria;32"`
   - **Saída esperada:** `["nome;idade", "João;28", "Maria;32"]`

2. **Entrada:** `"produto;preço\nArroz;5.00\nFeijão;7.50"`
   - **Saída esperada:** `["produto;preço", "Arroz;5.00", "Feijão;7.50"]`

3. **Entrada:** `"Filme;Diretor;Ano;Duração;Gênero;País de Origem;Receita Bruta\nParasita;Bong Joon-ho;2019;132;Drama;Coréia do Sul;258.8M\nGreen Book;Peter Farrelly;2018;130;Drama;EUA;321.8M"`
   - **Saída esperada:** `["Filme;Diretor;Ano;Duração;Gênero;País de Origem;Receita Bruta", "Parasita;Bong Joon-ho;2019;132;Drama;Coréia do Sul;258.8M", "Green Book;Peter Farrelly;2018;130;Drama;EUA;321.8M"]`

### ***Função 2*** - `linesToRows`
**Requisitos:**
- **Entrada:** `lines` - Uma lista de strings, onde cada string representa uma linha do CSV.
- **Saída:** `rows` - Uma lista de listas, onde cada lista interna contém as colunas de uma linha do CSV.

**Cenários de Teste:**
1. **Entrada:** `["nome;idade", "João;28", "Maria;32"]`
   - **Saída esperada:** `[["nome", "idade"], ["João", "28"], ["Maria", "32"]]`

2. **Entrada:** `["produto;preço", "Arroz;5.00", "Feijão;7.50"]`
   - **Saída esperada:** `[["produto", "preço"], ["Arroz", "5.00"], ["Feijão", "7.50"]]`

3. **Entrada:** `["Filme;Diretor;Ano;Duração;Gênero;País de Origem;Receita Bruta", "Parasita;Bong Joon-ho;2019;132;Drama;Coréia do Sul;258.8M", "Green Book;Peter Farrelly;2018;130;Drama;EUA;321.8M"]`
   - **Saída esperada:** `[["Filme", "Diretor", "Ano", "Duração", "Gênero", "País de Origem", "Receita Bruta"], ["Parasita", "Bong Joon-ho", "2019", "132", "Drama", "Coréia do Sul", "258.8M"], ["Green Book", "Peter Farrelly", "2018", "130", "Drama", "EUA", "321.8M"]]`

### ***Função 3*** - `extractHeader`
**Requisitos:**
- **Entrada:** `rows` - Uma lista de listas de strings, onde cada lista interna representa colunas de uma linha do CSV.
- **Saída:** `header` - Uma lista contendo apenas o cabeçalho (primeira linha).

**Cenários de Teste:**
1. **Entrada:** `[["nome", "idade"], ["João", "28"], ["Maria", "32"]]`
   - **Saída esperada:** `["nome", "idade"]`

2. **Entrada:** `[["produto", "preço"], ["Arroz", "5.00"], ["Feijão", "7.50"]]`
   - **Saída esperada:** `["produto", "preço"]`

3. **Entrada:** `[["Filme", "Diretor", "Ano", "Duração", "Gênero", "País de Origem", "Receita Bruta"], ["Parasita", "Bong Joon-ho", "2019", "132", "Drama", "Coréia do Sul", "258.8M"], ["Green Book", "Peter Farrelly", "2018", "130", "Drama", "EUA", "321.8M"]]`
   - **Saída esperada:** `["Filme", "Diretor", "Ano", "Duração", "Gênero", "País de Origem", "Receita Bruta"]`

### ***Função 4*** - `extractContent`
**Requisitos:**
- **Entrada:** `rows` - Uma lista de listas de strings, onde cada lista interna representa colunas de uma linha do CSV.
- **Saída:** `content` - Uma lista de listas, contendo todas as linhas exceto o cabeçalho.

**Cenários de Teste:**
1. **Entrada:** `[["nome", "idade"], ["João", "28"], ["Maria", "32"]]`
   - **Saída esperada:** `[["João", "28"], ["Maria", "32"]]`

2. **Entrada:** `[["produto", "preço"], ["Arroz", "5.00"], ["Feijão", "7.50"]]`
   - **Saída esperada:** `[["Arroz", "5.00"], ["Feijão", "7.50"]]`

3. **Entrada:** `[["Filme", "Diretor", "Ano", "Duração", "Gênero", "País de Origem", "Receita Bruta"], ["Parasita", "Bong Joon-ho", "2019", "132", "Drama", "Coréia do Sul", "258.8M"], ["Green Book", "Peter Farrelly", "2018", "130", "Drama", "EUA", "321.8M"]]`
   - **Saída esperada:** `[["Parasita", "Bong Joon-ho", "2019", "132", "Drama", "Coréia do Sul", "258.8M"], ["Green Book", "Peter Farrelly", "2018", "130", "Drama", "EUA", "321.8M"]]`

### ***Função 5*** - `rowToJSON`
**Requisitos:**
- **Entrada:** Duas listas de mesmo tamanho:
  - `header` - lista representa o cabeçalho da tabela.
  - `row` - lista representa uma única linha do conteúdo da tabela.
- **Saída:** `jsonObject`- Um objeto JSON onde as chaves são os elementos do cabeçalho e os valores são os elementos correspondentes da linha do conteúdo.

**Cenários de Teste:**
1. **Entrada:**
   - Cabeçalho: `["nome", "idade"]`
   - Linha: `["João", "28"]`
   - **Saída esperada:** `{ nome: "João", idade: "28" }`

2. **Entrada:**
   - Cabeçalho: `["produto", "preço"]`
   - Linha: `["Arroz", "5.00"]`
   - **Saída esperada:** `{ produto: "Arroz", preço: "5.00" }`

3. **Entrada:**
   - Cabeçalho: `["Filme", "Diretor", "Ano", "Duração", "Gênero", "País de Origem", "Receita Bruta"]`
   - Linha: `["Parasita", "Bong Joon-ho", "2019", "132", "Drama", "Coréia do Sul", "258.8M"]`
   - **Saída esperada:** `{ Filme: "Parasita", Diretor: "Bong Joon-ho", Ano: "2019", Duração: "132", Gênero: "Drama", "País de Origem": "Coréia do Sul", "Receita Bruta": "258.8M" }`

### ***Função 6*** - `contentToJsonData`
**Requisitos:**
- **Entrada:**
   - `header` - lista de strings representando o cabeçalho;
   - `content` - lista de listas representando o conteúdo do CSV.
- **Saída:** `data` - Uma lista de objetos JSON, onde as chaves são os elementos do cabeçalho e os valores são as colunas correspondentes.

**Cenários de Teste:**
1. **Entrada:** `["nome", "idade"]` e `[["João", "28"], ["Maria", "32"]]`
   - **Saída esperada:** `[ { nome: "João", idade: "28" }, { nome: "Maria", idade: "32" } ]`

2. **Entrada:** `["produto", "preço"]` e `[["Arroz", "5.00"], ["Feijão", "7.50"]]`
   - **Saída esperada:** `[ { produto: "Arroz", preço: "5.00" }, { produto: "Feijão", preço: "7.50" } ]`

3. **Entrada:** `["Filme", "Diretor", "Ano", "Duração", "Gênero", "País de Origem", "Receita Bruta"]` e `[["Parasita", "Bong Joon-ho", "2019", "132", "Drama", "Coréia do Sul", "258.8M"], ["Green Book", "Peter Farrelly", "2018", "130", "Drama", "EUA", "321.8M"]]`
   - **Saída esperada:** `[ { Filme: "Parasita", Diretor: "Bong Joon-ho", Ano: "2019", Duração: "132", Gênero: "Drama", "País de Origem": "Coréia do Sul", "Receita Bruta": "258.8M" }, { Filme: "Green Book", Diretor: "Peter Farrelly", Ano: "2018", Duração: "130", Gênero: "Drama", "País de Origem": "EUA", "Receita Bruta": "321.8M" } ]`

### ***Procedimento*** - `printCSV`
**Requisitos:**
- **Entrada:** `csvText` - Uma string contendo o conteúdo de um arquivo CSV.
- **Saída:** Nenhuma. A função deve imprimir no console o objeto JSON convertido a partir do CSV, utilizando `console.table()`.

