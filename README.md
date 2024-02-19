# Toolbox Challenge - Backend

## Dependencies:

NodeJS v14 or later

## Notes:

Authentication not required

## Installation:

- Download this repository on your computer

- Open in your IDE

- In your terminal, download node dependencies with command npm i

- Run the API with command npm start

- Run testing with command npm test

## Endpoints:

#### Read data

- GET method

- localhost:4000/files/data

- Authentication not required

- Body not required

- Recieve:
  {success: true, error: false, response: [{file: "test2.csv", lines: [{text: "DBcWSQkVVyBwGC", number: "80577", hex: "6ada8a32ca60188f3c497f8832c90902"}]}, {...}, {...} ...]}

## Version:

- v1.0.1 | Modified README.md file.

- v1.0.0 | Added README.md file.

- v0.5.1 | Added testing describe in product.test file. Changed timeout in mocha config. Added status in readData endpoint. Changed chai version on package.json. Export app in server file.

- v0.5.0 | Added libraries of testing. Created test folder and file. Fixed on secretOrKey authorization.

- v0.4.1 | Small fixes on dataControllers file.

- v0.4.0 | Data formated. End of readData endpoint.

- v0.3.0 | Create services files.

- v0.2.0 | Endpoints and routes files created.

- v0.1.0 | First commit.
