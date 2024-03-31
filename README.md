# **Auth Service V2.0**

## API Link 
[https://auth-service.4.us-1.fl0.io/](https://auth-service.4.us-1.fl0.io/)

## API Segurity:
1. **Incoming Request Control (Rate Limit)**:
   - The API's ability to receive requests within a specific time period has been limited. This helps prevent brute force attacks and resource abuse.

2. **Enabling CORS (Cross-Origin Resource Sharing)**:
   - CORS has been properly configured to allow or restrict access to the API from different domains. This prevents security issues related to cross-origin requests.

3. **Adjusting Connection Time (Keep Alive)**:
   - Appropriate connection times have been set to keep connections active and prevent denial-of-service (DoS) attacks.

4. **Adding HTTP Request Timeouts**:
   - A time limit has been established for incoming requests. If a request doesn't complete within the specified time, it should be canceled.

5. **Limiting HTTP Payload Size**:
   - The maximum size of request and response bodies is controlled. This helps prevent flooding attacks and buffer overflow.

6. **MongoDB Security**:
   - Connections to MongoDB are restricted to authorized IP addresses only.
   - The default MongoDB port has been changed to a custom one.
   - Any HTTP access to MongoDB's administrative and REST API parts has been disabled.

7. **Schema Validation**:
   - Schema validation in MongoDB ensures that stored data adheres to specific rules. This helps prevent corrupt or malicious data.

8. **Authentication and Authorization**:
   - Proper authentication and authorization have been implemented in the API. JWT (JSON Web Tokens) are used to authenticate users and manage their access permissions.

9. **Sensitive Data Encryption**:
   - Sensitive data (such as passwords) has been encrypted before storing it in the database.

## Commands:
```
npm run start
```
```
npm run start:dev
```
```
npm run lint
```
```
npm run build
```
<br />

## Routes:
 - /api/{VERSION}/user
 - /api/{VERSION}/user/signup
 - /api/{VERSION}/user/login

<br />

## Methods:
 - **[GET]**, **[PATCH]**, **[DELETE]**: */api/{VERSION}/user*
 - **[POST]**: */api/{VERSION}/user/signup*
 - **[POST]**: */api/{VERSION}/user/login*

<br />

### User:
```typescript
interface User {
  username: string;
  email: string;
  password: string;
}
```

### System Design:
![auth-service](./assets/images/auth-service-2.0.png)

<br />

### **Author**: <a href="https://www.linkedin.com/in/laureano-vera-320086204/" target="_blank">&copy;VeraLaureano</a>