## PaypayBackend
[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Application launch

In order to launch an application, follow these steps:

1. Clone the project by running this command `git clone project_name`
2. Run this command in order to install all dependencies `npm install`. All dependencies are in file `package.json`
3. Run this command `npm run start:dev` in order to launch backend-end.
4. P.S. There might be some global dependencies which may be required to launch front-end. 
5. Once front-end is launched, back-end can be run as well.

## Project Description
The back-end uses **Node.JS/NestJS**. This framework was chosen because it has project structure which is super easy to organize and maintain. 
Our project can be divided into two separate functionalities. Each functionality is wrapped up into separate module. Hence, this framemwork 
can easily be scaled and remain flexible. Each module uses controllers and services within. They help to build SOA architecture and put a business logic
within services. I also like this framework because it uses **TypeScript** by default. It helps to develop flexible yet code with robust structure.
 It has quite developped **NestJs/Common** library to work with **REST API**. The data which comes every RESt request is wrapped up into 
**DTOs**. They are quite primitive here, but at later stage they are usesful.



## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```