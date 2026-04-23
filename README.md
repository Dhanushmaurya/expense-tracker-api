# 💸 Expense Tracker API

A simple backend project to track daily expenses using **Node.js, Express, and MySQL**.

---

## 🚀 Features

* Add Expense
* View All Expenses
* View Single Expense
* Update Expense
* Delete Expense
* REST API (CRUD Operations)

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MySQL

---

## ⚙️ Setup

### Install dependencies

```id="z1kq3m"
npm install
```

### Run server

```id="l0w9xg"
node server.js
```

Server runs on:
👉 http://localhost:3000

---

## 🗄️ Database Setup

```sql id="u9p4bd"
CREATE DATABASE expense_tracker;
USE expense_tracker;

CREATE TABLE expenses(
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100),
    amount INT,
    category VARCHAR(50),
    date DATE
);
```

---

## 📦 API Endpoints

* POST /expenses → Create Expense
* GET /expenses → Get All Expenses
* GET /expenses/:id → Get Single Expense
* PUT /expenses/:id → Update Expense
* DELETE /expenses/:id → Delete Expense

---

## 📬 Sample JSON

```json id="r2c7hy"
{
  "title": "Food",
  "amount": 500,
  "category": "Daily",
  "date": "2026-04-22"
}
```

## 👨‍💻 Author

Dhanush Maurya
