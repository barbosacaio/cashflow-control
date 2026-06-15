# 💸 cashflow-control

> **Portfolio Project** — A full-stack personal finance web application for tracking income, expenses, and cash flow over time.

![Status](https://img.shields.io/badge/status-in%20development-yellow)
![License](https://img.shields.io/badge/license-MIT-blue)

---

## 📌 About

**cashflow-control** is a personal finance tracker built as a portfolio project to demonstrate full-stack development skills using modern technologies. The application allows users to manage their income and expenses, categorize transactions, and visualize their financial health through an intuitive dashboard.

> This project is part of my personal portfolio. The goal is to apply and showcase skills in React, Node.js, TypeScript, PostgreSQL, Prisma, and Docker in a real-world-like application.

---

## ✨ Features

- [x] User authentication (sign up / sign in / sign out)
- [x] Add, edit, and delete income and expense transactions
- [x] Categorize transactions (food, housing, salary, etc.)
- [ ] Monthly summary dashboard
- [ ] Cash flow visualization with charts
- [ ] Filter transactions by date range and category
- [ ] Responsive design for mobile and desktop

---

## 🛠️ Tech Stack

### Frontend

| Technology                                                | Purpose                     |
| --------------------------------------------------------- | --------------------------- |
| [React](https://react.dev/) + [Vite](https://vitejs.dev/) | UI framework and build tool |
| TypeScript                                                | Static typing               |
| CSS Modules / Tailwind CSS                                | Styling                     |
| [Recharts](https://recharts.org/)                         | Data visualization / charts |

### Backend

| Technology                                                         | Purpose             |
| ------------------------------------------------------------------ | ------------------- |
| [Node.js](https://nodejs.org/) + [Express](https://expressjs.com/) | REST API server     |
| TypeScript                                                         | Static typing       |
| [Prisma](https://www.prisma.io/)                                   | ORM                 |
| [PostgreSQL](https://www.postgresql.org/)                          | Relational database |
| [Zod](https://zod.dev/)                                            | Schema validation   |

### Infrastructure

| Technology                                         | Purpose                                |
| -------------------------------------------------- | -------------------------------------- |
| [Docker](https://www.docker.com/) + Docker Compose | Containerization and local environment |

---

## 🏗️ Project Structure

```
cashflow-control/
├── client/                  # React frontend (Vite)
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── services/        # API calls
│   │   ├── types/
│   │   └── main.tsx
│   └── vite.config.ts
│
├── server/                  # Node.js + Express backend
│   ├── src/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── routes/
│   │   ├── schemas/         # Zod schemas
│   │   ├── services/
│   │   └── app.ts
│   └── prisma/
│       ├── schema.prisma
│       └── migrations/
│
├── docker-compose.yml
├── .env.example
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) >= 20.x
- [Docker](https://www.docker.com/) and Docker Compose
- [Git](https://git-scm.com/)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/barbosacaio/cashflow-control.git
   cd cashflow-control
   ```

2. **Set up environment variables on the server**

   ```bash
   # Edit .env with your own values
   cp server/.env.example server/.env
   ```

3. **Install dependencies**

   ```bash
   npm install
   npm install --prefix client
   npm install --prefix server
   ```

4. **Start the Docker containers**

   ```bash
   npm run docker:up
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📡 API Endpoints

> Full API documentation coming soon.

| Method   | Endpoint            | Description              |
| -------- | ------------------- | ------------------------ |
| `POST`   | `/auth/register`    | Create a new user        |
| `POST`   | `/auth/login`       | Authenticate user        |
| `GET`    | `/transactions`     | List all transactions    |
| `POST`   | `/transactions`     | Create a transaction     |
| `PUT`    | `/transactions/:id` | Update a transaction     |
| `DELETE` | `/transactions/:id` | Delete a transaction     |
| `GET`    | `/categories`       | List all categories      |
| `POST`   | `/categories`       | Create a custom category |
| `PUT`    | `/categories/:id`   | Edit a custom category   |
| `DELETE` | `/categories/:id`   | Delete a custom category |
| `GET`    | `/summary`          | Get monthly summary      |

---

## 🗄️ Database Schema

- **User**:

  | Column        | Type          |
  | ------------- | ------------- |
  | id            | String        |
  | name          | String        |
  | email         | String        |
  | hash_password | String        |
  | updatedAt     | DateTime      |
  | createdAt     | DateTime      |
  | categories    | Category[]    |
  | transactions  | Transaction[] |

- **Transaction**:

  | Column      | Type            |
  | ----------- | --------------- |
  | id          | String          |
  | amount      | Int             |
  | description | String          |
  | type        | TransactionType |
  | userId      | String          |
  | categoryId  | String          |
  | updatedAt   | DateTime        |
  | createdAt   | DateTime        |
  | user        | User            |
  | category    | Category        |

- **Category**:

  | Column       | Type          |
  | ------------ | ------------- |
  | id           | String        |
  | name         | String        |
  | userId       | String        |
  | updatedAt    | DateTime      |
  | createdAt    | DateTime      |
  | transactions | Transaction[] |

- **TransactionType (enum)**:

  | Value   |
  | ------- |
  | INCOME  |
  | EXPENSE |

---

## 🧪 Tests

```bash
# Run tests (coming soon)
npm run test
```

> Unit and integration tests are planned for a future iteration.

---

## 📸 Screenshots

> Screenshots and demo GIF will be added once the MVP is complete.

---

## 🗺️ Roadmap

- [x] Project setup (Vite + Express + Docker)
- [x] Database modeling and migrations
- [x] Authentication (JWT)
- [x] Transaction CRUD
- [x] Categories
- [ ] Dashboard and charts
- [x] Input validation with Zod
- [ ] Unit tests
- [ ] Deploy (frontend + backend)

---

## 🤝 Contributing

This is a personal portfolio project, but suggestions and feedback are welcome! Feel free to open an [issue](https://github.com/barbosacaio/cashflow-control/issues).

---

## 📄 License

This project is licensed under the [MIT License](./LICENSE).

---

## 👤 Authors

**Maria Eduarda**

- GitHub: [@itzmadu](https://github.com/itzmadu)
- LinkedIn: [Maria Eduarda Ferraz de Oliveira](https://www.linkedin.com/in/maria-eduarda-ferraz-de-oliveira/)

**Caio Barbosa**

- GitHub: [@barbosacaio](https://github.com/barbosacaio)
- LinkedIn: [Caio Henrique Barbosa](https://www.linkedin.com/in/barbosacaio/)

---

<p align="center">Made with ❤️ as a portfolio project</p>
