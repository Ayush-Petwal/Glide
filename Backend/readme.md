
# /users/register Endpoint

## Description
Registers a new user with the provided information.

## Required Data
- `firstName`: string, minimum 3 characters
- `lastName`: string, minimum 3 characters
- `email`: string, valid email address, minimum 5 characters
- `password`: string, minimum 8 characters

## Status Codes
- `201 Created` - User successfully registered.
- `400 Bad Request` - Missing or invalid fields.