# chosen-server

node.js + MongoDB

### Run
```
$ npm install
$ npm start
```

### Modules

Running npm install will install all following dependencies:

```
{
    "body-parser": "~1.15.2",
    "cookie-parser": "~1.4.3",
    "debug": "~2.2.0",
    "ejs": "~2.5.2",
    "express": "~4.14.0",
    "morgan": "~1.7.0",
    "serve-favicon": "~2.3.0",
    "fs": "0.0.1-security",
    "jsonwebtoken": "^7.1.9",
    "mongoose": "^4.7.0",
    "passport": "^0.3.2",
    "passport-facebook": "^2.1.1",
    "winston": "^2.3.0"
}
```

## API

### (GET) /

Landing page

### (GET) /auth/facebook

Login with FB.

Will be redirected to /auth/facebook/callback

#### JSON Response
```
{
    status: 'Login successful!',
    success: true,
    user: {
        token: String,
        id: String, //numbers only
        name: String, //as displayed in FB profile
        gender: String, //'male' or 'female'; custom genders left blank
        admin: Boolean,
        picture: String //Photo URL
    }
}
```

### (GET) /auth/check

Check if you're logged in

#### Request

A token should be provided in either the body ("token"), query URL parameters ("token"), or header ("x-access-token")

#### JSON Response

If a valid token is provided:
```
{
    "status": "You are logged in!"
}
```

Else:
```
{
    "err": {
        "message": "No token provided!",
        "error": {
            "status": 403
        }
    }
}
```

### (GET) /auth/logout

Logs out user

#### JSON Response

```
{
    status: 'Bye!'
}
```

## Database

### MongoDB Setup

Runs MongoDB using mongoose.

#### Installation

To install MongoDB, run:

```
$ brew install mongodb
```

#### Run

To start MongoDB, run:

```
$ sudo mongod
```

To access DB using shell, run:

```
$ mongo
$ use chosen
$ db.users.find().pretty(); //SELECT * FROM users;
```

### Schema

#### Users

```
{
    "_id" : ObjectId("5842d2b4df81a709a2103936"),
    "name" : "Sangyeop Jung",
    "token" : "EAAE8XgdoL8YBAPUhTEHcaYTRZBDJhslRZAPvR7js0UOKZAOQqJuSRhSZBvwEjOWzsoLZC2dGqZBXdKi5DZBfYEIIGgFGytAtQTrZC8SsWYXJZAuOmZAbMo9g4h8DQZAEmTstWPjk0lLDXGc57Px2mSc5ZA9v5EhCniqZA8NsZD",
    "id" : "1322520774479915",
    "picture" : [
        "http://graph.facebook.com/1322520774479915/picture"
    ],
    "admin" : true,
    "__v" : 0
}
```