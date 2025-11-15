# 🛡️ Node.js Authentication & Image Management API

A secure and scalable **Node.js + Express + MongoDB** backend with **JWT authentication**, **role-based access**, and **Cloudinary image upload** integration.  
Built to handle user registration, login, password management, and image CRUD operations efficiently.

---

## 🚀 Features
- 🔐 **User Authentication** — Register, Login, and Logout with JWT tokens  
- 🧑‍💻 **Role-Based Access Control** — Admin and user route protection  
- 🛠️ **Password Security** — Encrypted passwords using bcrypt  
- ☁️ **Cloudinary Integration** — Upload, view, and delete images in the cloud  
- 🧾 **Token Verification** — Middleware-protected routes for secure API calls  
- ⚙️ **Environment Variables** — Manage secrets easily using `.env`  
- 🗃️ **MongoDB Integration** — Uses Mongoose for schema-based data modeling  

---

## 🧩 Tech Stack
- **Node.js**  
- **Express.js**  
- **MongoDB + Mongoose**  
- **JWT (JSON Web Token)**  
- **bcrypt.js**  
- **dotenv**  
- **Multer** (for file upload handling)  
- **Cloudinary SDK**  

---

## 📦 Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/yourusername/node-auth-cloudinary-api.git
cd node-auth-cloudinary-api
```
### 2️⃣Install Dependencies
```bash
npm install
```
### 3️⃣ Configure environment variables
```bash
# Server configuration
PORT=5000

# MongoDB connection string
MONGO_URI=your_mongodb_connection_string

# JWT secret key
JWT_SECRET=your_jwt_secret_key

# Cloudinary credentials
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```
⚠️ Keep your .env file private and never commit it to version control.
### 4️⃣ Run the server
Run the server in development or production mode:
```bash
# For development
npm run dev

# For production
npm start
```
### 5️⃣ Server will start at:
```bash
http://localhost:5000
```
### API Endpoints
```bash
| Method | Endpoint                    | Description                            |
| :----- | :-------------------------- | :------------------------------------- |
| POST   | `/api/auth/register`        | Register a new user                    |
| POST   | `/api/auth/login`           | Login user and receive JWT             |
| POST   | `/api/auth/change-password` | Change password (Protected)            |
| POST   | `/api/images/upload`        | Upload image to Cloudinary (Protected) |
| GET    | `/api/images`               | Fetch all uploaded images              |
| DELETE | `/api/images/:id`           | Delete image by ID (Protected)         |
```
### 🔒 Middleware
- auth-middleware.js → Verifies JWT and authorizes requests
- admin-middleware.js → Restricts access to admin-only routes
- upload-middleware.js → Handles file uploads using Multer
- cloudinaryHelper.js → Configures Cloudinary for image storage

### Learning Highlights
- Implemented JWT authentication with secure password hashing using bcrypt
- Integrated Cloudinary API for efficient cloud-based image storage
- Developed RESTful routes for authentication and image management
- Applied role-based access and middleware-driven route protection

### 🧾 Example Usage (API Workflow)
- Register → /api/auth/register with { username, email, password }
- Login → /api/auth/login → Receive a JWT token
- Upload Image → /api/images/upload (with token in headers and image file)
- View Gallery → /api/images
- Delete Image → /api/images/:id (only if uploaded by current user or admin)

---

### 🧰 Folder Structure
```bash
├── controllers/
│   ├── auth-controller.js
│   ├── image-controller.js
│
├── middleware/
│   ├── auth-middleware.js
│   ├── admin-middleware.js
│   ├── upload-middleware.js
│
├── models/
│   ├── User.js
│   ├── Image.js
│
├── utils/
│   ├── cloudinaryHelper.js
│   ├── db.js
│
├── .env
├── package.json
└── server.js
```
### 📜 License
This project is open-source and available under the MIT License.
