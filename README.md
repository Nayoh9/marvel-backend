
# NUDGE Marvel Backend - Rest API

Before you go, please ensure you get yourself an API key at https://lereacteur-marvel-api.netlify.app/documentation.

For all the request, API adress is : https://lereacteur-marvel-api.herokuapp.com

## Characters

### /characters (get)

To get a list Marvel character 100 by 100 

| Query             | Type    | Required |
| ----------------- | ------- | -------- |
| `apiKey`          | string  | Yes      |
| `limit`           | number  | No       |
| `skip`            | number  | No       |
| `name`            | string  | No       |

<br>
<br>


### /characters/:id (get) 

To get character informations with its ID 

| Params            | Info        | Required |
| ----------------- | ----------- | -------- |
| `id`              | mongoDB id  | Yes      |


| Query   | type   | Required |
| --------| -------| -------- |
|`apiKey` | string | Yes      |










