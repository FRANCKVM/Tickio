FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY seed_embeddings.py .

# Ejecuta una sola vez (no server)
CMD ["python", "seed_embeddings.py"]