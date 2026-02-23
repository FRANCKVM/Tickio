# Tickio — Local Setup (DB in Docker, Backend/Frontend local)

This repository uses:
- **Database**: PostgreSQL in **Docker** (image with **pgvector**)
- **Backend**: Node + TypeScript + Prisma + Python
- **Frontend**: React + Vite

## Description
Tickio is a ticketing platform designed to publish, discover, and purchase tickets for events. Unlike traditional ticketing platforms, Tickio implements a non-linear semantic search engine through the use of embeddings. This approach makes it possible to find events by similarity and context, drastically improving the user experience and reducing churn.

![Semantic Search Demo](tickio.png)

It supports two main user types:
- **Customers**: browse events, view information (date, venue, capacity, description), purchase tickets, and manage their account.
- **Organizers**: create and manage events, including details such as location, schedules, and event type; they can also act as customers.

The backend uses **Prisma + PostgreSQL** for persistence and a **Python** service to generate **embeddings** (vectorization) for events, enabling smarter similarity-based searches (for example: finding “similar” or related events).

## Requirements
- **Node.js** 18+ (recommended 20)
- **Python** 3.10+ (recommended 3.11)
- **Docker**
- **Git**

## Important
- Run each command **in order and in the specified folder**.
- **Migration + seed** should be run when you spin up a new database (first time or if you recreate the container/volume).
- `seed_embeddings.py` generates the **embeddings** for the events created by the seed, so you only need to run it once.

- You can sign up and create a customer account, or if you prefer an organizer account use this one:
  email: `franck@gmail.com`  
  password: `tickio2026`

## STEPS (in order)

1) Start PostgreSQL (pgvector) in Docker  
First time (create and run the container):
- docker run -d --name tickio-postgres -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=tickio -p 5432:5432 pgvector/pgvector:pg16

Next times (just start the container):
- docker start tickio-postgres

2) Install backend dependencies (Node + Python)  
Run these commands from `backend`:
- npm install
- cd scripts
- python -m pip install -r requirements.txt

3) Install frontend dependencies  
Run this command from `front_tickio`:
- npm install

4) Run migrations and seed (Prisma)  
Run these commands from `backend`:
- npx prisma migrate deploy
- npx prisma db seed

5) Generate initial embeddings (seeded events)  
Run this command from `backend/scripts`:
- python seed_embeddings.py

6) Run backend and frontend (two terminals)  
Terminal 1 — Backend:
- cd backend
- npm run dev

Terminal 2 — Frontend:
- cd front_tickio
- npm run dev
