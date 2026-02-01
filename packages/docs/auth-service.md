# Auth Service

## Why used clerk ?

We wanted to spend most of the time building features and not worrying about authentication. So we thought of using **Clerk**.

In future we might use **Better Auth**.

## Clerk Workflow

### In case of a simple system

like a client-server-db system the workflow looks similar to this.

In a microservice architecture, the primary goal is centralized security and decoupling authentication logic from individual services.

API Gateway (e.g., Kong): This is the single entry point that intercepts all external traffic. It is responsible for authenticating users by verifying their Clerk session tokens (JWTs) and deciding whether to allow a request through.

The services reside in a private network, hidden behind the gateway. They focus solely on business logic, trusting that any request reaching them is already authenticated and authorized.

## Flow of auth

Client sends JWT: The client sends the Clerk session token in the authorization header to the API Gateway.
Gateway Verification: The API Gateway verifies the JWT's signature and expiration using Clerk's public keys.
Identity Propagation: Upon successful verification, the gateway extracts the user ID
from the token and injects it into a new, internal HTTP header (e.g., X-User-Id).
Internal Communication: The request is forwarded to the appropriate microservice using the internal

### 1. Client Sends JWT

The client sends the Clerk session token in the authorization header to the API Gateway.

ervice to service > communication.

---

If you want, I can next help you convert this into a clean Markdown/PDF-ready version or add diagrams without changing your wording.
