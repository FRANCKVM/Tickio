# Tickio — Setup Local (DB en Docker, Backend/Frontend local)

Este repositorio usa:
- **Base de datos**: PostgreSQL en **Docker** (imagen con **pgvector**)
- **Backend**: Node + TypeScript + Prisma + Python
- **Frontend**: React + Vite
## Descripción
Tickio es una plataforma avanzada de ticketing diseñada para publicar, descubrir y comprar entradas para eventos. A diferencia de las ticketeras tradicionales, Tickio implementa un buscador semántico no lineal mediante el uso de embeddings. Este enfoque permite encontrar eventos por similitud y contexto, mejorando drásticamente la experiencia del usuario y reduciendo la tasa de abandono.
![Demostración de Búsqueda Semántica](tickio.png)

Permite dos tipos de usuario principales:
- **Clientes**: exploran eventos, visualizan información (fecha, lugar, aforo, descripción), compran y gestionan su cuenta.
- **Organizadores**: crean y administran eventos, incluyendo datos como ubicación, horarios y tipo de evento, asu vez pueden actuar como clientes.

El backend usa **Prisma + PostgreSQL** para persistencia y un servicio en **Python** para generar **embeddings** (vectorización) de los eventos, lo que habilita búsquedas más inteligentes por similitud (por ejemplo: encontrar eventos “parecidos” o relacionados).


## Requisitos
- **Node.js** 18+ (recomendado 20)
- **Python** 3.10+ (recomendado 3.11)
- **Docker**
- **Git**

## Importante
- Ejecuta cada comando **en orden y en la carpeta indicada**.
- **Migración + seed** se ejecutan cuando levantes una base de datos nueva (primera vez o si recreas el contenedor/volumen).
- `seed_embeddings.py` genera los **embeddings** para los eventos creados por el seed por lo cual solo es necesario ejecutarlo una vez.

- Puedes registrarte y crear una cuenta de cliente o si prefieres una cuenta de organizador usa esta:
 correo: `franck@gmail.com`
 contraseña: `tickio2026`


## PASOS (en orden)

1) Levantar PostgreSQL (pgvector) en Docker  
Primera vez (crea y levanta el contenedor):
- docker run -d --name tickio-postgres -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=tickio -p 5432:5432 pgvector/pgvector:pg16

Siguientes veces (solo iniciar contenedor):
- docker start tickio-postgres

2) Instalar dependencias del backend (Node + Python)
Ejecutar estos comandos desde `backend`:
- npm install
- cd scripts
- python -m pip install -r requirements.txt

3) Instalar dependencias del frontend
Ejecutar este comando desde `front_tickio`:
- npm install

4) Ejecutar migraciones y seed (Prisma)  
Ejecuta estos comandos desde `backend`:
- npx prisma migrate deploy
- npx prisma db seed

5) Generar embeddings iniciales (eventos del seed)  
Ejecuta este comando desde `backend/scripts`:
- python seed_embeddings.py

6) Ejecutar backend y frontend (dos terminales)
Terminal 1 — Backend:
- cd backend
- npm run dev

Terminal 2 — Frontend:
- cd front_tickio
- npm run dev