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

- [ ] User authentication (sign up / sign in / sign out)
- [ ] Add, edit, and delete income and expense transactions
- [ ] Categorize transactions (food, housing, salary, etc.)
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

2. **Set up environment variables**

   ```bash
   cp .env.example .env
   # Edit .env with your own values
   ```

3. **Start the database with Docker**

   ```bash
   docker-compose up -d
   ```

4. **Install dependencies and run migrations**

   ```bash
   # Backend
   cd server
   npm install
   npx prisma migrate dev

   # Frontend
   cd ../client
   npm install
   ```

5. **Start the development servers**

   ```bash
   # Backend (from /server)
   npm run dev

   # Frontend (from /client)
   npm run dev
   ```

6. Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🔑 Environment Variables

Create a `.env` file in the root of `/server` based on `.env.example`:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/cashflow_control"

# Server
PORT=3333
NODE_ENV=development

# Auth (fill in when applicable)
JWT_SECRET=your_jwt_secret_here
```

---

## 📡 API Endpoints

> Full API documentation coming soon.

| Method   | Endpoint            | Description           |
| -------- | ------------------- | --------------------- |
| `POST`   | `/auth/register`    | Create a new user     |
| `POST`   | `/auth/login`       | Authenticate user     |
| `GET`    | `/transactions`     | List all transactions |
| `POST`   | `/transactions`     | Create a transaction  |
| `PUT`    | `/transactions/:id` | Update a transaction  |
| `DELETE` | `/transactions/:id` | Delete a transaction  |
| `GET`    | `/categories`       | List all categories   |
| `GET`    | `/summary`          | Get monthly summary   |

---

## 🗄️ Database Schema

> Detailed ERD coming soon.

Main entities:

- **User** — authentication and profile
- **Transaction** — income or expense record
- **Category** — transaction category

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

- [ ] Project setup (Vite + Express + Docker)
- [ ] Database modeling and migrations
- [ ] Authentication (JWT)
- [ ] Transaction CRUD
- [ ] Categories
- [ ] Dashboard and charts
- [ ] Input validation with Zod
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
