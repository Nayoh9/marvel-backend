
# NUDGE Marvel Backend - Rest API

Before you go, please ensure you get yourself an API key at https://lereacteur-marvel-api.netlify.app/documentation.

For all requests, the API address is: https://lereacteur-marvel-api.herokuapp.com

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


### /character/:id (get) 

To get character informations with its ID 

| Params            | Info        | Required |
| ----------------- | ----------- | -------- |
| `id`              | mongoDB id  | Yes      |


| Query   | type   | Required |
| --------| -------| -------- |
|`apiKey` | string | Yes      |

<br>
<br>

## Comics

### /comics (get) 

To get a list Marvel comics 100 by 100 

| Query             | Type    | Required |
| ----------------- | ------- | -------- |
| `apiKey`          | string  | Yes      |
| `limit`           | number  | No       |
| `skip`            | number  | No       |
| `title`           | string  | No       |

<br>
<br>

### /comic/:id (get) 

To get comic informations with its ID 

| Params            | Info        | Required |
| ----------------- | ----------- | -------- |
| `id`              | mongoDB id  | Yes      |


| Query   | type   | Required |
| --------| -------| -------- |
|`apiKey` | string | Yes      |

<br>
<br>


## User

### /signup (post)

To create a new user

| Body            | type   | Required |
| --------------- | ------ | -------- |
|`username`       | string | Yes      |
|`email`          | string | Yes      |
|`password`       | string | Yes      |
|`confirmPassword`| string | Yes      |


<br>
<br>

### /signin (post)

To connect an existing account in DB

| Body     | type   | Required |
| -------- | ------ | -------- |
|`email`   | string | Yes      |
|`password`| string | Yes      |


<br>
<br>

## Thefollowing route is only usable if you are connected with a user account.

### /user/update 

To update the favorite list of an existing account

| Body           | type   | Required |
| -------------- | ------ | -------- |
|`key_fav_list`  | string | Yes      |
|`value_fav_list`| array  | Yes      |











