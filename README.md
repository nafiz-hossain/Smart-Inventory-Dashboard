# Smart Inventory Dashboard

A modern full-stack inventory management dashboard built with React, Tailwind CSS, Node.js, Express, and MongoDB.

## 🚀 Features
- User authentication (JWT, Admin/User roles)
- Add/edit/delete products (CRUD)
- Product table view with filtering, sorting, and search
- Product analytics (bar and line charts)
- Admin dashboard UI with sidebar navigation
- Responsive layout (desktop + mobile)
- RESTful backend API
- MongoDB for data storage
- Modern, clean UI using Tailwind CSS

## 🛠️ Tech Stack
- **Frontend:** React, Vite, Tailwind CSS, Heroicons/Lucide
- **Backend:** Node.js, Express, MongoDB, Mongoose, JWT

## 📁 Project Structure
```
Smart-Inventory-Dashboard/
  client/      # React + Tailwind frontend
  server/      # Node.js + Express + MongoDB backend
```

## ⚡ Getting Started

### 1. Clone the repository
```sh
git clone https://github.com/nafiz-hossain/Smart-Inventory-Dashboard-.git
cd Smart-Inventory-Dashboard
```

### 2. Setup the backend
```sh
cd server
cp .env.example .env   # Create your .env file (see below)
npm install
npm run dev            # Starts backend on http://localhost:5000
```

#### Example `.env` file:
```
MONGO_URI=mongodb://localhost:27017/smart-inventory
JWT_SECRET=supersecretkey
```

### 3. Setup the frontend
```sh
cd client
npm install
npm run dev            # Starts frontend on http://localhost:5173
```

## 🌐 Deployment
- **Frontend:** Deploy `/client` to Vercel
- **Backend:** Deploy `/server` to Render

## 📊 Screenshots
*Add screenshots here after UI implementation!*

## 🤝 Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## 📄 License
[MIT](LICENSE)
