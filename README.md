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
- **PDF Processing**: Two parsing backends available

## PDF Parsing

The system supports two PDF parsing backends, selectable via the `PDF_PARSER` environment variable:

| Backend           | Library                                        | Description                                                                                  |
| ----------------- | ---------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `local` (default) | [Docling](https://github.com/DS4SD/docling)    | Python-based conversion using Docling's `DocumentConverter` with table structure recognition |
| `llamacloud`      | [LlamaCloud API](https://cloud.llamaindex.ai/) | Cloud-based parsing using LlamaCloud's agentic tier with full markdown expansion             |

### Configuration

| Variable             | Default   | Description                             |
| -------------------- | --------- | --------------------------------------- |
| `PDF_PARSER`         | `local`   | Selects the parsing backend             |
| `PYTHON_BIN`         | `python3` | Path to Python binary for local parsing |
| `LLAMACLOUD_API_KEY` | -         | Required when `PDF_PARSER=llamacloud`   |

### Docling Pipeline Options

When using the local parser, the following Docling options are configured:

- `do_ocr`: `False` (relies on embedded text, no OCR)
- `do_table_structure`: `True` (structured table extraction)
- `generate_picture_images`: `False` (text only, no image extraction)

## How It Works

1. Upload a PDF document
2. AI generates a lesson plan with objectives
3. Quiz questions are created for each objective
4. Take quizzes and get AI-powered feedback
