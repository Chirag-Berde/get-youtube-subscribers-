# Node.js Application to Get YouTube Subscribers

This is a Node.js application that provides RESTful APIs to get YouTube subscribers data. The application has three API endpoints that can be accessed via HTTP requests.

## API endpoints

### 1. GET /subscribers
This API endpoint returns a list of YouTube subscribers with their subscriber count.  

Request URL: `http://localhost:3000/subscribers`  
Request Method: GET

### 2. GET /subscribers/names
This API endpoint returns a list of YouTube subscribers with their name and subscribed channel.

Request URL: `http://localhost:3000/subscribers/names`   
Request Method: GET

### 3. GET /subscribers/:id
This API endpoint returns the details of a specific YouTube subscriber with the given `id`.
 
Request URL: `http://localhost:3000/subscribers/:id`  
Request Method: GET

### Prerequisites
- Node.js installed on your machine.

### Getting Started

1. Clone the repository or download the code
2. Navigate to the project directory in your terminal.
3. Install dependencies by running `npm install`.
4. Start the application by running `npm start` 
5. The application will be running on `http://localhost:3000` 

### Dependencies
 - nodejs: "^16.18.0"
 - express: "^4.17.1"
 - nodemon: "^2.0.22"
 - mongoose: "^5.10.15"
 




