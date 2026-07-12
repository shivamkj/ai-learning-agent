import Fastify from 'fastify'
import cors from '@fastify/cors'
import multipart from '@fastify/multipart'
import fastifyStatic from '@fastify/static'
import { ZodError } from 'zod'
import { existsSync } from 'node:fs'
import { join } from 'node:path'
import { HOST, PASSWORD, PORT, UPLOADS_DIR } from './config.ts'
import { routes } from './routes.ts'
import { db, SCHEMA_SQL } from './db.ts'
import { mkdirSync } from 'node:fs'

const app = Fastify({ logger: true })

app.setErrorHandler((err, _req, reply) => {
  if (err instanceof ZodError) {
    return reply.code(400).send({
      error: 'Validation failed',
      details: err.issues.map((i) => ({ path: i.path.join('.'), message: i.message }))
    })
  }
  const error = err as { statusCode?: number; message?: string }
  if (error.statusCode) {
    return reply.code(error.statusCode).send({ error: error.message })
  }
  app.log.error(err)
  return reply.code(500).send({ error: 'Internal server error' })
})

await app.register(cors, {
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
  credentials: true
})

await app.register(multipart, {
  limits: { fileSize: 1024 * 1024 * 10 } // Max 10 MB.
})

app.get('/api/health', async () => ({ ok: true }))

app.post('/api/auth/verify', async (req, reply) => {
  if (!PASSWORD) {
    return reply.code(400).send({ error: 'Password protection is not enabled' })
  }
  const body = req.body as { password?: string }
  if (!body?.password || body.password !== PASSWORD) {
    return reply.code(401).send({ error: 'Invalid password' })
  }
  return reply.code(200).send()
})

if (PASSWORD) {
  app.addHook('onRequest', async (req, reply) => {
    if (!req.url.startsWith('/api/')) return
    if (req.url === '/api/health' || req.url === '/api/auth/verify') return
    const auth = req.headers.authorization
    if (!auth || !auth.startsWith('Bearer ') || auth.slice(7) !== PASSWORD) {
      return reply.code(401).send({ error: 'Unauthorized' })
    }
  })
}

await app.register(routes)

const staticDir = join(process.cwd(), 'frontend', 'dist')
if (existsSync(staticDir)) {
  await app.register(fastifyStatic, {
    root: staticDir,
    wildcard: false,
    prefix: '/'
  })

  app.setNotFoundHandler((req, reply) => {
    if (req.url.startsWith('/api/')) {
      return reply.code(404).send({ error: 'Not found' })
    }
    return reply.sendFile('index.html')
  })
}

function init(): void {
  mkdirSync(UPLOADS_DIR, { recursive: true })
  db.exec(SCHEMA_SQL)
}

init()

app.listen({ port: PORT, host: HOST }, (err, address) => {
  if (err) {
    app.log.error(err)
    process.exit(1)
  }
  app.log.info(`Server listening on ${address}`)
})
