# Node.js Technical Assignment

As discussed, please find the details of the technical assignment.

## Task Overview

The goal of this assignment is to create a small **Node.js application** that demonstrates understanding of:

- RESTful API design
- Token-based authentication
- MongoDB integration
- Validation & error handling
- Proper usage of HTTP status codes
- Coding standards and clean architecture

---

## Requirements

### Entities

#### Agency
- `AgencyId` (Unique, required)
- `Name` (required)
- `Address1` (required)
- `Address2` (optional)
- `State` (required)
- `City` (required)
- `PhoneNumber` (required)

#### Client
- `ClientId` (Unique, required)
- `AgencyId` (required, reference to Agency)
- `Name` (required)
- `Email` (required, valid email format)
- `PhoneNumber` (required)
- `TotalBill` (required, numeric)

---

## APIs to Implement

1. **Create Agency with Clients**  
   - Endpoint should accept payload to create an **Agency** and its **Clients** in a single request.
   - Validate required fields.
   - Return proper success/error status codes.

2. **Update Client Details**  
   - Update specific client information by `ClientId`.
   - Ensure fields are validated.
   - Return updated details with success status code.

3. **Get Top Client(s) by TotalBill**  
   - Return the **Agency name** along with the **Client(s) having maximum TotalBill**.
   - Response should include:
     ```json
     {
       "AgencyName": "string",
       "ClientName": "string",
       "TotalBill": number
     }
     ```
   - Handle cases where multiple clients share the same maximum bill.

---

## Expected Response Codes

- `200 OK` – Success responses
- `201 Created` – Resource successfully created
- `400 Bad Request` – Validation error / Missing required fields
- `401 Unauthorized` – Authentication required / Invalid token
- `404 Not Found` – Resource not found
- `500 Internal Server Error` – Unhandled errors

---

## Tech Stack

- **Node.js** with **Express.js**
- **MongoDB** with **Mongoose**
- **JWT (JSON Web Token)** for authentication
- **dotenv** for environment configuration
- **Postman** or **cURL** for API testing

---

## Setup Instructions

1. Clone this repository:
2. Install dependencies:
   ```npm install```
3. Start the server:
   ```
   npm start
   ```
## Testing the APIs

Use Postman or any API client.

Add the token in Authorization header as Bearer <token>.

Verify CRUD operations and status codes.
   
