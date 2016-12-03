# chosen-server

node.js + MongoDB

## Run
```
$ npm install
$ npm start
```

## Modules

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
    "passport-local-mongoose": "^4.0.0",
    "winston": "^2.3.0"
}
```

## Client-side

### /

Index page

## API

### /auth/facebook

Login with FB.

Will be redirected to /auth/facebook/callback

#### JSON
```
status: 'Login successful!',
success: true,
user: {
    token: String,
    id: String,
    name: String,
    gender: String,
    admin: Boolean,
    picture: String
}
```

### /auth/logout

Logs out user

## Database

### MongoDB

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
$ db.users.find().pretty();
```

