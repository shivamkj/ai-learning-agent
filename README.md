# AI Learning Agent

An AI-powered learning platform that converts PDF documents into interactive quizzes and study materials.

## Quick Start

### Prerequisites

- Node.js
- pnpm
- Python 3.10+ (for PDF conversion)

### Setup

1. **Backend**
   ```bash
   cd backend
   cp .env.sample .env  # Add .env values
   pnpm install
   pnpm dev
   ```

2. **Frontend**
   ```bash
   cd frontend
   pnpm install
   pnpm dev
   ```

3. **PDF Conversion** (optional, needed for PDF uploads)
   ```bash
   cd pdf-to-markdown
   python -m venv .venv
   source .venv/bin/activate
   pip install -r requirements.txt
   ```

## Architecture

- **Backend**: Fastify API on port 3003 (SQLite + LangChain AI)
- **Frontend**: React + Vite on port 5173
- **PDF Processing**: Python script using docling library

## How It Works

1. Upload a PDF document
2. AI generates a lesson plan with objectives
3. Quiz questions are created for each objective
4. Take quizzes and get AI-powered feedback
