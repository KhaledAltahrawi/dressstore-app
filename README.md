# DressStore RESTful API

A backend RESTful API built with **Node.js**, **Express**, and **MongoDB (Mongoose)** for managing an online store's catalog of products and categories.

---

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Middleware**: CORS, Body Parser (JSON)

---

## 🚀 API Endpoints

### Products (`/api/products`)
| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/products` | Retrieve all products (supports `?name=[kw]` search) |
| `GET` | `/api/products/:id` | Retrieve product by ID |
| `POST` | `/api/products` | Add a new product |
| `PUT` | `/api/products/:id` | Update an existing product |
| `DELETE` | `/api/products/:id` | Remove a product |
| `DELETE` | `/api/products` | Remove all products |

### Categories (`/api/categories`)
| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/categories` | Retrieve all categories |
| `GET` | `/api/categories/:id` | Retrieve category by ID |
| `POST` | `/api/categories` | Create a new category |
| `PUT` | `/api/categories/:id` | Update category details |
| `DELETE` | `/api/categories/:id` | Delete a category |

---

## 💻 Local Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/KhaledAltahrawi/dressstore-app.git
   cd dressstore-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure database & start:**
   Ensure MongoDB is running locally or provide a connection URI in `config/database.js`, then run:
   ```bash
   node server.js
   ```
   The API server will listen on port `8080`.

---

## 📄 License
ISC License
