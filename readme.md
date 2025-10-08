# 🌐 Mini Social Media App

### *(Node.js + Express + EJS + MongoDB + JWT)*

A **simple yet complete mini social media web app** built with **Node.js, Express, EJS, MongoDB, and JWT authentication**.
Users can **register, log in, create posts, edit, update, like/unlike, and delete posts** — all securely handled using **JWT and cookies**.

## ✨ Features

### 🔐 User Management
* 👤 **Register, Login & Logout** users
* 🔒 **JWT-based Authentication** with cookie storage
* 🔐 **Protected Routes** — only logged-in users can access profiles

### 📝 Post Management
* 🖊️ **Create, Edit & Update Posts**
* ❤️ **Like & Unlike** functionality
* 🗑️ **Delete Posts** (only by the post owner)

## 🧩 Tech Stack

| Purpose           | Technology                              |
| ----------------- | --------------------------------------- |
| Backend           | **Node.js**, **Express.js**             |
| Database          | **MongoDB + Mongoose**                  |
| Frontend          | **EJS (Embedded JavaScript Templates)** |
| Authentication    | **JWT (jsonwebtoken)**                  |
| Password Security | **bcrypt**                              |
| Cookies           | **cookie-parser**                       |

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Add environment variables
Create a `.env` file in the project root:
```env
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
```

### 4️⃣ Start the server

```bash
node app.js
```

Then open 👉 **[http://localhost:3000](http://localhost:3000)**

## 🧠 How It Works
1. **Registration** → Users register with username, email & password (hashed using bcrypt).
2. **Login** → A JWT token is generated and stored as a cookie.
3. **Protected Routes** → Middleware verifies JWT before allowing access.
4. **Posts** → Users can create, edit, delete, and like/unlike posts.
5. **Ownership Check** → Only post owners can delete or edit their posts.

## 📁 Folder Structure
```
├── models/
│   ├── user.js
│   └── post.js
├── views/
│   ├── index.ejs
│   ├── login.ejs
│   ├── register.ejs
│   ├── profile.ejs
│   └── edit.ejs
├── public/
├── app.js
└── package.json
```

---

## 💡 Key Learnings
* Implementing **JWT Authentication** in Express
* Using **bcrypt** for password hashing
* Creating **protected routes** with middleware
* Handling **CRUD operations** in MongoDB
* Managing **likes/unlikes** and ownership logic

## 📸 Preview (optional)
Add your app screenshots here:

```
/assets/screenshots/
```

---

## 👩‍💻 Author
**Sweta Dahal**
🎓 B.Sc. CSIT Student | 💻 MERN Stack Learner
🌐 [YouTube: Sweta Dahal](https://www.youtube.com/@SwetaDahal)

## 🤝 Contribute
Want to improve this project?
Fork it → Create a branch → Commit your changes → Submit a PR!
Your feedback and contributions are always welcome 💬

## 📜 License
This project is licensed under the MIT License © 2025 Sweta Dahal
