# Auth Service

## Why Use Clerk?

We wanted to spend most of our time building features and not worrying about authentication. So we decided to use **Clerk**.

In the future, we might use **Better Auth**.

## Clerk Workflow

### Simple System

For a simple client–server–database system, the workflow looks like this:

![Clerk Auth Workflow](/auth1.jpeg)

The client sends a session token with every request, and Clerk’s backend middleware verifies it using the secret key to handle authentication.

### Problem with Microservices

There is an issue when we have a microservice architecture.

We cannot just use the secret token to authenticate users in other services, because:

- The secret key is not available in other services
- We do not want Clerk middleware running in every service

So, we use a **JWT token** to authenticate users in other services.

## Microservice Architecture

In a microservice architecture, the main goal is centralized security and decoupling authentication logic from individual services.

### API Gateway (Kong)

This is the single entry point that intercepts all external traffic.

It is responsible for:

- Authenticating users & Verifying Clerk session tokens (JWTs)

### Internal Services

The services run in a private network behind the gateway.

They:

- Focus only on business logic
- Do not handle authentication themselves

---

## Auth Flow

> clerk secret token → extract clerkId → create new JWT → use this JWT internally

![Auth Flow](/auth2.jpeg)

## Future Plan

Later, we plan to use mTLS for service-to-service communication.
