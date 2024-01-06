
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

| Body            | type   | Description|
| --------------- | ------ | ------------------------------------------------------------------------------ | 
|`username`       | string | Username of your choice                                                        |
|`email`          | string | One of your emails.                                                            |
|`password`       | string | Password of your choice (passwords are not stored in the DB and are encrypted).|
|`confirmPassword`| string | Must be the same as password                                                   |


<br>
<br>

### /signin (post)

To connect an existing account in DB

| Body     | type   | Description |
| -------- | ------ | -------- |
|`email`   | string | The email that you have choosen to create your account    |
|`password`| string | The password that you have choosen to create your account |


<br>
<br>

## The two following routes are only usable if you are connected with a user account.

### /user/find 

To retrieve a user's favorite list array using the user token and subsequently update the array with the following route

<br>
<br>

### /user/update 

To update the favorite list of an existing account

| Body           | type   | Description |
| -------------- | ------ | -------- |
|`key_fav_list`  | string | The key corresponding to the favorites array of the connected user. |
|`value_fav_list`| array  | The new favorite list array assigned to the connected user          |











