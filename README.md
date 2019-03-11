# strickers-blog

[![Build Status](https://travis-ci.org/frankhn/strickers-blog.svg?branch=develop)](https://travis-ci.org/frankhn/strickers-blog) 

## Purpose

The purpose of this document is to provide an overview of the project, expected product features and the presentation of the final product.

##Vision
Make easy sharing of the right information and content with respect to readers by age thus providing a security shield for readers.

## Features
Reader and author can create an account.
Reader, author and the administrator can login.
Author can create articles.
Reader, author and administrator can read articles.
Administrator can review and set reader age limit on an article.
Reader can sort articles by category.
Administrator can add trusted authors badge.
Reader can add comment on an article.
Blog can auto-detect sensitive info and restrict them.
Reader can view author profile with articles wrote.
Administrator can record bad words

Additional features
Author can edit his/her article
Author can delete his/her article
Reader can edit his/her comment
Reader can delete his/her comment
Reader and author can recover password over email
Administrator can edit bad word
Administrator can delete bad word

## Database Structure

#### user
```
id (integer)
name (string)
gender (string)
dob (date)
email (string)
password (string)
joiningdate (datetime)
usertype (string)
trustedbadge (boolean)
```

#### article
```
id (integer)
title (string)
content (string)
user (integer)
date (datetime)
category (integer)
tags (string <array>)
agelimit (integer)
Reviewed (boolean)
```

#### category
```
id (integer)
name (string)
parent (integer)
``` 

#### badword
```
id (integer)
word (string)
```
#### article-comment
```
id (integer)
comment (string)
article (integer)
user (integer)
date (datetime)
```

#### recoverpassword
```
id (integer)
user (integer)
code (integer)
hash (string)
status (string)
date (datetime)
```

#### API Response Specification
```
On Error
{
     status: errorCode,
     error: “errorMessage”
}

On Success
{
     status: successCode,
     data: [{ … }]
}
```
#### API Endpoint Specification
```
Endpoint: POST /auth/signup

{
     “status”: 200,
     data: [{
         “token”: “jwtTokenHere”,
         “User”: { … }
     }]
}

Endpoint: POST /auth/login

{
     “status”: 200,
     data: [{
         “token”: “jwtTokenHere”
     }]
}
```
#### Endpoint: POST /articles

```
{
     “status”: 200,
     data: [{
         “id”: Integer,
         “title”: String,
         “content”: Integer,
         “author”: {“id”: Integer, “name”: String},
         “date”: Datetime,
         “category”: {“id”: Integer, “name”: String},
         “tags”: [String, String],
         “agelimit”: Integer,
         “reviewed”: Boolean,
     }]
}
```

#### Endpoint: GET /articles

```
{
     “status”: 200,
     data: [{
         “id”: Integer,
         “title”: String,
         “content”: Integer,
         “author”: {“id”: Integer, “name”: String},
         “date”: Datetime,
         “category”: {“id”: Integer, “name”: String},
         “tags”: [String, String],
         “agelimit”: Integer,
         “reviewed”: Boolean,
     }, {
         “id”: Integer,
         “title”: String,
         “content”: Integer,
         “author”: {“id”: Integer, “name”: String},
         “date”: Datetime,
         “category”: {“id”: Integer, “name”: String},
         “tags”: [String, String],
         “agelimit”: Integer,
         “reviewed”: Boolean,
     }]
}
```

#### Endpoint: GET /articles/<article-id>

```
{
     “status”: 200,
     data: [{
         “id”: Integer,
         “title”: String,
         “content”: Integer,
         “author”: {“id”: Integer, “name”: String},
         “date”: Datetime,
         “category”: {“id”: Integer, “name”: String},
         “tags”: [String, String],
         “agelimit”: Integer,
         “reviewed”: Boolean,
     }]
}
```

#### Endpoint: GET /articles/category/<category-id>

```
{
     “status”: 200,
     data: [{
         “id”: Integer,
         “title”: String,
         “content”: Integer,
         “author”: {“id”: Integer, “name”: String},
         “date”: Datetime,
         “category”: {“id”: Integer, “name”: String},
         “tags”: [String, String],
         “agelimit”: Integer,
         “reviewed”: Boolean,
     }, {
         “id”: Integer,
         “title”: String,
         “content”: Integer,
         “author”: {“id”: Integer, “name”: String},
         “date”: Datetime,
         “category”: {“id”: Integer, “name”: String},
         “tags”: [String, String],
         “agelimit”: Integer,
         “reviewed”: Boolean,
     }]
}
```



#### Endpoint: GET /articles/review/pending

```
{
     “status”: 200,
     data: [{
         “id”: Integer,
         “title”: String,
         “content”: Integer,
         “author”: {“id”: Integer, “name”: String},
         “date”: Datetime,
         “category”: {“id”: Integer, “name”: String},
         “tags”: [String, String],
         “agelimit”: Integer,
         “reviewed”: Boolean,
     }, {
         “id”: Integer,
         “title”: String,
         “content”: Integer,
         “author”: {“id”: Integer, “name”: String},
         “date”: Datetime,
         “category”: {“id”: Integer, “name”: String},
         “tags”: [String, String],
         “agelimit”: Integer,
         “reviewed”: Boolean,
     }]
}
```
#### Endpoint: GET /articles/review/reviewed

```
{
     “status”: 200,
     data: [{
         “id”: Integer,
         “title”: String,
         “content”: Integer,
         “author”: {“id”: Integer, “name”: String},
         “date”: Datetime,
         “category”: {“id”: Integer, “name”: String},
         “tags”: [String, String],
         “agelimit”: Integer,
         “reviewed”: Boolean,
     }, {
         “id”: Integer,
         “title”: String,
         “content”: Integer,
         “author”: {“id”: Integer, “name”: String},
         “date”: Datetime,
         “category”: {“id”: Integer, “name”: String},
         “tags”: [String, String],
         “agelimit”: Integer,
         “reviewed”: Boolean,
     }]
}
```
#### Endpoint: POST /articles/<article-id>/comments

```
{
     “status”: 200,
     data: [{
         “id”: Integer,
         “comment”: String,
         “article”: {“id”: Integer, “title”: String},
         “user”: {“id”: Integer, “name”: String},
         “date”: Datetime,
     }]
}
```
#### Endpoint: GET /articles/<article-id>/comments

```
{
     “status”: 200,
     data: [{
         “id”: Integer,
         “comment”: String,
         “article”: {“id”: Integer, “title”: String},
         “user”: {“id”: Integer, “name”: String},
         “date”: Datetime,
     }, {
         “id”: Integer,
         “comment”: String,
         “article”: {“id”: Integer, “title”: String},
         “user”: {“id”: Integer, “name”: String},
         “date”: Datetime,
     }]
}
```




#### Endpoint: POST /category

```
{
     “status”: 200,
     data: [{
         “id”: Integer,
         “name”: String,
         “parent”: {id: Integer, name:String},
     }]
}
```
#### Endpoint: GET /category
```
{
     “status”: 200,
     data: [{
         “id”: Integer,
         “name”: String,
         “parent”: {id: Integer, name:String},
     }, {
         “id”: Integer,
         “name”: String,
         “parent”: {id: Integer, name:String},
     }]
}
```
#### Endpoint: GET /category/<category-id>

```
{
     “status”: 200,
     data: [{
         “id”: Integer,
         “name”: String,
         “parent”: {id: Integer, name:String},
     }]
}
```


#### Endpoint: POST /badwords

```
{
     “status”: 200,
     data: [{
         “id”: Integer,
         “word”: String,
     }]
}
```
#### Endpoint: GET /users/<user-id>

```
{
     “status”: 200,
     data: [
                “profile”: {
                “id”: Integer,
                “names”: String,
                “gender”: String,
                “email”: String,
                “joindate”: Date,
                “usertype”: String,
                },
         “articles”: {
                 “id”: Integer,
                “title”: String,
                “content”: Integer,
                “author”: {“id”: Integer, “name”: String},
                “date”: Datetime,
                “category”: {“id”: Integer, “name”: String},
                “tags”: [String, String],
                “agelimit”: Integer,
                “reviewed”: Boolean,
     }, {
                 “id”: Integer,
                “title”: String,
                “content”: Integer,
                “author”: {“id”: Integer, “name”: String},
                “date”: Datetime,
                “category”: {“id”: Integer, “name”: String},
                “tags”: [String, String],
                “agelimit”: Integer,
                “reviewed”: Boolean,
     }]
}
```

#### Endpoint: GET /badwords

```
{
     “status”: 200,
     data: [{
         “word”: [String, String, String, ...],
     }]
}
```
