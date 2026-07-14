# Learning path bugs: regeneration, input, approval

- **Session ID:** `ses_0adb15943ffeIH6IXi7q2M2ztu`
- **Created:** 2026-07-11 17:51:54 UTC
- **Total Cost:** $0.1649
- **Total Tokens:** 39,548 in / 1,832 out / 8,635 reason
- **User Prompts:** 3

## User Prompts

### User — 2026-07-11 17:51:54 UTC

Find the learning path is re-generated, input field is not cleared. and once approved it is stuck there in approving state and not moving forward.

---

### User — 2026-07-11 17:53:45 UTC

Got this error in console: {"level":50,"time":1783792355631,"pid":86826,"hostname":"Shivams-MacBook-Air.local","err":{"type":"Error","message":"Request timed out.","stack":"TimeoutError: Request timed out.\n    at wrapOpenAIClientError (file:///Users/shivam/qnify/ai-learning-agent/backend/node_modules/.pnpm/@langchain+openai@1.5.5_@langchain+core@1.2.2_openai@6.46.0_zod@4.4.3__/node_modules/@langchain/openai/dist/utils/client.js:14:11)\n    at file:///Users/shivam/qnify/ai-learning-agent/backend/node_modules/.pnpm/@langchain+openai@1.5.5_@langchain+core@1.2.2_openai@6.46.0_zod@4.4.3__/node_modules/@langchain/openai/dist/chat_models/completions.js:260:11\n    at process.processTicksAndRejections (node:internal/process/task_queues:104:5)\n    at async pRetry (file:///Users/shivam/qnify/ai-learning-agent/backend/node_modules/.pnpm/@langchain+core@1.2.2_openai@6.46.0_zod@4.4.3_/node_modules/@langchain/core/dist/utils/p-retry/index.js:124:19)\n    at async run (/Users/shivam/qnify/ai-learning-agent/backend/node_modules/.pnpm/p-queue@6.6.2/node_modules/p-queue/dist/index.js:163:29)","name":"TimeoutError","pregelTaskId":"52247b7a-9530-5829-9b78-bcfbf9e0671a"},"msg":"Request timed out."} , all other LLM calls are passing.

---

### User — 2026-07-11 17:57:03 UTC

Find the learning path is re-generated, input field is not cleared.

---
