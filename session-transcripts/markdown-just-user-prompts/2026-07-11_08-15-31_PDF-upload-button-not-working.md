# PDF upload button not working

- **Session ID:** `ses_0afc10796ffejiNdSnN02Xy82J`
- **Created:** 2026-07-11 08:15:31 UTC
- **Total Cost:** $0.0163
- **Total Tokens:** 56,604 in / 4,340 out / 13,911 reason
- **User Prompts:** 3

## User Prompts

### User — 2026-07-11 08:15:31 UTC

When I upload a pdf for testing, it is in parsing state and after that, it is shows start learning but button doesn't work, nothing happens when I click on it.

---

### User — 2026-07-11 08:21:36 UTC

still not working, same happening as earlier

---

### User — 2026-07-11 08:24:53 UTC

In backend, I am getting this error in log multiple times: {"level":30,"time":1783758038264,"pid":29844,"hostname":"Shivams-MacBook-Air.local","reqId":"req-w","res":{"statusCode":400},"err":{"type":"FastifyError","message":"Body cannot be empty when content-type is set to 'application/json'","stack":"FastifyError: Body cannot be empty when content-type is set to 'application/json'\n    at Parser.defaultJsonParser [as fn] (/Users/shivam/qnify/ai-learning-agent/backend/node_modules/.pnpm/fastify@5.10.0/node_modules/fastify/lib/content-type-parser.js:315:12)\n    at IncomingMessage.onEnd (/Users/shivam/qnify/ai-learning-agent/backend/node_modules/.pnpm/fastify@5.10.0/node_modules/fastify/lib/content-type-parser.js:301:27)\n    at IncomingMessage.emit (node:events:509:20)\n    at endReadableNT (node:internal/streams/readable:1746:12)\n    at process.processTicksAndRejections (node:internal/process/task_queues:90:21)","code":"FST_ERR_CTP_EMPTY_JSON_BODY","name":"FastifyError","statusCode":400},"msg":"Body cannot be empty when content-type is set to 'application/json'"}

---
