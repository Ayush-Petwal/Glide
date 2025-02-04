# Backend API Documentation

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

## /users/login Endpoint

### Description
Logs in a user with the provided credentials.

### HTTP Method
`POST`

### Required Data
- `email`: string, valid email address
- `password`: string, minimum 8 characters

### Status Codes
- `200 OK` - User successfully logged in.
- `400 Bad Request` - Missing or invalid fields.
- `401 Unauthorized` - Invalid email or password.

### Example Response

- `user` (object):
    - `fullName` (object).
        - `firstName` (string) :User's firstName.
        - `lastName` (string) :User's lastName.
    - `email` (string) :User's email.
- `token` (string) : JWT Token

## /users/logout Endpoint

### Description
Logs out the authenticated user by clearing the authentication token.

### HTTP Method
`GET`

### Authentication
Requires a valid JWT token in either cookies or the `Authorization` header.

### Status Codes
- `200 OK` - User successfully logged out.
- `401 Unauthorized` - Missing or invalid token.

## /users/profiles Endpoint

### Description
Fetches the profile information of the authenticated user.

### HTTP Method
`GET`

### Authentication
Requires a valid JWT token in either cookies or the `Authorization` header.

### Status Codes
- `200 OK` - User profile successfully retrieved.
- `401 Unauthorized` - Missing or invalid token.

### Example Response

- `user` (object):
    - `fullName` (object):
        - `firstName` (string): User's first name.
        - `lastName` (string): User's last name.
    - `email` (string): User's email.
    - `createdAt` (string): Account creation date.
    - `updatedAt` (string): Last profile update date.

## /captain/register Endpoint

### Description
Registers a new captain (driver) with the provided information.

### HTTP Method
`POST`

### Required Data
- `fullName.firstName` (string, minimum 3 chars)
- `fullName.lastName` (string, minimum 3 chars)
- `email` (string, valid email)
- `password` (string, minimum 8 chars)
- `vehicle.color` (string, minimum 3 chars)
- `vehicle.plate` (string, minimum 3 chars)
- `vehicle.capacity` (number, minimum 1)
- `vehicle.vehicleType` (string, must be one of: car, bike, auto)

### Status Codes
- `201 Created` - Captain successfully registered.
- `400 Bad Request` - Missing or invalid fields.
- `401 Unauthorized` - Captain with the same email already exists.
- `500 Internal Server Error` - Server error.

### Example Request

```json
{
    "fullName": {
        "firstName": "captain",
        "lastName": "third"
    },
    "email": "captain3@email.com",
    "password": "captain3@password",
    "vehicle": {
        "color": "white",
        "plate": "UK 07 BN 4248",
        "capacity": 2,
        "vehicleType": "bike"
    }
}
```

### Example Response

```json
{
    "message": "Captain created successfully",
    "data": {
        "fullName": {
            "firstName": "captain",
            "lastName": "third"
        },
        "email": "captain3@email.com",
        "password": "$2b$10$mEq7BMof1jR4gMf4h6UNuOpFhRtAkv2fzzp7R829NdnOKoa9B0pAm",
        "status": "inactive",
        "vehicle": {
            "color": "white",
            "plate": "UK 07 BN 4248",
            "capacity": 2,
            "vehicleType": "bike"
        },
        "_id": "67a1a3f7d15da42ee08ba905",
        "__v": 0
    }
}
```

## /captain/login Endpoint

### Description
Logs in a captain with the provided credentials.

### HTTP Method
`POST`

### Required Data
- `email`: string, valid email address
- `password`: string, minimum 8 characters

### Status Codes
- `200 OK` - Captain successfully logged in.
- `400 Bad Request` - Missing or invalid fields.
- `401 Unauthorized` - Invalid email or password.

### Example Response

- `captain` (object):
    - `fullName` (object).
        - `firstName` (string) :Captain's firstName.
        - `lastName` (string) :Captain's lastName.
    - `email` (string) :Captain's email.
- `token` (string) : JWT Token

## /captain/logout Endpoint

### Description
Logs out the authenticated captain by clearing the authentication token.

### HTTP Method
`GET`

### Authentication
Requires a valid JWT token in either cookies or the `Authorization` header.

### Status Codes
- `200 OK` - Captain successfully logged out.
- `401 Unauthorized` - Missing or invalid token.

## /captain/profile Endpoint

### Description
Fetches the profile information of the authenticated captain.

### HTTP Method
`GET`

### Authentication
Requires a valid JWT token in either cookies or the `Authorization` header.

### Status Codes
- `200 OK` - Captain profile successfully retrieved.
- `401 Unauthorized` - Missing or invalid token.

### Example Response

- `captain` (object):
    - `fullName` (object):
        - `firstName` (string): Captain's first name.
        - `lastName` (string): Captain's last name.
    - `email` (string): Captain's email.
    - `createdAt` (string): Account creation date.
    - `updatedAt` (string): Last profile update date.
