# 📌 JSONPlaceholder API Wrapper
A backend API project built with Node.js and Express.



A robust Node.js/Express API that fetches and serves user data from [JSONPlaceholder](https://jsonplaceholder.typicode.com/users), following MVC architecture with proper error handling and developer-friendly features.

---

## ✨ Features
- ✅ Fetch all users from JSONPlaceholder  
- ✅ Get single user by ID (1-10)  
- ✅ MVC architecture  
- ✅ Comprehensive error handling  
- ✅ Dynamic port allocation  
- ✅ Self-documenting root endpoint  

---

## 🧱 Architecture

### Architectural Improvements
- ➕ Proper MVC separation  
- 🔁 Removed circular dependency between `constants.js` and `userController.js`  

### Performance
- ⚡ Preloaded `max_id` during server startup  
- 🚀 Auto-port selection with `portfinder`  

### Security
- 🔐 Environment variables via `dotenv`  
- ✅ Enhanced input validation  

### Developer Experience
- 🧾 Self-documenting API  
- 📋 Contextual error messages  

---

## 🌐 API Endpoints

| Method | Endpoint            | Description              |
|--------|---------------------|--------------------------|
| GET    | `/`                 | Welcome message + docs   |
| GET    | `/api/users`        | Get all users            |
| GET    | `/api/users/:id`    | Get a single user (1–10) |

---

## 🏗️ Project Structure

```bash
jsonplaceholder-api/
├── controllers/         # Business logic
│   └── userController.js
├── routes/              # API endpoints
│   └── userRoutes.js
├── utils/               # Constants and helpers
│   └── constants.js
├── .env                 # Environment variables
├── app.js               # Server config
├── package.json         # Project metadata & deps
└── README.md            # Project documentation
```

## 🛠 How to Run Locally
1. git clone https://github.com/Kshitiz-Garg-web/jsonplaceholder-api-backend-project

2. npm install

3. node app.js
```
Server runs on http://localhost:3000 (or next available port)