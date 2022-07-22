# API

## Clonar o repositório para sua máquina
- git clone https://github.com/matheusbattisti/curso_adonis_api_yt.git
<br>

## Instalar as dependências
- npm install
<br>

## Iniciar o servidor
- node ace serve
<br>

### Se der erro e descubra o comando para "corrigir" com:
- node ace
<br>

### No meu caso estava faltando a variável de ambiente "$(key):
- node ace generate:key
<br>

### Foi gerada uma chave que deve ser colocada no arquivo .evn na variável APP_KEY
### Depois é so rodar o comando node ace serve novamente
<br>

### Ao testar a API no caminho http://localhost:3333/api/moments acusou o erro de não existência da tabela moments
### Usando o node ace novamente para descobrir qual o comande para criar as tabelas...
- node ace migration:run 
