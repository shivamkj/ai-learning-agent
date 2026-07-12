# Stage 1: Build frontend
FROM node:26.5.0-trixie-slim AS frontend-build
WORKDIR /app/frontend
COPY frontend/package.json frontend/pnpm-lock.yaml ./
RUN npm install -g pnpm@10.32.1 && pnpm install --frozen-lockfile
COPY frontend/ ./
RUN pnpm build

# Stage 2: Production runtime
FROM node:26.5.0-trixie-slim

ARG INSTALL_PYTHON=true

WORKDIR /app

# Install backend production dependencies
COPY backend/package.json backend/pnpm-lock.yaml ./backend/
WORKDIR /app/backend
RUN npm install -g pnpm@10.32.1 && pnpm install --frozen-lockfile --prod

# Copy backend source
COPY backend/ ./

# Copy built frontend assets
COPY --from=frontend-build /app/frontend/dist ./frontend/dist

# Conditionally install Python and docling (skip for LlamaCloud-only deployments)
WORKDIR /app/pdf-to-markdown
COPY pdf-to-markdown/ ./
RUN if [ "$INSTALL_PYTHON" = "true" ]; then \
      apt-get update && apt-get install -y --no-install-recommends python3 python3-pip \
      && rm -rf /var/lib/apt/lists/* \
      && pip install --no-cache-dir --break-system-packages -r requirements.txt \
      && find / -type d -name __pycache__ -exec rm -rf {} + 2>/dev/null || true; \
    fi

WORKDIR /app/backend

EXPOSE 3003

CMD ["node", "src/index.ts"]
