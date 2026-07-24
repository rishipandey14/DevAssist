# 🏗️ DevAssist Architecture

DevAssist is built using a **Module-Based Clean Architecture**.

The primary goal of this architecture is to separate business logic from framework-specific code, making the application scalable, maintainable, and easy to test.

Unlike traditional Express applications where files are grouped by type (controllers, models, routes), DevAssist groups everything by **business feature**.

---

# 📖 Table of Contents

- Why Module-Based Architecture?
- Why Clean Architecture?
- High-Level System Architecture
- Module Structure
- Layer Responsibilities
- Dependency Injection
- Repository vs Query Pattern
- Request Lifecycle
- Authentication Flow
- Endpoint Authorization
- Analytics Pipeline
- Design Principles
- Scalability

---

# 🤔 Why Module-Based Architecture?

Many Express applications follow a structure like this:

```text
controllers/
models/
routes/
services/
middlewares/
```

Initially this works well, but as the application grows, every new feature requires changes across multiple folders.

For example, adding a new feature often means creating or modifying:

- Controllers
- Routes
- Models
- Services
- Validators
- Repositories

Related files become scattered across the project, making navigation difficult.

DevAssist solves this by organizing code around **business domains**.

```text
modules/

    auth/

    endpoints/

    requests/

    analytics/
```

Each module contains everything needed for that feature.

This approach provides:

- Better organization
- Easier maintenance
- Lower coupling
- Higher cohesion
- Independent feature development
- Better scalability

---

# 🏛️ Why Clean Architecture?

Clean Architecture separates business logic from implementation details.

Business rules should not depend on:

- Express
- MongoDB
- JWT
- Mongoose

Instead, frameworks become implementation details.

Benefits include:

- Easier testing
- Easier refactoring
- Framework independence
- Better separation of concerns
- Long-term maintainability

## 🧱 Clean Architecture

```mermaid
flowchart TB

Presentation["Presentation Layer<br/>Routes • Controllers"]

Application["Application Layer<br/>Use Cases • DTOs"]

Domain["Domain Layer<br/>Interfaces • Business Rules"]

Infrastructure["Infrastructure Layer<br/>Repositories • Queries • MongoDB"]

Presentation --> Application

Application --> Domain

Domain --> Infrastructure
```

---

## 🌐 High-Level System Architecture

```mermaid
flowchart TD

    Client["👨‍💻 Client / API Consumer"]

    Express["Express Server"]

    Auth["🔐 Auth Module"]
    Endpoint["🌐 Endpoint Module"]
    Request["📨 Request Module"]
    Analytics["📊 Analytics Module"]

    Mongo[("MongoDB")]

    Client --> Express

    Express --> Auth
    Express --> Endpoint
    Express --> Request
    Express --> Analytics

    Auth --> Mongo
    Endpoint --> Mongo
    Request --> Mongo
    Analytics --> Mongo
```

---

## 📦 Module Structure

```mermaid
flowchart TD

Module["Feature Module"]

Presentation["Presentation"]

Application["Application"]

Domain["Domain"]

Infrastructure["Infrastructure"]

Container["container.js"]

Module --> Presentation
Module --> Application
Module --> Domain
Module --> Infrastructure
Module --> Container

Presentation --> Routes["Routes"]
Presentation --> Controllers["Controllers"]

Application --> UseCases["Use Cases"]
Application --> DTO["DTOs"]

Infrastructure --> Models["Models"]
Infrastructure --> Repository["Repositories"]
Infrastructure --> Query["Queries"]
```
---

# 🧱 Layer Responsibilities

## 🎯 Presentation Layer

Responsible for HTTP communication.

Contains:

- Routes
- Controllers
- Request Validation

Responsibilities:

- Receive requests
- Validate inputs
- Call use cases
- Return HTTP responses

The presentation layer **never contains business logic**.

---

## ⚙️ Application Layer

The application layer contains the business logic.

Examples:

```text
RegisterUser

LoginUser

CreateEndpoint

DeleteEndpoint

GetEndpointAnalytics

GetDashboardAnalytics

GetEndpointRequests
```

Each use case performs **one business operation**.

This makes the code easier to maintain, test, and reuse.

---

## 📘 Domain Layer

The domain layer defines business contracts.

Examples:

```text
UserRepository

EndpointRepository

RequestRepository
```

The domain layer contains no database or framework-specific code.

---

## 🗄️ Infrastructure Layer

Infrastructure contains implementation details.

Examples:

- MongoDB
- Mongoose
- Repository Implementations
- Query Objects

Only this layer communicates with MongoDB.

---

## 💉 Dependency Injection

```mermaid
flowchart LR

Container["container.js"]

Repository["Repository"]

Query["Query"]

UseCase["Use Case"]

Controller["Controller"]

Route["Route"]

Container --> Repository
Container --> Query

Repository --> UseCase
Query --> UseCase

UseCase --> Controller

Controller --> Route
```
---

## 🗄️ Repository vs Query Pattern

```mermaid
flowchart LR

UseCase["Use Case"]

Repository["Repository"]

Query["Query"]

Mongo[("MongoDB")]

UseCase --> Repository

UseCase --> Query

Repository -->|"Write Operations"| Mongo

Query -->|"Complex Read Operations"| Mongo
```

---

## Query Objects

Query objects are responsible for optimized read operations.

Examples:

- Dashboard Analytics
- Endpoint Analytics
- Request Search
- Pagination
- Aggregation Pipelines

This separation keeps repositories focused while allowing highly optimized database queries.

---

## 🔄 Request Lifecycle

```mermaid
flowchart TD

Client["Client"]

Route["Express Route"]

Auth["JWT Middleware"]

Validation["Validation Middleware"]

Controller["Controller"]

UseCase["Use Case"]

Repository["Repository / Query"]

Mongo[("MongoDB")]

Response["JSON Response"]

Client --> Route

Route --> Auth

Auth --> Validation

Validation --> Controller

Controller --> UseCase

UseCase --> Repository

Repository --> Mongo

Mongo --> Response
```
---

## 🔐 Authentication Flow

```mermaid
flowchart TD

Register["Register"]

Hash["Hash Password"]

Save["Save User"]

Login["Login"]

Verify["Verify Password"]

JWT["Generate JWT"]

Client["Client Stores Token"]

Protected["Protected API"]

Middleware["JWT Middleware"]

Access["Access Granted"]

Register --> Hash

Hash --> Save

Login --> Verify

Verify --> JWT

JWT --> Client

Client --> Protected

Protected --> Middleware

Middleware --> Access
```
---

## 🛡️ Endpoint Ownership Authorization

```mermaid
flowchart TD

Request["Authenticated Request"]

Owned["GetOwnedEndpoint"]

Exists{"Endpoint Exists?"}

Owner{"Owned By User?"}

Success["Continue"]

NotFound["404 Not Found"]

Forbidden["403 Forbidden"]

Request --> Owned

Owned --> Exists

Exists -- No --> NotFound

Exists -- Yes --> Owner

Owner -- Yes --> Success

Owner -- No --> Forbidden
```
---

## 📊 Analytics Pipeline

```mermaid
flowchart LR

Mongo[("MongoDB")]

Match["\$match"]

Group["\$group"]

Sort["\$sort"]

Project["\$project"]

DTO["Analytics DTO"]

Response["JSON Response"]

Mongo --> Match

Match --> Group

Group --> Sort

Sort --> Project

Project --> DTO

DTO --> Response
```
---

# 🎯 Design Principles

The project follows several software engineering principles:

- Single Responsibility Principle (SRP)
- Separation of Concerns
- Dependency Inversion
- High Cohesion
- Low Coupling
- Feature-Based Organization
- Reusable Business Logic

These principles help keep the codebase maintainable as it grows.

---

## 🚀 Scalability Vision

```mermaid
flowchart LR

Current["Current Backend"]

Redis["Redis Cache"]

Queue["Background Jobs"]

Replay["Request Replay"]

Rate["Rate Limiting"]

Docker["Docker"]

CI["CI/CD"]

Monitoring["Monitoring"]

Current --> Redis

Current --> Queue

Current --> Replay

Current --> Rate

Current --> Docker

Docker --> CI

CI --> Monitoring
```

Since each feature is isolated, new functionality can be introduced without major changes to the existing codebase.