## User-Authentication-System

This project demonstrates how to implement authentication using Passport.js in a Node.js application with Express and MongoDB.


### Setup

1. Clone the repository.
   
 > git clone https://github.com/raghabendra-dash/User_Authentication-API.git

2. Install dependencies.

 > npm install

3. Set up environment variables.

4. Start the server.
   
 > node server.js


### Dependencies

- Express
- Dotenv
- Cookie-parser
- Passport (middleware for Node-Authentication)
- Bcryptjs (library for hashing passwords securely)
- Mongoose
- Passport
  
  
### Usage

1. Register User:

 **_ Send a POST request to /register with JSON payload: _**
 
 {
  "username": "John Doe",
  "password": "John.Doe123"
 }

2. Login User:
   
 **_ Send a POST request to /login with JSON payload: _** 

  {
  "username": "John Doe",
  "password": "John.Doe123"
 }


### Contributing

Contributions are welcome! Fork the repository, make your changes, and submit a pull request.

 
  
  

