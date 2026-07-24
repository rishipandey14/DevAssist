# 🚀 DevAssist

> A developer-first webhook testing and API debugging platform built with **Node.js**, **Express.js**, and **MongoDB**, following a **Module-Based Clean Architecture**.

DevAssist enables developers to create custom webhook endpoints, inspect incoming HTTP requests, analyze traffic, and debug integrations through a secure, scalable, and production-oriented backend.

Unlike simple CRUD projects, DevAssist focuses on **software architecture**, **maintainability**, and **backend engineering best practices**.

---

## ✨ Features

### 🔐 Authentication

- User Registration
- User Login
- JWT Authentication
- Get Current User

### 🌐 Endpoint Management

- Create Webhook Endpoints
- Update Endpoints
- Delete Endpoints
- Endpoint Ownership Authorization

### 📨 Request Capture

- Capture Incoming Webhooks
- Store Headers
- Store Body
- Store HTTP Method
- Store Content-Type
- Store Client IP
- Store Timestamp

### 📊 Analytics

- Dashboard Analytics
- Endpoint Analytics
- Request Trends
- HTTP Method Distribution
- Content-Type Distribution

### 🛠 Developer Experience

- Swagger/OpenAPI
- Zod Validation
- Pagination
- Search
- Filtering
- Sorting
- Centralized Error Handling

---

# 🏗️ Architecture

DevAssist follows a **Module-Based Clean Architecture**, where every feature owns its presentation, application, domain, and infrastructure layers.

```
Client
   │
   ▼
Express Server
   │
   ▼
Feature Module
   │
   ▼
Use Case
   │
   ▼
Repository / Query
   │
   ▼
MongoDB
```

📖 Read the complete architecture guide:

➡️ **[docs/architecture.md](docs/architecture.md)**

---

# 📂 Documentation

| Document | Description |
|----------|-------------|
| 📖 [Architecture](docs/architecture.md) | Module-Based Clean Architecture, Dependency Injection, Request Lifecycle |
| 📑 [API Reference](docs/api-reference.md) | Complete API Documentation |
| 🗂️ [Folder Structure](docs/folder-structure.md) | Detailed explanation of every folder |
| 🗄️ [Database Design](docs/database.md) | Collections, Relationships, ER Diagram |
| 🚀 [Roadmap](docs/roadmap.md) | Completed features and future plans |

---

# 🚀 Getting Started

## Clone Repository

```bash
git clone https://github.com/rishipandey14/DevAssist.git

cd devAssist
```

---

## Install Dependencies

```bash
npm install
```

---

## Configure Environment Variables

Create a `.env` file.


---

## Run Development Server

```bash
npm run dev
```

Server runs at

```
http://localhost:<your-port>
```

---

# 📚 Swagger Documentation

```
http://localhost:<your-port>/docs
```

Swagger provides:

- Request Schemas
- Response Schemas
- Authentication
- API Playground

---

# 🛣️ Roadmap

Current Progress

- ✅ Authentication
- ✅ Endpoint Management
- ✅ Request Capture
- ✅ Dashboard Analytics
- ✅ Endpoint Analytics
- ✅ Swagger Documentation

Upcoming

- Request Replay
- API Keys
- Queue Processing
- Redis
- Docker
- Monitoring
- Rate Limiting

See the complete roadmap:

➡️ **[docs/roadmap.md](docs/roadmap.md)**

---

# 🤝 Contributing

Contributions, issues, and feature requests are welcome.

---

# 📄 License

MIT License.