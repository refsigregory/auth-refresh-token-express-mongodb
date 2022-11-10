## Init from Blank Project
- Start express project: `bash init.sh`
- Setup Tests: `bash init-test.sh` 

## Installation
### Manual Install
- `npm install`
- copy `env` to `.env`, leave `MONGO_USER` and `MONGO_PASS` blank if not using URI without username & password like in localhost
- `npm start`

### Docker
- Run `docker-compose up`

## Tests
- Run `npm test`

## Guide
#### Endpoints
- [POST] `/api/auth/register`
```
{
  "username": "user",
  "email": "user@email.com",
  "password": "passW0RD@",
  "firstName": "Us",
  "lastName": "Er"
}
```

- [POST] `/api/auth/login`
```
{
  "email": "user@email.com",
  "password": "passW0RD@"
}
```

- [POST] `/api/auth/logout`
```
{
  "refreshToken": <your token>
}
```

- [GET] `/api/auth/refresh?refreshToken=<your refresh token>`


- [GET] `/api/users/details`

Headers: `Authorization: Bearer <your token>`

### Docs
#### Response Result
- Make the API response more simpe using utils `responseResult` function.
```
responseResult(res, {
  code: 200,
  data: {
    // you obj data
  },
  message: "Here yor message",
})
```