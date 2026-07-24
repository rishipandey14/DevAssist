# 🧠 Architecture Decision Records (ADR)

This document records the major architectural decisions made while building DevAssist.

Each decision explains:

- The problem
- The available options
- The chosen solution
- Why it was selected
- Trade-offs

The goal is to document not only **what** was built, but **why** it was built that way.

---

# ADR-001 — Why Module-Based Architecture?

## Context

As applications grow, organizing files by technical type becomes difficult.

Traditional Express projects often follow this structure:

```text
controllers/
routes/
models/
middlewares/
services/
```

A single feature becomes spread across multiple folders.

---

## Decision

DevAssist uses **Feature Modules**.

```text
modules/

auth/

endpoints/

requests/

analytics/
```

Each module owns its:

- Controllers
- Routes
- Use Cases
- Repositories
- Queries
- Models

---

## Why?

Grouping code by business domain makes the project easier to understand and maintain.

Developers can work on one feature without navigating unrelated files.

---

## Trade-offs

Pros

- Better scalability
- Better organization
- Easier onboarding

Cons

- Slightly more folders
- Initial setup takes longer

---

# ADR-002 — Why Clean Architecture?

## Context

Business logic should not depend on frameworks.

Changing Express or MongoDB should not require rewriting business rules.

---

## Decision

Business logic lives inside **Use Cases**.

Frameworks remain implementation details.

---

## Why?

This keeps the application:

- Testable
- Maintainable
- Framework independent

---

## Trade-offs

Pros

- Clear separation of concerns
- Easier testing
- Easier migration

Cons

- More abstraction
- More files

---

# ADR-003 — Why Dependency Injection?

## Context

Creating dependencies directly inside controllers tightly couples components.

Example

```javascript
const repository = new MongoRepository();
```

Controllers become responsible for object creation.

---

## Decision

Each module exposes a `container.js`.

The container wires repositories, queries, use cases, and controllers.

---

## Why?

Object creation happens in one place.

Dependencies can be replaced without modifying business logic.

---

## Trade-offs

Pros

- Loose coupling
- Easier testing
- Centralized wiring

Cons

- Slightly more boilerplate

---

# ADR-004 — Why Repository Pattern?

## Context

Business logic should not communicate directly with MongoDB.

---

## Decision

Repositories encapsulate write operations.

Examples

- Create User
- Update Endpoint
- Save Request

---

## Why?

Use cases remain database agnostic.

MongoDB implementation can change without affecting business logic.

---

## Trade-offs

Pros

- Cleaner code
- Better abstraction
- Easier testing

Cons

- Additional layer

---

# ADR-005 — Why Query Objects?

## Context

Repositories became overloaded with analytics and reporting queries.

Analytics often require aggregation pipelines rather than simple CRUD.

---

## Decision

Complex read operations were moved into dedicated Query objects.

Examples

- Dashboard Analytics
- Endpoint Analytics
- Search
- Filtering
- Pagination

---

## Why?

Repositories stay focused on domain behavior.

Query objects optimize data retrieval.

---

## Trade-offs

Pros

- Better separation
- Easier optimization
- Cleaner repositories

Cons

- More classes

---

# ADR-006 — Why JWT Authentication?

## Context

The API is stateless.

Session-based authentication would require server-side session storage.

---

## Decision

Use JWT access tokens.

---

## Why?

JWTs are well suited for REST APIs.

They allow stateless authentication and easy horizontal scaling.

---

## Trade-offs

Pros

- Stateless
- Scalable
- Simple deployment

Cons

- Token revocation is harder
- Refresh tokens are needed for long-lived sessions

---

# ADR-007 — Why Separate Request Collection?

## Context

Webhook endpoints may receive thousands of requests.

Embedding all requests inside an endpoint document would eventually exceed MongoDB's document size limits and make updates inefficient.

---

## Decision

Requests are stored in their own collection and reference the owning endpoint.

```text
User

↓

Endpoint

↓

Request
```

---

## Why?

This keeps endpoint documents small and enables efficient pagination, filtering, and analytics.

---

## Trade-offs

Pros

- Better scalability
- Faster writes
- Unlimited request history

Cons

- Requires reference lookups

---

# ADR-008 — Why MongoDB?

## Context

Webhook payloads can vary significantly between providers.

GitHub, Stripe, Razorpay, Slack, and other services all send different JSON structures.

---

## Decision

Use MongoDB.

---

## Why?

MongoDB's flexible document model makes it easy to store dynamic payloads without changing the schema.

---

## Trade-offs

Pros

- Flexible schema
- Fast development
- Ideal for JSON payloads

Cons

- Less rigid than relational databases
- Requires careful indexing

---

# ADR-009 — Why MongoDB Aggregation Pipelines?

## Context

Dashboard statistics and endpoint analytics require grouping, counting, and filtering large numbers of requests.

Performing these operations in application code would increase memory usage and response times.

---

## Decision

Perform analytics using MongoDB Aggregation Pipelines.

---

## Why?

Aggregation allows MongoDB to compute results close to the data, reducing the amount transferred to the application and improving efficiency.

---

## Trade-offs

Pros

- Better performance
- Lower memory usage
- Scales well for analytics

Cons

- Aggregation pipelines can become complex

---

# ADR-010 — Why Zod?

## Context

Incoming request data must be validated before reaching business logic.

---

## Decision

Use Zod for request validation.

---

## Why?

Zod provides:

- Runtime validation
- Type-safe schemas
- Reusable validation logic
- Integration with Swagger/OpenAPI

---

## Trade-offs

Pros

- Concise schemas
- Good developer experience
- Easy to maintain

Cons

- Learning curve for newcomers

---

# ADR-011 — Why Swagger/OpenAPI?

## Context

Developers need a reliable way to understand and test the API.

Keeping documentation synchronized with the implementation can become difficult.

---

## Decision

Use Swagger/OpenAPI to generate interactive API documentation.

---

## Why?

Swagger enables developers to explore endpoints, inspect request and response schemas, and test APIs directly from the browser.

---

## Trade-offs

Pros

- Interactive documentation
- Better developer experience
- Easier onboarding

Cons

- Documentation must be maintained alongside code

---

# 🎯 Guiding Principles

Every architectural decision in DevAssist is evaluated against the following principles:

- Keep business logic independent of frameworks.
- Prefer composition over tight coupling.
- Organize code by feature, not by file type.
- Separate read and write responsibilities where appropriate.
- Design for maintainability before optimization.
- Build with scalability in mind while keeping the current implementation simple.

These principles guide the evolution of the project and help ensure that new features integrate consistently with the existing architecture.