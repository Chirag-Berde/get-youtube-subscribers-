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

## API Schema Documentation 
### Introduction
This API provides endpoints to retrieve information about YouTube subscribers. The API supports HTTP GET method to retrieve the subscriber data.

## Base URL

The base URL for all endpoints is `http://localhost:3000`.

## Authentication

The API does not require authentication to access any of the endpoints.

## Error Codes

The API may return the following error codes along with error messages:

| Error Code | Description |
| --- | --- |
| 400 | Bad Request |
| 404 | Not Found |
| 500 | Internal Server Error |

## Endpoints

### GET /subscribers

This API endpoint returns a list of YouTube subscribers with their subscriber count.

#### Request URL

`GET http://localhost:3000/subscribers`

#### Request Parameters

None

#### Response

The API returns a JSON object with the following fields:

| Field | Type | Description |
| --- | --- | --- |
| _id | integer | This is for the user's ID. |
| name | string | The number of subscribers for the YouTube subscriber |
| subscribedChannel | string | Displays the subscribed channel name of the use |
| subscribedDate | date | User's subscription date is recorded upon joining |

### GET /subscribers/names

This API endpoint returns a list of YouTube subscribers with their name and subscribed channel.

#### Request URL

`GET http://localhost:3000/subscribers/names`

#### Request Parameters

None

#### Response

The API returns a JSON object with the following fields:

| Field | Type | Description |
| --- | --- | --- |
| name | string | The name of the YouTube subscriber |
| subscribedChannel | string | The name of the YouTube channel subscribed to by the subscriber |

### GET /subscribers/:id

This API endpoint returns the details of a specific YouTube subscriber with the given `id`.

#### Request URL

`GET http://localhost:3000/subscribers/:id`

#### Request Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| id | integer | The ID of the YouTube subscriber to retrieve |

#### Response

The API returns a JSON object with the following fields:

| Field | Type | Description |
| --- | --- | --- |
| _id | integer | This is for the user's ID. |
| name | string | The number of subscribers for the YouTube subscriber |
| subscribedChannel | string | Displays the subscribed channel name of the use |
| subscribedDate | date | User's subscription date is recorded upon joining |

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
 



