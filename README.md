# 💳 Digital Wallet Frontend (React + Redux Toolkit + RTK Query)

A secure, role-based, and user-friendly frontend application for a Digital Wallet System—similar to bKash or Nagad—built with React.js, Redux Toolkit, and RTK Query.

---

## 🚀 Project Overview

This application enables **Users**, **Agents**, and **Admins** to perform financial operations and manage wallets seamlessly. It consumes a backend API (provided separately or mocked) and offers:

- A polished **public landing experience**
- A **role-based dashboard interface** tailored to each user type
- Robust **state management and API integration**
- Responsive UI and refined UX

---

## 🧰 Tech Stack

### Frontend

- React.js + React Router
- Redux Toolkit + RTK Query
- TypeScript
- Tailwind CSS

### Backend (separate repo)

- Node.js + Express
- MongoDB + Mongoose
- JWT + bcrypt

---

## 📌 Functional Requirements

### 1️⃣ Public Landing Section

Accessible without login:

- **Home Page** — Sticky navbar, hero banner, responsive design, smooth transitions, skeleton loading
- **About Page** — Service story, mission, team
- **Features Page** — Visual list of features
- **Contact Page** — Inquiry form (simulated)
- **FAQ Page** — Common questions and answers

### 2️⃣ Authentication

- JWT-based login and registration
- Role selection during signup (**User** or **Agent**)
- Role-based redirection
- Persisted auth state
- Logout functionality

### 3️⃣ User Dashboard

- Wallet overview
- Deposit, withdraw, send money
- Transaction history (pagination + filters)
- Profile management

### 4️⃣ Agent Dashboard

- Cash-in/out summary
- Add/withdraw money for users
- Transaction and commission history
- Profile management

### 5️⃣ Admin Dashboard

- System overview
- Manage users and agents
- View all transactions (advanced filters)
- Adjust system fees/limits _(optional)_
- Profile management

### 6️⃣ General Features

- Role-based navigation
- Global loading/error handling
- Form validations
- Pagination
- Toast notifications
- Responsive, accessible UI/UX

---

## 🧪 Setup Instructions

```bash
# Clone the repo
git clone https://github.com/adnanakhlasofficial/digital-wallet-client/
cd digital-wallet-frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

> ⚠️ Make sure the backend API is running locally or update `.env` with the correct base URL.

---

## 🌐 Live Demo

- **Frontend:** [https://digital-wallet-da.netlify.app/](https://digital-wallet-da.netlify.app/)
- **Backend:** [https://digital-wallet-server-tawny.vercel.app/](https://digital-wallet-server-tawny.vercel.app/)

---

## 🎥 Demo Video

Watch a walkthrough of core features:

- Role-based registration/login
- Wallet operations (deposit, withdraw, send)
- Transaction filtering
- Admin/Agent/User management

📺 [Demo Video Link](https://your-demo-video-url.com)

---

## 🔐 Test Credentials

| Role  | Email       | Password             |
| ----- | ----------- | -------------------- |
| Admin | 01512345678 | admin@digital-wallet |
| Agent | 01412345678 | agent@digital-wallet |
| User  | 01312345678 | user@digital-wallet  |

---
