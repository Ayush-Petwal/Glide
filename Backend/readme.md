#Backend API Documentation

## /users/register Endpoint

### Description
Registers a new user with the provided information.

### HTTP Method
`POST`

### Required Data
- `firstName`: string, minimum 3 characters
- `lastName`: string, minimum 3 characters
- `email`: string, valid email address, minimum 5 characters
- `password`: string, minimum 8 characters

### Status Codes
- `201 Created` - User successfully registered.
- `400 Bad Request` - Missing or invalid fields.

### Example Response

- `user` (object):
    - `fullName` (object).
        - `firstName` (string , required) :User's firstName (min 3 character).
        - `lastName` (string , required) :User's lastName (min 3 character).
    - `email` (string , required) :User's email (must be a valid email).
    - `password` (string , required) :User's password (min 8 character)
- `token` (string) : JWT Token
