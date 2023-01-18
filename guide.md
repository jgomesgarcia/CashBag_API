# Projeto

    Um organizador de despesas 

## Funcionalidades:

### Core
- Criação uma `Transação` que pode representar um pagamento ou uma despesa
- Criação um `Período` (mes) pra agrupar Meses
- Criação um `Mês de Referência` para agrupar trasaçoes
- Exibição `listagem de transações` no mês
- Exibição do resumo do mês
- Exibição `timeline de resumo` de cada mês dentro de um `período`

### Rastreabilidade
- Criação de Pagadores
- Exibição de lista de Pagadores
- Exibição de transações por filtros
- Exibição de Graficos de despesas categorizados pela tag
- Exibição de relatorios

# Telas



# Tabelas

### User ```user```
 - **id** : uuid
 - **email** : string
 - **password** : string
 - **name** : string
 - **telephone** : string
 - **is_actived** : boolean

### User Settings ```user_settings```
 - **id** : uuid
 - **user_id** : uuid

### Cycle ```year```
 - **id** : uuid
 - **user_id** : uuid
 - **title** : uuid
 - **description** : string
 - **current_month** : string

### Month ```mounth```
 - **id** : uuid
 - **user_id** : uuid
 - **title** : string
 - **description** : string
 - **started_at** : date
 - **ended_at** : date
 - **created_at** : date
 - **updated_at** : date

### Year Month (?) ```year_mounth```
 - **id** : uuid
 - **year_id** : uuid
 - **month_id** : uuid

### Transaction ```transaction```
 - **id** : uuid
 - **user_id** : uuid
 - **title** : string
 - **value** : number
 - **description** : string
 - **payer_type** : string ```(unregistered | payer )```
 - **payer** : string | uuid
 - **receiver_type** : string ```(unregistered | payer )```
 - **receiver** : string | uuid
 - **tag** : string[]
 - **status** : string ```(actived | hidden | reserved | adjourned | paidout | canceled )```
 - **created_at** : date
 - **updated_at** : date

### Mounth Transacion ```mounth_transacion ```
 - **id** : uuid
 - **month_id** : uuid
 - **transaction_id** : uuid

### Transaction Adjournment ```transaction_adjournment```
 - **id** : uuid
 - **transaction_id** : uuid
 - **current_month_id** : uuid
 - **next_month_id** : uuid

### Payer  ```payer```
 - **id** : uuid
 - **user_id** : uuid
 - **name** : string
 - **alias** : string
 - **type** : string ```(person | entity | expense)```
 